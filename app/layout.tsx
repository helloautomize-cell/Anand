import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import "@/styles/core.css";
import { Header } from "@/components/header";
import { MobileMenu } from "@/components/mobile-menu";
import { UtilBar, Overlays, Footer, MobileBar } from "@/components/chrome";
import { NavFx } from "@/components/nav-fx";
import { Consent } from "@/components/consent";
import { SITE_URL, isIndexable, site } from "@/lib/site";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Anand Heart Center Bhopal",
    template: "%s",
  },
  description:
    "Heart, lung and vascular surgery by Dr. Anand Yadav in Janki Nagar, Bhopal. Book a consultation on WhatsApp.",
  manifest: "/manifest.json",
  verification: {
    ...(site.verification.google ? { google: site.verification.google } : {}),
    ...(site.verification.bing
      ? { other: { "msvalidate.01": site.verification.bing } }
      : {}),
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#FAF7F2",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable}`}
      data-env={isIndexable ? "prod" : "dev"}
      suppressHydrationWarning
    >
      <body>
        <Overlays />
        <UtilBar />
        <Header />
        <MobileMenu />
        <main id="top">{children}</main>
        <Footer />
        <MobileBar />
        <NavFx />
        <Consent />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('jsok');try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&sessionStorage.getItem('ahc-intro')!=='1')document.documentElement.classList.add('intro')}catch(e){}",
          }}
        />
      </body>
    </html>
  );
}
