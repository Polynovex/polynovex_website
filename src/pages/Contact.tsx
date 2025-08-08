import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock,
  Send
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 2000);
  };

  const services = [
    'Paint Services (Stalo Paint)',
    'Software Development',
    'Computer Networking',
    'CBT Exam Platforms',
    'Electrical Installations',
    'General Inquiry'
  ];

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      info: '+2348134393554',
      action: 'tel:+2348134393554'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      info: 'info@polynovexlimited.com',
      action: 'mailto:polinovex1@gmail.com'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Address',
      info: '3 Oloabisi Street, Ojota Lagos, Nigeria',
      action: ''
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Business Hours',
      info: 'Mon - Sat: 8:00 AM - 6:00 PM',
      action: ''
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-black to-brand-green-secondary text-brand-white py-20">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: 'url(https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200)'}}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-myriad mb-6">Get in Touch</h1>
            <p className="text-xl md:text-2xl font-arial max-w-3xl mx-auto">
              Ready to start your project? We're here to help you achieve your goals 
              across all our service areas.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold font-myriad text-gray-900 mb-8">Send us a Message</h2>
              
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-brand-green-secondary rounded-lg">
                  <p className="text-brand-green-secondary font-arial">
                    Thank you for your message! We'll get back to you within 24 hours.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium font-arial text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green-secondary focus:border-transparent transition-colors font-arial"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium font-arial text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green-secondary focus:border-transparent transition-colors font-arial"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium font-arial text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green-secondary focus:border-transparent transition-colors font-arial"
                      placeholder="+234 xxx xxx xxxx"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium font-arial text-gray-700 mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green-secondary focus:border-transparent transition-colors font-arial"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium font-arial text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green-secondary focus:border-transparent transition-colors resize-none font-arial"
                    placeholder="Tell us about your project or requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-green-secondary hover:bg-brand-green disabled:bg-gray-400 text-brand-white font-arial px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-brand-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold font-myriad text-gray-900 mb-8">Contact Information</h2>
              
              <div className="mb-8">
                <img
                  src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Contact Us"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-brand-green-secondary mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold font-myriad text-gray-900 mb-1">{item.title}</h3>
                      {item.action ? (
                        <a
                          href={item.action}
                          className="text-gray-600 font-arial hover:text-brand-green-secondary transition-colors"
                        >
                          {item.info}
                        </a>
                      ) : (
                        <p className="text-gray-600 font-arial">{item.info}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-green-50 border border-brand-green-secondary rounded-lg p-6">
                <h3 className="font-semibold font-myriad text-gray-900 mb-2">Need Immediate Assistance?</h3>
                <p className="text-gray-600 font-arial mb-4">
                  Contact us directly on WhatsApp for quick responses and instant communication.
                </p>
                <a
                  href="https://wa.me/2348169881336?text=Hello%20Polynovex,%20I'm%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-brand-green-secondary hover:bg-brand-green text-brand-white font-arial px-6 py-3 rounded-lg font-semibold transition-colors space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Service Areas */}
              <div className="mt-8">
                <h3 className="text-xl font-bold font-myriad text-gray-900 mb-4">Our Service Areas</h3>
                <div className="space-y-2">
                  {services.slice(0, -1).map((service, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-brand-green-secondary rounded-full"></div>
                      <span className="text-gray-600 font-arial">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;