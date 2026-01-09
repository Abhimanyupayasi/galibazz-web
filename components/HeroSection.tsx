export default function HeroSection() {
  const categories = [
    { name: "Jokes", icon: "sentiment_very_satisfied", color: "yellow" },
    { name: "News", icon: "newspaper", color: "blue" },
    { name: "Sahitya", icon: "menu_book", color: "purple" },
    { name: "Entertain", icon: "movie", color: "pink" },
    { name: "Tools", icon: "build", color: "green" },
    { name: "Education", icon: "school", color: "orange" },
  ];

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-8 text-text-muted">
        <a className="hover:text-primary transition-colors" href="#">
          Home
        </a>
        <span className="material-symbols-outlined text-xs">chevron_right</span>
        <span className="font-medium text-text-dark">Explore Categories</span>
      </div>

      {/* Hero Title and Description */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-gray-200 pb-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-text-dark mb-4">
            Explore <span className="text-primary">Galibazz</span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted leading-relaxed">
            Your versatile content hub. From hilarious jokes and "fake news" satire to deep-dive education and AdSense strategies. Learning and laughing in one place.
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="text-sm font-medium text-text-dark hidden sm:block">Sort by:</span>
          <select title="title" className="bg-white border-2 border-gray-200 rounded-lg text-sm px-4 py-2.5 font-semibold text-text-dark focus:ring-2 focus:ring-primary focus:border-primary cursor-pointer shadow-sm hover:border-primary transition-colors appearance-none bg-no-repeat bg-right pr-8" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231c190d' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundPosition: 'right 0.7rem center', backgroundSize: '1.25rem'}}>
            <option>Latest Updates</option>
            <option>Most Popular</option>
            <option>Trending Now</option>
          </select>
        </div>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
        {categories.map((category, index) => (
          <a
            key={index}
            className="flex flex-col items-center justify-center gap-3 p-4 rounded-2xl bg-white border-2 border-gray-200 hover:border-primary hover:shadow-md transition-all group text-center"
            href="#"
          >
            <div className={`size-12 rounded-full bg-${category.color}-100 text-${category.color}-600 flex items-center justify-center group-hover:scale-110 transition-transform`}>
              <span className="material-symbols-outlined">{category.icon}</span>
            </div>
            <span className="font-bold text-sm text-text-dark">{category.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}