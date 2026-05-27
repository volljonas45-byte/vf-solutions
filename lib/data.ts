export type Locale = "de" | "en";
export const LOCALES: Locale[] = ["de", "en"];
export const DEFAULT_LOCALE: Locale = "de";

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
    { value: "180+", label: "Projekte", sub: "Erfolgreich abgeschlossen" },
    { value: "30+", label: "Systemwechsel", sub: "CAD-Systemmigrationen" },
    { value: "43+", label: "Referenzkunden", sub: "Namhafte Unternehmen" },
  ],
  en: [
    { value: "35+", label: "Years of experience", sub: "Active since 1989" },
    { value: "180+", label: "Projects", sub: "Successfully completed" },
    { value: "30+", label: "System migrations", sub: "CAD system migrations" },
    { value: "43+", label: "Reference clients", sub: "Renowned companies" },
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
      title: "CAD/PDM-Migration & Archivierung",
      desc: "Schwerpunkt der Arbeit von vf solutions: Planung und Begleitung von CAD- und PDM-Migrationen mit Blick auf Struktur, Datenqualität, Nachvollziehbarkeit und einen sicheren Betrieb der Altdaten in der Koexistenzphase.",
      bullets: [
        "CAD-Datenbestand-Migration (versionssicher, redundanzfrei)",
        "PDM-Metadaten-Transfer & Workflow-Mapping",
        "Archiv-Integration (EASY, CADIM und weitere)",
        "Konvertierung, Konsistenzprüfung & Schnittstellenprogrammierung",
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
      tag: "PL",
      title: "Projektleitung & Realisierung",
      desc: "Koordination von Fachbereichen, IT und Systempartnern mit klaren Meilensteinen, sauberer Dokumentation und pragmatischer Steuerung.",
      bullets: [
        "Teilprojekt- und Gesamtprojektleitung",
        "Key-User-Konzept & Koordination",
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
      title: "Sachnummernsysteme & Klassifizierung",
      desc: "Entwicklung und Implementierung klassifizierungsbasierender Sachnummernsysteme — für bessere Teilewiederverwendung und strukturiertes Änderungsmanagement.",
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
      title: "CAD/PDM migration & archiving",
      desc: "The core focus of vf solutions: planning and executing CAD and PDM migrations with strict attention to structure, data quality, traceability and safe operation of legacy data during the coexistence phase.",
      bullets: [
        "CAD data migration (version-safe, redundancy-free)",
        "PDM metadata transfer & workflow mapping",
        "Archive integration (EASY, CADIM and others)",
        "Conversion, consistency checks & interface programming",
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
      tag: "PM",
      title: "Project management & delivery",
      desc: "Coordination of departments, IT and system partners with clear milestones, clean documentation and pragmatic steering.",
      bullets: [
        "Sub-project and overall project leadership",
        "Key-user concept & coordination",
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
      title: "Part numbering & classification",
      desc: "Development and implementation of classification-based part numbering systems — enabling better part reuse and structured change management.",
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

export const PROJEKTBEREICHE: Record<Locale, {
  tag: string;
  title: string;
  count: string;
  desc: string;
  vorgehen: string;
  nutzen: string;
  highlight?: boolean;
}[]> = {
  de: [
    {
      tag: "MIGRATION",
      title: "CAD/PDM-Migration",
      count: "Schwerpunkt · Löwenanteil",
      desc: "Den größten Tätigkeitsbereich bilden Datenmigrationen zwischen CAD- und PDM-Systemen — typischerweise bei einem Systemwechsel oder einer technischen Modernisierung.",
      vorgehen: "Iststandsaufnahme der Datenbestände, Definition der Zielstruktur, Aufbereitung und Konvertierung, schrittweise Übernahme inkl. Koexistenzphase und Konsistenzprüfung.",
      nutzen: "Saubere Datenstrukturen im Zielsystem, nachvollziehbare Versionslogik und ein sicherer Betrieb der Altdaten während der Umstellung.",
      highlight: true,
    },
    {
      tag: "CAD & PDM",
      title: "CAD/PDM-Systemoptimierung",
      count: "30+ Systemwechsel",
      desc: "Gewachsene CAD- und PDM-Strukturen, uneinheitliche Abläufe oder ein geplanter CAD-Systemwechsel erschweren die tägliche Arbeit.",
      vorgehen: "Analyse der Systemnutzung, Systemauswahl, Klärung von Datenmodellen, Sachnummernlogik und Einführungskonzepten.",
      nutzen: "Klarere Ablage, nachvollziehbarere Konstruktionsdaten und stabilere CAD/PDM-Anwendung im laufenden Betrieb.",
    },
    {
      tag: "Daten & Integration",
      title: "Schnittstellen & Datenstrukturprojekte",
      count: "18+ Integrationsprojekte",
      desc: "PDM-Archivierung oder Schnittstellen zwischen Konstruktion und nachgelagerten Systemen erfordern konsistente Strukturen und klare Verantwortlichkeiten.",
      vorgehen: "Konzeption von Datenflüssen, Migrationslogik, API-Entwicklung sowie Anwender- und Key-User-Begleitung.",
      nutzen: "Bessere Datenqualität, verständlichere Integrationslogik und höhere Prozesssicherheit.",
    },
    {
      tag: "Klassifizierung",
      title: "Sachnummernsysteme & Klassifizierung",
      count: "5+ Klassifizierungsprojekte",
      desc: "In vielen Konstruktionsabteilungen entstehen unnötig Neuteile, weil Wiederholteile und Ähnlichteile nicht auffindbar sind.",
      vorgehen: "Iststandsanalyse, Entwicklung und Implementierung klassifizierungsbasierender Sachnummernsysteme mit Sachmerkmalsleisten.",
      nutzen: "Weniger Neukonstruktionen, bessere Teilewiederverwendung und strukturiertes Änderungsmanagement.",
    },
  ],
  en: [
    {
      tag: "MIGRATION",
      title: "CAD/PDM migration",
      count: "Core focus · largest share",
      desc: "The largest single area of work: data migrations between CAD and PDM systems — typically during a system change or technical modernization.",
      vorgehen: "Assessment of existing data, definition of the target structure, cleansing and conversion, stepwise handover including a coexistence phase and consistency checks.",
      nutzen: "Clean data structures in the target system, traceable versioning logic and safe operation of legacy data throughout the transition.",
      highlight: true,
    },
    {
      tag: "CAD & PDM",
      title: "CAD/PDM system optimization",
      count: "30+ system migrations",
      desc: "Grown CAD and PDM environments, inconsistent workflows or a planned CAD system change make day-to-day engineering harder than it should be.",
      vorgehen: "Analysis of system usage, system selection, clarification of data models, part numbering logic and rollout concepts.",
      nutzen: "Clearer data storage, more traceable engineering data and a more stable CAD/PDM environment in daily operation.",
    },
    {
      tag: "Data & integration",
      title: "Interfaces & data structure projects",
      count: "18+ integration projects",
      desc: "PDM archiving or interfaces between engineering and downstream systems require consistent structures and clear responsibilities.",
      vorgehen: "Design of data flows, migration logic, API development and support for end users and key users.",
      nutzen: "Better data quality, more transparent integration logic and higher process reliability.",
    },
    {
      tag: "Classification",
      title: "Part numbering & classification",
      count: "5+ classification projects",
      desc: "In many engineering departments, new parts are unnecessarily created because existing repeat or similar parts cannot be found.",
      vorgehen: "Current-state analysis, design and implementation of classification-based part numbering systems with part characteristic structures.",
      nutzen: "Fewer new designs, better part reuse and a structured change management process.",
    },
  ],
};

export const REFERENZKUNDEN_DOMAINS: Record<string, string> = {
  "WIPOTEC GmbH": "wipotec.com",
  "OptoPrecision GmbH": "optoprecision.de",
  "EHLEBRACHT Holding AG": "ehlebracht.de",
  "Robert Bosch Packaging Technology GmbH": "syntegon.com",
  "Alexander Binzel Schweisstechnik GmbH & Co. KG": "binzel-abicor.com",
  "Wemhöner Surface Technologies GmbH & Co. KG": "wemhoener.de",
  "MIWE Michael Wenz GmbH": "miwe.de",
  "ERNI Deutschland GmbH": "erni.com",
  "Silony Medical GmbH": "silony-medical.com",
  "Hinterkopf GmbH": "hinterkopf.de",
  "ZAHORANSKY Systemtechnik GmbH": "zahoransky.com",
  "S. Siedle & Söhne Telefon- und Telegrafenwerke OHG": "siedle.de",
  "Bühler GmbH": "buhlergroup.com",
  "viastore systems GmbH": "viastore.com",
  "teamtechnik Maschinen und Anlagen GmbH": "teamtechnik.de",
  "RENA Sondermaschinenbau GmbH": "rena.com",
  "pro med instruments GmbH": "pro-med-instruments.com",
  "Adolf ILLIG Maschinenbau GmbH & Co. KG": "illig.com",
  "INTRAVIS GmbH": "intravis.de",
  "SEW-EURODRIVE GmbH & Co. KG": "sew-eurodrive.com",
  "NEOPERL GmbH": "neoperl.com",
  "Scheuerle Fahrzeugfabrik GmbH": "scheuerle.com",
  "KAMAG Transporttechnik GmbH": "kamag.de",
  "Eugen FAHRION GmbH & Co. KG": "fahrion.de",
  "Novotechnik Messwertaufnehmer OHG": "novotechnik.com",
  "weil engineering gmbh": "weil-engineering.com",
};

export const REFERENZKUNDEN = [
  "WIPOTEC GmbH",
  "OptoPrecision GmbH",
  "EHLEBRACHT Holding AG",
  "Robert Bosch Packaging Technology GmbH",
  "Alexander Binzel Schweisstechnik GmbH & Co. KG",
  "Wemhöner Surface Technologies GmbH & Co. KG",
  "MIWE Michael Wenz GmbH",
  "ERNI Deutschland GmbH",
  "LEICHT STANZAUTOMATION GMBH",
  "Adapterbau Kokott GmbH & Co. KG",
  "Silony Medical GmbH",
  "Hinterkopf GmbH",
  "ZAHORANSKY Systemtechnik GmbH",
  "S. Siedle & Söhne Telefon- und Telegrafenwerke OHG",
  "Bühler GmbH",
  "EDAK AG",
  "GEWEFA Josef C. Pfister GmbH & Co. KG",
  "PFUDERER Maschinenbau GmbH",
  "SCHAAL engineering GmbH",
  "weil engineering gmbh",
  "viastore systems GmbH",
  "Bickel Blechtechnik GmbH",
  "teamtechnik Maschinen und Anlagen GmbH",
  "RENA Sondermaschinenbau GmbH",
  "pro med instruments GmbH",
  "Adolf ILLIG Maschinenbau GmbH & Co. KG",
  "Linnemann GmbH",
  "INTRAVIS GmbH",
  "SEW-EURODRIVE GmbH & Co. KG",
  "GRAFIX GmbH Zerstäubungstechnik",
  "Feinmechanik GmbH",
  "LKE Schneider-Leichtbau GmbH",
  "FIF World GmbH",
  "NEOPERL GmbH",
  "Scheuerle Fahrzeugfabrik GmbH",
  "KAMAG Transporttechnik GmbH",
  "Kunzmann + Hartmann Armaturen GmbH",
  "Eugen FAHRION GmbH & Co. KG",
  "Robbins GmbH",
  "Novotechnik Messwertaufnehmer OHG",
  "axion GmbH",
  "Ingenieurberatung Dr.-Ing. Franz",
];

export const CAD_SYSTEME = [
  "SolidWorks", "SolidEdge", "Inventor", "CATIA V5",
  "Unigraphics V15/16/17", "AutoCAD", "DraftSight",
  "ME10", "ObjectD / EUKLID", "Sigraph-CAD2D", "starVars-Designer",
];

export const PDM_SYSTEME = [
  "SAP PLM / Cideon Workspace", "SolidWorks PDM Professional",
  "MaxxDB", "CIM Database / WSM", "SmarTeam", "CADIM EDB",
  "PDMWorks", "IMAN / UGManager", "proALPHA", "keytech Pro",
];

export const PROGRAMMIERUNG = [
  "Visual Basic / VBA", "VBS / VB.NET", "SQL", "C / C++", "AutoLISP",
];

export const API_SYSTEME = [
  "SAP BAPI / RFC", "SolidWorks API", "SolidWorks PDM API",
  "SolidEdge API", "Inventor API", "Unigraphics API",
  "MaxxDB V3 API", "PDMWorks API", "SmarTeam API",
  "DraftSight API", "MS-Office API",
];

export const DATENBANKEN = [
  "MS-SQL Server", "Oracle", "MySQL", "SQLite", "MS-Access",
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
