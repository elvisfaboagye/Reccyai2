
import { useState } from 'react';
import { ChevronDown, Download, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

type DashboardHeaderProps = {
  title: string;
  subtitle?: string;
  onRefresh?: () => void;
  onExport?: () => void;
  isLoading?: boolean;
  timeRanges?: string[];
  selectedTimeRange?: string;
  onTimeRangeChange?: (range: string) => void;
};

export function DashboardHeader({
  title,
  subtitle,
  onRefresh,
  onExport,
  isLoading = false,
  timeRanges = ['Last 7 days', 'Last 30 days', 'Last 90 days', 'Year to date', 'All time'],
  selectedTimeRange = 'Last 30 days',
  onTimeRangeChange
}: DashboardHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        {subtitle && <p className="text-gray-500 dark:text-gray-400">{subtitle}</p>}
      </div>
      <div className="flex flex-wrap items-center gap-2 self-end sm:self-auto">
        {onTimeRangeChange && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                {selectedTimeRange}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {timeRanges.map((range) => (
                <DropdownMenuItem 
                  key={range} 
                  onClick={() => onTimeRangeChange(range)}
                  className={range === selectedTimeRange ? "bg-gray-100 dark:bg-gray-800" : ""}
                >
                  {range}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
        {onRefresh && (
          <Button 
            variant="outline" 
            size="icon" 
            onClick={onRefresh} 
            disabled={isLoading}
            title="Refresh data"
          >
            <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
          </Button>
        )}
        {onExport && (
          <Button 
            variant="outline" 
            size="icon"
            onClick={onExport}
            title="Export data"
          >
            <Download className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
