import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  type: "score" | "percentage" | "time" | "count";
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  performance?: "good" | "warning" | "danger";
  subtitle?: string;
}

export function MetricCard({ 
  title, 
  value, 
  type, 
  trend, 
  trendValue, 
  performance = "good",
  subtitle 
}: MetricCardProps) {
  const getPerformanceColors = (perf: string) => {
    switch (perf) {
      case "good":
        return "text-success bg-success-soft border-success/20";
      case "warning":
        return "text-warning bg-warning-soft border-warning/20";
      case "danger":
        return "text-danger bg-danger-soft border-danger/20";
      default:
        return "text-foreground bg-card border-border";
    }
  };

  const getTrendIcon = () => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-3 h-3" />;
      case "down":
        return <TrendingDown className="w-3 h-3" />;
      default:
        return <Minus className="w-3 h-3" />;
    }
  };

  const getTrendColor = () => {
    switch (trend) {
      case "up":
        return "text-success";
      case "down":
        return "text-danger";
      default:
        return "text-muted-foreground";
    }
  };

  const formatValue = () => {
    switch (type) {
      case "percentage":
        return `${value}%`;
      case "time":
        return `${value}ms`;
      case "score":
        return typeof value === 'number' ? value.toFixed(2) : value;
      default:
        return value;
    }
  };

  return (
    <Card className={`shadow-soft border transition-all duration-200 hover:shadow-medium ${getPerformanceColors(performance)}`}>
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-current opacity-80">{title}</h3>
            {trend && trendValue && (
              <Badge variant="secondary" className={`${getTrendColor()} bg-transparent border-0`}>
                {getTrendIcon()}
                <span className="ml-1 text-xs">{trendValue}</span>
              </Badge>
            )}
          </div>
          
          <div>
            <div className="text-2xl font-bold text-current">
              {formatValue()}
            </div>
            {subtitle && (
              <div className="text-xs text-current opacity-60 mt-1">
                {subtitle}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}