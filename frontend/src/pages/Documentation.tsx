
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { usePageTransition, useScrollReveal } from '@/utils/animations';
import { Search, Book, Code, FileText, Copy, Check, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Documentation = () => {
  const isPageLoaded = usePageTransition();
  useScrollReveal();
  const [copied, setCopied] = useState(false);
  
  useEffect(() => {
    document.title = "Documentation | Reccy AI";
  }, []);
  
  const handleCopy = () => {
    navigator.clipboard.writeText('npm install @reccy/client-js');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className={`transition-opacity duration-500 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center reveal-animation">
            <div className="text-sm font-medium inline-block px-4 py-2 bg-recombee-blue/10 rounded-full text-recombee-blue border border-recombee-blue/20 mb-4">
              Developer Resources
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Reccy AI <span className="text-recombee-blue">Documentation</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Comprehensive guides and references to help you integrate and make the most of Reccy AI's recommendation engine.
            </p>
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-recombee-blue focus:border-recombee-blue bg-white dark:bg-gray-800 dark:border-gray-700"
                placeholder="Search documentation..."
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Start */}
      <section className="py-16 px-6 bg-recombee-light dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="reveal-animation">
                <h2 className="text-3xl font-bold mb-6">
                  Quick <span className="text-recombee-blue">Start</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Get started with Reccy AI's recommendation engine in just a few minutes. Follow our step-by-step guide to integrate personalized recommendations into your application.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-recombee-blue/10 rounded-full p-2 mr-3 mt-1">
                      <span className="flex items-center justify-center w-5 h-5 text-sm font-bold text-recombee-blue">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Create an Account</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Sign up for a Reccy AI account to get your API key.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-recombee-blue/10 rounded-full p-2 mr-3 mt-1">
                      <span className="flex items-center justify-center w-5 h-5 text-sm font-bold text-recombee-blue">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Install SDK</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Install our client library for your platform.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-recombee-blue/10 rounded-full p-2 mr-3 mt-1">
                      <span className="flex items-center justify-center w-5 h-5 text-sm font-bold text-recombee-blue">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Initialize the Client</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Configure the SDK with your API key and preferences.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-recombee-blue/10 rounded-full p-2 mr-3 mt-1">
                      <span className="flex items-center justify-center w-5 h-5 text-sm font-bold text-recombee-blue">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Start Recommending</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Begin receiving personalized recommendations for your users.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button className="bg-recombee-blue hover:bg-recombee-lightBlue text-white">
                    View Full Guide
                  </Button>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 reveal-animation stagger-1">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">Installation</h3>
                  <button 
                    className="text-gray-500 hover:text-recombee-blue transition-colors"
                    onClick={handleCopy}
                  >
                    {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                  </button>
                </div>
                <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg mb-6 overflow-x-auto">
                  <code className="text-sm text-gray-800 dark:text-gray-300">
                    npm install @reccy/client-js
                  </code>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Basic Usage</h3>
                  <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm text-gray-800 dark:text-gray-300">
{`import { ReccyClient } from '@reccy/client-js';

// Initialize client
const reccy = new ReccyClient({
  apiKey: 'YOUR_API_KEY',
  projectId: 'YOUR_PROJECT_ID'
});

// Get recommendations
const recommendations = await reccy.recommend({
  userId: 'user-123',
  count: 5,
  scenario: 'homepage'
});`}
                    </pre>
                  </div>
                </div>
                <Button variant="outline" className="w-full text-recombee-blue border-recombee-blue">
                  See More Examples
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Documentation Categories */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center reveal-animation">
              Explore the <span className="text-recombee-blue">Documentation</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-animation stagger-1">
              {[
                {
                  title: "Getting Started",
                  description: "Learn the basics of Reccy AI and how to set up your first recommendation engine.",
                  icon: <Book className="h-6 w-6 text-recombee-blue" />,
                  links: ["Quick Start Guide", "Core Concepts", "Authentication", "Project Setup"]
                },
                {
                  title: "API Reference",
                  description: "Detailed reference for all available API endpoints, parameters, and responses.",
                  icon: <Code className="h-6 w-6 text-recombee-blue" />,
                  links: ["REST API", "GraphQL API", "Webhooks", "Rate Limits"]
                },
                {
                  title: "SDKs & Libraries",
                  description: "Client libraries for various programming languages and platforms.",
                  icon: <FileText className="h-6 w-6 text-recombee-blue" />,
                  links: ["JavaScript SDK", "Python SDK", "PHP SDK", "Ruby SDK"]
                },
                {
                  title: "Use Cases",
                  description: "Implementation guides for common recommendation scenarios and industry applications.",
                  icon: <Book className="h-6 w-6 text-recombee-blue" />,
                  links: ["Product Recommendations", "Content Suggestions", "Related Items", "Personalized Search"]
                },
                {
                  title: "Tutorials",
                  description: "Step-by-step tutorials for implementing various recommendation features.",
                  icon: <Book className="h-6 w-6 text-recombee-blue" />,
                  links: ["Basic Integration", "A/B Testing", "User Segmentation", "Real-time Recommendations"]
                },
                {
                  title: "Best Practices",
                  description: "Guidelines and recommendations for optimizing your recommendation engine.",
                  icon: <Book className="h-6 w-6 text-recombee-blue" />,
                  links: ["Performance Optimization", "Data Quality", "Security Guidelines", "Scaling Tips"]
                }
              ].map((category, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    {category.icon}
                    <h3 className="text-xl font-bold ml-3">{category.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    {category.description}
                  </p>
                  <ul className="space-y-2">
                    {category.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          to="#"
                          className="text-recombee-blue hover:text-recombee-lightBlue text-sm flex items-center group"
                        >
                          <ChevronRight className="h-4 w-4 mr-1 transform group-hover:translate-x-1 transition-transform" />
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Support Section */}
      <section className="py-20 px-6 bg-recombee-light dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 reveal-animation">
              Need <span className="text-recombee-blue">Help?</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto reveal-animation stagger-1">
              Can't find what you're looking for? Our support team is here to help you with any questions or issues.
            </p>
            <div className="grid md:grid-cols-3 gap-6 reveal-animation stagger-2">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3">Developer Community</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  Join our community forum to ask questions and share knowledge with other developers.
                </p>
                <Button variant="outline" className="w-full">
                  Visit Forum
                </Button>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3">Support Ticket</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  Submit a support ticket for technical issues or account-related questions.
                </p>
                <Button variant="outline" className="w-full">
                  Create Ticket
                </Button>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3">Live Chat</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  Chat with our support team in real-time for immediate assistance.
                </p>
                <Button className="w-full bg-recombee-blue hover:bg-recombee-lightBlue text-white">
                  Start Chat
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Documentation;
