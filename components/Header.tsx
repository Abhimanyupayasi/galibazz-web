"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  {
    name: "Jokes",
    links: [
      { name: "Non-veg Jokes", href: "/jokes" },
      { name: "Veg Jokes", href: "/jokes" },
    ],
  },
  {
    name: "News",
    links: [
      { name: "Latest News", href: "/news" },
      { name: "Fake News", href: "/news" },
      { name: "Youth News", href: "/news" },
    ],
  },
  {
    name: "Sahitya",
    links: [
      { name: "Shayari", href: "/news" },
      { name: "Stories", href: "/upcoming" },
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
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex items-center justify-between h-16">

          {/* ===== LOGO ===== */}
          <Link href="/" className="flex items-end gap-0 select-none">
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

          {/* ===== DESKTOP NAV ===== */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">

                <span className="text-sm font-semibold text-gray-800 hover:text-green-600 cursor-pointer flex items-center gap-1">
                  {item.name}
                  <span className="material-symbols-outlined text-[18px] group-hover:rotate-180 transition-transform">
                    expand_more
                  </span>
                </span>

                {/* Hover buffer */}
                <div className="absolute -bottom-3 left-0 w-full h-3"></div>

                {/* Dropdown */}
                <div className="
                  absolute top-full left-0 mt-3 w-56
                  bg-white border border-gray-200 rounded-xl shadow-lg
                  opacity-0 invisible translate-y-1
                  group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                  transition-all duration-150 z-50
                ">
                  {item.links.map((link, i) => (
                    <Link
                      key={i}
                      href={link.href}
                      className="
                        block px-4 py-3 text-sm font-medium text-gray-700
                        hover:bg-gray-50 hover:text-green-600 rounded-lg transition
                      "
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

              </div>
            ))}
          </nav>

          {/* ===== RIGHT SIDE ===== */}
          <div className="flex items-center gap-3">
            {/* Contact Button */}
            <Link
              href="/contact"
              className="bg-yellow-400 hover:bg-yellow-300 text-black px-5 py-2 rounded-full text-sm font-bold shadow-sm transition"
            >
              Contact Us
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-800"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* ===== MOBILE MENU ===== */}
        {mobileOpen && (
          <nav className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item, index) => (
                <div key={index}>
                  <button
                    className="w-full px-3 py-3 text-sm font-semibold text-gray-800 flex justify-between hover:bg-gray-50 rounded-lg"
                    onClick={() =>
                      setExpanded(expanded === index ? null : index)
                    }
                  >
                    {item.name}
                    <span
                      className={`material-symbols-outlined transition-transform ${
                        expanded === index ? "rotate-180" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </button>

                  {expanded === index && (
                    <div className="ml-4 pl-3 border-l-2 border-green-500 space-y-1">
                      {item.links.map((link, i) => (
                        <Link
                          key={i}
                          href={link.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-green-600 rounded-md"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
