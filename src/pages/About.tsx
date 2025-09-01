import { useState } from "react";
import { Users, Target, BookOpen, Award, Edit2, Check, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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

  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "Dr. Ashok Kumar Singh",
      role: "Director & Chief Mentor",
      department: "Former IAS Officer (Retd.)",
      image: photo1
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      role: "Faculty Advisor",
      department: "Political Science",
      image: photo2
    },
    {
      id: 3,
      name: "Prof. Rajesh Kumar",
      role: "Faculty Advisor", 
      department: "Public Administration",
      image: photo3
    },
    {
      id: 4,
      name: "Ankit Verma",
      role: "Student Coordinator",
      department: "Political Science, Final Year",
      image: photo4
    },
    {
      id: 5,
      name: "Sneha Patel",
      role: "Events Coordinator",
      department: "Sociology, Third Year",
      image: photo5
    },
    {
      id: 6,
      name: "Dr. Neha Agarwal",
      role: "Faculty Advisor",
      department: "Economics",
      image: photo6
    },
    {
      id: 7,
      name: "Prof. S.K. Mishra",
      role: "Faculty Advisor",
      department: "History",
      image: photo7
    },
    {
      id: 8,
      name: "Dr. Ravi Prakash",
      role: "Faculty Advisor",
      department: "Geography",
      image: photo8
    },
    {
      id: 9,
      name: "Aisha Khan",
      role: "Research Coordinator",
      department: "International Relations, Final Year",
      image: photo9
    },
    {
      id: 10,
      name: "Vikram Joshi",
      role: "Mock Test Coordinator",
      department: "Public Administration, Third Year",
      image: photo10
    },
    {
      id: 11,
      name: "Meera Reddy",
      role: "Content Developer",
      department: "English Literature, Final Year",
      image: photo11
    },
    {
      id: 12,
      name: "Arjun Nair",
      role: "Technical Coordinator",
      department: "Computer Science, Third Year",
      image: photo12
    },
    {
      id: 13,
      name: "Pooja Gupta",
      role: "Social Media Manager",
      department: "Mass Communication, Second Year",
      image: photo13
    },
    {
      id: 14,
      name: "Rohit Sharma",
      role: "Library Coordinator",
      department: "Library Science, Final Year",
      image: photo14
    },
    {
      id: 15,
      name: "Kavita Desai",
      role: "Mentorship Program Lead",
      department: "Psychology, Third Year",
      image: photo15
    },
    {
      id: 16,
      name: "Arun Bhatt",
      role: "Current Affairs Analyst",
      department: "Journalism, Final Year",
      image: photo16
    },
    {
      id: 17,
      name: "Sonia Mehta",
      role: "Workshop Organizer",
      department: "Management Studies, Third Year",
      image: photo17
    },
    {
      id: 18,
      name: "Rajat Singh",
      role: "Study Group Facilitator",
      department: "Law, Final Year",
      image: photo18
    },
    {
      id: 19,
      name: "Divya Pandey",
      role: "Answer Writing Coach",
      department: "Hindi Literature, Fourth Year",
      image: photo19
    },
    {
      id: 20,
      name: "Karan Malhotra",
      role: "Prelims Strategy Coordinator",
      department: "Mathematics, Third Year",
      image: photo20
    },
    {
      id: 21,
      name: "Priyanka Roy",
      role: "Ethics Paper Specialist",
      department: "Philosophy, Final Year",
      image: photo21
    },
    {
      id: 22,
      name: "Amit Saxena",
      role: "Optional Subject Mentor",
      department: "Anthropology, Fourth Year",
      image: photo22
    },
    {
      id: 23,
      name: "Nisha Kumari",
      role: "Student Welfare Officer",
      department: "Social Work, Third Year",
      image: photo23
    }
  ]);

  const [editingMember, setEditingMember] = useState<number | null>(null);
  const [editedData, setEditedData] = useState<{
    name: string;
    role: string;
    department: string;
  }>({ name: "", role: "", department: "" });

  const handleEdit = (member: typeof teamMembers[0]) => {
    setEditingMember(member.id);
    setEditedData({
      name: member.name,
      role: member.role,
      department: member.department
    });
  };

  const handleSave = (id: number) => {
    setTeamMembers(teamMembers.map(member => 
      member.id === id 
        ? { ...member, ...editedData }
        : member
    ));
    setEditingMember(null);
  };

  const handleCancel = () => {
    setEditingMember(null);
    setEditedData({ name: "", role: "", department: "" });
  };

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
            {teamMembers.map((member) => (
              <Card key={member.id} className="card-shadow border-0 overflow-hidden">
                <div className="aspect-square bg-muted flex items-center justify-center relative">
                  <Avatar className="w-full h-full rounded-none">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="rounded-none bg-muted">
                      <Users className="h-16 w-16 text-muted-foreground" />
                    </AvatarFallback>
                  </Avatar>
                  {editingMember !== member.id && (
                    <Button
                      onClick={() => handleEdit(member)}
                      size="icon"
                      variant="secondary"
                      className="absolute top-2 right-2 h-8 w-8"
                    >
                      <Edit2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <CardContent className="p-6">
                  {editingMember === member.id ? (
                    <div className="space-y-3">
                      <Input
                        value={editedData.name}
                        onChange={(e) => setEditedData({ ...editedData, name: e.target.value })}
                        placeholder="Name"
                        className="text-sm"
                      />
                      <Input
                        value={editedData.role}
                        onChange={(e) => setEditedData({ ...editedData, role: e.target.value })}
                        placeholder="Role"
                        className="text-sm"
                      />
                      <Input
                        value={editedData.department}
                        onChange={(e) => setEditedData({ ...editedData, department: e.target.value })}
                        placeholder="Department"
                        className="text-sm"
                      />
                      <div className="flex gap-2 justify-center">
                        <Button
                          onClick={() => handleSave(member.id)}
                          size="sm"
                          variant="default"
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                        <Button
                          onClick={handleCancel}
                          size="sm"
                          variant="outline"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {member.name}
                      </h3>
                      <p className="text-accent font-medium mb-1">
                        {member.role}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {member.department}
                      </p>
                    </div>
                  )}
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