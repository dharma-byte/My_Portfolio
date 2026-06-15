export interface TimelineItem {
  type: "work" | "education";
  role: string;
  org: string;
  period: string;
  location: string;
  description: string;
  bullets: string[];
  tech?: string[];
}

export const timeline: TimelineItem[] = [
  {
    type: "work",
    role: "Software Engineer Intern",
    org: "Nexzap Software Development",
    period: "Oct 2025 – Present",
    location: "Hyderabad, India",
    description:
      "Building real-time web features and secure backend integrations for a responsive web application serving 100+ concurrent users.",
    bullets: [
      "Built real-time messaging with Socket.IO enabling low-latency bidirectional communication for 100+ concurrent users",
      "Implemented Firebase Authentication and Firestore data sync, reducing unauthorized access incidents to zero across all testing cycles",
      "Designed and integrated 8+ RESTful API endpoints in a structured Git/GitHub workflow with branching strategies and PR reviews",
    ],
    tech: ["Node.js", "Socket.IO", "Firebase", "REST APIs", "Git", "JavaScript"],
  },
  {
    type: "work",
    role: "Software Engineer Intern",
    org: "Yuga Yatra Retail (OPC) Pvt. Ltd.",
    period: "Aug 2025 – Oct 2025",
    location: "Hyderabad, India",
    description:
      "Contributed to production-level backend development, API integrations, and system reliability improvements in a collaborative engineering team.",
    bullets: [
      "Contributed to production-level backend API integrations across 10+ endpoints, implementing structured workflows that improved code quality",
      "Collaborated with senior engineers to debug, optimize, and refactor modules using version control and systematic testing, reducing bug recurrence by ~30%",
      "Gained hands-on exposure to CI/CD deployment pipelines and Linux-based production environments, improving release reliability and application uptime",
    ],
    tech: ["Backend APIs", "Git", "Linux", "CI/CD", "Code Review"],
  },
  {
    type: "education",
    role: "B.Tech — Electronics & Communication Engineering",
    org: "Sreenidhi Institute of Science and Technology",
    period: "2021 – 2025",
    location: "Hyderabad, India",
    description:
      "Graduated with a focus on core engineering fundamentals and hands-on software development through coursework and personal projects.",
    bullets: [
      "Graduated with CGPA: 7.6 / 10",
      "Completed coursework in Data Structures, Algorithms, DBMS, Computer Networks, and Digital Systems",
      "Built multiple full-stack and backend projects alongside academics, earning industry certifications",
      "Participated in virtual engineering simulations including JPMorgan Chase's Software Engineering program",
    ],
  },
];
