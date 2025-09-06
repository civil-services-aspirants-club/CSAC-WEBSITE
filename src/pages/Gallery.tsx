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
            </p>
          </div>
          
          {/* Photo Grid - Ready for direct image uploads */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Photos will be added directly here */}
            <img src="src/assets/gallery/img1.jpg" alt="Photo 1" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img2.jpg" alt="Photo 2" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img3.jpg" alt="Photo 3" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img4.jpg" alt="Photo 4" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img5.jpg" alt="Photo 5" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img6.jpg" alt="Photo 6" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img7.jpg" alt="Photo 7" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img8.jpg" alt="Photo 8" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img9.jpg" alt="Photo 9" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img10.jpg" alt="Photo 10" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img11.jpg" alt="Photo 11" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img12.jpg" alt="Photo 12" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img13.jpg" alt="Photo 13" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img14.jpg" alt="Photo 14" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img15.jpg" alt="Photo 15" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img16.jpg" alt="Photo 16" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img17.jpg" alt="Photo 17" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img18.jpg" alt="Photo 18" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img19.jpg" alt="Photo 19" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img20.jpg" alt="Photo 20" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img21.jpg" alt="Photo 21" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img22.jpg" alt="Photo 22" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img23.jpg" alt="Photo 23" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img24.jpg" alt="Photo 24" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img25.jpg" alt="Photo 25" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img26.jpg" alt="Photo 26" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img27.jpg" alt="Photo 27" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img28.jpg" alt="Photo 28" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img29.jpg" alt="Photo 29" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img30.jpg" alt="Photo 30" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img31.jpg" alt="Photo 31" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img32.jpg" alt="Photo 32" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img33.jpg" alt="Photo 33" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img34.jpg" alt="Photo 34" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img35.jpg" alt="Photo 35" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img36.jpg" alt="Photo 36" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img37.jpg" alt="Photo 37" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img38.jpg" alt="Photo 38" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img39.jpg" alt="Photo 39" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img40.jpg" alt="Photo 40" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img41.jpg" alt="Photo 41" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img42.jpg" alt="Photo 42" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img43.jpg" alt="Photo 43" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img44.jpg" alt="Photo 44" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img45.jpg" alt="Photo 45" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="src/assets/gallery/img46.jpg" alt="Photo 46" className="w-full h-64 object-cover rounded-xl shadow-md" />

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