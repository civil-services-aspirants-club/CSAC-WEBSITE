import {
  BookOpen,
  Download,
  ExternalLink,
  FileText,
  Video,
  Link,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Resources = () => {
  const handleDownload = (link) => {
    if (link) {
      // convert "file/d/.../view" into direct download if needed
      const fileId = link.match(/\/d\/(.*?)\//)?.[1];
      const directLink = fileId
        ? `https://drive.google.com/uc?export=download&id=${fileId}`
        : link;

      window.open(directLink, "_blank");
    } else {
      alert("Download link not available!");
    }
  };

  const studyMaterials = [
    {
      category: "NCERT Books",
      items: [
        {
          name: "History",
          type: "PDF",
          size: "42 MB",
          link: "https://drive.google.com/file/d/1vbcMCgpFqLTvJ0JM_QbFoTatMqrm2lIa/view?usp=sharing",
        },
        {
          name: "Geography",
          type: "PDF",
          size: "38 MB",
          link: "https://drive.google.com/file/d/1ciiXRz2Qn2B9xDLg5i1jEgnCZKKJeU_h/view?usp=sharing",
        },
        {
          name: "Polity - Indian Constitution",
          type: "PDF",
          size: "52 MB",
          link: "https://drive.google.com/file/d/1XjxwLdBu8_K-b2yKqgQmQdCj_yUqOn7M/view?usp=sharing",
        },
        {
          name: "Economics",
          type: "PDF",
          size: "41 MB",
          link: "https://drive.google.com/file/d/1W4ts9T9ded0FTsKkMeo6VZZyclI48dDM/view?usp=sharing",
        },
      ],
    },
    {
      category: "PYQ's - Prelims",
      items: [
        {
          name: "Prelims 2025",
          type: "PDF",
          size: "15.2 MB",
          link: "https://drive.google.com/file/d/1h7LgCJ5BSXtnJcWgYFrarDHRaHxIPEUF/view?usp=sharing",
        },
        {
          name: "Prelims 2024",
          type: "PDF",
          size: "15.2 MB",
          link: "https://drive.google.com/file/d/1jGHFe8_2odBAa0nWYV3RH5ihgEowK2gq/view?usp=sharing",
        },
        {
          name: "Prelims 2022",
          type: "PDF",
          size: "22.7 MB",
          link: "https://drive.google.com/file/d/1OvjEJ-SUXW9UMZkXUTa3q4R4_QR6yloo/view?usp=sharing",
        },
        {
          name: "Prelims 2021",
          type: "PDF",
          size: "3.4 MB",
          link: "https://drive.google.com/file/d/1Edu8pDXwUMuxMTd3qo6K4KuiHmM-V4Sn/view?usp=sharing",
        },
      ],
    },
    {
      category: "PYQ's - Mains",
      items: [
        {
          name: "Mains 2024",
          type: "PDF",
          size: "22.3 MB",
          link: "https://drive.google.com/file/d/1vQrbp38k6Id380SIa59FjFVCcSb7cOTm/view?usp=drivesdk ",
        },
        {
          name: "Mains 2023",
          type: "PDF",
          size: "25.1 MB",
          link: " https://drive.google.com/file/d/1Auu3a0UwRyciroKf2pd_QVayvPW-4mK9/view?usp=drivesdk",
        },
        {
          name: "Mains 2022",
          type: "PDF",
          size: "24.3 MB",
          link: "https://drive.google.com/file/d/1p7EmRZkTChuyXa_t8Wy0VVYoN58Ge2eG/view?usp=drivesdk",
        },
        {
          name: "Mains 2021",
          type: "PDF",
          size: "17.9 MB",
          link: "https://drive.google.com/file/d/1Ea98LY47RgPveU3zgc9Q7PAv0BXLxuv3/view?usp=drivesdk",
        },
      ],
    },
  ];

  const usefulLinks = [
    {
      category: "Official Websites",
      links: [
        {
          name: "UPSC Official Website",
          link: "https://upsc.gov.in",
          description: "Latest notifications and exam schedules",
        },
        {
          name: "PIB (Press Information Bureau)",
          link: "https://pib.gov.in",
          description: "Current affairs and government updates",
        },
        {
          name: "Rajya Sabha TV",
          link: "https://sansadtv.nic.in/",
          description: "Educational content and discussions",
        },
        {
          name: "Election Commission of India",
          link: "https://eci.gov.in",
          description: "Electoral processes and updates",
        },
      ],
    },
    {
      category: "Study Resources",
      links: [
        {
          name: "NCERT Official",
          link: "https://ncert.nic.in",
          description: "Official NCERT books and materials",
        },
        {
          name: "Census of India",
          link: "https://censusindia.gov.in",
          description: "Demographic data and statistics",
        },
        {
          name: "Ministry of External Affairs",
          link: "https://mea.gov.in",
          description: "International relations updates",
        },
        {
          name: "Planning Commission",
          link: "https://niti.gov.in",
          description: "Economic policies and planning",
        },
      ],
    },
  ];

  const toppersContent = [
    {
      title: "World Geography",
      type: "Notes",
      duration: "135 pages",
      description: "Complete preparation strategy and time management tips",
      link: "https://drive.google.com/file/d/1a4qApDIF6ooabnaGN486FtEIAqW_fWOZ/view?usp=sharing",
    },
    {
      title: "Ancient Indian History",
      type: "PDF",
      pages: "82 pages",
      description:
        "Detailed interview preparation and personality test insights",
      link: "https://drive.google.com/file/d/1UMjI6D5ryKsdR8d1GbodjT9u3fwusfXb/view?usp=sharing",
    },
    {
      title: "Biology Notes",
      type: "PDF",
      duration: "100 pages",
      description: "Effective answer writing techniques with examples",
      link: "https://drive.google.com/file/d/1EoAOsc0-y6ZKMqQvGE8S6JyoSZPNpZN1/view?usp=sharing",
    },
    {
      title: "Indian Geography",
      type: "PDF",
      pages: "25 pages",
      description:
        "Complete strategy for sociology optional by AIR 4 candidate",
      link: "https://drive.google.com/file/d/11iHzyY7SQf0bo0VRLN9DJRcGtA8Ztylq/view?usp=sharing",
    },
    {
      title: "Modern Medievel History",
      type: "PDF",
      pages: "25 pages",
      description:
        "Complete strategy for sociology optional by AIR 4 candidate",
      link: "https://drive.google.com/file/d/1tXRbyyuyezDMOwHUDMnGIOs1iJezNiqz/view?usp=sharing",
    },
    {
      title: "Vajiram Polity",
      type: "PDF",
      pages: "25 pages",
      description:
        "Complete strategy for sociology optional by AIR 4 candidate",
      link: "https://drive.google.com/file/d/17Fu54XY0hRhO_3a5Ekw65TghxVskiMp5/view?usp=sharing",
    },
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
            Comprehensive collection of study materials, books, and resources
            for your civil services preparation
          </p>
        </div>
      </section>

      {/* Main Resources Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="materials" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto">
              <TabsTrigger value="materials" className="p-4">
                Study Materials
              </TabsTrigger>
              <TabsTrigger value="links" className="p-4">
                Useful Links
              </TabsTrigger>
              <TabsTrigger value="toppers" className="p-4">
                Written Notes
              </TabsTrigger>
              <TabsTrigger value="downloads" className="p-4">
                Download Center
              </TabsTrigger>
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
                          <div
                            key={itemIndex}
                            className="flex items-center justify-between p-3 bg-muted rounded-lg"
                          >
                            <div className="flex-1">
                              <div className="font-medium text-sm">
                                {item.name}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {item.type} • {item.size}
                              </div>
                            </div>
                            <Button
                              onClick={() => handleDownload(item.link)}
                              size="sm"
                              variant="outline"
                              className="ml-2"
                            >
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
                          <div
                            key={linkIndex}
                            className="p-4 bg-muted rounded-lg"
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h4 className="font-medium text-foreground mb-1">
                                  {link.name}
                                </h4>
                                <p className="text-sm text-muted-foreground mb-2">
                                  {link.description}
                                </p>
                              </div>
                              {/* 👉 Replace this button */}
                              <a
                                href={link.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Button size="sm" variant="outline">
                                  <ExternalLink className="h-4 w-4" />
                                </Button>
                              </a>
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
                          {content.type === "Video" ? (
                            <Video className="h-6 w-6 text-accent-foreground" />
                          ) : (
                            <FileText className="h-6 w-6 text-accent-foreground" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-2">
                            {content.title}
                          </h3>
                          <div className="text-sm text-accent font-medium mb-2">
                            {content.type} • {content.duration || content.pages}
                          </div>
                          <p className="text-sm text-muted-foreground mb-4">
                            {content.description}
                          </p>
                          <Button
                            onClick={() => handleDownload(content.link)}
                            size="sm"
                            className="btn-professional"
                          >
                            {content.type === "Video"
                              ? "Watch Now"
                              : "Download"}
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
                    <h3 className="text-lg font-semibold mb-2">
                      Complete NCERT Package
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      All NCERT books from Class 6-12
                    </p>
                    <a href="https://drive.google.com/drive/folders/1sQ9KYvpohjzwHTu0Lb6LtzzKaLXNpN4W?usp=sharing">
                      <Button
                        onClick={handleDownload}
                        className="btn-professional w-full"
                      >
                        Download (2.1 GB)
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                <Card className="card-shadow border-0 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      Previous Years Collection
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      UPSC papers from 2010-2023
                    </p>
                    <a href="https://drive.google.com/drive/folders/1Zh_lrUr8qFVMHx78PDSMhCwj6_A9fCDU?usp=sharing">
                      <Button
                        onClick={handleDownload}
                        className="btn-accent w-full"
                      >
                        Download (456 MB)
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                <Card className="card-shadow border-0 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Download className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      Standard Books
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Monthly compiled notes
                    </p>
                    <a href="https://drive.google.com/drive/folders/1hkOEUjQjt33EDfMAUZb1Bs1zvc7lTyM1?usp=sharing">
                      <Button
                        onClick={handleDownload}
                        className="btn-professional w-full"
                      >
                        Download (189 MB)
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 text-center">
                <Card className="card-shadow border-0 bg-secondary">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-serif font-semibold mb-4">
                      Need Specific Resources?
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Can't find what you're looking for? Request specific study
                      materials and we'll do our best to provide them.
                    </p>
                    <a
                      href="https://forms.gle/bTgFbz5wckzTgD63A"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button size="lg" className="btn-accent">
                        Request Resources
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Resources;
