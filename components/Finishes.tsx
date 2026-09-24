"use client";

import { useState } from "react";
import { FINISHES, media } from "@/lib/content";
import { useSectionTransition } from "@/hooks/useSectionTransition";

type Props = {
  onAddToCart: () => void;
};

export function Finishes({ onAddToCart }: Props) {
  const [activeIdx, setActiveIdx] = useState(0);
  const { isVisible, sectionRef } = useSectionTransition("finishes");
  const active = FINISHES[activeIdx];

  return (
    <section
      id="finishes"
      data-theme="light"
      className="relative scroll-mt-20 md:scroll-mt-24 bg-[#F4F3EF] px-gutter py-12 sm:py-16 md:py-20 lg:py-24 text-[#080808]"
    >
      <div
        ref={sectionRef}
        className={`mx-auto max-w-[1560px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-16 opacity-0 scale-[0.98]"
        }`}
      >
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <span className="font-mono text-[10.5px] sm:text-[11px] tracking-[0.24em] text-[#080808]/60 uppercase">
              10 FINISHES
            </span>
            <h2 className="mt-3 sm:mt-4 font-sans text-[clamp(32px,5.2vw,84px)] font-black tracking-[-0.03em] leading-[0.94] uppercase">
              Three finishes. <br />
              <span className="font-serif font-light italic text-[#080808]/70">One form.</span>
            </h2>
            <p className="mt-6 font-mono text-sm leading-relaxed text-[#080808]/70">
              {active.note}
            </p>

            {/* Finishes Selector Tabs */}
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3">
              {FINISHES.map((f, i) => (
                <button
                  key={f.name}
                  type="button"
                  data-cursor="SELECT"
                  data-magnetic
                  onClick={() => setActiveIdx(i)}
                  className={`rounded-full border px-4 sm:px-5 py-2 font-mono text-[11px] sm:text-xs tracking-widest transition-colors ${
                    i === activeIdx
                      ? "border-[#080808] bg-[#080808] text-[#F4F3EF]"
                      : "border-black/20 text-[#080808] hover:border-black"
                  }`}
                >
                  {f.name.toUpperCase()}
                </button>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 md:mt-10 flex items-center gap-6 border-t border-black/10 pt-6 sm:pt-8">
              <button
                type="button"
                onClick={onAddToCart}
                data-cursor="BUY"
                data-magnetic
                className="w-full sm:w-auto rounded-full bg-[#080808] px-8 py-3.5 font-mono text-xs font-bold tracking-widest text-[#F4F3EF] hover:bg-black/80"
              >
                ADD TO CART — $249
              </button>
            </div>
          </div>

          {/* Dynamic Filtered Product Preview */}
          <div className="relative aspect-square overflow-hidden rounded-2xl sm:rounded-3xl bg-[#EAE9E4] p-6 sm:p-8 md:p-10 lg:col-span-7">
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
