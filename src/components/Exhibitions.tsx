import React from 'react';

interface Exhibition {
  id: number;
  title: string;
  location: string;
  date: string;
  type: string;
  description: string;
}

const Exhibitions = () => {
  const exhibitions: Exhibition[] = [
    {
      id: 1,
      title: "Polo Elegance: A Retrospective",
      location: "Wellington Art Gallery, Florida",
      date: "March 15 - May 30, 2024",
      type: "Solo Exhibition",
      description: "A comprehensive showcase of bronze sculptures and oil paintings celebrating 20 years of equestrian artistry."
    },
    {
      id: 2,
      title: "International Polo Art Fair",
      location: "Buenos Aires, Argentina",
      date: "September 10-15, 2024",
      type: "Group Exhibition",
      description: "Featured artist at the prestigious international gathering of polo-inspired contemporary art."
    },
    {
      id: 3,
      title: "The Spirit of the Game",
      location: "Guards Polo Club, Windsor, UK",
      date: "June 1 - August 31, 2023",
      type: "Solo Exhibition",
      description: "An intimate collection exploring the relationship between horse and rider through watercolors and sketches."
    },
    {
      id: 4,
      title: "Equestrian Masters",
      location: "Dubai International Art Center",
      date: "January 20 - February 28, 2023",
      type: "Group Exhibition",
      description: "Showcasing contemporary equestrian art alongside renowned international artists."
    }
  ];

  return (
    <section id="exhibitions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-elegant font-bold text-bordeaux-900 mb-4">
            Exhibitions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Past and upcoming exhibitions showcasing the art of polo
          </p>
        </div>

        <div className="space-y-8">
          {exhibitions.map((exhibition, index) => (
            <div 
              key={exhibition.id} 
              className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } lg:flex`}
            >
              <div className="lg:w-1/3 bg-gradient-to-br from-bordeaux-100 to-bordeaux-200 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-block bg-bordeaux-700 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                    {exhibition.type}
                  </div>
                  <svg className="w-20 h-20 mx-auto text-bordeaux-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              <div className="lg:w-2/3 p-8">
                <h3 className="text-2xl font-elegant font-bold text-bordeaux-900 mb-3">
                  {exhibition.title}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-bordeaux-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{exhibition.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-bordeaux-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{exhibition.date}</span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {exhibition.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exhibitions;
