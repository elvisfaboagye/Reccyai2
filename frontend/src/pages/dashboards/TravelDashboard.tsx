
import { useState, useEffect } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import DashboardCard from '@/components/DashboardCard';
import { BarChart, LineChart, PieChart } from '@/components/ui/chart';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plane, Map, Globe, Users } from 'lucide-react';
import { useScrollToTop } from '@/utils/animations';

const TravelDashboard = () => {
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
      title="Travel & Hospitality Dashboard" 
      subtitle="Track booking performance and traveler recommendations"
      industry="travel"
    >
      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="destinations">Destinations</TabsTrigger>
          <TabsTrigger value="travelers">Travelers</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* KPI Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <DashboardCard title="Booking Conversion" className="bg-gradient-to-br from-teal-50 to-white dark:from-teal-950/20 dark:to-gray-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">9.2%</p>
                  <p className="text-green-500 text-sm">+2.4% from last month</p>
                </div>
                <div className="p-3 rounded-full bg-teal-100 dark:bg-teal-900/20">
                  <Plane className="h-6 w-6 text-teal-500" />
                </div>
              </div>
            </DashboardCard>
            
            <DashboardCard title="Destination Discovery" className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-gray-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">72%</p>
                  <p className="text-green-500 text-sm">+15% from last month</p>
                </div>
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/20">
                  <Map className="h-6 w-6 text-reccy-blue" />
                </div>
              </div>
            </DashboardCard>
            
            <DashboardCard title="Package Bookings" className="bg-gradient-to-br from-green-50 to-white dark:from-green-950/20 dark:to-gray-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">384</p>
                  <p className="text-green-500 text-sm">+45 from last week</p>
                </div>
                <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/20">
                  <Globe className="h-6 w-6 text-green-500" />
                </div>
              </div>
            </DashboardCard>
            
            <DashboardCard title="Repeat Travelers" className="bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/20 dark:to-gray-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">38%</p>
                  <p className="text-green-500 text-sm">+6.5% from last month</p>
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
              title="Booking Trends" 
              description="Reservations over past 30 days"
              isLoading={isLoading}
            >
              <LineChart 
                className="w-full h-64"
                data={[
                  { date: '01/06', value: 120 },
                  { date: '05/06', value: 145 },
                  { date: '10/06', value: 135 },
                  { date: '15/06', value: 160 },
                  { date: '20/06', value: 178 },
                  { date: '25/06', value: 185 },
                  { date: '30/06', value: 192 }
                ]}
                index="date"
                categories={["value"]}
                valueFormatter={(value) => `${value}`}
                showLegend={false}
                colors={["#0d9488"]}
              />
            </DashboardCard>
            
            <DashboardCard 
              title="Revenue by Travel Category" 
              description="Distribution across categories"
              isLoading={isLoading}
            >
              <PieChart 
                className="w-full h-64"
                data={[
                  { name: 'Flights', value: 35 },
                  { name: 'Hotels', value: 28 },
                  { name: 'Packages', value: 18 },
                  { name: 'Activities', value: 12 },
                  { name: 'Other', value: 7 }
                ]}
                index="name"
                categories={["value"]}
                valueFormatter={(value) => `${value}%`}
                colors={["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#6b7280"]}
              />
            </DashboardCard>
          </div>
          
          <DashboardCard 
            title="Recommendation Engagement by Placement" 
            description="Conversion by recommendation location"
            isLoading={isLoading}
          >
            <BarChart 
              className="w-full h-64"
              data={[
                { category: 'Homepage', clicked: 58, booked: 32 },
                { category: 'Destination Page', clicked: 72, booked: 48 },
                { category: 'Search Results', clicked: 65, booked: 42 },
                { category: 'Post-Booking', clicked: 49, booked: 28 }
              ]}
              index="category"
              categories={["clicked", "booked"]}
              colors={["#3b82f6", "#10b981"]}
              valueFormatter={(value) => `${value}%`}
            />
          </DashboardCard>
        </TabsContent>

        <TabsContent value="destinations" className="space-y-4">
          <DashboardCard title="Top Trending Destinations" isLoading={isLoading}>
            <div className="space-y-4">
              {!isLoading && [
                { name: "Bali, Indonesia", type: "Beach", bookings: 456, increase: 34 },
                { name: "Tokyo, Japan", type: "City", bookings: 412, increase: 28 },
                { name: "Barcelona, Spain", type: "Culture", bookings: 378, increase: 22 },
                { name: "Swiss Alps", type: "Mountains", bookings: 345, increase: 18 },
                { name: "Cancun, Mexico", type: "Resort", bookings: 312, increase: 15 }
              ].map((destination, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-100 dark:border-gray-800 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-100 dark:bg-gray-800 h-10 w-10 rounded-md flex items-center justify-center">
                      <span className="text-lg font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium">{destination.name}</p>
                      <p className="text-sm text-gray-500">{destination.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{destination.bookings} bookings</p>
                    <p className="text-sm text-green-500">+{destination.increase}% growth</p>
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>
        </TabsContent>

        <TabsContent value="travelers" className="space-y-4">
          <DashboardCard title="Traveler Demographics" isLoading={isLoading}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PieChart 
                className="w-full h-64"
                data={[
                  { name: '18-24', value: 12 },
                  { name: '25-34', value: 35 },
                  { name: '35-44', value: 30 },
                  { name: '45-54', value: 15 },
                  { name: '55+', value: 8 }
                ]}
                index="name"
                categories={["value"]}
                valueFormatter={(value) => `${value}%`}
                colors={["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"]}
              />
              <BarChart 
                className="w-full h-64"
                data={[
                  { category: 'Solo', value: 32 },
                  { category: 'Couples', value: 28 },
                  { category: 'Family', value: 24 },
                  { category: 'Group', value: 16 }
                ]}
                index="category"
                categories={["value"]}
                valueFormatter={(value) => `${value}%`}
                colors={["#0d9488"]}
              />
            </div>
          </DashboardCard>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default TravelDashboard;
