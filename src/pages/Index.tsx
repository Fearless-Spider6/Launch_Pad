
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, TrendingUp, MessageSquare, Trophy, Rocket, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Startup Profile Builder",
      description: "Create comprehensive startup profiles with vision, product details, and market analysis"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-green-500" />,
      title: "Funding Simulation",
      description: "Experience realistic funding rounds with investor negotiations and cap table evolution"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-purple-500" />,
      title: "Virtual Pitch Rooms",
      description: "Interactive pitch sessions with real-time feedback and document sharing"
    },
    {
      icon: <Trophy className="h-8 w-8 text-yellow-500" />,
      title: "Scoring & Leaderboards",
      description: "Get rated on team, product, and market fit while climbing the startup rankings"
    }
  ];

  const stats = [
    { label: "Active Startups", value: "2,847", icon: <Rocket className="h-5 w-5" /> },
    { label: "Total Funding", value: "$124M", icon: <DollarSign className="h-5 w-5" /> },
    { label: "Successful Pitches", value: "1,203", icon: <TrendingUp className="h-5 w-5" /> },
    { label: "Investors", value: "892", icon: <Users className="h-5 w-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              LaunchPad
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Login</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">
            The Future of Startup Simulation
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
            Master the Art of
            <br />
            Startup Funding
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience realistic startup funding scenarios. Build pitch decks, negotiate with investors, 
            and climb the leaderboards in the ultimate startup simulation platform.
          </p>
          
          {/* Role Selection */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Choose Your Role</h3>
            <div className="flex flex-col md:flex-row gap-6 justify-center max-w-2xl mx-auto">
              <Card 
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                  selectedRole === 'founder' ? 'ring-2 ring-blue-500 shadow-lg' : ''
                }`}
                onClick={() => setSelectedRole('founder')}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                    <Rocket className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl">Founder</CardTitle>
                  <CardDescription>
                    Create your startup, build pitch decks, and secure funding
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card 
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                  selectedRole === 'investor' ? 'ring-2 ring-purple-500 shadow-lg' : ''
                }`}
                onClick={() => setSelectedRole('investor')}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-fit">
                    <DollarSign className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-2xl">Investor</CardTitle>
                  <CardDescription>
                    Evaluate startups, negotiate deals, and build your portfolio
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            {selectedRole && (
              <div className="mt-8 animate-fade-in">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Start as {selectedRole === 'founder' ? 'Founder' : 'Investor'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center p-3 bg-gray-100 rounded-full mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From pitch creation to funding simulation, our platform covers every aspect of the startup journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Launch Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of entrepreneurs and investors already mastering the startup ecosystem.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            Start Your Simulation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Rocket className="h-6 w-6" />
                <span className="text-xl font-bold">LaunchPad</span>
              </div>
              <p className="text-gray-400">
                The ultimate startup funding simulation platform.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li>For Founders</li>
                <li>For Investors</li>
                <li>Leaderboards</li>
                <li>Challenges</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Tutorials</li>
                <li>Community</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About</li>
                <li>Careers</li>
                <li>Contact</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LaunchPad. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
