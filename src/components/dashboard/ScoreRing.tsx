import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Circle } from "lucide-react";

interface ScoreRingProps {
  score: number;
  positive: number;
  negative: number;
  neutral: number;
  totalEvaluations: number;
}

export function ScoreRing({ score, positive, negative, neutral, totalEvaluations }: ScoreRingProps) {
  const circumference = 2 * Math.PI * 45; // radius = 45
  const strokeDasharray = `${(score / 100) * circumference} ${circumference}`;
  
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-success";
    if (score >= 60) return "text-warning";
    return "text-danger";
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return "stroke-success";
    if (score >= 60) return "stroke-warning";
    return "stroke-danger";
  };

  return (
    <Card className="shadow-medium border-0">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">Overall Model Score</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Circular Score */}
        <div className="flex items-center justify-center">
          <div className="relative w-32 h-32">
            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                className="text-muted"
              />
              {/* Progress circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray={strokeDasharray}
                strokeLinecap="round"
                className={`${getScoreBg(score)} transition-all duration-1000 ease-out`}
                style={{
                  strokeDashoffset: 0,
                }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className={`text-3xl font-bold ${getScoreColor(score)}`}>
                  {score}%
                </div>
                <div className="text-xs text-muted-foreground">Overall</div>
              </div>
            </div>
          </div>
        </div>

        {/* Breakdown */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span className="text-sm text-foreground">Positive</span>
            </div>
            <Badge variant="secondary" className="bg-success-soft text-success font-medium">
              {positive}%
            </Badge>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <XCircle className="w-4 h-4 text-danger" />
              <span className="text-sm text-foreground">Negative</span>
            </div>
            <Badge variant="secondary" className="bg-danger-soft text-danger font-medium">
              {negative}%
            </Badge>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Circle className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-foreground">Neutral</span>
            </div>
            <Badge variant="secondary" className="font-medium">
              {neutral}%
            </Badge>
          </div>
        </div>

        {/* Total Evaluations */}
        <div className="pt-4 border-t border-border">
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">{totalEvaluations}</div>
            <div className="text-sm text-muted-foreground">Total Evaluations</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}