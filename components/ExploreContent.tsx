// components/ExploreContent.tsx
export default function ExploreContent() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
      {/* Main Content */}
      <div className="lg:col-span-8 space-y-10">
        <h2 className="text-2xl font-black">Fresh Content</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <article
              key={item}
              className="flex flex-col gap-3 group cursor-pointer"
            >
              <div className="aspect-video rounded-2xl bg-gray-200 dark:bg-gray-800" />
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                Sample Blog Title {item}
              </h3>
              <p className="text-sm text-text-muted line-clamp-2">
                Short description of the blog content goes here.
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <aside className="lg:col-span-4 space-y-6">
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border">
          <h3 className="font-bold text-lg mb-4">Popular Now</h3>
          {[1, 2, 3].map((i) => (
            <p key={i} className="text-sm hover:text-primary cursor-pointer">
              Popular article #{i}
            </p>
          ))}
        </div>

        <div className="bg-primary/10 rounded-2xl p-6">
          <h3 className="font-bold text-lg mb-2">Join Galibazz</h3>
          <input
            className="w-full rounded-xl px-4 py-3 mb-3"
            placeholder="Enter your email"
          />
          <button className="w-full bg-primary py-3 rounded-xl font-bold">
            Subscribe
          </button>
        </div>
      </aside>
    </section>
  );
}
