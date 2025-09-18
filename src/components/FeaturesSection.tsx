import { Brain, Users, TrendingUp, Shield, Zap, Heart } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }: {
  icon: any;
  title: string;
  description: string;
  delay: string;
}) => (
  <div className={`glass glass-hover p-8 rounded-2xl h-full ${delay}`}>
    <div className="mb-6">
      <div className="w-14 h-14 bg-gradient-sage rounded-2xl flex items-center justify-center mb-4">
        <Icon className="w-7 h-7 text-teal-dark" />
      </div>
      <h3 className="text-xl font-display font-semibold text-foreground mb-3">
        {title}
      </h3>
      <p className="text-foreground-secondary leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "Our advanced algorithms analyze learning patterns, preferences, and goals to connect students with the perfect mentors for their unique journey.",
    },
    {
      icon: Users,
      title: "Personalized Mentorship",
      description: "Every mentoring relationship is tailored to individual needs, ensuring meaningful connections that drive real academic and personal growth.",
    },
    {
      icon: TrendingUp,
      title: "Progress Analytics",
      description: "Real-time insights and detailed analytics help track improvement, identify opportunities, and celebrate achievements along the way.",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Enterprise-grade security ensures all student data and interactions remain protected with the highest privacy standards.",
    },
    {
      icon: Zap,
      title: "Instant Connections",
      description: "Smart scheduling and communication tools facilitate seamless mentor-student interactions, making learning more accessible than ever.",
    },
    {
      icon: Heart,
      title: "Holistic Support",
      description: "Beyond academics, our platform nurtures emotional intelligence, confidence, and life skills for comprehensive student development.",
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up text-balance">
            Transforming Education Through 
            <span className="text-teal"> Intelligent Connections</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto animate-fade-up-delay-1 text-balance">
            AcadShield revolutionizes the learning experience by combining cutting-edge AI technology 
            with human expertise to create personalized educational journeys.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={`animate-fade-up-delay-${(index % 3) + 1}`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 lg:mt-24">
          <div className="glass glass-hover p-8 md:p-12 rounded-3xl inline-block animate-fade-up-delay-3">
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              Ready to Experience Personalized Learning?
            </h3>
            <p className="text-foreground-secondary mb-6 max-w-2xl">
              Join thousands of students who have transformed their educational journey with AcadShield's innovative mentorship platform.
            </p>
            <button className="glass glass-hover bg-teal text-white px-8 py-4 rounded-xl font-medium hover:bg-teal-light transition-all duration-300">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;