import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

const carouselDots = Array.from({ length: 7 }, (_, index) => index);

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen md:min-h-[calc(100vh-5rem)]">
      {/* Background image */}
      <img
        src="/AIexterior.jpg"
        alt="Luzern Steakhouse exterior"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-primary/60" />

      {/* Hero content */}
      <div className="relative z-10 container flex flex-col justify-center min-h-screen md:min-h-[calc(100vh-5rem)] py-24 md:py-32">
        <div className="max-w-2xl animate-in fade-in slide-in-from-left duration-700">
          <p className="font-serif uppercase tracking-[0.2em] text-sm md:text-base text-primary-foreground/90 mb-4">
            Welcome to
          </p>
          <h1 className="font-display font-bold uppercase text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-[0.95] mb-6">
            Luzern
            <br />
            Steakhouse
          </h1>
          <p className="font-body text-base md:text-lg text-primary-foreground/90 max-w-xl mb-8 leading-relaxed">
            Experience the finest USDA Prime steaks and European hospitality in Cebu. Luzern Steakhouse brings Alpine heritage and Swiss precision to every plate.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-accent uppercase tracking-wider px-8 py-6"
          >
            Reserve Now
          </Button>

          <div className="flex items-center gap-2 text-primary-foreground/90 mt-8">
            <MapPin className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
            <span className="font-body text-xs md:text-sm">
              St. Moritz Road (Gorordo Avenue, Archbishop Road), Cebu City, Philippines, 6000
            </span>
          </div>
        </div>
      </div>

      {/* Carousel side arrows */}
      <div className="absolute inset-y-0 left-0 right-0 z-10 hidden md:flex items-center justify-between px-4 lg:px-8 pointer-events-none">
        <button
          type="button"
          aria-label="Previous slide"
          className="pointer-events-auto h-10 w-10 lg:h-12 lg:w-12 rounded-full border border-primary-foreground/40 bg-primary-foreground/10 text-primary-foreground flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
        >
          <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          className="pointer-events-auto h-10 w-10 lg:h-12 lg:w-12 rounded-full border border-primary-foreground/40 bg-primary-foreground/10 text-primary-foreground flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
        >
          <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6" />
        </button>
      </div>

      {/* Bottom carousel dots */}
      <div className="absolute bottom-0 left-0 right-0 z-10 py-6 md:py-8">
        <div className="flex items-center justify-center gap-2">
          {carouselDots.map((index) => (
            <span
              key={index}
              className={cn(
                "h-2 w-2 rounded-full transition-colors",
                index === 0 ? "bg-primary-foreground" : "bg-primary-foreground/40"
              )}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
