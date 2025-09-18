import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Handle form submission here
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange/10 rounded-full blur-3xl animate-float-delay"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <div className="glass glass-hover p-12 md:p-16 rounded-3xl animate-fade-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 text-balance">
              Transform Your Learning Journey
              <span className="text-teal"> Today</span>
            </h2>
            
            <p className="text-xl text-foreground-secondary mb-8 max-w-2xl mx-auto leading-relaxed text-balance">
              Join thousands of students who have discovered their potential through personalized mentorship 
              and AI-powered learning insights.
            </p>

            {/* Email Signup Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8 animate-fade-up-delay-1">
              <div className="flex gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 glass border border-glass-white/20 rounded-xl text-foreground placeholder-foreground-secondary focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="glass glass-hover bg-teal text-white px-8 py-4 rounded-xl hover:bg-teal-light transition-all duration-300"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <>
                      Start Free
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </div>
            </form>

            {/* Benefits List */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-foreground-secondary animate-fade-up-delay-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal" />
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal" />
                <span>Cancel anytime</span>
              </div>
            </div>

            {/* Alternative CTA */}
            <div className="mt-8 pt-8 border-t border-glass-white/20 animate-fade-up-delay-3">
              <p className="text-foreground-secondary mb-4">
                Want to learn more? Schedule a personalized demo
              </p>
              <Button 
                variant="outline" 
                className="glass glass-hover border-foreground/20 text-foreground hover:bg-glass-white/10"
              >
                <Mail className="w-4 h-4 mr-2" />
                Book a Demo
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-up-delay-2">
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-teal mb-2">500+</div>
              <div className="text-sm text-foreground-secondary">Universities Trust Us</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-orange mb-2">10K+</div>
              <div className="text-sm text-foreground-secondary">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-sage-dark mb-2">95%</div>
              <div className="text-sm text-foreground-secondary">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-teal mb-2">24/7</div>
              <div className="text-sm text-foreground-secondary">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;