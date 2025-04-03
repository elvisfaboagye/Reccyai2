import React from 'react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
} from 'recharts';
import { cn } from '../../lib/utils';

interface ChartData {
  [key: string]: string | number;
}

interface ChartProps {
  className?: string;
  data: ChartData[];
  index: string;
  categories: string[];
  valueFormatter: (value: number) => string;
  showAnimation?: boolean;
  showLegend?: boolean;
  showXAxis?: boolean;
  showYAxis?: boolean;
  showGridLines?: boolean;
  colors?: string[];
  yAxisLabel?: string;
  xAxisLabel?: string;
}

export const BarChart = ({ 
  className = "", 
  data = [],
  valueFormatter = (value) => `${value}`,
  showLegend = true,
  showXAxis = true,
  showYAxis = true,
  showGridLines = true,
  colors = ["#3b82f6"],
}: ChartProps) => {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart data={data}>
          {showGridLines && <CartesianGrid strokeDasharray="3 3" />}
          {showXAxis && <XAxis dataKey="name" />}
          {showYAxis && <YAxis />}
          <Tooltip formatter={valueFormatter} />
          {showLegend && <Legend />}
          <Bar dataKey="value" fill={colors[0]} />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const LineChart = ({ 
  className = "",
  data = [],
  valueFormatter = (value) => `${value}`,
  showLegend = true,
  showXAxis = true,
  showYAxis = true,
  showGridLines = true,
  colors = ["#3b82f6"],
}: ChartProps) => {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart data={data}>
          {showGridLines && <CartesianGrid strokeDasharray="3 3" />}
          {showXAxis && <XAxis dataKey="name" />}
          {showYAxis && <YAxis />}
          <Tooltip formatter={valueFormatter} />
          {showLegend && <Legend />}
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke={colors[0]} 
            strokeWidth={2}
            dot={{ fill: colors[0] }}
          />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
};

export function PieChart({ data, index, categories, valueFormatter, colors, className, showLegend = true }: ChartProps) {
  return (
    <div className={cn("w-full", className)}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey={categories[0]}
          >
            {data.map((entry, i) => (
              <Cell key={`cell-${i}`} fill={colors?.[i] ?? getColor(i)} />
            ))}
          </Pie>
          {showLegend && (
            <Legend
              verticalAlign="bottom"
              height={36}
              formatter={(value) => (
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {value}
                </span>
              )}
              wrapperStyle={{
                paddingTop: '20px',
                fontSize: '12px',
                width: '100%',
                overflow: 'visible'
              }}
            />
          )}
          <Tooltip formatter={valueFormatter} />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
}
