
import { useIntersectionObserver, useScrollReveal } from '@/utils/animations';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const industries = [
  {
    title: "E-commerce",
    description: "Boost your conversion rates and average order value with personalized product recommendations that highlight items your customers are most likely to purchase.",
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    path: "/solutions/ecommerce"
  },
  {
    title: "Media & Entertainment",
    description: "Keep viewers engaged with content recommendations that match their interests, increasing watch time and subscription retention.",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    path: "/solutions/media-entertainment"
  },
  {
    title: "Travel & Hospitality",
    description: "Help travelers discover destinations, accommodations, and experiences that perfectly match their preferences and past bookings.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    path: "/solutions/travel"
  },
  {
    title: "Finance & Banking",
    description: "Recommend financial products and services tailored to each customer's financial situation and goals for improved customer satisfaction.",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    path: "/solutions/finance"
  },
];

const UseCases = () => {
  useScrollReveal();
  
  return (
    <section id="clients" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
          <div className="text-sm font-medium inline-block px-4 py-2 bg-recombee-blue/10 rounded-full text-recombee-blue border border-recombee-blue/20 mb-4">
            Industry Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-recombee-blue">Personalized</span> Recommendations for Every Industry
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            See how our recommendation engine helps businesses across different industries deliver exceptional user experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className={`reveal-animation stagger-${index % 4 + 1}`}
            >
              <div className="group relative overflow-hidden rounded-xl shadow-lg mb-6 hover-lift">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img 
                  src={industry.image} 
                  alt={industry.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-recombee-lightBlue transition-colors">
                    {industry.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {industry.description}
              </p>
              <Button 
                variant="link" 
                className="text-recombee-blue hover:text-recombee-lightBlue px-0 flex items-center gap-1 group"
                asChild
              >
                <Link to={industry.path}>
                  Learn more 
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
