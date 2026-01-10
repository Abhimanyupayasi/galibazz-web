"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  {
    name: "Jokes",
    links: [
      { name: "Non-veg Jokes", href: "#" },
      { name: "Veg Jokes", href: "#" },
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
      { name: "Stories", href: "#" },
      { name: "Kavita", href: "#" },
    ],
  },
  {
    name: "Entertainment",
    links: [
      { name: "Movies Info", href: "#" },
      { name: "Suggestion Blogs", href: "#" },
      { name: "Podcasts", href: "#" },
    ],
  },
  {
    name: "Online Tools",
    links: [
      { name: "Educational Purpose", href: "#" },
      { name: "APK / Free Tools", href: "#" },
      { name: "Image/Movie Tools", href: "#" },
    ],
  },
  {
    name: "Education",
    links: [
      { name: "Learn Tools (Funny Way)", href: "#" },
      { name: "Coding (Funny Way)", href: "#" },
      { name: "Classes (Funny Way)", href: "#" },
    ],
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<number | null>(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleMobileItem = (index: number) =>
    setExpandedMobileItem(expandedMobileItem === index ? null : index);

  return (
    <header className="sticky top-0 z-50 w-full bg-background-light/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center size-9 sm:size-10 rounded-lg sm:rounded-xl bg-primary text-text-dark group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-lg sm:text-2xl">
                sentiment_very_satisfied
              </span>
            </div>
            <span className="hidden md:block text-lg sm:text-2xl font-black tracking-tight text-text-dark">
              Galibazz
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <span className="text-sm font-semibold nav-item-highlight py-2 cursor-pointer flex items-center gap-1.5 text-text-dark hover:text-primary transition-colors">
                  {item.name}
                  <span className="material-symbols-outlined text-[18px] group-hover:rotate-180 transition-transform">
                    expand_more
                  </span>
                </span>

                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-200 hidden group-hover:block p-3 z-50">
                  {item.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href={link.href}
                      className="block px-4 py-3 text-sm font-medium text-text-dark hover:bg-background-light hover:text-primary rounded-lg transition-all"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {/* Right Actions (Search REMOVED) */}
          <div className="flex items-center gap-3">
            {/* Subscribe Button */}
            <button className="bg-primary hover:bg-yellow-500 text-text-dark px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg whitespace-nowrap">
              Subscribe
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-text-dark"
              onClick={toggleMobileMenu}
            >
              <span className="material-symbols-outlined text-[24px]">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden bg-white/70 backdrop-blur border-t border-gray-200">
            <div className="px-4 py-4 flex flex-col gap-1">
              {navItems.map((item, index) => (
                <div key={index}>
                  <button
                    className="w-full px-4 py-3 text-sm font-semibold text-text-dark hover:bg-gray-100 rounded-lg flex justify-between"
                    onClick={() => toggleMobileItem(index)}
                  >
                    {item.name}
                    <span
                      className={`material-symbols-outlined transition-transform ${
                        expandedMobileItem === index ? "rotate-180" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </button>

                  {expandedMobileItem === index && (
                    <div className="ml-4 pl-3 border-l-2 border-primary py-2 space-y-1">
                      {item.links.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          href={link.href}
                          className="block px-3 py-2 text-sm text-text-muted hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
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
