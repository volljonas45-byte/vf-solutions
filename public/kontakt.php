<?php
/**
 * Mail-Endpunkt fuer das Kontaktformular.
 *
 * Liegt in public/ und wird vom statischen Export nach out/kontakt.php kopiert,
 * landet also per FTP direkt neben index.html auf dem IONOS-Webspace.
 *
 * Kein Drittanbieter, keine externe API: Die Formulardaten verlassen den
 * Server des Kunden nicht. Deshalb ist im Datenschutz-Generator die Frage
 * nach "Diensten fuer Online-Umfragen und Online-Formulare" mit NEIN
 * zu beantworten.
 *
 * WICHTIG (IONOS): $MAIL_FROM muss ein bei IONOS eingerichtetes Postfach der
 * eigenen Domain sein. Mails mit fremder Absenderadresse werden von IONOS
 * abgewiesen oder landen im Spam. Postfach anlegen unter
 * Mein Konto > E-Mail > Adresse anlegen.
 */

$MAIL_TO   = 'freundt@vfsolutions.de';
$MAIL_FROM = 'website@vfsolutions.de';
$SITE      = 'vfsolutions.de';

header('Content-Type: application/json; charset=utf-8');

function respond($ok, $message = '')
{
    echo json_encode(array('success' => $ok, 'message' => $message));
    exit;
}

/** Entfernt CR/LF, damit niemand ueber ein Feld eigene Mail-Header einschleust. */
function clean($value)
{
    return trim(str_replace(array("\r", "\n", "%0a", "%0d"), ' ', (string) $value));
}

/** Betreff RFC-2047-kodieren, sonst zerlegt es Umlaute. */
function encodeSubject($subject)
{
    return '=?UTF-8?B?' . base64_encode($subject) . '?=';
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    respond(false, 'Method not allowed');
}

// Der Client schickt JSON; klassische Formular-Posts werden trotzdem akzeptiert.
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

// Honeypot: Bots fuellen jedes Feld aus, Menschen sehen dieses hier nicht.
// Wir melden Erfolg, damit der Bot nicht merkt, dass er aussortiert wurde.
if (!empty($data['website'])) {
    respond(true);
}

$name    = clean(isset($data['name']) ? $data['name'] : '');
$email   = clean(isset($data['email']) ? $data['email'] : '');
$company = clean(isset($data['company']) ? $data['company'] : '');
$phone   = clean(isset($data['phone']) ? $data['phone'] : '');
$service = clean(isset($data['service']) ? $data['service'] : '');
$locale  = (isset($data['locale']) && $data['locale'] === 'en') ? 'en' : 'de';
$message = trim(isset($data['message']) ? (string) $data['message'] : '');
$privacy = !empty($data['privacy']);

if ($name === '' || $email === '' || $message === '' || !$privacy) {
    http_response_code(422);
    respond(false, 'Missing required fields');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    respond(false, 'Invalid email');
}

if (mb_strlen($message) > 5000 || mb_strlen($name) > 200) {
    http_response_code(422);
    respond(false, 'Input too long');
}

$labels = $locale === 'en'
    ? array('name' => 'Name', 'company' => 'Company', 'email' => 'Email',
            'phone' => 'Phone', 'service' => 'Service', 'message' => 'Message')
    : array('name' => 'Name', 'company' => 'Unternehmen', 'email' => 'E-Mail',
            'phone' => 'Telefon', 'service' => 'Leistung', 'message' => 'Nachricht');

$subject = $locale === 'en'
    ? 'New enquiry via ' . $SITE . ' - ' . $name
    : 'Neue Anfrage ueber ' . $SITE . ' - ' . $name;

$body = implode("\n", array(
    $labels['name'] . ': ' . $name,
    $labels['company'] . ': ' . ($company !== '' ? $company : '-'),
    $labels['email'] . ': ' . $email,
    $labels['phone'] . ': ' . ($phone !== '' ? $phone : '-'),
    $labels['service'] . ': ' . ($service !== '' ? $service : '-'),
    '',
    $labels['message'] . ':',
    $message,
    '',
    '--',
    'Gesendet ueber das Kontaktformular auf ' . $SITE,
    'Zeitpunkt: ' . date('d.m.Y H:i:s'),
));

$headers = implode("\r\n", array(
    'From: ' . $SITE . ' <' . $MAIL_FROM . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'X-Mailer: PHP/' . phpversion(),
));

$sent = @mail($MAIL_TO, encodeSubject($subject), $body, $headers, '-f' . $MAIL_FROM);

if (!$sent) {
    http_response_code(500);
    respond(false, 'Mail could not be sent');
}

respond(true);
