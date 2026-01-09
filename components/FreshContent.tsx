"use client";

const articles = [
  {
    title: "AdSense Approval Guide 2024: Fast Track Your Earnings",
    description: "A step-by-step guide to getting your blog approved fast. Learn the secrets expert bloggers use to maximize revenue.",
    tag: "AdSense Tips",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBr_t5EkUEj3MnBlv1kRFztEMUwrrwAUUhGW74v2SneCqFdEfGtwkUJiXWBx6yuTpYPW_XwqLAEd3yruvCUN9PIRH1FIryMoORvECiAzB7toEse87f3_XTJFSYSbv3haTtzjcaQltARtBRh_3NTIKSw0flDAURL79h4GmxIJC6e0_6P3CS6RfxjJrZY24jeDiuNAkA1T4NL53mLyfQLgr21_xEAF8MeOJqv_Q3ymTCty5zhsvtTszPag1YqXUFomfzykXTaVx5ib_Tc",
    timeAgo: "2 days ago",
    readTime: "5 min read",
  },
  {
    title: "Teacher Student Jokes in Hindi: Classroom Fun",
    description: "Laugh out loud with these classic classroom jokes. Perfect for lightening the mood during study breaks.",
    tag: "Jokes",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBI11h8S8XglGyX9OCwQ7ox2jV1p2d2DW8Qb6l608-_fnsNat9m6KjzD_HSgg1AsUEFD5EmtGFmnnexKGoySGDK6_QG7dbANNluXSudeqhmyyVb-BWvNYQlRiQ9pF4SiQASAV4smPulO7EQjF94-DI4-7gFPLHiTkeNlF9E4ch158c4u_BxSoHCUSZku5KAcPBadFOSIjGzCfyDrd3I3DoA0M3LAjIxwqHg7kUb9oKkkzEo19P_sut9QLdcL00Su9wfplf8ueIsDfaB",
    timeAgo: "3 days ago",
    readTime: "3 min read",
  },
  {
    title: "Top 5 High CPC Keywords for Bloggers in India",
    description: "Maximize your earnings with these profitable topics. Don't waste time on low paying content.",
    tag: "Finance",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCS-lNGLpHHyxR_ETVJJ_AFQc7yceEhTXObdanAGeeT2uCcbhh8qIIVpg0bOK7MVWoKuIr41BCjaqpgm59kHuHdry0dHFNymYOM3yM-i27g528D3uJ3pdBDo-q2fYuC81deIhlVW6O0qSFuRiYJXfp9sPCfp1gxLG1yRsnAcepsSOrG_eEmui8cB3RhvEjNQMHCmBG97SyKEUhP6wTN0OjjIx4fy2J-QoPyv5zhbn1WHtlcTuX8ruUYcru6PBwNT_iD4QxXnO26Cc4",
    timeAgo: "4 days ago",
    readTime: "8 min read",
  },
  {
    title: "Funny Office Moments Compilation 2023",
    description: "Relatable corporate humor to brighten your day. Send this to your boss if you dare!",
    tag: "Humor",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEX8IgqeLqQpUOM-Uw0y9N8zq6gHbcwPo4ZP-jlJNTFfoMvBT2fO-nI-bhpdFaLBQxB3Pl1xVv0TRALHjWl1wE2ZV0KcoLsus1CVXC9gOj3f4lrP9RPJLW75M8Hweoa0-bKJLClAUPkJF2pFxbTbsMwIDAM9RNKk_kNwLEeqC5FNZJRraD5TuMi9j0y9q6EY13ukPZTrqmqbNzdGtwBcsyLYYG2MXIkEc9YgWbsHeDFmjGcJC00Omnn0GzfLv7Exx1SOv9T7PovQ-1",
    timeAgo: "5 days ago",
    readTime: "4 min read",
  },
  {
    title: "How to Increase Organic Traffic: Simple SEO Hacks",
    description: "Simple SEO strategies to boost your site visitors without spending a rupee on ads.",
    tag: "SEO",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6rm2IYTH5BA7aEBDjT7U-oUu5jpiQO3lcPiUW3wsfrysD_hmFPmqHtITGJPerAYepQnNinX_Y_lNw9V_3459P4Nv2HReP8wMxTahlK_5nYRSMVar7jplHffv-ERy99jseYF2p6bBVtIaCOBX0oGOzZ_I8lgsNoGgI0T2tiHUtHmd0mfj1D9f1ArhCiHNYST1CxO6lr3ro5QRFOT_OlnMg4avWM8Cn4smlT-daLMEFaATIeAHqgKPcRxvI4WkBdOhFgBjq5rH3xm67",
    timeAgo: "1 week ago",
    readTime: "10 min read",
  },
  {
    title: "Best WordPress Plugins for SEO & Speed",
    description: "Essential tools every blogger needs installed immediately after setting up a site.",
    tag: "WordPress",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_FPD9S3AOkymKjBKT-0FcsmitDBW_4Eyk7gGDnp7S3vRXc6Y7zJSMF1I79pdherLa_VW34_gJpLSaJ7Vs3XA0Jup_RbqgFCqLn3yV3iWTj7FzBY6BwDM4rPEi-8U08OPWrjHkfObW_rgLzhzFMwTeMDbFN9BoHE21AmPssn0oJOP4snYZ8015s3v91wf3J6rO9LMDOFaej90GtSGf1hFg8zlR_U7sl1-CVFXDWVUWuTw_h0PhkcgzYHxYEGy-6TNmz8X1n73uspiq",
    timeAgo: "1 week ago",
    readTime: "6 min read",
  },
];

