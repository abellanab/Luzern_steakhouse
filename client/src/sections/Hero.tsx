import { Parallax } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const carouselDots = Array.from({ length: 2 }, (_, index) => index);

const slides = [
  {
    image: "/AIexterior.jpg",
    alt: "Luzern Steakhouse exterior",
    imageClassName: "object-cover object-center",
    overlay: "default",
    eyebrow: "Welcome to",
    title: (
      <>
        Luzern
        <br />
        Steakhouse
      </>
    ),
    body: "Experience the finest USDA Prime steaks and European hospitality in Cebu. Luzern Steakhouse brings Alpine heritage and Swiss precision to every plate.",
    bodySecondary: null,
    sectionClassName: "h-[calc(100svh-4rem)] md:h-[calc(100svh-5rem)]",
    containerClassName: "items-center justify-start pt-24 pb-20 md:py-24 lg:py-28",
    contentClassName: "max-w-2xl text-left animate-in fade-in slide-in-from-left duration-700",
    eyebrowClassName: "mb-4 font-serif text-[clamp(1.15rem,5.5vw,2.65rem)] uppercase leading-none text-primary-foreground/95 md:text-4xl lg:text-5xl",
    titleClassName: "mb-6 font-body text-[clamp(2rem,10vw,4.25rem)] font-black uppercase leading-[0.98] tracking-[0.06em] text-primary-foreground md:text-6xl lg:text-7xl",
    bodyClassName: "max-w-xl font-body text-[clamp(0.9rem,3.5vw,1.05rem)] leading-tight text-primary-foreground/90 md:text-lg",
  },
  {
    image: "/2ndBG.png",
    alt: "Luzern Steakhouse anniversary steak platter",
    imageClassName:
      "object-cover object-[28%_center] sm:object-[32%_center] md:object-cover md:object-center xl:object-fill",
    overlay: "anniversary",
    eyebrow: "Luzern Turns 10",
    title: (
      <>
        Celebrating
        <br />
        10 Years
      </>
    ),
    body: "A decade of USDA Prime steaks, warm Cebu hospitality, and the Alpine-inspired flavors that made every gathering memorable.",
    bodySecondary: "Join us as Luzern Steakhouse celebrates ten years of expertly grilled cuts, thoughtful service, and meals worth returning to.",
    sectionClassName: "h-[calc(100svh-4rem)] md:h-[calc(100svh-5rem)]",
    containerClassName: "items-end justify-end pb-20 md:items-center md:pt-24 md:pb-24 lg:py-20",
    contentClassName:
      "ml-auto flex w-full max-w-[22rem] flex-col items-end text-right animate-in fade-in slide-in-from-right duration-700 sm:max-w-[27rem] md:max-w-[30rem] lg:max-w-[34rem]",
    eyebrowClassName:
      "mb-2 text-right font-serif text-[clamp(1.15rem,5.5vw,2.65rem)] uppercase leading-none text-primary-foreground/95 md:mb-3 md:text-4xl lg:text-5xl",
    titleClassName:
      "mb-4 text-right font-body text-[clamp(2rem,10vw,4.25rem)] font-black uppercase leading-[0.98] tracking-[0.06em] text-white md:mb-6 md:text-6xl lg:text-7xl",
    bodyClassName:
      "ml-auto max-w-[29rem] text-right font-body text-[clamp(0.9rem,3.5vw,1.05rem)] leading-snug text-primary-foreground/90 md:text-lg",
  },
];

export default function Hero() {
  const [activePage, setActivePage] = useState(0);
  const slide = activePage === 1 ? slides[1] : slides[0];

  const goToPrevious = () => {
    setActivePage((current) => (current === 0 ? carouselDots.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActivePage((current) => (current === carouselDots.length - 1 ? 0 : current + 1));
  };

  return (
    <section id="home" className={cn("relative overflow-hidden bg-primary", slide.sectionClassName)}>
      {/* Background image (drifts subtly on scroll for depth) */}
      <Parallax distance={70} className="absolute inset-0 overflow-hidden">
        <img
          src={slide.image}
          alt={slide.alt}
          sizes="100vw"
          className={cn("h-[116%] w-full -translate-y-[8%]", slide.imageClassName)}
        />
      </Parallax>

      {slide.overlay === "anniversary" ? (
        <>
          <div className="absolute inset-0 bg-primary/10 md:bg-primary/20" />
          <div className="absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-[#2b0f0c]/95 via-[#3e1f1b]/65 to-transparent md:hidden" />
          <div className="absolute inset-y-0 right-0 hidden w-[66%] bg-gradient-to-l from-[#2b0f0c]/95 via-[#3e1f1b]/70 to-transparent md:block lg:w-[62%]" />
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#2b0f0c]/70 to-transparent" />
        </>
      ) : (
        <div className="absolute inset-0 bg-primary/60" />
      )}

      {/* Hero content */}
      <div
        className={cn(
          "relative z-10 container flex h-full",
          slide.containerClassName
        )}
      >
        <div key={activePage} className={slide.contentClassName}>
          <p className={slide.eyebrowClassName}>{slide.eyebrow}</p>
          <h1 className={slide.titleClassName}>{slide.title}</h1>
          <p className={slide.bodyClassName}>{slide.body}</p>
          {slide.bodySecondary && <p className={cn(slide.bodyClassName, "mt-4 md:mt-6")}>{slide.bodySecondary}</p>}
        </div>
      </div>

      {/* Carousel side arrows — large screens only (mobile uses the bottom controls to avoid overlapping the hero text) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-10 hidden items-center justify-between px-8 lg:flex">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={goToPrevious}
          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-primary-foreground/50 bg-primary/40 text-primary-foreground backdrop-blur-sm transition-colors hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary"
        >
          <ChevronLeft className="h-6 w-6" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={goToNext}
          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-primary-foreground/50 bg-primary/40 text-primary-foreground backdrop-blur-sm transition-colors hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary"
        >
          <ChevronRight className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {/* Bottom carousel controls — arrows flank the dots on small screens */}
      <div className="absolute bottom-0 left-0 right-0 z-10 py-6 md:py-8">
        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={goToPrevious}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/50 bg-primary/40 text-primary-foreground backdrop-blur-sm transition-colors hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary lg:hidden"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="flex items-center gap-2">
            {carouselDots.map((index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={activePage === index}
                onClick={() => setActivePage(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  activePage === index ? "w-6 bg-primary-foreground" : "w-2 bg-primary-foreground/40"
                )}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next slide"
            onClick={goToNext}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/50 bg-primary/40 text-primary-foreground backdrop-blur-sm transition-colors hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary lg:hidden"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}