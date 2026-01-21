import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="flex justify-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-stone-900 tracking-luxury relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-stone-900 after:transition-all after:duration-500 hover:after:w-full">
            Private Inquiry
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-16">
          <div>
            <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-12">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-sans text-stone-700 mb-2 tracking-luxury uppercase">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-0 py-2 sm:py-3 border-0 border-b border-stone-300 focus:border-stone-900 focus:ring-0 transition-colors duration-200 bg-transparent text-sm sm:text-base"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-sans text-stone-700 mb-2 tracking-luxury uppercase">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-0 py-2 sm:py-3 border-0 border-b border-stone-300 focus:border-stone-900 focus:ring-0 transition-colors duration-200 bg-transparent text-sm sm:text-base"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-sans text-stone-700 mb-2 tracking-luxury uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-0 py-2 sm:py-3 border-0 border-b border-stone-300 focus:border-stone-900 focus:ring-0 transition-colors duration-200 bg-transparent resize-none text-sm sm:text-base"
                ></textarea>
              </div>

              <div className="flex justify-center md:justify-start">
                <button
                  type="submit"
                  className="btn-primary"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>

          <div className="flex items-center mt-8 md:mt-0">
            <div className="space-y-8 sm:space-y-12 text-center md:text-right w-full">
              <div>
                <p className="text-xs sm:text-sm font-sans text-stone-700 tracking-luxury uppercase mb-2">
                  Studio Location
                </p>
                <p className="text-sm sm:text-base font-sans text-stone-600">
                  Surlej, Engadine<br />
                  Switzerland
                </p>
              </div>
              
              <div>
                <p className="text-xs sm:text-sm font-sans text-stone-700 tracking-luxury uppercase mb-2">
                  Contact
                </p>
                <p className="text-sm sm:text-base font-sans text-stone-600">
                  Kerstin A. Wehrmann<br />
                  <a href="mailto:kwehrmann@gmx.ch" className="hover:text-stone-900 transition-colors duration-200">
                    kwehrmann[at]gmx.ch
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
