import Link from "next/link";
import { CONTACT } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] grid-bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-black text-white tracking-tight">vf</span>
              <span className="text-2xl font-light text-[#1E6FD9] tracking-tight ml-0.5">solutions</span>
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed max-w-xs">
              CAD/PDM/ERP-Beratung für Unternehmen des Maschinen- und Anlagenbaus.
              Unabhängig, erfahren, direkt.
            </p>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-[#64748B] text-xs">
                Seit 1989 aktiv · 180+ Projekte · 43+ Referenzkunden
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#64748B] mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Start" },
                { href: "/leistungen", label: "Leistungen" },
                { href: "/projekte", label: "Projekte & Referenzen" },
                { href: "/kompetenz", label: "Kompetenz" },
                { href: "/ueber-uns", label: "Über vf solutions" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#94A3B8] hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#64748B] mb-4">Kontakt</h3>
            <address className="not-italic space-y-2">
              <p className="text-[#94A3B8] text-sm">{CONTACT.person}</p>
              <p className="text-[#94A3B8] text-sm">{CONTACT.address}</p>
              <p className="text-[#94A3B8] text-sm">{CONTACT.city}</p>
              <div className="pt-2 space-y-1">
                <a href={`tel:${CONTACT.telHref}`} className="block text-[#94A3B8] hover:text-white text-sm transition-colors">
                  {CONTACT.tel}
                </a>
                <a href={`mailto:${CONTACT.email}`} className="block text-[#1E6FD9] hover:text-[#3B82F6] text-sm transition-colors">
                  {CONTACT.email}
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#475569] text-xs">
            © 2026 vf solutions · {CONTACT.person}
          </p>
          <div className="flex items-center gap-4">
            <Link href="/impressum" className="text-[#475569] hover:text-[#94A3B8] text-xs transition-colors">
              Impressum
            </Link>
            <span className="text-[#334155]">·</span>
            <Link href="/datenschutz" className="text-[#475569] hover:text-[#94A3B8] text-xs transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
