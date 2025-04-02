
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { usePageTransition } from '@/utils/animations';

type ProductPageLayoutProps = {
  children: ReactNode;
  heroBackground?: string;
  heroGradient?: string;
};

const ProductPageLayout = ({ 
  children, 
  heroBackground = "bg-reccy-blue/10",
  heroGradient = "from-reccy-blue/5 to-transparent" 
}: ProductPageLayoutProps) => {
  const isPageLoaded = usePageTransition();

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-950 transition-opacity duration-500 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      <div className={`${heroBackground} bg-gradient-to-b ${heroGradient} pt-24`}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default ProductPageLayout;
