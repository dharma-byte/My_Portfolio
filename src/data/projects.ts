export interface Project {
  title: string;
  shortTitle: string;
  description: string;
  longDesc: string;
  tech: string[];
  github: string;
  live?: string;
  achievements: string[];
  category: string;
  year: string;
  gradient: string;
  accentColor: string;
}

export const projects: Project[] = [
  {
    title: "JPMorgan Chase Software Engineering Simulation",
    shortTitle: "JPMC Kafka Transaction System",
    description:
      "Kafka-based microservice for high-volume transaction processing with Spring Boot, JPA, and REST API integration.",
    longDesc:
      "Integrated Apache Kafka into a Spring Boot microservice to consume and deserialize high-volume transaction messages. Implemented transaction validation and persistence logic with Spring Data JPA and H2, connected to an external REST Incentive API using RestTemplate, and exposed a REST endpoint for querying user balances with clean architectural boundaries.",
    tech: ["Java", "Spring Boot", "Apache Kafka", "REST APIs", "Spring Data JPA", "H2", "Maven"],
    github: "https://github.com/dharma-byte/jpmc-midas-kafka-system",
    achievements: [
      "Consumed & deserialized high-volume Kafka transaction streams with configurable topic setup",
      "Implemented transaction validation and balance updates across relational User records via JPA",
      "Integrated external REST Incentive API using RestTemplate within transactional workflows",
      "Built REST endpoint for user balance queries with structured JSON responses via Spring MVC",
    ],
    category: "Backend",
    year: "2026",
    gradient: "from-blue-500/10 to-indigo-500/5",
    accentColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  },
  {
    title: "Finance Tracking System — Backend REST API",
    shortTitle: "Finance Tracking API",
    description:
      "Python-based REST API with full CRUD, JWT auth, role-based access control, and financial analytics endpoints.",
    longDesc:
      "Designed and developed a production-ready backend using FastAPI and SQLAlchemy, handling 15+ API endpoints with robust error handling and scalable architecture. Features secure RBAC (Viewer, Analyst, Admin) via JWT authentication, password hashing, and Pydantic validation, plus analytics endpoints for income/expense tracking and real-time financial dashboard support.",
    tech: ["Python", "FastAPI", "SQLAlchemy", "SQLite", "JWT", "Uvicorn", "Docker"],
    github: "https://github.com/dharma-byte/Finance_System",
    achievements: [
      "Designed 15+ REST API endpoints supporting full CRUD for financial transactions with advanced filtering",
      "Implemented 3-tier RBAC (Viewer, Analyst, Admin) with JWT auth and bcrypt password hashing",
      "Built analytics endpoints for income/expense breakdown, category insights, and dashboard data",
      "Containerized with Docker for consistent deployment across environments",
    ],
    category: "Backend",
    year: "2025",
    gradient: "from-emerald-500/10 to-teal-500/5",
    accentColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  },
  {
    title: "TaskFlow — Scalable REST API with JWT Auth & RBAC",
    shortTitle: "TaskFlow",
    description:
      "Full-stack task management app with Node.js/Express backend, JWT auth, PostgreSQL, and a React.js frontend.",
    longDesc:
      "Built a production-ready REST API using Node.js and Express with JWT authentication, refresh token rotation, and role-based access control (user/admin). Designed a normalized PostgreSQL schema with indexed queries, connection pooling, and auto-migration for efficient paginated and filtered data retrieval. Delivered a full-stack React.js frontend with JWT interceptors, auto-refresh, protected routes, and a real-time CRUD dashboard, fully documented via Swagger/OpenAPI and containerized with Docker.",
    tech: ["Node.js", "Express", "PostgreSQL", "JWT", "React.js", "Docker", "Swagger", "bcrypt"],
    github: "https://github.com/dharma-byte/taskflow",
    achievements: [
      "Built JWT auth with refresh token rotation and role-based access control (user/admin)",
      "Designed normalized PostgreSQL schema with indexed queries and connection pooling",
      "Implemented bcrypt (salt=12), rate limiting, Helmet headers, and express-validator sanitization",
      "Delivered React.js frontend with JWT interceptors, auto-refresh, and protected routes",
    ],
    category: "Full Stack",
    year: "2026",
    gradient: "from-violet-500/10 to-purple-500/5",
    accentColor: "text-violet-400 bg-violet-400/10 border-violet-400/20",
  },
];
