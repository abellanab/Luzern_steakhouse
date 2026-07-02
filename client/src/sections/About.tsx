import { Users, Wine } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-40">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/BGabout.png"
          alt="Background placeholder"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Steak Image — bleeds off the left edge and past the section's bottom into the next section */}
      <div className="pointer-events-none absolute left-[-2rem] top-1  z-10 hidden h-[41rem] w-[31rem] md:block lg:h-[5rem] lg:w-[1rem] xl:h-[2rem] xl:w-[80rem]">
        <img
          src="/aboutsteak.png"
          alt="Steak on wooden board"
          className="h-200  object-cover
          "
        />
      </div>

      {/* About Text */}
      <div className="container relative z-20">
        <div className="ml-auto max-w-xl space-y-5 animate-in fade-in slide-in-from-right duration-700 delay-200 md:space-y-7">
          <div className="space-y-2">
            <p className="font-serif text-xs font-semibold uppercase tracking-[0.2em] text-secondary md:text-sm">
              Our Heritage
            </p>
            <h2 className="font-display text-4xl font-black uppercase leading-none text-primary-foreground md:text-6xl">
              Our Story
            </h2>
          </div>
          <p className="font-body text-base leading-relaxed text-primary-foreground/80 md:text-lg">
            Luzern Steakhouse embodies the spirit of Swiss hospitality and European craftsmanship. Located in a log-cabin-style setting reminiscent of Alpine lodges, our restaurant celebrates the art of fine dining with meticulous attention to detail.
          </p>
          <div className="space-y-4 pt-2 md:space-y-5 md:pt-4">
            
            <div className="flex gap-3 md:gap-4">
              
              
            </div>
          </div>
          <a
            href="#reservation"
            className="inline-block border border-primary-foreground/70 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-colors duration-300 hover:bg-primary-foreground hover:text-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}