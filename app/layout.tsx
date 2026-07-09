import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "vf solutions | CAD & PDM consulting and migration",
  description:
    "Over 35 years of experience in CAD and PDM projects for mechanical and plant engineering. Core focus: CAD/PDM migration. 200+ projects, 45 reference clients. 100% vendor-neutral.",
  keywords: [
    "CAD migration",
    "PDM migration",
    "CAD/PDM consulting",
    "mechanical engineering",
    "SolidWorks",
    "SAP PLM",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
