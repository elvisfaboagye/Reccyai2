
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Solutions from "./pages/Solutions";
import Clients from "./pages/Clients";
import Resources from "./pages/Resources";
import Company from "./pages/Company";
import Pricing from "./pages/Pricing";
import StartFreeTrial from "./pages/StartFreeTrial";
import WatchDemo from "./pages/WatchDemo";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Cookies from "./pages/Cookies";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import Careers from "./pages/Careers";
import PressKit from "./pages/PressKit";
import Blog from "./pages/Blog";
import Documentation from "./pages/Documentation";
import ApiReference from "./pages/ApiReference";
import Sdks from "./pages/Sdks";
import EcommerceSolution from "./pages/solutions/EcommerceSolution";
import MediaSolution from "./pages/solutions/MediaSolution";
import TravelSolution from "./pages/solutions/TravelSolution";
import FinanceSolution from "./pages/solutions/FinanceSolution";
import HealthcareSolution from "./pages/solutions/HealthcareSolution";
import EducationSolution from "./pages/solutions/EducationSolution";

// Import dashboard pages
import EcommerceDashboard from "./pages/dashboards/EcommerceDashboard";
import MediaDashboard from "./pages/dashboards/MediaDashboard";
import TravelDashboard from "./pages/dashboards/TravelDashboard";
import FinanceDashboard from "./pages/dashboards/FinanceDashboard";
import HealthcareDashboard from "./pages/dashboards/HealthcareDashboard";
import EducationDashboard from "./pages/dashboards/EducationDashboard";

// Import new pages
import SignIn from "./pages/SignIn";
import UserDashboard from "./pages/UserDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/company" element={<Company />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/start-free-trial" element={<StartFreeTrial />} />
          <Route path="/watch-demo" element={<WatchDemo />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press-kit" element={<PressKit />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/api-reference" element={<ApiReference />} />
          <Route path="/sdks" element={<Sdks />} />
          <Route path="/solutions/ecommerce" element={<EcommerceSolution />} />
          <Route path="/solutions/media-entertainment" element={<MediaSolution />} />
          <Route path="/solutions/travel" element={<TravelSolution />} />
          <Route path="/solutions/finance" element={<FinanceSolution />} />
          <Route path="/solutions/healthcare" element={<HealthcareSolution />} />
          <Route path="/solutions/education" element={<EducationSolution />} />
          
          {/* Dashboard routes */}
          <Route path="/dashboards/ecommerce" element={<EcommerceDashboard />} />
          <Route path="/dashboards/media" element={<MediaDashboard />} />
          <Route path="/dashboards/travel" element={<TravelDashboard />} />
          <Route path="/dashboards/finance" element={<FinanceDashboard />} />
          <Route path="/dashboards/healthcare" element={<HealthcareDashboard />} />
          <Route path="/dashboards/education" element={<EducationDashboard />} />
          
          {/* New routes */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
