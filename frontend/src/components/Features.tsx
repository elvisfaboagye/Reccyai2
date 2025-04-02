
import { useIntersectionObserver } from '@/utils/animations';
import { Layers, Target, BarChart, Zap, Shield, RefreshCcw } from 'lucide-react';

const features = [
  {
    icon: <Target className="w-6 h-6 text-recombee-blue" />,
    title: "Personalized Recommendations",
    description: "Deliver tailored product and content recommendations to each user based on their unique preferences and behavior."
  },
  {
    icon: <BarChart className="w-6 h-6 text-recombee-blue" />,
    title: "Advanced Analytics",
    description: "Gain deep insights into user behavior and recommendation performance with comprehensive analytics and reporting."
  },
  {
    icon: <Zap className="w-6 h-6 text-recombee-blue" />,
    title: "Real-time Processing",
    description: "Process user interactions in real-time to deliver immediate and relevant recommendations as behaviors change."
  },
  {
    icon: <Shield className="w-6 h-6 text-recombee-blue" />,
    title: "AI-Powered Security",
    description: "Protect user data and maintain privacy with our secure, GDPR-compliant recommendation engine."
  },
  {
    icon: <RefreshCcw className="w-6 h-6 text-recombee-blue" />,
    title: "Continuous Learning",
    description: "Our AI models continuously learn and improve based on user interactions, ensuring increasingly accurate recommendations."
  },
  {
    icon: <Layers className="w-6 h-6 text-recombee-blue" />,
    title: "Seamless Integration",
    description: "Easily integrate with your existing systems through our RESTful API, SDKs, and pre-built plugins."
  }
];

const Features = () => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1
  });
  
  return (
    <section
      id="solutions"
      ref={ref}
      className="py-24 px-6 bg-recombee-light dark:bg-gray-900"
    >
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
          <div className="text-sm font-medium inline-block px-4 py-2 bg-recombee-blue/10 rounded-full text-recombee-blue border border-recombee-blue/20 mb-4">
            Powerful Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Everything You Need for <span className="text-recombee-blue">Intelligent Recommendations</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our comprehensive suite of features provides everything you need to create personalized user experiences that drive engagement and growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md hover-lift reveal-animation stagger-${index % 5 + 1} border border-gray-100 dark:border-gray-700`}
            >
              <div className="bg-recombee-blue/10 p-3 rounded-lg inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
