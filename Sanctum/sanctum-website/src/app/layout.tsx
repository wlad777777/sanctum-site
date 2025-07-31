import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Sanctum - Sacred Ritual Touch for Deep Transformation",
  description: "Experience profound transformation through sacred ritual touch and breathwork. Premium, professional therapeutic service in Nuremberg, Germany.",
  keywords: "sacred bodywork, transformational therapy, ritual massage, breathwork, energy healing, Nuremberg",
  authors: [{ name: "Sanctum" }],
  openGraph: {
    title: "Sanctum - Sacred Ritual Touch for Deep Transformation",
    description: "Experience profound transformation through sacred ritual touch and breathwork.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
