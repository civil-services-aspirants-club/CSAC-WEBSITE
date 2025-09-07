import { useState } from "react";
import {
  Calendar,
  Users,
  BookOpen,
  ArrowRight,
  Award,
  Star,
  Edit2,
  Save,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import heroImage from "@/assets/hero-bg-new.jpg";
import csacLogo from "@/assets/csac-logo.png";
const Index = () => {
  // Replace these with your actual links
  const registrationFormLink = "https://forms.gle/71MmruT8e8T7H25w8";
  const googleDriveLink =
    "https://drive.google.com/drive/folders/1cmvWEIlXdSSb3Fm8AavGkbE8y2UaJcgv?usp=sharing";
  const [editingEvent, setEditingEvent] = useState<number | null>(null);
  const [upcomingEvents, setUpcomingEvents] = useState([
        {
      date: "Oct 7",
      title: "Workshop on Time management",
      time: "10:00 AM - 4:00 PM",
      venue: "49/-",
       link :"https://forms.gle/cAcDUoxVMtk9o3dt5",
    },
        {
      date: "Oct 18",
      title: "Civil Services Awareness Drive",
      time: "10:00 AM - 4:00 PM",
      venue: "Free",
      link: " https://forms.gle/uZkMsxayNxCrTfoN9 ",
    },
        {
      date: "Oct 22",
      title: "Current Affairs Group Discussion",
      time: "10:00 AM - 4:00 PM",
      venue: "Free",
       link :" https://forms.gle/G7QkqYAMwNSRdbBX7",
    },
    {
      date: "Nov 3rd & 4th",
      title: "Mock UPSC",
      time: "10:00 AM - 4:00 PM",
      venue: "Free", // i am showing price here
      link :"https://forms.gle/8y7Nd2Y5jjHLDwdV7",
    },


    {
      date: "Nov 12",
      title: "Extempore",
      time: "10:00 AM - 4:00 PM",
      venue: "49/-",
       link :"https://forms.gle/EEpwdEP4FsShwkSLA",
    },

  ]);
  const handleRegistration = () => {
    window.open(registrationFormLink, "_blank");
  };
  const handleDownloadResources = () => {
    window.open(googleDriveLink, "_blank");
  };
  const handleEditEvent = (index: number) => {
    setEditingEvent(index);
  };
  const handleSaveEvent = (index: number, field: string, value: string) => {
    const updatedEvents = [...upcomingEvents];
    updatedEvents[index] = {
      ...updatedEvents[index],
      [field]: value,
    };
    setUpcomingEvents(updatedEvents);
  };
  const handleCancelEdit = () => {
    setEditingEvent(null);
  };
  const features = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Expert Mentorship",
      description:
        "Get guidance from experienced faculty and successful candidates",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Study Resources",
      description:
        "Access comprehensive study materials and previous year papers",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Mock Tests",
      description:
        "Regular mock tests and practice sessions for better preparation",
    },
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-primary/80" />

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="flex flex-col items-center justify-center mb-6">
            <img
              src={csacLogo}
              alt="CSAC Logo"
              className="h-32 w-32 object-contain mb-6 animate-fade-in"
            />
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight hero-text">
              Civil Services
            </h1>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-saffron">
            Aspirants Club
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 font-medium">
            Sheelam Param Bhushanam
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
      <section className="py-16 bg-gradient-to-r from-[#0a192f] to-[#1e3a8a]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div className="hover:scale-110 transform transition-all duration-300">
              <Users className="h-12 w-12 mx-auto mb-4 text-saffron" />
              <h3 className="text-3xl font-bold">300+</h3>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600">
              Join our upcoming sessions and workshops
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transform transition-all duration-300 border-l-4 border-l-primary relative"
              >
                <CardContent className="p-6">
                  {/* Edit Button */}

                  <div className="flex items-center mb-4">
                    <Calendar className="h-6 w-6 text-primary mr-3" />
                    {editingEvent === index ? (
                      <Input
                        className="text-lg font-semibold text-primary bg-transparent border-b border-primary"
                        value={event.date}
                        onChange={(e) =>
                          handleSaveEvent(index, "date", e.target.value)
                        }
                      />
                    ) : (
                      <span className="text-lg font-semibold text-primary">
                        {event.date}
                      </span>
                    )}
                  </div>

                  {editingEvent === index ? (
                    <>
                      <Input
                        className="text-xl font-bold text-gray-900 mb-2 bg-transparent border-b"
                        value={event.title}
                        onChange={(e) =>
                          handleSaveEvent(index, "title", e.target.value)
                        }
                        placeholder="Enter event title"
                      />
                      <Input
                        className="text-gray-600 mb-2 bg-transparent border-b"
                        value={event.time}
                        onChange={(e) =>
                          handleSaveEvent(index, "time", e.target.value)
                        }
                        placeholder="Enter time"
                      />
                      <Input
                        className="text-gray-600 mb-4 bg-transparent border-b"
                        value={event.venue}
                        onChange={(e) =>
                          handleSaveEvent(index, "venue", e.target.value)
                        }
                        placeholder="Enter venue"
                      />
                    </>
                  ) : (
                    <>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 mb-2">{event.time}</p>
                      <p className="text-gray-600 mb-4">{event.venue}</p>
                    </>
                  )}
                  <Button
                    onClick={() =>
                      window.open(event.link || registrationFormLink, "_blank")
                    }
                    className="w-full hover:scale-105 transform transition-all duration-300"
                    disabled={editingEvent === index}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose CSAC?
            </h2>
            <p className="text-xl text-gray-600">
              Empowering future civil servants with excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-lg hover:shadow-lg hover:scale-105 transform transition-all duration-300 group"
              >
                <div className="mb-6 group-hover:scale-110 transform transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Testimonials
            </h2>
            <p className="text-xl text-gray-600"></p>
          </div>

          {/* Horizontal Scrolling Container */}
          <div className="relative overflow-hidden">
            <div
              className="flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory"
              style={{
                scrollbarWidth: "none",
                scrollbarColor: "hsl(var(--primary) / 0.3) transparent",
              }}
            >
              {/* Testimonial 1 */}
              <div className="min-w-[350px] snap-center">
                <Card className="hover:shadow-xl transform transition-all duration-300 border-0 bg-white h-full hover-scale">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4">
                      <img
                        src="/team/24.jpg" // ✅ use forward slashes
                        alt="Loading"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Dr. T Ch Siva Reddy
                    </h3>
                    <p className="text-primary font-semibold mb-4">
                      Principal - SNIST
                    </p>
                    <p className="text-gray-600 italic">
                      "CSAC has created an excellent platform for students to
                      achieve their dreams. The commitment and guidance provided
                      are truly commendable."
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Testimonial 2 */}
              <div className="min-w-[350px] snap-center">
                <Card className="hover:shadow-xl transform transition-all duration-300 border-0 bg-white h-full hover-scale">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4">
                      <img
                        src="team/25.jpg" // ✅ use forward slashes
                        alt="Loading"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Dr. A Purushotham
                    </h3>
                    <p className="text-primary font-semibold mb-4">
                      Dean - Student Affairs
                    </p>
                    <p className="text-gray-600 italic">
                      “CSAC stands out for its holistic approach towards student
                      development. The mentorship and resources offered are of
                      the highest quality.”
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Testimonial 3 */}
              <div className="min-w-[350px] snap-center">
                <Card className="hover:shadow-xl transform transition-all duration-300 border-0 bg-white h-full hover-scale">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4">
                      <img
                        src="team/1.jpg" // ✅ use forward slashes
                        alt="Loading"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Dr. Jaffer Sadiq
                    </h3>
                    <p className="text-primary font-semibold mb-4">
                      Convenor - CSAC, HOD - DS
                    </p>
                    <p className="text-gray-600 italic">
                      “CSAC has been instrumental in shaping aspirants into
                      confident achievers. Its structured programs and dedicated
                      faculty make a real difference.”
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Testimonial 4 */}
              <div className="min-w-[350px] snap-center">
                <Card className="hover:shadow-xl transform transition-all duration-300 border-0 bg-white h-full hover-scale">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4">
                      <img
                        src="team/26.jpg" // ✅ use forward slashes
                        alt="Loading"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Dr. V Ram Prasad
                    </h3>
                    <p className="text-primary font-semibold mb-4">
                      Former Convenor
                    </p>
                    <p className="text-gray-600 italic">
                      “CSAC continues to inspire students to aim higher and
                      achieve more. Its consistent efforts and results speak for
                      themselves.”
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Testimonial 5 */}
              <div className="min-w-[350px] snap-center">
                <Card className="hover:shadow-xl transform transition-all duration-300 border-0 bg-white h-full hover-scale">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4">
                      <img
                        src="team/2.jpg" // ✅ use forward slashes
                        alt="Loading"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      D Anagha Sreenidhi
                    </h3>
                    <p className="text-primary font-semibold mb-4">
                      President 2025-26
                    </p>
                    <p className="text-gray-600 italic">
                      “Being a part of CSAC has been a transformative journey.
                      The learning, support, and opportunities here empower
                      every aspirant.”
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
      <section className="py-16 bg-gradient-to-r from-[#0a192f] to-[#1e3a8a]  ">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of aspirants who are preparing for civil services
              with CSAC
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
                size="lg"
                className="hover:scale-105 transform transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold shadow-lg hover:shadow-xl border-0"
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
