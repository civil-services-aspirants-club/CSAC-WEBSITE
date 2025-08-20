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
      type: "Workshop"
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
      type: "Interview"
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
      type: "Discussion"
    },
    {
      id: 4,
      title: "Essay Writing Masterclass",
      date: "January 5, 2025",
      time: "11:00 AM - 3:00 PM",
      venue: "Classroom 205",
      speaker: "Prof. Rajesh Kumar",
      description: "Learn effective essay writing techniques for UPSC with practice sessions and personalized feedback.",
      seats: "30 seats available",
      type: "Masterclass"
    }
  ];

  const pastEvents = [
    {
      title: "UPSC Prelims Mock Test Series",
      date: "November 2024",
      participants: "120+ students",
      description: "Comprehensive mock test series with detailed analysis and feedback sessions."
    },
    {
      title: "Guest Lecture by IAS Officer",
      date: "October 2024", 
      participants: "200+ attendees",
      description: "Inspiring session by Ms. Ananya Singh (IAS 2019) on preparation strategy and motivation."
    },
    {
      title: "Study Materials Distribution Drive",
      date: "September 2024",
      participants: "150+ beneficiaries", 
      description: "Free distribution of updated study materials and previous year question papers."
    }
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
      <section className="py-20 bg-background">
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
            {upcomingEvents.map((event) => (
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

      {/* Registration Form */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Event Registration
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below to register for upcoming events
            </p>
          </div>

          <Card className="card-shadow border-0">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="college">College/University *</Label>
                    <Input
                      id="college"
                      value={formData.college}
                      onChange={(e) => handleInputChange("college", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="department">Department/Course</Label>
                    <Input
                      id="department"
                      value={formData.department}
                      onChange={(e) => handleInputChange("department", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="event">Select Event *</Label>
                    <Select value={formData.event} onValueChange={(value) => handleInputChange("event", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Choose an event" />
                      </SelectTrigger>
                      <SelectContent>
                        {upcomingEvents.map((event) => (
                          <SelectItem key={event.id} value={event.title}>
                            {event.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Additional Message (Optional)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="mt-1"
                    rows={3}
                    placeholder="Any specific requirements or questions..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full btn-accent">
                  Register for Event
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-background">
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