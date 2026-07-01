import { Clock, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-32 bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-3 md:space-y-4 animate-in fade-in slide-in-from-left duration-700">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 md:h-6 w-5 md:w-6 text-secondary" />
              <h3 className="text-lg md:text-xl font-display font-bold">Location</h3>
            </div>
            <p className="font-body text-primary-foreground/90 text-sm md:text-base">
              St. Moritz Road<br />
              Gorordo Avenue, Archbishop Road<br />
              Cebu City, 6000<br />
              Philippines
            </p>
          </div>

          <div className="space-y-3 md:space-y-4 animate-in fade-in duration-700 delay-100">
            <div className="flex items-center gap-3">
              <Phone className="h-5 md:h-6 w-5 md:w-6 text-secondary" />
              <h3 className="text-lg md:text-xl font-display font-bold">Contact</h3>
            </div>
            <div className="font-body text-primary-foreground/90 space-y-1 text-sm md:text-base">
              <p>Phone: (032) 231-1148</p>
              <p>Mobile: +63 (0)917 710 1682</p>
              <p>Email: reservations@luzernsteakhouse.ph</p>
            </div>
          </div>

          <div className="space-y-3 md:space-y-4 animate-in fade-in slide-in-from-right duration-700 delay-200">
            <div className="flex items-center gap-3">
              <Clock className="h-5 md:h-6 w-5 md:w-6 text-secondary" />
              <h3 className="text-lg md:text-xl font-display font-bold">Hours</h3>
            </div>
            <div className="font-body text-primary-foreground/90 space-y-1 text-sm md:text-base">
              <p>Sunday - Thursday</p>
              <p className="font-display">11:00 AM - 10:00 PM</p>
              <p className="mt-3">Friday - Saturday</p>
              <p className="font-display">11:00 AM - 11:00 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-14 pt-6 md:pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/80 text-xs md:text-sm">
          <p className="font-body">&copy; 2026 Luzern Steakhouse. All rights reserved. | Crafted with Alpine tradition.</p>
        </div>
      </div>
    </section>
  );
}
