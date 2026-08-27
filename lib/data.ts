import { asset, BASE_PATH } from "@/lib/basePath";

export type Locale = "de" | "en";
export const LOCALES: Locale[] = ["de", "en"];
export const DEFAULT_LOCALE: Locale = "de";

// Endpoint the contact form posts to: public/kontakt.php, which ships with the
// static export and runs on the customer's own IONOS webspace — no third-party
// form service, so nothing leaves the customer's server.
//
// GitHub Pages serves static files only, so the preview build (BASE_PATH set)
// gets an empty endpoint and falls back to opening the visitor's mail client.
// Same in `next dev`: the dev server hands out the PHP file as plain text, so
// use the mailto fallback there or test against `php -S localhost:8000` in out/.
export const CONTACT_ENDPOINT = BASE_PATH ? "" : "/kontakt.php";

export const CONTACT = {
  name: "vf solutions",
  person: "Dipl.-Ing. (FH) Volker Freundt",
  address: "Auf der Kinzig 4",
  city: "79112 Freiburg im Breisgau",
  tel: "+49 7664-914 82-60",
  telHref: "+4976649148260",
  mobil: "+49 172-726 55 95",
  mobilHref: "+491727265595",
  fax: "+49 7664-914 82-70",
  email: "freundt@vfsolutions.de",
  website: "www.vfsolutions.de",
};

export const STATS: Record<Locale, { value: string; label: string; sub: string }[]> = {
  de: [
    { value: "35+", label: "Jahre Erfahrung", sub: "Aktiv seit 1989" },
    { value: "200+", label: "Projekte", sub: "Erfolgreich abgeschlossen" },
    { value: "50+", label: "Systemwechsel", sub: "CAD-Systemmigrationen" },
    { value: "45", label: "Referenzkunden", sub: "Namhafte Unternehmen" },
  ],
  en: [
    { value: "35+", label: "Years of experience", sub: "Active since 1989" },
    { value: "200+", label: "Projects", sub: "Successfully completed" },
    { value: "50+", label: "System migrations", sub: "CAD system migrations" },
    { value: "45", label: "Reference clients", sub: "Renowned companies" },
  ],
};

