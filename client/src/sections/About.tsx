import { Users, Wine } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-12 md:py-32 bg-gradient-to-b from-background to-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* About Image */}
          <div className="relative h-64 md:h-full animate-in fade-in slide-in-from-left duration-700 delay-100">
            <img
              src="/manus-storage/ambiance-interior_24d4a18a.png"
              alt="Luzern Interior"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-lg opacity-20" />
          </div>

          {/* About Text */}
          <div className="space-y-4 md:space-y-6 animate-in fade-in slide-in-from-right duration-700 delay-200">
            <div className="space-y-2">
              <p className="text-accent font-accent font-semibold text-xs md:text-sm tracking-widest uppercase">
                Our Heritage
              </p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
                Where Alpine Tradition Meets Excellence
              </h2>
            </div>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              Luzern Steakhouse embodies the spirit of Swiss hospitality and European craftsmanship. Located in a log-cabin-style setting reminiscent of Alpine lodges, our restaurant celebrates the art of fine dining with meticulous attention to detail.
            </p>
            <div className="space-y-3 md:space-y-4 pt-2 md:pt-4">
              <div className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0">
                  <Wine className="h-5 md:h-6 w-5 md:w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-primary text-sm md:text-base">Premium Ingredients</h3>
                  <p className="text-foreground/70 text-xs md:text-sm">USDA Prime steaks and finest imported selections</p>
                </div>
              </div>
              <div className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0">
                  <Users className="h-5 md:h-6 w-5 md:w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-primary text-sm md:text-base">Exceptional Service</h3>
                  <p className="text-foreground/70 text-xs md:text-sm">Attentive staff trained in fine dining excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
