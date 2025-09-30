"use client";
import { useRef } from 'react';

export default function CVPage() {
  return (
    <>
      {/* Aurora Background */}
      <div className="relative max-w-5xl mx-auto px-4 py-8">
      {/* Header Section */}
      <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-950 mb-4">
            Sara Ljung
          </h1>
          <p className="text-2xl md:text-3xl text-emerald-800 mb-6">
            Software Engineer
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-emerald-900">
            <a href="tel:0709802153" className="hover:text-emerald-600 transition-colors">
              070 980 21 53
            </a>
            <span>•</span>
            <a href="mailto:ljung.sara98@gmail.com" className="hover:text-emerald-600 transition-colors">
              ljung.sara98@gmail.com
            </a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/saraljung-723691285/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors">
              LinkedIn
            </a>
          </div>
        </header>

        {/* Work Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-emerald-950 mb-8 border-b-2 border-emerald-800 pb-2">
            Work Experience
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-emerald-900">Software Developer, Knowit</h3>
              <p className="text-emerald-700 mb-2">Jönköping | August 2025 – September 2025</p>
              <p className="text-gray-700">
                Worked on a VR education project, developing LLM-communication for structured output and scoring algorithms in TypeScript.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-emerald-900">Bachelor Thesis, Knowit</h3>
              <p className="text-emerald-700 mb-2">Jönköping | January 2025 – May 2025</p>
              <p className="text-gray-700">
                Explored AI models for emotion identification through speech and text. Led programming efforts including comprehensive statistical analyses in Python.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-emerald-900">Internship, Knowit</h3>
              <p className="text-emerald-700 mb-2">Jönköping | April 2024 – May 2024</p>
              <p className="text-gray-700">
                7-week internship developing a walking robot with mobile application control. Created control interface in Flutter using Scrum methodology.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-emerald-900">Study Coach, Allakando</h3>
              <p className="text-emerald-700 mb-2">August 2022 – November 2024</p>
              <p className="text-gray-700">
                Provided individual mathematics tutoring for high school students, enhancing ability to explain and simplify complex concepts.
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-emerald-950 mb-8 border-b-2 border-emerald-800 pb-2">
            Education
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-emerald-900">Computer Engineering – Software Development</h3>
              <p className="text-emerald-700 mb-2">Jönköping University | August 2022 – May 2025</p>
              <p className="text-gray-700">
                Bachelor focusing on programming for software development and mobile platforms. Completed multiple projects following agile development principles with excellent grades.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-emerald-900">Healthcare, AI and Big Data</h3>
              <p className="text-emerald-700 mb-2">Stockholm University | June 2023 – August 2023</p>
              <p className="text-gray-700">
                Course exploring AI applications in healthcare, with research focus on AI support for children with ADHD and autism.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-emerald-950 mb-8 border-b-2 border-emerald-800 pb-2">
            Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Mobile Recipe Application</h3>
              <p className="text-gray-700 mb-3">
                User-specific recipe app using React Native with local LLM (Llama 3). Backend in JavaScript with API integration.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">React Native</span>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">Llama 3</span>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Portfolio Website</h3>
              <p className="text-gray-700 mb-3">
                Backend in C# and .NET to expand knowledge in web development and testing practices.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">C#</span>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">.NET</span>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">Testing</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-emerald-900 mb-2">DevOps & Test Automation</h3>
              <p className="text-gray-700 mb-3">
                Implemented automated tests in CI/CD pipeline. Enhanced skills in Docker, Selenium, Locust, and GitHub.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">Docker</span>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">Selenium</span>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">CI/CD</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Husqvarna Collaboration</h3>
              <p className="text-gray-700 mb-3">
                Developed lawn mower robot with mobile app. Worked on backend communication and image processing.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">Backend</span>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">WebSockets</span>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">Mobile</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-emerald-950 mb-8 border-b-2 border-emerald-800 pb-2">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-bold text-emerald-900 mb-4">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'C++', 'JavaScript', 'TypeScript', 'SQL', 'Swift', 'Kotlin', 'Dart', 'NodeJS', 'CSS', 'C#'].map(skill => (
                  <span key={skill} className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-bold text-emerald-900 mb-4">Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['React', '.NET', 'Svelte', 'GitHub', 'Jira', 'Docker', 'Llama 3'].map(skill => (
                  <span key={skill} className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-bold text-emerald-900 mb-4">Methodologies</h3>
              <div className="flex flex-wrap gap-2">
                {['Scrum', 'DevOps', 'Test Automation', 'Agile'].map(skill => (
                  <span key={skill} className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Languages & Other */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-emerald-950 mb-8 border-b-2 border-emerald-800 pb-2">
            Languages & Other
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-bold text-emerald-900 mb-3">Languages</h3>
              <p className="text-gray-700">Swedish (Native)</p>
              <p className="text-gray-700">English (Fluent)</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-bold text-emerald-900 mb-3">Other</h3>
              <p className="text-gray-700">Driver's License B</p>
            </div>
          </div>
        </section>

        {/* References */}
        <section className="text-center">
          <p className="text-lg text-emerald-900 font-semibold">References provided upon request</p>
        </section>
      </div>
    </>
  );
}