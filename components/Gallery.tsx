"use client";

import { useEffect, useRef } from "react";
import { gallerySlides } from "@/lib/content";

export function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sec = sectionRef.current;
    const track = trackRef.current;
    if (!sec || !track) return;

    const onScroll = () => {
      const vh = window.innerHeight;
      const r = sec.getBoundingClientRect();
      const p = Math.min(Math.max(-r.top / Math.max(1, r.height - vh), 0), 1);
      const dist = Math.max(0, track.scrollWidth - window.innerWidth + 40);
      track.style.transform = `translate3d(${(-p * dist).toFixed(1)}px, 0, 0)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-theme="dark"
      data-hgallery
      className="relative h-[360vh] bg-[#0C0C0C] text-[#F4F3EF]"
    >
      <div className="sticky top-0 flex h-svh flex-col justify-between overflow-hidden px-gutter py-12">
        <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.24em] text-[#D8FF3E] uppercase">
          <span>09 A DAY IN ARC</span>
          <span className="text-mute">HORIZONTAL SCROLL MATRIX</span>
        </div>

        {/* Sliding Horizontal Track */}
        <div
          ref={trackRef}
          data-hgallery-track
          className="flex items-center gap-8 will-change-transform"
        >
          {gallerySlides.map((slide) => (
            <div
              key={slide.id}
              className="relative aspect-[16/10] w-[clamp(320px,68vw,780px)] flex-shrink-0 overflow-hidden rounded-2xl bg-[#151515]"
            >
              <img
                src={slide.img}
                alt={slide.title}
                className="h-full w-full object-cover filter brightness-[0.82] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-mono text-xs text-[#D8FF3E]">{slide.tag}</span>
                <h3 className="mt-1 font-sans text-xl font-bold sm:text-2xl">{slide.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="font-mono text-[10px] tracking-widest text-mute">
          DRAG OR SCROLL VERTICALLY TO SCRUB
        </div>
      </div>
    </section>
  );
}
