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

export const STATS = [
  { value: "35+", label: "Jahre Erfahrung", sub: "Aktiv seit 1989" },
  { value: "180+", label: "Projekte", sub: "Erfolgreich abgeschlossen" },
  { value: "30+", label: "Systemwechsel", sub: "CAD-Systemmigrationen" },
  { value: "43+", label: "Referenzkunden", sub: "Namhafte Unternehmen" },
];

export const LEISTUNGEN = [
  {
    number: "01",
    tag: "CAD",
    title: "CAD/PDM/ERP-Beratung & Analyse",
    desc: "Bewertung bestehender Systemlandschaften, Bedarfsanalyse und Entwicklung praxisnaher Zielbilder für Konstruktion, Datenverwaltung und ERP-nahe Prozesse.",
    bullets: ["Bedarfsanalyse & Iststandsaufnahme", "Systemauswahl & Marktvergleich", "Konzeption & Zielbildentwicklung", "Einsatzvorbereitung & Standardisierung"],
  },
  {
    number: "02",
    tag: "PRZ",
    title: "Prozessanalyse & Konzeption",
    desc: "Strukturierte Aufnahme technischer Abläufe, Identifikation von Engpässen und Ausarbeitung belastbarer Umsetzungskonzepte im laufenden Betrieb.",
    bullets: ["Prozessmodellierung & Workflow-Definition", "Versionslogik & Freigabeprozesse", "Änderungsmanagement", "Stücklistenwesen & Sachmerkmale"],
  },
  {
    number: "03",
    tag: "PL",
    title: "Projektleitung & Realisierung",
    desc: "Koordination von Fachbereichen, IT und Systempartnern mit klaren Meilensteinen, sauberer Dokumentation und pragmatischer Steuerung.",
    bullets: ["Teilprojekt- und Gesamtprojektleitung", "Key-User-Konzept & Koordination", "Meilensteinplanung & Controlling", "Systempartner-Integration"],
  },
  {
    number: "04",
    tag: "MIG",
    title: "CAD/PDM-Migration & Archivierung",
    desc: "Planung und Begleitung von Datenmigrationen mit Blick auf Struktur, Qualität, Nachvollziehbarkeit und sicheren Betrieb der Altdaten in der Koexistenzphase.",
    bullets: ["CAD-Datenbestand-Migration", "PDM-Metadaten-Transfer", "Archiv-Integration (EASY, CADIM etc.)", "Konvertierung & Schnittstellenprogrammierung"],
  },
  {
    number: "05",
    tag: "API",
    title: "Anwendungsentwicklung & Schnittstellen",
    desc: "API-Programmierung, CAx-Schnittstellen, CAD/PDM/ERP-Kopplungen und kundenspezifische Lösungen — entwickelt, eingeführt und dauerhaft stabilisiert.",
    bullets: ["API-Programmierung (SolidWorks, SAP, MaxxDB etc.)", "CAD/ERP-Kopplungen & Konverter", "Teilegeneratoren & Variantenmodule", "Datenbankentwicklung & Integration"],
  },
  {
    number: "06",
    tag: "SCH",
    title: "Schulung, Training & Stabilisierung",
    desc: "Begleitung von Anwendern, Key-Usern und Projektteams — damit neue Prozesse nicht nur verstanden, sondern dauerhaft gelebt werden.",
    bullets: ["Training vor Ort & Hotline-Betreuung", "Key-User-Ausbildung", "CAD/PDM/ERP-Releasemanagement", "Langfristige Anwendungsbetreuung"],
  },
];

export const USPS = [
  {
    icon: "◈",
    title: "100% Anbieterneutral",
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
    title: "Sofort verfügbar — D/A/CH",
    desc: "Einsatz in Deutschland, Österreich und der Schweiz — 3–5 Tage pro Woche fulltime. Direkte Ansprechbarkeit ohne Vermittlungsumwege.",
  },
];

export const PROJEKTBEREICHE = [
  {
    tag: "CAD & PDM",
    title: "CAD/PDM-Systemoptimierung",
    count: "30+ Systemwechsel",
    desc: "Gewachsene CAD- und PDM-Strukturen, uneinheitliche Abläufe oder ein geplanter CAD-Systemwechsel erschweren die tägliche Arbeit.",
    vorgehen: "Analyse der Systemnutzung, Systemauswahl, Klärung von Datenmodellen, Sachnummernlogik und Einführungskonzepten.",
    nutzen: "Klarere Ablage, nachvollziehbarere Konstruktionsdaten und stabilere CAD/PDM-Anwendung im laufenden Betrieb.",
  },
  {
    tag: "Prozess & ERP",
    title: "ERP-nahe Prozessberatung",
    count: "Stücklisten & Integration",
    desc: "Technische Informationen, Stücklisten und Übergabepunkte zwischen Konstruktion, Arbeitsvorbereitung und ERP sind nicht ausreichend abgestimmt.",
    vorgehen: "Prozessmodellierung, Systemauswahl, Rollenklärung und Abstimmung von Datenaustausch, Klassifizierung und Sachnummernsystemen.",
    nutzen: "Verlässlichere Übergaben, weniger Reibung an Schnittstellen und bessere Grundlage für belastbare technische Prozesse.",
  },
  {
    tag: "Daten & Integration",
    title: "Schnittstellen & Datenstrukturprojekte",
    count: "18+ Integrationsprojekte",
    desc: "Datenmigration, PDM-Archivierung oder CAD/PDM/ERP-Schnittstellen erfordern konsistente Strukturen und klare Verantwortlichkeiten.",
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
];

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

export const ERP_SYSTEME = [
  "SAP R/3", "PSI/Penta", "Majesty", "FORMAT",
  "AlphaPlan", "be.as", "BRAIN", "P2",
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

export const KARRIERE = [
  { year: "1982", title: "Abitur" },
  { year: "1988", title: "Dipl.-Ing. (FH) Maschinenbau", desc: "Fachhochschule Köln" },
  { year: "1988 – 1989", title: "Projektingenieur", desc: "Labor f. angewandte Mathematik, FH Köln" },
  { year: "1989", title: "Gesellschafter", desc: "BFC, Remscheid" },
  { year: "1989 – 2002", title: "Senior Consultant", desc: "IBF GmbH, Stuttgart — CAD/PDM/ERP-Projekte im Maschinenbau" },
  { year: "seit 2002", title: "Inhaber vf solutions", desc: "Ingenieurdienstleistungen — Beratung, Entwicklung, Projektleitung" },
];

export const PARTNER = [
  { name: "GULP", desc: "Wichtigste Quelle für IT-Projektvermittlung im deutschsprachigen Raum" },
  { name: "Harvey Nash", desc: "Deckung temporären Bedarfs an IT-Fachkräften, schnell und qualitativ hochwertig" },
  { name: "HAYS", desc: "Weltweite Rekrutierung kompetenter IT-Spezialisten für zeitlich begrenzte Einsätze" },
];