// LEISTUNGEN — Migration als Schwerpunkt (01), Schulung entfernt, ERP nicht eigenständig.
export const LEISTUNGEN: Record<Locale, {
  number: string;
  tag: string;
  title: string;
  desc: string;
  bullets: string[];
  highlight?: boolean;
}[]> = {
  de: [
    {
      number: "01",
      tag: "MIG",
      title: "CAD/PDM-Migration",
      desc: "Schwerpunkt der Arbeit von vf solutions: Planung und Begleitung von CAD- und PDM-Migrationen mit Blick auf Struktur, Datenqualität und Nachvollziehbarkeit — für eine verlässliche Koexistenz von Alt- und Neudaten während der Übergangsphase.",
      bullets: [
        "CAD-Datenbestand-Migration (versionssicher, redundanzfrei)",
        "PDM-Metadaten-Transfer & Workflow-Mapping",
        "Strukturbereinigung, Dubletten- & Konsistenzprüfung",
        "Konvertierung & Schnittstellenprogrammierung",
      ],
      highlight: true,
    },
    {
      number: "02",
      tag: "CAD",
      title: "CAD/PDM-Beratung & Analyse",
      desc: "Bewertung bestehender CAD- und PDM-Landschaften, Bedarfsanalyse und Entwicklung praxisnaher Zielbilder für Konstruktion und Datenverwaltung.",
      bullets: [
        "Bedarfsanalyse & Iststandsaufnahme",
        "Systemauswahl & Marktvergleich",
        "Konzeption & Zielbildentwicklung",
        "Einsatzvorbereitung & Standardisierung",
      ],
    },
    {
      number: "03",
      tag: "PRZ",
      title: "Prozessanalyse & Konzeption",
      desc: "Strukturierte Aufnahme technischer Abläufe, Identifikation von Engpässen und Ausarbeitung belastbarer Umsetzungskonzepte im laufenden Betrieb.",
      bullets: [
        "Prozessmodellierung & Workflow-Definition",
        "Versionslogik & Freigabeprozesse",
        "Änderungsmanagement",
        "Stücklistenwesen & Sachmerkmale",
      ],
    },
    {
      number: "04",
      tag: "REA",
      title: "Realisierung",
      desc: "Strukturierte Umsetzung im laufenden Betrieb — mit klaren Meilensteinen, sauberer Dokumentation und pragmatischer Steuerung, ohne signifikante Störung des Tagesbetriebs.",
      bullets: [
        "Umsetzung & Einführung im laufenden Betrieb",
        "Key-User-Einbindung & Abstimmung",
        "Meilensteinplanung & Controlling",
        "Systempartner-Integration",
      ],
    },
    {
      number: "05",
      tag: "API",
      title: "Anwendungsentwicklung & Schnittstellen",
      desc: "API-Programmierung, CAx-Schnittstellen, CAD/PDM-Kopplungen und kundenspezifische Lösungen — entwickelt, eingeführt und dauerhaft stabilisiert.",
      bullets: [
        "API-Programmierung (SolidWorks, SAP, MaxxDB u. a.)",
        "CAD/Prozess-Kopplungen & Konverter",
        "Teilegeneratoren & Variantenmodule",
        "Datenbankentwicklung & Integration",
      ],
    },
    {
      number: "06",
      tag: "KLS",
      title: "Sachnummernsysteme",
      desc: "Wildwuchs-Stopp durch Ähnlichkeitssuche, systematische Suche über zentrale Klassifizierung, effiziente Feinauswahl anhand von Sachmerkmalen.",
      bullets: [
        "Iststandsanalyse & Klassifizierungskonzept",
        "Sachmerkmalsleisten",
        "Stücklistenwesen",
        "Änderungsmanagement",
      ],
    },
  ],
  en: [
    {
      number: "01",
      tag: "MIG",
      title: "CAD/PDM migration",
      desc: "The core focus of vf solutions: planning and executing CAD and PDM migrations with strict attention to structure, data quality and traceability — for a reliable coexistence of legacy and new data throughout the transition phase.",
      bullets: [
        "CAD data migration (version-safe, redundancy-free)",
        "PDM metadata transfer & workflow mapping",
        "Structure clean-up, duplicate & consistency checks",
        "Conversion & interface programming",
      ],
      highlight: true,
    },
    {
      number: "02",
      tag: "CAD",
      title: "CAD/PDM consulting & analysis",
      desc: "Evaluation of existing CAD and PDM environments, needs analysis and the development of practical target architectures for engineering and data management.",
      bullets: [
        "Needs analysis & current-state assessment",
        "System selection & market comparison",
        "Concept & target architecture",
        "Rollout preparation & standardization",
      ],
    },
    {
      number: "03",
      tag: "PRZ",
      title: "Process analysis & concept design",
      desc: "Structured review of technical workflows, identification of bottlenecks and development of robust implementation concepts during day-to-day operations.",
      bullets: [
        "Process modelling & workflow definition",
        "Versioning logic & release processes",
        "Change management",
        "Bill of materials & part characteristics",
      ],
    },
    {
      number: "04",
      tag: "REA",
      title: "Delivery",
      desc: "Structured delivery during ongoing operations — with clear milestones, clean documentation and pragmatic steering, without disrupting day-to-day business.",
      bullets: [
        "Rollout & delivery during ongoing operations",
        "Key-user involvement & coordination",
        "Milestone planning & controlling",
        "System partner integration",
      ],
    },
    {
      number: "05",
      tag: "API",
      title: "Custom development & interfaces",
      desc: "API programming, CAx interfaces, CAD/PDM couplings and tailor-made solutions — developed, rolled out and stabilized for the long term.",
      bullets: [
        "API programming (SolidWorks, SAP, MaxxDB and others)",
        "CAD/process couplings & converters",
        "Part generators & variant modules",
        "Database development & integration",
      ],
    },
    {
      number: "06",
      tag: "CLS",
      title: "Part numbering systems",
      desc: "Stop part sprawl through similarity search, systematic retrieval via central classification, efficient fine selection based on part characteristics.",
      bullets: [
        "Current-state analysis & classification concept",
        "Part characteristic structures",
        "Bill-of-materials handling",
        "Change management",
      ],
    },
  ],
};

