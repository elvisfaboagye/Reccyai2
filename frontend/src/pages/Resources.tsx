
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { usePageTransition, useScrollReveal } from '@/utils/animations';
import { Button } from '@/components/ui/button';
import { ChevronRight, FileText, Video, Book, ExternalLink } from 'lucide-react';

const resourceCategories = [
  {
    icon: <FileText className="w-8 h-8 text-recombee-blue" />,
    title: "Documentation",
    description: "Comprehensive guides to help you implement and optimize Recombee's recommendation engine."
  },
  {
    icon: <Video className="w-8 h-8 text-recombee-blue" />,
    title: "Tutorials",
    description: "Step-by-step video tutorials showing how to integrate and maximize Recombee's capabilities."
  },
  {
    icon: <Book className="w-8 h-8 text-recombee-blue" />,
    title: "API Reference",
    description: "Detailed API documentation for developers to seamlessly integrate our recommendation engine."
  }
];

const blogPosts = [
  {
    title: "Boosting E-commerce Conversion with AI Recommendations",
    excerpt: "Learn how AI-powered recommendations can significantly improve your e-commerce conversion rates and average order values.",
    date: "May 15, 2023",
    readTime: "8 min read",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
  },
  {
    title: "Personalization in Media: Keeping Viewers Engaged",
    excerpt: "Discover strategies for implementing personalized content recommendations that keep media consumers engaged longer.",
    date: "April 22, 2023",
    readTime: "6 min read",
    category: "Media",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
  },
  {
    title: "Real-time Recommendations: Technical Implementation Guide",
    excerpt: "A technical deep dive into implementing real-time recommendation systems that respond instantly to user behavior.",
    date: "March 10, 2023",
    readTime: "12 min read",
    category: "Technical",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
  }
];

const Resources = () => {
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
              Resources
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Learn & <span className="text-recombee-blue">Grow</span> with Recombee
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Explore our collection of resources to help you implement, optimize, and get the most out of Recombee's recommendation engine.
            </p>
          </div>
        </div>
      </section>
      
      {/* Resource Categories */}
      <section className="py-16 px-6 bg-recombee-light dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {resourceCategories.map((category, index) => (
              <div 
                key={index} 
                className={`bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover-lift reveal-animation stagger-${index + 1}`}
              >
                <div className="mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{category.description}</p>
                <Button 
                  variant="link" 
                  className="text-recombee-blue hover:text-recombee-lightBlue px-0 flex items-center gap-1 group"
                >
                  Explore {category.title}
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Blog Posts */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Latest from Our <span className="text-recombee-blue">Blog</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Insights, best practices, and industry trends to help you maximize the value of personalized recommendations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div 
                key={index} 
                className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover-lift reveal-animation stagger-${index + 1}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-recombee-blue text-white text-xs font-medium px-2 py-1 rounded">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                  <Button 
                    variant="link" 
                    className="text-recombee-blue hover:text-recombee-lightBlue px-0 flex items-center gap-1 group"
                  >
                    Read More
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 reveal-animation">
            <Button className="bg-recombee-blue hover:bg-recombee-lightBlue text-white">
              View All Articles
            </Button>
          </div>
        </div>
      </section>
      
      {/* Webinars Section */}
      <section className="py-20 px-6 bg-recombee-light dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal-animation">
              <div className="text-sm font-medium inline-block px-4 py-2 bg-recombee-blue/10 rounded-full text-recombee-blue border border-recombee-blue/20 mb-4">
                Webinars
              </div>
              <h2 className="text-3xl font-bold mb-6">Learn from Industry Experts</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Join our free webinars featuring industry experts discussing the latest trends in recommendation systems and personalization.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-recombee-blue/10 p-2 rounded-full mr-3 mt-1">
                    <ChevronRight className="w-4 h-4 text-recombee-blue" />
                  </div>
                  <div>
                    <span className="font-medium">Next Webinar: </span>
                    <span className="text-gray-600 dark:text-gray-300">AI-Powered Personalization in Retail</span>
                    <div className="text-sm text-gray-500">June 15, 2023 • 11:00 AM EST</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-recombee-blue/10 p-2 rounded-full mr-3 mt-1">
                    <ChevronRight className="w-4 h-4 text-recombee-blue" />
                  </div>
                  <div>
                    <span className="font-medium">On-Demand: </span>
                    <span className="text-gray-600 dark:text-gray-300">Implementing Real-time Recommendations</span>
                    <div className="text-sm text-gray-500">Watch anytime</div>
                  </div>
                </li>
              </ul>
              <Button className="bg-recombee-blue hover:bg-recombee-lightBlue text-white">
                Register Now
              </Button>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl reveal-animation stagger-1">
              <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80" 
                alt="Webinar" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer transform transition-transform hover:scale-110">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 bg-recombee-blue text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 reveal-animation">Need Help Implementing Recommendations?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 reveal-animation stagger-1">
            Our team of experts is ready to help you implement and optimize Recombee's recommendation engine for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 reveal-animation stagger-2">
            <Button className="bg-white text-recombee-blue hover:bg-gray-100">
              Contact Support
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Browse Documentation
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Resources;
