import { GraduationCap, Mail, Phone, MapPin, Instagram, Linkedin, MessageCircle, Flag, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground tricolor-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4 hover-scale">
              <Flag className="h-6 w-6 text-orange-400 flag-wave" />
              <GraduationCap className="h-8 w-8" />
              <span className="font-serif text-xl font-semibold">
                Civil Services Aspirants Club
              </span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Building a community of dedicated civil services aspirants through 
              guidance, mentorship, and collaborative learning. Together, we learn, 
              lead, and serve Mother India with dedication.
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-4 w-4 text-red-400" />
              <span className="text-primary-foreground/90 text-sm italic">
                "जय हिन्द! वन्दे मातरम्!"
              </span>
            </div>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent-dark transition-colors cursor-pointer hover-scale hover-glow">
                <Instagram className="h-5 w-5 text-accent-foreground" />
              </div>
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent-dark transition-colors cursor-pointer hover-scale hover-glow">
                <Linkedin className="h-5 w-5 text-accent-foreground" />
              </div>
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent-dark transition-colors cursor-pointer hover-scale hover-glow">
                <MessageCircle className="h-5 w-5 text-accent-foreground" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-primary-foreground/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/events" className="text-primary-foreground/80 hover:text-white transition-colors">Upcoming Events</a></li>
              <li><a href="/resources" className="text-primary-foreground/80 hover:text-white transition-colors">Study Resources</a></li>
              <li><a href="/gallery" className="text-primary-foreground/80 hover:text-white transition-colors">Photo Gallery</a></li>
              <li><a href="/contact" className="text-primary-foreground/80 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80 text-sm">csac@university.edu</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-accent mt-1" />
                <span className="text-primary-foreground/80 text-sm">
                  University Campus<br />
                  Student Activity Center<br />
                  Room 203, Building A
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/70 text-sm">
            © 2024 Civil Services Aspirants Club. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/70 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/70 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;