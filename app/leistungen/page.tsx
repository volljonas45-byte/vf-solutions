import Link from "next/link";
import { LEISTUNGEN, USPS } from "@/lib/data";

export const metadata = {
  title: "Leistungen | vf solutions",
  description: "CAD/PDM/ERP-Beratung, SystemeinfÃ¼hrung, Anwendungsentwicklung, Migration und Schulung fÃ¼r den Maschinenbau.",
};

export default function Leistungen() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0A1628] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1E6FD9] mb-4 block">Leistungen</span>
            <h1 className="text-5xl font-black text-white tracking-tight mb-6">
              Beratung, Umsetzung und Stabilisierung aus einer Hand
            </h1>
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              Der Fokus liegt auf tragfÃ¤higen Prozessen, klarer Systemlogik und realistischer Umsetzung
              im laufenden technischen Betrieb â€” ohne signifikante StÃ¶rung des TagesgeschÃ¤fts.
            </p>
          </div>
        </div>
      </section>

      {/* LEISTUNGEN GRID */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LEISTUNGEN.map((l) => (
              <article
                key={l.number}
                className="bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl p-7 card-hover group"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono font-bold text-[#C8A96E] bg-[#C8A96E]/10 px-2.5 py-1 rounded">{l.number}</span>
                  <span className="tech-badge">{l.tag}</span>
                </div>
                <h2 className="text-lg font-bold text-[#0A1628] mb-3 leading-tight">{l.title}</h2>
                <p className="text-sm text-[#4A5568] leading-relaxed mb-5">{l.desc}</p>
                <ul className="space-y-2">
                  {l.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-[#64748B]">
                      <svg className="mt-0.5 shrink-0 text-[#1E6FD9]" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 7l3.5 3.5 5.5-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* KOMMERZIELLE USPs */}
      <section className="section bg-[#F8F9FB] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1E6FD9] mb-3 block">Kommerzielle Aspekte</span>
            <h2 className="text-3xl font-black text-[#0A1628] tracking-tight">Faire, transparente Konditionen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Overhead-freie Honorarkalkulation", desc: "Keine versteckten Gemeinkosten, keine aufgeblÃ¤hten TagessÃ¤tze. Sie zahlen fÃ¼r tatsÃ¤chliche Leistung." },
              { title: "All-in-TagessÃ¤tze oder Festpreise", desc: "Klare Abrechnung ohne Ãœberraschungen â€” generell all-in-TagessÃ¤tze oder projektbezogene Festpreise." },
              { title: "Flexible RahmenvertrÃ¤ge", desc: "Flexibel handhabbare RahmenvertrÃ¤ge nach Bedarf â€” angepasst an Ihr Projekt und Ihre Organisation." },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-[#E2E8F0] rounded-xl p-6 text-center">
                <div className="w-10 h-10 bg-[#EEF4FF] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="text-[#1E6FD9]" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm3.5 5.5l-4 4-2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-bold text-[#0A1628] mb-2">{item.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A1628] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-black text-white mb-4">Wie sieht Ihre Aufgabenstellung aus?</h2>
          <p className="text-[#64748B] mb-8">Ein direktes GesprÃ¤ch klÃ¤rt meist schnell, wie vf solutions helfen kann.</p>
          <Link href="/kontakt" className="inline-flex items-center gap-2 bg-[#1E6FD9] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#1a5fc4] transition-colors">
            Jetzt Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}

