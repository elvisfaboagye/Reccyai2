
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { usePageTransition, useScrollReveal } from '@/utils/animations';
import { Search, Copy, Check, ChevronDown, ChevronRight } from 'lucide-react';

const ApiReference = () => {
  const isPageLoaded = usePageTransition();
  useScrollReveal();
  const [copiedEndpoint, setCopiedEndpoint] = useState<string | null>(null);
  const [openCategory, setOpenCategory] = useState<string>("recommendations");
  
  useEffect(() => {
    document.title = "API Reference | Reccy AI";
  }, []);
  
  const handleCopy = (code: string, endpoint: string) => {
    navigator.clipboard.writeText(code);
    setCopiedEndpoint(endpoint);
    setTimeout(() => setCopiedEndpoint(null), 2000);
  };
  
  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? "" : category);
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
              API <span className="text-recombee-blue">Reference</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Complete reference for Reccy AI's RESTful API, endpoints, parameters, and responses.
            </p>
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-recombee-blue focus:border-recombee-blue bg-white dark:bg-gray-800 dark:border-gray-700"
                placeholder="Search API endpoints..."
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* API Reference Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
              {/* Sidebar */}
              <div className="lg:col-span-1 reveal-animation">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sticky top-24">
                  <h3 className="text-xl font-bold mb-4">API Reference</h3>
                  <div className="space-y-2">
                    {[
                      { id: "authentication", name: "Authentication" },
                      { id: "recommendations", name: "Recommendations" },
                      { id: "items", name: "Items" },
                      { id: "users", name: "Users" },
                      { id: "interactions", name: "Interactions" },
                      { id: "properties", name: "Properties" },
                      { id: "segments", name: "Segments" },
                      { id: "analytics", name: "Analytics" },
                      { id: "a-b-testing", name: "A/B Testing" },
                      { id: "webhooks", name: "Webhooks" }
                    ].map((category) => (
                      <div 
                        key={category.id}
                        className={`py-2 px-3 rounded-lg cursor-pointer transition-colors ${
                          openCategory === category.id ? 'bg-recombee-blue/10 text-recombee-blue' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                        onClick={() => toggleCategory(category.id)}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{category.name}</span>
                          <ChevronDown 
                            className={`h-4 w-4 transition-transform ${openCategory === category.id ? 'rotate-180' : ''}`}
                          />
                        </div>
                        
                        {openCategory === category.id && (
                          <div className="mt-2 space-y-1 pl-2">
                            <div className="text-sm py-1 px-2 rounded hover:bg-recombee-blue/5 cursor-pointer flex items-center">
                              <ChevronRight className="h-3 w-3 mr-1" />
                              <span>List All</span>
                            </div>
                            <div className="text-sm py-1 px-2 rounded hover:bg-recombee-blue/5 cursor-pointer flex items-center">
                              <ChevronRight className="h-3 w-3 mr-1" />
                              <span>Get Single</span>
                            </div>
                            <div className="text-sm py-1 px-2 rounded hover:bg-recombee-blue/5 cursor-pointer flex items-center">
                              <ChevronRight className="h-3 w-3 mr-1" />
                              <span>Create</span>
                            </div>
                            <div className="text-sm py-1 px-2 rounded hover:bg-recombee-blue/5 cursor-pointer flex items-center">
                              <ChevronRight className="h-3 w-3 mr-1" />
                              <span>Update</span>
                            </div>
                            <div className="text-sm py-1 px-2 rounded hover:bg-recombee-blue/5 cursor-pointer flex items-center">
                              <ChevronRight className="h-3 w-3 mr-1" />
                              <span>Delete</span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="lg:col-span-3 reveal-animation stagger-1">
                <div className="space-y-12">
                  {/* Base URL */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-bold mb-4">Base URL</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      All API requests should be made to the following base URL:
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg flex justify-between items-center">
                      <code className="text-sm text-gray-800 dark:text-gray-300">
                        https://api.reccy.ai/v1
                      </code>
                      <button 
                        className="text-gray-500 hover:text-recombee-blue transition-colors"
                        onClick={() => handleCopy("https://api.reccy.ai/v1", "base-url")}
                      >
                        {copiedEndpoint === "base-url" ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                  
                  {/* Authentication */}
                  <div id="authentication" className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-bold mb-4">Authentication</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      The Reccy AI API uses API keys for authentication. You can view and manage your API keys in the Dashboard.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      All API requests must include your API key in the <code className="bg-gray-100 dark:bg-gray-900 px-1 py-0.5 rounded text-sm">Authorization</code> header:
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg flex justify-between items-center mb-4">
                      <code className="text-sm text-gray-800 dark:text-gray-300">
                        Authorization: Bearer YOUR_API_KEY
                      </code>
                      <button 
                        className="text-gray-500 hover:text-recombee-blue transition-colors"
                        onClick={() => handleCopy("Authorization: Bearer YOUR_API_KEY", "auth-header")}
                      >
                        {copiedEndpoint === "auth-header" ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                      </button>
                    </div>
                    <div className="bg-recombee-blue/10 text-recombee-blue p-4 rounded-lg">
                      <div className="flex items-start">
                        <div className="mr-3 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Keep your API keys secure</p>
                          <p className="text-sm mt-1">
                            Your API keys carry many privileges. Do not share them in publicly accessible areas such as GitHub, client-side code, etc.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Recommendations Endpoints */}
                  <div id="recommendations">
                    <h2 className="text-2xl font-bold mb-6">Recommendations</h2>
                    
                    {/* Get Recommendations Endpoint */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">GET</span>
                        <h3 className="text-xl font-semibold">/recommendations</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Returns personalized recommendations for a specific user or item.
                      </p>
                      
                      <h4 className="font-semibold mb-3">Query Parameters</h4>
                      <div className="overflow-x-auto mb-6">
                        <table className="min-w-full border border-gray-200 dark:border-gray-700 rounded-lg">
                          <thead className="bg-gray-50 dark:bg-gray-800">
                            <tr>
                              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Parameter</th>
                              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Required</th>
                              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                            <tr>
                              <td className="px-4 py-3 text-sm">user_id</td>
                              <td className="px-4 py-3 text-sm">string</td>
                              <td className="px-4 py-3 text-sm">Yes*</td>
                              <td className="px-4 py-3 text-sm">The ID of the user to get recommendations for.</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 text-sm">item_id</td>
                              <td className="px-4 py-3 text-sm">string</td>
                              <td className="px-4 py-3 text-sm">Yes*</td>
                              <td className="px-4 py-3 text-sm">The ID of the item to get similar items for.</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 text-sm">count</td>
                              <td className="px-4 py-3 text-sm">integer</td>
                              <td className="px-4 py-3 text-sm">No</td>
                              <td className="px-4 py-3 text-sm">Number of recommendations to return (default: 10, max: 100).</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 text-sm">scenario</td>
                              <td className="px-4 py-3 text-sm">string</td>
                              <td className="px-4 py-3 text-sm">No</td>
                              <td className="px-4 py-3 text-sm">The scenario to use for recommendations (e.g., "homepage", "product_detail").</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                        * Either user_id or item_id is required, but not both.
                      </p>
                      
                      <h4 className="font-semibold mb-3">Example Request</h4>
                      <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg flex justify-between items-start mb-6">
                        <code className="text-sm text-gray-800 dark:text-gray-300 whitespace-pre">
                          GET /recommendations?user_id=user123&count=5&scenario=homepage
                        </code>
                        <button 
                          className="text-gray-500 hover:text-recombee-blue transition-colors"
                          onClick={() => handleCopy("GET /recommendations?user_id=user123&count=5&scenario=homepage", "rec-request")}
                        >
                          {copiedEndpoint === "rec-request" ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                        </button>
                      </div>
                      
                      <h4 className="font-semibold mb-3">Example Response</h4>
                      <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg flex justify-between items-start">
                        <pre className="text-sm text-gray-800 dark:text-gray-300 overflow-x-auto">
{`{
  "recommendations": [
    {
      "id": "item456",
      "name": "Premium Headphones",
      "category": "Electronics",
      "price": 129.99,
      "score": 0.92
    },
    {
      "id": "item789",
      "name": "Wireless Speaker",
      "category": "Electronics",
      "price": 79.99,
      "score": 0.85
    },
    {
      "id": "item101",
      "name": "Smartphone Case",
      "category": "Accessories",
      "price": 24.99,
      "score": 0.78
    },
    {
      "id": "item202",
      "name": "USB-C Cable",
      "category": "Accessories",
      "price": 12.99,
      "score": 0.72
    },
    {
      "id": "item303",
      "name": "Portable Charger",
      "category": "Electronics",
      "price": 49.99,
      "score": 0.67
    }
  ],
  "recommendation_id": "rec-1234567890"
}`}
                        </pre>
                        <button 
                          className="text-gray-500 hover:text-recombee-blue transition-colors ml-2"
                          onClick={() => handleCopy(`{
  "recommendations": [
    {
      "id": "item456",
      "name": "Premium Headphones",
      "category": "Electronics",
      "price": 129.99,
      "score": 0.92
    },
    {
      "id": "item789",
      "name": "Wireless Speaker",
      "category": "Electronics",
      "price": 79.99,
      "score": 0.85
    },
    {
      "id": "item101",
      "name": "Smartphone Case",
      "category": "Accessories",
      "price": 24.99,
      "score": 0.78
    },
    {
      "id": "item202",
      "name": "USB-C Cable",
      "category": "Accessories",
      "price": 12.99,
      "score": 0.72
    },
    {
      "id": "item303",
      "name": "Portable Charger",
      "category": "Electronics",
      "price": 49.99,
      "score": 0.67
    }
  ],
  "recommendation_id": "rec-1234567890"
}`, "rec-response")}
                        >
                          {copiedEndpoint === "rec-response" ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* More endpoints would be added here */}
                  <div className="text-center">
                    <Button className="bg-recombee-blue hover:bg-recombee-lightBlue text-white">
                      View All Endpoints
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Support Section */}
      <section className="py-20 px-6 bg-recombee-light dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 reveal-animation">
              Need <span className="text-recombee-blue">Help?</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 reveal-animation stagger-1">
              Having trouble with the API? Our developer support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 reveal-animation stagger-2">
              <Button className="bg-recombee-blue hover:bg-recombee-lightBlue text-white">
                Contact Support
              </Button>
              <Button variant="outline">
                Join Developer Community
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ApiReference;
