import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Noto_Sans } from "next/font/google";
import "./globals.css";

/* =======================
   GOOGLE FONTS (SSR SAFE)
======================= */

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

/* =======================
   METADATA (NO <head>)
======================= */

export const metadata: Metadata = {
  title: "Galibazz - Explore Categories",
  description:
    "Your versatile content hub. From hilarious jokes and fake news satire to deep-dive education and AdSense strategies.",
};

/* =======================
   ROOT LAYOUT
======================= */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${plusJakartaSans.variable}
          ${notoSans.variable}
          min-h-screen
          flex
          flex-col
          bg-gray-50
          text-gray-900
          font-sans
        `}
      >
        {children}
      </body>
    </html>
  );
}
