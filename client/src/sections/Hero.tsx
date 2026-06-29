import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 md:pt-20 md:pb-32">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Hero Text */}
          <div className="space-y-4 md:space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <div className="space-y-2">
              <p className="text-accent font-accent font-semibold text-xs md:text-sm tracking-widest uppercase">
                Premium Fine Dining
              </p>
              <h1 className="text-3xl md:text-6xl font-display font-bold text-primary leading-tight">
                Crafted with Alpine Tradition
              </h1>
            </div>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-md">
              Experience the finest USDA Prime steaks and European hospitality in Cebu. Luzern Steakhouse brings Alpine heritage and Swiss precision to every plate.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-accent md:size-lg">
                Reserve Your Table <ChevronRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
              </Button>
              <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary/10 font-accent md:size-lg">
                View Menu
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-64 md:h-full animate-in fade-in slide-in-from-right duration-700 delay-200">
            <img
              src="/manus-storage/hero-steakhouse_18c06140.png"
              alt="Premium Steak"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg" />
          </div>
        </div>
      </div>

      {/* Decorative Gold Line */}
      <div className="mt-12 md:mt-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
    </section>
  );
}
