
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { usePageTransition, useScrollReveal } from '@/utils/animations';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, Phone } from 'lucide-react';

const teamMembers = [
  {
    name: "Alex Morgan",
    role: "CEO & Co-Founder",
    bio: "Alex has over 15 years of experience in AI and machine learning, with a focus on recommendation systems.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80"
  },
  {
    name: "Elena Chen",
    role: "CTO & Co-Founder",
    bio: "With a PhD in Computer Science, Elena leads our technical vision and engineering team.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=388&q=80"
  },
  {
    name: "Marcus Johnson",
    role: "Head of Product",
    bio: "Marcus combines technical expertise with business acumen to develop our product roadmap.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
  },
  {
    name: "Sophia Garcia",
    role: "VP of Customer Success",
    bio: "Sophia ensures our clients achieve their business goals through our recommendation platform.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=461&q=80"
  }
];

const Company = () => {
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
              Our Company
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Powering <span className="text-recombee-blue">Personalization</span> Worldwide
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              We're on a mission to transform how businesses connect with their users through AI-powered personalized recommendations.
            </p>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 px-6 bg-recombee-light dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-xl overflow-hidden shadow-xl reveal-animation">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80" 
                alt="Recombee Team" 
                className="w-full h-auto"
              />
            </div>
            <div className="reveal-animation stagger-1">
              <div className="text-sm font-medium inline-block px-4 py-2 bg-recombee-blue/10 rounded-full text-recombee-blue border border-recombee-blue/20 mb-4">
                Our Story
              </div>
              <h2 className="text-3xl font-bold mb-6">Building the Future of Recommendations</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Founded in 2015, Recombee started with a simple idea: make personalized recommendations accessible to businesses of all sizes.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our team of AI and machine learning experts developed a cutting-edge recommendation engine that continuously learns and adapts to user behavior in real-time.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Today, we power recommendations for thousands of businesses worldwide, processing billions of interactions and helping companies increase engagement, conversion, and retention.
              </p>
              <Button className="bg-recombee-blue hover:bg-recombee-lightBlue text-white">
                Learn More About Our Journey
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-recombee-blue">Mission</span> & Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We're driven by a commitment to innovation and customer success in everything we do.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg reveal-animation stagger-1">
              <h3 className="text-xl font-bold mb-4 text-recombee-blue">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We continuously push the boundaries of what's possible in recommendation technology, investing heavily in R&D to stay at the cutting edge.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg reveal-animation stagger-2">
              <h3 className="text-xl font-bold mb-4 text-recombee-blue">Customer Success</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We measure our success by our customers' success, providing exceptional support and ensuring they achieve their business goals.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg reveal-animation stagger-3">
              <h3 className="text-xl font-bold mb-4 text-recombee-blue">Transparency</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We believe in being open about how our technology works, providing insights into our algorithms and clear pricing.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 px-6 bg-recombee-light dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet Our <span className="text-recombee-blue">Team</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our diverse team of experts is passionate about creating the best recommendation technology in the world.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover-lift reveal-animation stagger-${index + 1}`}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <div className="text-recombee-blue text-sm mb-3">{member.role}</div>
                  <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 reveal-animation">
            <Button className="bg-recombee-blue hover:bg-recombee-lightBlue text-white">
              Join Our Team
            </Button>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="reveal-animation">
              <div className="text-sm font-medium inline-block px-4 py-2 bg-recombee-blue/10 rounded-full text-recombee-blue border border-recombee-blue/20 mb-4">
                Get in Touch
              </div>
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Have questions about our recommendation engine or want to learn more about how we can help your business? Get in touch with our team.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-recombee-blue/10 p-3 rounded-lg mr-4">
                    <MapPin className="w-5 h-5 text-recombee-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Headquarters</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      123 Innovation Drive<br />
                      San Francisco, CA 94107<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-recombee-blue/10 p-3 rounded-lg mr-4">
                    <Mail className="w-5 h-5 text-recombee-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      info@recombee.com<br />
                      support@recombee.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-recombee-blue/10 p-3 rounded-lg mr-4">
                    <Phone className="w-5 h-5 text-recombee-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      +1 (415) 555-0123<br />
                      Monday-Friday, 9am-5pm PT
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg reveal-animation stagger-1">
              <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-recombee-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-recombee-blue"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-recombee-blue"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-recombee-blue"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-recombee-blue"
                  ></textarea>
                </div>
                
                <Button className="w-full bg-recombee-blue hover:bg-recombee-lightBlue text-white">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Company;
