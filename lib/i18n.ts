import type { Locale } from "./data";

export type { Locale } from "./data";
export { LOCALES, DEFAULT_LOCALE } from "./data";

export const T = {
  de: {
    // Navigation
    nav: {
      home: "Start",
      leistungen: "Leistungen",
      projekte: "Projekte",
      kompetenz: "Kompetenz",
      ueberUns: "Über uns",
      kontakt: "Kontakt",
      cta: "Kontakt aufnehmen",
      menu: "Menü",
      languageDe: "DE",
      languageEn: "EN",
    },

    // Common
    common: {
      ctaTalk: "Projekt besprechen",
      ctaServices: "Leistungen ansehen",
      ctaMore: "Mehr über vf solutions",
      ctaAllServices: "Alle Leistungen ansehen",
      ctaContact: "Kontakt aufnehmen",
      ctaContactNow: "Jetzt Kontakt aufnehmen",
      ctaAllRefs: "Alle 45 ansehen",
      ctaViewProjects: "Projekte ansehen",
      since1989: "Seit 1989 aktiv · 200+ Projekte · 45 Referenzkunden",
      photoFollows: "Foto folgt",
      consultingPhotoAlt: "Zirkel auf einer technischen Konstruktionszeichnung",
      eyebrowConsulting: "Unabhängige technische Beratung · seit 1989",
    },

    // Footer
    footer: {
      tagline: "CAD- und PDM-Beratung für Unternehmen des Maschinen- und Anlagenbaus. Unabhängig, erfahren, direkt.",
      navHeading: "Navigation",
      contactHeading: "Kontakt",
      impressum: "Impressum",
      datenschutz: "Datenschutz",
      copyright: "© 2026 vf solutions",
      projectsRefs: "Projekte & Referenzen",
      aboutVf: "Über vf solutions",
    },

    // Home
    home: {
      title: "vf solutions | CAD- und PDM-Beratung & Migration",
      description: "Über 35 Jahre Erfahrung in CAD- und PDM-Projekten für den Maschinen- und Anlagenbau. Schwerpunkt CAD/PDM-Migration. 200+ Projekte, 45 Referenzkunden. 100% anbieterneutral.",
      heroHeadlineA: "CAD, PDM und ERP —",
      heroHeadlineB: "sicher migriert, sauber vernetzt.",
      heroLead:
        "Seit 1989 überführt vf solutions gewachsene CAD-, PDM- und ERP-Datenbestände zuverlässig in neue Systeme — anbieterneutral beraten, controllingfest umgesetzt und ohne Stillstand im laufenden Betrieb.",
      philoTitleA: "100 % unabhängig.",
      philoTitleB: "100 % kundenorientiert.",
      philoP1:
        "vf solutions steht seit über 20 Jahren für erfolgreiche Projekte im CAD/PDM/ERP-Umfeld von Konstruktion, Entwicklung und Organisation in Unternehmen des Maschinen- und Anlagenbaus.",
      philoP2:
        "vf solutions ist zu 100 % system- und anbieterneutral aufgestellt und somit unabhängig von Herstellern und deren Produkten. vf solutions versteht sich allein als Anwalt der Interessen der Kunden und steht diesen mit Beratung, Entwicklung und controllingfester Realisierung zur Seite.",
      philoP3Pre: "Sämtliche Projekte laufen ohne signifikante Störung des Tagesbetriebs. Die Ergebnisse sind ",
      philoP3Strong: "controlling-fest",
      philoP3Post: " — messbar, nachweisbar und praxistauglich.",
      servicesTitleA: "Beratung, Umsetzung",
      servicesTitleB: "und Stabilisierung",
      servicesLead:
        "Von der Analyse bestehender Systemlandschaften bis zur langfristigen Stabilisierung im laufenden Betrieb — mit klarem Schwerpunkt auf CAD/PDM-Migration.",
      refsTitle: "45 Referenzkunden",
      refsLead: "Namhafte Unternehmen des deutschen Maschinen- und Anlagenbaus — von Mittelstand bis Konzern.",
      ctaTitle: "Wie sieht Ihre Aufgabenstellung aus?",
      ctaLead: "Ein direktes Gespräch klärt meist schnell, ob und wie vf solutions helfen kann.",
    },

    // Leistungen
    leistungen: {
      title: "Leistungen | vf solutions",
      description: "CAD/PDM-Migration als Schwerpunkt, ergänzt um Beratung, Systemeinführung, Anwendungsentwicklung und Klassifizierung für den Maschinenbau.",
      eyebrow: "Leistungen",
      heroTitle: "Beratung, Umsetzung und Stabilisierung aus einer Hand",
      heroLead:
        "Der Schwerpunkt liegt mittlerweile auf CAD/PDM — ergänzt um tragfähige Prozesse und klare Systemlogik. Konzipiert und umgesetzt mitten im laufenden Betrieb, sodass das Tagesgeschäft ungestört weiterläuft.",
      focusBadge: "Schwerpunkt",
      uspEyebrow: "Kommerzielle Aspekte",
      uspTitle: "Faire, transparente Konditionen",
      usp: [
        { title: "Overhead-freie Honorarkalkulation", desc: "Keine versteckten Gemeinkosten, keine aufgeblähten Tagessätze. Sie zahlen für tatsächliche Leistung." },
        { title: "All-in-Tagessätze oder Festpreise", desc: "Klare Abrechnung ohne Überraschungen — generell all-in-Tagessätze oder projektbezogene Festpreise." },
        { title: "Flexible Rahmenverträge", desc: "Flexibel handhabbare Rahmenverträge nach Bedarf — angepasst an Ihr Projekt und Ihre Organisation." },
      ],
      ctaTitle: "Wie sieht Ihre Aufgabenstellung aus?",
      ctaLead: "Ein direktes Gespräch klärt meist schnell, wie vf solutions helfen kann.",
    },

    // Projekte
    projekte: {
      title: "Projekte & Referenzkunden | vf solutions",
      description: "200+ erfolgreich realisierte Projekte. Schwerpunkt CAD/PDM-Migration. 45 Referenzkunden aus dem deutschen Maschinenbau.",
      eyebrow: "Projekte & Referenzen",
      heroTitleA: "200+ Projekte.",
      heroTitleB: "Seit 1989.",
      heroLead:
        "vf solutions hat seit 1989 weit über 200 Projekte erfolgreich realisiert — mit klarem Schwerpunkt auf CAD/PDM-Migration sowie ergänzend Anwendungsentwicklung, Sachnummerung und CAD/PDM-Einführungen.",
      stats: [
        { value: "200+", label: "Projekte gesamt" },
        { value: "50+", label: "CAD-Systemwechsel" },
        { value: "1989", label: "Erstes Projekt" },
        { value: "45", label: "Referenzkunden" },
      ],
      areasEyebrow: "Projektschwerpunkte",
      areasTitle: "Systemwechsel, Entwicklung & Klassifizierung",
      areasLead:
        "Die Schwerpunkte der Arbeit von vf solutions — von der Migration gewachsener CAD- und PDM-Datenbestände über kundenspezifische Anwendungsentwicklung bis zu klassifizierungsbasierenden Sachnummernsystemen.",
      vorgehen: "Vorgehen",
      nutzen: "Nutzen",
      focusBadge: "Schwerpunkt",
      refsEyebrow: "Referenzkunden",
      refsTitle: "45 namhafte Unternehmen",
      refsLead:
        "Aus Maschinenbau, Anlagenbau, Medizintechnik, Automobilzulieferung und weiteren Branchen — überwiegend mittelständische Unternehmen in Deutschland, Österreich und der Schweiz.",
      ctaTitle: "Werden Sie der nächste Referenzkunde.",
      ctaLead: "Über 35 Jahre Erfahrung — kurzfristig nach Vereinbarung für Ihr Projekt.",
    },

    // Kompetenz
    kompetenz: {
      title: "Kompetenz | vf solutions",
      description: "Technische Fachkenntnisse: CAD, PDM, API-Programmierung, Datenbanken. SolidWorks, SAP PLM, MaxxDB, CATIA V5 und viele mehr.",
      eyebrow: "Technische Kompetenz",
      heroTitle: "Systemtiefe aus 35 Jahren Praxis",
      heroLead:
        "Kenntnisse in über 35 Softwaresystemen — CAD, PDM, API-Programmierung und Datenbanken. Kein theoretisches Wissen, sondern nachgewiesene Projekterfahrung.",
      morePill: "+ viele mehr",
      cadTitle: "CAD-Systeme",
      pdmTitle: "PDM-Systeme",
      progTitle: "Programmiersprachen",
      apiTitle: "API-Programmierung",
      dbTitle: "Datenbanken",
      overviewEyebrow: "Auf einen Blick",
      overviewTitle: "Technologien nach Kategorie",
      einsatzgebiet: "Einsatzgebiet",
      einsatzgebietValue: "Deutschland / Österreich / Schweiz",
      verfuegbarkeit: "Verfügbarkeit",
      verfuegbarkeitValue: "Kurzfristig nach Vereinbarung",
      starttermin: "Starttermin",
      starttermin_value: "Kurzfristig nach Vereinbarung",
      ctaTitle: "Systeme kennen ist eine Sache — Projekte umsetzen eine andere.",
      ctaLead: "200+ abgeschlossene Projekte zeigen, was aus technischem Wissen in der Praxis entsteht.",
    },

    // Über uns
    ueberUns: {
      title: "Über vf solutions | Volker Freundt",
      description: "Dipl.-Ing. (FH) Volker Freundt — 35 Jahre Erfahrung in CAD- und PDM-Projekten. Inhaber von vf solutions seit 2002.",
      eyebrow: "Über vf solutions",
      heroTitle: "Unabhängige Beratung für stabile technische Prozesse",
      heroLead:
        "vf solutions steht für system- und anbieterneutrale Beratung im CAD- und PDM-Umfeld. Im Mittelpunkt stehen stabile Prozesse und eine realistische Umsetzung im laufenden Betrieb.",
      role: "Inhaber · Berater · Projektleiter",
      facts: [
        { label: "Ausbildung", value: "Maschinenbau (FH)" },
        { label: "Erfahrung", value: "35+ Jahre CAD/PDM" },
        { label: "Projekte", value: "200+ abgeschlossen" },
        { label: "Einsatz", value: "Deutschland / Österreich / Schweiz" },
        { label: "Sprachen", value: "Deutsch, Englisch" },
        { label: "Verfügbarkeit", value: "Kurzfristig nach Vereinbarung" },
      ],
      philoTitle: "Der Anwalt der Kunden",
      philoP1Strong: "vf solutions versteht sich allein als Anwalt der Interessen seiner Kunden",
      philoP1Post: " — unabhängig von Softwareherstellern, deren Vertriebsinteressen oder Partnerprogrammen.",
      philoP2: "Das bedeutet: Systemauswahl nach den tatsächlichen Anforderungen des Kunden, nicht nach Marktanteilen oder Provisionen. Beratung, die unbequeme Wahrheiten ausspricht, wenn nötig.",
      philoP3Pre: "vf solutions ist zu ",
      philoP3Strong: "100 % system- und anbieterneutral",
      philoP3Post: " aufgestellt. Diese Unabhängigkeit ist kein Marketing-Versprechen — sie ist das Geschäftsmodell.",
      philoP4Pre: "Projekte laufen ",
      philoP4Strong1: "ohne signifikante Störung des Tagesbetriebs",
      philoP4Mid: ". Die Projektdauer ist kurz, die Ergebnisse sind ",
      philoP4Strong2: "„controlling-fest“",
      philoP4Post: " — messbar und nachweisbar.",
      careerEyebrow: "Werdegang",
      careerTitle: "35 Jahre — 6 Stationen",
      careerLead: "Von der Erstausbildung über industrielle Praxis bis zur unabhängigen Beratung.",
      today: "Heute",
      partnerTitle: "Partner-Netzwerk",
      partnerLead: "Erfolgreiche Projekte stemmt man selten im Alleingang. Ein Kooperationsverbund erweitert das Know-How und sichert Kapazitätsreserven.",
      ctaTitle: "Direkt ansprechen.",
      ctaLead: "Volker Freundt ist Ihr direkter Ansprechpartner — kein Vertrieb, kein Umweg.",
    },

    // Kontakt
    kontakt: {
      title: "Kontakt | vf solutions",
      description: "Nehmen Sie Kontakt mit vf solutions auf. Volker Freundt — direkt erreichbar.",
      eyebrow: "Kontakt",
      heroTitle: "Projekt oder Prozessfrage besprechen",
      heroLead:
        "Ein direkter Austausch klärt meist schnell, ob und wie vf solutions ein technisches Vorhaben sinnvoll unterstützen kann.",
      availability: "Kurzfristig nach Vereinbarung",
      addressLabel: "Standort",
      phoneLabel: "Telefon",
      phoneMobil: "Mobil",
      emailLabel: "E-Mail",
      callBtn: "Anrufen",
      mailBtn: "E-Mail schreiben",
      mapsLink: "Route in Google Maps öffnen",
      formTitle: "Nachricht senden",
      formLead: "Schildern Sie kurz Ihre Aufgabenstellung — wir melden uns zeitnah.",
      formName: "Name",
      formCompany: "Unternehmen",
      formEmail: "E-Mail",
      formPhone: "Telefon",
      formMessage: "Ihre Aufgabenstellung",
      formPlaceholderMessage: "Bitte schildern Sie kurz, womit wir Ihnen helfen können …",
      formPrivacyPre: "Ich habe die ",
      formPrivacyLink: "Datenschutzerklärung",
      formPrivacyPost: " gelesen und stimme der Verarbeitung meiner Daten zu.",
      formSubmit: "Nachricht senden",
      formSending: "Wird gesendet …",
      formSuccess: "Vielen Dank! Ihre Nachricht ist angekommen — wir melden uns zeitnah.",
      formError: "Das Senden hat leider nicht geklappt. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an",
      formRequired: "Bitte füllen Sie Name, E-Mail und Nachricht aus und bestätigen Sie den Datenschutz.",
      formHint: "Lieber direkt? Schreiben Sie uns an",
    },
  },

  en: {
    nav: {
      home: "Home",
      leistungen: "Services",
      projekte: "Projects",
      kompetenz: "Expertise",
      ueberUns: "About",
      kontakt: "Contact",
      cta: "Get in touch",
      menu: "Menu",
      languageDe: "DE",
      languageEn: "EN",
    },

    common: {
      ctaTalk: "Discuss a project",
      ctaServices: "View services",
      ctaMore: "More about vf solutions",
      ctaAllServices: "View all services",
      ctaContact: "Get in touch",
      ctaContactNow: "Get in touch now",
      ctaAllRefs: "View all 45",
      ctaViewProjects: "View projects",
      since1989: "Active since 1989 · 200+ projects · 45 reference clients",
      photoFollows: "Photo to follow",
      consultingPhotoAlt: "Compass on a technical engineering drawing",
      eyebrowConsulting: "Independent technical consulting · since 1989",
    },

    footer: {
      tagline: "CAD and PDM consulting for companies in mechanical and plant engineering. Independent, experienced, direct.",
      navHeading: "Navigation",
      contactHeading: "Contact",
      impressum: "Imprint",
      datenschutz: "Privacy",
      copyright: "© 2026 vf solutions",
      projectsRefs: "Projects & references",
      aboutVf: "About vf solutions",
    },

    home: {
      title: "vf solutions | CAD & PDM consulting and migration",
      description: "Over 35 years of experience in CAD and PDM projects for mechanical and plant engineering. Core focus: CAD/PDM migration. 200+ projects, 45 reference clients. 100% vendor-neutral.",
      heroHeadlineA: "CAD, PDM and ERP —",
      heroHeadlineB: "safely migrated, cleanly connected.",
      heroLead:
        "Since 1989, vf solutions has reliably migrated grown CAD, PDM and ERP data into new systems — vendor-neutral advice, controllable delivery and no standstill in day-to-day operations.",
      philoTitleA: "100% independent.",
      philoTitleB: "100% client-focused.",
      philoP1:
        "For over 20 years, vf solutions has stood for successful projects across the CAD/PDM/ERP environment — in design, development and organization at mechanical and plant engineering companies.",
      philoP2:
        "vf solutions is positioned 100% system- and vendor-neutral, and therefore independent of manufacturers and their products. vf solutions acts solely as the advocate of its clients' interests, supporting them with consulting, development and controllable delivery.",
      philoP3Pre: "Every project runs without disrupting daily operations. The outcomes are ",
      philoP3Strong: "controllable",
      philoP3Post: " — measurable, demonstrable and fit for practice.",
      servicesTitleA: "Consulting, delivery",
      servicesTitleB: "and stabilization",
      servicesLead:
        "From analysis of existing system landscapes to long-term stabilization in daily operation — with a clear focus on CAD/PDM migration.",
      refsTitle: "45 reference clients",
      refsLead: "Renowned companies from German mechanical and plant engineering — from SMEs to corporate groups.",
      ctaTitle: "What's your challenge?",
      ctaLead: "A direct conversation usually clarifies quickly whether and how vf solutions can help.",
    },

    leistungen: {
      title: "Services | vf solutions",
      description: "CAD/PDM migration as the core focus, complemented by consulting, system rollout, custom development and classification for mechanical engineering.",
      eyebrow: "Services",
      heroTitle: "Consulting, delivery and stabilization from a single source",
      heroLead:
        "The core focus is now on CAD/PDM — complemented by viable processes and clear system logic. Designed and delivered right in the middle of ongoing operations, so day-to-day business keeps running undisturbed.",
      focusBadge: "Core focus",
      uspEyebrow: "Commercial principles",
      uspTitle: "Fair, transparent terms",
      usp: [
        { title: "Overhead-free fees", desc: "No hidden overhead, no inflated day rates. You pay for actual work delivered." },
        { title: "All-in day rates or fixed prices", desc: "Clear billing without surprises — generally all-in day rates or project-based fixed prices." },
        { title: "Flexible framework agreements", desc: "Flexible framework agreements tailored to your project and organization." },
      ],
      ctaTitle: "What's your challenge?",
      ctaLead: "A direct conversation usually clarifies quickly how vf solutions can help.",
    },

    projekte: {
      title: "Projects & reference clients | vf solutions",
      description: "200+ successfully delivered projects. Core focus: CAD/PDM migration. 45 reference clients from German mechanical engineering.",
      eyebrow: "Projects & references",
      heroTitleA: "200+ projects.",
      heroTitleB: "Since 1989.",
      heroLead:
        "Since 1989, vf solutions has successfully delivered well over 200 projects — with a clear focus on CAD/PDM migration, complemented by custom development, classification and CAD/PDM rollouts.",
      stats: [
        { value: "200+", label: "Projects in total" },
        { value: "50+", label: "CAD system changes" },
        { value: "1989", label: "First project" },
        { value: "45", label: "Reference clients" },
      ],
      areasEyebrow: "Project focus",
      areasTitle: "System migration, development & classification",
      areasLead:
        "The focus areas of vf solutions' work — from migrating grown CAD and PDM data and customer-specific application development to classification-based part numbering systems.",
      vorgehen: "Approach",
      nutzen: "Benefit",
      focusBadge: "Core focus",
      refsEyebrow: "Reference clients",
      refsTitle: "45 renowned companies",
      refsLead:
        "From mechanical engineering, plant engineering, medical technology, automotive supply and other industries — predominantly mid-sized companies in Germany, Austria and Switzerland.",
      ctaTitle: "Become the next reference client.",
      ctaLead: "Over 35 years of experience — available on short notice for your project.",
    },

    kompetenz: {
      title: "Expertise | vf solutions",
      description: "Technical expertise: CAD, PDM, API programming, databases. SolidWorks, SAP PLM, MaxxDB, CATIA V5 and many more.",
      eyebrow: "Technical expertise",
      heroTitle: "System depth from 35 years of practice",
      heroLead:
        "Hands-on knowledge of more than 35 software systems — CAD, PDM, API programming and databases. Not theoretical knowledge, but proven project experience.",
      morePill: "+ many more",
      cadTitle: "CAD systems",
      pdmTitle: "PDM systems",
      progTitle: "Programming languages",
      apiTitle: "API programming",
      dbTitle: "Databases",
      overviewEyebrow: "At a glance",
      overviewTitle: "Technologies by category",
      einsatzgebiet: "Engagement area",
      einsatzgebietValue: "Germany / Austria / Switzerland",
      verfuegbarkeit: "Availability",
      verfuegbarkeitValue: "On short notice by arrangement",
      starttermin: "Start date",
      starttermin_value: "On short notice by arrangement",
      ctaTitle: "Knowing systems is one thing — delivering projects is another.",
      ctaLead: "200+ completed projects show what technical knowledge can produce in practice.",
    },

    ueberUns: {
      title: "About vf solutions | Volker Freundt",
      description: "Dipl.-Ing. (FH) Volker Freundt — 35 years of experience in CAD and PDM projects. Owner of vf solutions since 2002.",
      eyebrow: "About vf solutions",
      heroTitle: "Independent consulting for stable technical processes",
      heroLead:
        "vf solutions stands for system- and vendor-neutral consulting in the CAD and PDM space. The focus is on stable processes and realistic delivery during ongoing operations.",
      role: "Owner · consultant · project lead",
      facts: [
        { label: "Education", value: "Mechanical Engineering (FH)" },
        { label: "Experience", value: "35+ years CAD/PDM" },
        { label: "Projects", value: "200+ completed" },
        { label: "Engagement", value: "Germany / Austria / Switzerland" },
        { label: "Languages", value: "German, English" },
        { label: "Availability", value: "On short notice by arrangement" },
      ],
      philoTitle: "The client's advocate",
      philoP1Strong: "vf solutions acts solely as the advocate of its clients' interests",
      philoP1Post: " — independent of software vendors, their sales agendas or partner programmes.",
      philoP2: "That means: system selection based on the client's actual requirements, not on market share or commissions. Advice that names uncomfortable truths when necessary.",
      philoP3Pre: "vf solutions is positioned as ",
      philoP3Strong: "100% system- and vendor-neutral",
      philoP3Post: ". This independence is not a marketing claim — it is the business model.",
      philoP4Pre: "Projects run ",
      philoP4Strong1: "without disrupting daily operations",
      philoP4Mid: ". Project durations are short and the outcomes are ",
      philoP4Strong2: "\"controllable\"",
      philoP4Post: " — measurable and demonstrable.",
      careerEyebrow: "Career",
      careerTitle: "35 years — 6 stations",
      careerLead: "From initial education through industrial practice to independent consulting.",
      today: "Today",
      partnerTitle: "Partner network",
      partnerLead: "Successful projects are rarely delivered solo. A cooperation network broadens know-how and secures capacity reserves.",
      ctaTitle: "Speak directly.",
      ctaLead: "Volker Freundt is your direct contact — no sales team, no detours.",
    },

    kontakt: {
      title: "Contact | vf solutions",
      description: "Get in touch with vf solutions. Volker Freundt — directly reachable.",
      eyebrow: "Contact",
      heroTitle: "Discuss your project or process question",
      heroLead:
        "A direct exchange usually clarifies quickly whether and how vf solutions can sensibly support a technical initiative.",
      availability: "Available on short notice by arrangement",
      addressLabel: "Location",
      phoneLabel: "Phone",
      phoneMobil: "Mobile",
      emailLabel: "Email",
      callBtn: "Call",
      mailBtn: "Send email",
      mapsLink: "Open in Google Maps",
      formTitle: "Send a message",
      formLead: "Briefly describe your challenge — we will respond promptly.",
      formName: "Name",
      formCompany: "Company",
      formEmail: "Email",
      formPhone: "Phone",
      formMessage: "Your challenge",
      formPlaceholderMessage: "Please describe briefly how we can help …",
      formPrivacyPre: "I have read the ",
      formPrivacyLink: "privacy policy",
      formPrivacyPost: " and consent to the processing of my data.",
      formSubmit: "Send message",
      formSending: "Sending …",
      formSuccess: "Thank you! Your message has arrived — we will be in touch shortly.",
      formError: "Sending failed, unfortunately. Please try again or email us directly at",
      formRequired: "Please fill in name, email and message and confirm the privacy notice.",
      formHint: "Prefer email? Write to us at",
    },
  },
} as const;

export function t(locale: Locale) {
  return T[locale];
}

export function localePath(locale: Locale, path: string): string {
  if (path.startsWith("http") || path.startsWith("mailto:") || path.startsWith("tel:")) return path;
  if (path === "/") return `/${locale}`;
  return `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
}
