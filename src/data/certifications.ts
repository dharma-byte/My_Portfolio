import { type LucideIcon, Award, Code2, Brain, Layers } from "lucide-react";

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  gradient: string;
  borderColor: string;
  tags: string[];
}

export const certifications: Certification[] = [
  {
    title: "JPMorgan Chase Software Engineering Virtual Experience",
    issuer: "JPMorgan Chase & Co. via Forage",
    date: "2026",
    description:
      "Kafka-based transaction processing, Spring Boot microservices, REST API integration, JPA persistence, and financial systems simulation.",
    icon: Code2,
    iconColor: "text-blue-400",
    gradient: "from-blue-500/10 to-indigo-500/5",
    borderColor: "border-blue-500/20 hover:border-blue-500/40",
    tags: ["Spring Boot", "Apache Kafka", "JPA", "REST APIs", "Java"],
  },
  {
    title: "Web Full Stack Developer Virtual Internship",
    issuer: "AICTE & EduSkills Academy",
    date: "2024",
    description:
      "Full-stack web development, frontend and backend integration, responsive design, and modern web frameworks.",
    icon: Layers,
    iconColor: "text-emerald-400",
    gradient: "from-emerald-500/10 to-teal-500/5",
    borderColor: "border-emerald-500/20 hover:border-emerald-500/40",
    tags: ["Full Stack", "React", "Node.js", "Responsive Design", "REST APIs"],
  },
  {
    title: "AI/ML Virtual Internship",
    issuer: "Google Developers",
    date: "2024",
    description:
      "ML workflows, model evaluation, supervised and unsupervised learning, and AI problem-solving methodologies.",
    icon: Brain,
    iconColor: "text-violet-400",
    gradient: "from-violet-500/10 to-purple-500/5",
    borderColor: "border-violet-500/20 hover:border-violet-500/40",
    tags: ["Machine Learning", "Model Evaluation", "Supervised Learning", "Python"],
  },
  {
    title: "Python Using AI",
    issuer: "AI For Techies",
    date: "2024",
    description:
      "Python automation, data structures, AI-based mini projects, data handling and scripting techniques.",
    icon: Award,
    iconColor: "text-orange-400",
    gradient: "from-orange-500/10 to-amber-500/5",
    borderColor: "border-orange-500/20 hover:border-orange-500/40",
    tags: ["Python", "Automation", "Data Structures", "AI Projects", "Scripting"],
  },
];
