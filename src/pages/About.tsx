import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  Calendar,
  Building
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Excellence',
      description: 'We strive for the highest standards in every project and service we deliver.'
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: 'Innovation',
      description: 'Embracing cutting-edge technologies and creative solutions for modern challenges.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Quality',
      description: 'Uncompromising commitment to quality across all our business sectors.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Partnership',
      description: 'Building lasting relationships with clients through trust and reliability.'
    }
  ];

  const milestones = [
    {
      year: '2025',
      title: 'Company Registration',
      description: 'Polynovex Limited officially registered as a multi-sector business entity.'
    },
    {
      year: '2025',
      title: 'Stalo Paint Launch',
      description: 'Launched our premium paint production line with focus on quality and durability.'
    },
    {
      year: '2025',
      title: 'Technology Division',
      description: 'Expanded into software development and computer networking services.'
    },
    {
      year: '2025',
      title: 'Educational Platform',
      description: 'Introduced CBT exam platforms for educational institutions.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200)'}}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-green-400">Polynovex</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              A forward-thinking multi-sector company established in 2025, 
              bringing innovation and excellence across diverse industries.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To provide innovative, high-quality solutions across multiple sectors including 
                paint production, software development, computer networking, educational technology, 
                and electrical installations. We are committed to excellence, customer satisfaction, 
                and contributing to the growth and development of businesses and communities.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our multi-industry approach allows us to leverage expertise across different fields, 
                providing comprehensive solutions that meet the diverse needs of our clients in an 
                ever-evolving marketplace.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Mission and Vision"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Image Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional Team at Work"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-lg text-gray-600 mb-6">
                To become the leading multi-sector company in Nigeria, recognized for innovation, 
                quality, and customer excellence across all our business segments.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <Building className="h-5 w-5" />
                <span>Registered in 2025</span>
                <Calendar className="h-5 w-5" />
                <span>Multi-Industry Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These fundamental principles guide every decision we make and every service we provide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-blue-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From our registration in 2025, we've rapidly expanded across multiple sectors, 
              building a reputation for quality and innovation.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover how our multi-sector expertise can benefit your business. 
            Let's discuss your project requirements today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Contact Us Today
            </Link>
            <Link
              to="/"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;