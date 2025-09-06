import { Header } from "@/components/dashboard/Header";
import { ScoreRing } from "@/components/dashboard/ScoreRing";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { TopicsSection } from "@/components/dashboard/TopicsSection";

const Index = () => {
  // Mock data
  const mockMetrics = [
    { title: "Correctness", value: 4.2, type: "score" as const, trend: "up" as const, trendValue: "+0.3", performance: "good" as const, subtitle: "Scale 1-5" },
    { title: "Completeness", value: 3.8, type: "score" as const, trend: "down" as const, trendValue: "-0.1", performance: "warning" as const, subtitle: "Scale 1-5" },
    { title: "Relevance", value: 0.89, type: "score" as const, trend: "up" as const, trendValue: "+0.05", performance: "good" as const, subtitle: "Scale 0-1" },
    { title: "Grounded in Context", value: 0.76, type: "score" as const, trend: "neutral" as const, trendValue: "0.00", performance: "warning" as const, subtitle: "Scale 0-1" },
    { title: "Avoided Answer", value: 8, type: "percentage" as const, trend: "down" as const, trendValue: "-2%", performance: "good" as const },
    { title: "Toxicity", value: 1.2, type: "percentage" as const, trend: "up" as const, trendValue: "+0.3%", performance: "danger" as const },
    { title: "Fluency", value: 0.94, type: "score" as const, trend: "up" as const, trendValue: "+0.02", performance: "good" as const, subtitle: "Scale 0-1" },
    { title: "Bias Score", value: 0.15, type: "score" as const, trend: "down" as const, trendValue: "-0.03", performance: "good" as const, subtitle: "Lower is better" },
    { title: "Hallucination", value: 3.4, type: "percentage" as const, trend: "neutral" as const, trendValue: "0.0%", performance: "warning" as const },
    { title: "Response Time", value: 1247, type: "time" as const, trend: "up" as const, trendValue: "+89ms", performance: "warning" as const },
    { title: "Positive Sentiment", value: 68, type: "percentage" as const, trend: "up" as const, trendValue: "+5%", performance: "good" as const },
    { title: "English Usage", value: 87, type: "percentage" as const, trend: "neutral" as const, trendValue: "0%", performance: "good" as const },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="p-6 space-y-6">
        {/* Score and Topics Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <ScoreRing 
              score={82}
              positive={68}
              negative={12}
              neutral={20}
              totalEvaluations={97}
            />
          </div>
          <div className="lg:col-span-2">
            <TopicsSection />
          </div>
        </div>

        {/* Metrics Grid */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">Evaluation Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {mockMetrics.map((metric, index) => (
              <MetricCard
                key={index}
                title={metric.title}
                value={metric.value}
                type={metric.type}
                trend={metric.trend}
                trendValue={metric.trendValue}
                performance={metric.performance}
                subtitle={metric.subtitle}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;