import { Menu, Phone, MessageCircle, X, ChevronDown } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [callDropdownOpen, setCallDropdownOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'what-is-ddjay', label: 'What is DDJAY', path: '/what-is-ddjay' },
    { id: 'live-projects', label: 'Live Projects', path: '/live-projects' },
    { id: 'upcoming-projects', label: 'Upcoming', path: '/upcoming-projects' },
    { id: 'closed-projects', label: 'Closed Projects', path: '/closed-projects' },
    { id: 'submit-requirement', label: 'Submit Requirement', path: '/submit-requirement' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/918799704639?text=Hi, I want to know about DDJAY projects', '_blank');
  };

  const partners = [
    { name: 'Property Advisor1', number: '+918799704639', label: 'Property Advisor' },
    { name: 'Property Advisor2', number: '+918178710175', label: 'Property Advisor' },
  ];

  const handleCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center lg:flex-1 lg:justify-start">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-14 h-14">
                <img
                  src="./assets/logo/ddlogo.png"
                  alt="DDJAY Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 24 24' fill='none' stroke='%233b82f6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'%3E%3C/path%3E%3Cpolyline points='9 22 9 12 15 12 15 22'%3E%3C/polyline%3E%3C/svg%3E";
                  }}
                />
              </div>
              
              <span className="text-xl font-bold text-gray-900 hidden sm:block">
                DDJAY Portal
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 items-center justify-center">
            <div className="flex items-center justify-between w-full max-w-4xl">
              {menuItems.map(item => (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`text-sm font-medium whitespace-nowrap transition-colors hover:text-blue-600 px-3 py-1 ${
                    isActive(item.path) ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-3 flex-1 justify-end">
            <div className="h-6 w-px bg-gray-300 mx-2"></div>
            
            {/* Call Dropdown Button */}
            <div className="relative">
              <Button
                onClick={() => setCallDropdownOpen(!callDropdownOpen)}
                variant="outline"
                size="sm"
                className="gap-2 whitespace-nowrap pr-3"
              >
                <Phone className="w-4 h-4" />
                Call Now
                <ChevronDown className={`w-4 h-4 transition-transform ${callDropdownOpen ? 'rotate-180' : ''}`} />
              </Button>
              
              {/* Dropdown Menu */}
              {callDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="py-1">
                    <div className="px-3 py-2 text-xs text-gray-500 border-b border-gray-100">
                      Choose a Partner to Call:
                    </div>
                    {partners.map((partner, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          handleCall(partner.number);
                          setCallDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center gap-2"
                      >
                        <Phone className="w-3 h-3" />
                        <div>
                          <div className="font-medium">{partner.label}</div>
                          <div className="text-xs text-gray-500">{partner.number}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* WhatsApp Button */}
            <Button
              onClick={handleWhatsApp}
              size="sm"
              className="gap-2 bg-green-600 hover:bg-green-700 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2">
              {/* Mobile Call Dropdown */}
              <div className="relative">
                <Button
                  onClick={() => setCallDropdownOpen(!callDropdownOpen)}
                  variant="outline"
                  size="sm"
                  className="gap-1 p-2 h-9"
                >
                  <Phone className="w-4 h-4" />
                </Button>
                
                {/* Mobile Dropdown */}
                {callDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="py-1">
                      <div className="px-3 py-2 text-xs text-gray-500 border-b border-gray-100">
                        Choose a Partner:
                      </div>
                      {partners.map((partner, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            handleCall(partner.number);
                            setCallDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center gap-2"
                        >
                          <Phone className="w-3 h-3" />
                          <div>
                            <div className="font-medium">{partner.label}</div>
                            <div className="text-xs text-gray-500">{partner.number}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <Button
                onClick={handleWhatsApp}
                size="sm"
                className="gap-1 p-2 h-9 bg-green-600 hover:bg-green-700"
              >
                <MessageCircle className="w-4 h-4" />
              </Button>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col gap-2">
              {menuItems.map(item => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-center px-4 py-3 rounded-lg transition-all ${
                    isActive(item.path)
                      ? 'bg-blue-50 text-blue-600 font-medium border border-blue-100'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              ))}
              
              {/* Mobile Call/WhatsApp Buttons */}
              <div className="flex flex-col sm:hidden gap-2 px-4 pt-4 border-t mt-2">
                {/* Mobile Call Partners */}
                <div className="space-y-2">
                  <div className="text-xs text-gray-500 mb-1">Call a Partner:</div>
                  {partners.map((partner, index) => (
                    <Button
                      key={index}
                      onClick={() => handleCall(partner.number)}
                      variant="outline"
                      className="gap-2 justify-center text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      {partner.label}
                    </Button>
                  ))}
                </div>
                
                <Button
                  onClick={handleWhatsApp}
                  className="gap-2 bg-green-600 hover:bg-green-700 justify-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}