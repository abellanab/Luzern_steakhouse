import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight, Clock, MapPin, Phone, Users, Wine } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

/**
 * Alpine Heritage Elegance Design System
 * - Color Palette: Deep Forest Green (#1B4D3E), Warm Cream (#F5F1E8), Rich Burgundy (#8B3A3A), Brushed Gold (#D4AF37)
 * - Typography: Playfair Display (serif) for headings, Lato for body
 * - Layout: Asymmetric sections with staggered content blocks
 * - Animations: Smooth scroll reveals and hover effects
 */

export default function Home() {
  const [reservationData, setReservationData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    notes: "",
  });

  const handleReservationChange = (field: string, value: string) => {
    setReservationData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reservationData.name || !reservationData.email || !reservationData.date || !reservationData.time || !reservationData.guests) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Reservation request submitted! We'll contact you shortly to confirm.");
    setReservationData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      notes: "",
    });
  };

  const menuItems = [
    {
      category: "Premium Steaks",
      items: [
        { name: "USDA Prime Ribeye (450g)", description: "Perfectly marbled and tender, our signature cut", price: "₱1,850" },
        { name: "Beef Tenderloin (350g)", description: "Lean and buttery, the most tender cut", price: "₱1,650" },
        { name: "New York Strip (400g)", description: "Bold flavor with beautiful marbling", price: "₱1,550" },
      ],
    },
    {
      category: "Signature Specialties",
      items: [
        { name: "St. Moritz Pork Chop", description: "Grilled Swiss pork cutlet with herb butter", price: "₱950" },
        { name: "Fresh Seafood Selection", description: "Daily catch prepared to perfection", price: "Market Price" },
        { name: "Chicken Cordon Bleu", description: "Tender chicken breast with ham and cheese", price: "₱750" },
      ],
    },
    {
      category: "Sides & Accompaniments",
      items: [
        { name: "Truffle Mashed Potatoes", description: "Creamy potatoes with black truffle oil", price: "₱350" },
        { name: "Grilled Asparagus", description: "Fresh asparagus with garlic and olive oil", price: "₱280" },
        { name: "Caesar Salad", description: "Classic salad with house-made dressing", price: "₱320" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
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

      {/* Hero Section */}
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

      {/* About Section */}
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

      {/* Menu Section */}
      <section id="menu" className="py-12 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-8 md:mb-16 animate-in fade-in duration-700">
            <p className="text-accent font-accent font-semibold text-xs md:text-sm tracking-widest uppercase mb-2">
              Culinary Excellence
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-3 md:mb-4">
              Our Menu
            </h2>
            <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
              Discover our carefully curated selection of premium steaks, signature specialties, and refined accompaniments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {menuItems.map((section, idx) => (
              <Card
                key={idx}
                className="p-6 md:p-8 border-border hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h3 className="text-xl md:text-2xl font-display font-bold text-primary mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 border-accent">
                  {section.category}
                </h3>
                <div className="space-y-4 md:space-y-6">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="space-y-1">
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="font-accent font-semibold text-foreground text-sm md:text-base">{item.name}</h4>
                        <span className="text-accent font-accent font-bold text-sm md:text-base flex-shrink-0">{item.price}</span>
                      </div>
                      <p className="text-xs md:text-sm text-foreground/60">{item.description}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-accent md:size-lg">
              Download Full Menu <ChevronRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reserve" className="py-12 md:py-32 bg-gradient-to-b from-white to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 md:mb-12 animate-in fade-in duration-700">
              <p className="text-accent font-accent font-semibold text-xs md:text-sm tracking-widest uppercase mb-2">
                Book Your Experience
              </p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-3 md:mb-4">
                Reserve Your Table
              </h2>
              <p className="text-base md:text-lg text-foreground/70">
                Secure your spot at Luzern Steakhouse and enjoy an unforgettable dining experience
              </p>
            </div>

            <Card className="p-6 md:p-12 border-border shadow-lg animate-in fade-in slide-in-from-bottom duration-700 delay-200">
              <form onSubmit={handleReservationSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-accent font-semibold text-sm">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={reservationData.name}
                      onChange={(e) => handleReservationChange("name", e.target.value)}
                      className="border-border focus:border-primary focus:ring-primary text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-accent font-semibold text-sm">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={reservationData.email}
                      onChange={(e) => handleReservationChange("email", e.target.value)}
                      className="border-border focus:border-primary focus:ring-primary text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground font-accent font-semibold text-sm">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      placeholder="+63 (0)32 231 1148"
                      value={reservationData.phone}
                      onChange={(e) => handleReservationChange("phone", e.target.value)}
                      className="border-border focus:border-primary focus:ring-primary text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests" className="text-foreground font-accent font-semibold text-sm">
                      Number of Guests *
                    </Label>
                    <Select value={reservationData.guests} onValueChange={(value) => handleReservationChange("guests", value)}>
                      <SelectTrigger className="border-border focus:border-primary focus:ring-primary text-sm">
                        <SelectValue placeholder="Select number of guests" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8, "8+"].map((num) => (
                          <SelectItem key={num} value={String(num)}>
                            {num} {num === 1 ? "Guest" : "Guests"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-foreground font-accent font-semibold text-sm">
                      Date *
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={reservationData.date}
                      onChange={(e) => handleReservationChange("date", e.target.value)}
                      className="border-border focus:border-primary focus:ring-primary text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time" className="text-foreground font-accent font-semibold text-sm">
                      Time *
                    </Label>
                    <Input
                      id="time"
                      type="time"
                      value={reservationData.time}
                      onChange={(e) => handleReservationChange("time", e.target.value)}
                      className="border-border focus:border-primary focus:ring-primary text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-foreground font-accent font-semibold text-sm">
                    Special Requests
                  </Label>
                  <Textarea
                    id="notes"
                    placeholder="Any dietary preferences or special occasions?"
                    value={reservationData.notes}
                    onChange={(e) => handleReservationChange("notes", e.target.value)}
                    className="border-border focus:border-primary focus:ring-primary min-h-20 md:min-h-24 text-sm"
                  />
                </div>

                <Button
                  type="submit"
                  size="sm"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-accent md:size-lg"
                >
                  Confirm Reservation
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-32 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="space-y-3 md:space-y-4 animate-in fade-in slide-in-from-left duration-700">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 md:h-6 w-5 md:w-6 text-accent" />
                <h3 className="text-lg md:text-xl font-display font-bold">Location</h3>
              </div>
              <p className="text-primary-foreground/90 text-sm md:text-base">
                St. Moritz Road<br />
                Gorordo Avenue, Archbishop Road<br />
                Cebu City, 6000<br />
                Philippines
              </p>
            </div>

            <div className="space-y-3 md:space-y-4 animate-in fade-in duration-700 delay-100">
              <div className="flex items-center gap-3">
                <Phone className="h-5 md:h-6 w-5 md:w-6 text-accent" />
                <h3 className="text-lg md:text-xl font-display font-bold">Contact</h3>
              </div>
              <div className="text-primary-foreground/90 space-y-1 text-sm md:text-base">
                <p>Phone: (032) 231-1148</p>
                <p>Mobile: +63 (0)917 710 1682</p>
                <p>Email: reservations@luzernsteakhouse.ph</p>
              </div>
            </div>

            <div className="space-y-3 md:space-y-4 animate-in fade-in slide-in-from-right duration-700 delay-200">
              <div className="flex items-center gap-3">
                <Clock className="h-5 md:h-6 w-5 md:w-6 text-accent" />
                <h3 className="text-lg md:text-xl font-display font-bold">Hours</h3>
              </div>
              <div className="text-primary-foreground/90 space-y-1 text-sm md:text-base">
                <p>Sunday - Thursday</p>
                <p className="font-accent">11:00 AM - 10:00 PM</p>
                <p className="mt-3">Friday - Saturday</p>
                <p className="font-accent">11:00 AM - 11:00 PM</p>
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/80 text-xs md:text-sm">
            <p>&copy; 2026 Luzern Steakhouse. All rights reserved. | Crafted with Alpine tradition.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
