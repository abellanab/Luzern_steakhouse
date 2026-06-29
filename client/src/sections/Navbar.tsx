import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm transition-all duration-300">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <div className="flex items-center gap-2 md:gap-3">
          <img src="/manus-storage/luzern-logo_53957283.png" alt="Luzern Logo" className="h-8 md:h-10 w-8 md:w-10" />
          <h1 className="text-lg md:text-2xl font-display font-bold text-primary">Luzern</h1>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-foreground hover:text-primary transition-colors text-sm">About</a>
          <a href="#menu" className="text-foreground hover:text-primary transition-colors text-sm">Menu</a>
          <a href="#reserve" className="text-foreground hover:text-primary transition-colors text-sm">Reserve</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors text-sm">Contact</a>
        </nav>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-accent text-sm md:text-base px-3 md:px-4 py-2 md:py-2">
          Reserve Now
        </Button>
      </div>
    </header>
  );
}
