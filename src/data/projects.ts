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

export const projects: Project[] = [
  {
    slug: "final-year-research",
    title: "Exploring Hardware-Software Co-design of Spatial Deep Learning Hardware Accelerators",
    category: "Research Project",
    dateLabel: "Final Year Research · Team QuadraMind",
    summary:
      "A cycle-accurate, hardware-verified simulator framework for systolic-array DNN accelerators.",
    description: [
      "Deep learning workloads are heavy on both computation and data movement, so running them on general-purpose processors is inefficient — and with Moore's Law slowing down, the field has moved toward specialized spatial accelerators like systolic arrays. The trouble is that the simulators used to design these accelerators hard-wire most of the important architectural choices. Dataflow, memory layout, and how data gets delivered across the array are usually studied separately, so designers can't see how they interact or find the best combination for a given workload.",
      "As Team QuadraMind, we designed and validated a cycle-accurate, hardware-verified RTL simulator framework for systolic-array-based DNN accelerators that makes these architectural choices fully adjustable and measurable, in both single-DNN and multi-DNN settings — and demonstrated it live on real FPGA hardware.",
    ],
    sections: [
      {
        heading: "My contribution — Compute & Data Delivery module",
        icon: "🧠",
        paragraphs: [
          "My work covered the core of the accelerator: the systolic array compute units, the data fetchers, the interconnects, and the off-chip memory implementation that feeds them. I made three hardware knobs independently selectable, turning them into real, measurable control signals rather than software settings:",
        ],
        bullets: [
          "Stationary scheme — Output, Weight, or Input Stationary",
          "Off-chip memory layout — Channel, Row, or Column major",
          "Interconnect casting — Unicast, Multicast, or Hybrid",
        ],
      },
      {
        heading: "What the numbers showed",
        icon: "📊",
        bullets: [
          "Stationary scheme alone moved a single layer's execution time from ~5,200 cycles to 153,738 — a Weight-Stationary array re-fetches its window on every invocation.",
          "Memory layout doesn't change how much data moves — all three layouts move the same 1,836 AXI beats — but it changes how it's requested: Channel-major issues 138 read bursts vs. 1,794 for the others, ~13× fewer requests and ~1.86× faster.",
          "Casting matters even more: Multicast moved 1,836 beats where Unicast moved 20,736 for the same layer — up to an 11× swing in off-chip traffic from one knob alone.",
        ],
        paragraphs: [
          "I also implemented the off-chip memory path and AXI-based data delivery tying the compute array to DRAM, and derived an analytical model — cycles = 3 × read requests + 2 × data beats + compute — that matched the measured RTL exactly, scoring the full 27-point design space in ~1.1ms instead of running RTL simulation for every point. This became one of the backbone modules the rest of the team built on top of.",
        ],
      },
      {
        heading: "The rest of the framework",
        icon: "🧩",
        bullets: [
          "Module 2 — Memory Management: a stamp-based static tagless scheme benchmarked against a dynamic page-table baseline, modelling bank conflicts and memory-side stalls cycle-by-cycle.",
          "Module 3 — Multi-DNN Scheduler: 14 scheduling policies — classical OS-style schedulers plus published DNN schedulers like AI-MT, BATCH-DNN, and BATCH-DNN++ — compared on one fixed accelerator, with a design-time chooser naming the best policy in milliseconds.",
          "Module 4 — Loop Optimization / Mapper: a gradient-descent DNN compiler finding near-optimal loop orderings in ~15 evaluations instead of exhaustively searching 720 arrangements per layer, validated on 7 real CNN architectures.",
        ],
      },
      {
        heading: "Verification",
        icon: "✅",
        paragraphs: [
          "Two independent validation flows, each answering a different question. Every configuration was checked against a TensorFlow golden reference for functional correctness — worst-case error 0.0499%, across every stationary scheme, layout, casting mode, memory scheme, and bank count. And a selected design point was prototyped on a Xilinx Zynq ZedBoard FPGA and demonstrated live with two concurrent DNNs on real webcam input, confirming the RTL is genuinely synthesizable and correct under real timing, memory, and I/O — not just in a simulator.",
        ],
      },
      {
        heading: "Team & supervisors",
        paragraphs: [
          "Built with teammates B.H.L.M. Amarasena, D.A.N.M. Premalal and C.J. Abeygunawardana as Team QuadraMind, under the supervision of R.A.D.M.P. Ranawaka and B.H. Sudantha (University of Moratuwa) and Prof. Mongkol Ekpanyapong (Asian Institute of Technology, Thailand). With the framework complete, the next step is taking this work toward academic publication.",
        ],
      },
    ],
    metrics: [
      // { label: "Configs verified", value: "27/27" },
      // { label: "Worst-case error", value: "0.0499%" },
      // { label: "Model vs. RTL speed", value: "~100,000×" },
    ],
    tech: [
      "SystemVerilog",
      "Python",
      "TensorFlow",
      "cocotb",
      "Xilinx Vivado",
      "Zynq ZedBoard FPGA",
      "Linux",
    ],
    cover: fyrCover,
    gallery: [fyrG2],
    links: [
      {
        label: "Project Presentation",
        href: "https://www.canva.com/design/DAHRxVye39M/1xdIbwkzAANdGwS8VCRWhw/view?utm_content=DAHRxVye39M&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha0308644be",
      },
    ],
    fromCv: true,
  },
  {
    slug: "tourist-arrivals-ml",
    title: "Sri Lanka Foreign Tourist Arrivals Prediction Using Machine Learning",
    category: "Machine Learning Model",
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
    links: [{ label: "GitHub Repository", href: "https://github.com/DilshanPathegamage123/SriLanka_Tourism_Prediction_ML_Project" }],
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
      "The public transport-focused web application includes searching for trains and buses, reserving seats on trains and buses by making online card payments, changing reservations, canceling reservations with a refund, live vehicle tracking, emergency updates, scheduling trains and buses, registering vehicles and drivers, and vehicle income prediction. This addresses the challenges in Sri Lanka's public transportation system, using a user-friendly web application that enhances the reliability, convenience, and efficiency of commuting.",
      "In this project, I have developed the functionalities for searching for trains and buses, reserving seats in trains and buses according to availability and user preference, changing and canceling reservations with refund and managing passenger profiles.",
    ],
    tech: ["React", "TypeScript", "ASP.NET", "MSSQL", "Bootstrap", "Azure Cloud"],
    cover: ticketmateCover,
    gallery: [ticketmateG1, ticketmateG2, ticketmateG3, ticketmateG4, ticketmateG5, ticketmateG6, ticketmateG7],
    links: [
      { label: "Frontend Repository", href: "https://github.com/DilshanPathegamage123/Software-Project-PTES" },
      { label: "Backend Repository", href: "https://github.com/DilshanPathegamage123/Software-Project-PTES-backend" },
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
      "NeurA is a chatbot developed using React JS and the Google Gemini API. It leverages advanced natural language processing to provide quick, accurate answers. The frontend is built with React JS and Bootstrap, while the backend integrates with the Google Gemini API for powerful AI-driven responses — with more performance optimizations and features planned as it keeps evolving.",
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
      "SimiliFy enables users to upload a large image set and search for similar images by uploading a single image. The system then finds and displays similar images along with their file names, providing an efficient image-based search solution.",
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
      "With great delight, I, as the leader of this exceptional team, along with my talented group members Mr. Supun Jayathilaka, Mr. Mohomed Arkam, Miss. Lahiruni Malshika, and Miss. Chamodi Liyanage, take immense pride in leading this groundbreaking project.",
      "Life is not all about working, earning, and studying — life is meant to be beautiful. As human beings, we need a balanced life between career, family, friends, and other social events, and art is part of that balance. Wall art is something more important than photo albums or standing frames: making your precious photographs into wall art is one of the best ways to get your art visible in your home or office, wherever you want it.",
      "The designed wall art system turns your precious images into wall art up to 1m × 1m in size, so people no longer need to spend money individually printing and framing each image they'd like on their wall.",
      "The system creates the image on the wall using different colours: the height and width are entered through a computer, and the design is painted onto the wall by spraying ink through nozzles. The machine runs on two tracks powered by two stepper motors, and can also be used for fabric art and posters. We're continuing to develop this machine to make it smoother and capable of more complex artwork.",
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
      "Our main intention was to build a cryptocurrency exchange website ui design and prototype from scratch. The top priority requirements were to provide users with the ability to trade both cryptocurrencies and fiat money, replenish their wallets, and withdraw funds. We also needed to ensure data real-time updates and interface customization. The creation of this cryptocurrency exchange became one of our most interesting projects.",
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
      "In the exciting world of track and field athletics, a common challenge has been holding back both athletes and coaches from reaching their full potential. However, there's a roadblock on this journey — coaches struggle to track and understand each athlete's performance, making it tough to guide them effectively.",
      "The world of track and field isn't just about running, jumping, and throwing — it's about growth, improvement, and achieving personal bests. However, here's where the challenge lies: coaches lack a reliable way to keep a record of each athlete's progress and accomplishments. This missing piece of the puzzle means coaches can't create tailored workout plans that help athletes shine. It's like having a map without directions.",
      "This issue isn't small, especially when coaches are looking after a bunch of athletes in schools, high schools, and universities. Imagine trying to keep an eye on everyone in a busy stadium — it's not an easy task. As a result, even athletes with incredible potential might go unnoticed.",
      "Our motivation comes from a real experience of one of our team members. As a school athlete, his progress was slow because his coach couldn't track his performance effectively. This wasn't the coach's fault; managing many students without proper tools is tough.",
      "In schools, colleges, and universities, there are no affordable systems to track and manage athletes' progress. While national and international athletes have access to expensive, advanced systems, these are not feasible for educational institutions.",
      "To solve this problem, we developed CoachMe, a mobile app designed to provide affordable and effective performance tracking for coaches and athletes. Our goal is to help athletes reach their full potential by giving coaches the tools they need to provide personalized guidance. (Only the UI/UX design and prototype are complete at this stage, with the app development in progress.)",
    ],
    highlights: [
      "Individual Athlete Profiles",
      "Real-time Performance Tracking",
      "Group Management and Analysis",
      "Sleep and Nutrition Tracking",
      "Goal-oriented Approach",
      "Performance Analysis and Insights",
      "Enhanced Coach-Athlete Collaboration",
      "Dynamic Workout Plan Creation",
      "Holistic Performance Analysis",
      "Data-driven Decision Making",
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
