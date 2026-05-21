# VF Solutions — Website-Entwicklungsplan

## Stack
- **Framework:** Next.js 14 (App Router, Static Export)
- **Styling:** Tailwind CSS
- **Sprache:** TypeScript
- **Deployment:** GitHub Pages → https://volljonas45-byte.github.io/vf-solutions
- **Repo:** https://github.com/volljonas45-byte/vf-solutions.git

---

## Design-Konzept

### Positionierung
Kein klassischer IT-Dienstleister-Look. Kein generisches "Industrie-blau".
→ **"Präzisionsingenieur trifft modernes Consulting"**
Referenz-Ästhetik: Linear.app × McKinsey × Strapi — clean, authoritative, tiefe Kompetenz spürbar

### Farbpalette
- **Primary:** `#0A1628` (tiefes Marineblau — Autorität, Präzision)
- **Accent:** `#1E6FD9` (technisches Blau — aktiv, modern)
- **Highlight:** `#C8A96E` (Goldton — Expertise, Premium)
- **Surface:** `#F8F9FB` (Hellgrau — clean, professionell)
- **Text:** `#1A2332` / `#64748B` (dunkel/mittel)

### Typografie
- **Headlines:** Inter oder Geist (scharf, technisch)
- **Body:** Inter
- **Accent/Labels:** Monospace-Schrift für technische Begriffe (system names)

### Designsprache
- Subtile Grid-Linien als Background-Motiv (CAD-Referenz)
- Scharfe Kanten, keine übertriebenen Rundungen
- Zahlen groß und bold als visuelle Anker (35+, 180+, 43+)
- Technische Tags/Badges für System-Namen
- Dezente Animationen (fade-in beim Scrollen)
- Hochwertige Stock-Fotos: Maschinenbau, CAD-Screens, Präzisionsteile

---

## Seitenstruktur

### Entscheidung: Multi-Page (6 Seiten)
Inhalte sind ausreichend für separate Seiten. Jede Seite hat eigene URL.

```
/                    → Home
/leistungen          → Leistungen
/projekte            → Projektbereiche + Referenzkunden
/kompetenz           → Technische Fachkenntnisse
/ueber-uns           → Über Volker Freundt
/kontakt             → Kontakt
```

---

## Seitendetails

### 1. Home (`/`)
- **Hero:** Großer Headline + Subtext + 2 CTAs + technische Illustration rechts
- **Stats-Bar:** `35+` Jahre · `180+` Projekte · `43+` Referenzkunden · `100%` Neutral
- **Leistungen-Preview:** 3 Karten (CAD/PDM-Beratung, Systemwechsel, Integration)
- **"Warum vf solutions":** 3 USP-Blöcke (Neutral, Overhead-frei, Controlling-fest)
- **Referenzkunden-Teaser:** Logo-ähnliche Textgitter, 12 ausgewählte Namen
- **CTA-Banner:** "Wie sieht Ihre Aufgabenstellung aus?" → Kontakt

### 2. Leistungen (`/leistungen`)
- **Hero:** Titel + Intro
- **6 Leistungs-Karten** mit Icon, Titel, Beschreibung, Beispiel-Anwendungsfällen:
  1. CAD/PDM/ERP-Beratung & Analyse
  2. Systemauswahl & Einsatzvorbereitung
  3. Anwendungsentwicklung & API
  4. CAD/PDM-Migration & Archivierung
  5. Sachnummernsysteme & Klassifizierung
  6. Schulung, Training & Stabilisierung
- **Kommerzielle USPs:** Overhead-frei · Festpreise · Rahmenverträge
- **CTA**

### 3. Projekte (`/projekte`)
- **Hero:** "180+ Projekte seit 1989"
- **4 Projektbereiche** mit je Intro-Text:
  - Anwendungsentwicklung
  - CAD-Systemwechsel (30+)
  - CAD/PDM-Archivierung
  - Sachnummernsysteme
- **Tabellen/Timeline** mit ausgewählten Projekten pro Bereich
- **Referenzkunden-Sektion:** Alle 43 Unternehmen in Grid
- **CTA**

