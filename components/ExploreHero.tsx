"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Laugh, Flame, MessageCircle, BookOpen } from "lucide-react";

export default function ExploreHero() {
  const textRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  // text reveal
  useEffect(() => {
    gsap.fromTo(
      textRef.current?.children,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",
      }
    );
  }, []);

  // marquee animation
  useEffect(() => {
    if (!marqueeRef.current) return;
    gsap.to(marqueeRef.current, {
      x: "-50%",
      duration: 18,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  // 👉 Your image list (replace later with your real images)
// 👉 Online demo images (auto-loaded from Unsplash)
const images = [
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=400",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400",
  "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=400",
  "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400",
  "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?q=80&w=400",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400",
];

 return (
  <section className="relative overflow-hidden rounded-3xl mb-8 bg-gradient-to-br from-[#1a0029] via-[#3b0066] to-[#ff2f92] text-white">

    {/* glow accents */}
    <div className="absolute top-[-60px] left-[-40px] w-40 h-40 bg-pink-500 blur-3xl opacity-30" />
    <div className="absolute bottom-[-60px] right-[-40px] w-40 h-40 bg-purple-500 blur-3xl opacity-30" />

    {/* MAIN HERO */}
    <div className="
      relative z-10 
      h-[65vh] sm:h-[60vh] 
      min-h-[360px] sm:min-h-[420px]
      flex flex-col justify-center 
      px-4 sm:px-8 lg:px-10
    ">

      {/* TOP CONTENT */}
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">

        {/* LEFT TEXT */}
        <div ref={textRef} className="flex-1 space-y-3 sm:space-y-4 text-center lg:text-left">
          
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Welcome to{" "}
            <span className="text-pink-300">GaliBazz</span>
          </h1>

          <p className="text-white/85 text-base sm:text-lg max-w-lg mx-auto lg:mx-0">
            A fun corner of the internet.  
            Laugh, read, and express without filters.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 pt-2">
            <Tag icon={<Laugh size={14} />} text="Funny Jokes" />
            <Tag icon={<BookOpen size={14} />} text="Stories" />
            <Tag icon={<MessageCircle size={14} />} text="Thoughts" />
            <Tag icon={<Flame size={14} />} text="No Filter Zone" />
          </div>
        </div>

        {/* RIGHT BRAND — hide on small */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="
            hidden lg:block
            text-2xl font-black tracking-widest 
            text-white/15 leading-none select-none
          "
        >
          G<br />A<br />L<br />I<br />B<br />A<br />Z<br />Z
        </motion.div>
      </div>

      {/* IMAGE MARQUEE */}
      <div className="mt-6 sm:mt-10 overflow-hidden">
        <div className="flex w-[200%]" ref={marqueeRef}>
          {[...images, ...images].map((img, i) => (
            <div
              key={i}
              className="
                w-[90px] h-[90px]
                sm:w-[120px] sm:h-[120px]
                lg:w-[140px] lg:h-[140px]
                mx-1 sm:mx-2 
                rounded-lg sm:rounded-xl 
                overflow-hidden 
                border border-white/15 
                shrink-0
              "
            >
              <img
                src={img}
                alt="fun"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
);

}

/* small tag pill */
function Tag({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full text-sm backdrop-blur">
      {icon}
      {text}
    </div>
  );
}
