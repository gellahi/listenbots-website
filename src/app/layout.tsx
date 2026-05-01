import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://listenbots.com"),
  title: {
    default:
      "ListenBots Software Solutions | Custom Software, AI & Enterprise Systems — Pakistan",
    template: "%s | ListenBots",
  },
  description:
    "ListenBots builds custom software, web & mobile apps, AI engineering systems, and enterprise solutions for businesses in Pakistan and globally. Quality you can see, trust you can feel.",
  keywords: [
    "software development Pakistan",
    "custom software Faisalabad",
    "AI engineering Pakistan",
    "enterprise software solutions",
    "SaaS development",
    "mobile app development Pakistan",
    "agentic AI",
    "software agency Faisalabad",
  ],
  authors: [{ name: "ListenBots Software Solutions" }],
  creator: "ListenBots Software Solutions",
  openGraph: {
    title: "ListenBots Software Solutions",
    description:
      "Intelligent, scalable software built for business growth. Quality you can see, trust you can feel.",
    url: "https://listenbots.com",
    siteName: "ListenBots",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ListenBots Software Solutions",
    description:
      "Custom software, AI engineering and enterprise systems — built for businesses that demand reliability.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#111111",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-bg-primary text-text-primary font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
