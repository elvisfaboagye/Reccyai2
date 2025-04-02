
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { usePageTransition, useScrollReveal } from '@/utils/animations';
import { Button } from '@/components/ui/button';

const clientLogos = [
  { name: "Tech Retailer", industry: "E-commerce" },
  { name: "StreamFlix", industry: "Media" },
  { name: "TravelWise", industry: "Travel" },
  { name: "SecureBank", industry: "Finance" },
  { name: "HealthHub", industry: "Healthcare" },
  { name: "EduLearn", industry: "Education" }
];

const caseStudies = [
  {
    company: "TechRetail",
    title: "27% Increase in Conversion Rate",
    description: "TechRetail implemented Recombee's recommendation engine and saw a significant boost in conversions across their e-commerce platform.",
    stats: [
      { value: "27%", label: "Conversion Rate Increase" },
      { value: "35%", label: "Higher Customer Engagement" },
      { value: "42%", label: "Increase in Average Order Value" }
    ],
    logo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    person: "Sarah Johnson",
    role: "Chief Digital Officer"
  },
  {
    company: "StreamFlix",
    title: "45% Longer Watch Times",
    description: "StreamFlix's content recommendations powered by Recombee helped viewers discover new shows, resulting in significantly longer session times.",
    stats: [
      { value: "45%", label: "Longer Watch Times" },
      { value: "38%", label: "Subscription Retention" },
      { value: "52%", label: "More Content Discovery" }
    ],
    logo: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    person: "Michael Chen",
    role: "Head of Product"
  },
  {
    company: "TravelWise",
    title: "63% Higher Booking Completion",
    description: "By showing personalized travel recommendations, TravelWise saw dramatic improvements in booking completions and customer satisfaction.",
    stats: [
      { value: "63%", label: "Higher Booking Completion" },
      { value: "41%", label: "Increase in Destination Exploration" },
      { value: "29%", label: "Higher Customer Satisfaction" }
    ],
    logo: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    person: "Emma Rodriguez",
    role: "Director of Customer Experience"
  }
];

const Clients = () => {
  const isPageLoaded = usePageTransition();
  useScrollReveal();
  
  return (
    <div className={`transition-opacity duration-500 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center reveal-animation">
            <div className="text-sm font-medium inline-block px-4 py-2 bg-recombee-blue/10 rounded-full text-recombee-blue border border-recombee-blue/20 mb-4">
              Our Clients
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by <span className="text-recombee-blue">Industry Leaders</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Discover how businesses across various industries leverage Recombee's recommendation engine to transform their user experiences and drive growth.
            </p>
          </div>
        </div>
      </section>
      
      {/* Client Logos */}
      <section className="py-12 px-6 bg-recombee-light dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12 reveal-animation">Trusted by Companies Worldwide</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div key={index} className={`flex flex-col items-center reveal-animation stagger-${index % 6 + 1}`}>
                <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md mb-3">
                  <div className="text-recombee-blue font-bold text-xl">{client.name.substring(0, 2)}</div>
                </div>
                <div className="text-sm font-medium">{client.name}</div>
                <div className="text-xs text-gray-500">{client.industry}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Studies */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Customer <span className="text-recombee-blue">Success Stories</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              See how our clients have achieved remarkable results with Recombee's recommendation engine.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={index} 
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover-lift reveal-animation stagger-${index % 3 + 1}`}
              >
                <div className="bg-recombee-blue/10 px-6 py-4 border-b border-recombee-blue/20">
                  <h3 className="text-xl font-bold">{study.company}</h3>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-3">{study.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{study.description}</p>
                  
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {study.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-2xl font-bold text-recombee-blue">{stat.value}</div>
                        <div className="text-xs">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center pt-4 border-t">
                    <div className="flex-shrink-0 mr-3">
                      <img 
                        className="h-10 w-10 rounded-full object-cover"
                        src={study.logo}
                        alt={study.person} 
                      />
                    </div>
                    <div>
                      <div className="font-medium">{study.person}</div>
                      <div className="text-sm text-gray-500">{study.role}, {study.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-recombee-blue hover:bg-recombee-lightBlue text-white">
              View All Case Studies
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20 px-6 bg-recombee-blue text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <svg 
              className="w-16 h-16 text-white/30 mx-auto mb-6 animate-fade-in" 
              fill="currentColor" 
              viewBox="0 0 32 32"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            
            <p className="text-xl md:text-2xl font-medium mb-10 reveal-animation">
              "Implementing Recombee's recommendation engine changed how our customers discover products. The integration was smooth, and their team provided excellent support throughout the process."
            </p>
            
            <div className="flex items-center justify-center reveal-animation stagger-1">
              <div className="flex-shrink-0 mr-4">
                <img 
                  className="h-12 w-12 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="David Wilson" 
                />
              </div>
              <div className="text-left">
                <div className="font-semibold">David Wilson</div>
                <div className="text-recombee-lightBlue text-sm">CTO, Global Commerce</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 reveal-animation">Join Our Growing List of Success Stories</h2>
          <p className="text-lg mb-8 reveal-animation stagger-1">
            Start your journey with Recombee today and transform how your users discover your products and content.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 reveal-animation stagger-2">
            <Button className="bg-recombee-blue hover:bg-recombee-lightBlue text-white">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-recombee-blue text-recombee-blue hover:bg-recombee-blue/10">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Clients;
