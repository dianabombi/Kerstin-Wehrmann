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
      title: "Gallery10",
      location: "St. Moritz",
      date: "2024-2026",
      image: "/gallery10-stmoritz.jpg"
    },
    {
      id: 2,
      title: "Hublot Polo Gold Cup",
      location: "Gstaad",
      date: "2025",
      image: "/hublot-polo-gstaad.jpg"
    },
    {
      id: 3,
      title: "Geneva Polo Club",
      location: "Geneva",
      date: "2025",
      image: "/geneva-polo-club.jpg"
    }
  ];

  return (
    <section id="exhibitions" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex justify-center mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-stone-900 tracking-luxury relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-stone-900 after:transition-all after:duration-500 hover:after:w-full">
            Exhibitions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {exhibitions.map((exhibition) => (
            <div key={exhibition.id} className="group border border-stone-200 p-8 transition-all duration-300 hover:border-stone-400 hover:shadow-lg">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-serif font-light text-stone-900 tracking-luxury">
                  {exhibition.title}
                </h3>
                <div className="h-px bg-stone-200 w-16 mx-auto"></div>
                <p className="text-base font-sans text-stone-700">
                  {exhibition.location}
                </p>
                <p className="text-sm font-sans text-stone-600 tracking-wider uppercase">
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
