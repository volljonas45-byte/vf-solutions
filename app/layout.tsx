import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "vf solutions | CAD · PDM · ERP · Beratung",
  description: "Über 35 Jahre Erfahrung in CAD/PDM/ERP-Projekten für den Maschinen- und Anlagenbau. 180+ Projekte, 43+ Referenzkunden. 100% anbieterneutral. Volker Freundt, Freiburg.",
  keywords: ["CAD Beratung", "PDM Einführung", "ERP Integration", "Maschinenbau", "SolidWorks", "SAP PLM", "Freiburg"],
  openGraph: {
    title: "vf solutions | CAD/PDM/ERP-Beratung",
    description: "35+ Jahre Erfahrung · 180+ Projekte · 100% anbieterneutral",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <Navigation />
        <main className="pt-16 flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
