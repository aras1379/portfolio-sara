// HOME PAGE

"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import TextType from "@/components/ui/TextType";
import SplitText from "@/components/ui/SplitText";
import CircularText from "@/components/ui/CircularText";
import LightRays from "@/components/ui/LightBackground";
import Aurora from "@/components/ui/AuroraBackground";
import GradientText from "@/components/ui/GradientText";
import VariableProximity from "@/components/ui/VariableProxi";
import ClientAuroraWrapper from "@/components/sections/AuroraWrapper";
import {
  ScrollAnimation,
  StaggerAnimation,
  StaggerItem,
} from "@/components/ui/ScrollAnimation";

const handleAnimationComplete = () => {
  console.log("all letters have animated");
};

export default function HomePage() {
  const containerRef = useRef(null);
  return (
    <div className="bg-primary relative">
      <ClientAuroraWrapper />
      {/* HERO SECTION */}
      <section className="min-h-[80vh] bg-background text-foreground flex items-center justify-center relative overflow-hidden">
        <div className="max-w-6xl w-full px-4 relative">
          {/* 3 column grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-5 relative h-full min-h-[80vh] z-[60]">
            {/* LEFT COLUMN */}
            <div className="relative z-30 flex flex-col text-center lg:text-left h-full">
              <div className="flex pt-30">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  <TextType
                    text={["Hi! I'm Sara"]}
                    typingSpeed={120}
                    pauseDuration={1000}
                    showCursor={true}
                    cursorCharacter=""
                  />
                </div>
              </div>

              {/* Bottom p */}
              <div className="flex-grow flex pt-2">
                <div className="text-1xl md:text-1xl lg:text-2xl">
                  <TextType
                    text={["Software Developer"]}
                    typingSpeed={120}
                    pauseDuration={1000}
                    showCursor={true}
                    cursorCharacter=""
                    initialDelay={2000}
                    
                  />
                </div>
              </div>
            </div>

            {/*middle placehholder*/}
            <div className="hidden lg:block"></div>

            {/* RIGHT COLUMN */}
            <div className="relative z-30 flex items-start lg:justify-end lg:pt-20">
              <div className="grid grid-rows-3 gap-2 justify-start items-start max-w-xs">
  <div className="grid grid-rows-3 gap-2 justify-start items-start max-w-xs text-foreground">
    <h2 className="text-2xl md:text-2xl lg:text-2xl">
      About Me
    </h2>
                


      
                <div
                  ref={containerRef}
                  className="mt-2"
                  style={{
                    position: "relative",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  <VariableProximity
                    label={"Hover me! And then s"}
                    className={"variable-proximity-demo"}
                    fromFontVariationSettings="'wght' 400, 'opsz' 9"
                    toFontVariationSettings="'wght' 1000, 'opsz' 40"
                    containerRef={containerRef}
                    radius={100}
                    falloff="linear"
                  />
                </div>
           

              <Link href="/projects">
              <button className="hover:scale-110 transition-transform font-bold underline">
  More About Me 
</button>
              
              </Link>
              </div>

              <div className="grid grid-rows-3 gap-2 justify-start items-start max-w-xs text-foreground">
    <h2 className="text-2xl md:text-2xl lg:text-2xl">
          My Work
    </h2>
                


      
                <div
                  ref={containerRef}
                  className="mt-2"
                  style={{
                    position: "relative",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  <VariableProximity
                    label={"Hover me! And then s"}
                    className={"variable-proximity-demo"}
                    fromFontVariationSettings="'wght' 400, 'opsz' 9"
                    toFontVariationSettings="'wght' 1000, 'opsz' 40"
                    containerRef={containerRef}
                    radius={100}
                    falloff="linear"
                  />
                </div>
           

              <Link href="/projects">
              <button className="hover:scale-110 transition-transform font-bold underline">
 View Portfolio
</button>
              
              </Link>
              </div>

              </div>
            </div>
          </div>
        </div>
        {/* MIDDLE COLUMN */}

        <div className="absolute bottom-0 left-0 lg:left-1/2 lg:-translate-x-1/2 z-[60]">
          <img
            src="/images/sara.png"
            alt="Sara's animated photo"
            className="block
        h-auto
        w-[200px]  
        sm:w-[200px]   /* small screens */
        md:w-[300px]   /* medium screens */
        lg:w-[500px]   /* large screens */
        xl:w-[550px]   /* extra large screens */
        transition-all duration-500 ease-in-out
      "
          />
        </div>
      </section>

      {/* ABOUT SECTION*/}
      <section className="py-20 bg-background pt-40">
        <div className="relative z-[60]">
        

        <div className="max-w-6xl mx-auto px-4">
  
          <StaggerAnimation
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            staggerDelay={0.6}
          >
  
            <StaggerItem>
              <div className="space-y-6">
                <h2 className="text-3xl text-foreground leading-relaxed">
                  About me
                </h2>
                </div>
              <div className="space-y-6">
                <p className="text-lg text-foreground leading-relaxed">
                  I'm a passionate software developer with expertise in modern
                  web technologies. I love creating user-friendly applications
                  that solve real-world problems.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open source projects, or
                  enjoying a good cup of coffee.
                </p>
                {/* Skills */}
                <div className="flex flex-wrap gap-3">
                  {["React", "TypeScript", "Node.js", "Python"].map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              {/* Right column - Image */}
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg h-80 flex items-center justify-center">
                  <span className="text-gray-600 text-lg">image</span>
                </div>
                {/* element behind image */}
                <div className="absolute -top-4 -left-4 w-full h-full bg-blue-500 rounded-lg opacity-20 -z-10"></div>
              </div>
            </StaggerItem>
          </StaggerAnimation>
        </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 relative z-[60]">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary-foreground">
            What I Do
          </h2>

          {/* 3 columns grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-4 text-card-foreground">•</div>
              <h3 className="text-xl font-bold mb-4 text-card-foreground">
                Frontend Development
              </h3>
              <p className="text-muted-foreground mb-4">
                Creating responsive user interfaces with React, TypeScript, and
                modern CSS frameworks.
              </p>
              <ul className="text-sm text-secondary-foreground space-y-1">
                <li>• React & Next.js</li>
                <li>• Node.js</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-4 text-card-foreground">•</div>
              <h3 className="text-xl font-bold mb-4 text-card-foreground">
                Backend Development
              </h3>
              <p className="text-muted-foreground mb-4">
                Building robust APIs and server-side applications with Node.js,
                Python, and databases.
              </p>
              <ul className="text-sm text-secondary-foreground space-y-1">
                <li>• Node.js & Express</li>
                <li>• Python </li>
                <li>• C++ </li>
                <li>• JavaScript </li>
                <li>• SQLite & MongoDB</li>
              </ul>
            </div>

            {/* Full Stack */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-4 text-card-foreground">•</div>
              <h3 className="text-xl font-bold mb-4 text-card-foreground">
                Full Stack Solutions
              </h3>
              <p className="text-muted-foreground mb-4">
                End-to-end application development from database design to user
                interface.
              </p>
              <ul className="text-sm text-secondary-foreground space-y-1">
                <li>• Complete web applications</li>
                <li>• API integration</li>
                <li>• Testing and Automatic testing </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CONTENT */}
      <section className="py-20 bg-secondary text-background relative z-[60]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Interested in working with me?</h2>
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
