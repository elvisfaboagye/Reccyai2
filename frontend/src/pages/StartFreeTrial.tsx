
import { useEffect } from 'react';
import { useIntersectionObserver } from '@/utils/animations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const StartFreeTrial = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { ref: formRef, isIntersecting: isFormVisible } = useIntersectionObserver();
  
  useEffect(() => {
    document.title = "Start Free Trial | Reccy AI";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mock user data for dashboard demo
    const formData = new FormData(e.target as HTMLFormElement);
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const company = formData.get('companyName') as string;
    
    // Store user data in local storage for the dashboard
    const userData = {
      id: `user-${Date.now()}`,
      name: `${firstName} ${lastName}`,
      email: email,
      company: company,
      role: 'Admin',
      plan: 'Free Trial'
    };
    
    localStorage.setItem('user', JSON.stringify(userData));
    
    toast({
      title: "Trial requested!",
      description: "Setting up your dashboard with sample data...",
    });
    
    // Redirect to dashboard after short delay
    setTimeout(() => {
      navigate('/user-dashboard');
    }, 1500);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <Link 
              to="/" 
              className="inline-flex items-center text-gray-600 hover:text-reccy-blue transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold">
              Start Your <span className="text-reccy-blue">Free Trial</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
              Experience the power of AI-driven recommendations with our 14-day free trial. No credit card required.
            </p>
          </div>

          <div 
            ref={formRef}
            className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-all duration-700 ${
              isFormVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" name="firstName" placeholder="Enter your first name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" name="lastName" placeholder="Enter your last name" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input id="companyName" name="companyName" placeholder="Enter your company name" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Work Email</Label>
                <Input id="email" name="email" type="email" placeholder="you@company.com" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="website">Company Website</Label>
                <Input id="website" name="website" type="url" placeholder="https://company.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Input id="industry" name="industry" placeholder="E-commerce, Media, etc." />
              </div>
              
              <Button 
                type="submit" 
                variant="brand"
                className="w-full shadow-md"
              >
                Start Free Trial
              </Button>
              
              <p className="text-sm text-gray-500 text-center mt-4">
                By signing up, you agree to our Terms of Service and Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartFreeTrial;
