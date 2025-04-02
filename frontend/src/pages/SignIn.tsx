
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { usePageTransition } from '@/utils/animations';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Checkbox } from '@/components/ui/checkbox';
import { Eye, EyeOff, Loader2, ArrowRight } from 'lucide-react';

const SignIn = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const isPageLoaded = usePageTransition();
  
  const [email, setEmail] = useState('demo@reccy.ai');
  const [password, setPassword] = useState('password');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    
    if (!email || !password) {
      setFormError('Please enter both email and password.');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Demo credentials check
      if (email === 'demo@reccy.ai' && password === 'password') {
        // Store user in localStorage
        const user = {
          id: 'user-' + Math.random().toString(36).substr(2, 9),
          name: 'Demo User',
          email: 'demo@reccy.ai',
          company: 'Reccy AI Demo',
          plan: 'Growth',
          role: 'Admin'
        };
        
        localStorage.setItem('user', JSON.stringify(user));
        
        toast({
          title: "Signed in successfully",
          description: "Welcome back to Reccy AI!"
        });
        
        navigate('/user-dashboard');
      } else {
        setFormError('Invalid email or password. Try using demo@reccy.ai / password');
        setIsLoading(false);
      }
    }, 1500);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 transition-opacity duration-500 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link to="/" className="inline-block">
            <span className="text-reccy-dark dark:text-white font-bold text-3xl">
              <span className="text-reccy-blue">Reccy</span> AI
            </span>
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-gray-100">
            Sign in to your account
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Access your personalized AI recommendation dashboard
          </p>
        </div>
        
        <Card>
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle className="text-lg">Sign In</CardTitle>
              <CardDescription>
                Enter your credentials below
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {formError && (
                <div className="bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 p-3 rounded-md text-sm">
                  {formError}
                </div>
              )}
              
              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email address
                </label>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div className="space-y-1">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="remember-me" 
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  />
                  <label htmlFor="remember-me" className="text-sm">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm font-medium text-reccy-blue hover:text-reccy-lightBlue">
                  Forgot password?
                </a>
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-col space-y-4">
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
                variant="brand"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign in
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
              
              <p className="text-center text-sm">
                Don't have an account?{" "}
                <Link to="/start-free-trial" className="font-medium text-reccy-blue hover:text-reccy-lightBlue">
                  Start your free trial
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>
        
        <p className="text-center text-xs text-gray-500 dark:text-gray-400">
          By continuing, you agree to Reccy AI's{" "}
          <Link to="/terms-of-service" className="underline">Terms of Service</Link> and{" "}
          <Link to="/privacy-policy" className="underline">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  );
};

export default SignIn;
