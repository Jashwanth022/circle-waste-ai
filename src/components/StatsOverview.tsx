import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Recycle, MapPin, Award, Zap } from "lucide-react";

export default function StatsOverview() {
  const stats = [
    {
      title: "Reports Processed",
      value: "0",
      change: "+0%",
      icon: Recycle,
      gradient: "gradient-eco-primary"
    },
    {
      title: "Active Locations",
      value: "0",
      change: "+0%", 
      icon: MapPin,
      gradient: "gradient-eco-blue"
    },
    {
      title: "Rewards Distributed",
      value: "₹0",
      change: "+0%",
      icon: Award,
      gradient: "gradient-reward"
    },
    {
      title: "AI Accuracy",
      value: "0%",
      change: "+0%",
      icon: Zap,
      gradient: "gradient-energy"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <Card key={index} className="glass-card slide-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${stat.gradient}`}>
                <IconComponent className="w-4 h-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-primary mt-1">
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}