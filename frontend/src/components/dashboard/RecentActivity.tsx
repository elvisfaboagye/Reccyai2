
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ActivityItem = {
  id: string;
  type: "recommendation" | "interaction" | "import" | "system" | "model";
  description: string;
  timestamp: string;
  status?: "success" | "warning" | "error" | "info";
  details?: string;
};

type RecentActivityProps = {
  activities: ActivityItem[];
  isLoading?: boolean;
  limit?: number;
};

export function RecentActivity({ 
  activities, 
  isLoading = false,
  limit = 5
}: RecentActivityProps) {
  const displayActivities = activities.slice(0, limit);
  
  const getStatusClass = (status?: string) => {
    switch (status) {
      case "success": return "bg-green-500/10 text-green-500 border-green-500/20";
      case "warning": return "bg-amber-500/10 text-amber-500 border-amber-500/20";
      case "error": return "bg-red-500/10 text-red-500 border-red-500/20";
      case "info": 
      default: return "bg-blue-500/10 text-blue-500 border-blue-500/20";
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "recommendation": return "R";
      case "interaction": return "I";
      case "import": return "D";
      case "system": return "S";
      case "model": return "M";
      default: return "•";
    }
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full animate-pulse" />
                <div className="space-y-2 flex-1">
                  <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded animate-pulse w-3/4" />
                  <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded animate-pulse w-1/3" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        {displayActivities.length > 0 ? (
          <div className="space-y-4">
            {displayActivities.map((activity) => (
              <div key={activity.id} className="flex gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-xs font-medium">
                  {getActivityIcon(activity.type)}
                </div>
                <div>
                  <p className="text-sm">{activity.description}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gray-500 dark:text-gray-400">{activity.timestamp}</span>
                    {activity.status && (
                      <Badge variant="outline" className={getStatusClass(activity.status)}>
                        {activity.status}
                      </Badge>
                    )}
                  </div>
                  {activity.details && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{activity.details}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center py-6 text-gray-500 dark:text-gray-400">No recent activity</p>
        )}
      </CardContent>
    </Card>
  );
}
