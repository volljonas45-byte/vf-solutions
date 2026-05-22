"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Start" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/projekte", label: "Projekte" },
  { href: "/kompetenz", label: "Kompetenz" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/97 backdrop-blur-md border-b border-[#E5E7EB]" style={{backdropFilter: "blur(12px)"}}>
      <div className="max-w-7xl mx-auto px-6 h-[60px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/vf-solutions/images/logo-vf.png"
            alt="vf solutions"
            className="h-[36px] w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 text-sm transition-colors duration-150 ${
                  active
                    ? "text-[#1E6FD9] font-medium"
                    : "text-[#4B5563] hover:text-[#0A1628]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/kontakt"
            className="hidden sm:inline-flex items-center bg-[#0A1628] text-white px-4 py-2 text-sm font-medium hover:bg-[#122040] transition-colors"
          >
            Kontakt aufnehmen
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md text-[#4A5568] hover:bg-[#F8F9FB]"
            aria-label="Menü"
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#E2E8F0] px-6 py-4 space-y-1">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2.5 rounded-md text-sm font-medium transition-all ${
                  active
                    ? "bg-[#EEF4FF] text-[#1E6FD9]"
                    : "text-[#4A5568] hover:bg-[#F8F9FB] hover:text-[#0A1628]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-[#E2E8F0]">
            <Link
              href="/kontakt"
              onClick={() => setOpen(false)}
              className="block w-full text-center bg-[#0A1628] text-white px-4 py-2.5 rounded-md text-sm font-medium"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
