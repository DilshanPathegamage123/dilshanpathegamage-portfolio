import type { Project } from "../types";

import ticketmateCover from "../assets/images/projects/ticketmate/cover.webp";
import ticketmateG1 from "../assets/images/projects/ticketmate/g1.webp";
import ticketmateG2 from "../assets/images/projects/ticketmate/g2.webp";
import ticketmateG3 from "../assets/images/projects/ticketmate/g3.webp";
import ticketmateG4 from "../assets/images/projects/ticketmate/g4.webp";
import ticketmateG5 from "../assets/images/projects/ticketmate/g5.webp";
import ticketmateG6 from "../assets/images/projects/ticketmate/g6.webp";
import ticketmateG7 from "../assets/images/projects/ticketmate/g7.webp";

import mozzamelCover from "../assets/images/projects/mozzamelt/cover.webp";
import mozzamelG1 from "../assets/images/projects/mozzamelt/g1.webp";
import mozzamelG2 from "../assets/images/projects/mozzamelt/g2.webp";

import cryptoxCover from "../assets/images/projects/cryptox/cover.webp";
import cryptoxG1 from "../assets/images/projects/cryptox/g1.webp";
import cryptoxG2 from "../assets/images/projects/cryptox/g2.webp";
import cryptoxG3 from "../assets/images/projects/cryptox/g3.webp";
import cryptoxG4 from "../assets/images/projects/cryptox/g4.webp";
import cryptoxG5 from "../assets/images/projects/cryptox/g5.webp";

import coachmeCover from "../assets/images/projects/coachme/cover.webp";
import coachmeG1 from "../assets/images/projects/coachme/g1.webp";
import coachmeG2 from "../assets/images/projects/coachme/g2.webp";

import wallArtCover from "../assets/images/projects/wall-art-machine/cover.webp";
import wallArtG1 from "../assets/images/projects/wall-art-machine/g1.webp";

import neuraCover from "../assets/images/projects/neura/cover.webp";
import neuraG1 from "../assets/images/projects/neura/g1.webp";

import similifyCover from "../assets/images/projects/similify/cover.webp";
import similifyG1 from "../assets/images/projects/similify/g1.webp";
import similifyG2 from "../assets/images/projects/similify/g2.webp";
import similifyG3 from "../assets/images/projects/similify/g3.webp";
import similifyG4 from "../assets/images/projects/similify/g4.webp";

import mlCover from "../assets/images/projects/tourist-arrivals-ml/cover.webp";
import mlG1 from "../assets/images/projects/tourist-arrivals-ml/g1.webp";
import mlG2 from "../assets/images/projects/tourist-arrivals-ml/g2.webp";
import mlG3 from "../assets/images/projects/tourist-arrivals-ml/g3.webp";
import mlG4 from "../assets/images/projects/tourist-arrivals-ml/g4.webp";
import mlG5 from "../assets/images/projects/tourist-arrivals-ml/g5.webp";
import mlG6 from "../assets/images/projects/tourist-arrivals-ml/g6.webp";
import mlG7 from "../assets/images/projects/tourist-arrivals-ml/g7.webp";

import fyrCover from "../assets/images/projects/final-year-research/cover.webp";
import fyrG1 from "../assets/images/projects/final-year-research/g1.webp";
import fyrG2 from "../assets/images/projects/final-year-research/g2.webp";

const GITHUB_PROFILE = "https://github.com/DilshanPathegamage123";

