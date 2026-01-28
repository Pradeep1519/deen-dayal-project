import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle, AlertCircle } from 'lucide-react';

export function Footer() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/918799704639?text=Hi, I want to know about DDJAY projects', '_blank');
  };

  // Function to scroll to top when any link is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Disclaimer Banner */}
      <div className="bg-yellow-50 border-t-2 border-yellow-400 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-yellow-800">
              <strong>Important Disclaimer:</strong> An independent platform offering comprehensive information on DDJAY (Deen Dayal Jan Awas Yojana) - Haryana's affordable housing scheme. We connect buyers with RERA-registered projects.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* About Section with Logo */}
          <div>
            <div className="flex items-start gap-3 mb-4">
              <div className="w-14 h-14">
                <img
                  src="./assets/logo/ddlogo.png"
                  alt="DDJAY Logo"
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'%3E%3C/path%3E%3Cpolyline points='9 22 9 12 15 12 15 22'%3E%3C/polyline%3E%3C/svg%3E";
                  }}
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-white text-base">DDJAY Portal</span>
                  <span className="text-xs bg-blue-600 px-2 py-0.5 rounded-full">Verified</span>
                </div>
                <p className="text-xs text-gray-400 mb-2">Under Deen Dayal Jan Awas Yojana</p>
              </div>
            </div>
            <p className="text-xm mb-4">
              Your trusted independent platform for verified DDJAY project information and comparison.
            </p>
            <button
              onClick={handleWhatsApp}
              className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-700 flex items-center justify-center transition-colors active:scale-95"
              aria-label="Contact on WhatsApp"
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link 
                  to="/" 
                  onClick={scrollToTop}
                  className="hover:text-blue-400 transition-colors block py-1.5 active:text-blue-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/what-is-ddjay" 
                  onClick={scrollToTop}
                  className="hover:text-blue-400 transition-colors block py-1.5 active:text-blue-300"
                >
                  What is DDJAY
                </Link>
              </li>
              <li>
                <Link 
                  to="/live-projects" 
                  onClick={scrollToTop}
                  className="hover:text-blue-400 transition-colors block py-1.5 active:text-blue-300"
                >
                  Live Projects
                </Link>
              </li>
              <li>
                <Link 
                  to="/upcoming-projects" 
                  onClick={scrollToTop}
                  className="hover:text-blue-400 transition-colors block py-1.5 active:text-blue-300"
                >
                  Upcoming Projects
                </Link>
              </li>
              <li>
                <Link 
                  to="/closed-projects" 
                  onClick={scrollToTop}
                  className="hover:text-blue-400 transition-colors block py-1.5 active:text-blue-300"
                >
                  Closed Projects
                </Link>
              </li>
              <li>
                <Link 
                  to="/submit-requirement" 
                  onClick={scrollToTop}
                  className="hover:text-blue-400 transition-colors block py-1.5 active:text-blue-300"
                >
                  Submit Requirement
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link 
                  to="/terms-conditions" 
                  onClick={scrollToTop}
                  className="hover:text-blue-400 transition-colors block py-1.5 active:text-blue-300"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy-policy" 
                  onClick={scrollToTop}
                  className="hover:text-blue-400 transition-colors block py-1.5 active:text-blue-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  onClick={scrollToTop}
                  className="hover:text-blue-400 transition-colors block py-1.5 active:text-blue-300"
                >
                  About Platform
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  onClick={scrollToTop}
                  className="hover:text-blue-400 transition-colors block py-1.5 active:text-blue-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="tel:+918799704639" 
                    className="hover:text-blue-400 transition-colors block py-1.5 active:text-blue-300"
                  >
                    +91 87997 04639
                  </a>
                  <p className="text-xs text-gray-400 mt-1">Mon - Sat, 9 AM - 7 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <a 
                  href="mailto:support@ddjayprojects.org" 
                  className="hover:text-blue-400 transition-colors block py-1.5 active:text-blue-300"
                >
                  support@ddjayprojects.org
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="block py-2">Gurugram, Haryana, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - ONLY copyright text centered */}
        <div className="border-t border-gray-800 mt-8 pt-4">
          <div className="text-center">
            <p className="text-sm text-gray-400">
              @SHOPIFARM © {new Date().getFullYear()} DDJAY Portal. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}