export const USPS: Record<Locale, { icon: string; title: string; desc: string }[]> = {
  de: [
    {
      icon: "◈",
      title: "100% anbieterneutral",
      desc: "vf solutions ist system- und anbieterneutral aufgestellt — vollständig unabhängig von Herstellern und deren Produkten. Beratung ausschließlich im Interesse des Kunden.",
    },
    {
      icon: "◉",
      title: "Overhead-freie Honorarkalkulation",
      desc: "Faire All-in-Tagessätze bzw. Festpreise — keine versteckten Overhead-Kosten, keine bösen Überraschungen. Flexibel handhabbare Rahmenverträge nach Bedarf.",
    },
    {
      icon: "◎",
      title: "Controlling-feste Ergebnisse",
      desc: "Projekte laufen ohne signifikante Störung des Tagesbetriebs. Kurze Projektdauer, klare Meilensteine und nachweislich messbare Ergebnisse.",
    },
    {
      icon: "◐",
      title: "Kurzfristig nach Vereinbarung",
      desc: "Einsatz in Deutschland, Österreich und der Schweiz — kurzfristig nach Vereinbarung. Direkte Ansprechbarkeit ohne Vermittlungsumwege.",
    },
  ],
  en: [
    {
      icon: "◈",
      title: "100% vendor-neutral",
      desc: "vf solutions is fully system- and vendor-neutral — independent of manufacturers and their products. Advice always serves the client's interests, nothing else.",
    },
    {
      icon: "◉",
      title: "Overhead-free fee structure",
      desc: "Fair all-in day rates or fixed prices — no hidden overhead, no unpleasant surprises. Flexible framework agreements where they fit your needs.",
    },
    {
      icon: "◎",
      title: "Controllable, measurable results",
      desc: "Projects run without disrupting daily operations. Short project durations, clear milestones and demonstrably measurable outcomes.",
    },
    {
      icon: "◐",
      title: "Available on short notice",
      desc: "On-site engagements across Germany, Austria and Switzerland — available on short notice by arrangement. Direct contact, no intermediaries.",
    },
  ],
};

export type ProjektFeature = {
  tag: string;
  title: string;
  count: string;
  paragraphs: string[];
  ctaQuestion: string;
  highlight?: boolean;
};

