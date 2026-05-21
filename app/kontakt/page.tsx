import { CONTACT } from "@/lib/data";

export const metadata = {
  title: "Kontakt | vf solutions",
  description: "Nehmen Sie Kontakt mit vf solutions auf. Volker Freundt, Freiburg im Breisgau — direkt erreichbar.",
};

export default function Kontakt() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0A1628] grid-bg-dark py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1E6FD9] mb-4 block">Kontakt</span>
            <h1 className="text-5xl font-black text-white tracking-tight mb-6">
              Projekt oder Prozessfrage besprechen
            </h1>
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              Ein direkter Austausch klärt meist schnell, ob und wie vf solutions
              ein technisches Vorhaben sinnvoll unterstützen kann.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Kontaktdaten */}
            <div>
              <div className="bg-white border border-[#E2E8F0] rounded-xl p-8 mb-6">
                <div className="flex items-start gap-4 mb-6 pb-6 border-b border-[#E2E8F0]">
                  <div className="w-12 h-12 rounded-lg bg-[#EEF4FF] flex items-center justify-center shrink-0">
                    <span className="text-[#1E6FD9] font-black text-sm">VF</span>
                  </div>
                  <div>
                    <h2 className="font-bold text-[#0A1628]">{CONTACT.name}</h2>
                    <p className="text-[#64748B] text-sm">{CONTACT.person}</p>
                    <div className="mt-1 inline-flex items-center gap-1.5 bg-[#ECFDF5] text-[#059669] text-xs font-medium px-2 py-0.5 rounded-full border border-[#A7F3D0]">
                      <span className="w-1.5 h-1.5 bg-[#059669] rounded-full" />
                      Sofort verfügbar
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-md bg-[#F8F9FB] flex items-center justify-center shrink-0">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M7 1C4.79 1 3 2.79 3 5c0 3 4 8 4 8s4-5 4-8c0-2.21-1.79-4-4-4z" stroke="#64748B" strokeWidth="1.2" fill="none"/>
                        <circle cx="7" cy="5" r="1.2" fill="#64748B"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-[#94A3B8] uppercase tracking-wide mb-0.5">Adresse</p>
                      <p className="text-sm text-[#1A2332]">{CONTACT.address}</p>
                      <p className="text-sm text-[#1A2332]">{CONTACT.city}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-md bg-[#F8F9FB] flex items-center justify-center shrink-0">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M1.5 2.5a.5.5 0 01.5-.5h2.17a.5.5 0 01.49.4l.65 3.26a.5.5 0 01-.27.53l-1.07.53a7.5 7.5 0 003.76 3.76l.53-1.07a.5.5 0 01.53-.27l3.26.65a.5.5 0 01.4.49V11.5a.5.5 0 01-.5.5H10.5A9 9 0 011.5 3.5v-1z" stroke="#64748B" strokeWidth="1.2" fill="none"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-[#94A3B8] uppercase tracking-wide mb-0.5">Telefon</p>
                      <a href={`tel:${CONTACT.telHref}`} className="text-sm text-[#1E6FD9] hover:underline block">{CONTACT.tel}</a>
                      <a href={`tel:${CONTACT.mobilHref}`} className="text-sm text-[#1A2332] hover:text-[#1E6FD9] transition-colors">{CONTACT.mobil} (Mobil)</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-md bg-[#F8F9FB] flex items-center justify-center shrink-0">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <rect x="1.5" y="3" width="11" height="8" rx="1" stroke="#64748B" strokeWidth="1.2" fill="none"/>
                        <path d="M1.5 4l5.5 4L12.5 4" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-[#94A3B8] uppercase tracking-wide mb-0.5">E-Mail</p>
                      <a href={`mailto:${CONTACT.email}`} className="text-sm text-[#1E6FD9] hover:underline">{CONTACT.email}</a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-[#E2E8F0] flex gap-3">
                  <a
                    href={`tel:${CONTACT.telHref}`}
                    className="flex-1 text-center bg-[#0A1628] text-white py-2.5 rounded-md text-sm font-semibold hover:bg-[#122040] transition-colors"
                  >
                    Anrufen
                  </a>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="flex-1 text-center border border-[#E2E8F0] text-[#0A1628] py-2.5 rounded-md text-sm font-medium hover:bg-[#F8F9FB] transition-colors"
                  >
                    E-Mail schreiben
                  </a>
                </div>
              </div>

              {/* Map link */}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address + ', ' + CONTACT.city)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white border border-[#E2E8F0] rounded-xl p-4 hover:border-[#1E6FD9]/40 transition-colors group"
              >
                <div className="w-10 h-10 bg-[#EEF4FF] rounded-lg flex items-center justify-center shrink-0">
                  <svg className="text-[#1E6FD9]" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 1.5C6.24 1.5 4 3.74 4 6.5c0 4.25 5 10 5 10s5-5.75 5-10c0-2.76-2.24-5-5-5z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <circle cx="9" cy="6.5" r="1.5" fill="currentColor"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#0A1628]">Route in Google Maps öffnen</p>
                  <p className="text-xs text-[#94A3B8]">{CONTACT.address}, {CONTACT.city}</p>
                </div>
                <svg className="text-[#94A3B8] group-hover:text-[#1E6FD9] transition-colors" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* Kontaktformular */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-8">
              <h2 className="text-xl font-bold text-[#0A1628] mb-2">Nachricht senden</h2>
              <p className="text-sm text-[#64748B] mb-6">Schildern Sie kurz Ihre Aufgabenstellung — wir melden uns zeitnah.</p>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#4A5568] mb-1.5 uppercase tracking-wide">Name *</label>
                    <input
                      type="text"
                      placeholder="Max Mustermann"
                      className="w-full border border-[#E2E8F0] rounded-md px-3 py-2.5 text-sm text-[#1A2332] placeholder-[#CBD5E0] focus:outline-none focus:ring-2 focus:ring-[#1E6FD9]/20 focus:border-[#1E6FD9] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#4A5568] mb-1.5 uppercase tracking-wide">Unternehmen</label>
                    <input
                      type="text"
                      placeholder="Muster GmbH"
                      className="w-full border border-[#E2E8F0] rounded-md px-3 py-2.5 text-sm text-[#1A2332] placeholder-[#CBD5E0] focus:outline-none focus:ring-2 focus:ring-[#1E6FD9]/20 focus:border-[#1E6FD9] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#4A5568] mb-1.5 uppercase tracking-wide">E-Mail *</label>
                  <input
                    type="email"
                    placeholder="m.mustermann@firma.de"
                    className="w-full border border-[#E2E8F0] rounded-md px-3 py-2.5 text-sm text-[#1A2332] placeholder-[#CBD5E0] focus:outline-none focus:ring-2 focus:ring-[#1E6FD9]/20 focus:border-[#1E6FD9] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#4A5568] mb-1.5 uppercase tracking-wide">Telefon</label>
                  <input
                    type="tel"
                    placeholder="+49 123 456 789"
                    className="w-full border border-[#E2E8F0] rounded-md px-3 py-2.5 text-sm text-[#1A2332] placeholder-[#CBD5E0] focus:outline-none focus:ring-2 focus:ring-[#1E6FD9]/20 focus:border-[#1E6FD9] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#4A5568] mb-1.5 uppercase tracking-wide">Ihre Aufgabenstellung *</label>
                  <textarea
                    rows={5}
                    placeholder="Bitte schildern Sie kurz, womit wir Ihnen helfen können..."
                    className="w-full border border-[#E2E8F0] rounded-md px-3 py-2.5 text-sm text-[#1A2332] placeholder-[#CBD5E0] focus:outline-none focus:ring-2 focus:ring-[#1E6FD9]/20 focus:border-[#1E6FD9] transition-colors resize-none"
                  />
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" id="dsgvo" className="mt-1 accent-[#1E6FD9]" />
                  <label htmlFor="dsgvo" className="text-xs text-[#64748B] leading-relaxed">
                    Ich habe die <a href="/datenschutz" className="text-[#1E6FD9] hover:underline">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zu.
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0A1628] text-white py-3 rounded-md font-semibold text-sm hover:bg-[#122040] transition-colors"
                >
                  Nachricht senden
                </button>
                <p className="text-xs text-[#94A3B8] text-center">
                  Das Formular ist noch nicht aktiv verbunden. Nutzen Sie bitte direkt{" "}
                  <a href={`mailto:${CONTACT.email}`} className="text-[#1E6FD9] hover:underline">
                    {CONTACT.email}
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
