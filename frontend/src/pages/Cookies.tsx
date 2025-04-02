
import { useEffect } from 'react';
import { useIntersectionObserver } from '@/utils/animations';

const Cookies = () => {
  const { ref, isIntersecting } = useIntersectionObserver();
  
  useEffect(() => {
    document.title = "Cookie Policy | Reccy AI";
  }, []);

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-all duration-700 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
          <p className="text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="prose dark:prose-invert max-w-none">
            <h2>1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
            </p>
            
            <h2>2. How We Use Cookies</h2>
            <p>
              Reccy AI uses cookies for several purposes, including:
            </p>
            <ul>
              <li><strong>Essential cookies:</strong> These cookies are necessary for the website to function properly.</li>
              <li><strong>Analytical cookies:</strong> These cookies allow us to recognize and count the number of visitors and to see how visitors move around our website. This helps us improve how our website works.</li>
              <li><strong>Functionality cookies:</strong> These cookies enable us to personalize content and remember your preferences.</li>
              <li><strong>Targeting cookies:</strong> These cookies record your visit to our website, the pages you have visited, and the links you have followed.</li>
            </ul>
            
            <h2>3. Types of Cookies We Use</h2>
            <p>
              We use both first-party cookies (set by our website) and third-party cookies (set by other websites). First-party cookies are mostly necessary for the website to function the right way, and they do not collect any of your personally identifiable data.
            </p>
            
            <h2>4. Managing Cookies</h2>
            <p>
              Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, or to alert you when cookies are being sent. The methods for doing so vary from browser to browser, and from version to version.
            </p>
            <p>
              Please note that refusing cookies may affect your experience of our website, as parts of the site may no longer work as intended.
            </p>
            
            <h2>5. Changes to Our Cookie Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.
            </p>
            
            <h2>6. Contact Us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact us at privacy@reccy.ai.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
