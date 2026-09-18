"use client";

type Props = {
  onAddToCart: () => void;
};

export function FinalCTA({ onAddToCart }: Props) {
  return (
    <section
      data-theme="dark"
      className="relative flex min-h-[85svh] flex-col items-center justify-center overflow-hidden bg-[#050505] px-gutter py-24 text-center text-[#F4F3EF]"
    >
      <div className="relative z-10 max-w-[800px]">
        <h2 className="font-sans text-[clamp(44px,8vw,120px)] font-black tracking-[-0.04em] leading-[0.9] uppercase">
          Hear what&apos;s <br />
          <span className="font-serif font-light italic text-[#D8FF3E]">next.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-[48ch] font-mono text-sm leading-relaxed text-mute">
          A new generation of wireless audio, built around how the world sounds to you.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4 font-mono text-xs">
          <button
            type="button"
            onClick={onAddToCart}
            data-cursor="ORDER"
            data-magnetic
            className="rounded-full bg-[#D8FF3E] px-8 py-4 font-bold tracking-widest text-[#080808] hover:brightness-110"
          >
            BUY AERON ARC — $249
          </button>
          <a
            href="#technology"
            data-cursor="LEARN"
            data-magnetic
            className="rounded-full border border-white/20 px-8 py-4 tracking-widest text-[#F4F3EF] hover:border-white"
          >
            EXPLORE TECHNOLOGY
          </a>
        </div>
      </div>
    </section>
  );
}
