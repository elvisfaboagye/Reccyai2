
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, LineChart, PieChart } from "@/components/ui/chart";
import { ChevronRight, Heart, Activity, Users, LayoutDashboard } from "lucide-react";
import ProductPageLayout from "@/components/ProductPageLayout";
import { Link } from "react-router-dom";
import { scrollToTop } from "@/utils/navigation";

const HealthcareSolution = () => {
  return (
    <ProductPageLayout heroBackground="bg-green-50 dark:bg-green-950/10" heroGradient="from-green-100/50 to-transparent">
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Healthcare <span className="text-reccy-blue">Recommendation</span> Solution
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Personalize healthcare services and content to improve patient outcomes and engagement with HIPAA-compliant AI recommendations.
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
        <Link to="/dashboards/healthcare" onClick={scrollToTop} className="dashboard-link">
          <LayoutDashboard className="h-4 w-4" />
          <span>View Sample Dashboard</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="container mx-auto py-20 px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Enhance Patient Care with Personalized Health Recommendations
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our healthcare recommendation engine helps healthcare providers and wellness platforms deliver personalized health content, programs, and services while maintaining strict privacy compliance.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="bg-reccy-blue/10 p-1 rounded-full mt-1">
                  <ChevronRight className="h-4 w-4 text-reccy-blue" />
                </div>
                <span>Personalized health content recommendations based on patient profiles and conditions</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-reccy-blue/10 p-1 rounded-full mt-1">
                  <ChevronRight className="h-4 w-4 text-reccy-blue" />
                </div>
                <span>Wellness program recommendations to improve patient engagement and outcomes</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-reccy-blue/10 p-1 rounded-full mt-1">
                  <ChevronRight className="h-4 w-4 text-reccy-blue" />
                </div>
                <span>HIPAA-compliant AI recommendation system with strict data privacy controls</span>
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
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
              alt="Healthcare professionals using technology" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent rounded-xl"></div>
          </div>
        </div>

        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Healthcare Platform Dashboard Visualization
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Get comprehensive insights into how recommendations are driving patient engagement and health outcomes.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-medium">Patient Engagement</h3>
                    <Heart className="h-5 w-5 text-recombee-blue" />
                  </div>
                  <div className="text-3xl font-bold">68%</div>
                  <div className="text-green-500 text-sm flex items-center mt-1">
                    +12% from last quarter
                  </div>
                  <LineChart 
                    className="w-full h-20 mt-4"
                    data={[
                      { date: 'Q1', value: 48 },
                      { date: 'Q2', value: 54 },
                      { date: 'Q3', value: 58 },
                      { date: 'Q4', value: 62 },
                      { date: 'Q1', value: 68 }
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
                    <h3 className="text-base font-medium">Program Completion</h3>
                    <Activity className="h-5 w-5 text-recombee-blue" />
                  </div>
                  <div className="text-3xl font-bold">72%</div>
                  <div className="text-green-500 text-sm flex items-center mt-1">
                    +15% from last quarter
                  </div>
                  <LineChart 
                    className="w-full h-20 mt-4"
                    data={[
                      { date: 'Q1', value: 48 },
                      { date: 'Q2', value: 56 },
                      { date: 'Q3', value: 62 },
                      { date: 'Q4', value: 68 },
                      { date: 'Q1', value: 72 }
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
                    <h3 className="text-base font-medium">Patient Satisfaction</h3>
                    <Users className="h-5 w-5 text-recombee-blue" />
                  </div>
                  <div className="text-3xl font-bold">92%</div>
                  <div className="text-green-500 text-sm flex items-center mt-1">
                    +4.5% from last quarter
                  </div>
                  <LineChart 
                    className="w-full h-20 mt-4"
                    data={[
                      { date: 'Q1', value: 82 },
                      { date: 'Q2', value: 85 },
                      { date: 'Q3', value: 88 },
                      { date: 'Q4', value: 90 },
                      { date: 'Q1', value: 92 }
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
                    { category: 'Articles', clicked: 72, completed: 58 },
                    { category: 'Videos', clicked: 68, completed: 62 },
                    { category: 'Wellness Programs', clicked: 54, completed: 48 },
                    { category: 'Podcasts', clicked: 42, completed: 36 }
                  ]}
                  index="category"
                  categories={["clicked", "completed"]}
                  colors={["#3b82f6", "#10b981"]}
                  valueFormatter={(value) => `${value}%`}
                  showLegend={true}
                  showAnimation={true}
                />
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-4">Program Adoption by Health Category</h3>
                <PieChart 
                  className="w-full h-80"
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
                  showAnimation={true}
                  colors={["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#6b7280"]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProductPageLayout>
  );
};

export default HealthcareSolution;
