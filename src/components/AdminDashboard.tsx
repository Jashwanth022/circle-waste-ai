import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, CheckCircle, XCircle, Clock, Users, MapPin, BarChart3, Settings } from "lucide-react";

interface AdminDashboardProps {
  onBack: () => void;
}

export default function AdminDashboard({ onBack }: AdminDashboardProps) {
  const pendingReports = [
    { id: 1, citizen: "Rajesh Kumar", location: "Brigade Road", confidence: 94, time: "5 min ago" },
    { id: 2, citizen: "Priya Singh", location: "Koramangala", confidence: 78, time: "12 min ago" },
    { id: 3, citizen: "Amit Patel", location: "Whitefield", confidence: 89, time: "25 min ago" }
  ];

  const getConfidenceBadge = (confidence: number) => {
    if (confidence >= 90) return <Badge variant="default" className="bg-primary">High: {confidence}%</Badge>;
    if (confidence >= 70) return <Badge variant="secondary" className="bg-accent text-accent-foreground">Medium: {confidence}%</Badge>;
    return <Badge variant="destructive">Low: {confidence}%</Badge>;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gradient-eco">Admin Dashboard</h2>
          <p className="text-muted-foreground">Monitor and manage waste reports across the city</p>
        </div>
        <Button variant="outline" onClick={onBack}>
          Back to Home
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full gradient-eco-blue flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold">47</p>
                <p className="text-sm text-muted-foreground">Pending Reviews</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full gradient-eco-primary flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold">342</p>
                <p className="text-sm text-muted-foreground">Approved Today</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full gradient-energy flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold">28</p>
                <p className="text-sm text-muted-foreground">Active Collectors</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full gradient-reward flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold">94.2%</p>
                <p className="text-sm text-muted-foreground">AI Accuracy</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pending Reports for AI Review */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary/20 scanner-pulse flex items-center justify-center">
              <Eye className="w-4 h-4 text-primary" />
            </div>
            AI-Flagged Reports for Review
          </CardTitle>
          <CardDescription>Reports requiring manual verification by admin</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pendingReports.map((report) => (
              <div key={report.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-eco">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{report.citizen}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {report.location} • {report.time}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {getConfidenceBadge(report.confidence)}
                  <div className="flex gap-2">
                    <Button size="sm" variant="eco">
                      <CheckCircle className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="destructive">
                      <XCircle className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}