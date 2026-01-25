import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExploreHero from "@/components/ExploreHero";
import CategoryGrid from "@/components/CategoryGrid";
import FreshContent from "@/components/FreshContent";
import Sidebar from "@/components/Sidebar";
import GalibazzAIHero from "@/components/GalibazzAIHero";
import { Skiper39 } from "@/components/ui/skiper-ui/skiper39";


export default function Page() {
  return (
    <>
      <Header />
      <main className="grow w-full bg-background-light">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* <div className="flex items-center gap-2 text-sm mb-8 sm:mb-10 text-text-muted">
            <a className="hover:text-primary transition-colors" href="#">
              Home
            </a>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="font-medium text-text-dark">
              Explore Categories
            </span>
          </div> */}
       
          <ExploreHero />
           <GalibazzAIHero />
          <CategoryGrid />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
            <FreshContent />
            <Sidebar />
          </div>
        </div>
      </main>
       {/* <div className="h-[400px] overflow-hidden w-[100%] flex justify-center border-black border-[2px] items-center mb-1">
          <Skiper39 />
        </div> */}
      <Footer />
    </>
  );
}
