import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, LineChart, PieChart } from "@/components/ui/chart";
import { ChevronRight, BookOpen, GraduationCap, Users, LayoutDashboard } from "lucide-react";
import ProductPageLayout from "@/components/ProductPageLayout";
import { Link } from "react-router-dom";
import { scrollToTop } from "@/utils/navigation";

const EducationSolution = () => {
  return (
    <ProductPageLayout heroBackground="bg-purple-50 dark:bg-purple-950/10" heroGradient="from-purple-100/50 to-transparent">
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Education <span className="text-reccy-blue">Recommendation</span> Solution
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Personalize learning paths and educational content to improve student engagement, completion rates, and learning outcomes.
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
        <Link to="/dashboards/education" onClick={scrollToTop} className="dashboard-link">
          <LayoutDashboard className="h-4 w-4" />
          <span>View Sample Dashboard</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="container mx-auto py-20 px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Enhance Learning with Personalized Educational Content
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our education recommendation engine helps learning platforms and educational institutions deliver personalized course recommendations and learning materials that improve engagement and outcomes.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="bg-reccy-blue/10 p-1 rounded-full mt-1">
                  <ChevronRight className="h-4 w-4 text-reccy-blue" />
                </div>
                <span>Personalized course and content recommendations based on student profiles and learning history</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-reccy-blue/10 p-1 rounded-full mt-1">
                  <ChevronRight className="h-4 w-4 text-reccy-blue" />
                </div>
                <span>Adaptive learning paths that adjust based on student progress and performance</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-reccy-blue/10 p-1 rounded-full mt-1">
                  <ChevronRight className="h-4 w-4 text-reccy-blue" />
                </div>
                <span>Supplementary learning material recommendations to enhance understanding of difficult concepts</span>
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
              <h3 className="text-xl font-semibold mb-4">Course Completion Uplift</h3>
              <BarChart 
                className="w-full h-64"
                data={[
                  { name: 'Without Reccy AI', value: 42 },
                  { name: 'With Reccy AI', value: 78 }
                ]}
                index="name"
                categories={["value"]}
                valueFormatter={(value) => `${value}%`}
                showAnimation={true}
                showLegend={false}
                colors={["#2563eb"]}
              />
              <div className="mt-6 text-center">
                <div className="text-3xl font-bold text-reccy-blue">+86%</div>
                <p className="text-gray-600 dark:text-gray-300">Average course completion rate increase</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Education Platform Dashboard Visualization
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Get comprehensive insights into how recommendations are improving student engagement and learning outcomes.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-medium">Course Completion</h3>
                    <GraduationCap className="h-5 w-5 text-reccy-blue" />
                  </div>
                  <div className="text-3xl font-bold">78%</div>
                  <div className="text-green-500 text-sm flex items-center mt-1">
                    +16% from last semester
                  </div>
                  <LineChart 
                    className="w-full h-20 mt-4"
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
                    <h3 className="text-base font-medium">Learning Material Usage</h3>
                    <BookOpen className="h-5 w-5 text-reccy-blue" />
                  </div>
                  <div className="text-3xl font-bold">84%</div>
                  <div className="text-green-500 text-sm flex items-center mt-1">
                    +22% from last semester
                  </div>
                  <LineChart 
                    className="w-full h-20 mt-4"
                    data={[
                      { date: 'Jan', value: 48 },
                      { date: 'Feb', value: 56 },
                      { date: 'Mar', value: 65 },
                      { date: 'Apr', value: 72 },
                      { date: 'May', value: 78 },
                      { date: 'Jun', value: 84 }
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
                    <h3 className="text-base font-medium">Student Satisfaction</h3>
                    <Users className="h-5 w-5 text-reccy-blue" />
                  </div>
                  <div className="text-3xl font-bold">92%</div>
                  <div className="text-green-500 text-sm flex items-center mt-1">
                    +8% from last semester
                  </div>
                  <LineChart 
                    className="w-full h-20 mt-4"
                    data={[
                      { date: 'Jan', value: 76 },
                      { date: 'Feb', value: 82 },
                      { date: 'Mar', value: 84 },
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
                <h3 className="text-lg font-semibold mb-4">Content Engagement by Learning Format</h3>
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-[#3b82f6]"></div>
                    <span className="text-sm">Engagement Rate (%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-[#10b981]"></div>
                    <span className="text-sm">Completion Rate (%)</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-4">Shows how students interact with different content formats</p>
                <BarChart 
                  className="w-full h-80"
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
                  showLegend={false}
                  showAnimation={true}
                />
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Course Enrollment Distribution by Subject</h3>
                <p className="text-sm text-gray-500 mb-4">Shows which subject areas are most popular among students</p>
                <PieChart 
                  className="w-full h-80"
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
                  showAnimation={true}
                  colors={["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#ef4444"]}
                />
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {[
                    { name: 'Technology', color: '#3b82f6', value: '34%' },
                    { name: 'Business', color: '#10b981', value: '28%' },
                    { name: 'Science', color: '#f59e0b', value: '18%' },
                    { name: 'Arts', color: '#8b5cf6', value: '12%' },
                    { name: 'Language', color: '#ef4444', value: '8%' }
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

export default EducationSolution;
