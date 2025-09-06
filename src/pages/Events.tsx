import { useState } from "react";
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Events = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    department: "",
    event: "",
    message: ""
  });

  const { toast } = useToast();

  const upcomingEvents = [
    {
      id: 1,
      title: "UPSC Mains Strategy Workshop",
      date: "December 15, 2024",
      time: "2:00 PM - 5:00 PM",
      venue: "Main Auditorium",
      speaker: "Dr. Priya Sharma",
      description: "Comprehensive strategy session for UPSC Mains preparation covering answer writing techniques and time management.",
      seats: "50 seats available",
      type: "Workshop",
      display : true
    },
    {
      id: 2,
      title: "Mock Interview Panel",
      date: "December 20, 2024", 
      time: "10:00 AM - 4:00 PM",
      venue: "Conference Room 1-3",
      speaker: "Alumni Panel",
      description: "Individual mock interview sessions with feedback from successful candidates and expert panel members.",
      seats: "20 slots available",
      type: "Interview",
      display : false
    },
    {
      id: 3,
      title: "Current Affairs Group Discussion",
      date: "December 25, 2024",
      time: "3:00 PM - 5:00 PM", 
      venue: "Study Hall B",
      speaker: "Student Coordinators",
      description: "Weekly current affairs discussion focusing on recent developments and their implications for civil services.",
      seats: "Unlimited",
      type: "Discussion",
      display : true
    },
    {
      id: 4,
      title: "Current Affairs Group Discussion",
      date: "December 25, 2024",
      time: "3:00 PM - 5:00 PM", 
      venue: "Study Hall B",
      speaker: "Student Coordinators",
      description: "Weekly current affairs discussion focusing on recent developments and their implications for civil services.",
      seats: "Unlimited",
      type: "Discussion",
      display : true
    }
  ];

  const pastEvents = [
    {
      title: "Guest lecture by Shri GHP Raju Sir, IPS",
      date: "July 2025",
      participants: "250+ attendees",
      description: "An insightful session delivered by Shri GHP Raju Sir, IPS, sharing valuable guidance and experiences."
    },
    {
      title: "Annadaata - A celebration for Kisan Diwas",
      date: "December 2024", 
      participants: "70+ attendees",
      description: " A visit to Kachavani Singaram allowed students to learn about farming techniques and challenges, fostering a deeper appreciation for farmers’ contributions to the society."
    },
    {
      title: "An Expert Talk by Shri Akella Raghavendra Sir",
      date: "September 2024",
      participants: "150+ attendees", 
      description: "This session explored career opportunities in the government sector for engineering graduates, with practical insights shared by the renowned mentor Akella Raghavendra sir."
    },
    {
      title: "An interactive session with Shri Jaya Prakash Narayan Sir, IAS ",
      date: "August 2024",
      participants: "500+ attendees",
      description: "Dr.JP Narayana sir shared stories from his distinguished IAS career, highlighting the importance of ethical governance and impactful leadership, followed by an enriching Q&A session"
    },
    {
      title: "A Guest Lecture by Shri J D Lakshmi Narayan Sir, IPS",
      date: "July 2024",
      participants: "500+ attendees",
      description: "This guest lecture by Mr JD Lakshmi Narayan left a profound impact on the participants. The session inspired students to imbibe leadership qualities and apply the insights shared to their career journeys."
    },
    {
      title: "An inspirational session by Balalatha Mam",
      date: "June 2024",
      participants: "500+ attendees",
      description: " Ms. Balalatha, a former Deputy Director in the Ministry of Defence, inspired students with her journey and provided insights into strategic UPSC preparation. "
    },
    {
      title: "Mock UPSC exam ",
      date: "May 2024",
      participants: "100+ attendees",
      description: "A simulated UPSC test with inter-college debates on constitutional issues and landmark judgments."
    },
    {
      title: "CSAC 8th Anniversary Celebrations",
      date: "April 2024",
      participants: "75+ aspirants",
      description: "A memorable farewell-style gathering with engaging sessions and shared experiences."
    },

  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Successful!",
      description: "We'll send you event details and confirmations via email.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      college: "",
      department: "",
      event: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 animate-fade-in">
            Events & Workshops
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up">
            Join our comprehensive events designed to accelerate your civil services preparation
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 pb-0 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Upcoming Events
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't miss these important sessions and workshops
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {upcomingEvents.filter(event => event.display !== false).map((event) => (

              <Card key={event.id} className="card-shadow border-0 overflow-hidden">
                <CardHeader className="bg-secondary">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium mb-2">
                        {event.type}
                      </div>
                      <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      {event.venue}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2 text-primary" />
                      {event.seats}
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {event.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-accent">
                      Speaker: {event.speaker}
                    </span>
                    <Button className="btn-professional">
                      Register Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 pt-10 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Past Events Archive
            </h2>
            <p className="text-lg text-muted-foreground">
              Successful events that have benefited our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <Card key={index} className="card-shadow border-0">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {event.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-accent font-medium">
                      {event.date}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {event.participants}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;