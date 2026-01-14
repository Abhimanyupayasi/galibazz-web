import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExploreHero from "@/components/ExploreHero";
import CategoryGrid from "@/components/CategoryGrid";
import FreshContent from "@/components/FreshContent";
import Sidebar from "@/components/Sidebar";

export default function Page() {
  const isHindi = true; // because this route = /hi

  const text = {
    exploreTitle: isHindi ? "श्रेणियाँ खोजें" : "Explore Categories",
  };

  return (
    <>
      <Header />

      <main className="grow w-full bg-background-light">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">

          <ExploreHero />

          <h2 className="text-3xl font-bold text-center mb-10">
            {text.exploreTitle}
          </h2>

          <CategoryGrid />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
            <FreshContent />
            <Sidebar />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
