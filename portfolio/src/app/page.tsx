// HOME PAGE

"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import TextType from "@/components/ui/TextType";
import SplitText from "@/components/ui/SplitText";
import CircularText from "@/components/ui/CircularText";
import LightRays from "@/components/ui/LightBackground";
import Aurora from "@/components/ui/AuroraBackground";
import GradientText from "@/components/ui/GradientText";
import VariableProximity from "@/components/ui/VariableProxi";
import ClientAuroraWrapper from "@/components/sections/AuroraWrapper";
import ClientGradientWrapper from "@/components/sections/WrapperClient"; 
import ShapeBlur from "@/components/ui/ShapeBlur";
import ScrollVelocity from "@/components/ui/ScrollVelocity";
import { annotate } from 'rough-notation';

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
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Wait a bit for StaggerAnimation to complete
          setTimeout(() => {
            const aboutEl = document.getElementById("about");
            const skillsEl = document.getElementById("skills");
            const passionateEl = document.getElementById("passionate");
            const userFriendlyEl = document.getElementById("user-friendly");
            const technologiesEl = document.getElementById("technologies");
            const processEl = document.getElementById("process");
            const probSolveEl = document.getElementById("prob-solve");
            const logicsEl = document.getElementById("logics");

            if (aboutEl && passionateEl && processEl && probSolveEl && logicsEl && technologiesEl) {
              // Make spans inline-block to fix positioning
              aboutEl.style.display = "inline-block";
              passionateEl.style.display = "inline-block";
              processEl.style.display = "inline-block";
              probSolveEl.style.display = "inline-block";
              logicsEl.style.display = "inline-block";
          
              technologiesEl.style.display = "inline-block";

              const first = annotate(aboutEl, { 
                type: "highlight", 
                color: "#fef08a",
                padding: 2
              });
              

              const a1 = annotate(passionateEl, { 
                type: "underline", 
                color: "#fb923c", 
                strokeWidth: 2,
                padding: 2
              });
              const a2 = annotate(processEl, { 
                type: "underline", 
                color: "#60a5fa", 
                strokeWidth: 2,
                padding: 2
            });
            const a3 = annotate(probSolveEl, { 
              type: "highlight", 
                color: "#b4fe8aff",
                padding: 2
            });
            const a4 = annotate(logicsEl, { 
              type: "circle", 
                color: "#fb923c", 
                padding: 8
            });



 
              const a5 = annotate(technologiesEl, { 
                type: "circle", 
                color: "#fb923c", 
                padding: 8
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

  const aboutSection = document.querySelector('section:nth-of-type(2)');
  if (aboutSection) observer.observe(aboutSection);

  return () => observer.disconnect();
}, []);

  return (
    <div className="bg-primary relative">
      <ClientGradientWrapper />
      {/* HERO SECTION */}
       <section className="bg-background text-foreground relative overflow-hidden py-12 lg:py-20">
  <div className="max-w-6xl w-full px-4 mx-auto">
    {/* 2 column grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      {/* LEFT COLUMN - 3 ROWS */}
      <div className="flex flex-col z-30">
        {/* ROW 1 - Greeting */}
        <div className="mb-2">
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

        {/* ROW 2 - Tagline */}
        <div className="mb-40">
          <div className="text-1xl md:text-1xl lg:text-2xl flex">
            <TextType
              text={["I build things with code"]}
              typingSpeed={120}
              pauseDuration={1000}
              showCursor={true}
              cursorCharacter=""
              initialDelay={2000}
            />
          </div>
        </div>

        {/* ROW 3 - CTA Section */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Link
              href="/projects"
              className="inline-block border-2 border-white bg-white text-background px-8 py-4 rounded-lg font-semibold hover:bg-primary transition-all duration-300 hover:scale-105"
            >
              About Sara
            </Link>
          </div>

          <div>
            <Link
              href="/projects"
              className="inline-block border-2 border-white bg-white text-background px-10 py-4 rounded-lg font-semibold hover:bg-primary transition-all duration-300 hover:scale-105"
            >
              Read CV
            </Link>
          </div>
        </div>
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

  {/* FULL WIDTH BOTTOM ROW */}
  <div className="absolute bottom-0 left-0 right-0 h-16 bg-primary opacity-50 z-20">
    <ScrollVelocity
  texts={['Python • JavaScript • TypeScript • C++ • Web Development • App Development', 'React • Next.js • Node.js • Swift • Flutter']} 
  velocity={20} 
  className="custom-scroll-text text-2xl text-background"
/>
  </div>
</section>



      {/* ABOUT SECTION*/}
      <section className="py-20 bg-background text-secondary-foreground pt-40">
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
                  <span id ="about" style={{display: 'inline-block'}}>About me</span>
                </h2>
                </div>
              <div className="space-y-6">
                <p className="text-lg secondary-foreground leading-relaxed">
                I'm a recently graduated, yet <span id="passionate">passionate</span>, software developer who really enjoyes the <span id="process">programmering process</span> - from planning and structuring to implementing both frontend and backend - especially backend. 
                I like the <span id="prob-solve">problem-solving</span> and <span id="logics">logics</span> since it stimulates my analytical mind. I strive to develop applications I can be proud of with architecture and future development in mind. 

            </p>
                <p className="text-lg secondary-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new{" "}
              <span id="technologies">technologies</span>, sewing clothes, climbing, puzzling, or
              enjoying a good cup of coffee.
            </p>
            </div>
       
              <div className="space-y-6 pt-5">
                <h2 className="text-xl secondary-foreground leading-relaxed">
                  <span id ="about">
                    My Person</span>
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
