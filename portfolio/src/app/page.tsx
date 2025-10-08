// HOME PAGE

"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import TextType from "@/components/ui/TextType";
import ClientGradientWrapper from "@/components/sections/WrapperClient";
import ScrollVelocity from "@/components/ui/ScrollVelocity";
import { annotate } from "rough-notation";
import FadeContent from "@/components/ui/FadeContent";
import {
  SkillsCompactDisplay,
  SkillCategorySection,
  CategoryAverageBar,
} from "@/components/sections/SkillsDisplay";
import {
  ScrollAnimation,
  StaggerAnimation,
  StaggerItem,
} from "@/components/ui/ScrollAnimation";
import { mySkills } from "@/lib/skills";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function HomePage() {
  const containerRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [startAnimations, setStartAnimations] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleCloseModal = () => {
    localStorage.setItem("welcomeModalSeen", "true");
    setShowModal(false);
    setTimeout(() => setStartAnimations(true), 100);
  };

  useEffect(() => {
    setIsClient(true);
    const hasSeenModal = localStorage.getItem("welcomeModalSeen");
    
    console.log("Has seen modal:", hasSeenModal); 
    
    if (!hasSeenModal) {
      // First time visitor - show modal
      setShowModal(true);
    } else {
      
      setStartAnimations(true);
    }
  }, []);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  useEffect(() => {
    if (!startAnimations) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            //ROUGH NOTATION
            setTimeout(() => {
              const aboutEl = document.getElementById("about");
              const passionateEl = document.getElementById("passionate");
              const technologiesEl = document.getElementById("technologies");
              const processEl = document.getElementById("process");
              const probSolveEl = document.getElementById("prob-solve");
              const logicsEl = document.getElementById("logics");

              if (
                aboutEl &&
                passionateEl &&
                processEl &&
                probSolveEl &&
                logicsEl &&
                technologiesEl
              ) {
                aboutEl.style.display = "inline-block";
                passionateEl.style.display = "inline-block";
                processEl.style.display = "inline-block";
                probSolveEl.style.display = "inline-block";
                logicsEl.style.display = "inline-block";

                technologiesEl.style.display = "inline-block";

                const first = annotate(aboutEl, {
                  type: "highlight",
                  color: "#fef08a",
                  padding: 2,
                });

                const a1 = annotate(passionateEl, {
                  type: "underline",
                  color: "#fb923c",
                  strokeWidth: 2,
                  padding: 2,
                });
                const a2 = annotate(processEl, {
                  type: "underline",
                  color: "#60a5fa",
                  strokeWidth: 2,
                  padding: 2,
                });
                const a3 = annotate(probSolveEl, {
                  type: "highlight",
                  color: "#b4fe8aff",
                  padding: 2,
                });
                const a4 = annotate(logicsEl, {
                  type: "circle",
                  color: "#fb923c",
                  padding: 8,
                });

                const a5 = annotate(technologiesEl, {
                  type: "circle",
                  color: "#fb923c",
                  padding: 8,
                });
                setTimeout(() => first.show(), 200);
                setTimeout(() => a1.show(), 300);
                setTimeout(() => a2.show(), 800);
                setTimeout(() => a3.show(), 1300);
                setTimeout(() => a4.show(), 1800);
                setTimeout(() => a5.show(), 2300);
              }
            }, 1000);

            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    const aboutSection = document.querySelector("section:nth-of-type(2)");
    if (aboutSection) observer.observe(aboutSection);

    return () => observer.disconnect();
  }, [startAnimations]);

  return (
    <div className="bg-primary relative">
      {/* MODAL POPUP */}
      {showModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleCloseModal}
          />

          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 transform transition-all">
            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <XMarkIcon className="w-6 h-6 text-gray-600" />
            </button>

            {/* Content */}
            <div className="text-center">
              <div className="mb-4">
                <span className="text-6xl"></span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Under Development
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Hello! This page is currently under development. Some features
                may not work as expected and some information may be missing.
                <br></br> Thanks for your understanding!
              </p>
              <button
                onClick={handleCloseModal}
                className="w-full bg-secondary hover:bg-primary text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Got it, let's explore!
              </button>
            </div>
          </div>
        </div>
      )}

      <ClientGradientWrapper />
      {/* HERO SECTION */}
      <section className="bg-background text-foreground relative overflow-hidden py-12 lg:py-20">
        <div className="max-w-6xl w-full px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* LEFT COLUMN */}
            <div className="flex flex-col z-30 flex items-center lg:items-start">
              {/* ROW 1 - Hi im sara */}
              <div className="mb-2">
                <div className="text-4xl md:text-5xl lg:text-6xl font-geist text-center md:text-left">
                  {startAnimations && (
                    <TextType
                      text={["Hi! I'm Sara"]}
                      typingSpeed={120}
                      pauseDuration={1000}
                      showCursor={true}
                      cursorCharacter=""
                      className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-geist-sans)]"
                    />
                  )}
                </div>
              </div>

              {/* ROW 2 - */}
              <div className="mb-4">
                <div className="text-1xl md:text-1xl lg:text-2xl text-center md:text-left">
                  {startAnimations && (
                    <TextType
                      text={["I build things with code"]}
                      typingSpeed={30}
                      pauseDuration={1000}
                      showCursor={true}
                      cursorCharacter=""
                      initialDelay={2000}
                    />
                  )}
                </div>
              </div>

              {/* ROW 3 */}
              <div className="mb-20">
                <div className="text-1xl md:text-1xl lg:text-1xl flex">
                  {startAnimations && (
                    <FadeContent
                      blur={true}
                      duration={1000}
                      easing="ease-out"
                      delay={3000}
                      initialOpacity={0}
                    >
                      <h2 className="text-1xl text-primary-foreground leading-relaxed">
                        Recently graduated Data Engineer in Software Development
                        and Mobile Applications, who enjoyes programming both
                        work-wise and private. Im a detail-oriented person who
                        learns fast and striving towards making stuff more
                        efficient while always trying to do my very best.
                      </h2>
                    </FadeContent>
                  )}
                </div>
              </div>

              {/* ROW 4 - Buttons */}
              {startAnimations && (
                <FadeContent
                  blur={true}
                  duration={1000}
                  easing="ease-out"
                  delay={3000}
                  initialOpacity={0}
                >
                  <div className="grid grid-cols-3 gap-6 md:gap-14 lg:pl-10">
                    <Link
                      href="/projects"
                      className="w-28 h-28 flex items-center justify-center rounded-full border-2 border-background bg-secondary text-center text-white text-lg hover:bg-primary transition-all duration-300 hover:scale-105"
                    >
                      <span>Portfolio</span>
                    </Link>

                    <Link
                      href="/projects"
                      className="w-28 h-28 flex items-center justify-center rounded-full border-2 border-background bg-secondary text-center text-white text-lg hover:bg-primary transition-all duration-300 hover:scale-105"
                    >
                      Read CV
                    </Link>

                    <button
                      onClick={() => scrollToSection("about-section")}
                      className="w-28 h-28 flex items-center justify-center rounded-full border-2 border-background bg-secondary text-center text-white text-lg hover:bg-primary transition-all duration-300 hover:scale-105 cursor-pointer"
                    >
                      <span>About Me</span>
                    </button>
                  </div>
                </FadeContent>
              )}
            </div>

            {/* RIGHT COLUMN - Image */}
            <div className="flex justify-center lg:justify-end z-30 -mt-8 lg:-mt-12">
              <Image
                src="/images/sara-back2.png"
                alt="Sara's animated photo"
                width={440}
                height={440}
                className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] xl:w-[440px] h-auto transition-all duration-500 ease-in-out"
                priority={true}
              />
            </div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-primary opacity-50 z-20">
          <ScrollVelocity
            texts={[
              "Python • JavaScript • TypeScript • C++ • Web Development • App Development",
              "React • Next.js • Node.js • Swift • Flutter",
            ]}
            velocity={20}
            className="custom-scroll-text text-2xl text-background"
          />
        </div>
      </section>

      {/* ABOUT SECTION*/}
      <section
        id="about-section"
        className="py-20 bg-background text-secondary-foreground pt-40"
      >
        <div className="relative z-[60]">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <StaggerAnimation
              className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-1 lg:items-stretch"
              staggerDelay={0.6}
            >
              {/* LEFT - Image Column (lg only shows here) */}
              <StaggerItem className="hidden lg:block">
                <div className="relative h-full flex flex-col justify-end bg-background rounded-lg p-6">
                  {/* Background element */}
                  <div className="absolute -top-4 -left-4 -bottom-4 -right-4 bg-background rounded-lg -z-10"></div>

                  <div className="relative w-fit">
                    <Image
                      src="/images/about-sara.png"
                      alt="Sara's animated photo"
                      width={400}
                      height={440}
                      className="w-[300px] xl:w-[400px] transition-all duration-500 ease-in-out"
                    />
                    {/* Decorative background behind image */}
                    <div className="absolute -top-4 -left-4 -bottom-0 w-9/10 bg-background/50 rounded-lg -z-10"></div>
                  </div>
                </div>
              </StaggerItem>

              {/* RIGHT - Content Column */}
              <StaggerItem>
                <div className="relative bg-background rounded-lg p-6 lg:p-8 h-full">
                  {/* Background element - matches height with image column on lg */}
                  <div className="absolute -top-4 -bottom-4 -left-4 -right-4 lg:-left-8 lg:-right-15 bg-background rounded-lg -z-10"></div>

                  {/* About section */}
                  <div className="space-y-6">
                    <h2 className="text-3xl secondary-foreground leading-relaxed">
                      <span id="about">About me</span>
                    </h2>

                    <p className="text-lg secondary-foreground leading-relaxed">
                      Im a recently graduated, yet{" "}
                      <span id="passionate">passionate</span>, software
                      developer who really enjoyes the{" "}
                      <span id="process">programmering process</span> - from
                      planning and structuring to implementing both frontend and
                      backend - especially backend. I like the{" "}
                      <span id="prob-solve">problem-solving</span> and{" "}
                      <span id="logics">logics</span> since it stimulates my
                      analytical mind. I strive to develop applications I can be
                      proud of with architecture and future development in mind.
                    </p>

                    <p className="text-lg secondary-foreground leading-relaxed">
                      When Im not coding, you can find me exploring new{" "}
                      <span id="technologies">technologies</span>, sewing
                      clothes, climbing, puzzling, or enjoying a good cup of
                      coffee.
                    </p>
                  </div>

                  {/* My Person section - with image beside it on small screens */}
                  <div className="pt-8 lg:pt-6">
                    {/* Container for image + text on md/sm */}
                    <div className="flex lg:block gap-4 items-start">
                      {/* Image - only shows on md/sm, floats beside text */}
                      <div className="lg:hidden flex-shrink-0">
                        <div className="relative">
                          <Image
                            src="/images/about-sara.png"
                            alt="Sara's animated photo"
                            width={150}
                            height={220}
                            className="w-[180px] sm:w-[250px] md:w-[300px] lg:w-[450px] xl:w-[480px] transition-all duration-500 ease-in-out"
                          />
                          {/* Decorative background */}
                          <div className="absolute -top-2 -left-2 -bottom-0 w-9/10 bg-background/50 rounded-lg -z-10"></div>
                        </div>
                      </div>

                      {/* My Person content */}
                      <div className="space-y-4 flex-1">
                        <h2 className="text-xl secondary-foreground leading-relaxed">
                          <span id="person">My Person</span>
                        </h2>
                        <p className="text-lg secondary-foreground leading-relaxed">
                          {/* Your personality text goes here */}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            </StaggerAnimation>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 relative z-[60]">
          <h2 className="text-4xl font-bold text-center mb-16 text-secondary-foreground">
            What I Do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
            {/* Frontend */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-bold mb-4 text-card-foreground">
                App- and Web Development
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-muted-foreground mb-2">
                    Creating responsive user interfaces with React, TypeScript,
                    and modern CSS frameworks.
                  </p>

                  <p className="text-muted-foreground mb-2 mt-4">
                    Building seamless app, for iOS, Android and Cross-platform.
                  </p>
                </div>
                <div>
                  <CategoryAverageBar
                    category={mySkills[0]}
                    isVisible={true}
                    showSkillTags={true}
                  />
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-bold mb-4 text-card-foreground">
                Backend Development
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-muted-foreground mb-2">
                    Building APIs and server-side applications with Node.js,
                    Python, databases, and integrating AI solutions.
                  </p>
                </div>
                <div>
                  <CategoryAverageBar
                    category={mySkills[1]}
                    isVisible={true}
                    showSkillTags={true}
                  />
                </div>
              </div>
            </div>

            {/* Full Stack */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-bold mb-4 text-card-foreground">
                Full Stack and Testing
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-muted-foreground mb-2">
                    End-to-end application development from database design to
                    user interface and Testing.
                  </p>
                </div>
                <div>
                  <CategoryAverageBar
                    category={mySkills[2]}
                    isVisible={true}
                    showSkillTags={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CONTENT */}
      <section className="py-20 bg-secondary text-background relative z-[60]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Interested in working with me?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Im always interested in new opportunities and exciting projects.
          </p>
          <div className="space-x-4">
            <Link
              href="/projects"
              className="border-2 border-white bg-white text-background px-8 py-4 rounded-lg font-semibold hover:bg-primary transition-all duration-300 hover:scale-105"
            >
              View Projects
            </Link>

            <Link
              href="/contact"
              className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-background transition-all duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
