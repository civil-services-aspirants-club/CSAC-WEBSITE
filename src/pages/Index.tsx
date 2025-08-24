import { Calendar, Users, BookOpen, ArrowRight, Award, Target, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-bg-new.jpg";
const Index = () => {
  // Replace these with your actual links
  const registrationFormLink = "https://forms.google.com/d/1234567890abcdef/viewform";
  const googleDriveLink = "https://www.googledrive.com";
  
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

  const handleRegistration = () => {
    window.open(registrationFormLink, '_blank');
  };

  const handleDownloadResources = () => {
    window.open(googleDriveLink, '_blank');
  };
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
            <Button 
              onClick={handleRegistration}
              size="lg" 
              className="hover:scale-105 transform transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-8 py-4 shadow-lg hover:shadow-xl border-0"
            >
              Join CSAC <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={handleDownloadResources}
              variant="secondary" 
              size="lg" 
              className="hover:scale-105 transform transition-all duration-300 bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-primary font-semibold shadow-lg hover:shadow-xl"
            >
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
                  <Button 
                    onClick={handleRegistration}
                    className="w-full hover:scale-105 transform transition-all duration-300"
                  >
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Members Say</h2>
            <p className="text-xl text-gray-600">Success stories from our civil services aspirants</p>
          </div>
          
          {/* Horizontal Scrolling Container */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory" 
                 style={{ scrollbarWidth: 'thin', scrollbarColor: 'hsl(var(--primary) / 0.3) transparent' }}>
              
              {/* Testimonial 1 */}
              <div className="min-w-[350px] snap-center">
                <Card className="hover:shadow-xl transform transition-all duration-300 border-0 bg-white h-full hover-scale">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">A</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Ananya Sharma</h3>
                    <p className="text-primary font-semibold mb-4">IAS 2023 - AIR 47</p>
                    <p className="text-gray-600 italic">
                      "CSAC provided me with the perfect environment and resources. The mock interviews and study materials were invaluable in my preparation journey."
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Testimonial 2 */}
              <div className="min-w-[350px] snap-center">
                <Card className="hover:shadow-xl transform transition-all duration-300 border-0 bg-white h-full hover-scale">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">R</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Rajesh Kumar</h3>
                    <p className="text-primary font-semibold mb-4">IPS 2023 - AIR 89</p>
                    <p className="text-gray-600 italic">
                      "The mentorship and guidance from CSAC faculty helped me clear all three stages. The community support was exceptional throughout my preparation."
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Testimonial 3 */}
              <div className="min-w-[350px] snap-center">
                <Card className="hover:shadow-xl transform transition-all duration-300 border-0 bg-white h-full hover-scale">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">P</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Priya Verma</h3>
                    <p className="text-primary font-semibold mb-4">IFS 2022 - AIR 156</p>
                    <p className="text-gray-600 italic">
                      "CSAC's comprehensive approach and regular current affairs sessions made the difference. I'm grateful for the structured preparation methodology."
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Testimonial 4 */}
              <div className="min-w-[350px] snap-center">
                <Card className="hover:shadow-xl transform transition-all duration-300 border-0 bg-white h-full hover-scale">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">V</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Vikram Singh</h3>
                    <p className="text-primary font-semibold mb-4">IRS 2023 - AIR 124</p>
                    <p className="text-gray-600 italic">
                      "The test series and answer writing practice at CSAC were game-changers. The detailed feedback helped me improve my presentation skills significantly."
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Testimonial 5 */}
              <div className="min-w-[350px] snap-center">
                <Card className="hover:shadow-xl transform transition-all duration-300 border-0 bg-white h-full hover-scale">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">S</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Sneha Patel</h3>
                    <p className="text-primary font-semibold mb-4">IAS 2022 - AIR 73</p>
                    <p className="text-gray-600 italic">
                      "CSAC's focus on conceptual clarity and regular doubt-clearing sessions helped me tackle the most challenging questions with confidence."
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Testimonial 6 */}
              <div className="min-w-[350px] snap-center">
                <Card className="hover:shadow-xl transform transition-all duration-300 border-0 bg-white h-full hover-scale">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">M</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Mohammed Ali</h3>
                    <p className="text-primary font-semibold mb-4">IFS 2023 - AIR 201</p>
                    <p className="text-gray-600 italic">
                      "The personalized attention and strategic guidance at CSAC helped me overcome my weaknesses. The peer group discussions were incredibly valuable."
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Scroll Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-primary/50 rounded-full"></div>
              <div className="w-2 h-2 bg-primary/50 rounded-full"></div>
              <div className="w-2 h-2 bg-primary/50 rounded-full"></div>
              <div className="w-2 h-2 bg-primary/50 rounded-full"></div>
              <div className="w-2 h-2 bg-primary/50 rounded-full"></div>
            </div>
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
              <Button 
                onClick={handleRegistration}
                size="lg" 
                className="hover:scale-105 transform transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold shadow-lg hover:shadow-xl border-0"
              >
                Join CSAC Today
              </Button>
              <Button 
                onClick={handleDownloadResources}
                variant="secondary" 
                size="lg" 
                className="hover:scale-105 transform transition-all duration-300 bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-primary font-semibold shadow-lg hover:shadow-xl"
              >
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