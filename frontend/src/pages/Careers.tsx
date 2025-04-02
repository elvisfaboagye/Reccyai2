
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { usePageTransition, useScrollReveal } from '@/utils/animations';

const positions = [
  {
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "Remote (EU, US)",
    type: "Full-time"
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "San Francisco, CA",
    type: "Full-time"
  },
  {
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote (Worldwide)",
    type: "Full-time"
  },
  {
    title: "Machine Learning Researcher",
    department: "R&D",
    location: "London, UK",
    type: "Full-time"
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "New York, NY",
    type: "Full-time"
  }
];

const Careers = () => {
  const isPageLoaded = usePageTransition();
  useScrollReveal();
  
  useEffect(() => {
    document.title = "Careers | Reccy AI";
  }, []);
  
  return (
    <div className={`transition-opacity duration-500 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-recombee-light to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center reveal-animation">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our <span className="text-recombee-blue">Mission</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              We're building the future of personalized recommendations. Join our team of passionate innovators and help shape the next generation of AI-powered experiences.
            </p>
            <Button className="bg-recombee-blue hover:bg-recombee-lightBlue text-white">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
            <h2 className="text-3xl font-bold mb-6">
              Our <span className="text-recombee-blue">Values</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              These core principles guide how we work together and build our products.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 reveal-animation stagger-1">
            {[
              {
                title: "Innovation First",
                description: "We push boundaries and embrace new ideas to solve complex problems."
              },
              {
                title: "Customer Obsession",
                description: "We put our customers at the center of everything we do."
              },
              {
                title: "Diverse Perspectives",
                description: "We value different backgrounds and viewpoints to build better products."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Open Positions Section */}
      <section className="py-20 px-6 bg-recombee-light dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
            <h2 className="text-3xl font-bold mb-6">
              Open <span className="text-recombee-blue">Positions</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Join our team and help build the future of personalized recommendations.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto reveal-animation stagger-1">
            {positions.map((position, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-4 hover:shadow-lg transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
              >
                <div>
                  <h3 className="text-xl font-bold text-recombee-blue mb-2">{position.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
                    <span className="text-sm bg-recombee-blue/10 text-recombee-blue px-3 py-1 rounded-full">
                      {position.department}
                    </span>
                    <span className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full">
                      {position.location}
                    </span>
                    <span className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full">
                      {position.type}
                    </span>
                  </div>
                </div>
                <Button className="bg-recombee-blue hover:bg-recombee-lightBlue text-white whitespace-nowrap">
                  Apply Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
            <h2 className="text-3xl font-bold mb-6">
              Why Work at <span className="text-recombee-blue">Reccy AI</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We offer competitive benefits and a supportive work environment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 reveal-animation stagger-1">
            {[
              {
                title: "Flexible Work",
                description: "Work from anywhere with flexible hours."
              },
              {
                title: "Competitive Salary",
                description: "We offer competitive compensation packages."
              },
              {
                title: "Learning Budget",
                description: "Annual budget for courses and conferences."
              },
              {
                title: "Health Benefits",
                description: "Comprehensive health and wellness coverage."
              },
              {
                title: "Team Events",
                description: "Regular team retreats and social events."
              },
              {
                title: "Equity Options",
                description: "Be an owner with stock option plans."
              },
              {
                title: "Family Support",
                description: "Generous parental leave and childcare benefits."
              },
              {
                title: "Career Growth",
                description: "Clear paths for advancement and development."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Careers;
