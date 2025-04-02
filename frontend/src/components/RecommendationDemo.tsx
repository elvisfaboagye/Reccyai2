
import { useState, useEffect } from 'react';
import { recommendationEngine, Recommendation } from '@/services/RecommendationEngine';
import RecommendationList from './RecommendationList';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

type RecommendationDemoProps = {
  industry: 'ecommerce' | 'media' | 'travel' | 'finance' | 'healthcare' | 'education';
  userId?: string;
  className?: string;
};

const RecommendationDemo = ({ 
  industry, 
  userId = "demo-user-123",
  className = ""
}: RecommendationDemoProps) => {
  const { toast } = useToast();
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userIdInput, setUserIdInput] = useState(userId);
  const [apiKey, setApiKey] = useState('demo-key-' + industry);

  const fetchRecommendations = async () => {
    if (!userIdInput.trim()) {
      toast({
        title: 'User ID required',
        description: 'Please enter a valid user ID to fetch recommendations',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    try {
      // Use the recommendationEngine instance directly instead of constructing it
      const data = await recommendationEngine.getRecommendations(userIdInput, {
        scenario: 'homepage',
        count: 3,
        context: { industry }
      });
      setRecommendations(data);
      toast({
        title: 'Recommendations loaded',
        description: `Retrieved ${data.length} recommendations for user ${userIdInput}`,
      });
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch recommendations. Please try again.',
        variant: 'destructive',
      });
      setRecommendations([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleApplyRecommendation = async (id: string) => {
    toast({
      title: 'Recommendation Applied',
      description: `You've applied recommendation ID: ${id}`,
    });
    
    try {
      // Use the recommendationEngine instance directly
      await recommendationEngine.applyRecommendation(userIdInput, id, 'accept');
    } catch (error) {
      console.error('Error applying recommendation:', error);
    }
  };

  const handleViewDetails = (id: string) => {
    console.log('Viewing details for recommendation:', id);
    try {
      // Use the recommendationEngine instance directly
      recommendationEngine.trackEvent(userIdInput, 'view_recommendation_details', { recommendation_id: id });
    } catch (error) {
      console.error('Error tracking view event:', error);
    }
  };

  useEffect(() => {
    if (userId) {
      setUserIdInput(userId);
      fetchRecommendations();
    }
  }, [userId, industry]);

  return (
    <div className={`space-y-6 ${className}`}>
      <Card>
        <CardHeader>
          <CardTitle>RECCY AI Recommendation Engine</CardTitle>
          <CardDescription>
            Personalized {industry} recommendations powered by AI
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="user-id" className="text-sm font-medium">
                  User ID
                </label>
                <Input
                  id="user-id"
                  placeholder="Enter user ID"
                  value={userIdInput}
                  onChange={(e) => setUserIdInput(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="api-key" className="text-sm font-medium">
                  API Key
                </label>
                <Input
                  id="api-key"
                  placeholder="Your RECCY AI API Key"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  type="password"
                />
              </div>
            </div>
            <Button 
              onClick={fetchRecommendations} 
              disabled={isLoading}
              className="self-start bg-blue-900 hover:bg-blue-800 text-white"
            >
              {isLoading ? 'Fetching...' : 'Get Recommendations'}
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6">
        <h3 className="text-lg font-medium mb-4">Recommendations</h3>
        <RecommendationList
          recommendations={recommendations}
          isLoading={isLoading}
          onApply={handleApplyRecommendation}
          onViewDetails={handleViewDetails}
          emptyMessage="No recommendations available. Try fetching recommendations or check your API key."
        />
      </div>
    </div>
  );
};

export default RecommendationDemo;