export const PROJEKT_FEATURES: Record<Locale, ProjektFeature[]> = {
  de: [
    {
      tag: "CAD",
      title: "CAD-Systemwechsel",
      count: "50+ Systemwechsel",
      paragraphs: [
        "Ein Wechsel des führenden CAD-Systems ist eine strategische Entscheidung — getrieben durch Konsolidierung, neue Konstruktionsmethodik, Kompatibilitätsanforderungen oder das Auslaufen bestehender Systeme.",
        "Die eigentliche Herausforderung liegt selten in der Software selbst, sondern in der verlässlichen Überführung gewachsener Datenbestände, Methoden und Konstruktionsprozesse in die neue Umgebung — ohne Stillstand in der Konstruktion.",
        "vf solutions begleitet CAD-Systemwechsel von der Systemauswahl über die Migrationsplanung bis zur stabilen Produktivsetzung — mit über 50 erfolgreich umgesetzten Systemwechseln als Fundament.",
      ],
      ctaQuestion: "Steht bei Ihnen ein CAD-Systemwechsel an?",
    },
    {
      tag: "MIGRATION",
      title: "PDM-Systemwechsel",
      count: "Schwerpunkt · Löwenanteil",
      paragraphs: [
        "Viele PDM-Systemwechsel werden meist durch technologische Veraltung, mangelnde CAD-Kompatibilität, funktionale Prozessdefizite sowie strategische Konsolidierungen oder hohe Betriebskosten (TCO) ausgelöst – oft direkt getrieben durch einen parallelen Wechsel des führenden CAD-Systems.",
        "Die anstehende Datenmigration fungiert hierbei als zentrales Werkzeug, um die historischen Datenbestände zu bereinigen, Dubletten zu eliminieren und die Altdaten strukturiert und termingerecht in das neue Zielsystem zu überführen.",
        "vf solutions bietet Ihnen kompetente Unterstützung durch maßgeschneiderte Migrationstools zur Erfassung, Bewertung, Korrektur und Vorbereitung Ihrer CAD-Datenbestände samt verknüpften Artikelstämmen und Stücklisten für den sicheren Transfer in das neue Zielsystem.",
      ],
      ctaQuestion: "Wie sieht Ihre konkrete Aufgabenstellung aus?",
      highlight: true,
    },
    {
      tag: "DEV",
      title: "Anwendungsentwicklung",
      count: "CAx · Schnittstellen · Konverter",
      paragraphs: [
        "Die anwendungsorientierte Entwicklung kundenspezifischer Lösungen stellt sich trotz hohem Angebot an Standardsoftware meist als ideal heraus – schließlich lassen sich Ihre Anforderungen eher selten standardisieren …",
        "vf solutions entwickelt professionelle Lösungen für Ihre Anforderungen aus dem CAx-Umfeld: Schnittstellen, Konverter, Migrations-Tools, CAD/PPS/ERP-Kopplungen, CAD/PDM-Lösungen, CAD/PDM/Archiv-Integrationen, Teilegeneratoren sowie Varianten- und Berechnungsmodule werden nicht nur realisiert, sondern auch eingeführt und ständig optimiert.",
        "Weitere Schwerpunkte stellen Konzeption, Entwicklung und Einführung von Datenbanken sowie die Realisierung komplexer integrierter Anwendungen dar.",
      ],
      ctaQuestion: "Wie sieht Ihre konkrete Aufgabenstellung aus?",
    },
    {
      tag: "KLS",
      title: "Sachnummerung & Klassifizierung",
      count: "Klassifizierung · Wiederverwendung",
      paragraphs: [
        "In vielen Konstruktions- und Entwicklungsabteilungen werden unnötig viele Neuteile eingeführt, obwohl identische oder zumindest ähnliche Teile meist bereits existieren.",
        "Diese Wiederhol- oder Ähnlichteile lassen sich methodisch sauber nur über eine unternehmensweit gültige Klassifizierung auffinden — Sachmerkmale unterstützen im Bedarfsfall die Feinauswahl.",
        "vf solutions entwickelt, implementiert und stabilisiert klassifizierungsbasierende Sachnummernsysteme — auch in Ihrem Unternehmen?",
      ],
      ctaQuestion: "Wie ist Ihre Teilevielfalt organisiert?",
    },
  ],
  en: [
    {
      tag: "CAD",
      title: "CAD system migration",
      count: "50+ system changes",
      paragraphs: [
        "Switching the leading CAD system is a strategic decision — driven by consolidation, new design methodology, compatibility requirements or the end of life of existing systems.",
        "The real challenge rarely lies in the software itself, but in reliably transferring grown data, methods and design processes into the new environment — without bringing engineering to a standstill.",
        "vf solutions guides CAD system migrations from system selection through migration planning to stable go-live — built on more than 50 successfully delivered system changes.",
      ],
      ctaQuestion: "Are you facing a CAD system migration?",
    },
    {
      tag: "MIGRATION",
      title: "PDM system migration",
      count: "Core focus · largest share",
      paragraphs: [
        "Most PDM system migrations are triggered by technological obsolescence, lack of CAD compatibility, functional process gaps, strategic consolidation or high total cost of ownership (TCO) — and are often driven directly by a parallel switch of the leading CAD system.",
        "The associated data migration is the central tool for cleansing the historical data, eliminating duplicates and transferring the legacy data into the new target system in a structured and on-schedule manner.",
        "vf solutions provides expert support through tailor-made migration tools to capture, assess, correct and prepare your CAD data — including the connected item masters and bills of materials — for a safe transfer into the new target system.",
      ],
      ctaQuestion: "What does your specific challenge look like?",
      highlight: true,
    },
    {
      tag: "DEV",
      title: "Custom development",
      count: "CAx · interfaces · converters",
      paragraphs: [
        "Application-oriented development of customer-specific solutions usually turns out to be the ideal approach despite the wide range of standard software — your requirements rarely lend themselves to standardization …",
        "vf solutions develops professional solutions for your needs in the CAx environment: interfaces, converters, migration tools, CAD/PPS/ERP couplings, CAD/PDM solutions, CAD/PDM/archive integrations, part generators as well as variant and calculation modules are not only implemented but also rolled out and continuously optimized.",
        "Further focus areas include the conception, development and rollout of databases as well as the delivery of complex integrated applications.",
      ],
      ctaQuestion: "What does your specific challenge look like?",
    },
    {
      tag: "CLS",
      title: "Part numbering & classification",
      count: "Classification · part reuse",
      paragraphs: [
        "In many design and engineering departments, far too many new parts are created — even though identical or at least similar parts usually already exist.",
        "These repeat or similar parts can only be found methodically through a company-wide classification — part characteristics support the fine selection where needed.",
        "vf solutions develops, implements and stabilizes classification-based part numbering systems — in your company too?",
      ],
      ctaQuestion: "How is your part variety organized?",
    },
  ],
};

