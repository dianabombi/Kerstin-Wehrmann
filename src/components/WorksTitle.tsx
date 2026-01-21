import React from 'react';

const WorksTitle = () => {
  return (
    <section className="pt-8 pb-4 sm:pt-12 sm:pb-6 bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full">
        <div className="flex justify-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-stone-900 tracking-luxury relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-stone-900 after:transition-all after:duration-500 hover:after:w-full">
            Works
          </h2>
        </div>
      </div>
    </section>
  );
};

export default WorksTitle;
