import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Users, MessageCircle, Heart, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    department: "",
    year: "",
    message: "",
    interests: [] as string[]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const interests = [
    "UPSC Preparation",
    "State PSC",
    "Group Discussions",
    "Mock Interviews",
    "Current Affairs",
    "Optional Subjects",
    "Essay Writing",
    "Mentorship"
  ];

  const toggleInterest = (interest: string) => {
    setFormData({
      ...formData,
      interests: formData.interests.includes(interest)
        ? formData.interests.filter(i => i !== interest)
        : [...formData.interests, interest]
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-light to-accent opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex justify-center mb-6 space-x-4">
              <Flag className="h-12 w-12 text-accent flag-wave" />
              <MessageCircle className="h-16 w-16 text-accent animate-pulse" />
              <Heart className="h-12 w-12 text-red-400 animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 patriotic-gradient">
              Join CSAC Family
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              Ready to start your civil services journey? Connect with us and become part of our dedicated community.
            </p>
            <div className="mt-8 text-primary-foreground/90 italic">
              <span className="text-accent">"</span>
              सेवा ही धर्म है - Service is Righteousness
              <span className="text-accent">"</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Have questions about civil services preparation? Want to join our study groups? 
                We're here to help you on your journey to serve the nation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover-scale hover-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email Us</h3>
                      <p className="text-sm text-muted-foreground">Quick response</p>
                    </div>
                  </div>
                  <p className="text-foreground">csac@sreenidhi.edu.in</p>
                </CardContent>
              </Card>

              <Card className="hover-scale hover-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Call Us</h3>
                      <p className="text-sm text-muted-foreground">Mon-Fri, 9-6</p>
                    </div>
                  </div>
                  <p className="text-foreground">+91 98765 43210</p>
                </CardContent>
              </Card>

              <Card className="hover-scale hover-glow transition-all duration-300 md:col-span-2">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Visit Us</h3>
                      <p className="text-sm text-muted-foreground">Student Activity Center</p>
                    </div>
                  </div>
                  <p className="text-foreground">
                    Room 203, Building A<br />
                    Sreenidhi Institute of Science & Technology<br />
                    Hyderabad, Telangana
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-scale hover-glow transition-all duration-300 md:col-span-2">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Office Hours</h3>
                      <p className="text-sm text-muted-foreground">Regular meeting times</p>
                    </div>
                  </div>
                  <div className="space-y-1 text-foreground">
                    <p>Monday - Friday: 5:00 PM - 7:00 PM</p>
                    <p>Saturday: 2:00 PM - 6:00 PM</p>
                    <p>Sunday: Special sessions (as announced)</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Links */}
            <div className="bg-card rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-foreground mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center hover:bg-accent-dark transition-colors cursor-pointer hover-scale hover-glow">
                  <MessageCircle className="h-6 w-6 text-accent-foreground" />
                </div>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center hover:bg-accent-dark transition-colors cursor-pointer hover-scale hover-glow">
                  <Mail className="h-6 w-6 text-accent-foreground" />
                </div>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center hover:bg-accent-dark transition-colors cursor-pointer hover-scale hover-glow">
                  <Users className="h-6 w-6 text-accent-foreground" />
                </div>
              </div>
              <p className="text-muted-foreground text-sm mt-4">
                Join our WhatsApp group for daily updates and discussions!
              </p>
            </div>
          </div>

          {/* Join Us Form */}
          <Card className="shadow-xl hover-glow">
            <CardHeader>
              <CardTitle className="text-2xl patriotic-gradient">Join CSAC Today</CardTitle>
              <p className="text-muted-foreground">
                Fill out this form to become a member of our civil services preparation community.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="hover:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="hover:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="hover:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Year of Study
                    </label>
                    <Input
                      name="year"
                      value={formData.year}
                      onChange={handleInputChange}
                      placeholder="e.g., 2nd Year, Final Year"
                      className="hover:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      College/Institution
                    </label>
                    <Input
                      name="college"
                      value={formData.college}
                      onChange={handleInputChange}
                      placeholder="Your college name"
                      className="hover:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Department/Branch
                    </label>
                    <Input
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      placeholder="e.g., CSE, ECE, Mechanical"
                      className="hover:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Areas of Interest
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {interests.map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleInterest(interest)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover-scale ${
                          formData.interests.includes(interest)
                            ? "bg-primary text-primary-foreground shadow-md hover-glow"
                            : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message (Optional)
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your goals, expectations, or any questions you have..."
                    className="min-h-[100px] hover:border-primary transition-colors"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full patriotic-gradient hover:scale-105 transition-all duration-300 hover-glow"
                  size="lg"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Join CSAC Community
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;