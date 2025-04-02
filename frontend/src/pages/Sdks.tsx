
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Download, Terminal } from "lucide-react";

const Sdks = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="container mx-auto py-20 px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">
            Integrate <span className="text-reccy-blue">Reccy AI</span> with Our SDKs
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Quickly implement our recommendation engine into your application using our official client libraries across various programming languages.
          </p>
        </div>

        <Tabs defaultValue="javascript" className="max-w-4xl mx-auto mb-16">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="javascript">JavaScript</TabsTrigger>
            <TabsTrigger value="python">Python</TabsTrigger>
            <TabsTrigger value="java">Java</TabsTrigger>
            <TabsTrigger value="ruby">Ruby</TabsTrigger>
          </TabsList>
          
          <TabsContent value="javascript" className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">JavaScript SDK</h3>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Download className="w-4 h-4" /> npm
                </Button>
              </div>
              <div className="bg-black rounded-md p-4 text-white font-mono text-sm overflow-x-auto">
                <pre>npm install reccy-ai-js --save</pre>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
              <h3 className="text-lg font-medium mb-4">Quick Example</h3>
              <div className="bg-black rounded-md p-4 text-white font-mono text-sm overflow-x-auto">
                <pre>{`import { ReccyAI } from 'reccy-ai-js';

// Initialize client
const client = new ReccyAI('YOUR_API_KEY');

// Get recommendations for a user
const recommendations = await client.getRecommendations({
  userId: 'user-123',
  count: 5,
  scenario: 'homepage'
});

console.log(recommendations);`}</pre>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="python" className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Python SDK</h3>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Download className="w-4 h-4" /> pip
                </Button>
              </div>
              <div className="bg-black rounded-md p-4 text-white font-mono text-sm overflow-x-auto">
                <pre>pip install reccy-ai</pre>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
              <h3 className="text-lg font-medium mb-4">Quick Example</h3>
              <div className="bg-black rounded-md p-4 text-white font-mono text-sm overflow-x-auto">
                <pre>{`from reccy_ai import ReccyAI

# Initialize client
client = ReccyAI('YOUR_API_KEY')

# Get recommendations for a user
recommendations = client.get_recommendations(
    user_id='user-123',
    count=5,
    scenario='homepage'
)

print(recommendations)`}</pre>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="java" className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Java SDK</h3>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Download className="w-4 h-4" /> Maven
                </Button>
              </div>
              <div className="bg-black rounded-md p-4 text-white font-mono text-sm overflow-x-auto">
                <pre>{`<dependency>
  <groupId>ai.reccy</groupId>
  <artifactId>reccy-java-sdk</artifactId>
  <version>1.0.0</version>
</dependency>`}</pre>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
              <h3 className="text-lg font-medium mb-4">Quick Example</h3>
              <div className="bg-black rounded-md p-4 text-white font-mono text-sm overflow-x-auto">
                <pre>{`import ai.reccy.ReccyAI;
import ai.reccy.models.Recommendation;

public class Example {
  public static void main(String[] args) {
    // Initialize client
    ReccyAI client = new ReccyAI("YOUR_API_KEY");
    
    // Get recommendations for a user
    List<Recommendation> recommendations = client.getRecommendations(
      "user-123",
      5,
      "homepage"
    );
    
    System.out.println(recommendations);
  }
}`}</pre>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="ruby" className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Ruby SDK</h3>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Download className="w-4 h-4" /> gem
                </Button>
              </div>
              <div className="bg-black rounded-md p-4 text-white font-mono text-sm overflow-x-auto">
                <pre>gem install reccy-ai</pre>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
              <h3 className="text-lg font-medium mb-4">Quick Example</h3>
              <div className="bg-black rounded-md p-4 text-white font-mono text-sm overflow-x-auto">
                <pre>{`require 'reccy_ai'

# Initialize client
client = ReccyAI::Client.new('YOUR_API_KEY')

# Get recommendations for a user
recommendations = client.get_recommendations(
  user_id: 'user-123',
  count: 5,
  scenario: 'homepage'
)

puts recommendations`}</pre>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Support & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <Code className="h-8 w-8 text-reccy-blue mb-4" />
              <h3 className="text-lg font-medium mb-2">Documentation</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Full reference for all SDK methods and parameters.</p>
              <Button variant="outline" className="w-full">View Documentation</Button>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <Terminal className="h-8 w-8 text-reccy-blue mb-4" />
              <h3 className="text-lg font-medium mb-2">Code Examples</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Ready-to-use code samples for common use cases.</p>
              <Button variant="outline" className="w-full">Browse Examples</Button>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <Terminal className="h-8 w-8 text-reccy-blue mb-4" />
              <h3 className="text-lg font-medium mb-2">GitHub</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Open source libraries, contribution guidelines, and more.</p>
              <Button variant="outline" className="w-full">Visit GitHub</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sdks;
