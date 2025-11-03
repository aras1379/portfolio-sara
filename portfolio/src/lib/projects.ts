// PROJECTS

import { Project } from "@/types/project";

const projects: Project[] = [
  {
    id: "1",
    slug: "portfolio",
    title: "Portfolio Website",
    description:
      "Portfolio Website to showcase my projects and skills, built with React, Next.js and Tailwind CSS.",
    fullDescription:
            "Portfolio Website to showcase my projects and skills, built with React, Next.js and Tailwind CSS.",

    techStack: ["react", "typescript", "next-js", "tailwind-css"], //skills by ID
    features: [
      "React Web Application",
    ],
    challenges: ["Learning Next.js new framework and TailWind CSS."],
    learnings: [
      "React structure",
      "Tailwind layout",
      "Accomplish good code structure that is reusable and scalable.",
    ],
    demoUrl: "",
    githubUrl: "https://github.com/aras1379/portfolio-sara",
    imageUrl: "/images/projects/portfolio.png",
    gallery: [
      "/images/projects/portfolio.png",
      "/images/projects/portfolio2.png",
    ],
    status: "in-progress",
    startDate: "2025-09-20",
    endDate: "",
    duration: "Ongoing",
    teamSize: 1,
    category: "web",
    featured: true,
  },
  {
    id: "2",
    slug: "tic-tac-toe",
    title: "Tic Tac Toe in React",
    description:
      "Tic Tac Toe Game to learn React. Coded in TypeScript with Tailwind.",
    fullDescription:
      "Tic Tac Toe Game to learn React. Coded in TypeScript with Tailwind.",

    techStack: ["react", "typescript", "tailwind-css"], //skills by ID
    features: [
      "React Web Application",
    ],
    challenges: ["Mostly layout since new to TailWind at the time."],
    learnings: [
      "React structure",
      "Tailwind layout",
    ],
    demoUrl: "",
    githubUrl: "https://github.com/aras1379/tic-tac-toe",
    imageUrl: "/images/projects/tictac.png",
    gallery: [
      "/images/projects/tictac.png",
      "/images/projects/tictac2.png",
    ],
    status: "completed",
    startDate: "2025-09-30",
    endDate: "2024-10-05",
    duration: "1 week",
    teamSize: 1,
    category: "web",
    featured: true,
  },
  {
    id: "3",
    slug: "fem-food-app",
    title: "Women Health Food App",
    description:
      "Backend communication between App and Embedded, and Mobile application to steer robot.",

    fullDescription:
      "App to generate recipes based on research for user-specific needs.",
    techStack: ["react-native", "javascript", "sql", "llama3"], // skills IDs

    features: [
      "Mobile Application Development",
      "Backend communication between Embedded and Mobile",
      "LLM generated recipes",
      "Data storage with SQLite",
    ],
    challenges: ["Scripting and integrating Llama 3 model seemlessly in the application."],
    learnings: [
      "Integrating Llama 3 into mobile app",
      "Scripting with JavaScript",
      "React Native development",
    ],
    demoUrl: "",
    githubUrl: "https://github.com/aras1379/foodlogic",
    imageUrl: "/images/projects/food-app.png",
    gallery: ["/images/projects/food-app.png", "/images/projects/food-app2.png"],
    status: "in-progress",
    startDate: "2024-06-01",
    endDate: "-",
    duration: "Ongoing",
    teamSize: 1,
    category: "fullstack",
    featured: true,
  },
  {
    id: "4",
    slug: "mower-hva",
    title: "Mower with Application",
    description:
      "Backend communication between App and Embedded, and Mobile application to steer robot.",
    fullDescription:
      "Project in collaboration with Husqvarna where we developed a lawn-mower. I worked in both mobile- and backend to enable communication between robot and app, as well as image processing. ",

    techStack: ["swift", "python"], //skills by ID
    features: [
      "Mobile Application Development",
      "Backend communication between Embedded and Mobile",
      "Agile group work",
      "Testing",
    ],
    challenges: ["Implementing real-time updates without performance issues"],
    learnings: [
      "Testing whole chain from robot to mobile app",
      "More knowledge in WebSockets and live stream communication",
    ],
    demoUrl: "",
    githubUrl: "https://github.com/IMS2025/G2_main",
    imageUrl: "/images/projects/mower-start.png",
    gallery: [
      "/images/projects/mower-start.png",
      "/images/projects/mower-controller.png",
    ],
    status: "completed",
    startDate: "2025-03-01",
    endDate: "2025-05-30",
    duration: "2 months",
    teamSize: 7,
    category: "fullstack",
    featured: true,
  }, 
  {
    id: "5",
    slug: "knowit-praktik",
    title: "Robot Controller App",
    description:
      "Mobile application to steer robot.",
    fullDescription:
      "Internship project at Knowit where I developed a mobile application in Flutter to control a robot via WebSockets. The app allowed real-time control and monitoring of the robot's status.",

    techStack: ["swift", "python"], //skills by ID
    features: [
      "Flutter Mobile Application Development",
      "Backend communication between Backend and Mobile",
      "Agile group work",
      "Testing",
    ],
    challenges: ["Implementing real-time updates without performance issues"],
    learnings: [
      "Testing whole chain from robot to mobile app",
      "Learning Flutter framework",
      "More knowledge in WebSockets and live stream communication",

    ],
    demoUrl: "",
    githubUrl: "",
    imageUrl: "/images/projects/knowit-praktik1.png",
    gallery: [
      "/images/projects/knowit-praktik1.png",
      "/images/projects/knowit-praktik2.png",
      "/images/projects/knowit-praktik3.png",
    ],
    status: "completed",
    startDate: "2024-04-01",
    endDate: "2024-05-30",
    duration: "2 months",
    teamSize: 2,
    category: "mobile",
    featured: true,
  },
  {
    id: "6",
    slug: "flexicharge-skola",
    title: "iOS App for Electric Vehicle Charging",
    description:
      "School project where I worked in a team to develop an iOS application for managing electric vehicle charging stations. I was both Scrum Master and programmer in the project.",
    fullDescription:
      "School project where I worked in a team to develop an iOS application for managing electric vehicle charging stations. I was both Scrum Master and programmer in the project.",

    techStack: ["swift"], //skills by ID
    features: [
      "iOS Mobile Application Development",
      "Backend communication between Backend and Mobile",
      "Agile group work in Scrum",
      "Testing",
    ],
    challenges: ["Working in a team and coordinating tasks as Scrum Master."],
    learnings: [
      "Working with other teams and coordinating as Scrum Master",
      "Swift iOS Development",
    ],
    demoUrl: "",
    githubUrl: "",
    imageUrl: "/images/projects/flexi4.png",
    gallery: [
      "/images/projects/flexi1.png",
       "/images/projects/flexi3.png",
       "/images/projects/flexi2.png",
       "/images/projects/flexi4.png",
    ],
    status: "completed",
    startDate: "2024-08-15",
    endDate: "2024-10-01",
    duration: "1.5 months",
    teamSize: 7,
    category: "mobile",
    featured: true,
  },
  {
    id: "7",
    slug: "ios-app",
    title: "iOS Todo App with API integration",
    description:
      "School project where I learned Swift and iOS development by building a Todo app that integrates with API.",
    fullDescription:
      "School project where I learned Swift and iOS development by building a Todo app that integrates with API.",

    techStack: ["swift"], //skills by ID
    features: [
      "iOS Mobile Application Development",
      "API Integration",
      "Testing",
    ],
    challenges: ["Getting all parts to work together and update smoothly."],
    learnings: [
      "Swift iOS Development",
    ],
    demoUrl: "",
    githubUrl: "https://github.com/aras1379/iOS-app",
    imageUrl: "/images/projects/ios1.png",
    gallery: [
      "/images/projects/ios1.png",
       "/images/projects/ios2.png",
    ],
    status: "completed",
    startDate: "2024-01-15",
    endDate: "2024-03-01",
    duration: "1.5 months",
    teamSize: 2,
    category: "mobile",
    featured: true,
  },
  {
    id: "8",
    slug: "android-app",
    title: "Battle Ships Android App",
    description:
      "School project where I learned Android development in Kotlin by building a Battle Ships game app with real-time gaming with other users.",
    fullDescription:
      "School project where I learned Android development in Kotlin by building a Battle Ships game app with real-time gaming with other users.",

    techStack: ["kotlin"], //skills by ID
    features: [
      "Android Mobile Application Development",
    ],
    challenges: ["Getting all parts to work together and update smoothly."],
    learnings: [
      "Android Development in Kotlin",
    ],
    demoUrl: "",
    githubUrl: "https://github.com/aras1379/android-app",
    imageUrl: "/images/projects/android.png",
    gallery: [
      "/images/projects/android2.png",
      "/images/projects/android.png",
      "/images/projects/android3.png",
      "/images/projects/android4.png",

    ],
    status: "completed",
    startDate: "2023-10-15",
    endDate: "2024-12-15",
    duration: "2 months",
    teamSize: 2,
    category: "mobile",
    featured: true,
  },
   {
    id: "9",
    slug: "portfolio-old",
    title: "Old Portfolio Website",
    description:
      "School project where I worked with CSS, Handlebars and JavaScript to build a portfolio website with SQLite database.",
    fullDescription:
      "School project where I worked with CSS, Handlebars and JavaScript to build a portfolio website.",

    techStack: ["node.js", "css", "handlebars", "sql"], //skills by ID
    features: [
      "Portfolio Website Development",
    ],
    challenges: ["Pagnation and dynamic content loading."],
    learnings: [
      "Handlebars templating",
      "CSS styling",
    ],
    demoUrl: "",
    githubUrl: "",
    imageUrl: "/images/projects/old-portfolio.png",
    gallery: [
       "/images/projects/old-portfolio.png",
       "/images/projects/old-portfolio2.png",
       "/images/projects/old-portfolio3.png",
    ],
    status: "completed",
    startDate: "2023-08-15",
    endDate: "2024-10-15",
    duration: "2 months",
    teamSize: 1,
    category: "mobile",
    featured: true,
  },
];

export async function getProjects(): Promise<Project[]> {
  return projects;
}

export async function getProject(slug: string): Promise<Project | undefined> {
  return projects.find((project) => project.slug == slug);
}

