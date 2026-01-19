import React from 'react';

const ArtistInformation = () => {
  return (
    <section id="artist" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-elegant font-bold text-bordeaux-900 mb-6">
                About the Artist
              </h2>
              <div className="w-24 h-1 bg-bordeaux-700 mb-8"></div>
            </div>
            
            <div className="pr-4 space-y-6 text-gray-700 leading-relaxed">
              <p className="text-base">
                Originally from Germany, the artist Kerstin A. Wehrmann lives and works in the idyllic Surlej, Engadine, a region that deeply inspires her with its rugged nature and expansive, clear landscapes. The untamed wilderness and the play of light and shadow in the mountains continuously offer her new inspiration. Her goal is to highlight the fragility of the natural balance and the deep bond between humans and animals. Through her art, she seeks to raise awareness of the need to protect nature and wildlife, while not neglecting its aesthetic beauty. For her, working with bronze is a tribute to the durability and resilience of nature.
              </p>
              
              <p className="text-base">
                Kerstin uses her skills as a master draughtswoman, as well as new techniques, to revisit the history of European painting and sculpting. Although they are realistic, her enigmatic characters occupy an undefined setting, suggested only by a few lines, suspended in time. Her paintings and bronze sculptures are full of strength and beauty, that remain imperceptible, as though they were continually in the process of becoming.
              </p>
              
              <p className="text-base">
                In her works, Kerstin's knowledge of art history and her study of painting and sculpting since the Renaissance shine through a highly modern sensibility. The artist reconsiders figurative painting and sculpting to give it a new soul. Her contribution to modern art spans over more than three decades. Kerstin's bronze sculptures, mostly animals, are often considered to be her signature pieces.
              </p>
              
              <p className="text-base">
                As Kerstin observes the world around her, she strives to avoid reproducing the clichéd. Although she continues to express herself in traditional graphic media, oil paint and bronze her desire to create contemporary art with traditional skills led her to experiment with painting on Plexiglas. There is no room for error as color dries very quickly on plastic – necessitating extensive preliminary studies in charcoal, pen, pastels, and oil paints before she paints on the verso of the Plexiglas. Perfecting this technique, she is in a constant state of experimenting. The very nature of applying the colors in reverse order as one would with oils is a challenge.
              </p>
              
              <p className="text-base">
                Advances in technology have changed the history of art. For Kerstin, the great technological advancement is Plexiglas, which creates a unique surface for her paintings not only in the application of color to its verso, but also in the huge sizes of sheets that are available. Kerstin's work can be found in numerous important national and international private collections. Her name is best known among a growing circle of carefully cultivated connoisseurs.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <h3 className="text-3xl font-elegant font-bold text-bordeaux-700 mb-2">30+</h3>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-elegant font-bold text-bordeaux-700 mb-2">International</h3>
                <p className="text-gray-600">Collections</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="relative">
              <div className="aspect-w-3 aspect-h-4 bg-white rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/Kerstin.png"
                  alt="Kerstin A. Wehrmann"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-bordeaux-700 text-white p-6 rounded-lg shadow-xl max-w-xs">
                <p className="text-elegant text-xl font-medium italic">
                  "Art is the bridge between the momentary and the eternal"
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl mt-12 max-w-md mx-auto">
              <img
                src="/Kerstin2.png"
                alt="Kerstin A. Wehrmann at work"
                className="w-auto h-[50%] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistInformation;
