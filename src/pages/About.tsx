import { Users, Target, BookOpen, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Import team member photos
import photo1 from "@/assets/team/1.jpg";
import photo2 from "@/assets/team/2.jpg";
import photo3 from "@/assets/team/3.jpg";
import photo4 from "@/assets/team/4.jpg";
import photo5 from "@/assets/team/5.jpg";
import photo6 from "@/assets/team/6.jpg";
import photo7 from "@/assets/team/7.jpg";
import photo8 from "@/assets/team/8.jpg";
import photo9 from "@/assets/team/9.jpg";
import photo10 from "@/assets/team/10.jpg";
import photo11 from "@/assets/team/11.jpg";
import photo12 from "@/assets/team/12.jpg";
import photo13 from "@/assets/team/13.jpg";
import photo14 from "@/assets/team/14.jpg";
import photo15 from "@/assets/team/15.jpg";
import photo16 from "@/assets/team/16.jpg";
import photo17 from "@/assets/team/17.jpg";
import photo18 from "@/assets/team/18.jpg";
import photo19 from "@/assets/team/19.jpg";
import photo20 from "@/assets/team/20.jpg";
import photo21 from "@/assets/team/21.jpg";
import photo22 from "@/assets/team/22.jpg";
import photo23 from "@/assets/team/23.jpg";

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
      image: photo1
    },
    {
      id: 2,
      name: "D ANAGHA SREENIDHI ",
      role: "PRESIDENT",
      image: photo2
    },
    {
      id: 3,
      name: "A GAYATHRI",
      role: "CHIEF OF ACADEMIC CELL", 
      image: photo3
    },
    {
      id: 4,
      name: "K VARSHITH REDDY",
      role: "GEN SEC & TREASURER",
      image: photo4
    },
    {
      id: 5,
      name: "T SURYA VIKAS",
      role: "JOINT SECRETARY",
      image: photo5
    },
    {
      id: 6,
      name: "K SANDEEP REDDY",
      role: "VICE PRESIDENT",
      image: photo6
    },
    {
      id: 7,
      name: "MVS NAGAMANI",
      role: "DESIGNING & PR HEAD",
      image: photo7
    },
    {
      id: 8,
      name: "MD SAMAD",
      role: "ORGANISING HEAD",
      image: photo8
    },
    {
      id: 9,
      name: "V SIRI",
      role: "DEPUTY ORGANISING",
      image: photo9
    },
    {
      id: 10,
      name: "P AARTHI",
      role: "PR HEAD",
      image: photo10
    },
    {
      id: 11,
      name: "A JYOTHSNA",
      role: "DEPUTY PR",
      image: photo11
    },
    {
      id: 12,
      name: "D VISHAL",
      role: "DEPUTY DESIGNING",
      image: photo12
    },
    {
      id: 13,
      name: "K PRAVALIKA",
      role: "RESOURCE HEAD",
      image: photo13
    },
    {
      id: 14,
      name: "S SOMESH KUMAR",
      role: "DEPUTY RESOURCE",
      image: photo14
    },
    {
      id: 15,
      name: "K SRIDHAR",
      role: "DEPUTY RESOURCE",
      image: photo15
    },
    {
      id: 16,
      name: "M KARTHIK REDDY",
      role: "ORGANISING HEAD",
      image: photo16
    },
    {
      id: 17,
      name: "G VARSHA",
      role: "DEPUTY ORGANISING",
      image: photo17
    },
    {
      id: 18,
      name: "SATHWIKA REDDY ",
      role: "DEPUTY PR",
      image: photo18
    },
    {
      id: 19,
      name: "B SAHASRA",
      role: "DEPUTY DESIGNING",
      image: photo19
    },
    {
      id: 20,
      name: "Kalyani",
      role: "Advisory",
      image: photo20
    },
    {
      id: 21,
      name: "Spoorthy",
      role: "Advisory",
      image: photo21
    },
    {
      id: 22,
      name: "karthik",
      role: "Advisory",
      image: photo22
    },
    {
      id: 23,
      name: "Banudeep",
      role: "Advisory",
      image: photo23
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