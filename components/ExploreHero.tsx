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
  if (!textRef.current) return;

  gsap.fromTo(
    textRef.current.children,
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
  "https://i.pinimg.com/736x/4b/07/7e/4b077ea531a5c5bafbd0be122005d63c.jpg",
  "https://i.pinimg.com/736x/4c/19/46/4c19463eafe3632d17b1c56a4c3ab078.jpg",
  "https://i.pinimg.com/736x/c9/ed/a2/c9eda2a03b9e50dd9bb1cfba1e730626.jpg",
  "https://i.pinimg.com/736x/b0/54/cd/b054cdaef7a4ab7b01251a0e207bba5d.jpg",
  "https://i.pinimg.com/736x/d6/da/c9/d6dac99c1addfb98697fec25f2ae9291.jpg",
  "https://i.pinimg.com/736x/a0/8a/0d/a08a0da6dc0b3f88f725e4be4c75817c.jpg",
  "https://i.pinimg.com/736x/b1/3b/cb/b13bcb64b8d08e891ceb21366decc336.jpg",
  "https://i.pinimg.com/736x/9b/a0/94/9ba094771681dfa3cefc4836b7bff455.jpg",
  "https://i.pinimg.com/736x/1b/f2/04/1bf2046980b0f7ac4c7aa5586757614c.jpg",
  "https://i.pinimg.com/736x/f8/1d/a4/f81da41fc4221a6bfdf7735da218b1c6.jpg",
  "https://i.pinimg.com/736x/7f/c5/2b/7fc52bb93e63f840e8845c45bb1d26cc.jpg",
  "https://i.pinimg.com/736x/a6/a2/8a/a6a28a1003f5dda20997b7afa5a5e735.jpg",
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
                w-[170px] h-[90px]
                sm:w-[220px] sm:h-[120px]
                lg:w-[240px] lg:h-[140px]
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
