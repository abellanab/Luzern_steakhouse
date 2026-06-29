import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

export default function Menu() {
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
    <section id="menu" className="py-16 md:py-32 bg-primary text-primary-foreground">
      <div className="container">
        <div className="text-center mb-10 md:mb-16 animate-in fade-in duration-700">
          <p className="font-serif text-secondary font-semibold text-xs md:text-sm tracking-[0.2em] uppercase mb-2">
            Culinary Excellence
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-primary-foreground mb-3 md:mb-4">
            Our Menu
          </h2>
          <p className="font-body text-base md:text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium steaks, signature specialties, and refined accompaniments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {menuItems.map((section, idx) => (
            <Card
              key={idx}
              className="p-6 md:p-8 bg-card border-none text-card-foreground hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <h3 className="font-display font-bold text-2xl md:text-3xl text-primary mb-5 md:mb-6 pb-3 md:pb-4 border-b-2 border-secondary">
                {section.category}
              </h3>
              <div className="space-y-5 md:space-y-6">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="space-y-1">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-display font-semibold text-foreground text-sm md:text-base">{item.name}</h4>
                      <span className="text-secondary font-display font-bold text-sm md:text-base flex-shrink-0">{item.price}</span>
                    </div>
                    <p className="font-body text-xs md:text-sm text-foreground/60">{item.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 md:mt-14 text-center">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-accent uppercase tracking-wider">
            Download Full Menu <ChevronRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
