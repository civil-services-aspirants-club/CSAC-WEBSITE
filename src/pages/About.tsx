import { Users, Target, BookOpen, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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

  const team = [
    {
      name: "Dr. Priya Sharma",
      role: "Faculty Advisor",
      department: "Political Science",
      image: "/placeholder.svg"
    },
    {
      name: "Prof. Rajesh Kumar",
      role: "Faculty Advisor", 
      department: "Public Administration",
      image: "/placeholder.svg"
    },
    {
      name: "Ankit Verma",
      role: "Student Coordinator",
      department: "Political Science, Final Year",
      image: "/placeholder.svg"
    },
    {
      name: "Sneha Patel",
      role: "Events Coordinator",
      department: "Sociology, Third Year",
      image: "/placeholder.svg"
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
              The Civil Services Aspirants Club (CSAC) is dedicated to creating a supportive 
              ecosystem for students preparing for UPSC and State Public Service Commission 
              examinations. We believe in the power of collective learning, mentorship, 
              and unwavering determination to achieve success in civil services.
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
            {team.map((member, index) => (
              <Card key={index} className="card-shadow border-0 text-center overflow-hidden">
                <div className="aspect-square bg-muted flex items-center justify-center">
                  <Users className="h-16 w-16 text-muted-foreground" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium mb-1">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.department}
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