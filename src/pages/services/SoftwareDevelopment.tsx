import { Link } from 'react-router-dom';
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Search,
  Palette
} from 'lucide-react';

const SoftwareDevelopment = () => {

  const services = [
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'Web Applications',
    description: 'Modern, responsive web applications built with cutting-edge technologies',
    technologies: ['React', 'Node.js', 'TypeScript', 'Next.js']
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin']
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: 'Backend Systems',
    description: 'Scalable backend infrastructure and API development services',
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB']
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Security Solutions',
    description: 'Comprehensive security audits and secure application development',
    technologies: ['OAuth', 'JWT', 'SSL/TLS', 'Encryption']
  },
  {
    icon: <ArrowRight className="h-8 w-8" />,
    title: 'Hosting & Deployment',
    description: 'Seamless deployment to cloud platforms and reliable hosting solutions tailored to your needs.',
    technologies: ['AWS', 'Vercel', 'Netlify', 'Render', 'Namecheap', 'HawkHost']
  }
];

  const industries = [
    'E-commerce & Retail',
    'Healthcare & Medical',
    'Education & E-learning',
    'Finance & Banking',
    'Manufacturing',
    'Real Estate'
  ];

  const process = [
    {
      step: 1,
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project roadmap.',
      icon: <Search className="h-8 w-8" />
    },
    {
      step: 2,
      title: 'Design & Prototyping',
      description: 'Create intuitive UI/UX designs and interactive prototypes.',
      icon: <Palette className="h-8 w-8" />
    },
    {
      step: 3,
      title: 'Development',
      description: 'Build your application using modern technologies and best practices.',
      icon: <Code className="h-8 w-8" />
    },
    {
      step: 4,
      title: 'Testing & Deployment',
      description: 'Comprehensive testing and smooth deployment to production.',
      icon: <Zap className="h-8 w-8" />
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-green-secondary to-brand-black text-brand-white py-20">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: 'url(https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200)'}}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold font-myriad mb-6">
                Software Development
              </h1>
              <p className="text-xl md:text-2xl font-arial mb-8">
                Custom software solutions that drive your business forward. From web applications 
                to mobile apps, we build technology that works for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-brand-green hover:bg-brand-green-secondary text-brand-black font-arial px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Start Your Project
                </Link>
                <a
                  href="https://wa.me/2348123456789?text=Hello%20Polynovex,%20I%20need%20software%20development%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-black font-arial px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                >
                  Discuss Ideas
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Software Development"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We specialize in building modern, scalable applications using the latest 
              technologies and industry best practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-green-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our team has experience across multiple industries, understanding unique 
              challenges and requirements for each sector.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-md">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Software Development Team"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Choose Our Development Team?</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-lg p-2">
                    <Code className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern Technologies</h3>
                    <p className="text-gray-600">We use cutting-edge technologies and frameworks to build future-proof applications.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-lg p-2">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Security First</h3>
                    <p className="text-gray-600">Security is built into every layer of our applications from the ground up.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-lg p-2">
                    <Zap className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Optimized</h3>
                    <p className="text-gray-600">Our applications are optimized for speed, efficiency, and scalability.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to deliver high-quality software solutions on time and within budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-lg p-3 flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.step}. {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Development Process"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transform Your Ideas Into Reality
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to build your next software project? Let's discuss your requirements 
            and create a solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/2348123456789?text=Hello%20Polynovex,%20I%20have%20a%20software%20development%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Start Discussion</span>
            </a>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopment;