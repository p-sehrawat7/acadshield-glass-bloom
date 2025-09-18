import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background-secondary border-t border-glass-white/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-display font-bold text-foreground mb-4">
              AcadShield
            </div>
            <p className="text-foreground-secondary mb-6 leading-relaxed">
              Transforming education through AI-powered mentorship connections that help students achieve their full potential.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground-secondary hover:text-teal transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground-secondary hover:text-teal transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground-secondary hover:text-teal transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground-secondary hover:text-teal transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-foreground-secondary hover:text-teal transition-colors duration-300">Features</a></li>
              <li><a href="#about" className="text-foreground-secondary hover:text-teal transition-colors duration-300">How It Works</a></li>
              <li><a href="#" className="text-foreground-secondary hover:text-teal transition-colors duration-300">Pricing</a></li>
              <li><a href="#" className="text-foreground-secondary hover:text-teal transition-colors duration-300">Success Stories</a></li>
              <li><a href="#" className="text-foreground-secondary hover:text-teal transition-colors duration-300">Resources</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground-secondary hover:text-teal transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="text-foreground-secondary hover:text-teal transition-colors duration-300">Contact Us</a></li>
              <li><a href="#" className="text-foreground-secondary hover:text-teal transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-foreground-secondary hover:text-teal transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-foreground-secondary hover:text-teal transition-colors duration-300">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-foreground-secondary">
                <Mail className="w-4 h-4" />
                <span>hello@acadshield.com</span>
              </div>
              <div className="flex items-center space-x-3 text-foreground-secondary">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-foreground-secondary">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-glass-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-foreground-secondary text-sm mb-4 md:mb-0">
            © 2024 AcadShield. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-foreground-secondary hover:text-teal transition-colors duration-300">
              Privacy
            </a>
            <a href="#" className="text-foreground-secondary hover:text-teal transition-colors duration-300">
              Terms
            </a>
            <a href="#" className="text-foreground-secondary hover:text-teal transition-colors duration-300">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;