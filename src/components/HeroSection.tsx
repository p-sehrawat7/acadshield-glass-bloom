import { Button } from '@/components/ui/button';
import { ArrowRight, Users, TrendingUp, Brain, Shield } from 'lucide-react';

const MetricCard = ({ icon: Icon, value, label, delay }: { 
  icon: any, value: string, label: string, delay: string 
}) => (
  <div className={`glass glass-hover p-6 rounded-2xl animate-fade-up ${delay}`}>
    <div className="flex items-center space-x-4">
      <div className="p-3 bg-teal/10 rounded-xl">
        <Icon className="w-6 h-6 text-teal" />
      </div>
      <div>
        <div className="text-2xl font-display font-bold text-foreground">{value}</div>
        <div className="text-sm text-foreground-secondary">{label}</div>
      </div>
    </div>
  </div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sage/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange/20 rounded-full blur-3xl animate-float-delay"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-teal/20 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-up text-balance">
              Data whispers,{' '}
              <span className="text-teal">Mentors listen</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground-secondary mb-8 leading-relaxed animate-fade-up-delay-1 text-balance">
              AI-powered educational platform that transforms student data into personalized mentorship connections, 
              creating meaningful learning experiences that adapt to every individual's journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up-delay-2">
              <Button size="lg" className="glass glass-hover bg-teal text-white border-teal/20 hover:bg-teal-light px-8 py-6 text-lg">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="glass glass-hover border-foreground/20 text-foreground hover:bg-glass-white/10 px-8 py-6 text-lg"
              >
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-up-delay-3">
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-teal mb-1">10K+</div>
                <div className="text-sm text-foreground-secondary">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-orange mb-1">500+</div>
                <div className="text-sm text-foreground-secondary">Mentors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-sage-dark mb-1">95%</div>
                <div className="text-sm text-foreground-secondary">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-teal mb-1">24/7</div>
                <div className="text-sm text-foreground-secondary">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="relative">
            <div className="space-y-6">
              <MetricCard 
                icon={Users} 
                value="10,247" 
                label="Active Learners" 
                delay="animate-fade-up-delay-1"
              />
              <MetricCard 
                icon={TrendingUp} 
                value="94.3%" 
                label="Improvement Rate" 
                delay="animate-fade-up-delay-2"
              />
              <MetricCard 
                icon={Brain} 
                value="AI-Powered" 
                label="Smart Matching" 
                delay="animate-fade-up-delay-3"
              />
              <MetricCard 
                icon={Shield} 
                value="Secure" 
                label="Data Protection" 
                delay="animate-fade-up-delay-3"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;