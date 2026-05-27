import { notFound } from "next/navigation";
import { CONTACT, LOCALES, type Locale } from "@/lib/data";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return {
    title: locale === "en" ? "Imprint | vf solutions" : "Impressum | vf solutions",
  };
}

export default async function Impressum({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!LOCALES.includes(rawLocale as Locale)) notFound();
  const locale = rawLocale as Locale;
  const de = locale === "de";

  return (
    <section className="section bg-[#F8F9FB]">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-black text-[#0A1628] mb-8">
          {de ? "Impressum" : "Imprint"}
        </h1>
        <div className="bg-white border border-[#E2E8F0] rounded-xl p-8 space-y-6 text-sm text-[#4A5568] leading-relaxed">
          <div>
            <h2 className="font-bold text-[#0A1628] mb-2">
              {de ? "Angaben gemäß § 5 TMG" : "Information pursuant to § 5 TMG (German Telemedia Act)"}
            </h2>
            <p>{CONTACT.name}</p>
            <p>{CONTACT.person}</p>
            <p>{CONTACT.address}</p>
            <p>{CONTACT.city}</p>
          </div>
          <div>
            <h2 className="font-bold text-[#0A1628] mb-2">{de ? "Kontakt" : "Contact"}</h2>
            <p>{de ? "Telefon" : "Phone"}: {CONTACT.tel}</p>
            <p>{de ? "Mobil" : "Mobile"}: {CONTACT.mobil}</p>
            <p>
              {de ? "E-Mail" : "Email"}:{" "}
              <a href={`mailto:${CONTACT.email}`} className="text-[#1E6FD9] hover:underline">
                {CONTACT.email}
              </a>
            </p>
          </div>
          <div>
            <h2 className="font-bold text-[#0A1628] mb-2">
              {de ? "Verantwortlich für den Inhalt" : "Responsible for content"}
            </h2>
            <p>{CONTACT.person}</p>
            <p>{CONTACT.address}, {CONTACT.city}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
