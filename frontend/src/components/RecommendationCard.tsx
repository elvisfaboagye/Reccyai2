
import { ReactNode } from 'react';
import DashboardCard from './DashboardCard';
import { Sparkles } from 'lucide-react';

type RecommendationCardProps = {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  isLoading?: boolean;
  confidence?: number;
  onApply?: () => void;
  onViewDetails?: () => void;
};

const RecommendationCard = ({
  title,
  description,
  children,
  className = "",
  isLoading = false,
  confidence = 0,
  onApply,
  onViewDetails
}: RecommendationCardProps) => {
  const confidenceText = confidence >= 90 ? 'Very High' 
    : confidence >= 70 ? 'High'
    : confidence >= 50 ? 'Medium'
    : confidence >= 30 ? 'Low'
    : 'Very Low';

  const confidenceColor = confidence >= 90 ? 'text-green-600' 
    : confidence >= 70 ? 'text-green-500'
    : confidence >= 50 ? 'text-yellow-500'
    : confidence >= 30 ? 'text-orange-500'
    : 'text-red-500';
    
  return (
    <DashboardCard
      title={title}
      description={description}
      className={className}
      isLoading={isLoading}
      variant="recommendation"
      actionLabel={onApply ? "Apply Recommendation" : undefined}
      onAction={onApply}
      footer={
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium">RECCY AI</span>
          </div>
          {confidence > 0 && (
            <div className="flex items-center gap-1">
              <span className="text-xs text-gray-600 dark:text-gray-400">Confidence:</span>
              <span className={`text-xs font-medium ${confidenceColor}`}>{confidenceText}</span>
            </div>
          )}
          {onViewDetails && (
            <button 
              onClick={onViewDetails}
              className="text-xs text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              View Details
            </button>
          )}
        </div>
      }
    >
      {children}
    </DashboardCard>
  );
};

export default RecommendationCard;
