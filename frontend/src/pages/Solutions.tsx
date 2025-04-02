import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { usePageTransition, useScrollReveal } from '@/utils/animations';
import { ChevronRight, Zap, Target, BarChart, RefreshCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Solutions = () => {
  const isPageLoaded = usePageTransition();
  useScrollReveal();
  
  return (
    <div className={`transition-opacity duration-500 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center reveal-animation">
            <div className="text-sm font-medium inline-block px-4 py-2 bg-reccy-blue/10 rounded-full text-reccy-blue border border-reccy-blue/20 mb-4">
              Solutions
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-reccy-blue">Smart</span> Recommendation Solutions
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Our AI-powered platform delivers personalized recommendations across industries, helping businesses increase engagement, conversions, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>
      
      {/* Solutions Section */}
      <section className="py-16 px-6 bg-reccy-light dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center reveal-animation">
            <div>
              <div className="mb-4 bg-reccy-blue/10 p-3 rounded-lg inline-block">
                <Target className="w-6 h-6 text-reccy-blue" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Personalized Recommendations</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our AI engine analyzes user behavior in real-time to deliver highly relevant product, content, and service recommendations that match individual preferences.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-reccy-blue mt-0.5 flex-shrink-0" />
                  <span className="ml-2">Item-to-item recommendations</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-reccy-blue mt-0.5 flex-shrink-0" />
                  <span className="ml-2">User-based personalization</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-reccy-blue mt-0.5 flex-shrink-0" />
                  <span className="ml-2">Context-aware suggestions</span>
                </li>
              </ul>
              <Button className="bg-reccy-blue hover:bg-reccy-lightBlue text-white">
                Learn More
              </Button>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl reveal-animation stagger-1">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                alt="Recommendation Engine Dashboard" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Advanced Features Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center reveal-animation">
            <div className="order-2 md:order-1 relative rounded-xl overflow-hidden shadow-xl reveal-animation stagger-1">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                alt="Real-time Analytics" 
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="mb-4 bg-reccy-blue/10 p-3 rounded-lg inline-block">
                <BarChart className="w-6 h-6 text-reccy-blue" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Advanced Analytics</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Gain deep insights into user behavior and recommendation performance with comprehensive analytics that help optimize your business decisions.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-reccy-blue mt-0.5 flex-shrink-0" />
                  <span className="ml-2">Performance tracking</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-reccy-blue mt-0.5 flex-shrink-0" />
                  <span className="ml-2">User segmentation</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-reccy-blue mt-0.5 flex-shrink-0" />
                  <span className="ml-2">A/B testing capabilities</span>
                </li>
              </ul>
              <Button className="bg-reccy-blue hover:bg-reccy-lightBlue text-white">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Real-time Section */}
      <section className="py-16 px-6 bg-reccy-light dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center reveal-animation">
            <div>
              <div className="mb-4 bg-reccy-blue/10 p-3 rounded-lg inline-block">
                <Zap className="w-6 h-6 text-reccy-blue" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Real-time Processing</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Process user interactions instantly to deliver immediate and relevant recommendations as behaviors change, creating dynamic user experiences.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-reccy-blue mt-0.5 flex-shrink-0" />
                  <span className="ml-2">Low latency responses</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-reccy-blue mt-0.5 flex-shrink-0" />
                  <span className="ml-2">Instant feedback incorporation</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-reccy-blue mt-0.5 flex-shrink-0" />
                  <span className="ml-2">Behavioral pattern recognition</span>
                </li>
              </ul>
              <Button className="bg-reccy-blue hover:bg-reccy-lightBlue text-white">
                Learn More
              </Button>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl reveal-animation stagger-1">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                alt="Real-time Processing" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 bg-reccy-blue text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 reveal-animation">Ready to Transform Your User Experience?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 reveal-animation stagger-1">
            Join thousands of businesses that use Recombee to deliver personalized recommendations and increase user engagement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 reveal-animation stagger-2">
            <Button className="bg-white text-reccy-blue hover:bg-gray-100">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Request Demo
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Solutions;
