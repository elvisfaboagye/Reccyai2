
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-6">
              <Link to="/" className="text-recombee-dark dark:text-white font-bold text-2xl">
                <span className="text-recombee-blue">Reccy</span> AI
              </Link>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              AI-powered recommendation engine that helps businesses increase engagement, conversion, and retention.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-recombee-blue transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-recombee-blue transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-recombee-blue transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-recombee-blue transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-3">
              {[
                { name: 'E-commerce', path: '/solutions/ecommerce' },
                { name: 'Media & Entertainment', path: '/solutions/media-entertainment' },
                { name: 'Travel', path: '/solutions/travel' },
                { name: 'Finance', path: '/solutions/finance' },
                { name: 'Healthcare', path: '/solutions/healthcare' },
                { name: 'Education', path: '/solutions/education' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-gray-600 dark:text-gray-300 hover:text-recombee-blue dark:hover:text-recombee-lightBlue transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              {[
                { name: 'Documentation', path: '/documentation' },
                { name: 'API Reference', path: '/api-reference' },
                { name: 'SDKs', path: '/sdks' },
                { name: 'Tutorials', path: '/resources' },
                { name: 'Blog', path: '/blog' },
                { name: 'Case Studies', path: '/resources' },
                { name: 'Webinars', path: '/resources' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-gray-600 dark:text-gray-300 hover:text-recombee-blue dark:hover:text-recombee-lightBlue transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/about-us' },
                { name: 'Careers', path: '/careers' },
                { name: 'Contact', path: '/company' },
                { name: 'Privacy Policy', path: '/privacy-policy' },
                { name: 'Terms of Service', path: '/terms-of-service' },
                { name: 'Press Kit', path: '/press-kit' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-gray-600 dark:text-gray-300 hover:text-recombee-blue dark:hover:text-recombee-lightBlue transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Reccy AI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-recombee-blue text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-500 hover:text-recombee-blue text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-500 hover:text-recombee-blue text-sm transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
