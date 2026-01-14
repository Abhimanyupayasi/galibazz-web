"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CategoryGrid() {
  const pathname = usePathname();

  // Detect language
  const isHindi = pathname.startsWith("/hi");

  // Prefix routes correctly
  const prefix = isHindi ? "/hi" : "/en";

  // ===== CATEGORY DATA =====
  const categories = [
    {
      key: "jokes",
      icon: "sentiment_very_satisfied",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600",
      href: `${prefix}/jokes`,
      name: isHindi ? "जोक्स" : "Jokes",
    },
    {
      key: "news",
      icon: "newspaper",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      href: `${prefix}/news`,
      name: isHindi ? "समाचार" : "News",
    },
    {
      key: "sahitya",
      icon: "menu_book",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
      href: `${prefix}/upcoming`,
      name: isHindi ? "साहित्य" : "Sahitya",
    },
    {
      key: "entertainment",
      icon: "movie",
      bgColor: "bg-pink-100",
      textColor: "text-pink-600",
      href: `${prefix}/upcoming`,
      name: isHindi ? "मनोरंजन" : "Entertainment",
    },
    {
      key: "tools",
      icon: "build",
      bgColor: "bg-green-100",
      textColor: "text-green-600",
      href: `${prefix}/upcoming`,
      name: isHindi ? "टूल्स" : "Tools",
    },
    {
      key: "education",
      icon: "school",
      bgColor: "bg-orange-100",
      textColor: "text-orange-600",
      href: `${prefix}/upcoming`,
      name: isHindi ? "शिक्षा" : "Education",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 mb-12 sm:mb-14">
      {categories.map((category) => (
        <Link
          key={category.key}
          href={category.href}
          className="
            flex flex-col items-center justify-center gap-3 
            p-5 sm:p-6 rounded-xl sm:rounded-2xl 
            bg-white border-2 border-gray-200 
            hover:border-green-400 hover:shadow-lg hover:shadow-green-200/40
            transition-all duration-200 group text-center
          "
        >
          <div
            className={`
              size-13 sm:size-14 rounded-full 
              ${category.bgColor} ${category.textColor} 
              flex items-center justify-center 
              group-hover:scale-110 group-hover:shadow-md 
              transition-all
            `}
          >
            <span className="material-symbols-outlined text-xl sm:text-2xl">
              {category.icon}
            </span>
          </div>

          <span className="font-bold text-sm sm:text-base text-gray-900 leading-tight">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
}
