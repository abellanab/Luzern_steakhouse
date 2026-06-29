import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Hero from "@/sections/Hero";
import Menu from "@/sections/Menu";
import Navbar from "@/sections/Navbar";
import Reserve from "@/sections/Reserve";

/**
 * Alpine Heritage Elegance Design System
 * - Color Palette: Deep Forest Green (#1B4D3E), Warm Cream (#F5F1E8), Rich Burgundy (#8B3A3A), Brushed Gold (#D4AF37)
 * - Typography: Playfair Display (serif) for headings, Lato for body
 * - Layout: Asymmetric sections with staggered content blocks
 * - Animations: Smooth scroll reveals and hover effects
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Reserve />
      <Contact />
    </div>
  );
}
