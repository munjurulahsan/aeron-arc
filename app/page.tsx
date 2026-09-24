"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Product } from "@/components/Product";
import { Experience } from "@/components/Experience";
import { Technology } from "@/components/Technology";
import { Precision } from "@/components/Precision";
import { ExplodedView } from "@/components/ExplodedView";
import { Battery } from "@/components/Battery";
import { Acoustics } from "@/components/Acoustics";
import { Gallery } from "@/components/Gallery";
import { Finishes } from "@/components/Finishes";
import { FinalCTA } from "@/components/FinalCTA";
import { CartDrawer } from "@/components/CartDrawer";
import { Footer } from "@/components/Footer";

export default function Page() {
  const [cartCount, setCartCount] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });
    (window as any).__lenis = lenis;
    let raf: number;
    const tick = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      delete (window as any).__lenis;
    };
  }, []);

  const addToCart = () => {
    setCartCount((c) => c + 1);
    setCartOpen(true);
  };

  return (
    <main>
      <Nav cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />
      <Hero onAddToCart={addToCart} />
      <Product />
      <Experience />
      <Technology />
      <Precision />
      <ExplodedView />
      <Battery />
      <Acoustics />
      <Gallery />
      <Finishes onAddToCart={addToCart} />
      <FinalCTA onAddToCart={addToCart} />
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} count={cartCount} />
    </main>
  );
}
