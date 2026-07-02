import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Reservation", href: "#reserve" },
  { label: "Contact", href: "#contact" },
  { label: "Feedback", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md relative">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="self-start z-50">
          <div className="bg-primary-foreground px-3 py-2 md:px-4 md:py-3 rounded-b-sm flex flex-col items-center shadow-lg h-24 md:h-28">
            <img src="/logo.png" alt="Luzern Steakhouse" className="h-9 md:h-11 w-auto" />
            <div className="flex flex-col items-center leading-none mt-1">
              <span className="font-display font-bold text-primary text-[0.6rem] md:text-[0.7rem] tracking-tight">
                LUZERN
              </span>
              <span className="font-display font-bold text-primary text-[0.5rem] md:text-[0.6rem] tracking-tight">
                STEAKHOUSE
              </span>
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8 ml-auto">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-serif text-sm lg:text-base text-primary-foreground/90 hover:text-primary-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-primary-foreground hover:bg-primary-foreground/10"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {isOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-primary border-t border-primary-foreground/10 shadow-lg">
          <div className="container pt-12 pb-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-serif text-base text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
