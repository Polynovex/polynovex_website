import { Link } from 'react-router-dom';
import { 
  Palette, 
  Code, 
  Network, 
  GraduationCap, 
  Zap, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Palette className="h-12 w-12" />,
      title: 'Paint Production',
      subtitle: 'Stalo Paint',
      description: 'Premium quality paints for residential, commercial, and industrial applications with superior durability and finish.',
      link: '/services/paint-production',
      color: 'text-blue-600'
    },
    {
      icon: <Code className="h-12 w-12" />,
      title: 'Software Development',
      subtitle: 'Custom Solutions',
      description: 'Cutting-edge web and mobile applications tailored to your business needs with modern technologies.',
      link: '/services/software-development',
      color: 'text-green-600'
    },
    {
      icon: <Network className="h-12 w-12" />,
      title: 'Computer Networking',
      subtitle: 'Infrastructure Solutions',
      description: 'Professional network setup, maintenance, and security solutions for businesses of all sizes.',
      link: '/services/computer-networking',
      color: 'text-blue-600'
    },
    {
      icon: <GraduationCap className="h-12 w-12" />,
      title: 'CBT Exam Platforms',
      subtitle: 'Educational Technology',
      description: 'Advanced computer-based testing platforms for schools, institutions, and certification programs.',
      link: '/services/cbt-exam-platforms',
      color: 'text-green-600'
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: 'Electrical Installations',
      subtitle: 'Power Solutions',
      description: 'Professional electrical installations, maintenance, and safety inspections for residential and commercial properties.',
      link: '/services/electrical-installations',
      color: 'text-blue-600'
    }
  ];

  const features = [
    'Multi-sector expertise',
    'Professional team',
    'Quality guarantee',
    'Competitive pricing',
    '24/7 support',
    'Licensed & insured'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-black via-gray-900 to-brand-black text-brand-white py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: 'url(https://images.pexels.com/photos/8730121/pexels-photo-8730121.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260)'}}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-myriad mb-6">
              Innovation Across
              <span className="text-brand-green"> Multiple Sectors</span>
            </h1>
            <p className="text-xl md:text-2xl font-arial mb-8 max-w-3xl mx-auto leading-relaxed">
              Polynovex Limited delivers excellence in paint production, software development, 
              networking solutions, educational technology, and electrical installations. 
              Your trusted partner for comprehensive business solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="bg-brand-green hover:bg-brand-green-secondary text-brand-black font-arial px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Learn About Us
              </Link>
              <Link
                to="/contact"
                className="border-2 border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-black font-arial px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-myriad text-gray-900 mb-4">Why Choose Polynovex?</h2>
            <p className="text-lg font-arial text-gray-600 max-w-2xl mx-auto">
              We combine industry expertise with innovative solutions to deliver exceptional results across all our service areas.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center justify-center space-x-2 p-4 bg-brand-white rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-brand-green-secondary" />
                <span className="text-sm font-medium font-arial text-gray-800">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-myriad text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg font-arial text-gray-600 max-w-3xl mx-auto">
              From premium paint production to cutting-edge software solutions, we provide comprehensive 
              services across multiple industries with unmatched quality and expertise.
            </p>
          </div>
          
          {/* Services Overview Image */}
          <div className="mb-16">
            <img
              src="https://images.pexels.com/photos/7414021/pexels-photo-7414021.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260"
              alt="Professional Services Overview"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-brand-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-8">
                <div className={`${service.color} mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold font-myriad text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm font-medium font-arial text-gray-500 mb-4">{service.subtitle}</p>
                <p className="text-gray-600 font-arial mb-6 leading-relaxed">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-brand-green-secondary hover:text-brand-green font-semibold font-arial transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-black to-brand-green-secondary text-brand-white py-16">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200)'}}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-myriad mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl font-arial mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our multi-sector expertise can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-brand-white text-brand-black hover:bg-gray-100 font-arial px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get Free Consultation
            </Link>
            <a
              href="https://wa.me/2348169881336"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-black font-arial px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;