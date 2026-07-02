import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/Reveal";
import { useState } from "react";
import { toast } from "sonner";

export default function Reserve() {
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

  return (
    <section id="reserve" className="py-16 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <Reveal from="up" className="text-center mb-8 md:mb-12">
            <p className="font-serif text-secondary font-semibold text-xs md:text-sm tracking-[0.2em] uppercase mb-2">
              Book Your Experience
            </p>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-primary mb-3 md:mb-4">
              Reserve Your Table
            </h2>
            <p className="font-body text-base md:text-lg text-foreground/70">
              Secure your spot at Luzern Steakhouse and enjoy an unforgettable dining experience
            </p>
          </Reveal>

          <Reveal from="up" delay={0.15} amount={0.15}>
          <Card className="p-6 md:p-12 bg-card border-border shadow-lg">
            <form onSubmit={handleReservationSubmit} className="space-y-5 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-display font-semibold text-sm">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    value={reservationData.name}
                    onChange={(e) => handleReservationChange("name", e.target.value)}
                    className="border-border bg-input focus:border-secondary focus:ring-secondary text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-display font-semibold text-sm">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={reservationData.email}
                    onChange={(e) => handleReservationChange("email", e.target.value)}
                    className="border-border bg-input focus:border-secondary focus:ring-secondary text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-display font-semibold text-sm">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    placeholder="+63"
                    value={reservationData.phone}
                    onChange={(e) => handleReservationChange("phone", e.target.value)}
                    className="border-border bg-input focus:border-secondary focus:ring-secondary text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests" className="text-foreground font-display font-semibold text-sm">
                    Number of Guests *
                  </Label>
                  <Select value={reservationData.guests} onValueChange={(value) => handleReservationChange("guests", value)}>
                    <SelectTrigger className="w-full border-border bg-input focus:border-secondary focus:ring-secondary text-sm">
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
                  <Label htmlFor="date" className="text-foreground font-display font-semibold text-sm">
                    Date *
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={reservationData.date}
                    onChange={(e) => handleReservationChange("date", e.target.value)}
                    className="border-border bg-input focus:border-secondary focus:ring-secondary text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time" className="text-foreground font-display font-semibold text-sm">
                    Time *
                  </Label>
                  <Input
                    id="time"
                    type="time"
                    value={reservationData.time}
                    onChange={(e) => handleReservationChange("time", e.target.value)}
                    className="border-border bg-input focus:border-secondary focus:ring-secondary text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes" className="text-foreground font-display font-semibold text-sm">
                  Special Requests
                </Label>
                <Textarea
                  id="notes"
                  placeholder="Any dietary preferences or special occasions?"
                  value={reservationData.notes}
                  onChange={(e) => handleReservationChange("notes", e.target.value)}
                  className="border-border bg-input focus:border-secondary focus:ring-secondary min-h-20 md:min-h-24 text-sm"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-accent uppercase tracking-wider"
              >
                Confirm Reservation
              </Button>
            </form>
          </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
