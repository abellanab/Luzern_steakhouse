import { Reveal, staggerDelay } from "@/components/Reveal";
import { Clock, Facebook, Instagram, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-14 md:py-20 lg:py-24 bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <Reveal from="up" delay={staggerDelay(0)} className="space-y-4">
            <div className="space-y-1">
              <h3 className="font-display text-2xl font-black uppercase leading-none">Luzern</h3>
              <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-secondary">
                Steakhouse
              </p>
            </div>
            <p className="font-body text-sm leading-relaxed text-primary-foreground/80">
              USDA Prime steaks and Alpine-inspired European dining, served with warm Swiss hospitality in the heart of Cebu.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/30 text-primary-foreground/80 transition-colors hover:border-secondary hover:text-secondary"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/30 text-primary-foreground/80 transition-colors hover:border-secondary hover:text-secondary"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          {/* Location */}
          <Reveal from="up" delay={staggerDelay(1)} className="space-y-3 md:space-y-4">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-secondary md:h-6 md:w-6" />
              <h3 className="text-lg md:text-xl font-display font-bold">Location</h3>
            </div>
            <p className="font-body text-primary-foreground/90 text-sm md:text-base">
              St. Moritz Road<br />
              Gorordo Avenue, Archbishop Road<br />
              Cebu City, 6000<br />
              Philippines
            </p>
          </Reveal>

          {/* Contact */}
          <Reveal from="up" delay={staggerDelay(2)} className="space-y-3 md:space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-secondary md:h-6 md:w-6" />
              <h3 className="text-lg md:text-xl font-display font-bold">Contact</h3>
            </div>
            <div className="font-body text-primary-foreground/90 space-y-2 text-sm md:text-base">
              <p>
                <span className="text-primary-foreground/60">Phone:</span>{" "}
                <a href="tel:+63322311148" className="transition-colors hover:text-secondary">
                  (032) 231-1148
                </a>
              </p>
              <p>
                <span className="text-primary-foreground/60">Mobile:</span>{" "}
                <a href="tel:+639177101682" className="transition-colors hover:text-secondary">
                  +63 (0)917 710 1682
                </a>
              </p>
              <p className="break-words">
                <span className="text-primary-foreground/60">Email:</span>{" "}
                <a
                  href="mailto:reservations@luzernsteakhouse.ph"
                  className="transition-colors hover:text-secondary"
                >
                  reservations@luzernsteakhouse.ph
                </a>
              </p>
            </div>
          </Reveal>

          {/* Hours */}
          <Reveal from="up" delay={staggerDelay(3)} className="space-y-3 md:space-y-4 lg:items-end lg:text-right flex flex-col">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 shrink-0 text-secondary md:h-6 md:w-6" />
              <h3 className="text-lg md:text-xl font-display font-bold">Hours</h3>
            </div>
            <div className="font-body text-primary-foreground/90 space-y-3 text-sm md:text-base">
              <div>
                <p>Sunday &ndash; Thursday</p>
                <p className="font-display">11:00 AM &ndash; 10:00 PM</p>
              </div>
              <div>
                <p>Friday &ndash; Saturday</p>
                <p className="font-display">11:00 AM &ndash; 11:00 PM</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal from="up" className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-primary-foreground/20 flex flex-col items-center gap-2 text-center text-xs text-primary-foreground/70 md:flex-row md:justify-between md:gap-4 md:text-sm">
          <p className="font-body whitespace-nowrap">
            &copy; 2026 Luzern Steakhouse. All rights reserved.
            <span className="hidden sm:inline"> | Crafted with Alpine tradition.</span>
          </p>
          <p className="font-body">
            Built by <span className="font-semibold text-primary-foreground">Benedict Abellana</span> &amp;{" "}
            <span className="font-semibold text-primary-foreground">Lysander Uy</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
