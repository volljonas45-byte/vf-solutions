import Link from "next/link";
import { PROJEKTBEREICHE, REFERENZKUNDEN } from "@/lib/data";

export const metadata = {
  title: "Projekte & Referenzkunden | vf solutions",
  description: "180+ erfolgreich realisierte Projekte im CAD/PDM/ERP-Umfeld. 43+ Referenzkunden aus dem deutschen Maschinenbau.",
};

export default function Projekte() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0A1628] grid-bg-dark py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1E6FD9] mb-4 block">Projekte & Referenzen</span>
            <h1 className="text-5xl font-black text-white tracking-tight mb-6">
              180+ Projekte.<br />Seit 1989.
            </h1>
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              vf solutions hat seit 1989 weit über 180 Projekte in den Bereichen Anwendungsentwicklung,
              CAD/PDM-Einführung, -Migration und Sachnummerung erfolgreich realisiert.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 mt-12">
            {[
              { value: "180+", label: "Projekte gesamt" },
              { value: "30+", label: "CAD-Systemwechsel" },
              { value: "1989", label: "Erstes Projekt" },
              { value: "43+", label: "Referenzkunden" },
            ].map((s) => (
              <div key={s.value} className="bg-white/5 border border-white/10 rounded-lg px-6 py-4">
                <div className="text-3xl font-black text-white">{s.value}</div>
                <div className="text-xs text-[#64748B] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJEKTBEREICHE */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1E6FD9] mb-3 block">Projektbereiche</span>
            <h2 className="text-3xl font-black text-[#0A1628] tracking-tight">Typische Projektschwerpunkte</h2>
            <p className="text-[#4A5568] mt-3 max-w-xl mx-auto">
              vf solutions unterstützt Unternehmen dort, wo CAD-, PDM- und ERP-Prozesse stabiler,
              nachvollziehbarer und besser integrierbar werden sollen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJEKTBEREICHE.map((p) => (
              <article key={p.title} className="border border-[#E2E8F0] rounded-xl overflow-hidden card-hover">
                <div className="bg-[#0A1628] px-6 py-4 flex items-center justify-between">
                  <h2 className="text-base font-bold text-white">{p.title}</h2>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono bg-[#1E6FD9]/20 text-[#93C5FD] border border-[#1E6FD9]/30 px-2 py-0.5 rounded">{p.tag}</span>
                    <span className="text-xs text-[#C8A96E] font-medium">{p.count}</span>
                  </div>
                </div>
                <div className="p-6 bg-[#F8F9FB]">
                  <p className="text-sm text-[#4A5568] mb-5 leading-relaxed italic border-l-2 border-[#E2E8F0] pl-3">
                    {p.desc}
                  </p>
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wide text-[#64748B] mb-1.5 block">Vorgehen</span>
                      <p className="text-sm text-[#1A2332] leading-relaxed">{p.vorgehen}</p>
                    </div>
                    <div className="border-t border-[#E2E8F0] pt-4">
                      <span className="text-xs font-semibold uppercase tracking-wide text-[#1E6FD9] mb-1.5 block">Nutzen</span>
                      <p className="text-sm text-[#1A2332] leading-relaxed">{p.nutzen}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REFERENZKUNDEN */}
      <section id="referenzkunden" className="section bg-[#0A1628] grid-bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1E6FD9] mb-3 block">Referenzkunden</span>
            <h2 className="text-3xl font-black text-white tracking-tight mb-4">
              43+ namhafte Unternehmen
            </h2>
            <p className="text-[#64748B] max-w-lg mx-auto">
              Aus Maschinenbau, Anlagenbau, Medizintechnik, Automobilzulieferung und weiteren Branchen —
              überwiegend mittelständische Unternehmen in Deutschland, Österreich und der Schweiz.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {REFERENZKUNDEN.map((name, i) => (
              <div
                key={name}
                className="bg-[#0D1F3C] border border-white/10 rounded-lg px-4 py-3 flex items-center gap-3 hover:bg-[#122040] transition-colors group"
              >
                <div className="w-6 h-6 rounded bg-[#1E6FD9]/10 border border-[#1E6FD9]/20 flex items-center justify-center shrink-0">
                  <span className="text-[#1E6FD9] text-xs font-mono font-bold">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <span className="text-[#94A3B8] text-sm font-medium group-hover:text-white transition-colors leading-tight">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1E6FD9] py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-black text-white mb-2">Werden Sie der nächste Referenzkunde.</h2>
            <p className="text-blue-200">Über 35 Jahre Erfahrung — sofort verfügbar für Ihr Projekt.</p>
          </div>
          <Link href="/kontakt" className="shrink-0 bg-white text-[#1E6FD9] px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors">
            Jetzt Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
