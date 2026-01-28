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
  metadataBase: new URL("https://www.galibazz.lol"),

  title: {
    default: "GaliBazz – Funny Jokes, News & Entertainment",
    template: "%s | GaliBazz",
  },

  description:
    "Welcome to GaliBazz – your fun corner of the internet. Laugh, read, and express without filters. Funny jokes, viral news, sahitya and entertainment.",

  keywords: [
    "galibazz",
    "funny jokes",
    "bad jokes",
    "hindi jokes",
    "english jokes",
    "viral news",
    "entertainment",
    "sahitya",
    "humor website"
  ],

  alternates: {
    canonical: "https://www.galibazz.lol/",
  },

  authors: [
    { name: "GaliBazz Team", url: "https://www.galibazz.lol" }
  ],

  creator: "GaliBazz",
  publisher: "GaliBazz",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.galibazz.lol/",
    title: "GaliBazz – Funny Jokes, News & Entertainment",
    description:
      "Laugh, read and express without filters. Explore jokes, news, sahitya and entertainment on GaliBazz.",
    siteName: "GaliBazz",
    images: [
      {
        url: "https://old.galibazz.lol/favicon/favicon-32x32.png",
        width: 32,
        height: 32,
        alt: "GaliBazz logo",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "GaliBazz – Funny Jokes, News & Entertainment",
    description:
      "Your fun corner of the internet. Funny jokes, viral news & entertainment.",
    images: ["https://old.galibazz.lol/favicon/favicon-32x32.png"],
  },

  icons: {
    icon: [
      {
        url: "https://old.galibazz.lol/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "https://old.galibazz.lol/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "https://old.galibazz.lol/favicon/favicon.ico",
      },
    ],
    apple: "https://old.galibazz.lol/favicon/apple-touch-icon.png",
  },

  other: {
    "google-adsense-account": "ca-pub-4665029971539939",
  },
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
      <body
  suppressHydrationWarning
  className={`${plusJakartaSans.variable} ${notoSans.variable} bg-background-light font-body text-text-dark min-h-screen flex flex-col`}
>

        {children}
      </body>
    </html>
  );
}