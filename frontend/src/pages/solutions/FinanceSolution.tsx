
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, LineChart, PieChart } from "@/components/ui/chart";
import { ChevronRight, CreditCard, DollarSign, Users, LayoutDashboard } from "lucide-react";
import ProductPageLayout from "@/components/ProductPageLayout";
import { Link } from "react-router-dom";
import { scrollToTop } from "@/utils/navigation";

const FinanceSolution = () => {
  return (
    <ProductPageLayout heroBackground="bg-blue-50 dark:bg-blue-950/10" heroGradient="from-blue-100/50 to-transparent">
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Finance & Banking <span className="text-reccy-blue">Recommendation</span> Solution
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Recommend financial products and services tailored to each customer's financial situation and goals for improved customer satisfaction.
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
        <Link to="/dashboards/finance" onClick={scrollToTop} className="dashboard-link">
          <LayoutDashboard className="h-4 w-4" />
          <span>View Sample Dashboard</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="container mx-auto py-20 px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Enhance Financial Customer Experience with Personalized Recommendations
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our finance recommendation engine helps banks and financial institutions provide personalized product recommendations that improve customer satisfaction and increase product adoption.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="bg-reccy-blue/10 p-1 rounded-full mt-1">
                  <ChevronRight className="h-4 w-4 text-reccy-blue" />
                </div>
                <span>Personalized financial product recommendations based on customer profiles and transaction history</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-reccy-blue/10 p-1 rounded-full mt-1">
                  <ChevronRight className="h-4 w-4 text-reccy-blue" />
                </div>
                <span>Next-best-action recommendations to guide customers toward their financial goals</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-reccy-blue/10 p-1 rounded-full mt-1">
                  <ChevronRight className="h-4 w-4 text-reccy-blue" />
                </div>
                <span>Compliance-friendly recommendation engine that adheres to financial regulations</span>
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
              <h3 className="text-xl font-semibold mb-4">Product Adoption Uplift</h3>
              <BarChart 
                className="w-full h-64"
                data={[
                  { name: 'Without Reccy AI', value: 12 },
                  { name: 'With Reccy AI', value: 28 }
                ]}
                index="name"
                categories={["value"]}
                valueFormatter={(value) => `${value}%`}
                showAnimation={true}
                showLegend={false}
                colors={["#2563eb"]}
              />
              <div className="mt-6 text-center">
                <div className="text-3xl font-bold text-reccy-blue">+133%</div>
                <p className="text-gray-600 dark:text-gray-300">Average financial product adoption increase</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Financial Dashboard Visualization
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Get comprehensive insights into how recommendations are driving financial product adoption and customer satisfaction.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-medium">Product Adoption</h3>
                    <CreditCard className="h-5 w-5 text-recombee-blue" />
                  </div>
                  <div className="text-3xl font-bold">28%</div>
                  <div className="text-green-500 text-sm flex items-center mt-1">
                    +5.2% from last quarter
                  </div>
                  <LineChart 
                    className="w-full h-20 mt-4"
                    data={[
                      { date: 'Q1', value: 16 },
                      { date: 'Q2', value: 19 },
                      { date: 'Q3', value: 22 },
                      { date: 'Q4', value: 25 },
                      { date: 'Q1', value: 28 }
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
                    <h3 className="text-base font-medium">Revenue per Customer</h3>
                    <DollarSign className="h-5 w-5 text-recombee-blue" />
                  </div>
                  <div className="text-3xl font-bold">$842</div>
                  <div className="text-green-500 text-sm flex items-center mt-1">
                    +12% from last quarter
                  </div>
                  <LineChart 
                    className="w-full h-20 mt-4"
                    data={[
                      { date: 'Q1', value: 620 },
                      { date: 'Q2', value: 680 },
                      { date: 'Q3', value: 720 },
                      { date: 'Q4', value: 780 },
                      { date: 'Q1', value: 842 }
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
                    <h3 className="text-base font-medium">Customer Satisfaction</h3>
                    <Users className="h-5 w-5 text-recombee-blue" />
                  </div>
                  <div className="text-3xl font-bold">87%</div>
                  <div className="text-green-500 text-sm flex items-center mt-1">
                    +4.5% from last quarter
                  </div>
                  <LineChart 
                    className="w-full h-20 mt-4"
                    data={[
                      { date: 'Q1', value: 76 },
                      { date: 'Q2', value: 79 },
                      { date: 'Q3', value: 82 },
                      { date: 'Q4', value: 84 },
                      { date: 'Q1', value: 87 }
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
                <h3 className="text-lg font-medium mb-4">Recommendation Engagement by Channel</h3>
                <BarChart 
                  className="w-full h-80"
                  data={[
                    { category: 'Mobile App', clicked: 68, adopted: 34 },
                    { category: 'Online Banking', clicked: 72, adopted: 38 },
                    { category: 'Email', clicked: 48, adopted: 22 },
                    { category: 'Branch Visit', clicked: 34, adopted: 28 }
                  ]}
                  index="category"
                  categories={["clicked", "adopted"]}
                  colors={["#3b82f6", "#10b981"]}
                  valueFormatter={(value) => `${value}%`}
                  showLegend={true}
                  showAnimation={true}
                />
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-4">Product Adoption by Category</h3>
                <PieChart 
                  className="w-full h-80"
                  data={[
                    { name: 'Credit Cards', value: 32 },
                    { name: 'Savings Accounts', value: 24 },
                    { name: 'Investments', value: 18 },
                    { name: 'Loans', value: 16 },
                    { name: 'Insurance', value: 10 }
                  ]}
                  index="name"
                  categories={["value"]}
                  valueFormatter={(value) => `${value}%`}
                  showAnimation={true}
                  colors={["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProductPageLayout>
  );
};

export default FinanceSolution;
