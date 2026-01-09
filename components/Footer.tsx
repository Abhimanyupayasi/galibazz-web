"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-12 sm:mt-16">
      <div className="max-w-[1280px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="lg:col-span-2">
            <Link href="#" className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="flex items-center justify-center size-8 rounded-lg bg-primary text-text-dark flex-shrink-0">
                <span className="material-symbols-outlined text-base sm:text-lg">
                  sentiment_very_satisfied
                </span>
              </div>
              <span className="text-lg sm:text-xl font-black tracking-tight text-text-dark">
                Galibazz
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-text-muted mb-4 sm:mb-6 max-w-sm leading-relaxed">
              Galibazz is your go-to destination for diverse content ranging from
              humor to education. We help you learn, laugh, and grow every day.
            </p>
            <div className="flex gap-2 sm:gap-3">
              <a
                className="size-8 rounded-full bg-gray-100 flex items-center justify-center text-text-dark hover:bg-primary hover:text-text-dark transition-colors flex-shrink-0"
                href="#"
              >
                <svg
                  aria-hidden="true"
                  className="size-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a
                className="size-8 rounded-full bg-gray-100 flex items-center justify-center text-text-dark hover:bg-primary hover:text-text-dark transition-colors flex-shrink-0"
                href="#"
              >
                <svg
                  aria-hidden="true"
                  className="size-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    clipRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.407-.06 4.123-.06h.08zm-1.63 2h-1.37c-3.141 0-4.329.17-5.513 1.294C2.559 6.47 2.364 7.57 2.364 10.743v2.514c0 3.173.195 4.273 1.438 5.449 1.184 1.124 2.372 1.294 5.513 1.294h1.37c3.141 0 4.329-.17 5.513-1.294 1.243-1.176 1.438-2.276 1.438-5.449v-2.514c0-3.173-.195-4.273-1.438-5.449C15.014 4.17 13.826 4 10.685 4zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                className="size-8 rounded-full bg-gray-100 flex items-center justify-center text-text-dark hover:bg-primary hover:text-text-dark transition-colors flex-shrink-0"
                href="#"
              >
                <svg
                  aria-hidden="true"
                  className="size-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm sm:text-base text-text-dark mb-3 sm:mb-4">
              Content
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-text-muted">
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="#"
                >
                  Jokes & Humor
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="#"
                >
                  News Satire
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="#"
                >
                  Sahitya
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="#"
                >
                  Entertainment
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm sm:text-base text-text-dark mb-3 sm:mb-4">
              Resources
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-text-muted">
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="#"
                >
                  Online Tools
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="#"
                >
                  Educational Apps
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="#"
                >
                  Coding Guides
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="#"
                >
                  AdSense Tips
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm sm:text-base text-text-dark mb-3 sm:mb-4">
              Legal
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-text-muted">
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="#"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="#"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-text-muted text-center sm:text-left">
          <p>© 2024 Galibazz. All rights reserved.</p>
          <p>
            Made with{" "}
            <span className="material-symbols-outlined text-[14px] sm:text-[16px] align-middle text-red-500 inline">
              favorite
            </span>{" "}
            for creators.
          </p>
        </div>
      </div>
    </footer>
  );
}
