import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Domov', path: '/' },
    { name: 'O nas', path: '/about' },
    { name: 'Projekti', path: '/projects' },
    { name: 'Storitve', path: '/services' }
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="glass border border-white/10 rounded-full px-6 sm:px-8 lg:px-10 shadow-lg">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/7d1e0164-f6a7-439a-8554-2ba04f454964.png" 
              alt="Paradoks logo" 
              className="h-8 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-galactic-purple ${
                  location.pathname === item.path 
                    ? 'text-galactic-purple border-b border-galactic-purple' 
                    : 'text-white/80'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button className="bg-galactic-purple hover:bg-galactic-purple/90 text-white rounded-full px-6 py-2 font-medium transition-all duration-300">
                Stopi v stik
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-galactic-purple transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-all duration-300 hover:text-galactic-purple ${
                    location.pathname === item.path 
                      ? 'text-galactic-purple' 
                      : 'text-white/80'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block mx-3 mt-4"
              >
                <Button className="w-full bg-galactic-purple hover:bg-galactic-purple/90 text-white rounded-full px-6 py-2 font-medium transition-all duration-300">
                  Stopi v stik
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
