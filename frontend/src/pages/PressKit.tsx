import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { usePageTransition, useScrollReveal } from '@/utils/animations';
import { Download } from 'lucide-react';

const PressKit = () => {
  const isPageLoaded = usePageTransition();
  useScrollReveal();
  
  useEffect(() => {
    document.title = "Press Kit | Reccy AI";
  }, []);
  
  return (
    <div className={`transition-opacity duration-500 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center reveal-animation">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Reccy AI <span className="text-reccy-blue">Press Kit</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Access the official logos, images, and resources for media coverage of Reccy AI.
            </p>
            <Button className="bg-reccy-blue hover:bg-reccy-lightBlue text-white">
              <Download className="mr-2 h-4 w-4" />
              Download All Assets
            </Button>
          </div>
        </div>
      </section>
      
      {/* Logos Section */}
      <section className="py-20 px-6 bg-reccy-light dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 reveal-animation">
              Official <span className="text-reccy-blue">Logos</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-10 reveal-animation stagger-1">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
                <div className="aspect-video flex items-center justify-center bg-white rounded-lg mb-4">
                  <h3 className="text-reccy-dark dark:text-black font-bold text-3xl">
                    <span className="text-reccy-blue">Reccy</span> AI
                  </h3>
                </div>
                <h4 className="text-lg font-semibold mb-2">Light Background</h4>
                <div className="flex gap-3 mt-4">
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-3 w-3" />
                    PNG
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-3 w-3" />
                    SVG
                  </Button>
                </div>
              </div>
              
              <div className="bg-gray-900 p-8 rounded-xl shadow-md">
                <div className="aspect-video flex items-center justify-center bg-gray-900 rounded-lg mb-4">
                  <h3 className="text-white font-bold text-3xl">
                    <span className="text-reccy-lightBlue">Reccy</span> AI
                  </h3>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Dark Background</h4>
                <div className="flex gap-3 mt-4">
                  <Button variant="outline" size="sm" className="border-gray-700 text-white hover:bg-gray-800">
                    <Download className="mr-2 h-3 w-3" />
                    PNG
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-700 text-white hover:bg-gray-800">
                    <Download className="mr-2 h-3 w-3" />
                    SVG
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Brand Guidelines */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 reveal-animation">
              Brand <span className="text-reccy-blue">Guidelines</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-10 reveal-animation stagger-1">
              <div>
                <h3 className="text-xl font-bold mb-4">Colors</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="h-20 bg-reccy-blue rounded-lg mb-2"></div>
                    <p className="text-sm">Primary Blue</p>
                    <p className="text-xs text-gray-500">#3B82F6</p>
                  </div>
                  <div>
                    <div className="h-20 bg-reccy-lightBlue rounded-lg mb-2"></div>
                    <p className="text-sm">Light Blue</p>
                    <p className="text-xs text-gray-500">#60A5FA</p>
                  </div>
                  <div>
                    <div className="h-20 bg-gray-900 rounded-lg mb-2"></div>
                    <p className="text-sm">Dark</p>
                    <p className="text-xs text-gray-500">#111827</p>
                  </div>
                  <div>
                    <div className="h-20 bg-white border border-gray-200 rounded-lg mb-2"></div>
                    <p className="text-sm">White</p>
                    <p className="text-xs text-gray-500">#FFFFFF</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Typography</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Headings</p>
                    <p className="text-2xl font-bold">Inter Bold</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Body Text</p>
                    <p className="text-base">Inter Regular</p>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Download className="mr-2 h-3 w-3" />
                      Download Font Files
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 reveal-animation stagger-2">
              <h3 className="text-xl font-bold mb-4">Usage Guidelines</h3>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <ul className="space-y-3 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>Don't alter, distort, or modify the logo in any way</li>
                  <li>Maintain clear space around the logo</li>
                  <li>Use only the official color variants</li>
                  <li>Don't place the logo on busy backgrounds</li>
                  <li>Don't combine the logo with other elements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Company Information */}
      <section className="py-20 px-6 bg-reccy-light dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 reveal-animation">
              Company <span className="text-reccy-blue">Information</span>
            </h2>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-8 reveal-animation stagger-1">
              <h3 className="text-xl font-bold mb-4">About Reccy AI</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Reccy AI is a leading provider of AI-powered recommendation technology that helps businesses deliver personalized experiences to their users. Our cutting-edge platform analyzes user behavior in real-time to suggest relevant products, content, and services that increase engagement, conversion, and retention.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Founded in 2020, Reccy AI serves clients across various industries including e-commerce, media, travel, finance, healthcare, and education. Our mission is to make personalization accessible to businesses of all sizes.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 reveal-animation stagger-2">
              <h3 className="text-xl font-bold mb-4">Fact Sheet</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Founded</p>
                    <p className="font-semibold">2020</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Headquarters</p>
                    <p className="font-semibold">San Francisco, CA</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Employees</p>
                    <p className="font-semibold">100+</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Leadership</p>
                  <p className="font-semibold">Jane Smith, CEO & Co-founder</p>
                  <p className="font-semibold">John Doe, CTO & Co-founder</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Media Contact</p>
                  <p className="font-semibold">press@reccy.ai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PressKit;
