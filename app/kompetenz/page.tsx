import Link from "next/link";
import {
  CAD_SYSTEME, PDM_SYSTEME, ERP_SYSTEME,
  PROGRAMMIERUNG, API_SYSTEME, DATENBANKEN, CONTACT
} from "@/lib/data";

export const metadata = {
  title: "Kompetenz | vf solutions",
  description: "Technische Fachkenntnisse: CAD, PDM, ERP, API-Programmierung, Datenbanken. SolidWorks, SAP PLM, MaxxDB, CATIA V5 und viele mehr.",
};

const GRUPPEN = [
  {
    title: "CAD-Systeme",
    tag: "CAD",
    count: CAD_SYSTEME.length,
    items: CAD_SYSTEME,
    color: "text-[#1E6FD9] bg-[#EEF4FF] border-[#BFDBFE]",
  },
  {
    title: "PDM-Systeme",
    tag: "PDM",
    count: PDM_SYSTEME.length,
    items: PDM_SYSTEME,
    color: "text-[#7C3AED] bg-[#F5F3FF] border-[#DDD6FE]",
  },
  {
    title: "ERP-Systeme",
    tag: "ERP",
    count: ERP_SYSTEME.length,
    items: ERP_SYSTEME,
    color: "text-[#0891B2] bg-[#ECFEFF] border-[#A5F3FC]",
  },
  {
    title: "Programmiersprachen",
    tag: "DEV",
    count: PROGRAMMIERUNG.length,
    items: PROGRAMMIERUNG,
    color: "text-[#D97706] bg-[#FFFBEB] border-[#FDE68A]",
  },
  {
    title: "API-Programmierung",
    tag: "API",
    count: API_SYSTEME.length,
    items: API_SYSTEME,
    color: "text-[#059669] bg-[#ECFDF5] border-[#A7F3D0]",
  },
  {
    title: "Datenbanken",
    tag: "DB",
    count: DATENBANKEN.length,
    items: DATENBANKEN,
    color: "text-[#DC2626] bg-[#FEF2F2] border-[#FECACA]",
  },
];

export default function Kompetenz() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0A1628] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1E6FD9] mb-4 block">Technische Kompetenz</span>
            <h1 className="text-5xl font-black text-white tracking-tight mb-6">
              Systemtiefe aus 35 Jahren Praxis
            </h1>
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              Kenntnisse in Ã¼ber 40 Softwaresystemen â€” CAD, PDM, ERP, API-Programmierung und Datenbanken.
              Kein theoretisches Wissen, sondern nachgewiesene Projekterfahrung.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-10">
            {["SolidWorks", "SAP PLM", "CATIA V5", "MaxxDB", "SAP R/3", "SolidEdge", "Inventor"].map((s) => (
              <span key={s} className="font-mono text-sm bg-[#1E6FD9]/10 text-[#93C5FD] border border-[#1E6FD9]/20 px-3 py-1.5 rounded-md">
                {s}
              </span>
            ))}
            <span className="font-mono text-sm bg-white/5 text-[#475569] border border-white/10 px-3 py-1.5 rounded-md">
              + viele mehr
            </span>
          </div>
        </div>
      </section>

      {/* SYSTEME GRUPPEN */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {GRUPPEN.map((g) => (
              <div key={g.title} className="bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl p-6">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-base font-bold text-[#0A1628]">{g.title}</h2>
                  <div className="flex items-center gap-2">
                    <span className={`tech-badge ${g.color}`}>{g.tag}</span>
                    <span className="text-xs text-[#94A3B8] font-mono">{g.count}x</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-mono font-medium border ${g.color}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EINSATZGEBIET */}
      <section className="section bg-[#F8F9FB] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
            {[
              { icon: "â—ˆ", label: "Einsatzgebiet", value: "Deutschland Â· Ã–sterreich Â· Schweiz" },
              { icon: "â—‰", label: "VerfÃ¼gbarkeit", value: "3â€“5 Tage pro Woche fulltime" },
              { icon: "â—Ž", label: "Starttermin", value: "Sofort verfÃ¼gbar" },
            ].map((item) => (
              <div key={item.label} className="bg-white border border-[#E2E8F0] rounded-xl p-6">
                <div className="text-3xl text-[#1E6FD9] mb-3">{item.icon}</div>
                <div className="text-xs text-[#94A3B8] uppercase tracking-widest mb-1.5">{item.label}</div>
                <div className="text-base font-bold text-[#0A1628]">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A1628] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-black text-white mb-4">Systeme kennen ist eine Sache â€” Projekte umsetzen eine andere.</h2>
          <p className="text-[#64748B] mb-8 max-w-xl mx-auto">
            180+ abgeschlossene Projekte zeigen, was aus technischem Wissen in der Praxis entsteht.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/projekte" className="bg-white/10 border border-white/20 text-white px-5 py-2.5 rounded-md font-medium hover:bg-white/20 transition-colors text-sm">
              Projekte ansehen
            </Link>
            <Link href="/kontakt" className="bg-[#1E6FD9] text-white px-5 py-2.5 rounded-md font-semibold hover:bg-[#1a5fc4] transition-colors text-sm">
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

