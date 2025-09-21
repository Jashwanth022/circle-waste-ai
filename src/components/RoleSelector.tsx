import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Building2, Truck, Shield, Camera, Coins } from "lucide-react";

interface RoleSelectorProps {
  onSelectRole: (role: 'citizen' | 'admin' | 'collector') => void;
}

export default function RoleSelector({ onSelectRole }: RoleSelectorProps) {
  const roles = [
    {
      id: 'citizen' as const,
      title: 'Citizen',
      description: 'Report waste, request pickups, earn rewards',
      icon: Users,
      gradient: 'gradient-trust',
      features: ['Camera reporting', 'GPS tracking', 'Reward points', 'Query support'],
      buttonVariant: 'trust' as const
    },
    {
      id: 'admin' as const,
      title: 'Municipality Admin',
      description: 'Manage reports, verify waste, track analytics',
      icon: Building2,
      gradient: 'gradient-eco-blue',
      features: ['AI verification', 'Admin dashboard', 'Analytics', 'Query management'],
      buttonVariant: 'secondary' as const
    },
    {
      id: 'collector' as const,
      title: 'Waste Collector',
      description: 'Execute pickup tasks, upload proof photos',
      icon: Truck,
      gradient: 'gradient-energy',
      features: ['Task assignment', 'Photo validation', 'GPS verification', 'Query system'],
      buttonVariant: 'energy' as const
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {roles.map((role) => {
        const IconComponent = role.icon;
        return (
          <Card key={role.id} className="glass-card hover:scale-105 transition-eco cursor-pointer group">
            <CardHeader className="text-center pb-4">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${role.gradient}`}>
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-bold">{role.title}</CardTitle>
              <CardDescription className="text-muted-foreground">
                {role.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {role.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Button 
                variant={role.buttonVariant}
                className="w-full"
                onClick={() => onSelectRole(role.id)}
              >
                Enter as {role.title}
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}