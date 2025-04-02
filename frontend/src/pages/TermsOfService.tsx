
import { useEffect } from 'react';
import { useIntersectionObserver } from '@/utils/animations';

const TermsOfService = () => {
  const { ref, isIntersecting } = useIntersectionObserver();
  
  useEffect(() => {
    document.title = "Terms of Service | Reccy AI";
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
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
          <p className="text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="prose dark:prose-invert max-w-none">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using Reccy AI's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
            </p>
            
            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily use our services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>Modify or copy our materials;</li>
              <li>Use the materials for any commercial purpose or for any public display;</li>
              <li>Attempt to reverse engineer any software contained on our service;</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
            
            <h2>3. Service Subscription</h2>
            <p>
              Access to certain features of our service requires a paid subscription. The terms of your subscription, including pricing and billing, will be disclosed before you complete your subscription purchase.
            </p>
            
            <h2>4. Accuracy of Materials</h2>
            <p>
              The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our website are accurate, complete, or current.
            </p>
            
            <h2>5. Links</h2>
            <p>
              Reccy AI has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Reccy AI of the site.
            </p>
            
            <h2>6. Modifications to Terms of Service</h2>
            <p>
              Reccy AI may revise these terms of service at any time without notice. By using this service, you are agreeing to be bound by the then-current version of these terms of service.
            </p>
            
            <h2>7. Limitation of Liability</h2>
            <p>
              In no event shall Reccy AI, nor any of its officers, directors, and employees, be liable for any loss, injury, or damages, whether direct, indirect, consequential, incidental, special, or otherwise, arising from your use of our service.
            </p>
            
            <h2>8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of [Your Jurisdiction] and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
            
            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at legal@reccy.ai.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
