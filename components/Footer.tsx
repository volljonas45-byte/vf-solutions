import Link from "next/link";
import { CONTACT, type Locale } from "@/lib/data";
import { t } from "@/lib/i18n";
import { asset } from "@/lib/basePath";

export default function Footer({ locale }: { locale: Locale }) {
  const tr = t(locale);

  const navLinks = [
    { href: `/${locale}`, label: tr.nav.home },
    { href: `/${locale}/leistungen`, label: tr.nav.leistungen },
    { href: `/${locale}/projekte`, label: tr.footer.projectsRefs },
    { href: `/${locale}/kompetenz`, label: tr.nav.kompetenz },
    { href: `/${locale}/ueber-uns`, label: tr.footer.aboutVf },
    { href: `/${locale}/kontakt`, label: tr.nav.kontakt },
  ];

  return (
    <footer className="bg-[#0A1628] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img
                src={asset("/images/logo-vf.png")}
                alt="vf solutions"
                className="h-[34px] w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed max-w-xs">
              {tr.footer.tagline}
            </p>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-[#64748B] text-xs">{tr.common.since1989}</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#64748B] mb-4">
              {tr.footer.navHeading}
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
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

          {/* Contact (no street, no fax — minimized) */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#64748B] mb-4">
              {tr.footer.contactHeading}
            </h3>
            <address className="not-italic space-y-2">
              <p className="text-[#94A3B8] text-sm">{CONTACT.person}</p>
              <div className="pt-2 space-y-1">
                <a
                  href={`tel:${CONTACT.telHref}`}
                  className="block text-[#94A3B8] hover:text-white text-sm transition-colors"
                >
                  {CONTACT.tel}
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="block text-[#1E6FD9] hover:text-[#3B82F6] text-sm transition-colors"
                >
                  {CONTACT.email}
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#475569] text-xs">
            {tr.footer.copyright} · {CONTACT.person}
          </p>
          <div className="flex items-center gap-4">
            <Link
              href={`/${locale}/impressum`}
              className="text-[#475569] hover:text-[#94A3B8] text-xs transition-colors"
            >
              {tr.footer.impressum}
            </Link>
            <span className="text-[#334155]">·</span>
            <Link
              href={`/${locale}/datenschutz`}
              className="text-[#475569] hover:text-[#94A3B8] text-xs transition-colors"
            >
              {tr.footer.datenschutz}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
