
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

const codeExamples = {
  javascript: `// Initialize the Reccy AI client
const reccy = new ReccyClient({
  apiKey: "YOUR_API_KEY",
  projectId: "YOUR_PROJECT_ID"
});

// Get recommendations for a user
const recommendations = await reccy.getRecommendations({
  userId: "user-123",
  count: 5,
  scenario: "homepage"
});

// Track a user interaction
await reccy.trackInteraction({
  userId: "user-123", 
  itemId: "item-456",
  type: "view"
});`,

  python: `# Initialize the Reccy AI client
from reccy import ReccyClient

client = ReccyClient(
    api_key="YOUR_API_KEY",
    project_id="YOUR_PROJECT_ID"
)

# Get recommendations for a user
recommendations = client.get_recommendations(
    user_id="user-123",
    count=5,
    scenario="homepage"
)

# Track a user interaction
client.track_interaction(
    user_id="user-123",
    item_id="item-456",
    type="view"
)`,

  php: `// Initialize the Reccy AI client
$reccy = new ReccyClient([
  'apiKey' => 'YOUR_API_KEY',
  'projectId' => 'YOUR_PROJECT_ID'
]);

// Get recommendations for a user
$recommendations = $reccy->getRecommendations([
  'userId' => 'user-123',
  'count' => 5,
  'scenario' => 'homepage'
]);

// Track a user interaction
$reccy->trackInteraction([
  'userId' => 'user-123',
  'itemId' => 'item-456',
  'type' => 'view'
]);`,

  ruby: `# Initialize the Reccy AI client
reccy = ReccyClient.new(
  api_key: "YOUR_API_KEY",
  project_id: "YOUR_PROJECT_ID"
)

# Get recommendations for a user
recommendations = reccy.get_recommendations(
  user_id: "user-123",
  count: 5,
  scenario: "homepage"
)

# Track a user interaction
reccy.track_interaction(
  user_id: "user-123",
  item_id: "item-456",
  type: "view"
)`,
};

export function ApiIntegrationGuide() {
  const [activeTab, setActiveTab] = useState("javascript");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[activeTab as keyof typeof codeExamples]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>API Integration</CardTitle>
        <CardDescription>
          Integrate Reccy AI into your application with just a few lines of code
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="javascript" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="javascript">JavaScript</TabsTrigger>
            <TabsTrigger value="python">Python</TabsTrigger>
            <TabsTrigger value="php">PHP</TabsTrigger>
            <TabsTrigger value="ruby">Ruby</TabsTrigger>
          </TabsList>
          {Object.entries(codeExamples).map(([lang, code]) => (
            <TabsContent key={lang} value={lang} className="relative">
              <div className="relative">
                <pre className="p-4 bg-gray-50 dark:bg-gray-900 text-sm rounded-md overflow-x-auto">
                  <code>{code}</code>
                </pre>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2"
                  onClick={handleCopy}
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        <div className="mt-6 text-center">
          <Button variant="outline">View Full API Documentation</Button>
        </div>
      </CardContent>
    </Card>
  );
}
