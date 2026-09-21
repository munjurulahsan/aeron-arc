"use client";

import { useState, useEffect, useRef } from "react";
import { media } from "@/lib/content";

export function Experience() {
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
      id="experience"
      data-theme="dark"
      className="relative overflow-hidden bg-[#080808] px-gutter py-[clamp(90px,14vh,180px)] text-[#F4F3EF]"
    >
      <div
        className={`relative mx-auto h-[clamp(520px,92svh,940px)] w-full overflow-hidden rounded-3xl transition-all duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-36 opacity-0 scale-[0.92]"
        }`}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover filter brightness-[0.75] contrast-[1.1]"
        >
          <source src={media.section3Video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#080808_100%)]" />

        <div className="absolute inset-0 flex flex-col justify-between p-8 sm:p-14">
          <span className="font-mono text-[11px] tracking-[0.24em] text-[#D8FF3E] uppercase">
            03 EXPERIENCE
          </span>

          <div className="max-w-[700px]">
            <h2 className="font-sans text-[clamp(32px,5vw,78px)] font-black tracking-[-0.03em] leading-[0.92] uppercase">
              Lose yourself <br />
              <span className="font-serif font-light italic">in the sound.</span>
            </h2>
            <p className="mt-6 font-mono text-sm leading-relaxed text-mute">
              EVERY DETAIL. EVERY LAYER. EVERY MOMENT. Sound should feel closer, deeper, and more immersive — as though it were never transmitted at all.
            </p>
          </div>

          <div className="font-mono text-[10px] tracking-[0.2em] text-mute uppercase">
            IMMERSIVE CINEMATIC FIELD // 360° SPHERICAL
          </div>
        </div>
      </div>
    </section>
  );
}
