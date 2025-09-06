import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Users, DollarSign, FileText, Shield, MessageSquare } from "lucide-react";

interface Topic {
  name: string;
  percentage: number;
  icon: React.ReactNode;
  performance: "good" | "warning" | "danger";
}

const mockTopics: Topic[] = [
  { name: "HR Management", percentage: 24, icon: <Users className="w-4 h-4" />, performance: "good" },
  { name: "Expense Management", percentage: 18, icon: <DollarSign className="w-4 h-4" />, performance: "warning" },
  { name: "Document Processing", percentage: 16, icon: <FileText className="w-4 h-4" />, performance: "good" },
  { name: "Security Queries", percentage: 15, icon: <Shield className="w-4 h-4" />, performance: "danger" },
  { name: "General Chat", percentage: 13, icon: <MessageSquare className="w-4 h-4" />, performance: "good" },
  { name: "Other", percentage: 14, icon: <MessageSquare className="w-4 h-4" />, performance: "warning" },
];

export function TopicsSection() {
  const getPerformanceBadge = (performance: string) => {
    switch (performance) {
      case "good":
        return "bg-success-soft text-success border-success/20";
      case "warning":
        return "bg-warning-soft text-warning border-warning/20";
      case "danger":
        return "bg-danger-soft text-danger border-danger/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="shadow-medium border-0">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Topics & Use Cases</CardTitle>
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search topics..."
              className="pl-10 h-9"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          {mockTopics.map((topic, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors duration-200 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="text-muted-foreground">
                  {topic.icon}
                </div>
                <div>
                  <div className="font-medium text-foreground">{topic.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {Math.round((topic.percentage / 100) * 97)} evaluations
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge 
                  variant="secondary" 
                  className={`font-medium ${getPerformanceBadge(topic.performance)}`}
                >
                  {topic.percentage}%
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}