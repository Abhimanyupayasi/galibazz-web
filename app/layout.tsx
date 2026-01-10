import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Noto_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Galibazz - Explore Categories",
  description: "Your versatile content hub. From hilarious jokes and 'fake news' satire to deep-dive education and AdSense strategies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${plusJakartaSans.variable} ${notoSans.variable} bg-background-light font-body text-text-dark min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}