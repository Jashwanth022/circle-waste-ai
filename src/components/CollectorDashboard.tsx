import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, MapPin, Clock, CheckCircle, Navigation, AlertTriangle } from "lucide-react";

interface CollectorDashboardProps {
  onBack: () => void;
}

export default function CollectorDashboard({ onBack }: CollectorDashboardProps) {
  const assignedTasks = [
    { 
      id: 1, 
      location: "Indiranagar Metro Station", 
      address: "100 Feet Road, Indiranagar",
      priority: "High", 
      distance: "2.3 km",
      estimatedTime: "15 min",
      status: "assigned"
    },
    { 
      id: 2, 
      location: "Cubbon Park Entrance", 
      address: "Kasturba Road, Near UB City Mall",
      priority: "Medium", 
      distance: "5.1 km",
      estimatedTime: "25 min",
      status: "assigned"
    },
    { 
      id: 3, 
      location: "Commercial Street", 
      address: "Near Brigade Road Junction",
      priority: "Low", 
      distance: "8.2 km",
      estimatedTime: "35 min",
      status: "in_progress"
    }
  ];

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'High': return <Badge variant="destructive">High Priority</Badge>;
      case 'Medium': return <Badge variant="secondary" className="bg-accent text-accent-foreground">Medium</Badge>;
      case 'Low': return <Badge variant="outline">Low Priority</Badge>;
      default: return <Badge>Normal</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'assigned': return <Clock className="w-4 h-4 text-accent" />;
      case 'in_progress': return <Navigation className="w-4 h-4 text-primary" />;
      case 'completed': return <CheckCircle className="w-4 h-4 text-primary" />;
      default: return <AlertTriangle className="w-4 h-4 text-destructive" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gradient-eco">Collector Dashboard</h2>
          <p className="text-muted-foreground">Execute pickup tasks and maintain city cleanliness</p>
        </div>
        <Button variant="outline" onClick={onBack}>
          Back to Home
        </Button>
      </div>

      {/* Today's Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full gradient-energy flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">Completed Today</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full gradient-eco-blue flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold">5</p>
                <p className="text-sm text-muted-foreground">Pending Tasks</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full gradient-eco-primary flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold">47.3</p>
                <p className="text-sm text-muted-foreground">KM Covered</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full gradient-reward flex items-center justify-center">
                <Camera className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold">98.5%</p>
                <p className="text-sm text-muted-foreground">Photo Accuracy</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Assigned Tasks */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Assigned Tasks</CardTitle>
          <CardDescription>Your pickup assignments for today</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {assignedTasks.map((task) => (
              <div key={task.id} className="p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-eco">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(task.status)}
                    <div>
                      <h4 className="font-medium">{task.location}</h4>
                      <p className="text-sm text-muted-foreground">{task.address}</p>
                    </div>
                  </div>
                  {getPriorityBadge(task.priority)}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {task.distance}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {task.estimatedTime}
                    </span>
                  </div>
                  
                  <div className="flex gap-2">
                    {task.status === 'assigned' && (
                      <>
                        <Button size="sm" variant="eco">
                          Start Task
                        </Button>
                        <Button size="sm" variant="outline">
                          Navigate
                        </Button>
                      </>
                    )}
                    {task.status === 'in_progress' && (
                      <>
                        <Button size="sm" variant="scanner">
                          <Camera className="w-4 h-4 mr-1" />
                          Take Photo
                        </Button>
                        <Button size="sm" variant="eco">
                          Complete
                        </Button>
                      </>
                    )}
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