import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, MapPin, Clock, CheckCircle, Navigation, AlertTriangle, Route } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CollectorDashboardProps {
  onBack: () => void;
}

export default function CollectorDashboard({ onBack }: CollectorDashboardProps) {
  const { toast } = useToast();
  const [stats, setStats] = useState({
    completed: 0,
    pending: 0,
    distance: 0,
    accuracy: 0
  });

  const [assignedTasks, setAssignedTasks] = useState([
    { 
      id: 1, 
      location: "Adyar Signal, Chennai", 
      address: "Lattice Bridge Road, Near Adyar",
      priority: "High", 
      distance: "2.3 km",
      estimatedTime: "15 min",
      status: "assigned"
    },
    { 
      id: 2, 
      location: "Saibaba Colony, Coimbatore", 
      address: "Avinashi Road, Near GRG School",
      priority: "Medium", 
      distance: "5.1 km",
      estimatedTime: "25 min",
      status: "assigned"
    },
    { 
      id: 3, 
      location: "Meenakshi Amman Temple, Madurai", 
      address: "Temple Street, Near East Gate",
      priority: "Low", 
      distance: "8.2 km",
      estimatedTime: "35 min",
      status: "in_progress"
    }
  ]);

  const handleStartTask = (taskId: number) => {
    setAssignedTasks(prev => prev.map(task => 
      task.id === taskId ? { ...task, status: "in_progress" } : task
    ));
    setStats(prev => ({ ...prev, pending: Math.max(0, prev.pending - 1) }));
    
    toast({
      title: "Task Started 🚛",
      description: "GPS tracking activated. Navigate to the location and take before photos.",
    });
  };

  const handleNavigate = (taskId: number) => {
    const task = assignedTasks.find(t => t.id === taskId);
    toast({
      title: "Navigation Started 🗺️",
      description: `Directing you to ${task?.location}. Estimated time: ${task?.estimatedTime}`,
    });
  };

  const handleTakePhoto = (taskId: number) => {
    toast({
      title: "Camera Opened 📸",
      description: "Take before/after photos. GPS location will be automatically verified.",
    });
    
    setTimeout(() => {
      toast({
        title: "Photo Captured! ✅",
        description: "GPS verified. Location matches assigned task. Ready to complete.",
      });
    }, 2000);
  };

  const handleCompleteTask = (taskId: number) => {
    setAssignedTasks(prev => prev.filter(task => task.id !== taskId));
    setStats(prev => ({ 
      ...prev, 
      completed: prev.completed + 1,
      distance: prev.distance + 2.3,
      accuracy: Math.min(100, prev.accuracy + 0.5)
    }));
    
    toast({
      title: "Task Completed! 🎉",
      description: "Great work! Photos uploaded and location verified. Payment will be processed.",
    });
  };

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
          <p className="text-muted-foreground">Execute pickup tasks across Tamil Nadu</p>
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
                <p className="text-2xl font-bold">{stats.completed}</p>
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
                <p className="text-2xl font-bold">{assignedTasks.length}</p>
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
                <p className="text-2xl font-bold">{stats.distance.toFixed(1)}</p>
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
                <p className="text-2xl font-bold">{stats.accuracy.toFixed(1)}%</p>
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
            {assignedTasks.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <CheckCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
                <p>All tasks completed! Great work today.</p>
              </div>
            ) : (
              assignedTasks.map((task) => (
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
                          <Button size="sm" variant="eco" onClick={() => handleStartTask(task.id)}>
                            Start Task
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => handleNavigate(task.id)}>
                            <Route className="w-4 h-4 mr-1" />
                            Navigate
                          </Button>
                        </>
                      )}
                      {task.status === 'in_progress' && (
                        <>
                          <Button size="sm" variant="scanner" onClick={() => handleTakePhoto(task.id)}>
                            <Camera className="w-4 h-4 mr-1" />
                            Take Photo
                          </Button>
                          <Button size="sm" variant="eco" onClick={() => handleCompleteTask(task.id)}>
                            Complete
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}