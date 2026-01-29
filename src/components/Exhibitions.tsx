import React from 'react';

interface Exhibition {
  id: number;
  title: string;
  location: string;
  date: string;
  image?: string;
}

const Exhibitions = () => {
  const exhibitions: Exhibition[] = [
    {
      id: 1,
      title: "Galerie10",
      location: "St. Moritz, Switzerland",
      date: "2024-2026",
      image: "/galerie.jpg"
    },
    {
      id: 2,
      title: "40th Snow Polo World Cup",
      location: "St. Moritz, Switzerland",
      date: "2025",
      image: "/Polo on Ice exh.jpg"
    },
    {
      id: 3,
      title: "Hublot Polo Gold Cup",
      location: "Gstaad, Switzerland",
      date: "2025",
      image: "/mami im zelt.jpg"
    },
    {
      id: 4,
      title: "Geneva Polo Club",
      location: "Veigy-Foncenex, France",
      date: "2025",
      image: "/Gevena Polo.jpg"
    },
    {
      id: 5,
      title: "Katharina Kamm Raumkultur",
      location: "Gmund am Tegernsee, Germany",
      date: "2025-2026",
      image: "/Katharina Kamm.jpeg"
    }
  ];

  return (
    <section id="exhibitions" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex justify-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-stone-900 tracking-luxury relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full sm:after:w-0 after:h-[2px] after:bg-stone-900 after:transition-all after:duration-500 sm:hover:after:w-full">
            Exhibitions
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {exhibitions.map((exhibition) => (
            <div key={exhibition.id} className="group">
              {exhibition.image && (
                <div className="h-[36rem] sm:h-auto sm:aspect-[4/3] overflow-hidden mb-4 sm:mb-6 bg-stone-50 flex items-center justify-center">
                  <img
                    src={exhibition.image}
                    alt={exhibition.title}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="text-center space-y-2 sm:space-y-3">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-light text-stone-900 tracking-luxury">
                  {exhibition.title}
                </h3>
                <div className="h-px bg-stone-200 w-12 sm:w-16 mx-auto"></div>
                <p className="text-sm sm:text-base font-sans text-stone-700">
                  {exhibition.location}
                </p>
                <p className="text-xs sm:text-sm font-sans text-stone-600 tracking-wider uppercase">
                  {exhibition.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-16 sm:mt-20">
        <div className="h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"></div>
      </div>
    </section>
  );
};

export default Exhibitions;
