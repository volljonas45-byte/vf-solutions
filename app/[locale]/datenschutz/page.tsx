import { notFound } from "next/navigation";
import { CONTACT, LOCALES, type Locale } from "@/lib/data";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return {
    title: locale === "en" ? "Privacy policy | vf solutions" : "Datenschutz | vf solutions",
  };
}

export default async function Datenschutz({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!LOCALES.includes(rawLocale as Locale)) notFound();
  const locale = rawLocale as Locale;
  const de = locale === "de";

  const content = de
    ? [
        {
          h: "1. Verantwortlicher",
          jsx: (
            <>
              <p>{CONTACT.name} · {CONTACT.person} · {CONTACT.address} · {CONTACT.city}</p>
              <p>
                E-Mail:{" "}
                <a href={`mailto:${CONTACT.email}`} className="text-[#1E6FD9] hover:underline">
                  {CONTACT.email}
                </a>
              </p>
            </>
          ),
        },
        {
          h: "2. Hosting und Server-Logfiles",
          jsx: (
            <>
              <p>
                Diese Website wird gehostet bei der IONOS SE, Elgendorfer Straße 57, 56410 Montabaur.
                Mit dem Anbieter besteht ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO. Die
                Daten werden auf Servern innerhalb der Europäischen Union verarbeitet.
              </p>
              <p className="mt-2">
                Beim Aufruf der Website erhebt der Hoster automatisch Server-Logfiles: IP-Adresse,
                Datum und Uhrzeit des Zugriffs, aufgerufene Seite, übertragene Datenmenge, Browsertyp
                und Betriebssystem. Diese Daten dienen ausschließlich dem technisch fehlerfreien
                Betrieb und der Sicherheit der Website. Rechtsgrundlage ist unser berechtigtes
                Interesse nach Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </>
          ),
        },
        {
          h: "3. Kontaktformular",
          jsx: (
            <>
              <p>
                Wenn Sie uns über das Kontaktformular schreiben, verarbeiten wir die von Ihnen
                angegebenen Daten (Name, E-Mail-Adresse sowie optional Unternehmen, Telefonnummer,
                gewünschte Leistung und Ihre Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage.
              </p>
              <p className="mt-2">
                Die Übermittlung erfolgt verschlüsselt an unseren eigenen Server. Es kommt{" "}
                <strong>kein externer Formular-Dienstleister</strong> zum Einsatz; Ihre Daten werden
                nicht an Dritte weitergegeben. Rechtsgrundlage ist Ihre Einwilligung nach Art. 6
                Abs. 1 lit. a DSGVO sowie Art. 6 Abs. 1 lit. b DSGVO bei Anfragen zur Anbahnung eines
                Vertragsverhältnisses. Ihre Einwilligung können Sie jederzeit formlos widerrufen. Wir
                löschen die Daten, sobald sie zur Bearbeitung nicht mehr erforderlich sind und keine
                gesetzlichen Aufbewahrungspflichten entgegenstehen.
              </p>
            </>
          ),
        },
        {
          h: "4. Kontaktaufnahme per E-Mail oder Telefon",
          jsx: (
            <p>
              Bei Kontaktaufnahme per E-Mail oder Telefon werden die übermittelten Daten ausschließlich
              zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.
            </p>
          ),
        },
        {
          h: "5. Keine Cookies, kein Tracking",
          jsx: (
            <p>
              Diese Website setzt keine Cookies, verwendet keine Analyse- oder Tracking-Dienste und
              bindet keine Inhalte von Drittanbietern ein. Die verwendeten Schriftarten sind lokal auf
              unserem Server hinterlegt — beim Seitenaufruf wird keine Verbindung zu externen
              Schriftanbietern hergestellt und Ihre IP-Adresse nicht dorthin übertragen.
            </p>
          ),
        },
        {
          h: "6. SSL-Verschlüsselung",
          jsx: (
            <p>
              Diese Website nutzt aus Sicherheitsgründen eine SSL/TLS-Verschlüsselung. Sie erkennen
              eine verschlüsselte Verbindung an dem Präfix &bdquo;https://&ldquo; in der Adresszeile Ihres
              Browsers. Daten, die Sie an uns übermitteln, können dadurch nicht von Dritten
              mitgelesen werden.
            </p>
          ),
        },
        {
          h: "7. Ihre Rechte",
          jsx: (
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung
              Ihrer personenbezogenen Daten sowie das Recht auf Datenübertragbarkeit und Widerspruch.
              Darüber hinaus steht Ihnen ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu,
              für uns ist das der Landesbeauftragte für den Datenschutz und die Informationsfreiheit
              Baden-Württemberg.
            </p>
          ),
        },
      ]
    : [
        {
          h: "1. Data controller",
          jsx: (
            <>
              <p>{CONTACT.name} · {CONTACT.person} · {CONTACT.address} · {CONTACT.city}</p>
              <p>
                Email:{" "}
                <a href={`mailto:${CONTACT.email}`} className="text-[#1E6FD9] hover:underline">
                  {CONTACT.email}
                </a>
              </p>
            </>
          ),
        },
        {
          h: "2. Hosting and server log files",
          jsx: (
            <>
              <p>
                This website is hosted by IONOS SE, Elgendorfer Straße 57, 56410 Montabaur, Germany. A
                data processing agreement pursuant to Art. 28 GDPR is in place with the provider. Data
                is processed on servers located within the European Union.
              </p>
              <p className="mt-2">
                When you visit the site, the host automatically records server log files: IP address,
                date and time of access, page requested, volume of data transferred, browser type and
                operating system. This data is used solely to ensure the technical operation and
                security of the website. The legal basis is our legitimate interest under Art. 6(1)(f)
                GDPR.
              </p>
            </>
          ),
        },
        {
          h: "3. Contact form",
          jsx: (
            <>
              <p>
                If you write to us using the contact form, we process the details you provide (name,
                email address and, optionally, company, phone number, service of interest and your
                message) solely in order to handle your enquiry.
              </p>
              <p className="mt-2">
                Submissions are transmitted encrypted to our own server.{" "}
                <strong>No external form service</strong> is involved, and your data is not passed on
                to third parties. The legal basis is your consent under Art. 6(1)(a) GDPR and, for
                enquiries relating to a prospective contract, Art. 6(1)(b) GDPR. You may withdraw your
                consent at any time. We erase the data as soon as it is no longer required and no
                statutory retention obligations apply.
              </p>
            </>
          ),
        },
        {
          h: "4. Contact by email or phone",
          jsx: (
            <p>
              When you contact us by email or phone, the data you provide is used solely to process your
              enquiry and is not passed on to third parties.
            </p>
          ),
        },
        {
          h: "5. No cookies, no tracking",
          jsx: (
            <p>
              This website sets no cookies, uses no analytics or tracking services and embeds no
              third-party content. The fonts used are stored locally on our server — no connection to
              external font providers is established when you visit the site, and your IP address is
              not transmitted to them.
            </p>
          ),
        },
        {
          h: "6. SSL encryption",
          jsx: (
            <p>
              For security reasons this website uses SSL/TLS encryption. You can recognise an encrypted
              connection by the &ldquo;https://&rdquo; prefix in your browser&rsquo;s address bar. Data you send to us
              cannot be read by third parties.
            </p>
          ),
        },
        {
          h: "7. Your rights",
          jsx: (
            <p>
              You have the right to access, rectify, erase and restrict the processing of your personal
              data, as well as the right to data portability and objection. You also have the right to
              lodge a complaint with a data protection supervisory authority; ours is the State
              Commissioner for Data Protection and Freedom of Information of Baden-Württemberg.
            </p>
          ),
        },
      ];

  return (
    <section className="section bg-[#F8F9FB]">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-black text-[#0A1628] mb-8">
          {de ? "Datenschutzerklärung" : "Privacy policy"}
        </h1>
        <div className="bg-white border border-[#E2E8F0] rounded-xl p-8 space-y-6 text-sm text-[#4A5568] leading-relaxed">
          {content.map((c) => (
            <div key={c.h}>
              <h2 className="font-bold text-[#0A1628] mb-2">{c.h}</h2>
              {c.jsx}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
