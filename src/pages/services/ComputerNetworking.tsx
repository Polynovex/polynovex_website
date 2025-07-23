import React from 'react';
import { Link } from 'react-router-dom';
import { Network, Shield, Server, Wifi, MonitorSpeaker, PenTool as Tools, CheckCircle, ArrowRight, MessageCircle, Clock } from 'lucide-react';

const ComputerNetworking = () => {
  const services = [
    {
      icon: <Network className="h-8 w-8" />,
      title: 'Network Design & Setup',
      description: 'Complete network infrastructure planning and implementation for businesses of all sizes',
      features: ['Network topology design', 'Hardware installation', 'Cable management', 'Testing & optimization']
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: 'Wireless Solutions',
      description: 'Professional WiFi setup and wireless network solutions for seamless connectivity',
      features: ['WiFi coverage analysis', 'Access point installation', 'Security configuration', 'Guest network setup']
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Network Security',
      description: 'Comprehensive security solutions to protect your network infrastructure',
      features: ['Firewall configuration', 'VPN setup', 'Security monitoring', 'Threat assessment']
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: 'Server Management',
      description: 'Professional server installation, configuration, and ongoing maintenance services',
      features: ['Server installation', 'System configuration', 'Backup solutions', '24/7 monitoring']
    }
  ];

  const benefits = [
    'Improved network performance and reliability',
    'Enhanced security and data protection',
    'Scalable solutions that grow with your business',
    'Reduced downtime and technical issues',
    'Professional ongoing support and maintenance',
    'Cost-effective infrastructure solutions'
  ];

  const clients = [
    'Small & Medium Businesses',
    'Corporate Offices',
    'Educational Institutions',
    'Healthcare Facilities',
    'Retail Establishments',
    'Manufacturing Plants'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: 'url(https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=1200)'}}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Computer <span className="text-green-400">Networking</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Professional network infrastructure solutions that keep your business connected, 
                secure, and running smoothly. From setup to ongoing support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Get Network Assessment
                </Link>
                <a
                  href="https://wa.me/2348123456789?text=Hello%20Polynovex,%20I%20need%20networking%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                >
                  Quick Consultation
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Network Infrastructure"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Networking Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive networking solutions designed to optimize your business connectivity 
              and ensure reliable, secure operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-blue-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Network Infrastructure"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Trust Us With Your Network?</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg p-2">
                    <Tools className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Installation</h3>
                    <p className="text-gray-600">Our certified technicians ensure proper installation and configuration of all network components.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg p-2">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
                    <p className="text-gray-600">Round-the-clock monitoring and support to keep your network running smoothly.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg p-2">
                    <MonitorSpeaker className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Proactive Monitoring</h3>
                    <p className="text-gray-600">Advanced monitoring systems to detect and resolve issues before they impact your business.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Network Monitoring"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Types Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Who We Serve</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our networking expertise spans across various industries and business sizes, 
              providing tailored solutions for every client.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Network className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{client}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From initial assessment to ongoing support, we follow a proven process 
              to deliver reliable networking solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Assessment</h3>
              <p className="text-gray-600">
                We evaluate your current infrastructure and business requirements to design the optimal solution.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Planning</h3>
              <p className="text-gray-600">
                Detailed network design and implementation plan with timeline and budget considerations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-800 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Implementation</h3>
              <p className="text-gray-600">
                Professional installation and configuration with minimal disruption to your operations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-800 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Support</h3>
              <p className="text-gray-600">
                Ongoing monitoring, maintenance, and support to ensure optimal network performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Optimize Your Network?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a comprehensive network assessment and discover how we can improve 
            your business connectivity and security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/2348123456789?text=Hello%20Polynovex,%20I%20need%20a%20network%20assessment"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Free Assessment</span>
            </a>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComputerNetworking;