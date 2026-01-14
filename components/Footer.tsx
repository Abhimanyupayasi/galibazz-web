"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isHindi = pathname.startsWith("/hi");

  // Language content dictionary
  const content = {
    en: {
      description:
        "Galibazz is your go-to destination for diverse content ranging from humor to education. We help you learn, laugh, and grow every day.",
      sections: {
        content: "Content",
        resources: "Resources",
        legal: "Legal",
      },
      links: {
        jokes: "Jokes & Humor",
        satire: "News Satire",
        sahitya: "Sahitya",
        entertainment: "Entertainment",
        tools: "Online Tools",
        apps: "Educational Apps",
        coding: "Coding Guides",
        adsense: "AdSense Tips",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        cookies: "Cookie Policy",
        contact: "Contact Us",
      },
      copyright: "© 2024 Galibazz. All rights reserved.",
      made: "Made with",
    },
    hi: {
      description:
        "Galibazz आपका मनोरंजन और ज्ञान का केंद्र है। यहां आपको हंसी, सीख और मज़ा — सब कुछ मिलेगा।",
      sections: {
        content: "सामग्री",
        resources: "संसाधन",
        legal: "कानूनी",
      },
      links: {
        jokes: "चुटकुले और हास्य",
        satire: "न्यूज़ सटायर",
        sahitya: "साहित्य",
        entertainment: "मनोरंजन",
        tools: "ऑनलाइन टूल्स",
        apps: "शैक्षिक ऐप्स",
        coding: "कोडिंग गाइड",
        adsense: "AdSense टिप्स",
        privacy: "प्राइवेसी पॉलिसी",
        terms: "सेवा की शर्तें",
        cookies: "कुकी पॉलिसी",
        contact: "संपर्क करें",
      },
      copyright: "© 2024 Galibazz. सभी अधिकार सुरक्षित।",
      made: "प्यार से बनाया गया",
    },
  };

  const t = isHindi ? content.hi : content.en;
  const base = isHindi ? "/hi" : "/en";

  return (
    <footer className="border-t border-gray-200 bg-white mt-12 sm:mt-16">
      <div className="max-w-[1280px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12">

          {/* Logo + About */}
          <div className="lg:col-span-2">
            <Link href={`${base}`} className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="flex items-center justify-center size-8 rounded-lg bg-primary text-text-dark">
                <span className="material-symbols-outlined">sentiment_very_satisfied</span>
              </div>
              <span className="text-lg sm:text-xl font-black tracking-tight text-text-dark">
                Galibazz
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-text-muted mb-4 sm:mb-6 max-w-sm leading-relaxed">
              {t.description}
            </p>
          </div>

          {/* Content */}
          <div>
            <h4 className="font-bold text-sm sm:text-base text-text-dark mb-3 sm:mb-4">
              {t.sections.content}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-text-muted">
              <li><Link className="hover:text-primary" href={`${base}/jokes`}>{t.links.jokes}</Link></li>
              <li><span className="hover:text-primary cursor-pointer">{t.links.satire}</span></li>
              <li><span className="hover:text-primary cursor-pointer">{t.links.sahitya}</span></li>
              <li><span className="hover:text-primary cursor-pointer">{t.links.entertainment}</span></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-sm sm:text-base text-text-dark mb-3 sm:mb-4">
              {t.sections.resources}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-text-muted">
              <li><span className="hover:text-primary cursor-pointer">{t.links.tools}</span></li>
              <li><span className="hover:text-primary cursor-pointer">{t.links.apps}</span></li>
              <li><span className="hover:text-primary cursor-pointer">{t.links.coding}</span></li>
              <li><span className="hover:text-primary cursor-pointer">{t.links.adsense}</span></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-sm sm:text-base text-text-dark mb-3 sm:mb-4">
              {t.sections.legal}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-text-muted">
              <li><span className="hover:text-primary cursor-pointer">{t.links.privacy}</span></li>
              <li><span className="hover:text-primary cursor-pointer">{t.links.terms}</span></li>
              <li><span className="hover:text-primary cursor-pointer">{t.links.cookies}</span></li>
              <li><span className="hover:text-primary cursor-pointer">{t.links.contact}</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-text-muted">
          <p>{t.copyright}</p>
          <p>
            {t.made}{" "}
            <span className="material-symbols-outlined text-red-500 align-middle text-sm">
              favorite
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
}
