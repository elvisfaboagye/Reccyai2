
import { useState, useEffect } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import DashboardCard from '@/components/DashboardCard';
import { BarChart, LineChart, PieChart } from '@/components/ui/chart';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, DollarSign, TrendingUp, Users } from 'lucide-react';
import { useScrollToTop } from '@/utils/animations';

const EcommerceDashboard = () => {
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
      title="E-commerce Dashboard" 
      subtitle="Monitor your store performance and customer activity"
      industry="ecommerce"
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
            <DashboardCard title="Today's Sales" className="bg-gradient-to-br from-orange-50 to-white dark:from-orange-950/20 dark:to-gray-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">$2,584</p>
                  <p className="text-green-500 text-sm">+12.5% from yesterday</p>
                </div>
                <div className="p-3 rounded-full bg-orange-100 dark:bg-orange-900/20">
                  <DollarSign className="h-6 w-6 text-orange-500" />
                </div>
              </div>
            </DashboardCard>
            
            <DashboardCard title="Conversion Rate" className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-gray-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">7.8%</p>
                  <p className="text-green-500 text-sm">+2.3% from last week</p>
                </div>
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/20">
                  <TrendingUp className="h-6 w-6 text-reccy-blue" />
                </div>
              </div>
            </DashboardCard>
            
            <DashboardCard title="Orders" className="bg-gradient-to-br from-green-50 to-white dark:from-green-950/20 dark:to-gray-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">56</p>
                  <p className="text-green-500 text-sm">+8 from yesterday</p>
                </div>
                <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/20">
                  <ShoppingCart className="h-6 w-6 text-green-500" />
                </div>
              </div>
            </DashboardCard>
            
            <DashboardCard title="Active Customers" className="bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/20 dark:to-gray-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">248</p>
                  <p className="text-green-500 text-sm">+18 new today</p>
                </div>
                <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/20">
                  <Users className="h-6 w-6 text-purple-500" />
                </div>
              </div>
            </DashboardCard>
          </div>
          
          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DashboardCard 
              title="Revenue Over Time" 
              description="Last 30 days sales performance"
              isLoading={isLoading}
            >
              <LineChart 
                className="w-full h-64"
                data={[
                  { date: '01/06', value: 1200 },
                  { date: '05/06', value: 1800 },
                  { date: '10/06', value: 1600 },
                  { date: '15/06', value: 2200 },
                  { date: '20/06', value: 1800 },
                  { date: '25/06', value: 2400 },
                  { date: '30/06', value: 2800 }
                ]}
                index="date"
                categories={["value"]}
                valueFormatter={(value) => `$${value}`}
                showLegend={false}
                colors={["#3b82f6"]}
              />
            </DashboardCard>
            
            <DashboardCard 
              title="Sales by Product Category" 
              description="Distribution across categories"
              isLoading={isLoading}
            >
              <PieChart 
                className="w-full h-64"
                data={[
                  { name: 'Electronics', value: 42 },
                  { name: 'Clothing', value: 28 },
                  { name: 'Home & Kitchen', value: 18 },
                  { name: 'Books', value: 12 }
                ]}
                index="name"
                categories={["value"]}
                valueFormatter={(value) => `${value}%`}
                colors={["#3b82f6", "#10b981", "#f59e0b", "#ef4444"]}
              />
            </DashboardCard>
          </div>
          
          <DashboardCard 
            title="Recommendation Performance" 
            description="Engagement with recommendation types"
            isLoading={isLoading}
          >
            <BarChart 
              className="w-full h-64"
              data={[
                { category: 'Homepage', clicks: 68, purchases: 24 },
                { category: 'Product Page', clicks: 85, purchases: 42 },
                { category: 'Cart', clicks: 74, purchases: 38 },
                { category: 'Post-Purchase', clicks: 45, purchases: 21 }
              ]}
              index="category"
              categories={["clicks", "purchases"]}
              colors={["#3b82f6", "#10b981"]}
              valueFormatter={(value) => `${value}%`}
            />
          </DashboardCard>
        </TabsContent>

        <TabsContent value="products" className="space-y-4">
          <DashboardCard title="Top Selling Products" isLoading={isLoading}>
            <div className="space-y-4">
              {!isLoading && [
                { name: "Wireless Earbuds", sales: 156, revenue: 4680 },
                { name: "Smart Watch", sales: 132, revenue: 13200 },
                { name: "Bluetooth Speaker", sales: 97, revenue: 4850 },
                { name: "Laptop Sleeve", sales: 89, revenue: 1780 },
                { name: "Phone Charger", sales: 76, revenue: 1140 }
              ].map((product, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-100 dark:border-gray-800 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-100 dark:bg-gray-800 h-10 w-10 rounded-md flex items-center justify-center">
                      <span className="text-lg font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-gray-500">{product.sales} units sold</p>
                    </div>
                  </div>
                  <p className="font-medium">${product.revenue}</p>
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
                  { name: '18-24', value: 15 },
                  { name: '25-34', value: 32 },
                  { name: '35-44', value: 28 },
                  { name: '45-54', value: 18 },
                  { name: '55+', value: 7 }
                ]}
                index="name"
                categories={["value"]}
                valueFormatter={(value) => `${value}%`}
                colors={["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"]}
              />
              <BarChart 
                className="w-full h-64"
                data={[
                  { category: 'Direct', value: 38 },
                  { category: 'Social', value: 24 },
                  { category: 'Email', value: 18 },
                  { category: 'Referral', value: 12 },
                  { category: 'Other', value: 8 }
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

export default EcommerceDashboard;
