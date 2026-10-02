import type { Metadata, Viewport } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "FiscalCanopy - Your Guide to Insurance and Finance",
    template: "%s | FiscalCanopy",
  },

  description:
    "Expert insights and guides on insurance, finance, budgeting, and wealth management to help you make informed financial decisions.",

  keywords: [
    "insurance",
    "finance",
    "budgeting",
    "investments",
    "financial planning",
    "wealth management",
    "fiscal",
    "canopy",
  ],

  authors: [
    {
      name: "FiscalCanopy",
    },
  ],

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "FiscalCanopy",

    title:
      "FiscalCanopy - Your Guide to Insurance and Finance",

    description:
      "Expert insights and guides on insurance, finance, budgeting, and wealth management.",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "FiscalCanopy - Your Guide to Insurance and Finance",

    description:
      "Expert insights and guides on insurance, finance, budgeting, and wealth management.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
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
      className="scroll-smooth"
    >
      <body className="antialiased bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <Header />

        <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}