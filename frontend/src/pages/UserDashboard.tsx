import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Activity, Box, Cpu, Database, BarChart3, Users, Settings, ChevronRight, 
  BarChart, PieChart, LineChart, ArrowUpRight 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { DashboardMetrics, type MetricData } from '@/components/dashboard/DashboardMetrics';
import { RecommendationEngineCard } from '@/components/dashboard/RecommendationEngineCard';
import { RecentActivity } from '@/components/dashboard/RecentActivity';
import { ApiIntegrationGuide } from '@/components/dashboard/ApiIntegrationGuide';
import { useToast } from '@/components/ui/use-toast';

type UserData = {
  id: string;
  name: string;
  email: string;
  company?: string;
  role?: string;
  plan?: string;
};

const UserDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('Last 30 days');
  
  // Mock data
  const [metrics, setMetrics] = useState<MetricData[]>([
    { 
      title: 'Total Recommendations',
      value: '24,896',
      change: 12.5,
      description: 'vs previous period',
      icon: <BarChart className="h-4 w-4" />
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
                          <Button variant="ghost" size="sm" className="text-xs">
                            Daily
                          </Button>
                          <Button variant="ghost" size="sm" className="text-xs bg-gray-100 dark:bg-gray-800">
                            Weekly
                          </Button>
                          <Button variant="ghost" size="sm" className="text-xs">
                            Monthly
                          </Button>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px] flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-md">
                        <LineChart className="w-12 h-12 text-gray-300 dark:text-gray-700" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <RecentActivity activities={activities} isLoading={isLoading} />
              </div>
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
                    <PieChart className="w-12 h-12 text-gray-300 dark:text-gray-700" />
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
              title="Audience Insights"
              subtitle="Understand your users and their behavior"
              onRefresh={handleRefresh}
              onExport={handleExport}
              isLoading={isLoading}
              selectedTimeRange={timeRange}
              onTimeRangeChange={handleTimeRangeChange}
            />
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Active Users
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,258</div>
                    <p className="text-xs text-gray-500">
                      <span className="text-green-600">↑ 5.3%</span> vs previous period
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      New Users
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">328</div>
                    <p className="text-xs text-gray-500">
                      <span className="text-green-600">↑ 12.1%</span> vs previous period
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Avg. Session Duration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">4m 12s</div>
                    <p className="text-xs text-gray-500">
                      <span className="text-red-600">↓ 0.8%</span> vs previous period
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Recommendation CTR
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">6.2%</div>
                    <p className="text-xs text-gray-500">
                      <span className="text-red-600">↓ 0.8%</span> vs previous period
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>User Segments</CardTitle>
                  </CardHeader>
                  <CardContent className="h-[300px] flex items-center justify-center">
                    <PieChart className="w-12 h-12 text-gray-300 dark:text-gray-700" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>User Growth</CardTitle>
                  </CardHeader>
                  <CardContent className="h-[300px] flex items-center justify-center">
                    <LineChart className="w-12 h-12 text-gray-300 dark:text-gray-700" />
                  </CardContent>
                </Card>
              </div>
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
