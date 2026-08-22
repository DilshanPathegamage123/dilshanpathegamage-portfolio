import type { ExperienceEntry } from "../types";

export const experience: ExperienceEntry[] = [
  {
    role: "Trainee Software Engineer",
    company: "Virstack Pvt Ltd",
    start: "Dec 2025",
    end: "Present",
    current: true,
    bullets: [
      "Own end-to-end project modules — from planning and ER/database design through implementation and production release — working alongside senior engineers.",
      "Design and optimize scalable RESTful APIs and modular application architectures for long-term performance and maintainability.",
      "Contribute to AI-integrated features and manage cloud deployments, TestFlight/App Store releases, and CI/CD workflows across Docker, AWS, and NGINX within an agile, international team.",
      "Built a Bluetooth GATT server for real-time mobile-to-VR communication and worked with WebSockets; write unit and integration tests to validate features before release.",
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
      "Delivered end-to-end features for production platforms spanning procurement, healthcare, meditation, and AI-driven products — full-stack, including database design.",
      "Built optimized REST APIs and MongoDB aggregation pipelines for search, filtering, and scheduling, improving data retrieval performance.",
      "Shipped authentication, authorization, profile management, booking, notifications, and third-party integrations that expanded platform functionality.",
      "Performed root-cause analysis on production issues across web and mobile, improving stability and user experience.",
    ],
    tech: ["MERN", "Flutter/Dart", "MongoDB", "REST APIs"],
  },
];
