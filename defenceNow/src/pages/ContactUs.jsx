import { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

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
      icon: EnvelopeIcon,
      title: 'Email',
      details: 'contact@defencenow.com',
      subdetails: 'editorial@defencenow.com'
    },
    {
      icon: PhoneIcon,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      subdetails: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: MapPinIcon,
      title: 'Office',
      details: '1234 Defence Avenue',
      subdetails: 'Washington, DC 20001'
    }
  ];

  const departments = [
    {
      title: 'Editorial Inquiries',
      email: 'editorial@defencenow.com',
      description: 'Story ideas, corrections, and editorial feedback'
    },
    {
      title: 'Press & Media',
      email: 'press@defencenow.com',
      description: 'Media requests, interviews, and press releases'
    },
    {
      title: 'Advertising',
      email: 'advertising@defencenow.com',
      description: 'Advertising opportunities and partnerships'
    },
    {
      title: 'Technical Support',
      email: 'support@defencenow.com',
      description: 'Website issues and subscription support'
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {contactInfo.map((info, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-primary-100 rounded-full p-4">
                  <info.icon className="h-8 w-8 text-primary-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">{info.title}</h3>
              <p className="text-gray-700 font-medium mb-1">{info.details}</p>
              <p className="text-gray-500 text-sm">{info.subdetails}</p>
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
                    placeholder="John Doe"
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
                    placeholder="john@example.com"
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

      {/* Departments */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-8 sm:mb-12 text-center">Contact by Department</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {departments.map((dept, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-bold text-navy-900 mb-2">{dept.title}</h3>
                <a href={`mailto:${dept.email}`} className="text-primary-600 hover:text-primary-700 font-medium text-sm mb-3 block">
                  {dept.email}
                </a>
                <p className="text-gray-600 text-sm">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6 sm:mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-navy-900 mb-2">How can I submit a story tip?</h3>
              <p className="text-gray-700">
                Send your story tips to editorial@defencenow.com. Please include as much detail as possible, 
                including sources and relevant documentation. All tips are treated confidentially.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-navy-900 mb-2">Do you accept guest contributions?</h3>
              <p className="text-gray-700">
                Yes, we welcome submissions from defence professionals, analysts, and subject matter experts. 
                Please send your pitch or completed article to editorial@defencenow.com.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-navy-900 mb-2">How do I report an error?</h3>
              <p className="text-gray-700">
                We take accuracy seriously. If you've spotted an error, please email editorial@defencenow.com 
                with the article URL and details of the correction needed.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-navy-900 mb-2">Can I republish your content?</h3>
              <p className="text-gray-700">
                For republishing requests, please contact press@defencenow.com. We evaluate requests on a 
                case-by-case basis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
