
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { usePageTransition } from '@/utils/animations';

type DashboardLayoutProps = {
  children: ReactNode;
  title: string;
  subtitle?: string;
  industry: 'ecommerce' | 'media' | 'travel' | 'finance' | 'healthcare' | 'education';
};

const industryColors = {
  ecommerce: 'from-orange-500/10 to-transparent',
  media: 'from-blue-500/10 to-transparent',
  travel: 'from-teal-500/10 to-transparent',
  finance: 'from-blue-500/10 to-transparent',
  healthcare: 'from-green-500/10 to-transparent',
  education: 'from-purple-500/10 to-transparent'
};

const industryBg = {
  ecommerce: 'bg-orange-50 dark:bg-orange-950/10',
  media: 'bg-reccy-blue/10 dark:bg-blue-950/10',
  travel: 'bg-teal-50 dark:bg-teal-950/10',
  finance: 'bg-blue-50 dark:bg-blue-950/10',
  healthcare: 'bg-green-50 dark:bg-green-950/10',
  education: 'bg-purple-50 dark:bg-purple-950/10'
};

const DashboardLayout = ({ children, title, subtitle, industry }: DashboardLayoutProps) => {
  const isPageLoaded = usePageTransition();

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-950 transition-opacity duration-500 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      <div className={`${industryBg[industry]} pt-24 pb-12 bg-gradient-to-b ${industryColors[industry]}`}>
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
          {subtitle && (
            <p className="text-gray-600 dark:text-gray-300 mb-6">{subtitle}</p>
          )}
        </div>
      </div>
      <div className="container mx-auto px-6 py-12">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
