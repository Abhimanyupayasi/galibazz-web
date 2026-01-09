"use client";

const popularPosts = [
  {
    title: "How to verify your AdSense account in 3 steps",
    views: "12k views",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCC7DRi0rxcA9_gwcZ2etsGUKsk84n87pG08v8devGeE6p9IDRULnGju1zAjGlS2I9X_WNzu8-7jRTVlymJM7pJb_mpzN13uRCM6DEiWdQWq6dZCh_aBrRAUu-l_yacfqWAd4j8EOv6kfD45blyVEPQ9nR4GnoxuzixUwizDcIEkSQujsXrEvqq7Wj5NUPTYCt4OYUuPO1W9rmaJy7_IlmzxfAThZLvH8voFJD97UjmQByhdBugfGWkRrqmMrSgAnkf4txI5B0a79i5",
  },
  {
    title: "The funniest Hindi jokes of 2023 compilation",
    views: "8.5k views",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVNT9nGZH0GIz0oMcw9jBpzEfkRQPUcVXeiTkpGolyBGDPFQ0O9R_Hm8u5cmXxe4QRW_2z3-zqqiWiPCAXIaybUdyXv5RGLgbZoHUHk6rPLuXSLnPZhhjat6l4_oDLQwUa-bYUdRg0qixkjHbtwB8oHrBOyYaqVC3ox3P_LB_6iPzF274Mz_3N10NZQfC2TDCsjco2BID_z722QgWhfZEptJx_TIADo71zSWx-v2A0SF3dbl4iuTqDcutTa1fO-sMIW7uHx2h0WPPD",
  },
  {
    title: "Scholarship opportunities for Indian students abroad",
    views: "6k views",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoiMGH11-SohamRkYMhfNG5OtBKWEmCpy8OaGnwd07DN6QTM0lYw7VLs3DsDXuuck2WA2V8iLBw6GeYXkwqv7QRddmLL5ChpL3LwijwvKbehDIiVcglf8om1LyoVGKkY6QE14UkgaiCwRxA3fZ7q4Eg4rLUdwyoqL1-6AvgMV8EAU8-G4yPYQaaJa-OMH97-wyFPMUBGRqiQCnV-Q4Nvzweuq4bpEqmI8m5-DdCy458f4hRU-2Xzq33bgO9px18s_63Pj66QEyRLxH",
  },
];

const quickTopics = [
  "AdSense",
  "Blogging",
  "Veg Jokes",
  "Shayari",
  "Fake News",
  "Coding",
  "Online Tools",
];

export default function Sidebar() {
  return (
    <div className="lg:col-span-4 flex flex-col gap-7 sm:gap-8">
      {/* Popular Now */}
      <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-5 sm:mb-6">
          <h3 className="font-bold text-lg sm:text-xl text-text-dark">
            Popular Now
          </h3>
          <span className="material-symbols-outlined text-primary text-[22px] sm:text-[24px]">
            trending_up
          </span>
        </div>
        <div className="flex flex-col gap-4 sm:gap-5">
          {popularPosts.map((post) => (
            <a
              key={post.title}
              href="#"
              className="flex gap-3 sm:gap-4 group hover:opacity-75 transition-opacity"
            >
              <div
                className="size-14 sm:size-16 rounded-lg bg-gray-100 flex-shrink-0 bg-cover bg-center border border-gray-200 shadow-sm group-hover:shadow-md transition-shadow"
                style={{
                  backgroundImage: `url('${post.image}')`,
                }}
              />
              <div className="min-w-0 flex-1">
                <h4 className="font-bold text-xs sm:text-sm text-text-dark leading-snug group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <span className="text-xs text-text-muted mt-2 block">
                  {post.views}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-primary/20 relative overflow-hidden shadow-sm">
        <div className="absolute -top-6 -right-6 size-28 rounded-full bg-primary/15 blur-2xl"></div>
        <div className="size-11 sm:size-12 bg-primary rounded-lg sm:rounded-xl flex items-center justify-center text-text-dark mb-4 sm:mb-5 shadow-md relative z-10">
          <span className="material-symbols-outlined text-[22px] sm:text-[24px]">mail</span>
        </div>
        <h3 className="font-bold text-lg sm:text-xl text-text-dark mb-2 relative z-10">
          Stay Updated
        </h3>
        <p className="text-xs sm:text-sm text-text-muted mb-4 sm:mb-5 relative z-10 leading-relaxed">
          Get the best content delivered to your inbox. No spam, just pure value.
        </p>
        <form className="flex flex-col gap-3 relative z-10">
          <input
            className="w-full rounded-lg sm:rounded-xl border-2 border-gray-200 bg-white px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm focus:ring-2 focus:ring-primary focus:border-primary text-text-dark placeholder-text-muted/60 transition-all"
            placeholder="Enter your email"
            type="email"
          />
          <button
            className="w-full bg-primary hover:bg-yellow-500 text-text-dark font-bold py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm transition-all shadow-md hover:shadow-lg active:scale-95"
            type="button"
          >
            Subscribe Now
          </button>
        </form>
        <p className="text-xs text-text-muted/60 mt-3 sm:mt-4 text-center relative z-10">
          We respect your privacy
        </p>
      </div>

      {/* Quick Topics */}
      <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-200">
        <h3 className="font-bold text-lg sm:text-xl text-text-dark mb-4 sm:mb-5">
          Quick Topics
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {quickTopics.map((topic) => (
            <a
              key={topic}
              href="#"
              className="bg-gray-50 hover:bg-primary/10 text-text-dark hover:text-primary px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all border border-gray-200 hover:border-primary"
            >
              {topic}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
