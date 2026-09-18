"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";

type Props = {
  cartCount: number;
  onOpenCart: () => void;
};

export function Nav({ cartCount, onOpenCart }: Props) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const handleScroll = () => {
      const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-theme]"));
      let currentTheme: "dark" | "light" = "dark";
      for (const sec of sections) {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 64 && rect.bottom > 64) {
          currentTheme = (sec.getAttribute("data-theme") as "dark" | "light") || "dark";
        }
      }
      setTheme(currentTheme);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = theme === "light" ? "text-[#080808]" : "text-[#F4F3EF]";

  return (
    <header
      data-nav
      className={`fixed left-0 right-0 top-0 z-[80] flex items-center justify-between gap-6 pointer-events-none px-gutter py-6 transition-colors duration-500 ${textColor}`}
    >
      <a
        href="#top"
        data-cursor="TOP"
        className="pointer-events-auto font-extrabold text-[18px] tracking-[0.26em] leading-none uppercase"
      >
        AERON
      </a>

      <nav className="hidden pointer-events-auto md:flex items-center gap-[clamp(18px,2.4vw,38px)]">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            data-cursor="VIEW"
            className="font-mono text-[11px] tracking-[0.2em] opacity-70 hover:opacity-100 transition-opacity"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        onClick={onOpenCart}
        data-cursor="OPEN"
        data-magnetic
        className="pointer-events-auto flex flex-shrink-0 items-center gap-2.5 rounded-full border border-current bg-transparent px-5 py-2.5 font-mono text-[11px] tracking-[0.18em] transition-transform duration-300"
      >
        <span>BUY AERON ARC</span>
        <span data-cart-count className="opacity-60 tabular-nums">
          [{cartCount}]
        </span>
      </button>
    </header>
  );
}
