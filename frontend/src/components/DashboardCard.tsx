
import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type DashboardCardProps = {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  isLoading?: boolean;
  footer?: ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  variant?: 'default' | 'recommendation';
};

const DashboardCard = ({ 
  title, 
  description, 
  children, 
  className = "", 
  isLoading = false,
  footer,
  actionLabel,
  onAction,
  variant = 'default'
}: DashboardCardProps) => {
  const isRecommendation = variant === 'recommendation';
  
  return (
    <Card className={`shadow-sm transition-all duration-200 hover:shadow-md ${
      isRecommendation ? 'border-blue-500 dark:border-blue-600' : ''
    } ${className}`}>
      <CardHeader className={`pb-2 ${isRecommendation ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white' : ''}`}>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className={`text-lg font-medium ${isRecommendation ? 'text-white' : ''}`}>
              {title}
            </CardTitle>
            {description && (
              <CardDescription className={`text-sm ${isRecommendation ? 'text-blue-100' : 'text-gray-500'}`}>
                {description}
              </CardDescription>
            )}
          </div>
          {isRecommendation && (
            <div className="px-2 py-1 bg-white text-blue-700 rounded-full text-xs font-semibold">
              AI Recommendation
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className={`${footer ? 'pb-2' : ''}`}>
        {isLoading ? (
          <div className="flex items-center justify-center h-40">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-reccy-blue"></div>
          </div>
        ) : (
          <div className="w-full">
            {children}
          </div>
        )}
      </CardContent>
      
      {(footer || actionLabel) && (
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
          {footer}
          {actionLabel && onAction && (
            <Button 
              onClick={onAction}
              className="bg-blue-900 hover:bg-blue-800 text-white"
            >
              {actionLabel}
            </Button>
          )}
        </div>
      )}
    </Card>
  );
};

export default DashboardCard;
