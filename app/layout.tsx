import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { GrainOverlay } from "@/components/layout/GrainOverlay";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import {
  SITE_ICON_PATH,
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_URL,
  seo,
} from "@/content/seo";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: seo.home.title,
    template: `%s | ${SITE_NAME}`,
  },
  description: seo.home.description,
  keywords: [
    "Communication Intelligence",
    "Executive Communication Advisory",
    "Leadership Communication",
    "Development Communication",
    "Goldapples Media Associates",
    "Strategic Communication Nigeria",
    "Executive Education",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_GB",
    type: "website",
    images: [SITE_OG_IMAGE],
  },
  twitter: {
    card: "summary",
    images: [SITE_ICON_PATH],
  },
  icons: {
    icon: SITE_ICON_PATH,
    shortcut: SITE_ICON_PATH,
    apple: SITE_ICON_PATH,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body
        className="text-graphite flex min-h-full flex-col bg-white font-sans"
        suppressHydrationWarning
      >
        <GrainOverlay />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
