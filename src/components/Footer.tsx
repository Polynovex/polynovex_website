import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-black text-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold font-myriad text-brand-black">
                      <img src="/images/logo1.png" alt="" style={{width:"100px", height:"50px"}} />
                      </Link>
            <p className="text-gray-300 font-arial mb-6">
              A multi-sector company providing innovative solutions across paint production, 
              software development, networking, CBT platforms, and electrical installations. 
              Registered in 2025 with a commitment to excellence and innovation.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/2348169881336"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-green-secondary hover:bg-brand-green p-3 rounded-full transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold font-myriad mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 font-arial hover:text-brand-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 font-arial hover:text-brand-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 font-arial hover:text-brand-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 font-arial hover:text-brand-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold font-myriad mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-green" />
                <span className="text-gray-300 font-arial">+2348134393554</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-green" />
                <span className="text-gray-300 font-arial">info@polynovexlimited.com <br />polynovex1@gmail.com</span>
                <span className="text-gray-300 font-arial"></span>
               
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-green mt-1" />
                <span className="text-gray-300 font-arial">
                 3 Oloabisi Street, Ojota<br />
                  Lagos, Nigeria
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 font-arial">
            © 2025 Polynovex Limited. All rights reserved. | Registered Company
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;