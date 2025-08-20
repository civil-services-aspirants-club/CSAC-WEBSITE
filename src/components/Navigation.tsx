import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, GraduationCap, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Resources", path: "/resources" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md border-b border-border sticky top-0 z-50 tricolor-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 hover-scale">
            <Flag className="h-6 w-6 text-orange-500 flag-wave" />
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="font-serif text-xl font-semibold text-primary">
              CSAC
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium transition-colors duration-200 hover-scale ${
                    isActive
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="btn-accent hover-glow">
              Join CSAC
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-primary bg-secondary"
                        : "text-muted-foreground hover:text-primary hover:bg-secondary"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="px-3 py-2">
                <Button className="btn-accent w-full">
                  Join CSAC
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;