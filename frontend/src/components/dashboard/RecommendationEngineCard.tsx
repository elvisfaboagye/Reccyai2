
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Server, Info, ExternalLink, Check } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type RecommendationEngineCardProps = {
  engineName: string;
  engineId: string;
  status: "active" | "inactive" | "pending";
  items: number;
  interactions: number;
  lastSync?: string;
  onViewDetails?: () => void;
  onConfigure?: () => void;
};

export function RecommendationEngineCard({
  engineName,
  engineId,
  status,
  items,
  interactions,
  lastSync,
  onViewDetails,
  onConfigure,
}: RecommendationEngineCardProps) {
  const statusColors = {
    active: "bg-green-500/10 text-green-500 border-green-500/20",
    inactive: "bg-gray-500/10 text-gray-500 border-gray-500/20",
    pending: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  };

  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Server className="w-5 h-5 text-reccy-blue" /> {engineName}
            </CardTitle>
            <CardDescription className="flex items-center gap-2">
              ID: {engineId}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="w-4 h-4 cursor-help text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Use this ID in your API requests</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardDescription>
          </div>
          <Badge variant="outline" className={statusColors[status]}>
            <Check className={`w-3 h-3 mr-1 ${status === 'active' ? 'opacity-100' : 'opacity-0'}`} />
            {status === 'active' ? 'Active' : status === 'pending' ? 'Processing' : 'Inactive'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Items</p>
            <p className="text-xl font-bold">{items.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Interactions</p>
            <p className="text-xl font-bold">{interactions.toLocaleString()}</p>
          </div>
        </div>
        {lastSync && (
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
            Last synchronized: {lastSync}
          </p>
        )}
        <div className="flex flex-wrap gap-2">
          {onViewDetails && (
            <Button variant="outline" size="sm" className="flex items-center gap-1" onClick={onViewDetails}>
              View Details
              <ExternalLink className="w-3 h-3" />
            </Button>
          )}
          {onConfigure && (
            <Button variant="outline" size="sm" onClick={onConfigure}>
              Configure
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
