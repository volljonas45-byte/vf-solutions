import Link from "next/link";
import { KARRIERE, PARTNER, CONTACT } from "@/lib/data";

export const metadata = {
  title: "Über vf solutions | Volker Freundt",
  description: "Dipl.-Ing. (FH) Volker Freundt — 35 Jahre Erfahrung in CAD/PDM/ERP-Projekten. Inhaber von vf solutions seit 2002.",
};

export default function UeberUns() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#0A1628] min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/vf-solutions/images/hero-ueber.jpg"
            alt=""
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 photo-overlay-dark" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 w-full py-24">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-7">
              <span className="block w-8 h-px bg-[#1E6FD9]" />
              <span className="text-[#1E6FD9] text-xs font-semibold tracking-[0.18em] uppercase">Über vf solutions</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Unabhängige Beratung für stabile technische Prozesse
            </h1>
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              vf solutions steht für system- und anbieterneutrale Beratung im
              CAD/PDM/ERP-Umfeld. Im Mittelpunkt stehen stabile Prozesse und
              eine realistische Umsetzung im laufenden Betrieb.
            </p>
          </div>
        </div>
      </section>

      {/* PERSON */}
      <section className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="py-16 lg:pr-20 border-b lg:border-b-0 lg:border-r border-[#E5E7EB]">
              <span className="rule-blue" />
              <div className="text-xs font-mono text-[#9CA3AF] mb-1">Dipl.-Ing. (FH)</div>
              <h2 className="text-3xl font-bold text-[#0A1628] mb-1">Volker Freundt</h2>
              <p className="text-[#6B7280] text-sm mb-8">Inhaber · Berater · Projektleiter</p>

              <div className="space-y-0 mb-8">
                {[
                  { label: "Ausbildung", value: "Maschinenbau (FH)" },
                  { label: "Erfahrung", value: "35+ Jahre CAD/PDM/ERP" },
                  { label: "Projekte", value: "180+ abgeschlossen" },
                  { label: "Einsatz", value: "Deutschland / Österreich / Schweiz" },
                  { label: "Sprachen", value: "Deutsch, Englisch" },
                  { label: "Verfügbarkeit", value: "Sofort" },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between items-baseline border-b border-[#F3F4F6] py-3 last:border-0">
                    <span className="text-sm text-[#9CA3AF]">{row.label}</span>
                    <span className="text-sm font-medium text-[#111827]">{row.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={`tel:${CONTACT.telHref}`}
                  className="bg-[#0A1628] text-white px-5 py-2.5 text-sm font-medium hover:bg-[#122040] transition-colors"
                >
                  {CONTACT.tel}
                </a>
                <Link
                  href="/kontakt"
                  className="border border-[#E5E7EB] text-[#374151] px-5 py-2.5 text-sm font-medium hover:bg-[#F7F8FA] transition-colors"
                >
                  Kontakt aufnehmen
                </Link>
              </div>
            </div>

            {/* Placeholder */}
            <div className="hidden lg:flex relative min-h-[480px] items-center justify-center bg-[#F7F8FA]">
              <div className="text-center select-none">
                <div className="w-14 h-14 border-2 border-dashed border-[#D1D5DB] rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <rect x="2" y="2" width="18" height="18" rx="2" stroke="#C4C9D4" strokeWidth="1.5"/>
                    <circle cx="8" cy="8" r="2" stroke="#C4C9D4" strokeWidth="1.5"/>
                    <path d="M2 15l5-4 4 3 3-3 6 5" stroke="#C4C9D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-[#C4C9D4] text-xs tracking-wide">Foto folgt</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHIE */}
      <section className="section bg-[#F7F8FA] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="rule-blue" />
            <h2 className="text-2xl font-bold text-[#0A1628] mb-6">Der Anwalt der Kunden</h2>
            <div className="space-y-4 text-[#374151] leading-relaxed">
              <p>
                <strong className="text-[#0A1628]">vf solutions versteht sich allein als Anwalt der Interessen seiner Kunden</strong> — unabhängig von Softwareherstellern, deren Vertriebsinteressen oder Partnerprogrammen.
              </p>
              <p>
                Das bedeutet: Systemauswahl nach den tatsächlichen Anforderungen des Kunden, nicht nach Marktanteilen oder Provisionen. Beratung, die unbequeme Wahrheiten ausspricht, wenn nötig.
              </p>
              <p>
                vf solutions ist zu <strong className="text-[#0A1628]">100% system- und anbieterneutral</strong> aufgestellt. Diese Unabhängigkeit ist kein Marketing-Versprechen — sie ist das Geschäftsmodell.
              </p>
              <p>
                Projekte laufen <strong className="text-[#0A1628]">ohne signifikante Störung des Tagesbetriebs</strong>. Die Projektdauer ist kurz, die Ergebnisse sind <strong className="text-[#0A1628]">„controlling-fest"</strong> — messbar und nachweisbar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KARRIERE TIMELINE */}
      <section className="section bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div>
              <span className="rule-blue" />
              <h2 className="text-2xl font-bold text-[#0A1628] mb-4">35 Jahre Erfahrung</h2>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                Der Werdegang von Volker Freundt — von der Erstausbildung über industrielle Praxis bis zur unabhängigen Beratung.
              </p>
            </div>

            <div className="lg:col-span-2">
              <div className="relative">
                <div className="absolute top-0 bottom-0 w-px bg-[#E5E7EB]" style={{left: "72px"}} />
                <div className="space-y-0">
                  {KARRIERE.map((item, i) => (
                    <div key={i} className="flex gap-6 pb-7 last:pb-0 relative">
                      <div className="w-[72px] shrink-0 text-right pt-0.5">
                        <span className="text-xs font-mono font-semibold text-[#1E6FD9]">{item.year}</span>
                      </div>
                      <div className="relative pl-5">
                        <div className="absolute top-[5px] w-2.5 h-2.5 rounded-full border-2 border-[#1E6FD9] bg-white" style={{left: "-5px"}} />
                        <h3 className="text-sm font-semibold text-[#111827] leading-tight">{item.title}</h3>
                        {item.desc && <p className="text-xs text-[#6B7280] mt-0.5 leading-relaxed">{item.desc}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER */}
      <section className="section bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div>
              <span className="rule-blue" />
              <h2 className="text-2xl font-bold text-[#0A1628] mb-4">Partner-Netzwerk</h2>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                Erfolgreiche Projekte stemmt man selten im Alleingang. Ein Kooperationsverbund
                erweitert das Know-How und sichert Kapazitätsreserven.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {PARTNER.map((p) => (
                <div key={p.name} className="bg-white border border-[#E5E7EB] p-6">
                  <div className="text-xl font-bold text-[#0A1628] mb-2">{p.name}</div>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A1628] py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-white mb-1">Direkt ansprechen.</h2>
            <p className="text-[#64748B] text-sm">Volker Freundt ist Ihr direkter Ansprechpartner — kein Vertrieb, kein Umweg.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a href={`tel:${CONTACT.telHref}`} className="border border-white/20 text-[#94A3B8] hover:text-white px-5 py-2.5 text-sm transition-colors">
              {CONTACT.tel}
            </a>
            <Link href="/kontakt" className="bg-[#1E6FD9] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[#1a5fc4] transition-colors">
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
