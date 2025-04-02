
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, LineChart, PieChart } from "@/components/ui/chart";
import { ChevronRight, Map, Plane, Users, LayoutDashboard } from "lucide-react";
import ProductPageLayout from "@/components/ProductPageLayout";
import { Link } from "react-router-dom";
import { scrollToTop } from "@/utils/navigation";

const TravelSolution = () => {
  return (
    <ProductPageLayout heroBackground="bg-teal-50 dark:bg-teal-950/10" heroGradient="from-teal-100/50 to-transparent">
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Travel & Hospitality <span className="text-reccy-blue">Recommendation</span> Solution
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Help travelers discover destinations, accommodations, and experiences that perfectly match their preferences and past bookings.
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
        <Link to="/dashboards/travel" onClick={scrollToTop} className="dashboard-link">
          <LayoutDashboard className="h-4 w-4" />
          <span>View Sample Dashboard</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="container mx-auto py-20 px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Increase Bookings with Personalized Travel Recommendations
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our travel recommendation engine helps travel businesses provide personalized destination, accommodation, and experience recommendations that increase bookings and customer satisfaction.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="bg-reccy-blue/10 p-1 rounded-full mt-1">
                  <ChevronRight className="h-4 w-4 text-reccy-blue" />
                </div>
                <span>Personalized destination recommendations based on traveler preferences and past trips</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-reccy-blue/10 p-1 rounded-full mt-1">
                  <ChevronRight className="h-4 w-4 text-reccy-blue" />
                </div>
                <span>Cross-selling of complementary travel services like activities, tours, and transportation</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-reccy-blue/10 p-1 rounded-full mt-1">
                  <ChevronRight className="h-4 w-4 text-reccy-blue" />
                </div>
                <span>Seasonal and trending destination recommendations to maximize booking opportunities</span>
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
              <h3 className="text-xl font-semibold mb-4">Booking Conversion Uplift</h3>
              <BarChart 
                className="w-full h-64"
                data={[
                  { name: 'Without Reccy AI', value: 4.8 },
                  { name: 'With Reccy AI', value: 9.2 }
                ]}
                index="name"
                categories={["value"]}
                valueFormatter={(value) => `${value}%`}
                showAnimation={true}
                showLegend={false}
                colors={["#2563eb"]}
              />
              <div className="mt-6 text-center">
                <div className="text-3xl font-bold text-reccy-blue">+92%</div>
                <p className="text-gray-600 dark:text-gray-300">Average booking conversion rate increase</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Travel Platform Dashboard Visualization
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Get comprehensive insights into how recommendations are driving bookings and travel engagement.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-medium">Booking Conversion</h3>
                    <Plane className="h-5 w-5 text-reccy-blue" />
                  </div>
                  <div className="text-3xl font-bold">9.2%</div>
                  <div className="text-green-500 text-sm flex items-center mt-1">
                    +2.4% from last month
                  </div>
                  <LineChart 
                    className="w-full h-20 mt-4"
                    data={[
                      { date: 'Jan', value: 5.2 },
                      { date: 'Feb', value: 5.8 },
                      { date: 'Mar', value: 6.4 },
                      { date: 'Apr', value: 7.2 },
                      { date: 'May', value: 8.6 },
                      { date: 'Jun', value: 9.2 }
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
                    <h3 className="text-base font-medium">Destination Discovery</h3>
                    <Map className="h-5 w-5 text-reccy-blue" />
                  </div>
                  <div className="text-3xl font-bold">72%</div>
                  <div className="text-green-500 text-sm flex items-center mt-1">
                    +15% from last month
                  </div>
                  <LineChart 
                    className="w-full h-20 mt-4"
                    data={[
                      { date: 'Jan', value: 48 },
                      { date: 'Feb', value: 54 },
                      { date: 'Mar', value: 58 },
                      { date: 'Apr', value: 62 },
                      { date: 'May', value: 68 },
                      { date: 'Jun', value: 72 }
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
                    <h3 className="text-base font-medium">Repeat Travelers</h3>
                    <Users className="h-5 w-5 text-reccy-blue" />
                  </div>
                  <div className="text-3xl font-bold">38%</div>
                  <div className="text-green-500 text-sm flex items-center mt-1">
                    +6.5% from last month
                  </div>
                  <LineChart 
                    className="w-full h-20 mt-4"
                    data={[
                      { date: 'Jan', value: 24 },
                      { date: 'Feb', value: 28 },
                      { date: 'Mar', value: 30 },
                      { date: 'Apr', value: 32 },
                      { date: 'May', value: 35 },
                      { date: 'Jun', value: 38 }
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
                <h3 className="text-lg font-medium mb-4">Recommendation Engagement by Placement</h3>
                <BarChart 
                  className="w-full h-80"
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
                  showLegend={true}
                  showAnimation={true}
                />
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-4">Revenue by Travel Category</h3>
                <PieChart 
                  className="w-full h-80"
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
                  showAnimation={true}
                  colors={["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#6b7280"]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProductPageLayout>
  );
};

export default TravelSolution;
