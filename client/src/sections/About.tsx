import { Parallax, Reveal } from "@/components/Reveal";
import { motion, useReducedMotion } from "framer-motion";

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="relative z-30 overflow-x-clip py-28 pb-44 md:z-auto md:overflow-visible md:py-40">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 overflow-hidden">
        <Parallax distance={40} className="h-full w-full">
          <img
            src="/BGabout.png"
            alt="Background placeholder"
            className="h-[115%] w-full -translate-y-[7%] object-cover"
          />
        </Parallax>
      </div>

      {/* Steak Image — bleeds off the left edge and past the section's bottom into the next section */}
      <div className="pointer-events-none absolute left-[-14rem] top-1  z-10 hidden h-[41rem] w-[31rem] md:block lg:h-[5rem] lg:w-[1rem] xl:h-[2rem] xl:w-[80rem]">
        <Parallax distance={70} className="h-full w-full">
          <img
            src="/aboutsteak.png"
            alt="Steak on wooden board"
            className="h-200  object-cover
            "
          />
        </Parallax>
      </div>

      {/* Steak Image — mobile only: slides in at the lower-right, flipped so it points inward */}
      <div className="pointer-events-none absolute -bottom-15 -right-35 z-10 w-[38rem] max-w-[140%] md:hidden">
        <motion.div
          className="w-full"
          initial={reduce ? false : { opacity: 0, x: 140, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="/aboutsteak.png"
            alt="Steak on wooden board"
            className="w-full -scale-x-100 object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>

      {/* About Text */}
      <div className="container relative z-20">
        <div className="ml-auto max-w-xl space-y-5 md:space-y-7">
          <Reveal from="right" className="space-y-2">
            <p className="font-serif text-xs font-semibold uppercase tracking-[0.2em] text-secondary md:text-sm">
              Our Heritage
            </p>
            <h2 className="font-display text-4xl font-black uppercase leading-none text-primary-foreground md:text-6xl">
              Our Story
            </h2>
          </Reveal>
          <Reveal
            as="p"
            from="right"
            delay={0.12}
            className="font-body text-base leading-relaxed text-primary-foreground/80 md:text-lg"
          >
            Luzern Steakhouse embodies the spirit of Swiss hospitality and European craftsmanship. Located in a log-cabin-style setting reminiscent of Alpine lodges, our restaurant celebrates the art of fine dining with meticulous attention to detail.
          </Reveal>
          <Reveal from="up" delay={0.24}>
            <a
              href="#reservation"
              className="inline-block border border-primary-foreground/70 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-colors duration-300 hover:bg-primary-foreground hover:text-primary"
            >
              Read More
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}