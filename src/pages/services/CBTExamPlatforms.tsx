import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Monitor, 
  Shield, 
  BarChart3, 
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  FileText,
  Award
} from 'lucide-react';

const CBTExamPlatforms = () => {
  const features = [
    {
      icon: <Monitor className="h-8 w-8" />,
      title: 'User-Friendly Interface',
      description: 'Intuitive design that makes it easy for both students and administrators to navigate',
      benefits: ['Clean, modern interface', 'Responsive design', 'Accessibility features', 'Multi-language support']
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Secure Testing Environment',
      description: 'Advanced security features to prevent cheating and ensure exam integrity',
      benefits: ['Browser lockdown', 'Plagiarism detection', 'Time restrictions', 'Session monitoring']
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Advanced Analytics',
      description: 'Comprehensive reporting and analytics to track performance and insights',
      benefits: ['Real-time results', 'Performance analytics', 'Custom reports', 'Progress tracking']
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Multi-User Management',
      description: 'Efficient management of students, instructors, and administrators',
      benefits: ['Role-based access', 'Bulk user import', 'Group management', 'Permission controls']
    }
  ];

  const examTypes = [
    'Academic Examinations',
    'Professional Certifications',
    'Recruitment Tests',
    'Training Assessments',
    'Compliance Testing',
    'Skills Evaluations'
  ];

  const institutions = [
    'Universities & Colleges',
    'K-12 Schools',
    'Training Centers',
    'Corporate Organizations',
    'Government Agencies',
    'Certification Bodies'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: 'url(https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1200)'}}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                CBT Exam <span className="text-green-400">Platforms</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Advanced computer-based testing solutions for educational institutions, 
                training centers, and organizations. Secure, scalable, and feature-rich.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Request Demo
                </Link>
                <a
                  href="https://wa.me/2348123456789?text=Hello%20Polynovex,%20I%20need%20CBT%20platform%20information"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                >
                  Get Pricing
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="CBT Exam Platform"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Platform Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our CBT platform combines cutting-edge technology with educational expertise 
              to deliver a comprehensive testing solution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-green-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Versatile Exam Solutions</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our platform supports various types of examinations and assessments, 
                making it suitable for diverse educational and professional needs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {examTypes.map((type, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                    <FileText className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{type}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Capabilities</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-lg p-2">
                      <Clock className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Flexible Scheduling</h4>
                      <p className="text-sm text-gray-600">Schedule exams with custom time limits and availability windows</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-lg p-2">
                      <Award className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Instant Grading</h4>
                      <p className="text-sm text-gray-600">Automated scoring with immediate result delivery</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-lg p-2">
                      <BarChart3 className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Detailed Analytics</h4>
                      <p className="text-sm text-gray-600">Comprehensive performance insights and reporting</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Clients Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Who Benefits From Our Platform?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our CBT platform serves a wide range of educational institutions and 
              organizations across different sectors.
            </p>
            
            <div className="mt-8">
              <img
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Students Using CBT Platform"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {institutions.map((institution, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{institution}</h3>
                <p className="text-sm text-gray-600">
                  Tailored solutions for {institution.toLowerCase()} testing needs
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple Implementation Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get your CBT platform up and running quickly with our streamlined 
              implementation and training process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Consultation</h3>
              <p className="text-gray-600">
                Understand your testing requirements and customize the platform accordingly.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Setup & Config</h3>
              <p className="text-gray-600">
                Platform installation, configuration, and customization for your institution.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-800 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Training</h3>
              <p className="text-gray-600">
                Comprehensive training for administrators, instructors, and technical staff.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-800 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Go Live</h3>
              <p className="text-gray-600">
                Launch your CBT platform with ongoing support and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Modernize Your Testing Process
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to transform your examination process with our advanced CBT platform? 
            Contact us for a demo and see the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/2348123456789?text=Hello%20Polynovex,%20I%20want%20a%20CBT%20platform%20demo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Schedule Demo</span>
            </a>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <span>Get Detailed Quote</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CBTExamPlatforms;