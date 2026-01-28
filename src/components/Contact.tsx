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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-stone-900 tracking-luxury relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full sm:after:w-0 after:h-[2px] after:bg-stone-900 after:transition-all after:duration-500 sm:hover:after:w-full">
            Private Inquiry
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-16">
          <div className="flex justify-center md:justify-start">
            <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-12 w-full max-w-md">
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

          <div className="flex items-center mt-12 md:mt-0">
            <div className="space-y-10 sm:space-y-12 text-center md:text-right w-full">
              <div className="bg-stone-50 p-6 sm:p-8 rounded-lg">
                <p className="text-xs sm:text-sm font-sans text-stone-700 tracking-luxury uppercase mb-4 font-semibold">
                  Studio Location
                </p>
                <p className="text-base sm:text-lg font-sans text-stone-800 leading-relaxed">
                  Surlej, Engadine<br />
                  Switzerland
                </p>
              </div>
              
              <div className="bg-stone-50 p-6 sm:p-8 rounded-lg">
                <p className="text-xs sm:text-sm font-sans text-stone-700 tracking-luxury uppercase mb-4 font-semibold">
                  Contact
                </p>
                <p className="text-base sm:text-lg font-sans text-stone-800 leading-relaxed">
                  Kerstin A. Wehrmann<br />
                  <a href="mailto:kwehrmann@gmx.ch" className="hover:text-stone-900 transition-colors duration-200 underline decoration-stone-300 hover:decoration-stone-900">
                    kwehrmann[at]gmx.ch
                  </a>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end pt-4">
                <a 
                  href="mailto:kwehrmann@gmx.ch"
                  className="inline-flex items-center justify-center gap-3 text-base sm:text-lg font-sans text-white bg-stone-800 hover:bg-stone-700 px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </a>
                <a 
                  href="https://wa.me/41793613709" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 text-base sm:text-lg font-sans text-white bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