export const REFERENZKUNDEN_DOMAINS: Record<string, string> = {
  "PIA Automation Holding GmbH": "pia-automation.com",
  "Benninger AG": "benninger.ch",
  "Komax AG": "komax.com",
  "Kübler Group Fritz Kübler GmbH": "kuebler.com",
  "HÜBERS Verfahrenstechnik Maschinenbau GmbH": "huebers.de",
  "Schwäbische Werkzeugmaschinen GmbH": "sw-machines.com",
  "SOMIC Verpackungsmaschinen GmbH & Co. KG": "somic.de",
  "BBS Automation Stuttgart GmbH": "bbs-automation.com",
  "S. Siedle & Söhne Telefon- und Telegrafenwerke OHG": "siedle.de",
  "Novotechnik Messwertaufnehmer OHG": "novotechnik.com",
  "Weil Technology GmbH": "weil-technology.com",
  "ZAHORANSKY AG": "zahoransky.com",
  "rose plastic AG": "rose-plastic.com",
  "TE ERNI Deutschland GmbH": "erni.com",
  "Silony Medical GmbH": "silony-medical.com",
  "Eugen FAHRION GmbH & Co. KG": "fahrion.de",
  "WIPOTEC GmbH": "wipotec.com",
  "AUMA Riester GmbH & Co. KG": "auma.com",
  "WEISS GmbH": "weiss-gmbh.de",
  "OptoPrecision GmbH": "optoprecision.de",
  "EHLEBRACHT Holding AG": "ehlebracht.de",
  "Hinterkopf GmbH": "hinterkopf.de",
  "Black Forest Medical GmbH": "blackforestmedical.de",
  "Robert Bosch Packaging Technology GmbH": "syntegon.com",
  "Alexander Binzel Schweisstechnik GmbH & Co.KG": "binzel-abicor.com",
  "Wemhöner Surface Technologies GmbH & Co.KG": "wemhoener.de",
  "Climeworks Deutschland GmbH": "climeworks.com",
  "DATRON AG": "datron.de",
  "OLBRICH GmbH": "olbrich.de",
  "vanRaam": "vanraam.com",
  "MIWE Michael Wenz GmbH": "miwe.de",
  "Adapterbau Kokott GmbH & Co. KG": "kokott.de",
  "GEWEFA Josef C.Pfister GmbH & Co.KG": "gewefa.de",
  "Bickel Blechtechnik GmbH": "bickel-blechtechnik.de",
  "RENA Technologies GmbH": "rena.com",
  "ILLIG packaging solutions GmbH": "illig.com",
  "Linnemann GmbH": "linnemann-online.com",
  "INTRAVIS GmbH": "intravis.de",
  "SEW-EURODRIVE GmbH & Co. KG": "sew-eurodrive.com",
  "NEOPERL GmbH": "neoperl.com",
  "TII Scheuerle Fahrzeugfabrik GmbH": "scheuerle.com",
  "TII KAMAG Transporttechnik GmbH & Co. KG": "tii-group.com",
  "Toyota Automated Logistics Systems GmbH": "toyota-automated-logistics.com",
  "Jecture GmbH": "jecture.com",
  "KH TEC GmbH": "kh-tec.com",
};

