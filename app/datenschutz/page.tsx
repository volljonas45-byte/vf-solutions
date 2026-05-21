import { CONTACT } from "@/lib/data";

export const metadata = { title: "Datenschutz | vf solutions" };

export default function Datenschutz() {
  return (
    <section className="section bg-[#F8F9FB]">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-black text-[#0A1628] mb-8">Datenschutzerklärung</h1>
        <div className="bg-white border border-[#E2E8F0] rounded-xl p-8 space-y-6 text-sm text-[#4A5568] leading-relaxed">
          <div>
            <h2 className="font-bold text-[#0A1628] mb-2">1. Verantwortlicher</h2>
            <p>{CONTACT.name} · {CONTACT.person} · {CONTACT.address} · {CONTACT.city}</p>
            <p>E-Mail: <a href={`mailto:${CONTACT.email}`} className="text-[#1E6FD9] hover:underline">{CONTACT.email}</a></p>
          </div>
          <div>
            <h2 className="font-bold text-[#0A1628] mb-2">2. Erhobene Daten</h2>
            <p>Diese Website erhebt keine personenbezogenen Daten über automatisierte Verfahren. Eine Nutzung der Website ist grundsätzlich ohne Angabe personenbezogener Daten möglich.</p>
          </div>
          <div>
            <h2 className="font-bold text-[#0A1628] mb-2">3. Kontaktaufnahme</h2>
            <p>Bei Kontaktaufnahme per E-Mail oder Telefon werden die übermittelten Daten ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.</p>
          </div>
          <div>
            <h2 className="font-bold text-[#0A1628] mb-2">4. Ihre Rechte</h2>
            <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie das Recht auf Datenübertragbarkeit und Widerspruch.</p>
          </div>
          <div>
            <h2 className="font-bold text-[#0A1628] mb-2">5. Hosting</h2>
            <p>Diese Website wird über GitHub Pages (GitHub Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA) gehostet. Weitere Informationen finden Sie in der Datenschutzerklärung von GitHub.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
