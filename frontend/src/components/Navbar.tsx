
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { scrollToTop } from '@/utils/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Solutions', path: '/solutions' },
    { name: 'Clients', path: '/clients' },
    { name: 'Resources', path: '/resources' },
    { name: 'Company', path: '/company' },
    { name: 'Pricing', path: '/pricing' }
  ];

  const handleNavClick = () => {
    scrollToTop();
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
        isScrolled ? 'blur-glass shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link 
            to="/" 
            className="text-reccy-dark dark:text-white font-bold text-2xl transition-all"
            onClick={handleNavClick}
          >
            <span className="text-reccy-blue">Reccy</span> AI
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === item.path
                  ? 'text-reccy-blue dark:text-reccy-lightBlue'
                  : 'text-gray-700 dark:text-gray-300 hover:text-reccy-blue dark:hover:text-reccy-lightBlue'
              }`}
              onClick={handleNavClick}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              className="text-sm font-medium hover:text-reccy-blue dark:hover:text-reccy-lightBlue"
              asChild
            >
              <Link to="/signin" onClick={handleNavClick}>Sign In</Link>
            </Button>
            <Button 
              variant="brand"
              className="shadow-md hover:shadow-lg transition-all duration-300"
              asChild
            >
              <Link to="/start-free-trial" onClick={handleNavClick}>Get Started</Link>
            </Button>
          </div>
        </nav>
        
        <button
          className="block md:hidden text-gray-700 dark:text-gray-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`absolute top-full left-0 right-0 blur-glass shadow-md md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition-colors duration-200 py-2 ${
                location.pathname === item.path
                  ? 'text-reccy-blue dark:text-reccy-lightBlue'
                  : 'text-gray-700 dark:text-gray-300 hover:text-reccy-blue dark:hover:text-reccy-lightBlue'
              }`}
              onClick={handleNavClick}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-2">
            <Button 
              variant="ghost" 
              className="text-sm font-medium w-full justify-start hover:text-reccy-blue dark:hover:text-reccy-lightBlue"
              asChild
            >
              <Link to="/signin" onClick={handleNavClick}>Sign In</Link>
            </Button>
            <Button 
              variant="brand"
              className="shadow-md hover:shadow-lg transition-all duration-300 w-full"
              asChild
            >
              <Link to="/start-free-trial" onClick={handleNavClick}>Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
