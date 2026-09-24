"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";

type Props = {
  cartCount: number;
  onOpenCart: () => void;
};

export function Nav({ cartCount, onOpenCart }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setScrolled(y > 30);

      // Determine active section for menu bar highlighting
      const sections = ["product", "experience", "technology", "engineering", "battery", "finishes"];
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 220 && rect.bottom >= 60) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === "#top") {
      if (typeof window !== "undefined" && (window as any).__lenis) {
        (window as any).__lenis.scrollTo(0, { duration: 1 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      const targetId = href.replace("#", "");
      // Notify section to prepare and trigger bottom-to-top transition
      window.dispatchEvent(new CustomEvent("aeron:navigate", { detail: { targetId } }));

      if (typeof window !== "undefined" && (window as any).__lenis) {
        (window as any).__lenis.scrollTo(target, {
          offset: -80,
          duration: 1.1,
        });
      } else {
        const offset = 80;
        const elementPos = target.getBoundingClientRect().top;
        const offsetPos = elementPos + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPos,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      <header
        data-nav
        className={`fixed left-0 right-0 top-0 z-[80] flex items-center justify-between pointer-events-none px-gutter transition-all duration-300 ${
          scrolled
            ? "h-[68px] md:h-[76px] bg-[#080808]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] text-[#F4F3EF]"
            : "h-[76px] md:h-[90px] bg-transparent border-b border-transparent text-[#F4F3EF]"
        }`}
      >
        {/* Left: AERON Branding */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <a
            href="#top"
            onClick={(e) => handleNavClick(e, "#top")}
            data-cursor="TOP"
            className="flex items-center gap-2 font-sans font-extrabold text-[17px] sm:text-[19px] tracking-[0.26em] leading-none uppercase text-[#F4F3EF] hover:opacity-85 transition-opacity"
          >
            <span>AERON</span>
            <span className="hidden sm:inline-block h-1.5 w-1.5 rounded-full bg-[#D8FF3E] animate-aeron-pulse" />
          </a>
        </div>

        {/* Center: Desktop Menu Bar (Pill Capsule) */}
        <nav className="hidden pointer-events-auto md:flex items-center gap-1 rounded-full bg-white/[0.05] p-1.5 border border-white/[0.08] backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                data-cursor="VIEW"
                className={`relative flex items-center gap-1.5 rounded-full px-4 py-1.5 font-mono text-[10.5px] tracking-[0.18em] uppercase transition-all duration-200 ${
                  isActive
                    ? "bg-[#D8FF3E]/15 text-[#D8FF3E] font-semibold border border-[#D8FF3E]/30 shadow-[0_0_10px_rgba(216,255,62,0.15)]"
                    : "text-[#B9BCC0] hover:text-[#F4F3EF] hover:bg-white/[0.06] border border-transparent"
                }`}
              >
                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D8FF3E] animate-aeron-pulse" />
                )}
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right: Actions (Cart Button + Mobile Toggle) */}
        <div className="pointer-events-auto flex items-center gap-2.5 sm:gap-3">
          <button
            type="button"
            onClick={onOpenCart}
            data-cursor="OPEN"
            data-magnetic
            className="group flex flex-shrink-0 items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.04] px-4 sm:px-5 py-[8px] sm:py-[9px] font-mono text-[10.5px] sm:text-[11px] tracking-[0.16em] text-[#F4F3EF] backdrop-blur-sm transition-all duration-300 hover:border-[#D8FF3E] hover:bg-[#D8FF3E]/10 hover:text-[#D8FF3E] active:scale-[0.98]"
          >
            <span className="hidden sm:inline">BUY AERON ARC</span>
            <span className="sm:hidden">BUY ARC</span>
            <span
              data-cart-count
              className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold tabular-nums text-[#F4F3EF] group-hover:bg-[#D8FF3E] group-hover:text-[#080808] transition-colors"
            >
              {cartCount > 0 ? cartCount : 1}
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden items-center justify-center h-9 w-9 rounded-full border border-white/20 bg-white/[0.04] text-[#F4F3EF] transition-colors hover:border-[#D8FF3E]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <span className="font-mono text-[12px] font-bold">✕</span>
            ) : (
              <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[75] flex flex-col justify-between bg-[#080808]/95 backdrop-blur-2xl px-gutter pt-24 pb-10 text-[#F4F3EF] md:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-5">
            <span className="font-mono text-[10px] tracking-[0.24em] text-[#D8FF3E] uppercase">
              NAVIGATION
            </span>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between font-sans text-2xl font-bold tracking-tight py-2 transition-colors ${
                    isActive ? "text-[#D8FF3E]" : "text-[#F4F3EF] hover:text-[#D8FF3E]"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="h-2 w-2 rounded-full bg-[#D8FF3E] animate-aeron-pulse" />
                  )}
                </a>
              );
            })}
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col gap-4 font-mono text-xs text-[#B9BCC0]">
            <div className="flex justify-between items-center">
              <span>AERON ARC / GEN 01</span>
              <span className="text-[#D8FF3E]">$249</span>
            </div>
            <div className="text-[10px] opacity-60">PRECISION-ENGINEERED WIRELESS AUDIO</div>
          </div>
        </div>
      )}
    </>
  );
}