// Projects are ordered to match the CV first, then site-only projects follow.
export const projects: Project[] = [
  {
    slug: "final-year-research",
    title: "Exploring Hardware-Software Codesign of Spatial Deep Learning Hardware Accelerators",
    category: "Research Project",
    dateLabel: "Final Year Research · Group Project",
    summary:
      "A cycle-accurate hardware-software co-design simulator for systolic-array DNN accelerators.",
    description: [
      "Developed a cycle-accurate hardware-software co-design simulator framework for systolic array-based DNN accelerators, addressing critical performance bottlenecks in DNN execution.",
      "Researched and designed the compute and data delivery module of the simulator, exploring loop optimizations, memory management schemes, and dataflow strategies to improve accelerator performance.",
      "Validated the simulator against hardware, confirming cycle-accurate results.",
    ],
    tech: ["Python", "System Verilog", "DNN Workloads", "FPGA Simulation"],
    cover: fyrCover,
    gallery: [fyrG1, fyrG2],
    links: [{ label: "GitHub Profile", href: GITHUB_PROFILE }],
    fromCv: true,
  },
  {
    slug: "tourist-arrivals-ml",
    title: "Sri Lanka Foreign Tourist Arrivals Prediction Using Machine Learning",
    category: "Machine Learning",
    dateLabel: "Feb 2026",
    summary:
      "A Random Forest forecasting system predicting Sri Lanka's monthly tourist arrivals with 92% R² accuracy.",
    description: [
      "Developed a machine learning-based forecasting system to predict monthly foreign tourist arrivals to Sri Lanka using tourism data from 2019–2024. The project focused on handling seasonal trends, country-specific demand patterns, COVID-19 disruptions, and tourism recovery behavior.",
    ],
    highlights: [
      "Built a consolidated dataset from SLTDA tourism statistics and public tourism datasets.",
      "Processed 30+ raw JSON datasets into a final dataset of 13,632 records and 46 engineered features.",
      "Applied missing-value handling, interpolation, encoding, scaling, and feature engineering.",
      "Created temporal and statistical features — lag variables, rolling averages, growth rates, market-share indicators, and COVID severity metrics.",
      "Trained and optimized a Random Forest Regressor (Scikit-learn) with time-series-based train/validation/test splitting to avoid future data leakage.",
      "Performed hyperparameter tuning using randomized search.",
      "Implemented SHAP analysis for model explainability and feature-importance interpretation.",
      "Identified Lag_1_Month, Growth_3M, and Market_Share as the most influential prediction factors, and analyzed seasonality, COVID impact, and recovery trends across source countries.",
    ],
    metrics: [
      { label: "R² Score", value: "0.92" },
      { label: "MAE", value: "178" },
      { label: "RMSE", value: "991" },
    ],
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "SHAP", "Matplotlib", "Time-Series Forecasting"],
    cover: mlCover,
    gallery: [mlG1, mlG2, mlG3, mlG4, mlG5, mlG6, mlG7],
    links: [{ label: "GitHub Profile", href: GITHUB_PROFILE }],
    fromCv: true,
  },
  // {
  //   slug: "expert-system",
  //   title: "Expert System — University Course Selection Advisor",
  //   category: "Expert System",
  //   dateLabel: "Full Stack Developer",
  //   summary:
  //     "A rule-based expert system automating university course selection on a Prolog knowledge base.",
  //   description: [
  //     "Developed a rule-based expert system that automates university course selection by evaluating prerequisites, credit requirements, and career paths, replacing a manual, error-prone process.",
  //     "Built career-based recommendations plus prerequisite and automated credit validation on a Prolog knowledge base, with an interactive Python GUI for decision support.",
  //   ],
  //   tech: ["Prolog", "Python", "Tkinter"],
  //   links: [{ label: "GitHub Profile", href: GITHUB_PROFILE }],
  //   fromCv: true,
  //   placeholder: true,
  // },
  {
    slug: "ticketmate",
    title: "TicketMate — Public Transport E-Ticketing System",
    category: "Web Application",
    dateLabel: "Level 2 Software Project · Mentored by Bistec Global",
    summary:
      "Train and bus e-ticketing platform with live tracking, scheduling, and online payments.",
    description: [
      "A public-transport-focused web application covering train and bus search, seat reservation with online card payments, reservation changes, cancellation with refund, live vehicle tracking, emergency updates, scheduling, vehicle/driver registration, and vehicle income prediction — addressing reliability and convenience challenges in Sri Lanka's public transport system.",
      "I developed the search functionality for trains and buses, seat reservation based on availability and preference, reservation changes and cancellations with refunds, and passenger profile management, along with the UI/UX design for these modules.",
    ],
    tech: ["React", "TypeScript", "ASP.NET", "MSSQL", "Bootstrap", "Azure Cloud"],
    cover: ticketmateCover,
    gallery: [ticketmateG1, ticketmateG2, ticketmateG3, ticketmateG4, ticketmateG5, ticketmateG6, ticketmateG7],
    links: [
      { label: "Frontend Repository", href: "https://github.com/SILVA-HSL/Software-Project-PTES" },
      { label: "Backend Repository", href: "https://github.com/SILVA-HSL/Software-Project-PTES-backend/tree/main" },
      {
        label: "Figma Designs",
        href: "https://www.figma.com/design/pAHFZTPecjf4PYd8dMqPgT/Project-designs?node-id=0-1&t=v2itQInCq76u7Njr-1",
      },
    ],
    fromCv: true,
  },
  {
    slug: "mozzamelt",
    title: "MozzaMelt — Ecommerce Platform",
    category: "Ecommerce Application",
    dateLabel: "Group Project",
    summary:
      "A full-featured pizza ordering platform built on a scalable microservice architecture.",
    description: [
      "An online pizza delivery platform built to demonstrate a scalable microservice architecture and modern development practices. I contributed as a full-stack developer and handled backend testing, developing the review and rating service end to end.",
    ],
    highlights: [
      "Frontend: React + Redux Toolkit for state management and a responsive UI, with Styled-Components for modular styling.",
      "Backend: microservice architecture on ASP.NET Core covering user, product, order, payment, and review/rating domains, fronted by a centralized API Gateway with JWT authentication.",
      "Database: MSSQL for reliable relational data management.",
      "CI/CD: automated build, test, and deployment pipelines with GitHub Actions.",
      "Deployment: Dockerized services deployed to Azure with automatic updates via CI/CD.",
      "Testing: end-to-end testing with Selenium on the frontend; unit and integration testing with xUnit on the backend, verifying API endpoints, microservice interactions, and database functionality.",
      "Additional features: load balancing for high availability, secure payment integration, and order tracking/inventory tools.",
    ],
    tech: ["React", "Redux Toolkit", "ASP.NET Core", "MSSQL", "Docker", "Azure", "GitHub Actions", "xUnit", "Selenium"],
    cover: mozzamelCover,
    gallery: [mozzamelG1, mozzamelG2],
    video: "/videos/mozzamelt-demo.mp4",
    links: [
      { label: "Frontend Repository", href: "https://github.com/DilshanPathegamage123/MozzaMelt-EcommerceSystemFrontend.git" },
      { label: "Backend Repository", href: "https://github.com/DilshanPathegamage123/MozzaMelt-EcommerceSystemBackend.git" },
    ],
    fromCv: true,
  },
  {
    slug: "neura",
    title: "NeurA — AI Chatbot",
    category: "Web Application",
    summary: "A chatbot built on the Google Gemini API for fast, natural-language answers.",
    description: [
      "NeurA is a chatbot that leverages advanced natural language processing to provide quick, accurate answers. The frontend is built with React and Bootstrap, while the backend integrates with the Google Gemini API for AI-driven responses.",
    ],
    tech: ["React", "Bootstrap", "Google Gemini API"],
    cover: neuraCover,
    gallery: [neuraG1],
    video: "/videos/neura-demo.mp4",
    links: [
      { label: "GitHub Repository", href: "https://github.com/DilshanPathegamage123/Neura-React-js-Gemini-API-ChatBot.git" },
    ],
    fromCv: false,
  },
  {
    slug: "similify",
    title: "SimiliFy — Similar Image Finder",
    category: "Web Application",
    summary: "Finds visually similar images from a large image set with an OpenCV-powered search.",
    description: [
      "SimiliFy lets users upload a large image set and search for similar images by uploading a single reference image. The system finds and displays similar matches along with their file names — an efficient image-based search solution.",
    ],
    tech: ["React", "ASP.NET", "Bootstrap", "OpenCV"],
    cover: similifyCover,
    gallery: [similifyG1, similifyG2, similifyG3, similifyG4],
    links: [
      { label: "Frontend Repository", href: "https://github.com/DilshanPathegamage123/Similify-SimilarImageFinder-FrontEnd.git" },
      { label: "Backend Repository", href: "https://github.com/DilshanPathegamage123/Similify-SimilarImageFinder-BackEnd.git" },
    ],
    fromCv: false,
  },
  {
    slug: "wall-art-machine",
    title: "Multi-Colour Wall Art Machine",
    category: "Hardware Application",
    dateLabel: "Team Lead · Group Project",
    summary: "A micro-controller-driven machine that prints full-colour artwork directly onto a wall.",
    description: [
      "Led a team of five in building a system that turns a digital image into full-colour wall art up to 1m × 1m — no framing or printing required. The machine runs on two tracks powered by two stepper motors, spraying ink through nozzles to reproduce the input image directly on the wall (or on fabric and posters), controlled by height/width parameters entered from a computer.",
      "The goal was to make meaningful, personal wall art accessible without the cost of individually printing and framing each piece — and the team is continuing to refine the mechanism for smoother, more complex artwork.",
    ],
    tech: ["Arduino", "Stepper Motors", "CNC"],
    cover: wallArtCover,
    gallery: [wallArtG1],
    video: "/videos/wall-art-machine-demo.mp4",
    links: [],
    fromCv: false,
  },
  {
    slug: "cryptox",
    title: "CryptoX — Crypto Currency Based Web Application",
    category: "UI Design & Prototype",
    summary: "A cryptocurrency exchange UI design and interactive prototype, built from scratch.",
    description: [
      "Our main intention was to build a cryptocurrency exchange website UI design and prototype from scratch. The top priority requirements were to let users trade both cryptocurrencies and fiat money, top up their wallets, and withdraw funds, while ensuring real-time data updates and interface customization. Designing this exchange became one of our most interesting projects.",
    ],
    tech: ["Figma", "UI/UX Design"],
    cover: cryptoxCover,
    gallery: [cryptoxG1, cryptoxG2, cryptoxG3, cryptoxG4, cryptoxG5],
    video: "/videos/cryptox-demo.mp4",
    links: [
      {
        label: "Figma Designs",
        href: "https://www.figma.com/design/K7DFXO0FeT1EKzHLEpDqKy/CryptoX?node-id=390-15355&t=lf5PYXIWAAnazJls-0",
      },
    ],
    fromCv: false,
  },
  {
    slug: "coachme",
    title: "CoachMe — Mobile App for Track & Field Athletics",
    category: "Mobile Application",
    dateLabel: "Ongoing Project",
    summary: "An affordable performance-tracking app for coaches and athletes in schools and universities.",
    description: [
      "Coaches of school, college, and university athletes often lack an affordable way to track and record each athlete's progress — the advanced systems available to national and international athletes aren't feasible for educational institutions. CoachMe was designed to close that gap: an affordable, effective performance-tracking app that gives coaches the tools to provide personalized guidance and helps athletes reach their full potential.",
    ],
    highlights: [
      "Individual athlete profiles with real-time performance tracking",
      "Group management and analysis for coaches handling multiple athletes",
      "Sleep and nutrition tracking alongside a goal-oriented approach",
      "Performance analysis and insights for data-driven coaching decisions",
      "Dynamic workout plan creation and enhanced coach-athlete collaboration",
    ],
    tech: ["Figma", "UI/UX Design"],
    cover: coachmeCover,
    gallery: [coachmeG1, coachmeG2],
    links: [
      {
        label: "Figma Designs",
        href: "https://www.figma.com/design/SRP0uiGdWwdkmtjd2C8pcb/Untitled?node-id=0-1&t=Leikp7fOWlVpKED3-0",
      },
    ],
    fromCv: false,
  },
];
