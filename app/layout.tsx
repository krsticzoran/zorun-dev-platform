import type { Metadata } from "next";
import { Inter, Familjen_Grotesk, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Suspense } from "react";
import "./globals.css";
import Header from "@/components/layout/header/header";
import { Footer } from "@/components/layout/footer/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const familjenGrotesk = Familjen_Grotesk({
  variable: "--font-familjen",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "zorun.dev // Engineering the Run",
  description:
    "A personal journey towards a sub-3 marathon. Exploring the intersection of long-distance running and a disciplined, data-driven mindset.",
  alternates: {
    canonical: "https://zorun.dev",
  },
  openGraph: {
    title: "zorun.dev // Engineering the Run",
    description:
      "A personal journey towards a sub-3 marathon. Exploring the intersection of long-distance running and a disciplined, data-driven mindset.",
    url: "https://zorun.dev",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "zorun.dev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "zorun.dev // Engineering the Run",
    description:
      "A personal journey towards a sub-3 marathon. Exploring the intersection of long-distance running and a disciplined, data-driven mindset.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr-Latn">
      <body
        className={`${inter.variable} ${familjenGrotesk.variable} ${instrumentSerif.variable} antialiased`}
      >
        <Header />
        {children}
        <Analytics />
        <Suspense>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
