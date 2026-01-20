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
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="text-4xl font-serif font-light text-stone-900 tracking-luxury text-center mb-24">
          Private Inquiry
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm font-sans text-stone-700 mb-2 tracking-luxury uppercase">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-0 border-b border-stone-300 focus:border-stone-900 focus:ring-0 transition-colors duration-200 bg-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-sans text-stone-700 mb-2 tracking-luxury uppercase">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-0 border-b border-stone-300 focus:border-stone-900 focus:ring-0 transition-colors duration-200 bg-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-sans text-stone-700 mb-2 tracking-luxury uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-0 border-b border-stone-300 focus:border-stone-900 focus:ring-0 transition-colors duration-200 bg-transparent resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary"
              >
                Send Inquiry
              </button>
            </form>
          </div>

          <div className="flex items-center">
            <div className="space-y-4">
              <p className="text-base font-sans text-stone-700">
                Studio Location
              </p>
              <p className="text-base font-sans text-stone-600">
                Surlej, Engadine<br />
                Switzerland
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
