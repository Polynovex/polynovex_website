import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const services = [
    { name: 'Paint Production', path: '/services/paint-production' },
    { name: 'Software Development', path: '/services/software-development' },
    { name: 'Computer Networking', path: '/services/computer-networking' },
    { name: 'CBT Exam Platforms', path: '/services/cbt-exam-platforms' },
    { name: 'Electrical Installations', path: '/services/electrical-installations' },
  ];

  return (
    <header className="bg-brand-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold font-myriad text-brand-black">
            <img src="/logo.png" alt="" style={{width:"100px", height:"50px"}} />
              {/* Polynovex<span className="text-brand-green"> Limited</span> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium font-arial transition-colors ${
                isActive('/') 
                  ? 'text-brand-black bg-gray-50' 
                  : 'text-gray-700 hover:text-brand-black hover:bg-gray-50'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium font-arial transition-colors ${
                isActive('/about') 
                  ? 'text-brand-black bg-gray-50' 
                  : 'text-gray-700 hover:text-brand-black hover:bg-gray-50'
              }`}
            >
              About
            </Link>
            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium font-arial text-gray-700 hover:text-brand-black hover:bg-gray-50 transition-colors"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div
                  className="absolute left-0 mt-2 w-64 bg-brand-white rounded-md shadow-lg py-2 z-10"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-2 text-sm font-arial text-gray-700 hover:bg-gray-50 hover:text-brand-black transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/gallery"
              className={`px-3 py-2 rounded-md text-sm font-medium font-arial transition-colors ${
                isActive('/gallery') 
                  ? 'text-brand-black bg-gray-50' 
                  : 'text-gray-700 hover:text-brand-black hover:bg-gray-50'
              }`}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium font-arial transition-colors ${
                isActive('/contact') 
                  ? 'text-brand-black bg-gray-50' 
                  : 'text-gray-700 hover:text-brand-black hover:bg-gray-50'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-brand-black transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium font-arial text-gray-700 hover:text-brand-black hover:bg-gray-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md text-base font-medium font-arial text-gray-700 hover:text-brand-black hover:bg-gray-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="px-3 py-2 text-base font-medium font-arial text-gray-900">Services</div>
              {services.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className="block pl-6 pr-3 py-2 rounded-md text-sm font-arial text-gray-700 hover:text-brand-black hover:bg-gray-100 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
              <Link
                to="/gallery"
                className="block px-3 py-2 rounded-md text-base font-medium font-arial text-gray-700 hover:text-brand-black hover:bg-gray-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium font-arial text-gray-700 hover:text-brand-black hover:bg-gray-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;