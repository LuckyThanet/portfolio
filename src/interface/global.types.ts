import {
  GradexHomePageImage,
  GradexMealpreparationImage,
  GradexCodepaymentImage,
  GradexSubscriptionPageImage,
  PhileCinemaLandingPageImage,
  PhileCinemaProfilePageImage,
  PhileCinemaBookingPageImage,
  PhileCinemaLoginPageImage,
  ModDin01,
  ModDin02,
  ModDin03,
  ModDin04,
  Mastermind01,
  Mastermind02,
} from "../assets/images";
export interface InfoProject {
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
      GradexHomePageImage,
      GradexMealpreparationImage,
      GradexCodepaymentImage,
      GradexSubscriptionPageImage,
    ],
  },
  {
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
      PhileCinemaLandingPageImage,
      PhileCinemaProfilePageImage,
      PhileCinemaBookingPageImage,
      PhileCinemaLoginPageImage,
    ],
  },
  {
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
    imageUrl: [Mastermind01, Mastermind02],
  },
  {
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
    imageUrl: [ModDin01, ModDin02, ModDin03, ModDin04],
  },
];
