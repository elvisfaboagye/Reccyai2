import { useState } from 'react';
import RecommendationCard from './RecommendationCard';
import { BarChart } from '@/components/ui/chart';
import { Recommendation } from '@/services/RecommendationEngine';

type RecommendationListProps = {
  recommendations: Recommendation[];
  isLoading?: boolean;
  onApply?: (id: string) => void;
  onViewDetails?: (id: string) => void;
  emptyMessage?: string;
};

const RecommendationList = ({
  recommendations,
  isLoading = false,
  onApply,
  onViewDetails,
  emptyMessage = "No recommendations available at this time."
}: RecommendationListProps) => {
  const [expanded, setExpanded] = useState<string | null>(null);

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-40 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse" />
        ))}
      </div>
    );
  }

  if (recommendations.length === 0) {
    return (
      <div className="p-8 text-center border border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
        <p className="text-gray-500 dark:text-gray-400">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {recommendations.map((recommendation) => (
        <RecommendationCard
          key={recommendation.id}
          title={recommendation.title}
          description={recommendation.description}
          confidence={recommendation.confidence}
          onApply={onApply ? () => onApply(recommendation.id) : undefined}
          onViewDetails={onViewDetails ? () => {
            setExpanded(expanded === recommendation.id ? null : recommendation.id);
            if (onViewDetails) onViewDetails(recommendation.id);
          } : undefined}
        >
          {expanded === recommendation.id ? (
            <div className="mt-4">
              {recommendation.data && (
                <BarChart 
                  data={recommendation.data}
                  index="name"
                  categories={[recommendation.title]}
                  valueFormatter={(value) => `${value}`}
                  colors={["#3b82f6"]}
                  className="h-64 mt-4"
                />
              )}
            </div>
          ) : (
            <div className="py-2">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {recommendation.description}
              </p>
            </div>
          )}
        </RecommendationCard>
      ))}
    </div>
  );
};

export default RecommendationList;
