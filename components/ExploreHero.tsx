"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Laugh, Flame, MessageCircle, BookOpen } from "lucide-react";
import { usePathname } from "next/navigation";

export default function ExploreHero() {
  const textRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Detect language from route
  const isHindi = pathname.startsWith("/hi");

  // ===== TEXT DICTIONARY =====
  const content = {
    heading: isHindi ? "GaliBazz में आपका स्वागत है" : "Welcome to GaliBazz",
    subheading: isHindi
      ? "इंटरनेट का मज़ेदार कोना। हँसिए, पढ़िए और बिना फ़िल्टर अपनी बात कहिए।"
      : "A fun corner of the internet. Laugh, read, and express without filters.",

    tags: isHindi
      ? ["मजेदार जोक्स", "कहानियाँ", "विचार", "नो फ़िल्टर ज़ोन"]
      : ["Funny Jokes", "Stories", "Thoughts", "No Filter Zone"],
  };

  // Text reveal animation
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

  // Marquee animation
  useEffect(() => {
    if (!marqueeRef.current) return;
    gsap.to(marqueeRef.current, {
      x: "-50%",
      duration: 18,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  // Images
  const images = [
    "https://i.pinimg.com/736x/4b/07/7e/4b077ea531a5c5bafbd0be122005d63c.jpg",
    "https://i.pinimg.com/736x/4c/19/46/4c19463eafe3632d17b1c56a4c3ab078.jpg",
    "https://i.pinimg.com/736x/c9/ed/a2/c9eda2a03b9e50dd9bb1cfba1e730626.jpg",
    "https://i.pinimg.com/736x/b0/54/cd/b054cdaef7a4ab7b01251a0e207bba5d.jpg",
    "https://i.pinimg.com/736x/d6/da/c9/d6dac99c1addfb98697fec25f2ae9291.jpg",
  ];

  return (
    <section className="relative overflow-hidden rounded-3xl mb-8 bg-gradient-to-br from-[#1a0029] via-[#3b0066] to-[#ff2f92] text-white">

      {/* glow accents */}
      <div className="absolute top-[-60px] left-[-40px] w-40 h-40 bg-pink-500 blur-3xl opacity-30" />
      <div className="absolute bottom-[-60px] right-[-40px] w-40 h-40 bg-purple-500 blur-3xl opacity-30" />

      <div className="relative z-10 h-[65vh] min-h-[380px] flex flex-col justify-center px-4 sm:px-8 lg:px-10">

        {/* TOP CONTENT */}
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">

          {/* LEFT TEXT */}
          <div ref={textRef} className="flex-1 space-y-4 text-center lg:text-left">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {content.heading}
            </h1>

            <p className="text-white/85 text-base sm:text-lg max-w-lg mx-auto lg:mx-0">
              {content.subheading}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2">
              <Tag icon={<Laugh size={14} />} text={content.tags[0]} />
              <Tag icon={<BookOpen size={14} />} text={content.tags[1]} />
              <Tag icon={<MessageCircle size={14} />} text={content.tags[2]} />
              <Tag icon={<Flame size={14} />} text={content.tags[3]} />
            </div>
          </div>

          {/* RIGHT BRAND */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block text-2xl font-black tracking-widest text-white/15 leading-none select-none"
          >
            G<br />A<br />L<br />I<br />B<br />A<br />Z<br />Z
          </motion.div>
        </div>

        {/* IMAGE MARQUEE */}
        <div className="mt-8 overflow-hidden">
          <div className="flex w-[200%]" ref={marqueeRef}>
            {[...images, ...images].map((img, i) => (
              <div
                key={i}
                className="w-[200px] h-[120px] mx-2 rounded-xl overflow-hidden border border-white/15 shrink-0"
              >
                <img src={img} alt="fun" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* Tag Pill */
function Tag({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full text-sm backdrop-blur">
      {icon}
      {text}
    </div>
  );
}
