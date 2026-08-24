import type { ExperienceEntry } from "../types";

export const experience: ExperienceEntry[] = [
  {
    role: "Trainee Software Engineer",
    company: "Virstack Pvt Ltd",
    start: "Dec 2025",
    end: "Present",
    current: true,
    bullets: [
      "Developed end-to-end project modules, contributing to planning, ER design, development, and production release with senior developers.",
      "Designed and optimized scalable RESTful APIs and modular application architectures, improving performance and long-term maintainability.",
      "Built a Bluetooth GATT server enabling data transfer between mobile devices and VR glasses, and worked with WebSockets for real-time communication.",
      "Contributed to AI-integrated solutions and managed cloud deployments, TestFlight releases, App Store submissions, and DevOps workflows with Docker, AWS, NGINX, and CI/CD, streamlining releases within agile international teams.",
       "Wrote unit and integration tests to ensure code quality and reliability, validating features before production release.",
    ],
    tech: ["MERN", "Flutter/Dart", "WebSockets", "Docker", "AWS", "NGINX", "CI/CD"],
  },
  {
    role: "Intern Software Engineer",
    company: "Virstack Pvt Ltd",
    start: "Mar 2025",
    end: "Nov 2025",
    current: false,
    bullets: [
      "Designed and developed end-to-end features for web and mobile applications across procurement, healthcare, meditation, and AI-driven platforms, including database and full-stack development.",
      "Engineered optimized RESTful APIs and MongoDB aggregation pipelines for search, filtering, scheduling, and data-driven workflows, improving data retrieval efficiency and application responsiveness.",
      "Developed end-to-end features including authentication, authorization, user and profile management, scheduling, booking, content management, notifications, and third-party integrations, expanding platform functionality and improving user workflows.",
      "Performed root cause analysis and resolved production issues across web and mobile applications, improving stability and user experience.",
    ],
    tech: ["MERN", "Flutter/Dart", "MongoDB", "REST APIs"],
  },
];
