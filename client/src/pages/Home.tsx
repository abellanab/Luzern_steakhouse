import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Hero from "@/sections/Hero";
import Menu from "@/sections/Menu";
import Navbar from "@/sections/Navbar";
import Reserve from "@/sections/Reserve";

/**
 * Luzern Steakhouse Design System
 * - Color Palette: Very Dark Brown (#3E1F1B), Warm Cream (#F5E6D3), Warm Copper Brown (#9C5D3C), Light Pinkish Cream (#EAD5C5), Near Black (#1A1A1A)
 * - Typography: Rokkitt (display/slab) for headings, Cormorant Garamond (serif) for subheadings, Inter (sans-serif) for body
 * - Layout: Full-width hero with left-aligned overlay content, clean section spacing
 * - Animations: Smooth scroll reveals and hover effects
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Reserve />
      <Contact />
    </div>
  );
}
