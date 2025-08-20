import { useState } from "react";
import { Camera, Play, Calendar, Users, Award, BookOpen, X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const events = [
    {
      id: 1,
      title: "UPSC Topper Interaction Session",
      date: "March 2024",
      image: "/api/placeholder/400/300",
      category: "Guest Lecture"
    },
    {
      id: 2,
      title: "Mock Interview Practice",
      date: "February 2024",
      image: "/api/placeholder/400/300",
      category: "Practice Session"
    },
    {
      id: 3,
      title: "Current Affairs Discussion",
      date: "January 2024",
      image: "/api/placeholder/400/300",
      category: "Study Circle"
    },
    {
      id: 4,
      title: "Independence Day Celebration",
      date: "August 2024",
      image: "/api/placeholder/400/300",
      category: "Special Event"
    },
    {
      id: 5,
      title: "Essay Writing Workshop",
      date: "December 2023",
      image: "/api/placeholder/400/300",
      category: "Workshop"
    },
    {
      id: 6,
      title: "Group Study Session",
      date: "November 2023",
      image: "/api/placeholder/400/300",
      category: "Study Session"
    }
  ];

  const categories = ["All", "Guest Lecture", "Workshop", "Study Circle", "Practice Session", "Special Event"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredEvents = activeCategory === "All" 
    ? events 
    : events.filter(event => event.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-light to-accent opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Camera className="h-16 w-16 text-accent animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 patriotic-gradient">
              Photo Gallery
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              Moments of Learning, Growth, and Achievement
            </p>
            <div className="mt-8 flex justify-center space-x-8">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-accent" />
                <span>100+ Members</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-accent" />
                <span>50+ Events</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-accent" />
                <span>Memorable Moments</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover-scale ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg hover-glow"
                    : "bg-card border border-border text-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="group cursor-pointer hover-scale"
                onClick={() => setSelectedImage(event.image)}
              >
                <div className="relative overflow-hidden rounded-xl bg-card shadow-lg hover:shadow-xl transition-all duration-300 hover-glow">
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <div className="text-center p-8">
                      <BookOpen className="h-16 w-16 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-2">{event.title}</h3>
                      <p className="text-muted-foreground">{event.date}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
                      <p className="text-sm opacity-90">{event.category}</p>
                      <p className="text-xs opacity-75">{event.date}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {event.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery item"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-light to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Be Part of Our Journey
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join CSAC and create memories while preparing for civil services. Every photo tells a story of dedication and growth.
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover-scale hover-glow">
            Join Our Community
          </button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;