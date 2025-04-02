
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, LineChart, PieChart } from "@/components/ui/chart";
import { ChevronRight, Film, Play, Users, LayoutDashboard } from "lucide-react";
import ProductPageLayout from "@/components/ProductPageLayout";
import { Link } from "react-router-dom";
import { scrollToTop } from "@/utils/navigation";

const MediaSolution = () => {
  return (
    <ProductPageLayout heroBackground="bg-reccy-blue/10" heroGradient="from-blue-100/50 to-transparent">
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Media & Entertainment <span className="text-reccy-blue">Recommendation</span> Solution
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Keep viewers engaged with content recommendations that match their interests, increasing watch time and subscription retention.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-reccy-blue hover:bg-reccy-lightBlue text-white" 
                size="lg"
                asChild
              >
                <Link to="/start-free-trial" onClick={scrollToTop}>Start Free Trial</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                asChild
              >
                <Link to="/watch-demo" onClick={scrollToTop}>Schedule Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-12 px-6 text-center">
        <Link to="/dashboards/media" onClick={scrollToTop} className="dashboard-link">
          <LayoutDashboard className="h-4 w-4" />
          <span>View Sample Dashboard</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="container mx-auto py-20 px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Increase Viewer Engagement and Retention
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our media recommendation engine helps streaming platforms and content providers deliver highly relevant content recommendations that keep viewers coming back for more.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="bg-reccy-blue/10 p-1 rounded-full mt-1">
                  <ChevronRight className="h-4 w-4 text-reccy-blue" />
                </div>
                <span>Personalized content recommendations based on viewing history and preferences</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-reccy-blue/10 p-1 rounded-full mt-1">
                  <ChevronRight className="h-4 w-4 text-reccy-blue" />
                </div>
                <span>Discover hidden gems in your content library that viewers might otherwise miss</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-reccy-blue/10 p-1 rounded-full mt-1">
                  <ChevronRight className="h-4 w-4 text-reccy-blue" />
                </div>
                <span>Continuous learning from viewer interactions to improve recommendations over time</span>
              </li>
            </ul>
            <Button 
              variant="outline" 
              className="flex items-center gap-2 group"
              asChild
            >
              <Link to="/solutions" onClick={scrollToTop}>
                Learn More <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Engagement Uplift</h3>
              <BarChart 
                className="w-full h-64"
                data={[
                  { name: 'Without Reccy AI', value: 28 },
                  { name: 'With Reccy AI', value: 62 }
                ]}
                index="name"
                categories={["value"]}
                valueFormatter={(value) => `${value} mins`}
                showAnimation={true}
                showLegend={false}
                colors={["#2563eb"]}
              />
              <div className="mt-6 text-center">
                <div className="text-3xl font-bold text-reccy-blue">+121%</div>
                <p className="text-gray-600 dark:text-gray-300">Average viewing time per session</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Media Platform Dashboard Visualization
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Get comprehensive insights into how recommendations are driving engagement and retention on your platform.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-medium">Avg. Watch Time</h3>
                    <Play className="h-5 w-5 text-reccy-blue" />
                  </div>
                  <div className="text-3xl font-bold">62 mins</div>
                  <div className="text-green-500 text-sm flex items-center mt-1">
                    +18% from last month
                  </div>
                  <LineChart 
                    className="w-full h-20 mt-4"
                    data={[
                      { date: 'Jan', value: 42 },
                      { date: 'Feb', value: 45 },
                      { date: 'Mar', value: 48 },
                      { date: 'Apr', value: 52 },
                      { date: 'May', value: 58 },
                      { date: 'Jun', value: 62 }
                    ]}
                    index="date"
                    categories={["value"]}
                    showLegend={false}
                    showXAxis={false}
                    showYAxis={false}
                    showGridLines={false}
                    colors={["#2563eb"]}
                  />
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-medium">Content Discovery</h3>
                    <Film className="h-5 w-5 text-reccy-blue" />
                  </div>
                  <div className="text-3xl font-bold">68%</div>
                  <div className="text-green-500 text-sm flex items-center mt-1">
                    +12.5% from last month
                  </div>
                  <LineChart 
                    className="w-full h-20 mt-4"
                    data={[
                      { date: 'Jan', value: 48 },
                      { date: 'Feb', value: 52 },
                      { date: 'Mar', value: 56 },
                      { date: 'Apr', value: 59 },
                      { date: 'May', value: 64 },
                      { date: 'Jun', value: 68 }
                    ]}
                    index="date"
                    categories={["value"]}
                    showLegend={false}
                    showXAxis={false}
                    showYAxis={false}
                    showGridLines={false}
                    colors={["#2563eb"]}
                  />
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-medium">Subscriber Retention</h3>
                    <Users className="h-5 w-5 text-reccy-blue" />
                  </div>
                  <div className="text-3xl font-bold">92%</div>
                  <div className="text-green-500 text-sm flex items-center mt-1">
                    +5.2% from last month
                  </div>
                  <LineChart 
                    className="w-full h-20 mt-4"
                    data={[
                      { date: 'Jan', value: 82 },
                      { date: 'Feb', value: 84 },
                      { date: 'Mar', value: 86 },
                      { date: 'Apr', value: 88 },
                      { date: 'May', value: 90 },
                      { date: 'Jun', value: 92 }
                    ]}
                    index="date"
                    categories={["value"]}
                    showLegend={false}
                    showXAxis={false}
                    showYAxis={false}
                    showGridLines={false}
                    colors={["#2563eb"]}
                  />
                </CardContent>
              </Card>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-4">Content Engagement by Type</h3>
                <BarChart 
                  className="w-full h-80"
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
                  showLegend={true}
                  showAnimation={true}
                />
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-4">Content Discovery by Genre</h3>
                <PieChart 
                  className="w-full h-80"
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
                  showAnimation={true}
                  colors={["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#6b7280"]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProductPageLayout>
  );
};

export default MediaSolution;
