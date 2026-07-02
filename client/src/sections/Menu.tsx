const menuCategories = [
  {
    title: "Appetizers",
    image: "/appetizer.png",
    alt: "Crispy appetizer with dipping sauce",
    imageClassName: "object-[44%_center]",
  },
  {
    title: "Entrees",
    image: "/entrees.png",
    alt: "Sliced steak served on a wooden board",
    imageClassName: "object-[25%_center]",
  },
  {
    title: "Soups & Salads",  
    image: "/soup&salads.png",
    alt: "Tomato soup with bread and herb butter",
    imageClassName: "object-[73%_center]",
  },
  {
    title: "Pasta",
    image: "/pasta.png",
    alt: "Pasta served in a pan with herbs",
    imageClassName: "object-[65%_center]",
  },
  {
    title: "Dessert",
    image: "/desert.png",
    alt: "Cream-topped dessert drink with chocolate shavings",
    imageClassName: "object-[57%_center]",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="overflow-hidden bg-background py-16 text-primary md:py-24 lg:py-28">
      <div className="container">
        <h2 className="mb-9 text-center font-display text-[clamp(3.75rem,8vw,6.5rem)] font-black uppercase leading-none tracking-normal text-primary md:mb-12 lg:mb-14">
          Menu
        </h2>

        <div className="relative left-1/2 grid w-full max-w-[23rem] -translate-x-1/2 grid-cols-1 gap-6 sm:max-w-[47rem] sm:grid-cols-2 md:max-w-[70rem] md:grid-cols-6 md:gap-7 lg:w-[min(91vw,110rem)] lg:max-w-none lg:grid-cols-5 lg:gap-[clamp(1.75rem,2.75vw,3.5rem)]">
          {menuCategories.map((category, index) => (
            <a
              key={category.title}
              href="#reserve"
              className="group block animate-in fade-in slide-in-from-bottom rounded-2xl duration-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background md:col-span-2 lg:col-span-1"
              style={{ animationDelay: `${index * 90}ms` }}
              aria-label={`View ${category.title}`}
            >
              <div className="relative mx-auto aspect-[4/5.6] w-full overflow-hidden rounded-2xl bg-muted shadow-sm transition-all duration-300 ease-out group-hover:-translate-y-3 group-hover:scale-[1.035] group-hover:shadow-2xl group-focus-visible:-translate-y-3 group-focus-visible:scale-[1.035] group-focus-visible:shadow-2xl sm:aspect-[4/5.8] md:aspect-[4/6.4] lg:aspect-[7/16]">
                <img
                  src={category.image}
                  alt={category.alt}
                  loading="lazy"
                  sizes="(min-width: 1024px) 17vw, (min-width: 768px) 31vw, (min-width: 640px) 45vw, 90vw"
                  className={`h-full w-full object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-125 group-focus-visible:scale-105 group-focus-visible:brightness-125 ${category.imageClassName}`}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-[#33140f]/90 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus-visible:opacity-100">
                  <h3 className="font-serif text-3xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}