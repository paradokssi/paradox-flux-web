import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, Instagram, Facebook, Linkedin } from 'lucide-react';

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
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:text-galactic-purple">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full bg-black/95 backdrop-blur-xl border-l border-white/10 flex flex-col">
                <div className="flex flex-col justify-between h-full pt-12">
                  <nav className="space-y-6">
                    {navItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`block text-2xl font-medium transition-all duration-300 hover:text-galactic-purple ${
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
                      className="block pt-4"
                    >
                      <Button className="w-full bg-galactic-purple hover:bg-galactic-purple/90 text-white rounded-full px-6 py-3 font-medium text-lg transition-all duration-300">
                        Stopi v stik
                      </Button>
                    </Link>
                  </nav>
                  
                  <div className="pb-8">
                    <div className="flex items-center justify-center gap-6">
                      <a 
                        href="https://instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-galactic-purple transition-colors"
                      >
                        <Instagram className="h-6 w-6" />
                      </a>
                      <a 
                        href="https://facebook.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-galactic-purple transition-colors"
                      >
                        <Facebook className="h-6 w-6" />
                      </a>
                      <a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-galactic-purple transition-colors"
                      >
                        <Linkedin className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navigation;
