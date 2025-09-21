import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, MapPin, Coins, MessageSquare, CheckCircle, Clock, AlertTriangle } from "lucide-react";

interface CitizenDashboardProps {
  onBack: () => void;
}

export default function CitizenDashboard({ onBack }: CitizenDashboardProps) {
  const recentReports = [
    { id: 1, location: "MG Road Junction", status: "approved", points: 50, time: "2 hours ago" },
    { id: 2, location: "Park Street", status: "processing", points: 0, time: "1 day ago" },
    { id: 3, location: "City Center", status: "completed", points: 75, time: "3 days ago" }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return <CheckCircle className="w-4 h-4 text-primary" />;
      case 'processing': return <Clock className="w-4 h-4 text-accent" />;
      case 'completed': return <CheckCircle className="w-4 h-4 text-primary" />;
      default: return <AlertTriangle className="w-4 h-4 text-destructive" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gradient-eco">Citizen Dashboard</h2>
          <p className="text-muted-foreground">Make your city cleaner, earn rewards</p>
        </div>
        <Button variant="outline" onClick={onBack}>
          Back to Home
        </Button>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="glass-card hover:scale-105 transition-eco cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full gradient-eco-primary flex items-center justify-center">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold">Report Waste</h3>
            <p className="text-sm text-muted-foreground">Take photo & earn points</p>
          </CardContent>
        </Card>

        <Card className="glass-card hover:scale-105 transition-eco cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full gradient-eco-blue flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold">Request Pickup</h3>
            <p className="text-sm text-muted-foreground">Schedule collection</p>
          </CardContent>
        </Card>

        <Card className="glass-card hover:scale-105 transition-eco cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full gradient-reward flex items-center justify-center">
              <Coins className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold">My Rewards</h3>
            <p className="text-sm text-muted-foreground">₹425 available</p>
          </CardContent>
        </Card>

        <Card className="glass-card hover:scale-105 transition-eco cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full gradient-energy flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold">Support</h3>
            <p className="text-sm text-muted-foreground">Get help & queries</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Reports */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Recent Reports</CardTitle>
          <CardDescription>Your latest waste reports and their status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentReports.map((report) => (
              <div key={report.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  {getStatusIcon(report.status)}
                  <div>
                    <p className="font-medium">{report.location}</p>
                    <p className="text-sm text-muted-foreground">{report.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-primary">+{report.points} pts</p>
                  <p className="text-sm text-muted-foreground capitalize">{report.status}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}