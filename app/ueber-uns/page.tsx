import Link from "next/link";
import { KARRIERE, PARTNER, CONTACT } from "@/lib/data";
import PartnerCard from "@/components/PartnerCard";

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

      {/* KARRIERE */}
      <section className="section bg-[#0A1628] border-y border-white/8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1E6FD9] mb-3 block">Werdegang</span>
            <h2 className="text-3xl font-black text-white mb-3">35 Jahre — 6 Stationen</h2>
            <p className="text-[#475569] text-sm max-w-lg">
              Von der Erstausbildung über industrielle Praxis bis zur unabhängigen Beratung.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {KARRIERE.map((item, i) => {
              const isCurrent = i === KARRIERE.length - 1;
              const ghostYear = item.year.replace(/\s/g, "").replace(/[^0-9]/g, "").slice(-4);
              return (
                <div
                  key={i}
                  className={`relative rounded-xl p-6 overflow-hidden transition-all group ${
                    isCurrent
                      ? "bg-[#1A2F4E] border border-[#C8A96E]/40 hover:border-[#C8A96E]/70"
                      : "bg-[#0D1F3C] border border-white/8 hover:border-[#1E6FD9]/30"
                  }`}
                >
                  {/* Ghost year background */}
                  <div
                    className={`absolute -bottom-3 -right-2 text-8xl font-black select-none pointer-events-none leading-none ${
                      isCurrent ? "text-[#C8A96E]/10" : "text-[#1E6FD9]/8"
                    }`}
                  >
                    {ghostYear}
                  </div>
                  {/* Left accent bar */}
                  <div
                    className={`absolute left-0 top-4 bottom-4 w-[3px] rounded-r ${
                      isCurrent ? "bg-[#C8A96E]" : "bg-[#1E6FD9]/40 group-hover:bg-[#1E6FD9]/80"
                    } transition-colors`}
                  />

                  <div className="relative pl-2">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] font-mono font-bold tracking-widest ${isCurrent ? "text-[#C8A96E]" : "text-[#1E6FD9]"}`}>
                        {item.year}
                      </span>
                      {isCurrent && (
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-[#C8A96E] bg-[#C8A96E]/10 border border-[#C8A96E]/25 px-2 py-0.5 rounded-full">
                          <span className="w-1.5 h-1.5 bg-[#C8A96E] rounded-full animate-pulse" />
                          Heute
                        </span>
                      )}
                    </div>
                    <h3 className={`text-sm font-bold leading-tight mb-1 ${isCurrent ? "text-white" : "text-[#94A3B8] group-hover:text-white"} transition-colors`}>
                      {item.title}
                    </h3>
                    {item.desc && (
                      <p className={`text-xs leading-relaxed ${isCurrent ? "text-[#64748B]" : "text-[#475569]"}`}>
                        {item.desc}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARTNER */}
      <section className="section bg-[#0D1F3C] border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div>
              <span className="block w-8 h-px bg-[#1E6FD9] mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">Partner-Netzwerk</h2>
              <p className="text-[#475569] text-sm leading-relaxed">
                Erfolgreiche Projekte stemmt man selten im Alleingang. Ein Kooperationsverbund
                erweitert das Know-How und sichert Kapazitätsreserven.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {PARTNER.map((p) => (
                <PartnerCard key={p.name} {...p} />
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
