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
    title: locale === "en" ? "Privacy policy | vf solutions" : "Datenschutz | vf solutions",
  };
}

export default async function Datenschutz({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!LOCALES.includes(rawLocale as Locale)) notFound();
  const locale = rawLocale as Locale;
  const de = locale === "de";

  const content = de
    ? [
        {
          h: "1. Verantwortlicher",
          jsx: (
            <>
              <p>{CONTACT.name} · {CONTACT.person} · {CONTACT.address} · {CONTACT.city}</p>
              <p>
                E-Mail:{" "}
                <a href={`mailto:${CONTACT.email}`} className="text-[#1E6FD9] hover:underline">
                  {CONTACT.email}
                </a>
              </p>
            </>
          ),
        },
        {
          h: "2. Erhobene Daten",
          jsx: (
            <p>
              Diese Website erhebt keine personenbezogenen Daten über automatisierte Verfahren. Eine
              Nutzung der Website ist grundsätzlich ohne Angabe personenbezogener Daten möglich.
            </p>
          ),
        },
        {
          h: "3. Kontaktaufnahme",
          jsx: (
            <p>
              Bei Kontaktaufnahme per E-Mail oder Telefon werden die übermittelten Daten ausschließlich
              zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.
            </p>
          ),
        },
        {
          h: "4. Ihre Rechte",
          jsx: (
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung
              Ihrer personenbezogenen Daten sowie das Recht auf Datenübertragbarkeit und Widerspruch.
            </p>
          ),
        },
        {
          h: "5. Hosting",
          jsx: (
            <p>
              Diese Website wird über GitHub Pages (GitHub Inc., 88 Colin P Kelly Jr St, San Francisco,
              CA 94107, USA) gehostet. Weitere Informationen finden Sie in der Datenschutzerklärung von
              GitHub.
            </p>
          ),
        },
      ]
    : [
        {
          h: "1. Data controller",
          jsx: (
            <>
              <p>{CONTACT.name} · {CONTACT.person} · {CONTACT.address} · {CONTACT.city}</p>
              <p>
                Email:{" "}
                <a href={`mailto:${CONTACT.email}`} className="text-[#1E6FD9] hover:underline">
                  {CONTACT.email}
                </a>
              </p>
            </>
          ),
        },
        {
          h: "2. Data collected",
          jsx: (
            <p>
              This website does not collect personal data through automated means. The site can generally
              be used without disclosing any personal data.
            </p>
          ),
        },
        {
          h: "3. Contact",
          jsx: (
            <p>
              When you contact us by email or phone, the data you provide is used solely to process your
              enquiry and is not passed on to third parties.
            </p>
          ),
        },
        {
          h: "4. Your rights",
          jsx: (
            <p>
              You have the right to access, rectify, erase and restrict the processing of your personal
              data, as well as the right to data portability and objection.
            </p>
          ),
        },
        {
          h: "5. Hosting",
          jsx: (
            <p>
              This website is hosted on GitHub Pages (GitHub Inc., 88 Colin P Kelly Jr St, San Francisco,
              CA 94107, USA). Please refer to GitHub's privacy policy for further information.
            </p>
          ),
        },
      ];

  return (
    <section className="section bg-[#F8F9FB]">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-black text-[#0A1628] mb-8">
          {de ? "Datenschutzerklärung" : "Privacy policy"}
        </h1>
        <div className="bg-white border border-[#E2E8F0] rounded-xl p-8 space-y-6 text-sm text-[#4A5568] leading-relaxed">
          {content.map((c) => (
            <div key={c.h}>
              <h2 className="font-bold text-[#0A1628] mb-2">{c.h}</h2>
              {c.jsx}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
