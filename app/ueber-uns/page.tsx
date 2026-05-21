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
      <section className="bg-[#0A1628] grid-bg-dark py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#1E6FD9] mb-4 block">Über vf solutions</span>
              <h1 className="text-5xl font-black text-white tracking-tight mb-6">
                Unabhängige Beratung für stabile technische Prozesse
              </h1>
              <p className="text-[#94A3B8] text-lg leading-relaxed">
                vf solutions steht für unabhängige, system- und anbieterneutrale Beratung
                im CAD/PDM/ERP-Umfeld. Im Mittelpunkt stehen stabile Prozesse, verständliche
                Lösungen und eine realistische Umsetzung im laufenden Betrieb.
              </p>
            </div>

            {/* Profile card */}
            <div className="bg-[#0D1F3C] border border-white/10 rounded-xl p-8">
              <div className="flex items-start gap-5 mb-6 pb-6 border-b border-white/10">
                <div className="w-16 h-16 rounded-xl bg-[#1E6FD9]/20 border border-[#1E6FD9]/30 flex items-center justify-center shrink-0">
                  <span className="text-2xl font-black text-[#1E6FD9]">VF</span>
                </div>
                <div>
                  <div className="text-xs font-mono text-[#1E6FD9] mb-1">Dipl.-Ing. (FH)</div>
                  <h2 className="text-xl font-black text-white">Volker Freundt</h2>
                  <p className="text-[#64748B] text-sm mt-0.5">Inhaber · Berater · Projektleiter</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Ausbildung", value: "Maschinenbau (FH)" },
                  { label: "Erfahrung", value: "35+ Jahre CAD/PDM/ERP" },
                  { label: "Projekte", value: "180+ abgeschlossen" },
                  { label: "Einsatz", value: "D / A / CH" },
                  { label: "Sprachen", value: "Deutsch, Englisch" },
                  { label: "Verfügbar", value: "Sofort" },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between items-center">
                    <span className="text-[#475569] text-sm">{row.label}</span>
                    <span className="text-[#94A3B8] text-sm font-medium">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHIE */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1E6FD9] mb-4 block text-center">Philosophie</span>
            <h2 className="text-3xl font-black text-[#0A1628] tracking-tight text-center mb-10">
              Der Anwalt der Kunden
            </h2>
            <div className="space-y-6">
              <div className="bg-[#F8F9FB] border-l-4 border-[#1E6FD9] rounded-r-xl p-6">
                <p className="text-[#1A2332] leading-relaxed">
                  <strong className="text-[#0A1628]">vf solutions versteht sich allein als Anwalt der Interessen seiner Kunden</strong> — unabhängig von Softwareherstellern, deren Vertriebsinteressen oder Partnerprogrammen.
                </p>
              </div>
              <p className="text-[#4A5568] leading-relaxed">
                Das bedeutet: Systemauswahl nach den tatsächlichen Anforderungen des Kunden, nicht nach Marktanteilen oder Provisionen. Beratung, die unbequeme Wahrheiten ausspricht, wenn nötig.
              </p>
              <p className="text-[#4A5568] leading-relaxed">
                vf solutions ist zu <strong className="text-[#0A1628]">100% system- und anbieterneutral</strong> aufgestellt. Diese Unabhängigkeit ist kein Marketing-Versprechen — sie ist das Geschäftsmodell.
              </p>
              <p className="text-[#4A5568] leading-relaxed">
                Projekte laufen <strong className="text-[#0A1628]">ohne signifikante Störung des Tagesbetriebs</strong>. Die Projektdauer ist kurz, die Ergebnisse sind <strong className="text-[#0A1628]">„controlling-fest"</strong> — messbar und nachweisbar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KARRIERE TIMELINE */}
      <section className="section bg-[#F8F9FB] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1E6FD9] mb-3 block">Werdegang</span>
            <h2 className="text-3xl font-black text-[#0A1628] tracking-tight">35 Jahre Erfahrung</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[88px] top-0 bottom-0 w-px bg-[#E2E8F0]" />

              <div className="space-y-0">
                {KARRIERE.map((item, i) => (
                  <div key={i} className="flex gap-6 relative pb-8 last:pb-0">
                    <div className="w-[88px] shrink-0 text-right">
                      <span className="text-xs font-mono font-bold text-[#1E6FD9] bg-[#EEF4FF] px-2 py-0.5 rounded whitespace-nowrap">{item.year}</span>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full border-2 border-[#1E6FD9] bg-white" />
                      <h3 className="font-bold text-[#0A1628] text-sm leading-tight mt-0.5">{item.title}</h3>
                      {item.desc && <p className="text-sm text-[#64748B] mt-0.5">{item.desc}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER */}
      <section className="section bg-white border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1E6FD9] mb-3 block">Kooperationsverbund</span>
            <h2 className="text-3xl font-black text-[#0A1628] tracking-tight mb-4">Partner-Netzwerk</h2>
            <p className="text-[#4A5568] max-w-xl mx-auto">
              Erfolgreiche Projekte stemmt man selten im Alleingang. Ein Kooperationsverbund
              fördert die Ausweitung von Know-How und stellt Kapazitätsreserven sicher.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {PARTNER.map((p) => (
              <div key={p.name} className="bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl p-6 text-center card-hover">
                <div className="text-2xl font-black text-[#0A1628] mb-3">{p.name}</div>
                <p className="text-sm text-[#64748B] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A1628] py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-black text-white mb-2">Direkt ansprechen.</h2>
            <p className="text-[#64748B]">Volker Freundt ist Ihr direkter Ansprechpartner — kein Vertrieb, kein Umweg.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a href={`tel:${CONTACT.telHref}`} className="bg-white/10 border border-white/20 text-white px-5 py-2.5 rounded-md font-medium hover:bg-white/20 transition-colors text-sm">
              {CONTACT.tel}
            </a>
            <Link href="/kontakt" className="bg-[#1E6FD9] text-white px-5 py-2.5 rounded-md font-semibold hover:bg-[#1a5fc4] transition-colors text-sm">
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
