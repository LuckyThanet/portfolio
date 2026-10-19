import {
  GradexHomeLanding,
  GradexMealPreparation,
  GradexQrCodePayment,
  GradexSubscriptionPlans,
  PhileCinemaMovieListings,
  PhileCinemaProfileTickets,
  PhileCinemaShowtimeSeatBooking,
  PhileCinemaSignIn,
  WaterDispenserCustomerMenu,
  WaterDispenserProductSearch,
  WaterDispenserAdminMenu,
  WaterDispenserAdminProductSearch,
  MastermindSolverRun1,
  MastermindSolverRun2,
  EduBridgeProjectDayPoster,
  TwoBKmuttLoginPage,
  TwoBKmuttResearchSubmissionCheck,
  InfoScopeHomePage,
  StarThaiHomePage,
} from "../assets/images";

export interface FeaturedCaseStudy {
  id: string;
  caseNumber: string;
  category: string;
  badge?: string;
  title: string;
  subtitle: string;
  challenge: string;
  solution: string;
  outcome: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  imageAlt: string;
  secondaryImage?: string;
}

export const featuredProjects: FeaturedCaseStudy[] = [
  {
    id: "edubridge",
    caseNumber: "CASE 01",
    category: "Gamified Learning Platform · Senior Project",
    title: "EduBridge — Interactive Educational Platform with Gamification",
    subtitle: "Real-time virtual classroom where students learn through avatars, quizzes, missions, and badges, while teachers track progress with built-in analytics.",
    challenge: "Online classes struggle to keep students engaged and motivated, learners often feel pressured to take part, and teachers lack analytics that connect to every learning and teaching activity.",
    solution: "Built a real-time virtual classroom with Phaser where students join as personalized avatars to take online quizzes, complete missions, and collect rewards in a badge shop. Teachers manage courses and scores and review learning analytics at both class and individual level.",
    outcome: "SUS usability score of 87.08% from teachers (Excellent) and 74.53% from students (Good); 100% success rate with 40 concurrent users, and no server crash under a 2,000-user stress test.",
    technologies: ["React", "Phaser", "TypeScript" ,"TanStack Query", "Node.js", "Express", "PostgreSQL", "AWS S3", "AWS EC2", "Nginx", "Docker"],
    githubUrl: "https://github.com/LuckyThanet",
    liveUrl: "https://youtu.be/inVDKeWetq4",
    image: EduBridgeProjectDayPoster,
    imageAlt: "ProjectDay 2026 poster for EduBridge (CPE35): objectives, tech stack, usability and load test results, and screenshots of the virtual classroom, analytics, quizzes, missions, and badge shop."
  },
  {
    id: "2b-kmutt",
    caseNumber: "CASE 02",
    category: "Camp Operations Platform",
    title: "2B-KMUTT — Camp Management System",
    subtitle: "One web platform for running the 2B-KMUTT Future Leader Camp: camper and staff records, QR attendance, leave requests, and research project submissions.",
    challenge: "Running a multi-day research camp means tracking every camper's profile, health and emergency contacts, daily attendance, leave, and research project submissions, plus staff schedules, which is hard to keep in sync across separate spreadsheets.",
    solution: "Built a role-based Next.js platform for admins, senior and junior staff, and campers: QR-code check-in scanned by staff, leave requests with evidence upload and approval, research project PDF submission, staff working-hour logs with Excel export, bulk import from Excel/CSV, and email password reset.",
    outcome: "Used to run the 2B-KMUTT camp and maintained for the following year's camp; I built the user directory, profile and calendar views, the leave request and review flow, and the attendance API.",
    technologies: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Chakra UI", "Tailwind CSS", "Docker"],
    githubUrl: "https://github.com/LuckyThanet",
    liveUrl: "https://github.com/LuckyThanet",
    image: TwoBKmuttLoginPage,
    secondaryImage: TwoBKmuttResearchSubmissionCheck,
    imageAlt: "2B-KMUTT Future Leader Camp (20th) login page: camp artwork on the left and an email and password sign-in form on the right."
  },
  {
    id: "infoscope",
    caseNumber: "CASE 03",
    category: "OSINT Investigation Tool",
    badge: "3 OSINT Tools",
    title: "InfoScope — OSINT Investigation Workbench",
    subtitle: "Runs WHOIS, username, and breached-password checks for one target in a single request, and keeps the results organized by case.",
    challenge: "Open-source intelligence checks on a single target usually mean juggling separate tools and websites for domain lookups, username searches, and breach checks, then copying the results into notes by hand.",
    solution: "A case-based workbench: enter a domain, username, or password and InfoScope runs WHOIS with parsed registrar and date fields, checks the username across sites from the WhatsMyName dataset in parallel, and checks the password against Have I Been Pwned. The password is SHA-1 hashed in the browser and only a 5-character prefix of the hash is sent out (k-anonymity). Results are saved per case in PostgreSQL and browsed in AG Grid tables.",
    outcome: "Semi-Finalist at Cyber Warrior Hackathon 2025. Built with one teammate; I set up the project, data models, and database, wrote the WHOIS parser, and built the React pages and API hooks for results and case history.",
    technologies: ["React", "TypeScript", "TanStack Query", "AG Grid", "Node.js", "Express", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/LuckyThanet/InfoScope",
    image: InfoScopeHomePage,
    imageAlt: "InfoScope home page: a dark header with the InfoScope name and tagline, and an Investigation Parameters form for case name, username, domain, and password with WHOIS, WhatMyName, and Have I Been Pwned options."
  },
  {
    id: "starthai",
    caseNumber: "CASE 04",
    category: "Booking & Operations Platform",
    badge: "Solo Full-Stack Build",
    title: "Star Thai — Massage Spa Booking & Management System",
    subtitle: "Online booking, therapist scheduling, Stripe payments, and SMS notifications for a massage spa.",
    challenge: "A massage spa needs customers to book several treatments in one visit with the therapist they want, without double-booking anyone, while the owner tracks payments and the day's schedule.",
    solution: "Built the full system solo: a Go (GoFiber, GORM) API on PostgreSQL and a React 19 frontend. Customers book multiple treatments back to back or at separate times, with per-treatment therapist choice or auto-assignment; row-level locking prevents double-booking. Payments run through Stripe Checkout with server-side pricing and verified webhooks, plus owner-only cash recording with an append-only audit log. Twilio sends booking alerts, reminders, and a daily owner summary.",
    outcome: "Developed end to end by me across separate backend and frontend repositories, with automated tests for the booking, payment, and notification flows. The spa’s public website is live; the booking system is being prepared for a staging deployment on AWS.",
    technologies: ["Go", "GoFiber", "GORM", "PostgreSQL", "React", "TypeScript", "TanStack Query", "Tailwind CSS", "Stripe", "Twilio"],
    githubUrl: "https://github.com/LuckyThanet",
    liveUrl: "https://www.starthaimassage-bodywork.com/",
    image: StarThaiHomePage,
    imageAlt: "Star Thai home page: a dark navigation bar with Book Now, the heading “Thoughtful care, quiet calm.” with booking buttons, and an arched photo of the spa’s lounge."
  }
];

export interface InfoProject {
  id: 'gradex' | 'phileCinema' | 'mastermind' | 'waterDispenser';
  title: string;
  summary: string;
  description: string[];
  date: string;
  status: string;
  technologies: string[];
  sourceCode: string;
  view?: string;
  imageUrl?: string[];
}


export const project: InfoProject[] = [
  {
    id: "gradex",
    title: "GraDex Recipe Platform",
    summary: "subscription-based platform providing ingredients.",
    description: [
      "Developed a project as part of coursework to design a platform that provides customers with ingredients on a subscription basis, using React for the frontend, Express.js for the backend, and MongoDB for efficient data storage.",
      "Focused on improving user experience with easy-to-follow recipes and seamless ingredient ordering.",
    ],
    date: "Sep 2024 - Dec 2024",
    status: "Completed",
    technologies: [
      "React",
      "Node.js",
      "Typescript",
      "Tailwind CSS",
      "Express",
      "MongoDB",
    ],
    sourceCode: "https://github.com/orgs/SE-GraDex/teams/se/repositories",
    // view: "",
    imageUrl: [
      GradexHomeLanding,
      GradexMealPreparation,
      GradexQrCodePayment,
      GradexSubscriptionPlans,
    ],
  },
  {
    id: "phileCinema",
    title: "Phile Cinema Website",
    summary:
      "Developed a movie ticket booking website with booking management.",
    description: [
      "Developed a movie ticket booking website as part of coursework with a system to manage user data, movie information, showtimes, and bookings using React, Express.js, and SQL for database management.",
      "Focused on database normalization for efficient storage and retrieval of information.",
    ],
    date: "Apr 2024 - May 2024",
    status: "Completed",
    technologies: [
      "React",
      "Node.js",
      "Javascript",
      "Tailwind CSS",
      "Express",
      "MySQL",
    ],
    sourceCode: "https://github.com/LuckyThanet/movie-theater-db-project",
    // view: "",
    imageUrl: [
      PhileCinemaMovieListings,
      PhileCinemaProfileTickets,
      PhileCinemaShowtimeSeatBooking,
      PhileCinemaSignIn,
    ],
  },
  {
    id: "mastermind",
    title: "Mastermind Decoding Game",
    summary: "Developed a decoding game to compare the efficiency",
    description: [
      "Created a decoding game as part of coursework using Genetic Algorithm and Brute Force Algorithm totest efficiency in guessing secret codes.",
      "Compared the performance of both algorithms by analyzing the number of guesses required for success.",
    ],
    date: "Nov 2023 - Dec 2023",
    status: "Completed",
    technologies: ["C language", "stdlib.h", "string.h"],
    sourceCode: "https://github.com/LuckyThanet/CPE231-ALGORITHMS",
    // view: "",
    imageUrl: [MastermindSolverRun1, MastermindSolverRun2],
  },
  {
    id: "waterDispenser",
    title: "Water Dispenser Sim",
    summary:
      "Simulated an automatic water dispenser in C using data structures",
    description: [
      "Developed a simulation of an automatic water dispenser as part of coursework, similar to Tao Bin machines, utilizing data structures to enhance understanding and application in complex projects.",
      "The project focused on implementing data structures with C in real-world applications.",
    ],
    date: "Apr 2023 - May 2023",
    status: "Completed",
    technologies: ["C language", "stdlib.h", "string.h"],
    sourceCode: "https://github.com/LuckyThanet/CPE112-DATA-STRUCTURE",
    // view: "",
    imageUrl: [WaterDispenserCustomerMenu, WaterDispenserProductSearch, WaterDispenserAdminMenu, WaterDispenserAdminProductSearch],
  },
];
