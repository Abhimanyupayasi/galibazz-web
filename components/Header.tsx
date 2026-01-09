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
      { name: "Latest News", href: "#" },
      { name: "Fake News", href: "#" },
      { name: "Youth News", href: "#" },
    ],
  },
  {
    name: "Sahitya",
    links: [
      { name: "Shayari", href: "#" },
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
  
  const toggleMobileItem = (index: number) => {
    setExpandedMobileItem(expandedMobileItem === index ? null : index);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background-light/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a className="flex items-center gap-2 group" href="#">
              <div className="flex items-center justify-center size-9 sm:size-10 rounded-lg sm:rounded-xl bg-primary text-text-dark group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-lg sm:text-2xl">sentiment_very_satisfied</span>
              </div>
              <span className="hidden md:block text-lg sm:text-2xl font-black tracking-tight text-text-dark">
                Galibazz
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <a
                  className="text-sm font-semibold nav-item-highlight py-2 cursor-pointer flex items-center gap-1.5 text-text-dark hover:text-primary transition-colors"
                  href="#"
                >
                  {item.name}
                  <span className="material-symbols-outlined text-[18px] group-hover:rotate-180 transition-transform">expand_more</span>
                </a>
                <div
                  className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-200 hidden group-hover:block p-3 z-50 ${
                    index === navItems.length - 1 ? "right-0 left-auto" : ""
                  }`}
                >
                  {item.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      className="block px-4 py-3 text-sm font-medium text-text-dark hover:bg-background-light hover:text-primary rounded-lg transition-all"
                      href={link.href}
                    >
                      {link.name}
                    </a>
                  ))}
                  {index === navItems.length - 1 && (
                    <>
                      <div className="border-t border-gray-200 my-2"></div>
                      <a
                        className="block px-4 py-2 text-xs font-medium text-text-muted hover:text-primary transition-colors"
                        href="#"
                      >
                        View Coding Topics (HTML, CSS, JS...)
                      </a>
                    </>
                  )}
                </div>
              </div>
            ))}
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center gap-3">
            {/* Search Bar */}
            <div className="hidden xl:flex items-center bg-gray-100 rounded-full px-4 py-2.5 w-48 transition-all focus-within:ring-2 focus-within:ring-primary/30">
              <span className="material-symbols-outlined text-gray-400 text-[20px]">
                search
              </span>
              <input
                className="bg-transparent border-none outline-none text-sm w-full ml-2 text-text-dark placeholder-gray-400 focus:ring-0"
                placeholder="Search..."
                type="text"
              />
            </div>

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
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden bg-white/50 backdrop-blur border-t border-gray-200">
            <div className="px-4 py-4 flex flex-col gap-1">
              {navItems.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <button
                    className="w-full text-left px-4 py-3 text-sm font-semibold text-text-dark hover:bg-gray-100 rounded-lg flex items-center justify-between transition-colors"
                    onClick={() => toggleMobileItem(index)}
                  >
                    {item.name}
                    <span className={`material-symbols-outlined transition-transform ${expandedMobileItem === index ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </button>
                  {expandedMobileItem === index && (
                    <div className="flex flex-col gap-1 ml-4 border-l-2 border-primary pl-3 py-2">
                      {item.links?.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.href}
                          className="text-sm text-text-muted hover:text-primary hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
                        >
                          {link.name}
                        </a>
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