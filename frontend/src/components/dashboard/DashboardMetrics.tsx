
import { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export type MetricData = {
  title: string;
  value: string | number;
  change?: number;
  description?: string;
  icon?: ReactNode;
};

type DashboardMetricsProps = {
  metrics: MetricData[];
  isLoading?: boolean;
};

export function DashboardMetrics({ metrics, isLoading = false }: DashboardMetricsProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array(4).fill(0).map((_, i) => (
          <Card key={i} className="shadow-sm">
            <CardHeader className="pb-2">
              <Skeleton className="h-4 w-[120px]" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-8 w-[80px] mb-2" />
              <Skeleton className="h-4 w-[150px]" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <Card key={index} className="shadow-sm">
          <CardHeader className="pb-2 flex flex-row justify-between">
            <div>
              <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {metric.title}
              </CardTitle>
            </div>
            {metric.icon && <div className="text-muted-foreground">{metric.icon}</div>}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            {(metric.change !== undefined || metric.description) && (
              <CardDescription>
                {metric.change !== undefined && (
                  <span 
                    className={
                      metric.change > 0 
                        ? "text-green-600 dark:text-green-400" 
                        : metric.change < 0 
                          ? "text-red-600 dark:text-red-400" 
                          : ""
                    }
                  >
                    {metric.change > 0 ? "↑" : metric.change < 0 ? "↓" : ""}
                    {Math.abs(metric.change)}%
                  </span>
                )}
                {" "}
                {metric.description}
              </CardDescription>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
