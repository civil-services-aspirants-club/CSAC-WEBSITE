import { Camera, Users, Award } from "lucide-react";

const Gallery = () => {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
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
                <Award className="h-5 w-5 text-accent" />
                <span>Memorable Moments</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Ready for direct photos */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Journey in Pictures
            </h2>
            <p className="text-muted-foreground text-lg">
              Gallery section ready for your photos
            </p>
          </div>
          
          {/* Photo Grid - Ready for direct image uploads */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Photos will be added directly here */}
          </div>
        </div>
      </section>

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