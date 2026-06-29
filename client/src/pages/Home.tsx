import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Hero from "@/sections/Hero";
import Menu from "@/sections/Menu";
import Navbar from "@/sections/Navbar";
import Reserve from "@/sections/Reserve";

/**
 * Warm Steakhouse Design System
 * - Color Palette: Dark Chocolate Brown (#2A1918), Warm Cream (#F9ECEC), Medium Brown (#553C39), Muted Rose/Taupe (#C8B0B1), Warm Copper Brown (#8B5E4A)
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
