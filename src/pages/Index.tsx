import { Calendar, Users, BookOpen, ArrowRight, Award, Target, Flag, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-bg.jpg";
const Index = () => {
  const upcomingEvents = [{
    date: "Dec 15",
    title: "UPSC Mains Strategy Workshop",
    time: "2:00 PM - 5:00 PM",
    venue: "Auditorium A"
  }, {
    date: "Dec 20",
    title: "Mock Interview Session",
    time: "10:00 AM - 4:00 PM",
    venue: "Conference Room 1"
  }, {
    date: "Dec 25",
    title: "Current Affairs Discussion",
    time: "3:00 PM - 5:00 PM",
    venue: "Study Hall"
  }];
  const features = [{
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Expert Mentorship",
    description: "Get guidance from experienced faculty and successful candidates"
  }, {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "Study Resources",
    description: "Access comprehensive study materials and previous year papers"
  }, {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Mock Tests",
    description: "Regular mock tests and practice sessions for better preparation"
  }];
  return;
};
export default Index;