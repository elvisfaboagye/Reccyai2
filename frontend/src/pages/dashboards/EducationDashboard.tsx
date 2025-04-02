
import { useState, useEffect } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import DashboardCard from '@/components/DashboardCard';
import { BarChart, LineChart, PieChart } from '@/components/ui/chart';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, BookOpen, LineChart as LineChartIcon, Users } from 'lucide-react';
import { useScrollToTop } from '@/utils/animations';

const EducationDashboard = () => {
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
      title="Education Dashboard" 
      subtitle="Track learning engagement and outcomes"
      industry="education"
    >
      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* KPI Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <DashboardCard title="Course Completion" className="bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/20 dark:to-gray-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">78%</p>
                  <p className="text-green-500 text-sm">+16% from last semester</p>
                </div>
                <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/20">
                  <GraduationCap className="h-6 w-6 text-purple-500" />
                </div>
              </div>
            </DashboardCard>
            
            <DashboardCard title="Learning Material Usage" className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-gray-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">84%</p>
                  <p className="text-green-500 text-sm">+22% from last semester</p>
                </div>
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/20">
                  <BookOpen className="h-6 w-6 text-reccy-blue" />
                </div>
              </div>
            </DashboardCard>
            
            <DashboardCard title="Avg. Score Improvement" className="bg-gradient-to-br from-green-50 to-white dark:from-green-950/20 dark:to-gray-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">+24%</p>
                  <p className="text-green-500 text-sm">+8% from last year</p>
                </div>
                <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/20">
                  <LineChartIcon className="h-6 w-6 text-green-500" />
                </div>
              </div>
            </DashboardCard>
            
            <DashboardCard title="Student Satisfaction" className="bg-gradient-to-br from-orange-50 to-white dark:from-orange-950/20 dark:to-gray-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">92%</p>
                  <p className="text-green-500 text-sm">+8% from last semester</p>
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
              title="Learning Progress" 
              description="Course completions over time"
              isLoading={isLoading}
            >
              <LineChart 
                className="w-full h-64"
                data={[
                  { date: 'Jan', value: 52 },
                  { date: 'Feb', value: 58 },
                  { date: 'Mar', value: 64 },
                  { date: 'Apr', value: 68 },
                  { date: 'May', value: 72 },
                  { date: 'Jun', value: 78 }
                ]}
                index="date"
                categories={["value"]}
                valueFormatter={(value) => `${value}%`}
                showLegend={false}
                colors={["#8b5cf6"]}
              />
            </DashboardCard>
            
            <DashboardCard 
              title="Course Enrollment by Category" 
              description="Distribution across subjects"
              isLoading={isLoading}
            >
              <PieChart 
                className="w-full h-64"
                data={[
                  { name: 'Technology', value: 34 },
                  { name: 'Business', value: 28 },
                  { name: 'Science', value: 18 },
                  { name: 'Arts', value: 12 },
                  { name: 'Language', value: 8 }
                ]}
                index="name"
                categories={["value"]}
                valueFormatter={(value) => `${value}%`}
                colors={["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#ef4444"]}
              />
            </DashboardCard>
          </div>
          
          <DashboardCard 
            title="Content Engagement by Format" 
            description="Performance of different content types"
            isLoading={isLoading}
          >
            <BarChart 
              className="w-full h-64"
              data={[
                { category: 'Video Lessons', engaged: 86, completed: 72 },
                { category: 'Interactive Quizzes', engaged: 78, completed: 74 },
                { category: 'Reading Materials', engaged: 64, completed: 58 },
                { category: 'Discussion Boards', engaged: 52, completed: 48 }
              ]}
              index="category"
              categories={["engaged", "completed"]}
              colors={["#3b82f6", "#10b981"]}
              valueFormatter={(value) => `${value}%`}
            />
          </DashboardCard>
        </TabsContent>

        <TabsContent value="courses" className="space-y-4">
          <DashboardCard title="Top Performing Courses" isLoading={isLoading}>
            <div className="space-y-4">
              {!isLoading && [
                { name: "Introduction to Data Science", category: "Technology", enrollment: 3420, completion: 84 },
                { name: "Business Management Essentials", category: "Business", enrollment: 2890, completion: 78 },
                { name: "Web Development Masterclass", category: "Technology", enrollment: 2640, completion: 72 },
                { name: "Digital Marketing Strategy", category: "Business", enrollment: 2180, completion: 80 },
                { name: "Physics: Understanding the Universe", category: "Science", enrollment: 1950, completion: 76 }
              ].map((course, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-100 dark:border-gray-800 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-100 dark:bg-gray-800 h-10 w-10 rounded-md flex items-center justify-center">
                      <span className="text-lg font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium">{course.name}</p>
                      <p className="text-sm text-gray-500">{course.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{course.enrollment.toLocaleString()} enrolled</p>
                    <p className="text-sm text-green-500">{course.completion}% completion</p>
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>
        </TabsContent>

        <TabsContent value="students" className="space-y-4">
          <DashboardCard title="Student Demographics" isLoading={isLoading}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PieChart 
                className="w-full h-64"
                data={[
                  { name: '18-24', value: 35 },
                  { name: '25-34', value: 42 },
                  { name: '35-44', value: 15 },
                  { name: '45+', value: 8 }
                ]}
                index="name"
                categories={["value"]}
                valueFormatter={(value) => `${value}%`}
                colors={["#3b82f6", "#10b981", "#f59e0b", "#ef4444"]}
              />
              <BarChart 
                className="w-full h-64"
                data={[
                  { category: 'Full-time', value: 52 },
                  { category: 'Part-time', value: 32 },
                  { category: 'Professional', value: 12 },
                  { category: 'Other', value: 4 }
                ]}
                index="category"
                categories={["value"]}
                valueFormatter={(value) => `${value}%`}
                colors={["#8b5cf6"]}
              />
            </div>
          </DashboardCard>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default EducationDashboard;
