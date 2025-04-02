
import { useState, useEffect } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import DashboardCard from '@/components/DashboardCard';
import { BarChart, LineChart, PieChart } from '@/components/ui/chart';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, DollarSign, BarChart3, Users } from 'lucide-react';
import { useScrollToTop } from '@/utils/animations';

const FinanceDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Scroll to top when component mounts
  useScrollToTop();

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <DashboardLayout 
      title="Finance & Banking Dashboard" 
      subtitle="Monitor financial products and customer engagement"
      industry="finance"
    >
      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* KPI Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <DashboardCard title="Product Adoption" className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-gray-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">28%</p>
                  <p className="text-green-500 text-sm">+5.2% from last quarter</p>
                </div>
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/20">
                  <CreditCard className="h-6 w-6 text-reccy-blue" />
                </div>
              </div>
            </DashboardCard>
            
            <DashboardCard title="Revenue per Customer" className="bg-gradient-to-br from-green-50 to-white dark:from-green-950/20 dark:to-gray-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">$842</p>
                  <p className="text-green-500 text-sm">+12% from last quarter</p>
                </div>
                <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/20">
                  <DollarSign className="h-6 w-6 text-green-500" />
                </div>
              </div>
            </DashboardCard>
            
            <DashboardCard title="Active Accounts" className="bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/20 dark:to-gray-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">4,286</p>
                  <p className="text-green-500 text-sm">+342 new this month</p>
                </div>
                <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/20">
                  <BarChart3 className="h-6 w-6 text-purple-500" />
                </div>
              </div>
            </DashboardCard>
            
            <DashboardCard title="Customer Satisfaction" className="bg-gradient-to-br from-orange-50 to-white dark:from-orange-950/20 dark:to-gray-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">87%</p>
                  <p className="text-green-500 text-sm">+4.5% from last quarter</p>
                </div>
                <div className="p-3 rounded-full bg-orange-100 dark:bg-orange-900/20">
                  <Users className="h-6 w-6 text-orange-500" />
                </div>
              </div>
            </DashboardCard>
          </div>
          
          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DashboardCard 
              title="Revenue Growth" 
              description="Last 6 month performance"
              isLoading={isLoading}
            >
              <LineChart 
                className="w-full h-64"
                data={[
                  { date: 'Jan', value: 620 },
                  { date: 'Feb', value: 680 },
                  { date: 'Mar', value: 720 },
                  { date: 'Apr', value: 780 },
                  { date: 'May', value: 810 },
                  { date: 'Jun', value: 842 }
                ]}
                index="date"
                categories={["value"]}
                valueFormatter={(value) => `$${value}`}
                showLegend={false}
                colors={["#3b82f6"]}
              />
            </DashboardCard>
            
            <DashboardCard 
              title="Product Adoption by Category" 
              description="Distribution across product types"
              isLoading={isLoading}
            >
              <PieChart 
                className="w-full h-64"
                data={[
                  { name: 'Credit Cards', value: 32 },
                  { name: 'Savings Accounts', value: 24 },
                  { name: 'Investments', value: 18 },
                  { name: 'Loans', value: 16 },
                  { name: 'Insurance', value: 10 }
                ]}
                index="name"
                categories={["value"]}
                valueFormatter={(value) => `${value}%`}
                colors={["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"]}
              />
            </DashboardCard>
          </div>
          
          <DashboardCard 
            title="Recommendation Engagement by Channel" 
            description="Conversion across touchpoints"
            isLoading={isLoading}
          >
            <BarChart 
              className="w-full h-64"
              data={[
                { category: 'Mobile App', clicked: 68, adopted: 34 },
                { category: 'Online Banking', clicked: 72, adopted: 38 },
                { category: 'Email', clicked: 48, adopted: 22 },
                { category: 'Branch Visit', clicked: 34, adopted: 28 }
              ]}
              index="category"
              categories={["clicked", "adopted"]}
              colors={["#3b82f6", "#10b981"]}
              valueFormatter={(value) => `${value}%`}
            />
          </DashboardCard>
        </TabsContent>

        <TabsContent value="products" className="space-y-4">
          <DashboardCard title="Top Performing Products" isLoading={isLoading}>
            <div className="space-y-4">
              {!isLoading && [
                { name: "Premium Rewards Card", type: "Credit Card", adoption: 38, revenue: 420000 },
                { name: "High-Yield Savings", type: "Account", adoption: 32, revenue: 285000 },
                { name: "Investment Portfolio Plus", type: "Investment", adoption: 28, revenue: 520000 },
                { name: "Home Mortgage Special", type: "Loan", adoption: 24, revenue: 680000 },
                { name: "Life Insurance Premium", type: "Insurance", adoption: 18, revenue: 340000 }
              ].map((product, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-100 dark:border-gray-800 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-100 dark:bg-gray-800 h-10 w-10 rounded-md flex items-center justify-center">
                      <span className="text-lg font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-gray-500">{product.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{product.adoption}% adoption</p>
                    <p className="text-sm text-green-500">${(product.revenue/1000).toFixed(0)}k revenue</p>
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>
        </TabsContent>

        <TabsContent value="customers" className="space-y-4">
          <DashboardCard title="Customer Demographics" isLoading={isLoading}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PieChart 
                className="w-full h-64"
                data={[
                  { name: '18-30', value: 22 },
                  { name: '31-45', value: 38 },
                  { name: '46-60', value: 25 },
                  { name: '61+', value: 15 }
                ]}
                index="name"
                categories={["value"]}
                valueFormatter={(value) => `${value}%`}
                colors={["#3b82f6", "#10b981", "#f59e0b", "#ef4444"]}
              />
              <BarChart 
                className="w-full h-64"
                data={[
                  { category: 'Low-Risk', value: 32 },
                  { category: 'Medium-Risk', value: 42 },
                  { category: 'High-Risk', value: 18 },
                  { category: 'Very High-Risk', value: 8 }
                ]}
                index="category"
                categories={["value"]}
                valueFormatter={(value) => `${value}%`}
                colors={["#3b82f6"]}
              />
            </div>
          </DashboardCard>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default FinanceDashboard;
