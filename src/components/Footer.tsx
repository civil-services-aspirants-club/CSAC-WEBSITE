import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  MessageCircle,
  Heart,
} from "lucide-react";
import csacLogo from "@/assets/csac-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground tricolor-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4 hover-scale">
              <img
                src={csacLogo}
                alt="CSAC Logo"
                className="h-14 w-14 object-contain"
              />
              <span className="font-serif text-xl font-semibold">
                Civil Services Aspirants Club
              </span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Building a community of dedicated civil services aspirants through
              guidance, mentorship, and collaborative learning. Together, we
              learn, lead, and serve Mother India with dedication.
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-4 w-4 text-red-400" />
              <span className="text-primary-foreground/90 text-sm italic">
                शीलं परम भूषणम्
              </span>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/csac_snist/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent-dark transition-colors cursor-pointer hover-scale hover-glow">
                  <Instagram className="h-5 w-5 text-accent-foreground" />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/company/csac-snist/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent-dark transition-colors cursor-pointer hover-scale hover-glow">
                  <Linkedin className="h-5 w-5 text-accent-foreground" />
                </div>
              </a>
              <a
                href="https://chat.whatsapp.com/GwfBDQGipjtLY2dZKUhoIz?mode=ems_copy_c"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent-dark transition-colors cursor-pointer hover-scale hover-glow">
                  <MessageCircle className="h-5 w-5 text-accent-foreground" />
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Upcoming Events
                </a>
              </li>
              <li>
                <a
                  href="/resources"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Study Resources
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Photo Gallery
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80 text-sm">
                  csac@sreenidhi.edu.in
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80 text-sm">
                  +91 78427 65566
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-accent mt-1" />
                <span className="text-primary-foreground/80 text-sm">
                  Room No : 7306
                  <br />
                  Library Block
                  <br />
                  Sreenidhi Institute of Science and Technology
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/70 text-sm">
            © 2025 Civil Services Aspirants Club. All rights reserved.
          </p>
                        <a
                href="https://forms.gle/XcbL2xroFFbVm1Px9"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
          <div className="w-auto px-4 py-2 bg-accent rounded-full flex items-center justify-center hover:bg-accent-dark transition-colors cursor-pointer hover:scale-105 hover:shadow-lg">
            <span className="text-accent-foreground font-semibold">
              Report Bug
            </span>
          </div>
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
