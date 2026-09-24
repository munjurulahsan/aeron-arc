"use client";

import { useEffect, useRef } from "react";
import { gallerySlides } from "@/lib/content";
import { useSectionTransition } from "@/hooks/useSectionTransition";

const SLIDE_CONFIG = [
  { widthClass: "w-[clamp(260px,40vw,600px)]", caption: "01 / MORNING" },
  { widthClass: "w-[clamp(200px,28vw,420px)]", caption: "02 / MOVEMENT" },
  { widthClass: "w-[clamp(240px,34vw,520px)]", caption: "03 / FOCUS" },
  { widthClass: "w-[clamp(260px,40vw,600px)]", caption: "04 / NIGHT" },
  { widthClass: "w-[clamp(240px,34vw,520px)]", caption: "05 / IMMERSION" },
];

export function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { isVisible } = useSectionTransition("gallery", sectionRef);

  useEffect(() => {
    const sec = sectionRef.current;
    const track = trackRef.current;
    if (!sec || !track) return;

    let rafId: number;

    const onScroll = () => {
      const vh = window.innerHeight;
      const r = sec.getBoundingClientRect();
      const p = Math.min(Math.max(-r.top / Math.max(1, r.height - vh), 0), 1);
      // Measure total overflow distance including horizontal padding
      const dist = Math.max(0, track.scrollWidth - window.innerWidth + 56);
      track.style.transform = `translate3d(${(-p * dist).toFixed(1)}px, 0, 0)`;
    };

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(onScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    onScroll();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      data-theme="light"
      data-hgallery
      className="relative scroll-mt-20 md:scroll-mt-24 h-[360vh] bg-[#EAE9E4] text-[#121212]"
    >
      <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden">
        <div
          className={`flex flex-col justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {/* Eyebrow Header: 09 —— A DAY IN ARC (Figma / white.html match) */}
          <div className="mb-[clamp(20px,3vh,36px)] flex items-center gap-3.5 px-[clamp(16px,4vw,56px)] font-mono text-[10.5px] tracking-[0.22em] text-[#55554F]">
            <span className="text-[#121212]">09</span>
            <span className="h-[1px] w-[54px] bg-[#121212]/30" />
            <span>A DAY IN ARC</span>
          </div>

          {/* Horizontal Editorial Track */}
          <div
            ref={trackRef}
            data-hgallery-track
            className="flex items-center gap-[clamp(14px,2vw,32px)] px-[clamp(16px,4vw,56px)] will-change-transform"
          >
            {gallerySlides.map((slide, i) => {
              const cfg = SLIDE_CONFIG[i % SLIDE_CONFIG.length];
              return (
                <figure
                  key={slide.id}
                  className={`m-0 flex-none ${cfg.widthClass}`}
                >
                  <div className="h-[clamp(300px,54svh,620px)] overflow-hidden bg-[#141414]">
                    <img
                      src={slide.img}
                      alt={slide.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="mt-3.5 font-mono text-[10.5px] tracking-[0.2em] text-[#55554F]">
                    {cfg.caption}
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
