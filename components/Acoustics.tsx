"use client";

import { useState, useEffect, useRef } from "react";

const systems = [
  {
    id: "01",
    title: "Adaptive ANC",
    desc: "Reads the room 200 times a second and cancels only what you don't want.",
  },
  {
    id: "02",
    title: "Real-time EQ",
    desc: "Compensates for seal, ear geometry and volume, continuously.",
  },
  {
    id: "03",
    title: "Voice detection",
    desc: "Start speaking and the world fades back in. Stop, and it recedes.",
  },
  {
    id: "04",
    title: "Spatial tracking",
    desc: "Anchors the soundstage to the room, not to your head.",
  },
];

export function Acoustics() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -120px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-theme="dark"
      className="relative bg-[#080808] px-[clamp(20px,3.65vw,56px)] py-[clamp(64px,6.34vw,97px)] text-[#F4F3EF]"
    >
      <div
        className={`mx-auto max-w-[1424px] transition-all duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-36 opacity-0 scale-[0.92]"
        }`}
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-3.5">
          <span className="font-mono text-[10.5px] font-normal tracking-[0.22em] text-[#D8FF3E]">
            08
          </span>
          <div className="h-px w-[54px] bg-[#B9BCC0]/40" />
          <span className="font-mono text-[10.5px] font-normal tracking-[0.22em] text-[#B9BCC0]">
            INTELLIGENCE
          </span>
        </div>

        {/* Header Row */}
        <div className="mt-8 grid grid-cols-1 items-end gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-sans text-[clamp(44px,6.25vw,96px)] font-[800] leading-[1.05] tracking-[-0.055em] text-[#F4F3EF]">
              It listens with you.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pb-3 lg:pl-8">
            <p className="max-w-[340px] font-sans text-[14px] leading-[1.7] text-[#B9BCC0]">
              Four systems running quietly in the background, adjusting the sound before you notice it needed adjusting.
            </p>
          </div>
        </div>

        {/* 4 Systems Rows */}
        <div className="mt-14 border-t border-white/10">
          {systems.map((s) => (
            <div
              key={s.id}
              className="grid grid-cols-1 items-center gap-3 border-b border-white/10 py-7 transition-colors hover:bg-white/[0.02] md:grid-cols-12"
            >
              <div className="font-mono text-[10.5px] tracking-[0.2em] text-[#D8FF3E] md:col-span-1">
                {s.id}
              </div>
              <div className="font-sans text-[clamp(22px,2.2vw,32px)] font-[700] tracking-[-0.02em] text-[#F4F3EF] md:col-span-5">
                {s.title}
              </div>
              <div className="font-sans text-[12.5px] leading-[1.7] text-[#B9BCC0]/85 md:col-span-6">
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
