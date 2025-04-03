import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Activity, Box, Cpu, Database, BarChart3, Users, Settings, ChevronRight, 
  ArrowUpRight, Play, Film, Clock, TrendingUp, UserCircle, BarChart2, LineChart as LineChartIcon, PieChart as PieChartIcon, ShoppingCart, DollarSign, ShoppingBag
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { DashboardMetrics, type MetricData } from '@/components/dashboard/DashboardMetrics';
import { RecommendationEngineCard } from '@/components/dashboard/RecommendationEngineCard';
import { RecentActivity } from '@/components/dashboard/RecentActivity';
import { ApiIntegrationGuide } from '@/components/dashboard/ApiIntegrationGuide';
import { useToast } from '@/components/ui/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, LineChart, PieChart } from '@/components/ui/chart';

type UserData = {
  id: string;
  name: string;
  email: string;
  company?: string;
  role?: string;
  plan?: string;
};

// Update the ChartData interface
interface ChartData {
  name: string;
  value: number;
  date?: string;
}

const UserDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('daily');
  const [industry, setIndustry] = useState<string>('');
  
  // Mock data for metrics
  const [metrics, setMetrics] = useState<MetricData[]>([
    { 
      title: 'Total Recommendations',
      value: '24,896',
      change: 12.5,
      description: 'vs previous period',
      icon: <BarChart2 className="h-4 w-4" />
    },
    { 
      title: 'Conversion Rate',
      value: '4.8%',
      change: 2.1,
      description: 'vs previous period',
      icon: <ArrowUpRight className="h-4 w-4" />
    },
    { 
      title: 'CTR',
      value: '6.2%',
      change: -0.8,
      description: 'vs previous period',
      icon: <Activity className="h-4 w-4" />
    },
    { 
      title: 'Active Users',
      value: '1,258',
      change: 5.3,
      description: 'vs previous period',
      icon: <Users className="h-4 w-4" />
    }
  ]);

  const [engines] = useState([
    {
      engineName: "Product Recommendations",
      engineId: "prod-rec-01",
      status: "active" as const,
      items: 12584,
      interactions: 95472,
      lastSync: "Today at 9:43 AM"
    },
    {
      engineName: "Content Recommendations",
      engineId: "content-rec-01",
      status: "active" as const,
      items: 4389,
      interactions: 28945,
      lastSync: "Yesterday at 11:15 PM"
    },
    {
      engineName: "Email Campaign Engine",
      engineId: "email-rec-01",
      status: "inactive" as const,
      items: 153,
      interactions: 0,
      lastSync: "2 days ago"
    }
  ]);

  const [activities] = useState([
    {
      id: "act-1",
      type: "model" as const,
      description: "Model retraining completed successfully",
      timestamp: "10 minutes ago",
      status: "success" as const
    },
    {
      id: "act-2",
      type: "import" as const,
      description: "Data import from Product Catalog",
      timestamp: "1 hour ago",
      status: "success" as const,
      details: "5,120 items imported"
    },
    {
      id: "act-3",
      type: "recommendation" as const,
      description: "Algorithm update for 'Product Recommendations'",
      timestamp: "3 hours ago",
      status: "info" as const
    },
    {
      id: "act-4",
      type: "system" as const,
      description: "API rate limit exceeded",
      timestamp: "Yesterday",
      status: "warning" as const,
      details: "Consider upgrading your plan"
    },
    {
      id: "act-5",
      type: "interaction" as const,
      description: "Interaction tracking issues detected",
      timestamp: "2 days ago",
      status: "error" as const,
      details: "Error in JavaScript tracking code"
    }
  ]);

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('user');
    
    if (!storedUser) {
      navigate('/signin');
      return;
    }

    try {
      const parsedUser = JSON.parse(storedUser);
      setUserData(parsedUser);
      
      // Get industry from form data
      const formData = localStorage.getItem('formData');
      if (formData) {
        const { industry } = JSON.parse(formData);
        setIndustry(industry || 'General');
      }
      
      // Simulate loading data
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
      
    } catch (error) {
      console.error('Failed to parse user data', error);
      localStorage.removeItem('user');
      navigate('/signin');
    }
  }, [navigate]);

  const handleSignOut = () => {
    localStorage.removeItem('user');
    toast({
      title: "Signed out successfully",
      description: "You have been signed out of your account."
    });
    navigate('/signin');
  };

  const handleRefresh = () => {
    setIsLoading(true);
    
    // Simulate loading data
    setTimeout(() => {
      // Update some metrics to show changes
      const updatedMetrics = [...metrics];
      updatedMetrics[0].value = `${25000 + Math.floor(Math.random() * 1000)}`;
      updatedMetrics[1].value = `${(4.5 + Math.random() * 0.5).toFixed(1)}%`;
      
      setMetrics(updatedMetrics);
      setIsLoading(false);
      
      toast({
        title: "Dashboard refreshed",
        description: "Latest data has been loaded."
      });
    }, 1500);
  };

  const handleExport = () => {
    toast({
      title: "Exporting data",
      description: "Your data export is being prepared and will download shortly."
    });
    
    // Simulate export delay
    setTimeout(() => {
      toast({
        title: "Export complete",
        description: "Your data has been exported successfully."
      });
    }, 1500);
  };

  const handleTimeRangeChange = (range: string) => {
    setTimeRange(range);
    setIsLoading(true);
    
    // Simulate loading data for new time range
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Date range updated",
        description: `Dashboard showing data for: ${range}`
      });
    }, 1000);
  };

  const handleUpgradePlan = () => {
    navigate('/pricing');
  };

  // Time-based analytics data
  const getTimeBasedData = (range: string) => {
    switch (range) {
      case 'daily':
        return [
          { name: 'Mon', value: 48 },
          { name: 'Tue', value: 52 },
          { name: 'Wed', value: 55 },
          { name: 'Thu', value: 58 },
          { name: 'Fri', value: 62 },
          { name: 'Sat', value: 60 },
          { name: 'Sun', value: 62 }
        ];
      case 'weekly':
        return [
          { name: 'Week 1', value: 52 },
          { name: 'Week 2', value: 55 },
          { name: 'Week 3', value: 58 },
          { name: 'Week 4', value: 62 }
        ];
      case 'monthly':
        return [
          { name: 'Jan', value: 48 },
          { name: 'Feb', value: 52 },
          { name: 'Mar', value: 55 },
          { name: 'Apr', value: 58 },
          { name: 'May', value: 62 },
          { name: 'Jun', value: 60 }
        ];
      default:
        return [];
    }
  };

  const getIndustryMetrics = () => {
    switch (industry?.toLowerCase()) {
      case 'e-commerce':
        return {
          metrics: [
            {
              title: "Total Orders",
              value: "1,258",
              change: "+5.3%",
              description: "vs previous period",
              icon: ShoppingCart
            },
            {
              title: "Average Order Value",
              value: "$89.99",
              change: "+2.1%",
              description: "vs previous period",
              icon: DollarSign
            },
            {
              title: "Cart Abandonment",
              value: "68.2%",
              change: "-1.2%",
              description: "vs previous period",
              icon: ShoppingBag
            },
            {
              title: "Customer Lifetime Value",
              value: "$245.50",
              change: "+3.8%",
              description: "vs previous period",
              icon: Users
            }
          ],
          deviceLabels: {
            title: "Shopping Device Usage",
            description: "Platform preferences for purchases",
            categories: ['Smartphones', 'Desktop', 'Tablets', 'Smart TVs', 'Other Devices']
          },
          demographicLabels: {
            title: "Customer Demographics",
            description: "Age distribution of shoppers",
            categories: ['18-24', '25-34', '35-44', '45-54', '55+']
          },
          geographicLabels: {
            title: "Customer Locations",
            description: "Global distribution of shoppers",
            categories: ['North America', 'Europe', 'Asia Pacific', 'Latin America', 'Africa', 'Other']
          },
          densityLabels: {
            title: "Market Density",
            description: "Customer concentration by area",
            categories: ['Metropolitan', 'Urban', 'Suburban', 'Rural']
          }
        };
      case 'media':
        return {
          metrics: [
            {
              title: "Total Views",
              value: "2.5M",
              change: "+8.2%",
              description: "vs previous period",
              icon: Play
            },
            {
              title: "Average Watch Time",
              value: "4m 12s",
              change: "+1.5%",
              description: "vs previous period",
              icon: Clock
            },
            {
              title: "Engagement Rate",
              value: "6.2%",
              change: "+0.8%",
              description: "vs previous period",
              icon: TrendingUp
            },
            {
              title: "Subscriber Growth",
              value: "12.5K",
              change: "+15.3%",
              description: "vs previous period",
              icon: UserCircle
            }
          ],
          deviceLabels: {
            title: "Viewing Device Usage",
            description: "Platform preferences for content consumption",
            categories: ['Smartphones', 'Smart TVs', 'Tablets', 'Desktop', 'Other Devices']
          },
          demographicLabels: {
            title: "Viewer Demographics",
            description: "Age distribution of viewers",
            categories: ['18-24', '25-34', '35-44', '45-54', '55+']
          },
          geographicLabels: {
            title: "Viewer Locations",
            description: "Global distribution of viewers",
            categories: ['North America', 'Europe', 'Asia Pacific', 'Latin America', 'Africa', 'Other']
          },
          densityLabels: {
            title: "Viewer Density",
            description: "Viewer concentration by area",
            categories: ['Metropolitan', 'Urban', 'Suburban', 'Rural']
          }
        };
      default:
        return {
          metrics: [
            {
              title: "Total Recommendations",
              value: "1,258",
              change: "+5.3%",
              description: "vs previous period",
              icon: BarChart2
            },
            {
              title: "Conversion Rate",
              value: "6.2%",
              change: "+0.8%",
              description: "vs previous period",
              icon: LineChartIcon
            },
            {
              title: "CTR",
              value: "4.2%",
              change: "+0.5%",
              description: "vs previous period",
              icon: PieChartIcon
            },
            {
              title: "Active Users",
              value: "12.5K",
              change: "+15.3%",
              description: "vs previous period",
              icon: Users
            }
          ],
          deviceLabels: {
            title: "Device Usage",
            description: "Platform and device preferences",
            categories: ['Smartphones', 'Laptops', 'Tablets', 'Smart TVs', 'Other Devices']
          },
          demographicLabels: {
            title: "User Demographics",
            description: "Age and gender distribution",
            categories: ['18-24', '25-34', '35-44', '45-54', '55+']
          },
          geographicLabels: {
            title: "Geographic Distribution",
            description: "User locations and regions",
            categories: ['North America', 'Europe', 'Asia Pacific', 'Latin America', 'Africa', 'Other']
          },
          densityLabels: {
            title: "Population Density",
            description: "User concentration by area",
            categories: ['Metropolitan', 'Urban', 'Suburban', 'Rural']
          }
        };
    }
  };

  const industryData = getIndustryMetrics();

  if (!userData) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto py-4 px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Welcome back, {userData.name}
              </p>
            </div>
            <Button onClick={handleSignOut} variant="outline">Sign Out</Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8 px-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="border-b mb-6">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="overview" className="flex gap-2">
                <BarChart3 className="w-4 h-4" /> Overview
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex gap-2">
                <Activity className="w-4 h-4" /> Analytics
              </TabsTrigger>
              <TabsTrigger value="recommendations" className="flex gap-2">
                <Database className="w-4 h-4" /> Recommendations
              </TabsTrigger>
              <TabsTrigger value="api" className="flex gap-2">
                <Cpu className="w-4 h-4" /> API Integration
              </TabsTrigger>
              <TabsTrigger value="audience" className="flex gap-2">
                <Users className="w-4 h-4" /> Audience
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex gap-2">
                <Settings className="w-4 h-4" /> Settings
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="overview">
            <DashboardHeader
              title="Dashboard Overview" 
              subtitle={`${userData.plan || 'Free'} Plan - Organization: ${userData.company || 'Personal'}`}
              onRefresh={handleRefresh}
              onExport={handleExport}
              isLoading={isLoading}
              timeRanges={['Last 7 days', 'Last 30 days', 'Last 90 days', 'Year to date', 'All time']}
              selectedTimeRange={timeRange}
              onTimeRangeChange={handleTimeRangeChange}
            />
            
            <div className="space-y-6">
              <DashboardMetrics metrics={metrics} isLoading={isLoading} />
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Recommendation Performance</span>
                        <div className="flex items-center gap-2">
                          <Button 
                            variant={timeRange === 'daily' ? 'default' : 'ghost'} 
                            size="sm" 
                            className="text-xs"
                            onClick={() => setTimeRange('daily')}
                          >
                            Daily
                          </Button>
                          <Button 
                            variant={timeRange === 'weekly' ? 'default' : 'ghost'} 
                            size="sm" 
                            className="text-xs"
                            onClick={() => setTimeRange('weekly')}
                          >
                            Weekly
                          </Button>
                          <Button 
                            variant={timeRange === 'monthly' ? 'default' : 'ghost'} 
                            size="sm" 
                            className="text-xs"
                            onClick={() => setTimeRange('monthly')}
                          >
                            Monthly
                          </Button>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px]">
                        <LineChart 
                          data={getTimeBasedData(timeRange)}
                          index="name"
                          categories={["value"]}
                          valueFormatter={(value) => `${value}`}
                          showLegend={false}
                          colors={["#3b82f6"]}
                          className="w-full h-full"
                          showXAxis={true}
                          showYAxis={true}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>User Segments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <PieChart 
                        data={[
                          { name: 'Casual Users', value: 35 },
                          { name: 'Regular Users', value: 45 },
                          { name: 'Power Users', value: 15 },
                          { name: 'Enterprise', value: 5 }
                        ]}
                        index="name"
                        categories={["value"]}
                        valueFormatter={(value) => `${value}%`}
                        colors={["#3b82f6", "#10b981", "#f59e0b", "#ef4444"]}
                        className="w-full h-full"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>User Growth</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <BarChart 
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
                        className="w-full h-full"
                        showXAxis={true}
                        showYAxis={true}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Engagement by Type</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <BarChart 
                        data={[
                          { category: 'Product Views', clicked: 64, completed: 42 },
                          { category: 'Add to Cart', clicked: 78, completed: 65 },
                          { category: 'Purchases', clicked: 72, completed: 58 },
                          { category: 'Reviews', clicked: 68, completed: 45 }
                        ]}
                        index="category"
                        categories={["clicked", "completed"]}
                        colors={["#3b82f6", "#10b981"]}
                        valueFormatter={(value) => `${value}%`}
                        className="w-full h-full"
                        showXAxis={true}
                        showYAxis={true}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            {/* KPI Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-gray-900">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Avg. Watch Time</p>
                      <p className="text-3xl font-bold">62 min</p>
                      <p className="text-green-500 text-sm">+18% from last month</p>
                    </div>
                    <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/20">
                      <Clock className="h-6 w-6 text-blue-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/20 dark:to-gray-900">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Content Discovery</p>
                      <p className="text-3xl font-bold">68%</p>
                      <p className="text-green-500 text-sm">+12.5% from last month</p>
                    </div>
                    <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/20">
                      <Film className="h-6 w-6 text-purple-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-green-50 to-white dark:from-green-950/20 dark:to-gray-900">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Daily Plays</p>
                      <p className="text-3xl font-bold">2,842</p>
                      <p className="text-green-500 text-sm">+253 from yesterday</p>
                    </div>
                    <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/20">
                      <Play className="h-6 w-6 text-green-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-orange-50 to-white dark:from-orange-950/20 dark:to-gray-900">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Subscriber Retention</p>
                      <p className="text-3xl font-bold">92%</p>
                      <p className="text-green-500 text-sm">+5.2% from last month</p>
                    </div>
                    <div className="p-3 rounded-full bg-orange-100 dark:bg-orange-900/20">
                      <Users className="h-6 w-6 text-orange-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Time-based Analytics */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Analytics Overview</CardTitle>
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
              </CardHeader>
              <CardContent>
                <div className="w-full h-64">
                  <LineChart 
                    data={getTimeBasedData(timeRange)}
                    index="name"
                    categories={["value"]}
                    valueFormatter={(value) => `${value} mins`}
                    showLegend={false}
                    colors={["#3b82f6"]}
                    className="w-full h-full"
                    showXAxis={true}
                    showYAxis={true}
                  />
                </div>
              </CardContent>
            </Card>

            {/* User Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>User Segments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-64">
                    <PieChart 
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
                      className="w-full h-full"
                      showLegend={true}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-64">
                    <BarChart 
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
                      className="w-full h-full"
                      showLegend={true}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="recommendations">
            <DashboardHeader 
              title="Recommendation Engines"
              subtitle="Create and manage your AI recommendation engines"
              onRefresh={handleRefresh}
              isLoading={isLoading}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
              {engines.map((engine, i) => (
                <RecommendationEngineCard 
                  key={engine.engineId}
                  {...engine}
                  onViewDetails={() => {
                    toast({
                      title: "Viewing engine details",
                      description: `Opening details for ${engine.engineName}`
                    });
                  }}
                  onConfigure={() => {
                    toast({
                      title: "Configure engine",
                      description: `Opening configuration for ${engine.engineName}`
                    });
                  }}
                />
              ))}
              
              <Card className="border-dashed border-2 flex flex-col items-center justify-center p-6 text-center h-full">
                <Box className="w-12 h-12 text-gray-300 mb-4" />
                <h3 className="font-medium text-lg mb-2">Create New Engine</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                  Set up a new recommendation engine for your specific use case
                </p>
                <Button>
                  Create Engine <ChevronRight className="w-4 h-4" />
                </Button>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recommendation Types</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span>Product recommendations</span>
                      </div>
                      <span className="font-medium">65%</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span>Content recommendations</span>
                      </div>
                      <span className="font-medium">25%</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                        <span>Email campaign recommendations</span>
                      </div>
                      <span className="font-medium">8%</span>
                    </div>
                    <div className="flex justify-between items-center pb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span>Other</span>
                      </div>
                      <span className="font-medium">2%</span>
                    </div>
                  </div>
                  <div className="h-[200px] flex items-center justify-center mt-6">
                    <PieChartIcon className="w-12 h-12 text-gray-300 dark:text-gray-700" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Blue Denim Jacket</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">SKU: JK-3821</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">24.5% CTR</p>
                        <p className="text-sm text-gray-500">3,482 clicks</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Wireless Headphones</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">SKU: WH-1245</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">21.8% CTR</p>
                        <p className="text-sm text-gray-500">2,965 clicks</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Smart Watch Pro</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">SKU: SW-9876</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">19.2% CTR</p>
                        <p className="text-sm text-gray-500">2,541 clicks</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Leather Wallet</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">SKU: LW-5430</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">16.7% CTR</p>
                        <p className="text-sm text-gray-500">1,983 clicks</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="api">
            <DashboardHeader 
              title="API Integration"
              subtitle="Everything you need to integrate Reccy AI into your application"
            />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <ApiIntegrationGuide />
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>API Credentials</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">API Key</p>
                      <div className="flex items-center mt-1">
                        <div className="bg-gray-100 dark:bg-gray-800 py-2 px-4 rounded-l flex-1 font-mono text-sm">
                          •••••••••••••••••••••••
                        </div>
                        <Button variant="outline" className="rounded-l-none">
                          Show
                        </Button>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Project ID</p>
                      <div className="flex items-center mt-1">
                        <div className="bg-gray-100 dark:bg-gray-800 py-2 px-4 rounded flex-1 font-mono text-sm">
                          reccy-proj-{userData.id.substring(0, 8)}
                        </div>
                      </div>
                    </div>
                    <div className="pt-4">
                      <Button variant="outline" className="w-full">Regenerate API Key</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="audience">
            <DashboardHeader
              title="Audience Analytics" 
              subtitle="Track user segments and engagement patterns"
              onRefresh={handleRefresh}
              onExport={handleExport}
              isLoading={isLoading}
              timeRanges={['Last 7 days', 'Last 30 days', 'Last 90 days', 'Year to date', 'All time']}
              selectedTimeRange={timeRange}
              onTimeRangeChange={handleTimeRangeChange}
            />
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{industryData.deviceLabels.title}</CardTitle>
                    <CardDescription>{industryData.deviceLabels.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <BarChart 
                        data={[
                          { category: industryData.deviceLabels.categories[0], value: 35 },
                          { category: industryData.deviceLabels.categories[1], value: 28 },
                          { category: industryData.deviceLabels.categories[2], value: 18 },
                          { category: industryData.deviceLabels.categories[3], value: 12 },
                          { category: industryData.deviceLabels.categories[4], value: 7 }
                        ]}
                        index="category"
                        categories={["value"]}
                        valueFormatter={(value) => `${value}%`}
                        colors={["#3b82f6"]}
                        className="w-full h-full"
                        showXAxis={true}
                        showYAxis={true}
                        yAxisLabel="Usage Percentage"
                        xAxisLabel="Device Types"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>{industryData.geographicLabels.title}</CardTitle>
                    <CardDescription>{industryData.geographicLabels.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="h-[450px]">
                        <PieChart 
                          data={[
                            { name: industryData.geographicLabels.categories[0], value: 35 },
                            { name: industryData.geographicLabels.categories[1], value: 25 },
                            { name: industryData.geographicLabels.categories[2], value: 20 },
                            { name: industryData.geographicLabels.categories[3], value: 10 },
                            { name: industryData.geographicLabels.categories[4], value: 7 },
                            { name: industryData.geographicLabels.categories[5], value: 3 }
                          ]}
                          index="name"
                          categories={["value"]}
                          valueFormatter={(value) => `${value}%`}
                          colors={["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"]}
                          className="w-full h-full"
                          showLegend={true}
                        />
                      </div>
                      <div className="h-[450px]">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">{industryData.densityLabels.title}</h3>
                        <BarChart 
                          data={[
                            { category: industryData.densityLabels.categories[0], value: 45 },
                            { category: industryData.densityLabels.categories[1], value: 30 },
                            { category: industryData.densityLabels.categories[2], value: 15 },
                            { category: industryData.densityLabels.categories[3], value: 10 }
                          ]}
                          index="category"
                          categories={["value"]}
                          valueFormatter={(value) => `${value}%`}
                          colors={["#10b981"]}
                          className="w-full h-full"
                          showXAxis={true}
                          showYAxis={true}
                          yAxisLabel="User Distribution"
                          xAxisLabel="Area Types"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>User Behavior</CardTitle>
                  <CardDescription>Time of day and session patterns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <LineChart 
                      data={[
                        { name: 'Morning', value: 35 },
                        { name: 'Afternoon', value: 45 },
                        { name: 'Evening', value: 55 },
                        { name: 'Night', value: 30 }
                      ]}
                      index="name"
                      categories={["value"]}
                      valueFormatter={(value) => `${value}%`}
                      showLegend={false}
                      colors={["#3b82f6"]}
                      className="w-full h-full"
                      showXAxis={true}
                      showYAxis={true}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="settings">
            <DashboardHeader 
              title="Account Settings"
              subtitle="Manage your account and preferences"
            />
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 max-w-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md"
                          defaultValue={userData.name} 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input 
                          type="email" 
                          className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md"
                          defaultValue={userData.email} 
                          disabled
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Company</label>
                      <input 
                        type="text" 
                        className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md"
                        defaultValue={userData.company || ''} 
                      />
                    </div>
                    <div className="pt-2">
                      <Button>Save Changes</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Subscription Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-md mb-4">
                    <p className="font-medium">Current Plan: {userData.plan || 'Free'}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Renews on October 31, 2023</p>
                  </div>
                  <Button onClick={handleUpgradePlan}>Upgrade Plan</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>API Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Rate Limit</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Maximum requests per minute
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">60</span>
                        <Button variant="outline" size="sm">Edit</Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Webhook URL</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          For receiving recommendation events
                        </p>
                      </div>
                      <Button variant="outline" size="sm">Configure</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Danger Zone</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">Reset API Key</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        This will invalidate your current API key and generate a new one
                      </p>
                      <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">
                        Reset API Key
                      </Button>
                    </div>
                    <div className="pt-2 border-t">
                      <p className="font-medium">Delete Account</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        This will permanently delete your account and all associated data
                      </p>
                      <Button variant="destructive">
                        Delete Account
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UserDashboard;
