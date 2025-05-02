"use client";
import React, { useRef } from "react";
import { Orbitron, Montserrat } from "next/font/google";

// Data Imports
import { DATA } from "@/data/resume";

// UI Components
import Navbar from "@/components/navbar";
import { ProjectCards } from "@/components/ui/projectcards1";
import { ContactForm } from "@/components/ui/contactform1";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import { Hackathon, HackathonList } from "@/components/ui/hackathoncards1";
import WorkExperience from "@/components/ui/workexperience1";
import { Education } from "@/components/ui/education1";
import { Certifications } from "@/components/ui/certifications1";
import SkillsSection from "@/components/ui/skills1";

// Icons
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { DownloadIcon } from "lucide-react";

// Libraries
import { Typewriter } from "react-simple-typewriter";

// Font Definitions
const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700"] });
const montserrat = Montserrat({ subsets: ["latin"] });

const Pages = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const scrollToHero = () => {
    heroRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Common class for section headings
  const sectionHeadingClass = `${orbitron.className} text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 p-4 sm:p-6 rounded-3xl bg-opacity-20 backdrop-filter backdrop-blur-lg`;

  // Common class for section descriptions
  const sectionDescriptionClass = `${montserrat.className} text-base md:text-lg lg:text-xl text-center text-gray-700 dark:text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto border-b border-gray-200 dark:border-gray-700 pb-6 md:pb-8`;
  const sectionDescriptionStyle = {
    boxShadow: "0 4px 10px -5px rgba(128, 128, 128, 0.3)",
  };

  // Ensure DATA.hackathons is compatible with Hackathon[]
  const hackathonsData: Hackathon[] = DATA.hackathons
    ? [...DATA.hackathons]
    : [];
  return (
    <div
      className="relative flex min-h-screen flex-col items-stretch justify-start
                   px-4 sm:px-6 md:px-8
                   text-black dark:text-white
                   bg-white dark:bg-[#03000A]
                   dark:bg-gradient-radial
                   dark:from-[#1e002f] dark:via-[#06000a] dark:to-[#0a0014]
                   transition-colors duration-500
                   overflow-x-hidden
                   w-full"
    >
      <Navbar />
      {/* Hero Section */}
      {DATA && (
        <div
          ref={heroRef}
          className="relative flex flex-col-reverse lg:flex-row items-center justify-between w-full min-h-screen lg:space-x-12 xl:space-x-20 py-16 sm:py-20 lg:py-0
                             overflow-hidden
                             px-4 sm:px-6 md:px-8"
        >
          {/* Left Side - Content */}
          <div className="flex-1 text-center lg:text-left space-y-4 md:space-y-6 z-10 relative flex flex-col justify-center mt-12 lg:mt-0 w-full lg:w-auto">
            {/* Name and Title Heading */}
            {DATA.name && (
              <div>
                <div
                  className={`${orbitron.className} text-center lg:text-left tracking-tight mb-4 md:mb-6`}
                >
                  <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black dark:text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 dark:from-purple-500 dark:via-pink-500 dark:to-red-500">
                    {DATA.greeting} {DATA.name} 👋
                  </span>
                  <br />
                  <span className="block mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-black dark:text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-700 to-green-700 dark:from-blue-400 dark:via-cyan-400 dark:to-green-400">
                    <Typewriter
                      words={[...DATA.typewriterTexts]}
                      loop={true}
                      cursor
                      cursorStyle="|"
                      typeSpeed={100}
                      deleteSpeed={100}
                      delaySpeed={1500}
                    />
                  </span>
                </div>
              </div>
            )}

            {/* Description and CV Button */}
            {DATA.description && (
              <>
                <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-medium text-center">
                  {DATA.tagline}
                </p>

                <div>
                  <p
                    className={`${montserrat.className} text-sm md:text-base lg:text-lg xl:text-xl text-justify leading-relaxed mb-6`}
                  >
                    {DATA.description}
                  </p>

                  <div className="mt-8 flex justify-center">
                    <a
                      href={DATA.cvUrl}
                      download
                      className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 text-white font-semibold rounded-full shadow-lg transition-all duration-300 bg-gradient-to-r from-purple-500 to-pink-500 text-sm sm:text-base hover:scale-105 active:scale-95"
                    >
                      <DownloadIcon className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
                      Download CV
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Right Side - Avatar */}
          {DATA.avatarUrl && (
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 z-10 flex-shrink-0 mb-10 lg:mb-0">
              <div
                className="relative w-full h-full rounded-full shadow-[0_0_20px_rgba(236,72,153,0.8)] dark:shadow-[0_0_25px_rgba(236,72,153,0.8)] 
                  border-4 border-purple-400 dark:border-pink-400 
                  transition-all duration-300"
              >
                <div
                  className="absolute inset-2 sm:inset-3 md:inset-4 bg-gradient-to-br from-purple-500 to-pink-500
                    opacity-10 rounded-full pointer-events-none"
                ></div>

                <Avatar className="w-full h-full">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
                    {DATA.initials}
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          )}
        </div>
      )}
      {/* Main Content Area - Constrained Width */}
      <div className="w-full max-w-6xl mx-auto z-10 relative">
        {/* Education Section */}
        {DATA.education && DATA.education.length > 0 && (
          <section id="education" className="py-10 md:py-16 md:scroll-mt-20">
            <h2 className={sectionHeadingClass}>Education</h2>
            <p
              className={sectionDescriptionClass}
              style={sectionDescriptionStyle}
            >
              My academic journey and qualifications, showcasing my foundational
              knowledge.
            </p>
            <div className="w-full max-w-5xl mx-auto mb-12">
              <Education
                items={DATA.education.map((edu) => ({
                  title: edu.school,
                  description: `${edu.degree} (${edu.start} - ${edu.end})`,
                  link: edu.href,
                  logoUrl: edu.logoUrl,
                }))}
              />
            </div>
          </section>
        )}

        {/* Skills Section */}
        {DATA.skills && DATA.skills.length > 0 && (
          <section id="skills" className="py-10 md:py-16 md:scroll-mt-20">
            <h2 className={sectionHeadingClass}>Skills</h2>
            <p
              className={sectionDescriptionClass}
              style={sectionDescriptionStyle}
            >
              My technical proficiencies and expertise, highlighting my
              capabilities.
            </p>
            <div className="w-full max-w-5xl mx-auto mb-12">
              <SkillsSection />
            </div>
          </section>
        )}

        {/* Projects Section */}
        {DATA.projects && DATA.projects.length > 0 && (
          <section id="projects" className="py-10 md:py-16 md:scroll-mt-20">
            <h2 className={sectionHeadingClass}>Projects</h2>
            <p
              className={sectionDescriptionClass}
              style={sectionDescriptionStyle}
            >
              A selection of my notable projects, demonstrating my practical
              skills.
            </p>
            <div className="w-full max-w-5xl mx-auto mb-12">
              <ProjectCards />
            </div>
          </section>
        )}

        {/* Work Experience Section */}
        {DATA.work && DATA.work.length > 0 && (
          <section id="experience" className="py-10 md:py-16 md:scroll-mt-20">
            <h2 className={sectionHeadingClass}>Work Experience</h2>
            <p
              className={sectionDescriptionClass}
              style={sectionDescriptionStyle}
            >
              My professional roles and contributions, reflecting my career
              growth.
            </p>
            <div className="w-full max-w-5xl mx-auto mb-12">
              <WorkExperience />
            </div>
          </section>
        )}

        {/* Hackathons Section */}
        {hackathonsData && hackathonsData.length > 0 && (
          <section id="hackathons" className="py-10 md:py-16 md:scroll-mt-20">
            <h2 className={sectionHeadingClass}>Hackathons</h2>
            <p
              className={sectionDescriptionClass}
              style={sectionDescriptionStyle}
            >
              My participation and achievements in hackathons, showcasing my
              innovative spirit.
            </p>
            <div className="w-full max-w-5xl mx-auto mb-12">
              <HackathonList hackathons={hackathonsData} />
            </div>
          </section>
        )}

        {/* Certifications Section */}
        {DATA.certifications?.length > 0 && (
          <section
            id="certifications"
            className="py-10 md:py-16 md:scroll-mt-20"
          >
            <h2 className={sectionHeadingClass}>Certifications</h2>
            <p
              className={sectionDescriptionClass}
              style={sectionDescriptionStyle}
            >
              My professional certifications and qualifications, validating my
              expertise.
            </p>
            <div className="w-full max-w-5xl mx-auto mb-12">
              <Certifications />
            </div>
          </section>
        )}

        {/* Contact Section */}
        <section id="contact" className="py-10 md:py-16 md:scroll-mt-20">
          <h2 className={sectionHeadingClass}>Contact Me</h2>
          <p
            className={sectionDescriptionClass}
            style={sectionDescriptionStyle}
          >
            Get in touch with me for collaborations or inquiries.
          </p>
          <div className="w-full max-w-3xl mx-auto mb-12">
            <ContactForm />
          </div>
        </section>
      </div>{" "}
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToHero}
        title="Scroll to top"
        aria-label="Scroll to top"
        className="hidden lg:fixed lg:bottom-8 lg:right-8 lg:block bg-purple-600 hover:bg-purple-700 text-white p-2.5 lg:p-3 rounded-full shadow-lg z-50 transition-colors duration-300"
      >
        <ArrowUpIcon className="w-5 h-5 lg:w-6 lg:h-6" />
      </button>
    </div>
  );
};

export default Pages;
