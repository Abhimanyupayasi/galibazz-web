export default function LoadingJokeCategory() {
  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen">

      {/* Fixed arrows placeholder (non-blocking UI) */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 
                      bg-white border shadow-md rounded-full w-12 h-12 
                      flex items-center justify-center text-2xl opacity-50">
        ←
      </div>

      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 
                      bg-white border shadow-md rounded-full w-12 h-12 
                      flex items-center justify-center text-2xl opacity-50">
        →
      </div>

      {/* Header Skeleton */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-8 text-center">
        <div className="h-8 w-64 bg-gray-300 rounded mx-auto mb-3 animate-pulse"></div>
        <div className="h-4 w-80 bg-gray-200 rounded mx-auto mb-6 animate-pulse"></div>

        <div className="w-52 h-52 bg-gray-300 rounded-xl mx-auto animate-pulse"></div>
      </section>

      {/* Joke Card Skeletons */}
      <section className="max-w-6xl mx-auto px-6 pb-12 space-y-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-gray-100 p-6"
          >
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-3 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
          </div>
        ))}
      </section>
    </main>
  );
}
