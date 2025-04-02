
import { useState, useEffect } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import DashboardCard from '@/components/DashboardCard';
import { BarChart, LineChart, PieChart } from '@/components/ui/chart';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Heart, BookOpen, Users } from 'lucide-react';
import { useScrollToTop } from '@/utils/animations';

const HealthcareDashboard = () => {
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
      title="Healthcare Dashboard" 
      subtitle="Track patient engagement and health outcomes"
      industry="healthcare"
    >
      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="programs">Programs</TabsTrigger>
          <TabsTrigger value="patients">Patients</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* KPI Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <DashboardCard title="Patient Engagement" className="bg-gradient-to-br from-green-50 to-white dark:from-green-950/20 dark:to-gray-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">68%</p>
                  <p className="text-green-500 text-sm">+12% from last quarter</p>
                </div>
                <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/20">
                  <Heart className="h-6 w-6 text-green-500" />
                </div>
              </div>
            </DashboardCard>
            
            <DashboardCard title="Program Completion" className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-gray-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">72%</p>
                  <p className="text-green-500 text-sm">+15% from last quarter</p>
                </div>
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/20">
                  <Activity className="h-6 w-6 text-reccy-blue" />
                </div>
              </div>
            </DashboardCard>
            
            <DashboardCard title="Content Consumed" className="bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/20 dark:to-gray-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">14.8k</p>
                  <p className="text-green-500 text-sm">+2.3k from last month</p>
                </div>
                <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/20">
                  <BookOpen className="h-6 w-6 text-purple-500" />
                </div>
              </div>
            </DashboardCard>
            
            <DashboardCard title="Patient Satisfaction" className="bg-gradient-to-br from-orange-50 to-white dark:from-orange-950/20 dark:to-gray-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">92%</p>
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
              title="Engagement Trends" 
              description="Patient involvement over time"
              isLoading={isLoading}
            >
              <LineChart 
                className="w-full h-64"
                data={[
                  { date: 'Q1 22', value: 48 },
                  { date: 'Q2 22', value: 54 },
                  { date: 'Q3 22', value: 58 },
                  { date: 'Q4 22', value: 62 },
                  { date: 'Q1 23', value: 68 }
                ]}
                index="date"
                categories={["value"]}
                valueFormatter={(value) => `${value}%`}
                showLegend={false}
                colors={["#16a34a"]}
              />
            </DashboardCard>
            
            <DashboardCard 
              title="Program Adoption by Health Category" 
              description="Distribution across health programs"
              isLoading={isLoading}
            >
              <PieChart 
                className="w-full h-64"
                data={[
                  { name: 'Nutrition', value: 32 },
                  { name: 'Fitness', value: 28 },
                  { name: 'Mental Health', value: 22 },
                  { name: 'Sleep', value: 12 },
                  { name: 'Other', value: 6 }
                ]}
                index="name"
                categories={["value"]}
                valueFormatter={(value) => `${value}%`}
                colors={["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#6b7280"]}
              />
            </DashboardCard>
          </div>
          
          <DashboardCard 
            title="Content Engagement by Type" 
            description="Engagement with different content formats"
            isLoading={isLoading}
          >
            <BarChart 
              className="w-full h-64"
              data={[
                { category: 'Articles', clicked: 72, completed: 58 },
                { category: 'Videos', clicked: 68, completed: 62 },
                { category: 'Wellness Programs', clicked: 54, completed: 48 },
                { category: 'Podcasts', clicked: 42, completed: 36 }
              ]}
              index="category"
              categories={["clicked", "completed"]}
              colors={["#3b82f6", "#10b981"]}
              valueFormatter={(value) => `${value}%`}
            />
          </DashboardCard>
        </TabsContent>

        <TabsContent value="programs" className="space-y-4">
          <DashboardCard title="Top Health Programs" isLoading={isLoading}>
            <div className="space-y-4">
              {!isLoading && [
                { name: "30-Day Wellness Challenge", category: "Fitness", enrollment: 2450, completion: 78 },
                { name: "Mindfulness Meditation", category: "Mental Health", enrollment: 1890, completion: 84 },
                { name: "Balanced Nutrition Plan", category: "Nutrition", enrollment: 1720, completion: 72 },
                { name: "Sleep Improvement Course", category: "Sleep", enrollment: 1280, completion: 68 },
                { name: "Stress Management", category: "Mental Health", enrollment: 1150, completion: 76 }
              ].map((program, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-100 dark:border-gray-800 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-100 dark:bg-gray-800 h-10 w-10 rounded-md flex items-center justify-center">
                      <span className="text-lg font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium">{program.name}</p>
                      <p className="text-sm text-gray-500">{program.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{program.enrollment.toLocaleString()} enrolled</p>
                    <p className="text-sm text-green-500">{program.completion}% completion</p>
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>
        </TabsContent>

        <TabsContent value="patients" className="space-y-4">
          <DashboardCard title="Patient Demographics" isLoading={isLoading}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PieChart 
                className="w-full h-64"
                data={[
                  { name: '18-30', value: 18 },
                  { name: '31-45', value: 32 },
                  { name: '46-60', value: 30 },
                  { name: '61+', value: 20 }
                ]}
                index="name"
                categories={["value"]}
                valueFormatter={(value) => `${value}%`}
                colors={["#3b82f6", "#10b981", "#f59e0b", "#ef4444"]}
              />
              <BarChart 
                className="w-full h-64"
                data={[
                  { category: 'Preventive', value: 45 },
                  { category: 'Active Treatment', value: 28 },
                  { category: 'Chronic Management', value: 18 },
                  { category: 'Post-Care', value: 9 }
                ]}
                index="category"
                categories={["value"]}
                valueFormatter={(value) => `${value}%`}
                colors={["#16a34a"]}
              />
            </div>
          </DashboardCard>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default HealthcareDashboard;
