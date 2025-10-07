// HOME PAGE

"use client";
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


export default function HomePage() {
  const containerRef = useRef(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  useEffect(() => {
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
  }, []);

  return (
    <div className="bg-primary relative">
      <ClientGradientWrapper />
      {/* HERO SECTION */}
      <section className="bg-background text-foreground relative overflow-hidden py-12 lg:py-20">
        <div className="max-w-6xl w-full px-4 mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* LEFT COLUMN */}
            <div className="flex flex-col z-30">
              {/* ROW 1 - Hi im sara */}
              <div className="mb-2">
                <div className="text-4xl md:text-5xl lg:text-6xl font-geist">
                  <TextType
                    text={["Hi! I'm Sara"]}
                    typingSpeed={120}
                    pauseDuration={1000}
                    showCursor={true}
                    cursorCharacter=""
                    className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-geist-sans)]"
                  />
                </div>
              </div>

              {/* ROW 2 - */}
              <div className="mb-4">
                <div className="text-1xl md:text-1xl lg:text-2xl flex">
                  <TextType
                    text={["I build things with code"]}
                    typingSpeed={30}
                    pauseDuration={1000}
                    showCursor={true}
                    cursorCharacter=""
                    initialDelay={2000}
                  />
                </div>
              </div>

              {/* ROW 3 */}
              <div className="mb-20">
                <div className="text-1xl md:text-1xl lg:text-1xl flex">
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
                      work-wise and private. I'm a detail-oriented person who
                      learns fast and striving towards making stuff more
                      efficient while always trying to do my very best.
                    </h2>
                  </FadeContent>
                </div>
              </div>

              {/* ROW 4 - Buttons */}
              <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                delay={3000}
                initialOpacity={0}
              >
                <div className="grid grid-cols-3 gap-4 flex justify-center lg:pl-10">
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
            </div>

            {/* RIGHT COLUMN - Image */}
            <div className="flex justify-center lg:justify-end z-30 -mt-8 lg:-mt-12">
              <img
                src="/images/sara-back2.png"
                alt="Sara's animated photo"
                className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] xl:w-[440px] h-auto transition-all duration-500 ease-in-out"
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
          <div className="max-w-6xl mx-auto px-4">
            <StaggerAnimation
              className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6"
              staggerDelay={0.6}
            >
              <StaggerItem>
                {/* left col - Image */}
                <div className="relative">
                  <img
                    src="/images/about-sara.png"
                    alt="Sara's animated photo"
                    className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] xl:w-[440px] transition-all duration-500 ease-in-out"
                  />
                  {/* element behind image */}
                  <div className="absolute -top-4 -left-4 -bottom-0 w-9/10  bg-background rounded-lg -z-10"></div>
                </div>
              </StaggerItem>
              <StaggerItem>
                {/* RIGHT col - Info */}
                <div className="relative">
                  <div className="absolute -top-4 -bottom-7 -left-8 lg:-left-25 lg:-right-15 bg-background rounded-lg -z-10"></div>
                  <div className="space-y-6 ">
                    <h2 className="text-3xl secondary-foreground leading-relaxed">
                      <span id="about" style={{ display: "inline-block" }}>
                        About me
                      </span>
                    </h2>
                  </div>
                  <div className="space-y-6">
                    <p className="text-lg secondary-foreground leading-relaxed">
                      I'm a recently graduated, yet{" "}
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
                      When I'm not coding, you can find me exploring new{" "}
                      <span id="technologies">technologies</span>, sewing
                      clothes, climbing, puzzling, or enjoying a good cup of
                      coffee.
                    </p>
                  </div>

                  <div className="space-y-6 pt-5">
                    <h2 className="text-xl secondary-foreground leading-relaxed">
                      <span id="about">My Person</span>
                    </h2>
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
            I'm always interested in new opportunities and exciting projects.
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