// Explicit logo overrides (real brand logos) — take precedence over the favicon
// fallback in LogoCell. `bg` sets the tile colour (default white); use a coloured
// tile for white/transparent logos so they stay visible.
export const REFERENZKUNDEN_LOGOS: Record<string, { src: string; bg?: string }> = {
  "TII Scheuerle Fahrzeugfabrik GmbH": { src: asset("/images/logos/scheuerle.png") },
  "Bickel Blechtechnik GmbH": { src: asset("/images/logos/bickel.svg") },
  "ILLIG packaging solutions GmbH": { src: asset("/images/logos/illig.png"), bg: "#2b5797" },
  "GEWEFA Josef C.Pfister GmbH & Co.KG": { src: asset("/images/logos/gewefa.jpg") },
  "DATRON AG": { src: asset("/images/logos/datron.png") },
  "Novotechnik Messwertaufnehmer OHG": { src: asset("/images/logos/novotechnik.png") },
  "PIA Automation Holding GmbH": { src: asset("/images/logos/pia.png") },
  "SEW-EURODRIVE GmbH & Co. KG": { src: asset("/images/logos/sew.svg") },
  "Linnemann GmbH": { src: asset("/images/logos/linnemann.svg") },
};

export const REFERENZKUNDEN = [
  "PIA Automation Holding GmbH",
  "Benninger AG",
  "Komax AG",
  "Kübler Group Fritz Kübler GmbH",
  "HÜBERS Verfahrenstechnik Maschinenbau GmbH",
  "Schwäbische Werkzeugmaschinen GmbH",
  "SOMIC Verpackungsmaschinen GmbH & Co. KG",
  "Toyota Automated Logistics Systems GmbH",
  "BBS Automation Stuttgart GmbH",
  "S. Siedle & Söhne Telefon- und Telegrafenwerke OHG",
  "Novotechnik Messwertaufnehmer OHG",
  "Weil Technology GmbH",
  "ZAHORANSKY AG",
  "rose plastic AG",
  "TE ERNI Deutschland GmbH",
  "Silony Medical GmbH",
  "Eugen FAHRION GmbH & Co. KG",
  "WIPOTEC GmbH",
  "AUMA Riester GmbH & Co. KG",
  "WEISS GmbH",
  "OptoPrecision GmbH",
  "EHLEBRACHT Holding AG",
  "Hinterkopf GmbH",
  "Black Forest Medical GmbH",
  "Robert Bosch Packaging Technology GmbH",
  "Alexander Binzel Schweisstechnik GmbH & Co.KG",
  "Wemhöner Surface Technologies GmbH & Co.KG",
  "Climeworks Deutschland GmbH",
  "Jecture GmbH",
  "DATRON AG",
  "OLBRICH GmbH",
  "vanRaam",
  "MIWE Michael Wenz GmbH",
  "Adapterbau Kokott GmbH & Co. KG",
  "GEWEFA Josef C.Pfister GmbH & Co.KG",
  "Bickel Blechtechnik GmbH",
  "RENA Technologies GmbH",
  "ILLIG packaging solutions GmbH",
  "Linnemann GmbH",
  "INTRAVIS GmbH",
  "SEW-EURODRIVE GmbH & Co. KG",
  "NEOPERL GmbH",
  "TII Scheuerle Fahrzeugfabrik GmbH",
  "TII KAMAG Transporttechnik GmbH & Co. KG",
  "KH TEC GmbH",
];

export const CAD_SYSTEME = [
  "SolidWorks",
  "Creo Parametric",
  "CATIA V5",
  "Inventor",
  "DraftSight",
  "SolidEdge",
  "Unigraphics V15/16/17",
  "AutoCAD",
  "ME10",
  "EUKLID-Design / ObjectD / Sigraph-Design",
  "Sigraph-CAD2D",
];

