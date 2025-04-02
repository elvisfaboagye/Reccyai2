
import React, { ReactNode } from 'react';

interface ChartProps {
  className?: string;
  data: any[];
  index: string;
  categories: string[];
  valueFormatter?: (value: number) => string;
  showAnimation?: boolean;
  showLegend?: boolean;
  showXAxis?: boolean;
  showYAxis?: boolean;
  showGridLines?: boolean;
  colors?: string[];
  children?: ReactNode;
}

export const BarChart = ({ 
  className = "", 
  data = [],
  index = "",
  categories = [], // Added default empty array
  valueFormatter = (value) => `${value}`,
  showLegend = true,
  colors = ["#3b82f6"],
}: ChartProps) => {
  // Simple bar chart visualization
  return (
    <div className={className}>
      <div className="flex flex-col space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex justify-between text-sm mb-1">
              <span>{item.name}</span>
              <span>{valueFormatter(item.value)}</span>
            </div>
            <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-4">
              <div 
                className="h-4 rounded-full transition-all duration-1000" 
                style={{ 
                  width: `${Math.min(100, (item.value / Math.max(...data.map(d => d.value))) * 100)}%`,
                  backgroundColor: colors[0]
                }}
              />
            </div>
          </div>
        ))}
      </div>
      {showLegend && categories.length > 0 && (
        <div className="flex justify-center mt-4 space-x-4">
          {categories.map((category, i) => (
            <div key={i} className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-1" 
                style={{ backgroundColor: colors[i % colors.length] }}
              />
              <span className="text-xs">{category}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const LineChart = ({ 
  className = "",
  data = [],
  index = "",
  categories = [], // Added default empty array
  valueFormatter = (value) => `${value}`,
  colors = ["#3b82f6"],
  showXAxis = true,
  showYAxis = true,
}: ChartProps) => {
  // Simple line visualization
  return (
    <div className={className}>
      <div className="w-full h-full flex items-end">
        {data.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div 
              className="w-1 rounded-t transition-all duration-1000" 
              style={{ 
                height: `${Math.min(100, (item.value / Math.max(...data.map(d => d.value))) * 100)}%`,
                backgroundColor: colors[0]
              }}
            />
            {showXAxis && <span className="text-xs mt-1">{item.date}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export const PieChart = ({ 
  className = "",
  data = [],
  index = "",
  categories = [], // Added default empty array
  valueFormatter = (value) => `${value}`,
  colors = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"],
  showLegend = true,
}: ChartProps) => {
  // Simple legend-based visualization for pie chart
  return (
    <div className={className}>
      <div className="flex justify-center items-center mb-4">
        <div className="w-40 h-40 rounded-full border-8 border-gray-100 dark:border-gray-800 flex items-center justify-center">
          <span className="text-lg font-bold">
            {valueFormatter(data.reduce((sum, item) => sum + item.value, 0))}
          </span>
        </div>
      </div>
      {showLegend && (
        <div className="grid grid-cols-2 gap-2">
          {data.map((item, i) => (
            <div key={i} className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-2" 
                style={{ backgroundColor: colors[i % colors.length] }}
              />
              <span className="text-sm">{item.name}</span>
              <span className="text-sm ml-auto font-medium">{valueFormatter(item.value)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
