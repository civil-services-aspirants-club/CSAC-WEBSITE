import { Mail, Phone, MapPin, Clock, Send, Users, MessageCircle, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-light to-accent opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <MessageCircle className="h-16 w-16 text-accent animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
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

          {/* Quick Access Links */}
          <div className="space-y-8">
            <Card className="shadow-xl hover-glow">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Quick Links</CardTitle>
                <p className="text-muted-foreground">
                  Access important resources and join our community with one click
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScVWJBqsC01mOz5kfTqNgQu4V4LOQUqPIXOGXD-vWQj1FsNLg/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Card className="hover-scale hover-glow transition-all duration-300 border-primary/20">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                              <Users className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-foreground text-lg">Join CSAC</h3>
                              <p className="text-sm text-muted-foreground">Fill out our membership form</p>
                            </div>
                          </div>
                          <Send className="h-5 w-5 text-primary" />
                        </div>
                      </CardContent>
                    </Card>
                  </a>

                  <a
                    href="https://www.googledrive.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Card className="hover-scale hover-glow transition-all duration-300 border-accent/20">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                              <Heart className="h-6 w-6 text-accent" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-foreground text-lg">Study Resources</h3>
                              <p className="text-sm text-muted-foreground">Access our resource library</p>
                            </div>
                          </div>
                          <Send className="h-5 w-5 text-accent" />
                        </div>
                      </CardContent>
                    </Card>
                  </a>

                  <Card className="hover-scale hover-glow transition-all duration-300 border-secondary/20">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                            <MessageCircle className="h-6 w-6 text-secondary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground text-lg">WhatsApp Community</h3>
                            <p className="text-sm text-muted-foreground">Join our discussion group</p>
                          </div>
                        </div>
                        <Send className="h-5 w-5 text-secondary" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* Why Join CSAC */}
            <Card className="shadow-xl hover-glow">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Why Join CSAC?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Expert Mentorship</h4>
                    <p className="text-sm text-muted-foreground">Get guidance from successful civil servants and experienced mentors</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Comprehensive Study Material</h4>
                    <p className="text-sm text-muted-foreground">Access curated resources, previous year papers, and current affairs updates</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Mock Interviews & Tests</h4>
                    <p className="text-sm text-muted-foreground">Regular practice sessions to boost your confidence and performance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Peer Learning</h4>
                    <p className="text-sm text-muted-foreground">Study with motivated peers and participate in group discussions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Regular Workshops</h4>
                    <p className="text-sm text-muted-foreground">Attend sessions on answer writing, personality development, and more</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;