### 4. Kompetenz (`/kompetenz`)
- **Hero:** Technische Tiefe als Positionierung
- **5 Kompetenz-Kategorien** als Card-Gruppen mit Badges:
  - CAD-Systeme (11 Systeme)
  - PDM-Systeme (9 Systeme)
  - ERP-Systeme (8 Systeme)
  - Programmierung (VB, SQL, C++ etc.)
  - Datenbanken (5)
- **API-Kompetenz:** Eigene Sektion
- **Einsatzgebiet:** D/A/CH, 3–5 Tage/Woche

### 5. Über vf solutions (`/ueber-uns`)
- **Hero:** Portrait-Placeholder + Name + Titel
- **Persönliches Profil:** Geburtsjahr, Ausbildung, Sprachen
- **Karriere-Timeline:** 1988 FH Köln → 1989 IBF Stuttgart → 2002 Inhaber vf solutions
- **Philosophie:** "Anwalt der Kunden" — Positionierungstext
- **Partner-Netzwerk:** GULP, Harvey Nash, HAYS
- **Download-CTA:** Profil als PDF

### 6. Kontakt (`/kontakt`)
- **Hero:** Direkter Einstieg
- **Kontaktdaten:** Adresse, Tel, Mobil, Fax, E-Mail
- **Kontaktformular:** Name, Unternehmen, E-Mail, Telefon, Nachricht
- **Google Maps Einbettung**
- **Verfügbarkeit:** "sofort verfügbar"

---

## Dateistruktur (Next.js)

```
vf solutions/
├── app/
│   ├── layout.tsx           # Root layout, Nav, Footer
│   ├── page.tsx             # Home
│   ├── leistungen/
│   │   └── page.tsx
│   ├── projekte/
│   │   └── page.tsx
│   ├── kompetenz/
│   │   └── page.tsx
│   ├── ueber-uns/
│   │   └── page.tsx
│   └── kontakt/
│       └── page.tsx
├── components/
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── StatsBar.tsx
│   ├── ServiceCard.tsx
│   ├── ReferenceGrid.tsx
│   ├── TechBadge.tsx
│   ├── Timeline.tsx
│   └── ContactForm.tsx
├── public/
│   └── images/              # Stock-Bilder + Logo
├── lib/
│   └── data.ts              # Alle Content-Daten (Projekte, Referenzen, etc.)
├── CONTENT.md               # Original-Inhalte
├── PLAN.md                  # Diese Datei
└── package.json
```

---

## Implementierungs-Reihenfolge

### Phase 1 — Setup & Fundament
1. `npx create-next-app@latest` initialisieren
2. Tailwind konfigurieren + Design-System (Farben, Fonts)
3. Navigation + Footer bauen
4. Deployment-Pipeline (GitHub Actions → GitHub Pages)

### Phase 2 — Core Pages
5. Home-Page (Hero + Stats + USPs + Referenz-Teaser)
6. Leistungen-Page
7. Projekte + Referenzkunden-Page

### Phase 3 — Detail Pages
8. Kompetenz-Page (Systeme + Badges)
9. Über uns-Page (Timeline + Philosophie)
10. Kontakt-Page (Formular + Maps)

### Phase 4 — Polish
11. Stock-Bilder integrieren
12. Animationen + Hover-States
13. Mobile Responsiveness prüfen
14. SEO (Meta-Tags, OpenGraph)
15. Impressum + Datenschutz
16. Final Review + Deploy

---

## Offene Punkte (Klärung mit Kunde)
- [ ] Profil-Foto von Volker Freundt verfügbar?
- [ ] Soll ein Kontaktformular E-Mails senden? (Formspree / EmailJS nötig)
- [ ] Domain: Bleibt es bei GitHub Pages URL oder eigene Domain?
- [ ] Sollen die Projekt-PDFs (Profil_VFreundt.pdf) downloadbar sein?
- [ ] LinkedIn-Profil von Volker Freundt vorhanden?
