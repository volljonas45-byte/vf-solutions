import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LOCALES, type Locale } from "@/lib/data";
import { t } from "@/lib/i18n";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) return {};
  const tr = t(locale as Locale);
  return {
    title: tr.home.title,
    description: tr.home.description,
    openGraph: {
      title: tr.home.title,
      description: tr.home.description,
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) notFound();

  return (
    <>
      <Navigation locale={locale as Locale} />
      <main className="pt-16 flex-1">{children}</main>
      <Footer locale={locale as Locale} />
    </>
  );
}
