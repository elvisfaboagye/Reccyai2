
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { usePageTransition, useScrollReveal } from '@/utils/animations';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "Maximizing E-commerce Conversions with AI Recommendations",
    excerpt: "Discover how AI-powered product recommendations can significantly increase your e-commerce conversion rates and average order value.",
    category: "E-commerce",
    date: "June 15, 2023",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "The Evolution of Recommendation Engines in Media Streaming",
    excerpt: "Explore how recommendation engines have evolved in the media streaming industry and their impact on viewer engagement.",
    category: "Media & Entertainment",
    date: "May 22, 2023",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Personalization vs. Privacy: Finding the Right Balance",
    excerpt: "Learn how to deliver personalized experiences while respecting user privacy in the age of data protection regulations.",
    category: "Best Practices",
    date: "April 10, 2023",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1508345228704-935cc84bf5e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Building Trust Through Transparent Recommendation Systems",
    excerpt: "How to create recommendation systems that users can trust through transparency and explainability.",
    category: "AI Ethics",
    date: "March 5, 2023",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "The Future of Healthcare Recommendations: Personalized Wellness",
    excerpt: "Explore how AI recommendations are transforming healthcare with personalized wellness suggestions and treatment plans.",
    category: "Healthcare",
    date: "February 18, 2023",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Case Study: How TravelEase Increased Bookings by 35% with Reccy AI",
    excerpt: "Learn how TravelEase implemented Reccy AI's recommendation engine to dramatically increase their booking conversions.",
    category: "Case Study",
    date: "January 30, 2023",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1564596823821-78fadb5b9b11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const Blog = () => {
  const isPageLoaded = usePageTransition();
  useScrollReveal();
  
  useEffect(() => {
    document.title = "Blog | Reccy AI";
  }, []);
  
  return (
    <div className={`transition-opacity duration-500 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center reveal-animation">
            <div className="text-sm font-medium inline-block px-4 py-2 bg-recombee-blue/10 rounded-full text-recombee-blue border border-recombee-blue/20 mb-4">
              Insights & Updates
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Reccy AI <span className="text-recombee-blue">Blog</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Discover the latest trends, best practices, and insights in AI-powered personalization and recommendation systems.
            </p>
            <div className="flex gap-3 justify-center">
              <Button variant="outline">All Posts</Button>
              <Button variant="outline">E-commerce</Button>
              <Button variant="outline">Media</Button>
              <Button variant="outline">Case Studies</Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Post */}
      <section className="py-10 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden reveal-animation">
              <div className="h-full">
                <img 
                  src="https://images.unsplash.com/photo-1700487363338-be7bb062c053?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Featured Blog Post" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="text-sm font-medium inline-block px-3 py-1 bg-recombee-blue/10 rounded-full text-recombee-blue mb-4">
                  Featured Post
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  How AI is Revolutionizing Personalization Across Industries
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Artificial intelligence is transforming how businesses deliver personalized experiences to their customers. Learn how leading companies are leveraging AI-powered recommendations to drive engagement and conversion.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    July 12, 2023
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    12 min read
                  </div>
                </div>
                <Button className="bg-recombee-blue hover:bg-recombee-lightBlue text-white">
                  Read Article
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Posts */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 reveal-animation">
              Latest <span className="text-recombee-blue">Articles</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <div 
                  key={post.id} 
                  className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow reveal-animation stagger-${index % 3 + 1}`}
                >
                  <div className="relative h-48">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-medium px-3 py-1 bg-white/90 dark:bg-gray-800/90 rounded-full text-recombee-blue">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <Button variant="link" className="p-0 text-recombee-blue hover:text-recombee-lightBlue flex items-center gap-1">
                      Read more <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center reveal-animation">
              <Button variant="outline" className="border-recombee-blue text-recombee-blue">
                View All Articles
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-20 px-6 bg-recombee-blue text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center reveal-animation">
            <h2 className="text-3xl font-bold mb-6">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Subscribe to receive the latest articles, case studies, and insights on AI-powered personalization.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg focus:outline-none text-gray-800"
              />
              <Button className="bg-white text-recombee-blue hover:bg-gray-100 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
