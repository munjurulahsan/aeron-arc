"use client";

import { useState, useEffect, useRef } from "react";
import { FINISHES, media } from "@/lib/content";

type Props = {
  onAddToCart: () => void;
};

export function Finishes({ onAddToCart }: Props) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const active = FINISHES[activeIdx];

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
      id="support"
      data-theme="light"
      className="relative bg-[#F4F3EF] px-gutter py-[clamp(90px,14vh,180px)] text-[#080808]"
    >
      <div
        className={`mx-auto max-w-[1560px] transition-all duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-36 opacity-0 scale-[0.92]"
        }`}
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <span className="font-mono text-[11px] tracking-[0.24em] text-[#080808]/60 uppercase">
              10 FINISHES
            </span>
            <h2 className="mt-4 font-sans text-[clamp(36px,5.6vw,84px)] font-black tracking-[-0.03em] leading-[0.92] uppercase">
              Three finishes. <br />
              <span className="font-serif font-light italic text-[#080808]/70">One form.</span>
            </h2>
            <p className="mt-6 font-mono text-sm leading-relaxed text-[#080808]/70">
              {active.note}
            </p>

            {/* Finishes Selector Tabs */}
            <div className="mt-8 flex gap-3">
              {FINISHES.map((f, i) => (
                <button
                  key={f.name}
                  type="button"
                  data-cursor="SELECT"
                  data-magnetic
                  onClick={() => setActiveIdx(i)}
                  className={`rounded-full border px-5 py-2 font-mono text-xs tracking-widest transition-colors ${
                    i === activeIdx
                      ? "border-[#080808] bg-[#080808] text-[#F4F3EF]"
                      : "border-black/20 text-[#080808] hover:border-black"
                  }`}
                >
                  {f.name.toUpperCase()}
                </button>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-6 border-t border-black/10 pt-8">
              <button
                type="button"
                onClick={onAddToCart}
                data-cursor="BUY"
                data-magnetic
                className="rounded-full bg-[#080808] px-8 py-3.5 font-mono text-xs font-bold tracking-widest text-[#F4F3EF] hover:bg-black/80"
              >
                ADD TO CART — $249
              </button>
            </div>
          </div>

          {/* Dynamic Filtered Product Preview */}
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-[#EAE9E4] p-10 lg:col-span-7">
            <img
              src={media.finishObsidian}
              alt={active.name}
              style={{ filter: active.filter }}
              className="h-full w-full object-contain transition-all duration-700 ease-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
