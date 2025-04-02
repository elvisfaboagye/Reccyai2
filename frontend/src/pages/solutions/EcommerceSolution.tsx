import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, LineChart, PieChart } from "@/components/ui/chart";
import { ChevronRight, ShoppingCart, Tag, Users, LayoutDashboard } from "lucide-react";
import ProductPageLayout from "@/components/ProductPageLayout";
import { Link } from "react-router-dom";
import { scrollToTop } from "@/utils/navigation";

const EcommerceSolution = () => {
  return (
    <ProductPageLayout heroBackground="bg-orange-50 dark:bg-orange-950/10" heroGradient="from-orange-100/50 to-transparent">
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              E-commerce <span className="text-reccy-blue">Recommendation</span> Solution
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Boost your conversion rates and average order value with personalized product recommendations tailored to each customer's browsing and purchasing behavior.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-blue-900 hover:bg-blue-800 text-white font-semibold shadow-lg hover:shadow-xl" 
                size="lg"
                asChild
              >
                <Link to="/start-free-trial" onClick={scrollToTop}>Start Free Trial</Link>
              </Button>
              <Button 
                className="bg-blue-900 hover:bg-blue-800 text-white font-semibold shadow-lg hover:shadow-xl"
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
        <Link to="/dashboards/ecommerce" onClick={scrollToTop} className="dashboard-link">
          <LayoutDashboard className="h-4 w-4" />
          <span>View Sample Dashboard</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="container mx-auto py-20 px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Drive Higher Conversions with Personalized Recommendations
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our e-commerce recommendation engine helps you show the most relevant products to your customers at the right time, increasing conversion rates and customer satisfaction.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="bg-reccy-blue/10 p-1 rounded-full mt-1">
                  <ChevronRight className="h-4 w-4 text-reccy-blue" />
                </div>
                <span>Personalized product recommendations based on browse and purchase history</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-reccy-blue/10 p-1 rounded-full mt-1">
                  <ChevronRight className="h-4 w-4 text-reccy-blue" />
                </div>
                <span>Cross-selling and upselling recommendations for increased order value</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-reccy-blue/10 p-1 rounded-full mt-1">
                  <ChevronRight className="h-4 w-4 text-reccy-blue" />
                </div>
                <span>Real-time personalization that adapts to changing customer behavior</span>
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
              <h3 className="text-xl font-semibold mb-4">Conversion Uplift</h3>
              <BarChart 
                className="w-full h-64"
                data={[
                  { name: 'Without Reccy AI', value: 3.2 },
                  { name: 'With Reccy AI', value: 7.8 }
                ]}
                index="name"
                categories={["value"]}
                valueFormatter={(value) => `${value}%`}
                showAnimation={true}
                showLegend={false}
                colors={["#2563eb"]}
              />
              <div className="mt-6 text-center">
                <div className="text-3xl font-bold text-reccy-blue">+143%</div>
                <p className="text-gray-600 dark:text-gray-300">Average conversion rate increase</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6">
              E-commerce Dashboard Visualization
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Get comprehensive insights into how recommendations are performing and impacting your business metrics.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-medium">Conversion Rate</h3>
                    <ShoppingCart className="h-5 w-5 text-reccy-blue" />
                  </div>
                  <div className="text-3xl font-bold">7.8%</div>
                  <div className="text-green-500 text-sm flex items-center mt-1">
                    +2.3% from last month
                  </div>
                  <LineChart 
                    className="w-full h-20 mt-4"
                    data={[
                      { date: 'Jan', value: 4.2 },
                      { date: 'Feb', value: 4.8 },
                      { date: 'Mar', value: 5.3 },
                      { date: 'Apr', value: 5.5 },
                      { date: 'May', value: 6.2 },
                      { date: 'Jun', value: 7.8 }
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
                    <h3 className="text-base font-medium">Average Order Value</h3>
                    <Tag className="h-5 w-5 text-reccy-blue" />
                  </div>
                  <div className="text-3xl font-bold">$128.45</div>
                  <div className="text-green-500 text-sm flex items-center mt-1">
                    +15.2% from last month
                  </div>
                  <LineChart 
                    className="w-full h-20 mt-4"
                    data={[
                      { date: 'Jan', value: 98.4 },
                      { date: 'Feb', value: 102.8 },
                      { date: 'Mar', value: 109.3 },
                      { date: 'Apr', value: 114.8 },
                      { date: 'May', value: 119.2 },
                      { date: 'Jun', value: 128.45 }
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
                    <h3 className="text-base font-medium">Repeat Customers</h3>
                    <Users className="h-5 w-5 text-reccy-blue" />
                  </div>
                  <div className="text-3xl font-bold">43%</div>
                  <div className="text-green-500 text-sm flex items-center mt-1">
                    +8.5% from last month
                  </div>
                  <LineChart 
                    className="w-full h-20 mt-4"
                    data={[
                      { date: 'Jan', value: 28 },
                      { date: 'Feb', value: 32 },
                      { date: 'Mar', value: 35 },
                      { date: 'Apr', value: 38 },
                      { date: 'May', value: 40 },
                      { date: 'Jun', value: 43 }
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
                <h3 className="text-lg font-semibold mb-4">Recommendation Engagement by Placement</h3>
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-[#3b82f6]"></div>
                    <span className="text-sm">Click Rate (%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-[#10b981]"></div>
                    <span className="text-sm">Purchase Rate (%)</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-4">Shows effectiveness of recommendations across different page locations</p>
                <BarChart 
                  className="w-full h-80"
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
                  showLegend={false}
                  showAnimation={true}
                />
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Revenue Distribution by Recommendation Type</h3>
                <p className="text-sm text-gray-500 mb-4">Shows which recommendation strategies generate the most revenue</p>
                <PieChart 
                  className="w-full h-80"
                  data={[
                    { name: 'Personalized', value: 42 },
                    { name: 'Similar Items', value: 28 },
                    { name: 'Frequently Bought', value: 18 },
                    { name: 'Trending', value: 12 }
                  ]}
                  index="name"
                  categories={["value"]}
                  valueFormatter={(value) => `${value}%`}
                  showAnimation={true}
                  colors={["#3b82f6", "#10b981", "#f59e0b", "#ef4444"]}
                />
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {[
                    { name: 'Personalized', color: '#3b82f6', value: '42%' },
                    { name: 'Similar Items', color: '#10b981', value: '28%' },
                    { name: 'Frequently Bought', color: '#f59e0b', value: '18%' },
                    { name: 'Trending', color: '#ef4444', value: '12%' }
                  ].map((item) => (
                    <div key={item.name} className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-sm">{item.name}: {item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProductPageLayout>
  );
};

export default EcommerceSolution;
