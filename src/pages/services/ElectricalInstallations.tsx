import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Home, 
  Building2, 
  Shield, 
  Wrench,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Clock,
  Award,
  Settings
} from 'lucide-react';

const ElectricalInstallations = () => {
  const services = [
    {
      icon: <Home className="h-8 w-8" />,
      title: 'Residential Electrical',
      description: 'Complete home electrical installations, upgrades, and maintenance services',
      features: ['New wiring installations', 'Panel upgrades', 'Outlet & switch installation', 'Lighting solutions']
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: 'Commercial Electrical',
      description: 'Professional electrical services for businesses and commercial properties',
      features: ['Office electrical systems', 'Retail lighting', 'Security systems', 'Emergency lighting']
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: 'Industrial Electrical',
      description: 'Heavy-duty electrical installations for industrial facilities and equipment',
      features: ['Motor control systems', 'Power distribution', 'Industrial lighting', 'Equipment wiring']
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Safety & Maintenance',
      description: 'Electrical safety inspections, testing, and preventive maintenance services',
      features: ['Safety inspections', 'Code compliance', 'Preventive maintenance', 'Emergency repairs']
    }
  ];

  const specialties = [
    'New Construction Wiring',
    'Electrical Panel Upgrades',
    'LED Lighting Installation',
    'Generator Installation',
    'CCTV & Security Systems',
    'Smart Home Automation'
  ];

  const safetyFeatures = [
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Licensed Electricians',
      description: 'All our electricians are fully licensed and certified professionals'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Safety First',
      description: 'We prioritize safety in every installation and follow strict safety protocols'
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: 'Code Compliant',
      description: 'All work meets or exceeds local electrical codes and standards'
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: 'Quality Materials',
      description: 'We use only high-quality, certified electrical components and materials'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-green-600 text-white py-20">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: 'url(https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1200)'}}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Electrical <span className="text-yellow-300">Installations</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Professional electrical installation services for residential, commercial, and industrial properties. 
                Safe, reliable, and code-compliant solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Get Free Quote
                </Link>
                <a
                  href="https://wa.me/2348123456789?text=Hello%20Polynovex,%20I%20need%20electrical%20installation%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                >
                  Emergency Service
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Electrical Installation"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Electrical Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive electrical solutions for all types of properties and applications. 
              From simple installations to complex industrial systems.
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

      {/* Specialties Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Specialties</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer specialized electrical services to meet the unique needs 
              of modern homes and businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{specialty}</h3>
                <p className="text-sm text-gray-600">
                  Professional installation and maintenance services
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Quality Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Safety & Quality Assurance</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your safety is our top priority. We maintain the highest standards in 
              electrical installation and follow all safety protocols.
            </p>
            
            <div className="mt-8">
              <img
                src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Professional Electrical Work"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Emergency Electrical Services"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">24/7 Emergency Electrical Services</h2>
              <p className="text-lg text-gray-600 mb-8">
                Electrical emergencies can happen at any time. Our emergency response team 
                is available 24/7 to handle urgent electrical issues and keep you safe.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-red-100 rounded-lg p-2">
                    <Clock className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">24/7 Availability</h3>
                    <p className="text-sm text-gray-600">Round-the-clock emergency electrical services</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-red-100 rounded-lg p-2">
                    <Zap className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Rapid Response</h3>
                    <p className="text-sm text-gray-600">Quick response times for emergency calls</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-red-100 rounded-lg p-2">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Safety Priority</h3>
                    <p className="text-sm text-gray-600">Immediate safety assessment and resolution</p>
                  </div>
                </div>
              </div>
              
              <a
                href="tel:+2348123456789"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
              >
                Call Emergency Line
              </a>
            </div>
          </div>
          
          <div className="mt-16 bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Common Electrical Emergencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-700">Power outages and electrical failures</span>
              </div>
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-700">Electrical fires or burning smells</span>
              </div>
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-700">Sparking outlets or switches</span>
              </div>
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-700">Electrical shock incidents</span>
              </div>
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-700">Circuit breaker issues</span>
              </div>
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-700">Flickering or dimming lights</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Installation Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From initial consultation to final testing, we follow a systematic 
              approach to ensure quality and safety.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Site Assessment</h3>
              <p className="text-gray-600">
                Thorough evaluation of your electrical needs and site conditions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Planning & Design</h3>
              <p className="text-gray-600">
                Detailed electrical design and planning with code compliance review.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-800 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Installation</h3>
              <p className="text-gray-600">
                Professional installation using quality materials and safe practices.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-800 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Testing & Certification</h3>
              <p className="text-gray-600">
                Comprehensive testing and certification to ensure everything works perfectly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Professional Electrical Work?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            From simple installations to complex electrical systems, our licensed 
            electricians are ready to help with all your electrical needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/2348123456789?text=Hello%20Polynovex,%20I%20need%20electrical%20installation%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Get Free Quote</span>
            </a>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <span>Schedule Service</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ElectricalInstallations;