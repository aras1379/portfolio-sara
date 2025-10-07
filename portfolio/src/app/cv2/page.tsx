"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  AwardIcon,
  DownloadIcon,
  Github,
  GlobeIcon,
  Linkedin,
} from "lucide-react";
import {
  AcademicCapIcon,
  FolderOpenIcon,
  UserIcon,
  BriefcaseIcon,
  EllipsisHorizontalIcon,
  ChevronDownIcon,
  AtSymbolIcon,
  PhoneIcon,
  MapPinIcon,

} from "@heroicons/react/24/solid";
import { getProjects } from "@/lib/projects";
import {
  mySkills,
  getSkillById,

} from "@/lib/skills";
import { Project } from "@/types/project";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const CVPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("about");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  // Refs for sections
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const contentContainerRef = useRef<HTMLDivElement>(null);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setActiveSection("about");

    // Scroll to top of content 
    if (contentContainerRef.current) {
      contentContainerRef.current.scrollTop = 0;
    }
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      const fetchedProjects = await getProjects();
      setProjects(fetchedProjects);
    };
    fetchProjects();
  }, []);

  const navItems: NavItem[] = [
    { id: "about", label: "About Me", icon: <UserIcon className="w-5 h-5" /> },
    {
      id: "experience",
      label: "Work Experiences",
      icon: <BriefcaseIcon className="w-5 h-5" />,
    },
    {
      id: "projects",
      label: "Projects",
      icon: <FolderOpenIcon className="w-5 h-5" />,
    },
    {
      id: "competencies",
      label: "Competencies",
      icon: <AwardIcon className="w-5 h-5" />,
    },
    {
      id: "education",
      label: "Education",
      icon: <AcademicCapIcon className="w-5 h-5" />,
    },
    {
      id: "other",
      label: "Other",
      icon: <EllipsisHorizontalIcon className="w-5 h-5" />,
    },
  ];

  // Handle navigation click 
  const handleNavClick = (sectionId: string) => {
    setIsScrolling(true);
    setActiveSection(sectionId);
    setIsSidebarOpen(false);

    const element = sectionRefs.current[sectionId];
    const container = contentContainerRef.current;

    if (element && container) {
      // Get the element position 
      const containerRect = container.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();

      // Calculate the scroll position
      const scrollPosition =
        container.scrollTop + (elementRect.top - containerRect.top) - 32;

      // Scroll the container 
      container.scrollTo({
        top: Math.max(0, scrollPosition),
        behavior: "smooth",
      });

      // Reset scrolling flag after animation
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return; 

      const container = contentContainerRef.current;
      if (!container) return;

      const scrollPosition = container.scrollTop + 100; 

      // Find which section is currently in view
      for (const item of navItems) {
        const section = sectionRefs.current[item.id];
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    const container = contentContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [isScrolling, navItems]);

  return (
    <div className="h-screen bg-background overflow-hidden">
      <div className="h-19/20 max-w-7xl mx-auto p-4 md:p-8 items-center justify-center">
        <div className="h-full bg-card rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row h-full bg-card">
            {/* Sidebar */}
            <div className="md:w-80 bg-secondary text-white md:overflow-y-auto flex-shrink-0">
              {/* Mobile menu toggle */}
              <div className="md:hidden p-4 flex justify-between items-center border-b border-teal-500">
                <h2 className="text-xl font-bold">Navigation</h2>
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="p-2 hover:bg-teal-600 rounded-lg transition-colors"
                >
                  <ChevronDownIcon
                    className={`w-6 h-6 transform transition-transform ${
                      isSidebarOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Profile Section */}
              <div className="p-2 text-center">
                <div className="w-50 h-50 mx-auto mb-2 mt-3 rounded-full overflow-hidden bg-white/10 flex items-center justify-center">
                  <img
                    className="w-full h-full object-cover"
                    src="/images/photo/cvsara2.png"
                    alt="Profile"
                  />
                </div>
                <h1 className="text-2xl text-emerald-900 font-bold mb-1">
                  Sara Ljung
                </h1>
                <p className="text-emerald-900 mb-3">Software Engineer</p>
                <button className="flex items-center gap-2 mb-2 mx-auto text-card px-4 py-2 bg-primary hover:bg-orange-300 rounded-lg transition-colors">
                  <DownloadIcon className="w-4 h-4" />
                  Download CV
                </button>
              </div>

              {/* Navigation */}
              <nav
                className={`${
                  isSidebarOpen ? "block" : "hidden md:block"
                } pb-2`}
              >
                <ul className="space-y-0 px-4">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => handleNavClick(item.id)}
                        className={`w-full flex items-center gap-3 px-4 h-12 rounded-lg transition-all ${
                          activeSection === item.id
                            ? "bg-white text-teal-700 shadow-lg"
                            : "text-white/90 hover:bg-white/10"
                        }`}
                      >
                        {item.icon}
                        <span className="font-medium">{item.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Contact Info */}
              <div className="px-8 pb-8 space-y-2 text-sm">
                <div className="flex items-center gap-2 text-teal-100">
                  <AtSymbolIcon className="w-4 h-4" />
                  <span>ljung.sara98@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-teal-100">
                  <PhoneIcon className="w-4 h-4" />
                  <span>+46 70 980 21 53</span>
                </div>
                <div className="flex items-center gap-2 text-teal-100">
                  <MapPinIcon className="w-4 h-4" />
                  <span>Jönköping, Sweden</span>
                </div>
              </div>
            </div>

            {/* Main Content - Scrollable */}
            <div
              ref={contentContainerRef}
              className="flex-1 overflow-y-auto scroll-smooth bg-card"
            >
              <div className="p-8 md:p-12">
                <div className="max-w-3xl space-y-16">
                  {/* Overview Section */}
                  <section
                    ref={(el) => {
                      sectionRefs.current["about"] = el;
                    }}
                    id="about"
                    className="scroll-mt-8"
                  >
                    <h2 className="text-3xl font-bold text-card-foreground mb-6">
                      About Me
                    </h2>
                    <div className="prose prose-gray max-w-none">
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        I am Sara, as guessed. Recently graduated software
                        engineer who is highly stimulated and interested by the
                        area. As new in the work-field, Im not specialized yet.
                        I find software development overall rewarding due to the
                        analytical and problemsolving parts of it. I like the
                        planning and structure of code as much as the actual
                        programming and later on testing. Often when I am
                        coding, I feel myself disappear into it and are highly
                        determined, or fixated, to solve the problem Im
                        currently working on. I have always appricated Frontend,
                        but find the Backend-part more interesting due to its
                        logical part. I have always liked math and logics, which
                        I find coding being a deeper way into that.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-gradient-to-r from-teal-50 to-green-50 p-6 rounded-xl">
                          <h3 className="font-semibold text-card-foreground mb-2 text-center">
                            Key Strengths
                          </h3>
                          <ul className="space-y-2 text-gray-600">
                            <li>• Problem Solving Skills</li>
                            <li>• Analytical and Detailed Mind</li>
                            <li>• Good Collaborator</li>
                            <li>• Highly Curious and Honest</li>
                            <li>• Always trying my very best</li>
                          </ul>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
                          <h3 className="font-semibold text-card-foreground mb-2 text-center">
                            Programming Compentencies
                          </h3>
                          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mb-8">
                            <div>
                              <h3 className="font-semibold text-card-foreground mb-2">
                                Languages
                              </h3>
                              <ul className="space-y-2 text-gray-600">
                                <li>• Python</li>
                                <li>• Spanish (Fluent)</li>
                                <li>• French (Intermediate)</li>
                              </ul>
                            </div>
                            <div>
                              <h3 className="font-semibold text-card-foreground mb-2">
                                Languages
                              </h3>
                              <ul className="space-y-2 text-gray-600">
                                <li>• English (Native)</li>
                                <li>• Spanish (Fluent)</li>
                                <li>• French (Intermediate)</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <a
                          href="#"
                          className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                        >
                          <Github className="w-5 h-5 text-gray-700" />
                        </a>
                        <a
                          href="#"
                          className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                        >
                          <Linkedin className="w-5 h-5 text-gray-700" />
                        </a>
                        <a
                          href="#"
                          className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                        >
                          <GlobeIcon className="w-5 h-5 text-gray-700" />
                        </a>
                      </div>
                    </div>
                  </section>

                  {/* Work Experience Section */}
                  <section
                    ref={(el) => {
                      sectionRefs.current["experience"] = el;
                    }}
                    id="experience"
                    className="scroll-mt-8"
                  >
                    <h2 className="text-3xl font-bold text-card-foreground mb-6">
                      Work Experiences
                    </h2>
                    <div className="space-y-8">
                      <div className="border-l-4 border-teal-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-800">
                          Software Developer
                        </h3>
                        <p className="text-teal-600 font-medium mb-2">
                          Knowit Connectivity
                        </p>
                        <p className="text-gray-500 text-sm mb-3">
                          Augusti 2025 - Oktober 2025
                        </p>
                        <ul className="space-y-2 text-gray-600">
                          <li>
                            • Developed backend communication to LLM,
                            implemented scoring algorithm based on LLM output
                            and structured output for API
                          </li>
                          <li>• Flexicharge</li>
                          <li>• Agile</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-blue-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-800">
                          Bachelor Thesis
                        </h3>
                        <p className="text-blue-600 font-medium mb-2">
                          Knowit Connectivity
                        </p>
                        <p className="text-gray-500 text-sm mb-3">
                          January 2025 - May 2025
                        </p>
                        <ul className="space-y-2 text-gray-600">
                          <li>
                            • Compared AI-models speech vs. text-based emotion
                            analysis with extracted voice features
                          </li>
                          <li>
                            • Categorisation of voice features and comprehensive
                            statistical analysis in Python
                          </li>
                          <li>• Writing</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-purple-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-800">
                          Internship
                        </h3>
                        <p className="text-purple-600 font-medium mb-2">
                          Knowit Connectivity
                        </p>
                        <p className="text-gray-500 text-sm mb-3">
                          March 2024 - May 2024
                        </p>
                        <ul className="space-y-2 text-gray-600">
                          <li>
                            • Built mobile application with controller in
                            Flutter
                          </li>
                          <li>
                            • Communication with WebSockets to backend and robot
                          </li>
                          <li>• Worked according to Scrum</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-purple-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-800">
                          Study Coach
                        </h3>
                        <p className="text-purple-600 font-medium mb-2">
                          Allakando
                        </p>
                        <p className="text-gray-500 text-sm mb-3">
                          August 2022 - November 2024
                        </p>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Mathematics</li>
                          <li>• Coaching, teaching and support </li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-purple-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-800">
                          Support Assistant
                        </h3>
                        <p className="text-purple-600 font-medium mb-2">
                          Jönköpings Kommun
                        </p>
                        <p className="text-gray-500 text-sm mb-3">
                          August 2022 - November 2024
                        </p>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Mathematics</li>
                          <li>• Coaching, teaching and support </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Projects Section */}
                  <section
                    ref={(el) => {
                      sectionRefs.current["projects"] = el;
                    }}
                    id="projects"
                    className="scroll-mt-8"
                  >
                    <h2 className="text-3xl font-bold text-card-foreground mb-6">
                      Projects
                    </h2>
                    <div className="grid gap-8">
                      {projects
                        .filter((p) => p.featured)
                        .map((project) => (
                          <div
                            key={project.id}
                            className="bg-gradient-to-r from-teal-50 to-green-50 p-6 rounded-xl shadow-sm"
                          >
                            <h3 className="text-xl font-semibold text-card-foreground mb-2">
                              {project.title}
                            </h3>
                            <p className="text-gray-600 mb-4">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {project.techStack.map((skillId) => {
                                const skill = getSkillById(skillId);
                                return skill ? (
                                  <span
                                    key={skill.id}
                                    className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium"
                                  >
                                    {skill.label}
                                  </span>
                                ) : null;
                              })}
                            </div>
                          </div>
                        ))}
                    </div>
                  </section>

                  {/* Competencies Section */}
                  <section
                    ref={(el) => {
                      sectionRefs.current["competencies"] = el;
                    }}
                    id="competencies"
                    className="scroll-mt-8"
                  >
                    <h2 className="text-3xl font-bold text-card-foreground mb-6">
                      Competencies
                    </h2>
                    <div className="space-y-8">
                      {mySkills.map((category) => (
                        <div key={category.label}>
                          <h3 className="text-xl font-semibold text-card-foreground mb-4">
                            {category.label}
                          </h3>
                          <div className="space-y-4">
                            {category.skills.map((skill) => (
                              <div key={skill.id}>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm text-gray-600">
                                    {skill.label}
                                  </span>
                                  <span className="text-sm text-gray-500">
                                    {skill.proficiency}%
                                  </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                  <div
                                    className={`${category.color} h-2.5 rounded-full`}
                                    style={{ width: `${skill.proficiency}%` }}
                                  ></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Education Section */}
                  <section
                    ref={(el) => {
                      sectionRefs.current["education"] = el;
                    }}
                    id="education"
                    className="scroll-mt-8"
                  >
                    <h2 className="text-3xl font-bold text-card-foreground mb-6">
                      Education
                    </h2>
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-teal-50 to-green-50 p-6 rounded-xl">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-teal-100 rounded-lg">
                            <AcademicCapIcon className="w-6 h-6 text-teal-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-card-foreground">
                              Bachelor in Computer Engineering - Software
                              Development
                            </h3>
                            <p className="text-teal-600 font-medium mb-1">
                              Jönköping University
                            </p>
                            <p className="text-gray-500 text-sm mb-3">
                              2022-2025
                            </p>
                            <p className="text-gray-600">
                              Focused on software engineering, data structures,
                              and web development.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-teal-50 to-green-50 p-6 rounded-xl">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-teal-100 rounded-lg">
                            <AcademicCapIcon className="w-6 h-6 text-teal-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-card-foreground">
                              AI and Big Data in Healthcare
                            </h3>
                            <p className="text-teal-600 font-medium mb-1">
                              Stockholms University
                            </p>
                            <p className="text-gray-500 text-sm mb-3">
                              June 2023 - August 2023
                            </p>
                            <p className="text-gray-600">Course</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </section>

                  {/* Other Section */}
                  <section
                    ref={(el) => {
                      sectionRefs.current["other"] = el;
                    }}
                    id="other"
                    className="scroll-mt-8 pb-8"
                  >
                    <h2 className="text-3xl font-bold text-card-foreground mb-6">
                      Other Information
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-card-foreground mb-4">
                          Interests & Hobbies
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {[
                            "Sewing Clothes",
                            "Climbing",
                            "Puzzles",
                            "Reading",
                            "Food & Nutrition",
                            "Coding!",
                            "My Friends <3",
                          ].map((hobby) => (
                            <span
                              key={hobby}
                              className="px-4 py-2 bg-gradient-to-r from-teal-50 to-green-50 text-teal-700 rounded-lg"
                            >
                              {hobby}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-card-foreground mb-4">
                          Languages
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {[
                            "Swedish (Native)",
                            "English (Full professional proficiency )",
                          ].map((hobby) => (
                            <span
                              key={hobby}
                              className="px-4 py-2 bg-gradient-to-r from-teal-50 to-green-50 text-teal-700 rounded-lg"
                            >
                              {hobby}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-card-foreground mb-4">
                          Driver Licence
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {["B - Swedish Licence"].map((hobby) => (
                            <span
                              key={hobby}
                              className="px-4 py-2 bg-gradient-to-r from-teal-50 to-green-50 text-teal-700 rounded-lg"
                            >
                              {hobby}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-card-foreground mb-4">
                          References
                        </h3>
                        <div className="bg-gray-50 p-6 rounded-xl">
                          <h4 className="font-semibold text-card-foreground mb-2">
                            Former Boss @ Knowit
                          </h4>
                          <p className="text-gray-600 mb-2">Erik Engwall</p>
                          <p className="text-gray-600 italic">
                            Sara Ljung har med stor noggrannhet, snabbhet och
                            stort intresse uppfyllt de krav som rollen krävt.
                            Hon har visat sig mycket ansvarsmedveten och
                            initiativrik. Då hon dessutom är synnerligen lätt
                            att samarbeta med vill vi ge henne våra allra bästa
                            rekommendationer. Vi önskar Sara lycka till i sin
                            framtida karriär när hon nu avslutat sin anställning
                            på Knowit Connectivity på grund av arbetsbrist.{" "}
                          </p>
                          <p className="text-gray-600 mt-4">
                            Translation: Sara Ljung has, with great precision,
                            speed, and strong dedication, fulfilled the
                            requirements of the role. She has proven to be
                            highly responsible and enterprising. As she is also
                            exceptionally easy to work with, we would like to
                            give her our very best recommendations. We wish Sara
                            the best of luck in her future career, as she now
                            concludes her employment at Knowit Connectivity due
                            to lack of work.
                          </p>

                          <h4 className="font-semibold text-card-foreground mb-2 mt-2">
                            Other
                          </h4>
                          <p className="text-gray-600 mb-2">
                            Provided upon request
                          </p>
                          <p className="text-gray-600 italic">
                            I have references from my time at Knowit as well as
                            other employements. I am happy to give you their
                            contact information in case of potential future
                            employment!{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVPage;
