
import { useEffect } from 'react';
import { useIntersectionObserver } from '@/utils/animations';

const PrivacyPolicy = () => {
  const { ref, isIntersecting } = useIntersectionObserver();
  
  useEffect(() => {
    document.title = "Privacy Policy | Reccy AI";
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
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="prose dark:prose-invert max-w-none">
            <h2>1. Introduction</h2>
            <p>
              At Reccy AI, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our recommendation engine services.
            </p>
            
            <h2>2. Information We Collect</h2>
            <p>
              We collect information that you voluntarily provide to us when you register for our services, express interest in obtaining information about us or our products, or otherwise contact us.
            </p>
            <p>
              The personal information that we collect depends on the context of your interactions with us, but may include:
            </p>
            <ul>
              <li>Personal identifiers (name, email address, phone number)</li>
              <li>Company information</li>
              <li>Login credentials</li>
              <li>Usage data</li>
              <li>Technical data (IP address, browser information)</li>
            </ul>
            
            <h2>3. How We Use Your Information</h2>
            <p>
              We use the information we collect for various business purposes, including:
            </p>
            <ul>
              <li>Providing, operating, and maintaining our services</li>
              <li>Improving and personalizing our services</li>
              <li>Understanding how you use our services</li>
              <li>Communicating with you about our services</li>
              <li>Marketing and advertising our services</li>
              <li>Protecting our legal rights and complying with legal obligations</li>
            </ul>
            
            <h2>4. Disclosure of Your Information</h2>
            <p>
              We may share your information with third parties in certain situations, including:
            </p>
            <ul>
              <li>With service providers who perform services on our behalf</li>
              <li>With business partners with your consent</li>
              <li>In connection with corporate transactions (merger, acquisition, etc.)</li>
              <li>When required by law</li>
            </ul>
            
            <h2>5. Data Security</h2>
            <p>
              We have implemented appropriate technical and organizational security measures to protect your information. However, no electronic transmission or storage of information can be completely secure, so we cannot guarantee absolute security.
            </p>
            
            <h2>6. Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, delete, or restrict processing of your personal information.
            </p>
            
            <h2>7. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy, please contact us at privacy@reccy.ai.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
