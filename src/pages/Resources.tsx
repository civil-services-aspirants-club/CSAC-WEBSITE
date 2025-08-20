import { BookOpen, Download, ExternalLink, FileText, Video, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Resources = () => {
  const studyMaterials = [
    {
      category: "NCERT Books",
      items: [
        { name: "History - Ancient India", type: "PDF", size: "45 MB" },
        { name: "Geography - Physical Geography", type: "PDF", size: "38 MB" },
        { name: "Polity - Indian Constitution", type: "PDF", size: "52 MB" },
        { name: "Economics - Microeconomics", type: "PDF", size: "41 MB" }
      ]
    },
    {
      category: "Previous Year Papers",
      items: [
        { name: "UPSC Prelims 2023", type: "PDF", size: "15 MB" },
        { name: "UPSC Mains 2023 - All Papers", type: "ZIP", size: "125 MB" },
        { name: "State PSC Papers Collection", type: "ZIP", size: "89 MB" },
        { name: "CAPF Papers 2020-2023", type: "PDF", size: "67 MB" }
      ]
    },
    {
      category: "Optional Subject Resources",
      items: [
        { name: "Public Administration Notes", type: "PDF", size: "78 MB" },
        { name: "Political Science Syllabus Guide", type: "PDF", size: "34 MB" },
        { name: "Geography Optional Strategy", type: "PDF", size: "29 MB" },
        { name: "Sociology Study Material", type: "PDF", size: "56 MB" }
      ]
    }
  ];

  const usefulLinks = [
    {
      category: "Official Websites",
      links: [
        { name: "UPSC Official Website", url: "https://upsc.gov.in", description: "Latest notifications and exam schedules" },
        { name: "PIB (Press Information Bureau)", url: "https://pib.gov.in", description: "Current affairs and government updates" },
        { name: "Rajya Sabha TV", url: "https://rstv.nic.in", description: "Educational content and discussions" },
        { name: "Election Commission of India", url: "https://eci.gov.in", description: "Electoral processes and updates" }
      ]
    },
    {
      category: "Study Resources",
      links: [
        { name: "NCERT Official", url: "https://ncert.nic.in", description: "Official NCERT books and materials" },
        { name: "Census of India", url: "https://censusindia.gov.in", description: "Demographic data and statistics" },
        { name: "Ministry of External Affairs", url: "https://mea.gov.in", description: "International relations updates" },
        { name: "Planning Commission", url: "https://niti.gov.in", description: "Economic policies and planning" }
      ]
    }
  ];

  const toppersContent = [
    {
      title: "Rank 1 Strategy - Kanishak Kataria",
      type: "Video",
      duration: "45 mins",
      description: "Complete preparation strategy and time management tips"
    },
    {
      title: "Interview Experience - Tina Dabi",
      type: "PDF",
      pages: "12 pages",
      description: "Detailed interview preparation and personality test insights"
    },
    {
      title: "Mains Answer Writing - Anudeep Durishetty", 
      type: "Video",
      duration: "1 hour",
      description: "Effective answer writing techniques with examples"
    },
    {
      title: "Optional Subject Guide - Sociology",
      type: "PDF", 
      pages: "25 pages",
      description: "Complete strategy for sociology optional by AIR 4 candidate"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 animate-fade-in">
            Study Resources
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up">
            Comprehensive collection of study materials, books, and resources for your civil services preparation
          </p>
        </div>
      </section>

      {/* Main Resources Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="materials" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto">
              <TabsTrigger value="materials" className="p-4">Study Materials</TabsTrigger>
              <TabsTrigger value="links" className="p-4">Useful Links</TabsTrigger>
              <TabsTrigger value="toppers" className="p-4">Toppers' Content</TabsTrigger>
              <TabsTrigger value="downloads" className="p-4">Download Center</TabsTrigger>
            </TabsList>

            {/* Study Materials Tab */}
            <TabsContent value="materials" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {studyMaterials.map((category, index) => (
                  <Card key={index} className="card-shadow border-0">
                    <CardHeader className="bg-secondary">
                      <CardTitle className="flex items-center">
                        <BookOpen className="h-5 w-5 mr-2 text-primary" />
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                            <div className="flex-1">
                              <div className="font-medium text-sm">{item.name}</div>
                              <div className="text-xs text-muted-foreground">{item.type} • {item.size}</div>
                            </div>
                            <Button size="sm" variant="outline" className="ml-2">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Useful Links Tab */}
            <TabsContent value="links" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {usefulLinks.map((category, index) => (
                  <Card key={index} className="card-shadow border-0">
                    <CardHeader className="bg-secondary">
                      <CardTitle className="flex items-center">
                        <Link className="h-5 w-5 mr-2 text-primary" />
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {category.links.map((link, linkIndex) => (
                          <div key={linkIndex} className="p-4 bg-muted rounded-lg">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h4 className="font-medium text-foreground mb-1">{link.name}</h4>
                                <p className="text-sm text-muted-foreground mb-2">{link.description}</p>
                              </div>
                              <Button size="sm" variant="outline">
                                <ExternalLink className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Toppers' Content Tab */}
            <TabsContent value="toppers" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {toppersContent.map((content, index) => (
                  <Card key={index} className="card-shadow border-0">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                          {content.type === 'Video' ? (
                            <Video className="h-6 w-6 text-accent-foreground" />
                          ) : (
                            <FileText className="h-6 w-6 text-accent-foreground" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-2">{content.title}</h3>
                          <div className="text-sm text-accent font-medium mb-2">
                            {content.type} • {content.duration || content.pages}
                          </div>
                          <p className="text-sm text-muted-foreground mb-4">{content.description}</p>
                          <Button size="sm" className="btn-professional">
                            {content.type === 'Video' ? 'Watch Now' : 'Download'}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Download Center Tab */}
            <TabsContent value="downloads" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="card-shadow border-0 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Complete NCERT Package</h3>
                    <p className="text-muted-foreground mb-4">All NCERT books from Class 6-12</p>
                    <Button className="btn-professional w-full">
                      Download (2.1 GB)
                    </Button>
                  </CardContent>
                </Card>

                <Card className="card-shadow border-0 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Previous Years Collection</h3>
                    <p className="text-muted-foreground mb-4">UPSC papers from 2010-2023</p>
                    <Button className="btn-accent w-full">
                      Download (456 MB)
                    </Button>
                  </CardContent>
                </Card>

                <Card className="card-shadow border-0 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Download className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Current Affairs Notes</h3>
                    <p className="text-muted-foreground mb-4">Monthly compiled notes</p>
                    <Button className="btn-professional w-full">
                      Download (189 MB)
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 text-center">
                <Card className="card-shadow border-0 bg-secondary">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-serif font-semibold mb-4">Need Specific Resources?</h3>
                    <p className="text-muted-foreground mb-6">
                      Can't find what you're looking for? Request specific study materials and we'll do our best to provide them.
                    </p>
                    <Button size="lg" className="btn-accent">
                      Request Resources
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12">
            Quick Resource Access
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 h-24">
              <div className="flex flex-col items-center">
                <BookOpen className="h-6 w-6 mb-2" />
                NCERT Books
              </div>
            </Button>
            
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 h-24">
              <div className="flex flex-col items-center">
                <FileText className="h-6 w-6 mb-2" />
                Previous Papers
              </div>
            </Button>
            
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 h-24">
              <div className="flex flex-col items-center">
                <Video className="h-6 w-6 mb-2" />
                Video Lectures
              </div>
            </Button>

            <Button size="lg" className="bg-white text-primary hover:bg-white/90 h-24">
              <div className="flex flex-col items-center">
                <Download className="h-6 w-6 mb-2" />
                Download All
              </div>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;