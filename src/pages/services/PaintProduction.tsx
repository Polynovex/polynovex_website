import { Link } from 'react-router-dom';
import { 
  Palette, 
  Shield, 
  Award, 
  Droplets, 
  CheckCircle,
  ArrowRight,
  MessageCircle
} from 'lucide-react';

const PaintProduction = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Premium Quality',
      description: 'Superior formulations using high-grade materials for long-lasting results'
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: 'Weather Resistant',
      description: 'Specially designed to withstand harsh weather conditions and UV rays'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Industry Certified',
      description: 'Meets and exceeds international quality standards and certifications'
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'Wide Color Range',
      description: 'Extensive palette of colors and custom matching services available'
    }
  ];

  const applications = [
    'Residential Interior & Exterior',
    'Commercial Buildings',
    'Industrial Facilities',
    'Educational Institutions',
    'Healthcare Facilities',
    'Government Buildings'
  ];

  const benefits = [
    'Excellent coverage and opacity',
    'Low VOC and environmentally friendly',
    'Quick drying and easy application',
    'Superior durability and longevity',
    'Competitive pricing',
    'Technical support included'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-black to-gray-900 text-brand-white py-20">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: 'url(https://images.pexels.com/photos/1887946/pexels-photo-1887946.jpeg?auto=compress&cs=tinysrgb&w=1200)'}}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold font-myriad mb-6">
                <span className="text-brand-green">Stalo</span> Paint
              </h1>
              <p className="text-xl md:text-2xl font-arial mb-8">
                Premium paint production for all your residential, commercial, and industrial needs. 
                Quality you can trust, colors that last.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/gallery"
                  className="bg-brand-green hover:bg-brand-green-secondary text-brand-black font-arial px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  View Color Gallery
                </Link>
                <a
                  href="https://wa.me/2348123456789?text=Hello%20Polynovex,%20I'm%20interested%20in%20Stalo%20Paint"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-black font-arial px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                >
                  Get Quote
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1887946/pexels-photo-1887946.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Stalo Paint Quality"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-myriad text-gray-900 mb-4">Why Choose Stalo Paint?</h2>
            <p className="text-lg font-arial text-gray-600 max-w-3xl mx-auto">
              Our advanced paint formulations combine quality, durability, and aesthetic appeal 
              to deliver exceptional results for every application.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-brand-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="text-brand-green-secondary mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold font-myriad text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 font-arial">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Perfect for Every Application</h2>
              <p className="text-lg text-gray-600 mb-8">
                Stalo Paint is engineered to meet the diverse needs of different environments 
                and surfaces. From delicate interior walls to robust industrial structures.
              </p>
              
              <div className="space-y-4">
                {applications.map((application, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{application}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <img
                  src="https://images.pexels.com/photos/1887946/pexels-photo-1887946.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Paint Application Process"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Interior Application"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Exterior Application"
                className="rounded-lg shadow-lg mt-8"
              />
              <img
                src="https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Commercial Application"
                className="rounded-lg shadow-lg -mt-8"
              />
              <img
                src="https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Industrial Application"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Benefits</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the difference with Stalo Paint's advanced formulation and 
              customer-focused approach to paint manufacturing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-md">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How to Get Started</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to transform your space with Stalo Paint? Here's how easy it is to get started.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Choose Your Colors</h3>
              <p className="text-gray-600">
                Browse our gallery or visit our showroom to select from our wide range of colors 
                and finishes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get Your Quote</h3>
              <p className="text-gray-600">
                Contact us with your requirements and get a detailed quote including quantity, 
                pricing, and delivery timeline.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-800 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Receive & Apply</h3>
              <p className="text-gray-600">
                Get your premium Stalo Paint delivered and enjoy professional results with 
                our application guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Premium Paint Quality?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transform your space with Stalo Paint. Contact us today for samples, 
            quotes, or technical consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/2348123456789?text=Hello%20Polynovex,%20I%20need%20a%20quote%20for%20Stalo%20Paint"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp Quote</span>
            </a>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <span>Contact Us</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaintProduction;