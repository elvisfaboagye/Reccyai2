
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/utils/animations';
import { Link } from 'react-router-dom';
import { scrollToTop } from '@/utils/navigation';

const Hero = () => {
  const { ref, isIntersecting } = useIntersectionObserver();
  
  const handleButtonClick = () => {
    scrollToTop();
  };
  
  return (
    <section
      ref={ref}
      className={`min-h-screen flex items-center justify-center pt-16 px-6 transition-all duration-1000 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 ${
        isIntersecting ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div 
            className={`text-sm font-medium inline-block px-4 py-2 bg-white/20 rounded-full text-white border border-white/30 mb-6 transition-all duration-700 delay-100 ${
              isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Recommendation Engine As A Service
          </div>

          <h1 
            className={`text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 text-white transition-all duration-700 delay-200 ${
              isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-white drop-shadow-md">AI-Powered</span> Recommendations <br className="hidden sm:block" />
            for Your Business
          </h1>

          <p 
            className={`text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 transition-all duration-700 delay-300 ${
              isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Personalize your user experience with our cutting-edge recommendation engine. Increase engagement, conversion, and retention.
          </p>

          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-400 ${
              isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Button 
              className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 py-6 rounded-md text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative z-10 w-full sm:w-auto"
              size="lg"
              asChild
            >
              <Link to="/start-free-trial" onClick={handleButtonClick}>
                <span className="relative z-10">Start Free Trial</span>
              </Link>
            </Button>
            <Button 
              className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 py-6 rounded-md text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative z-10 w-full sm:w-auto" 
              size="lg"
              asChild
            >
              <Link to="/watch-demo" onClick={handleButtonClick}>Watch Demo</Link>
            </Button>
          </div>
        </div>

        <div 
          className={`mt-16 relative max-w-5xl mx-auto transition-all duration-1000 delay-500 ${
            isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl animate-image-glow">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
              alt="Reccy AI Dashboard" 
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-blue-900/30 -z-10"></div>
    </section>
  );
};

export default Hero;
