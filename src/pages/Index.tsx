import { Calendar, Users, BookOpen, ArrowRight, Award, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  const upcomingEvents = [
    {
      date: "Dec 15",
      title: "UPSC Mains Strategy Workshop",
      time: "2:00 PM - 5:00 PM",
      venue: "Auditorium A"
    },
    {
      date: "Dec 20", 
      title: "Mock Interview Session",
      time: "10:00 AM - 4:00 PM",
      venue: "Conference Room 1"
    },
    {
      date: "Dec 25",
      title: "Current Affairs Discussion",
      time: "3:00 PM - 5:00 PM", 
      venue: "Study Hall"
    }
  ];

  const features = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Expert Mentorship",
      description: "Get guidance from experienced faculty and successful candidates"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Study Resources",
      description: "Access comprehensive study materials and previous year papers"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Mock Tests",
      description: "Regular mock tests and practice sessions for better preparation"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.8), rgba(30, 64, 175, 0.9)), url(${heroImage})` 
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 animate-fade-in">
            Civil Services Aspirants Club
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-8 animate-slide-up">
            Learn. Lead. Serve.
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-12 animate-fade-in">
            Join our community of dedicated civil services aspirants. Together, we prepare 
            for UPSC and State services through collaborative learning, expert guidance, 
            and unwavering support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button size="lg" className="btn-accent text-lg px-8 py-4">
              Join CSAC Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              View Upcoming Events
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="card-shadow p-6 rounded-lg bg-card">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Active Members</div>
            </div>
            <div className="card-shadow p-6 rounded-lg bg-card">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <div className="text-muted-foreground">Events Conducted</div>
            </div>
            <div className="card-shadow p-6 rounded-lg bg-card">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Successful Candidates</div>
            </div>
            <div className="card-shadow p-6 rounded-lg bg-card">
              <div className="text-3xl font-bold text-accent mb-2">5</div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Upcoming Sessions & Workshops
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with our latest events designed to boost your preparation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="card-shadow border-0 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-medium">
                      {event.date}
                    </div>
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {event.title}
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>Time: {event.time}</div>
                    <div>Venue: {event.venue}</div>
                  </div>
                  <Button className="w-full mt-4 btn-professional">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View All Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Why Choose CSAC?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive support for your civil services journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-shadow border-0 text-center">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12">
            Quick Access
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 h-24 text-lg">
              <div className="flex flex-col items-center">
                <Calendar className="h-6 w-6 mb-2" />
                Register for Events
              </div>
            </Button>
            
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 h-24 text-lg">
              <div className="flex flex-col items-center">
                <BookOpen className="h-6 w-6 mb-2" />
                Study Resources
              </div>
            </Button>
            
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 h-24 text-lg">
              <div className="flex flex-col items-center">
                <Users className="h-6 w-6 mb-2" />
                Our Mentors
              </div>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 accent-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of motivated students in their quest for civil services success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-accent hover:bg-white/90 text-lg px-8 py-4">
              Join CSAC Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-accent text-lg px-8 py-4">
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
