import { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - will be connected to backend later
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Phone',
      details: '+91 96612 18504',
      subdetails: ''
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      details: 'contact@defencewings.com',
      subdetails: ''
    },
    {
      icon: GlobeAltIcon,
      title: 'Website',
      details: 'www.defencewings.com',
      subdetails: ''
    },
    {
      icon: MapPinIcon,
      title: 'Address',
      details: 'New Delhi-110024',
      subdetails: 'India'
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-900 to-navy-800 text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Contact Us</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 px-4">
              Have a question, story tip, or feedback? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {contactInfo.map((info, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-primary-100 rounded-full p-4">
                  <info.icon className="h-8 w-8 text-primary-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">{info.title}</h3>
              <p className="text-gray-700 font-medium mb-1">{info.details}</p>
              {info.subdetails && <p className="text-gray-500 text-sm">{info.subdetails}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-4 sm:mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-navy-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-navy-900 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="What is this regarding?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-navy-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-700 text-navy-900 font-semibold rounded-lg transition transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6">Connect With Us</h2>
            <p className="text-lg text-gray-700 mb-8">
              Defence Wings is dedicated to delivering timely, credible, and insightful coverage of military, security, and geopolitical developments. Reach out to us for editorial inquiries, advertising opportunities, or partnership proposals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:contact@defencewings.com"
                className="px-6 py-3 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-lg transition"
              >
                Email Us Directly
              </a>
              <a
                href="/about"
                className="px-6 py-3 border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-semibold rounded-lg transition"
              >
                Learn About Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
