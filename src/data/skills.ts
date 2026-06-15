export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  color: string;
  borderColor: string;
  accentColor: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    color: "from-blue-500/20 to-blue-500/5",
    borderColor: "border-blue-500/20",
    accentColor: "text-blue-400",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 82 },
      { name: "JavaScript", level: 85 },
      { name: "SQL", level: 83 },
      { name: "C++", level: 72 },
      { name: "Bash / Shell", level: 70 },
    ],
  },
  {
    category: "Backend & APIs",
    color: "from-violet-500/20 to-violet-500/5",
    borderColor: "border-violet-500/20",
    accentColor: "text-violet-400",
    skills: [
      { name: "FastAPI", level: 88 },
      { name: "Node.js / Express", level: 82 },
      { name: "REST APIs", level: 90 },
      { name: "Spring Boot", level: 76 },
      { name: "WebSockets", level: 75 },
      { name: "Microservices", level: 72 },
    ],
  },
  {
    category: "Frontend",
    color: "from-cyan-500/20 to-cyan-500/5",
    borderColor: "border-cyan-500/20",
    accentColor: "text-cyan-400",
    skills: [
      { name: "React", level: 82 },
      { name: "Next.js", level: 78 },
      { name: "HTML5 / CSS3", level: 88 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    category: "Databases",
    color: "from-emerald-500/20 to-emerald-500/5",
    borderColor: "border-emerald-500/20",
    accentColor: "text-emerald-400",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "SQLite", level: 82 },
      { name: "Firebase Firestore", level: 78 },
      { name: "SQLAlchemy ORM", level: 85 },
      { name: "Prisma", level: 72 },
    ],
  },
  {
    category: "DevOps & Cloud",
    color: "from-orange-500/20 to-orange-500/5",
    borderColor: "border-orange-500/20",
    accentColor: "text-orange-400",
    skills: [
      { name: "Docker", level: 80 },
      { name: "Git / GitHub", level: 90 },
      { name: "Linux", level: 78 },
      { name: "CI/CD Pipelines", level: 72 },
      { name: "Firebase", level: 76 },
    ],
  },
];

export const techBadges = [
  "Python", "Java", "JavaScript", "C++", "SQL", "Bash",
  "FastAPI", "Node.js", "Express", "Spring Boot", "REST APIs",
  "WebSockets", "RBAC", "Microservices",
  "React", "Next.js", "HTML5", "CSS3", "Tailwind CSS",
  "PostgreSQL", "MySQL", "SQLite", "Firebase", "SQLAlchemy",
  "Docker", "Git", "Linux", "CI/CD", "Swagger", "JWT",
];
