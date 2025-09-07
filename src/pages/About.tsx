import { Users, Target, BookOpen, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Import team member photos

const About = () => {
  const objectives = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Guidance & Mentorship",
      description: "Expert guidance from experienced faculty advisors and successful candidates"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Group Studies",
      description: "Collaborative learning environment with dedicated study circles and discussion groups"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Resource Sharing",
      description: "Comprehensive study materials, notes, and previous year question papers"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Mock Interviews",
      description: "Regular mock interviews and personality development sessions"
    }
  ];

  // EDIT TEAM MEMBERS HERE - Just modify the data below
  const teamMembers = [
    {
      id: 1,
      name: "Dr. JAFFER SADIQ",
      role: "CONVENOR",
      image: "/team/1.jpg"
    },
    {
      id: 2,
      name: "D ANAGHA SREENIDHI ",
      role: "PRESIDENT",
      image: "/team/2.jpg"
    },
    {
      id: 3,
      name: "A GAYATHRI",
      role: "CHIEF OF ACADEMIC CELL", 
      image: "/team/3.jpg"
    },
    {
      id: 4,
      name: "K VARSHITH REDDY",
      role: "GENERAL SECRETARY",
      image: "/team/4.jpg"
    },
    {
      id: 5,
      name: "T SURYA VIKAS",
      role: "JOINT SECRETARY",
      image: "/team/5.jpg"
    },
    {
      id: 6,
      name: "K SANDEEP REDDY",
      role: "VICE PRESIDENT",
      image: "/team/6.jpg"
    },
    {
      id: 7,
      name: "MVS NAGAMANI",
      role: "DESIGNING & PR HEAD",
      image: "/team/7.jpg"
    },
    {
      id: 8,
      name: "MD SAMAD",
      role: "ORGANISING HEAD",
      image: "/team/8.jpg"
    },
    {
      id: 9,
      name: "V SIRI",
      role: "DEPUTY ORGANISING",
      image: "/team/9.jpg"
    },
    {
      id: 10,
      name: "P AARTHI",
      role: "PUBLIC RELATIONS HEAD",
      image: "/team/10.jpg"
    },
    {
      id: 11,
      name: "A JYOTHSNA",
      role: "DEPUTY PUBLIC RELATIONS",
      image: "/team/11.jpg"
    },
    {
      id: 12,
      name: "D VISHAL",
      role: "DEPUTY DESIGNING",
      image: "/team/12.jpg"
    },
    {
      id: 13,
      name: "K PRAVALIKA",
      role: "RESOURCE HEAD",
      image: "/team/13.jpg"
    },
    {
      id: 14,
      name: "S SOMESH KUMAR",
      role: "DEPUTY RESOURCE",
      image: "/team/14.jpg"
    },
    {
      id: 15,
      name: "K SRIDHAR",
      role: "DEPUTY RESOURCE",
      image: "/team/15.jpg"
    },
    {
      id: 16,
      name: "M KARTHIK REDDY",
      role: "ORGANISING HEAD",
      image: "/team/16.jpg"
    },
    {
      id: 17,
      name: "G VARSHA",
      role: "DEPUTY ORGANISING",
      image: "/team/17.jpg"
    },
    {
      id: 18,
      name: "SATHWIKA REDDY ",
      role: "DEPUTY PUBLIC RELATIONS",
      image: "/team/18.jpg"
    },
    {
      id: 19,
      name: "B SAHASRA",
      role: "DEPUTY DESIGNING",
      image: "/team/19.jpg"
    },
    {
      id: 20,
      name: "KALYANI",
      role: "ADVISORY",
      image: "/team/20.jpg"
    },
    {
      id: 21,
      name: "SPOORTHY",
      role: "ADVISORY",
      image: "/team/21.jpg"
    },
    {
      id: 22,
      name: "KARTHIK",
      role: "ADVISORY",
      image: "/team/22.jpg"
    },
    {
      id: 23,
      name: "BANUDEEP",
      role: "ADVISORY",
      image: "/team/23.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 animate-fade-in">
            About CSAC
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up">
            Building a community of dedicated civil services aspirants committed to 
            excellence, integrity, and service to the nation.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              The Civil Services Aspirants Club aims to create awareness about civil services and the diverse career 
              paths in governance and public administration. It fosters critical thinking and analytical skills among 
              students through intellectual discussions, debates, and interactive sessions. The club actively organizes 
              events, seminars, and workshops designed to equip students with the knowledge and confidence to tackle
               real-world challenges in governance and policymaking. At SNIST, aspirants are provided with high-quality 
               education and guidance through annual Foundation Courses conducted in collaboration with renowned coaching 
               academies, strongly supported by the management. Above all, the club seeks to inspire and instill leadership 
               qualities, patriotism, and a deep sense of responsibility among students, preparing them to emerge as capable, 
               ethical, and visionary future leaders.
            </p>
          </div>

          {/* Objectives Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {objectives.map((objective, index) => (
              <Card key={index} className="card-shadow border-0 text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {objective.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {objective.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {objective.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Meet our dedicated faculty advisors and student coordinators who guide 
              and support our community of aspiring civil servants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="card-shadow border-0 overflow-hidden">
                <div className="aspect-square bg-muted flex items-center justify-center">
                  <Avatar className="w-full h-full rounded-none">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="rounded-none bg-muted">
                      <Users className="h-16 w-16 text-muted-foreground" />
                    </AvatarFallback>
                  </Avatar>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium mb-1">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-16">
            Our Core Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8">
              <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
                Learn
              </h3>
              <p className="text-muted-foreground">
                Continuous learning through structured study sessions, expert lectures, 
                and peer discussions to build comprehensive knowledge.
              </p>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-serif font-semibold text-accent mb-4">
                Lead
              </h3>
              <p className="text-muted-foreground">
                Developing leadership qualities, critical thinking, and decision-making 
                skills essential for effective public administration.
              </p>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
                Serve
              </h3>
              <p className="text-muted-foreground">
                Commitment to public service with integrity, dedication, and a vision 
                to contribute meaningfully to society and nation-building.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;