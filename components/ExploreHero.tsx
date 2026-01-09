"use client";

export default function ExploreHero() {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12 sm:mb-14 border-b border-gray-200 pb-7 sm:pb-8">
      <div className="max-w-3xl flex-1">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-text-dark mb-4 sm:mb-5 leading-tight">
          Explore <span className="text-primary">Galibazz</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-text-muted leading-relaxed max-w-2xl">
          Your versatile content hub. From hilarious jokes and "fake news" satire
          to deep-dive education and AdSense strategies. Learning and laughing in
          one place.
        </p>
      </div>
      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 w-full md:w-auto">
        <label htmlFor="sort-select" className="text-xs sm:text-sm font-semibold text-text-dark hidden sm:block whitespace-nowrap">
          Sort by:
        </label>
        <select 
          id="sort-select"
          className="bg-white border-2 border-gray-200 rounded-lg text-xs sm:text-sm px-4 sm:px-5 py-2.5 sm:py-3 font-semibold text-text-dark focus:ring-2 focus:ring-primary focus:border-primary cursor-pointer shadow-sm hover:border-primary transition-all flex-1 md:flex-none appearance-none bg-no-repeat bg-right pr-8"
          style={{backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231c190d' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundPosition: 'right 0.7rem center', backgroundSize: '1.25rem'}}
        >
          <option>Latest Updates</option>
          <option>Most Popular</option>
          <option>Trending Now</option>
          <option>A to Z</option>
        </select>
      </div>
    </div>
  );
}