export default function FreshContent() {
  return (
    <div className="lg:col-span-8 flex flex-col gap-8 sm:gap-10">
      <div className="flex items-center gap-3 sm:gap-4">
        <h2 className="text-xl sm:text-2xl font-black text-text-dark whitespace-nowrap">
          Fresh Content
        </h2>
        <div className="h-1 flex-grow bg-gray-200 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 lg:gap-x-6 lg:gap-y-12">
        {articles.map((article) => (
          <article
            key={article.title}
            className="flex flex-col gap-3 sm:gap-4 group cursor-pointer transition-all duration-200"
          >
            <div
              className="relative overflow-hidden rounded-xl sm:rounded-2xl aspect-video bg-gray-200 shadow-md group-hover:shadow-lg transition-shadow duration-200"
              style={{
                backgroundImage: `url('${article.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/95 backdrop-blur-sm px-3 sm:px-4 py-1.5 rounded-lg text-xs font-bold text-text-dark uppercase tracking-widest shadow-md">
                {article.tag}
              </div>
            </div>
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <h2 className="text-base sm:text-lg md:text-xl font-bold leading-snug text-text-dark group-hover:text-primary transition-colors duration-200">
                {article.title}
              </h2>
              <p className="text-text-muted text-xs sm:text-sm line-clamp-2 leading-relaxed">
                {article.description}
              </p>
              <div className="flex items-center gap-1.5 sm:gap-2.5 mt-1 text-xs font-medium text-text-muted">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] sm:text-[16px]">
                    schedule
                  </span>
                  <span className="hidden sm:inline">{article.timeAgo}</span>
                  <span className="sm:hidden">{article.timeAgo?.split(' ')[0]}</span>
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">{article.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 sm:gap-3 mt-6 overflow-x-auto pb-2">
        <button className="flex items-center justify-center size-8 sm:size-10 rounded-lg hover:bg-gray-100 text-text-muted transition-colors flex-shrink-0">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button className="flex items-center justify-center size-8 sm:size-10 rounded-lg bg-primary text-text-dark font-bold shadow-sm flex-shrink-0">
          1
        </button>
        <button className="flex items-center justify-center size-8 sm:size-10 rounded-lg hover:bg-gray-100 text-text-muted font-medium transition-colors flex-shrink-0">
          2
        </button>
        <button className="flex items-center justify-center size-8 sm:size-10 rounded-lg hover:bg-gray-100 text-text-muted font-medium transition-colors flex-shrink-0">
          3
        </button>
        <span className="flex items-center justify-center size-8 sm:size-10 text-text-muted flex-shrink-0">
          ...
        </span>
        <button className="flex items-center justify-center size-8 sm:size-10 rounded-lg hover:bg-gray-100 text-text-muted transition-colors flex-shrink-0">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  );
}
