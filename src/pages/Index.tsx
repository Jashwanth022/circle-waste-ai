import { useState } from 'react';
import { Button } from "@/components/ui/button";
import RoleSelector from '@/components/RoleSelector';
import CitizenDashboard from '@/components/CitizenDashboard';
import AdminDashboard from '@/components/AdminDashboard';
import CollectorDashboard from '@/components/CollectorDashboard';
import StatsOverview from '@/components/StatsOverview';
import heroImage from '@/assets/hero-eco.jpg';
import { Recycle, Shield, Zap, Award, ChevronDown } from 'lucide-react';

type ViewType = 'home' | 'citizen' | 'admin' | 'collector';

const Index = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');

  const handleRoleSelect = (role: 'citizen' | 'admin' | 'collector') => {
    setCurrentView(role);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  const features = [
    {
      icon: Recycle,
      title: "AI-Powered Verification",
      description: "Advanced computer vision validates waste reports with 94.2% accuracy",
      gradient: "gradient-eco-primary"
    },
    {
      icon: Shield,
      title: "Anti-Scam Protection",
      description: "GPS binding, timestamp validation, and live camera requirements",
      gradient: "gradient-eco-blue"
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Instant report processing and collector assignment with notifications",
      gradient: "gradient-energy"
    },
    {
      icon: Award,
      title: "Reward System",
      description: "Earn points for reports, redeem via UPI, coupons, and bill discounts",
      gradient: "gradient-reward"
    }
  ];

  if (currentView !== 'home') {
    return (
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-7xl mx-auto">
          {currentView === 'citizen' && <CitizenDashboard onBack={handleBackToHome} />}
          {currentView === 'admin' && <AdminDashboard onBack={handleBackToHome} />}
          {currentView === 'collector' && <CollectorDashboard onBack={handleBackToHome} />}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="slide-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              W2P-X
              <span className="block text-4xl md:text-5xl text-gradient-eco mt-2">
                Waste-to-Product Exchange
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Eco-Friendly, AI-Powered, Reward-Driven Platform for a Cleaner Tomorrow
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="eco" size="lg" className="text-lg px-8 py-6">
                Get Started Today
              </Button>
              <Button variant="glass" size="lg" className="text-lg px-8 py-6">
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/70" />
          </div>
        </div>
      </section>

      {/* Platform Stats */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient-eco mb-4">Platform Impact</h2>
            <p className="text-xl text-muted-foreground">Real-time statistics from our eco-platform</p>
          </div>
          <StatsOverview />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient-eco mb-4">Powerful Features</h2>
            <p className="text-xl text-muted-foreground">Advanced technology for efficient waste management</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="glass-card p-6 text-center slide-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${feature.gradient}`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Role Selection */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient-eco mb-4">Choose Your Role</h2>
            <p className="text-xl text-muted-foreground">Access role-specific features designed for your needs</p>
          </div>
          <RoleSelector onSelectRole={handleRoleSelect} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Join the Eco Revolution</h3>
          <p className="text-lg mb-6">Together, we can make our cities cleaner and more sustainable</p>
          <Button variant="secondary" size="lg">
            Contact Support
          </Button>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20">
            <p>&copy; 2024 W2P-X Platform. Powered by AI for a Greener Future.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;