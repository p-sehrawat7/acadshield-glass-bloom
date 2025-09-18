import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass backdrop-blur-glass' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-display font-bold text-foreground">
              AcadShield
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-foreground hover:text-teal transition-colors duration-300 font-medium">
                Features
              </a>
              <a href="#about" className="text-foreground hover:text-teal transition-colors duration-300 font-medium">
                About
              </a>
              <a href="#faq" className="text-foreground hover:text-teal transition-colors duration-300 font-medium">
                FAQ
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-foreground hover:text-teal hover:bg-glass-white/10">
              Sign In
            </Button>
            <Button className="glass glass-hover bg-teal text-white border-teal/20 hover:bg-teal-light">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-teal p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass backdrop-blur-glass border-t border-glass-white/20">
            <div className="px-4 py-6 space-y-4">
              <a href="#features" className="block text-foreground hover:text-teal transition-colors duration-300 font-medium">
                Features
              </a>
              <a href="#about" className="block text-foreground hover:text-teal transition-colors duration-300 font-medium">
                About
              </a>
              <a href="#faq" className="block text-foreground hover:text-teal transition-colors duration-300 font-medium">
                FAQ
              </a>
              <div className="pt-4 space-y-3">
                <Button variant="ghost" className="w-full justify-start text-foreground">
                  Sign In
                </Button>
                <Button className="w-full glass bg-teal text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;