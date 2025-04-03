import { useState, useEffect } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import DashboardCard from '@/components/DashboardCard';
import { BarChart, LineChart, PieChart } from '@/components/ui/chart';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Film, Clock, Users, TrendingUp, UserCircle } from 'lucide-react';
import { useScrollToTop } from '@/utils/animations';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const MediaDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('daily');
  
  // Scroll to top when component mounts
  useScrollToTop();

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  // Time-based analytics data
  const getTimeBasedData = (range: string) => {
    switch (range) {
      case 'daily':
        return [
          { date: 'Mon', value: 48 },
          { date: 'Tue', value: 52 },
          { date: 'Wed', value: 55 },
          { date: 'Thu', value: 58 },
          { date: 'Fri', value: 62 },
          { date: 'Sat', value: 60 },
          { date: 'Sun', value: 62 }
        ];
      case 'weekly':
        return [
          { date: 'Week 1', value: 52 },
          { date: 'Week 2', value: 55 },
          { date: 'Week 3', value: 58 },
          { date: 'Week 4', value: 62 }
        ];
      case 'monthly':
        return [
          { date: 'Jan', value: 48 },
          { date: 'Feb', value: 52 },
          { date: 'Mar', value: 55 },
          { date: 'Apr', value: 58 },
          { date: 'May', value: 62 },
          { date: 'Jun', value: 60 }
        ];
      default:
        return [];
    }
  };

  return (
    <DashboardLayout 
      title="Media & Entertainment Dashboard" 
      subtitle="Track content performance and viewer engagement"
      industry="media"
    >
      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="viewers">Viewers</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* KPI Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <DashboardCard title="Avg. Watch Time" className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-gray-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">62 min</p>
                  <p className="text-green-500 text-sm">+18% from last month</p>
                </div>
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/20">
                  <Clock className="h-6 w-6 text-reccy-blue" />
                </div>
              </div>
            </DashboardCard>
            
            <DashboardCard title="Content Discovery" className="bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/20 dark:to-gray-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">68%</p>
                  <p className="text-green-500 text-sm">+12.5% from last month</p>
                </div>
                <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/20">
                  <Film className="h-6 w-6 text-purple-500" />
                </div>
              </div>
            </DashboardCard>
            
            <DashboardCard title="Daily Plays" className="bg-gradient-to-br from-green-50 to-white dark:from-green-950/20 dark:to-gray-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">2,842</p>
                  <p className="text-green-500 text-sm">+253 from yesterday</p>
                </div>
                <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/20">
                  <Play className="h-6 w-6 text-green-500" />
                </div>
              </div>
            </DashboardCard>
            
            <DashboardCard title="Subscriber Retention" className="bg-gradient-to-br from-orange-50 to-white dark:from-orange-950/20 dark:to-gray-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">92%</p>
                  <p className="text-green-500 text-sm">+5.2% from last month</p>
                </div>
                <div className="p-3 rounded-full bg-orange-100 dark:bg-orange-900/20">
                  <Users className="h-6 w-6 text-orange-500" />
                </div>
              </div>
            </DashboardCard>
          </div>
          
          {/* Time-based Analytics */}
          <DashboardCard 
            title="Analytics Overview" 
            description="Track performance metrics over time"
            isLoading={isLoading}
          >
            <div className="mb-4 flex justify-end">
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select time range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <LineChart 
              className="w-full h-64"
              data={getTimeBasedData(timeRange)}
              index="date"
              categories={["value"]}
              valueFormatter={(value) => `${value} mins`}
              showLegend={false}
              colors={["#3b82f6"]}
            />
          </DashboardCard>
          
          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DashboardCard 
              title="Engagement Trends" 
              description="Watch time over past 30 days"
              isLoading={isLoading}
            >
              <LineChart 
                className="w-full h-64"
                data={[
                  { date: '01/06', value: 48 },
                  { date: '05/06', value: 52 },
                  { date: '10/06', value: 55 },
                  { date: '15/06', value: 58 },
                  { date: '20/06', value: 62 },
                  { date: '25/06', value: 60 },
                  { date: '30/06', value: 62 }
                ]}
                index="date"
                categories={["value"]}
                valueFormatter={(value) => `${value} mins`}
                showLegend={false}
                colors={["#3b82f6"]}
              />
            </DashboardCard>
            
            <DashboardCard 
              title="Content Discovery by Genre" 
              description="Distribution across genres"
              isLoading={isLoading}
            >
              <PieChart 
                className="w-full h-64"
                data={[
                  { name: 'Drama', value: 28 },
                  { name: 'Comedy', value: 22 },
                  { name: 'Action', value: 18 },
                  { name: 'Documentary', value: 12 },
                  { name: 'Sci-Fi', value: 10 },
                  { name: 'Other', value: 10 }
                ]}
                index="name"
                categories={["value"]}
                valueFormatter={(value) => `${value}%`}
                colors={["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#6b7280"]}
              />
            </DashboardCard>
          </div>
          
          <DashboardCard 
            title="Content Engagement by Type" 
            description="Engagement with recommendation types"
            isLoading={isLoading}
          >
            <BarChart 
              className="w-full h-64"
              data={[
                { category: 'Featured', clicked: 64, watched: 42 },
                { category: 'Because You Watched', clicked: 78, watched: 65 },
                { category: 'Top Picks', clicked: 72, watched: 58 },
                { category: 'Trending Now', clicked: 68, watched: 45 }
              ]}
              index="category"
              categories={["clicked", "watched"]}
              colors={["#3b82f6", "#10b981"]}
              valueFormatter={(value) => `${value}%`}
            />
          </DashboardCard>
        </TabsContent>

        <TabsContent value="content" className="space-y-4">
          <DashboardCard title="Top Performing Content" isLoading={isLoading}>
            <div className="space-y-4">
              {!isLoading && [
                { name: "The Last Journey", genre: "Drama", views: 28560, completion: 86 },
                { name: "Laugh Factory", genre: "Comedy", views: 24320, completion: 92 },
                { name: "City Warriors", genre: "Action", views: 18750, completion: 78 },
                { name: "Ocean Depths", genre: "Documentary", views: 15420, completion: 94 },
                { name: "Beyond Stars", genre: "Sci-Fi", views: 12840, completion: 82 }
              ].map((content, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-100 dark:border-gray-800 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-100 dark:bg-gray-800 h-10 w-10 rounded-md flex items-center justify-center">
                      <span className="text-lg font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium">{content.name}</p>
                      <p className="text-sm text-gray-500">{content.genre}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{content.views.toLocaleString()} views</p>
                    <p className="text-sm text-green-500">{content.completion}% completion</p>
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>
        </TabsContent>

        <TabsContent value="viewers" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DashboardCard 
              title="User Segments" 
              description="Distribution of user types"
              isLoading={isLoading}
            >
              <PieChart 
                className="w-full h-64"
                data={[
                  { name: 'Casual Viewers', value: 35 },
                  { name: 'Regular Subscribers', value: 45 },
                  { name: 'Power Users', value: 15 },
                  { name: 'Content Creators', value: 5 }
                ]}
                index="name"
                categories={["value"]}
                valueFormatter={(value) => `${value}%`}
                colors={["#3b82f6", "#10b981", "#f59e0b", "#ef4444"]}
              />
            </DashboardCard>

            <DashboardCard 
              title="User Growth" 
              description="Monthly user acquisition trend"
              isLoading={isLoading}
            >
              <BarChart 
                className="w-full h-64"
                data={[
                  { name: 'Jan', value: 1200 },
                  { name: 'Feb', value: 1500 },
                  { name: 'Mar', value: 1800 },
                  { name: 'Apr', value: 2200 },
                  { name: 'May', value: 2800 },
                  { name: 'Jun', value: 3200 }
                ]}
                index="name"
                categories={["value"]}
                valueFormatter={(value) => `${value.toLocaleString()}`}
                colors={["#10b981"]}
              />
            </DashboardCard>
          </div>

          <DashboardCard title="Viewer Demographics" isLoading={isLoading}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PieChart 
                className="w-full h-64"
                data={[
                  { name: '18-24', value: 20 },
                  { name: '25-34', value: 35 },
                  { name: '35-44', value: 25 },
                  { name: '45-54', value: 15 },
                  { name: '55+', value: 5 }
                ]}
                index="name"
                categories={["value"]}
                valueFormatter={(value) => `${value}%`}
                colors={["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"]}
              />
              <BarChart 
                className="w-full h-64"
                data={[
                  { category: 'Mobile', value: 42 },
                  { category: 'TV', value: 28 },
                  { category: 'Tablet', value: 18 },
                  { category: 'Desktop', value: 12 }
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

export default MediaDashboard;
