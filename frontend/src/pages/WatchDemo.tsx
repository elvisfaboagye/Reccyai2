
import { useEffect } from 'react';
import { useIntersectionObserver } from '@/utils/animations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

const WatchDemo = () => {
  const { toast } = useToast();
  const { ref: videoRef, isIntersecting: isVideoVisible } = useIntersectionObserver();
  const { ref: formRef, isIntersecting: isFormVisible } = useIntersectionObserver();
  
  useEffect(() => {
    document.title = "Watch Demo | Reccy AI";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo access granted!",
      description: "Check your email for access to the full product demo.",
    });
  };

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Watch the <span className="text-reccy-blue">Reccy AI</span> Demo
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            See how our AI-powered recommendation engine can transform your business.
          </p>

          <div 
            ref={videoRef}
            className={`bg-gray-900 rounded-lg shadow-lg overflow-hidden mb-12 aspect-video transition-all duration-700 ${
              isVideoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-recombee-blue/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-recombee-blue">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Demo Video</h3>
                <p className="text-gray-400">
                  Fill out the form below to get access to our complete demo video
                </p>
              </div>
            </div>
          </div>

          <div 
            ref={formRef}
            className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-all duration-700 ${
              isFormVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-2xl font-bold mb-6">Get Full Access to Our Demo</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Work Email</Label>
                <Input id="email" type="email" placeholder="you@company.com" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input id="companyName" placeholder="Enter your company name" required />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-recombee-blue hover:bg-recombee-lightBlue text-white shadow-md"
              >
                Get Demo Access
              </Button>
              
              <p className="text-sm text-gray-500 text-center mt-4">
                We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchDemo;
