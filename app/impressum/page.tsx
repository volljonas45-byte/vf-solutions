import { CONTACT } from "@/lib/data";

export const metadata = { title: "Impressum | vf solutions" };

export default function Impressum() {
  return (
    <section className="section bg-[#F8F9FB]">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-black text-[#0A1628] mb-8">Impressum</h1>
        <div className="bg-white border border-[#E2E8F0] rounded-xl p-8 space-y-6 text-sm text-[#4A5568] leading-relaxed">
          <div>
            <h2 className="font-bold text-[#0A1628] mb-2">Angaben gemäß § 5 TMG</h2>
            <p>{CONTACT.name}</p>
            <p>{CONTACT.person}</p>
            <p>{CONTACT.address}</p>
            <p>{CONTACT.city}</p>
          </div>
          <div>
            <h2 className="font-bold text-[#0A1628] mb-2">Kontakt</h2>
            <p>Telefon: {CONTACT.tel}</p>
            <p>Mobil: {CONTACT.mobil}</p>
            <p>Fax: {CONTACT.fax}</p>
            <p>E-Mail: <a href={`mailto:${CONTACT.email}`} className="text-[#1E6FD9] hover:underline">{CONTACT.email}</a></p>
          </div>
          <div>
            <h2 className="font-bold text-[#0A1628] mb-2">Verantwortlich für den Inhalt</h2>
            <p>{CONTACT.person}</p>
            <p>{CONTACT.address}, {CONTACT.city}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
