"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

/* ===== LANGUAGE DICTIONARY ===== */

const dict = {
  en: {
    contact: "Contact Us",
    language: "English",
    switchTo: "हिंदी",
    nav: [
      {
        name: "Jokes",
        links: [
          { name: "Non-veg Jokes", href: "/en/jokes" },
          { name: "Veg Jokes", href: "/en/jokes" },
          { name: "Hindi Jokes", href: "/en/jokes/hindi-jokes" },
        ],
      },
      {
        name: "News",
        links: [
          { name: "Latest News", href: "/en/news" },
          { name: "Fake News", href: "/upcoming" },
          { name: "Youth News", href: "/upcoming" },
        ],
      },
      {
        name: "Sahitya",
        links: [
          { name: "Shayari", href: "/upcoming" },
          { name: "Stories", href: "/hi/sahitya/stories" },
          { name: "Kavita", href: "/upcoming" },
        ],
      },
      {
        name: "Entertainment",
        links: [
          { name: "Movies Info", href: "/upcoming" },
          { name: "Suggestion Blogs", href: "/upcoming" },
          { name: "Podcasts", href: "/upcoming" },
        ],
      },
    ],
  },

  hi: {
    contact: "संपर्क करें",
    language: "हिंदी",
    switchTo: "EN",
    nav: [
      {
        name: "जोक्स",
        links: [
          { name: "नॉन-वेज जोक्स", href: "/hi/jokes" },
          { name: "वेज जोक्स", href: "/hi/jokes" },
          { name: "हिंदी जोक्स", href: "/hi/jokes/hindi-jokes" },
        ],
      },
      {
        name: "समाचार",
        links: [
          { name: "ताज़ा खबर", href: "/hi/news" },
          { name: "फेक न्यूज़", href: "/hi/news" },
          { name: "युवा न्यूज़", href: "/hi/news" },
        ],
      },
      {
        name: "साहित्य",
        links: [
          { name: "शायरी", href: "/hi/news" },
          { name: "कहानियाँ", href: "/hi/sahitya/stories" },
          { name: "कविता", href: "/hi/upcoming" },
        ],
      },
      {
        name: "मनोरंजन",
        links: [
          { name: "मूवी जानकारी", href: "/hi/upcoming" },
          { name: "ब्लॉग सुझाव", href: "/hi/upcoming" },
          { name: "पॉडकास्ट", href: "/hi/upcoming" },
        ],
      },
    ],
  },
};

/* ===== HEADER COMPONENT ===== */

export default function Header() {
  const pathname = usePathname();

  const lang = pathname.startsWith("/hi") ? "hi" : "en";
  const t = dict[lang];

  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [langOpen, setLangOpen] = useState(false);

  // build switch path
  // remove any existing lang prefix
const cleanPath = pathname.replace(/^\/(en|hi)/, "");

// build correct switch path
const switchPath = lang === "hi" 
  ? `/en${cleanPath || ""}` 
  : `/hi${cleanPath || ""}`;


  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link href={lang === "hi" ? "/hi" : "/"} className="flex items-end gap-0 select-none">
            <span className="text-3xl font-extrabold text-[#3b0a3a] tracking-tight">
              Gali
            </span>
            <span className="text-3xl font-extrabold bg-gradient-to-r from-green-600 to-teal-400 bg-clip-text text-transparent tracking-tight">
              bazz
            </span>
            <span className="text-xs ml-1 mb-1 text-yellow-400 font-bold">
              blog
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8">
            {t.nav.map((item, index) => (
              <div key={index} className="relative group">
                <span className="text-sm font-semibold text-gray-800 hover:text-green-600 cursor-pointer flex items-center gap-1">
                  {item.name}
                  <span className="material-symbols-outlined text-[18px] group-hover:rotate-180 transition-transform">
                    expand_more
                  </span>
                </span>

                <div className="absolute top-full left-0 mt-3 w-56 bg-white border border-gray-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  {item.links.map((link, i) => (
                    <Link
                      key={i}
                      href={link.href}
                      className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-green-600 rounded-lg transition"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {/* DESKTOP RIGHT */}
          <div className="hidden lg:flex items-center gap-4">

            {/* Language Switch */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="text-sm font-semibold px-3 py-1 rounded-md border border-gray-300 hover:border-green-500 hover:text-green-600 transition flex items-center gap-1"
              >
                {t.language}
                <span className="material-symbols-outlined text-[18px]">
                  expand_more
                </span>
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 w-28 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <Link
                    href={switchPath}
                    className="block px-3 py-2 text-sm hover:bg-gray-50 hover:text-green-600"
                    onClick={() => setLangOpen(false)}
                  >
                    {t.switchTo}
                  </Link>
                </div>
              )}
            </div>

            {/* Contact */}
            <Link
              href={lang === "hi" ? "/hi/contact" : "/contact"}
              className="bg-yellow-400 hover:bg-yellow-300 text-black px-5 py-2 rounded-full text-sm font-bold shadow-sm transition"
            >
              {t.contact}
            </Link>
          </div>

          {/* MOBILE RIGHT */}
          <div className="lg:hidden flex items-center gap-2">

            {/* Mobile Language */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="text-xs font-semibold px-2 py-1 rounded border border-gray-300 hover:border-green-500 hover:text-green-600 flex items-center gap-1"
              >
                {lang === "hi" ? "हिंदी" : "EN"}
                <span className="material-symbols-outlined text-[16px]">
                  expand_more
                </span>
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-1 w-20 bg-white border border-gray-200 rounded-md shadow-md z-50">
                  <Link
                    href={switchPath}
                    className="block px-2 py-2 text-xs hover:bg-gray-50 hover:text-green-600"
                    onClick={() => {
                      setLangOpen(false);
                      setMobileOpen(false);
                    }}
                  >
                    {t.switchTo}
                  </Link>
                </div>
              )}
            </div>

            {/* Hamburger */}
            <button
              className="p-2 text-gray-800"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <nav className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-1">
              {t.nav.map((item, index) => (
                <div key={index}>
                  <button
                    className="w-full px-3 py-3 text-sm font-semibold text-gray-800 flex justify-between hover:bg-gray-50 rounded-lg"
                    onClick={() =>
                      setExpanded(expanded === index ? null : index)
                    }
                  >
                    {item.name}
                    <span className="material-symbols-outlined">
                      {expanded === index ? "expand_less" : "expand_more"}
                    </span>
                  </button>

                  {expanded === index && (
                    <div className="ml-4 pl-3 border-l-2 border-green-500 space-y-1">
                      {item.links.map((link, i) => (
                        <Link
                          key={i}
                          href={link.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-green-600 rounded-md"
                          onClick={() => setMobileOpen(false)}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Contact */}
              <Link
                href={lang === "hi" ? "/hi/contact" : "/contact"}
                className="block mt-3 text-center bg-yellow-400 hover:bg-yellow-300 text-black px-5 py-2 rounded-full text-sm font-bold shadow-sm transition"
                onClick={() => setMobileOpen(false)}
              >
                {t.contact}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
