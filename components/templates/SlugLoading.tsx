export default function SlugLoading() {
  return (
    <main className="bg-gray-50 min-h-screen px-6 pt-12">
      <div className="max-w-5xl mx-auto space-y-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border">
            <div className="h-4 w-3/4 bg-gray-200 rounded mb-3 animate-pulse"/>
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse"/>
          </div>
        ))}
      </div>
    </main>
  );
}
