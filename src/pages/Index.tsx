import { Calendar, Users, BookOpen, ArrowRight, Award, Target, Flag, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-bg.jpg";
const Index = () => {
  const upcomingEvents = [{
    date: "Dec 15",
    title: "UPSC Mains Strategy Workshop",
    time: "2:00 PM - 5:00 PM",
    venue: "Auditorium A"
  }, {
    date: "Dec 20",
    title: "Mock Interview Session",
    time: "10:00 AM - 4:00 PM",
    venue: "Conference Room 1"
  }, {
    date: "Dec 25",
    title: "Current Affairs Discussion",
    time: "3:00 PM - 5:00 PM",
    venue: "Study Hall"
  }];
  const features = [{
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Expert Mentorship",
    description: "Get guidance from experienced faculty and successful candidates"
  }, {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "Study Resources",
    description: "Access comprehensive study materials and previous year papers"
  }, {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Mock Tests",
    description: "Regular mock tests and practice sessions for better preparation"
  }];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/80" />
        
        {/* Patriotic Elements */}
        <div className="absolute top-10 left-10 opacity-20">
          <Flag className="h-20 w-20 text-saffron animate-wave" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-20">
          <Heart className="h-16 w-16 text-green animate-pulse" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center mb-6">
            <Target className="h-12 w-12 text-saffron mr-4 animate-bounce" />
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight hero-text">
              Civil Services
            </h1>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-saffron">
            Aspirants Club
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 font-medium">
            Learn. Lead. Serve the Nation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hover:scale-105 transform transition-all duration-300 bg-saffron hover:bg-saffron/90 text-primary font-bold px-8 py-4">
              Join CSAC <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="secondary" size="lg" className="hover:scale-105 transform transition-all duration-300 bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-primary font-semibold shadow-lg hover:shadow-xl">
              Explore Resources
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div className="hover:scale-110 transform transition-all duration-300">
              <Users className="h-12 w-12 mx-auto mb-4 text-saffron" />
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-lg opacity-90">Active Members</p>
            </div>
            <div className="hover:scale-110 transform transition-all duration-300">
              <Award className="h-12 w-12 mx-auto mb-4 text-green" />
              <h3 className="text-3xl font-bold">50+</h3>
              <p className="text-lg opacity-90">Success Stories</p>
            </div>
            <div className="hover:scale-110 transform transition-all duration-300">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-saffron" />
              <h3 className="text-3xl font-bold">100+</h3>
              <p className="text-lg opacity-90">Study Resources</p>
            </div>
            <div className="hover:scale-110 transform transition-all duration-300">
              <Star className="h-12 w-12 mx-auto mb-4 text-green" />
              <h3 className="text-3xl font-bold">24/7</h3>
              <p className="text-lg opacity-90">Mentorship</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Join our upcoming sessions and workshops</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-xl hover:scale-105 transform transition-all duration-300 border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-6 w-6 text-primary mr-3" />
                    <span className="text-lg font-semibold text-primary">{event.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-2">{event.time}</p>
                  <p className="text-gray-600 mb-4">{event.venue}</p>
                  <Button className="w-full hover:scale-105 transform transition-all duration-300">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose CSAC?</h2>
            <p className="text-xl text-gray-600">Empowering future civil servants with excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 rounded-lg hover:shadow-lg hover:scale-105 transform transition-all duration-300 group">
                <div className="mb-6 group-hover:scale-110 transform transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-primary">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of aspirants who are preparing for civil services with CSAC
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hover:scale-105 transform transition-all duration-300 bg-saffron hover:bg-saffron/90 text-primary font-bold">
                Join CSAC Today
              </Button>
              <Button variant="secondary" size="lg" className="hover:scale-105 transform transition-all duration-300 bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-primary font-semibold shadow-lg hover:shadow-xl">
                Download Resources
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Index;