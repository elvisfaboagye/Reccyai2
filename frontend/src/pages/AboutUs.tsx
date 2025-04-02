
import { useEffect } from 'react';
import { useIntersectionObserver } from '@/utils/animations';

const AboutUs = () => {
  const { ref: headerRef, isIntersecting: isHeaderVisible } = useIntersectionObserver();
  const { ref: contentRef, isIntersecting: isContentVisible } = useIntersectionObserver();
  
  useEffect(() => {
    document.title = "About Us | Reccy AI";
  }, []);

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-6">
        <div 
          ref={headerRef}
          className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-700 ${
            isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-recombee-blue">Reccy AI</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We're on a mission to transform how businesses deliver personalized experiences.
          </p>
        </div>
        
        <div
          ref={contentRef}
          className={`max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-all duration-700 ${
            isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="prose dark:prose-invert max-w-none">
            <h2>Our Story</h2>
            <p>
              Founded in 2022, Reccy AI began with a simple idea: make AI-powered recommendations accessible to businesses of all sizes. Our founders, experienced in machine learning and e-commerce, recognized that while large tech companies had sophisticated recommendation engines, most businesses lacked access to this powerful technology.
            </p>
            
            <p>
              After years of research and development, we launched our recommendation engine as a service platform, democratizing access to advanced AI technology that drives engagement, conversion, and retention.
            </p>
            
            <h2>Our Mission</h2>
            <p>
              At Reccy AI, our mission is to empower businesses to deliver personalized experiences that delight customers and drive growth. We believe that every business, regardless of size or technical expertise, should have access to powerful recommendation technology.
            </p>
            
            <h2>Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p>We constantly push the boundaries of what's possible in AI and machine learning to deliver cutting-edge solutions.</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Customer Success</h3>
                <p>We measure our success by the success of our customers. Their growth is our priority.</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Transparency</h3>
                <p>We believe in open communication and providing clear insights into how our technology works.</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Ethical AI</h3>
                <p>We develop our AI systems with strong ethical principles, ensuring fairness and privacy protection.</p>
              </div>
            </div>
            
            <h2>Our Team</h2>
            <p>
              Reccy AI is powered by a diverse team of AI researchers, software engineers, data scientists, and business experts united by our passion for intelligent technology and its potential to transform businesses.
            </p>
            <p>
              Based across North America and Europe, our team brings together decades of combined experience from leading technology companies and research institutions.
            </p>
            
            <h2>Join Our Journey</h2>
            <p>
              We're always looking for talented individuals to join our team. If you're passionate about AI, machine learning, and building products that make a difference, we'd love to hear from you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
