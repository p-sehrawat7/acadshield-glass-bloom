import { CheckCircle, Users, Brain, Trophy } from 'lucide-react';

const ProcessStep = ({ number, title, description, delay }: {
  number: string;
  title: string;
  description: string;
  delay: string;
}) => (
  <div className={`glass glass-hover p-8 rounded-2xl text-center ${delay}`}>
    <div className="w-16 h-16 bg-gradient-sage rounded-full flex items-center justify-center mx-auto mb-6">
      <span className="text-2xl font-display font-bold text-teal-dark">{number}</span>
    </div>
    <h3 className="text-xl font-display font-semibold text-foreground mb-4">
      {title}
    </h3>
    <p className="text-foreground-secondary leading-relaxed">
      {description}
    </p>
  </div>
);

const AboutSection = () => {
  const processSteps = [
    {
      number: "1",
      title: "Data Analysis",
      description: "Our AI analyzes your learning patterns, preferences, and academic goals to create a comprehensive student profile.",
    },
    {
      number: "2",
      title: "Smart Matching",
      description: "Advanced algorithms match you with mentors who have the expertise and teaching style that aligns with your needs.",
    },
    {
      number: "3",
      title: "Personalized Sessions",
      description: "Engage in tailored mentoring sessions designed to address your specific challenges and accelerate your growth.",
    },
    {
      number: "4",
      title: "Continuous Growth",
      description: "Track your progress, receive feedback, and adapt your learning path as you achieve your educational milestones.",
    },
  ];

  const benefits = [
    "Improved academic performance by an average of 40%",
    "Increased student confidence and motivation",
    "Better retention rates and learning outcomes",
    "Reduced academic stress and anxiety",
    "Enhanced critical thinking and problem-solving skills",
    "Stronger mentor-student relationships"
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up text-balance">
            How AcadShield 
            <span className="text-orange"> Works</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto animate-fade-up-delay-1 text-balance">
            Our innovative approach combines artificial intelligence with human expertise to create 
            meaningful educational connections that drive real results.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              delay={`animate-fade-up-delay-${(index % 4) + 1}`}
            />
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Proven Results That
              <span className="text-teal"> Matter</span>
            </h3>
            <p className="text-lg text-foreground-secondary mb-8 leading-relaxed">
              AcadShield has helped thousands of students achieve their academic goals through 
              personalized mentorship and data-driven insights.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal flex-shrink-0 mt-0.5" />
                  <span className="text-foreground-secondary">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-fade-up-delay-2">
            <div className="glass glass-hover p-6 rounded-2xl text-center">
              <Users className="w-12 h-12 text-teal mx-auto mb-4" />
              <div className="text-3xl font-display font-bold text-foreground mb-2">10,000+</div>
              <div className="text-sm text-foreground-secondary">Students Served</div>
            </div>
            
            <div className="glass glass-hover p-6 rounded-2xl text-center">
              <Brain className="w-12 h-12 text-orange mx-auto mb-4" />
              <div className="text-3xl font-display font-bold text-foreground mb-2">500+</div>
              <div className="text-sm text-foreground-secondary">Expert Mentors</div>
            </div>
            
            <div className="glass glass-hover p-6 rounded-2xl text-center">
              <Trophy className="w-12 h-12 text-sage-dark mx-auto mb-4" />
              <div className="text-3xl font-display font-bold text-foreground mb-2">94%</div>
              <div className="text-sm text-foreground-secondary">Success Rate</div>
            </div>
            
            <div className="glass glass-hover p-6 rounded-2xl text-center">
              <CheckCircle className="w-12 h-12 text-teal mx-auto mb-4" />
              <div className="text-3xl font-display font-bold text-foreground mb-2">4.9/5</div>
              <div className="text-sm text-foreground-secondary">Student Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;