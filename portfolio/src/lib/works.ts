//work experience 

import { WorkExperience } from "../types/work";

export const workExperiences: WorkExperience[] = [
    {
        id: "bostello-2025",
        title: "Software Developer - Internship",
        company: "Bostello",
        startDate: "October 2025",
        endDate: "Current",
        description: [
            "Internship at the Startup Bostello, working on their Website in Vue.js and TypeScript to gain more practical experience in frontend development.",
            "Will start working with AWS services to enhance backend functionalities.",
            "Position will end when I get a full-time role elsewhere."
        ]
    },
   {
    id: "knowit-2025",
    title: "Software Developer",
    company: "Knowit Connectivity",
    startDate: "August 2025",
    endDate: "October 2025",
    description: [
      "Developed backend communication to LLM, implemented scoring algorithm based on LLM output and structured output for API",
      "Developed UI/UX for a course with Jönköping University",
      "Agile work in Scrum."
    ]
  },
  {
    id: "knowit-thesis-2025",
    title: "Bachelor Thesis",
    company: "Knowit Connectivity",
    startDate: "January 2025",
    endDate: "May 2025",
    description: [
      "Compared AI-models speech vs. text-based emotion analysis with extracted voice features",
      "Categorisation of voice features and comprehensive statistical analysis in Python. Integration with different AI-models.",
      "Writing research report"
    ],
    pdfUrl: "/thesis-sara-ljung.pdf"
  },
  {
    id: "knowit-internship-2024",
    title: "Internship",
    company: "Knowit Connectivity",
    startDate: "March 2024",
    endDate: "May 2024",
    description: [
      "Built mobile application with controller in Flutter",
      "Communication with WebSockets to backend and robot",
      "Worked according to Scrum"
    ]
  },
  {
    id: "allakando-2022",
    title: "Study Coach",
    company: "Allakando",
    startDate: "August 2022",
    endDate: "November 2024",
    description: [
      "Mathematics",
      "Coaching, teaching and support"
    ]
  },
  {
    id: "jonkoping-kommun-2022",
    title: "Support Assistant",
    company: "Jönköpings Kommun",
    startDate: "August 2022",
    endDate: "November 2024",
    description: [
      "Support assistant for people with intellectual disabilities."
    ]
  }
];

export async function getWorkExperiences(): Promise<WorkExperience[]> {
    return workExperiences;
}

export async function getWorkExperience(id: string): Promise<WorkExperience | undefined> {
    return workExperiences.find((work) => work.id === id);
}