import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
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
  );
}