export const PDM_SYSTEME = [
  "SAP PLM, ECTR, Cideon Workspace",
  "CIM Database, WSM",
  "Keytech",
  "SolidWorks PDM",
  "PDMWorks",
  "PRO.FILE",
  "MaxxDB",
  "proALPHA",
  "CADIM EDB",
  "SmarTeam",
  "IMAN / UGManager",
];

export const ERP_SYSTEME = [
  "SAP",
  "PSI/Penta",
  "AMS",
  "Majesty",
  "FORMAT",
  "AlphaPlan",
  "Infor",
  "BRAIN",
  "P2",
];

export const PROGRAMMIERUNG = [
  "VB.NET, VBA, VBS",
  "SQL",
  "C, C++",
  "AutoLISP",
];

export const API_SYSTEME = [
  "SAP BAPI, RFC",
  "SolidWorks",
  "SolidWorks PDM",
  "Creo Parametric",
  "Inventor",
  "DraftSight",
  "MaxxDB V3",
  "SolidEdge",
  "PDMWorks",
  "SmarTeam",
  "Unigraphics",
  "MS-Office",
];

export const DATENBANKEN = [
  "MS-SQL Server",
  "Oracle",
  "MySQL",
  "SQLite",
  "MS-Access",
];

export const KARRIERE: Record<Locale, { year: string; title: string; desc?: string }[]> = {
  de: [
    { year: "1982", title: "Abitur" },
    { year: "1988", title: "Dipl.-Ing. (FH) Maschinenbau", desc: "Fachhochschule Köln" },
    { year: "1988 – 1989", title: "Projektingenieur", desc: "Labor f. angewandte Mathematik, FH Köln" },
    { year: "1989", title: "Gesellschafter", desc: "BFC, Remscheid" },
    { year: "1989 – 2002", title: "Senior Consultant", desc: "IBF GmbH, Stuttgart — CAD/PDM-Projekte im Maschinenbau" },
    { year: "seit 2002", title: "Inhaber vf solutions", desc: "Ingenieurdienstleistungen — Beratung, Entwicklung, Projektleitung" },
  ],
  en: [
    { year: "1982", title: "Abitur (university entrance qualification)" },
    { year: "1988", title: "Dipl.-Ing. (FH) Mechanical Engineering", desc: "Fachhochschule Köln" },
    { year: "1988 – 1989", title: "Project engineer", desc: "Laboratory for Applied Mathematics, FH Köln" },
    { year: "1989", title: "Shareholder", desc: "BFC, Remscheid" },
    { year: "1989 – 2002", title: "Senior consultant", desc: "IBF GmbH, Stuttgart — CAD/PDM projects in mechanical engineering" },
    { year: "since 2002", title: "Owner, vf solutions", desc: "Engineering services — consulting, development, project management" },
  ],
};

export const PARTNER: Record<Locale, { name: string; domain: string; url: string; desc: string }[]> = {
  de: [
    { name: "GULP", domain: "gulp.de", url: "https://www.gulp.de", desc: "Wichtigste Quelle für IT-Projektvermittlung im deutschsprachigen Raum" },
    { name: "Harvey Nash", domain: "harveynash.com", url: "https://www.harveynash.de", desc: "Deckung temporären Bedarfs an IT-Fachkräften, schnell und qualitativ hochwertig" },
    { name: "HAYS", domain: "hays.de", url: "https://www.hays.de", desc: "Weltweite Rekrutierung kompetenter IT-Spezialisten für zeitlich begrenzte Einsätze" },
  ],
  en: [
    { name: "GULP", domain: "gulp.de", url: "https://www.gulp.de", desc: "Leading sourcing platform for IT projects in the German-speaking market" },
    { name: "Harvey Nash", domain: "harveynash.com", url: "https://www.harveynash.de", desc: "Fast, high-quality coverage of temporary demand for IT specialists" },
    { name: "HAYS", domain: "hays.de", url: "https://www.hays.de", desc: "Global recruitment of skilled IT specialists for time-limited engagements" },
  ],
};
