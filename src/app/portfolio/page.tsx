"use client";
import React, { useRef, useEffect, MutableRefObject, RefObject } from "react";
import { ProjectCards } from "@/components/ui/cards";
import Contactcard from "@/components/ui/contactcard";
import { DATA } from "@/data/resume";
import { ABOUT } from "@/data/resume";
import Navbar from "@/components/ui/navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HackathonList } from "@/components/ui/hackathon-card";
import { Orbitron, Roboto_Slab, Montserrat } from "next/font/google";
import WorkExperience from "@/components/ui/workexperience";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Certifications } from "@/components/ui/card-spotlight";
import SkillsSection from "@/components/magicui/skills";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { useAnimation, AnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Particles } from "@/components/magicui/particles";
import { DownloadIcon } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700"] });
const robotoSlab = Roboto_Slab({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

const Pages = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const scrollToHero = () => {
    heroRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="relative flex flex-col items-stretch justify-start
pt-0 px-7 text-black dark:text-white
bg-white dark:bg-[#03000A]
dark:bg-gradient-radial
dark:from-[#1e002f] dark:via-[#06000a] dark:to-[#0a0014]
transition-colors duration-500
overflow-x-hidden w-full" // Keep this essential property
    >
      <Navbar />
      <Particles
        className="absolute inset-0 z-0"
        quantity={300}
        ease={200}
        color="#800080"
        refresh
      />
      {/* Hero Section  */}
      {DATA && ABOUT && (
        <div
          ref={heroRef}
          className="relative flex flex-col-reverse lg:flex-row items-center justify-between w-full min-h-screen lg:space-x-12 xl:space-x-20 py-16 sm:py-20 lg:py-0 overflow-hidden"
        >
          {/* Left Side - Content */}
          <div className="flex-1 text-center lg:text-left space-y-4 md:space-y-6 z-10 relative flex flex-col justify-center mt-12 lg:mt-0">
            {/* Name and Title Heading */}
            {DATA.name && (
              <div>
                <div
                  className={`${orbitron.className} text-center lg:text-left tracking-tight mb-4 md:mb-6`}
                >
                  <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black dark:text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 dark:from-purple-500 dark:via-pink-500 dark:to-red-500">
                    Hi, I am {DATA.name} 👋
                  </span>
                  <br />
                  <span className="block mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-black dark:text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-700 to-green-700 dark:from-blue-400 dark:via-cyan-400 dark:to-green-400">
                    <Typewriter
                      words={[
                        "Full Stack Developer ",
                        "Open Source Contributor ",
                        "Creative Problem Solver ",
                        "Passionate Coder ",
                        "UI/UX Enthusiast ",
                      ]}
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

            {ABOUT.description && (
              <>
                <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-medium text-center justify-center">
                  Passionate Developer | Innovator | Tech Enthusiast.
                </p>

                <div>
                  <p
                    className={`${montserrat.className} text-sm md:text-base lg:text-lg xl:text-xl text-justify leading-relaxed mb-6`}
                  >
                    {ABOUT.description}
                  </p>

                  <div className="mt-8 flex justify-center">
                    <a
                      href="/cv.pdf"
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
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 z-10 flex mb-10 lg:mb-0 lg:mr-6 xl:mr-8 ml-[-20px] justify-center">
              <div
                className="relative w-full h-full rounded-full shadow-2xl border-4
        border-purple-400 dark:border-pink-400
        transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.8)]
        dark:hover:shadow-[0_0_25px_rgba(236,72,153,0.8)]"
              >
                {/* Glow effect inside the Avatar circle with reduced width */}
                <div
                  className="absolute inset-4 bg-gradient-to-br from-purple-500 to-pink-500
          opacity-0 hover:opacity-10 transition-opacity duration-300
          rounded-full pointer-events-none"
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
      <div className="w-full max-w-6xl mx-auto px-4 z-10">
        {/* Education Section */}
        {DATA.education && DATA.education.length > 0 && (
          <section id="education" className="py-10 md:py-16 md:scroll-mt-20">
            <h2
              className={`${orbitron.className} text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 p-4 sm:p-6 rounded-3xl bg-opacity-20 backdrop-filter backdrop-blur-lg`}
            >
              Education
            </h2>

            <p
              className={`${montserrat.className} text-base md:text-lg lg:text-xl text-center text-gray-700 dark:text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto border-b border-gray-200 dark:border-gray-700 pb-6 md:pb-8`}
              style={{ boxShadow: "0 4px 10px -5px rgba(128, 128, 128, 0.3)" }}
            >
              My academic journey and qualifications, showcasing my foundational
              knowledge.
            </p>

            <div className="w-full max-w-5xl mx-auto mb-12">
              <HoverEffect
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
          <>
            <h2
              className={`${orbitron.className} text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 p-4 sm:p-6 rounded-3xl bg-opacity-20 backdrop-filter backdrop-blur-lg`}
            >
              Skills
            </h2>

            <p
              className={`${montserrat.className} text-base md:text-lg lg:text-xl text-center text-gray-700 dark:text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto border-b border-gray-200 dark:border-gray-700 pb-6 md:pb-8`}
              style={{ boxShadow: "0 4px 10px -5px rgba(128, 128, 128, 0.3)" }}
            >
              My technical proficiencies and expertise, highlighting my
              capabilities.
            </p>

            <div className="w-full max-w-5xl mx-auto mb-12">
              <SkillsSection />
            </div>
          </>
        )}

        {/* Projects Section */}
        {DATA.projects && DATA.projects.length > 0 && (
          <>
            <h2
              className={`${orbitron.className} text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 p-4 sm:p-6 rounded-3xl bg-opacity-20 backdrop-filter backdrop-blur-lg`}
            >
              Projects
            </h2>

            <p
              className={`${montserrat.className} text-base md:text-lg lg:text-xl text-center text-gray-700 dark:text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto border-b border-gray-200 dark:border-gray-700 pb-6 md:pb-8`}
              style={{ boxShadow: "0 4px 10px -5px rgba(128, 128, 128, 0.3)" }}
            >
              A selection of my notable projects, demonstrating my practical
              skills.
            </p>

            <div className="w-full max-w-5xl mx-auto mb-12">
              <ProjectCards />
            </div>
          </>
        )}

        {/* Work Experience Section */}
        {DATA.work && DATA.work.length > 0 && (
          <>
            <h2
              className={`${orbitron.className} text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 p-4 sm:p-6 rounded-3xl bg-opacity-20 backdrop-filter backdrop-blur-lg`}
            >
              Work Experience
            </h2>

            <p
              className={`${montserrat.className} text-base md:text-lg lg:text-xl text-center text-gray-700 dark:text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto border-b border-gray-200 dark:border-gray-700 pb-6 md:pb-8`}
              style={{ boxShadow: "0 4px 10px -5px rgba(128, 128, 128, 0.3)" }}
            >
              My professional roles and contributions, reflecting my career
              growth.
            </p>

            <div className="w-full max-w-5xl mx-auto mb-12">
              <WorkExperience />
            </div>
          </>
        )}

        {/* Hackathons Section */}
        {DATA.hackathons?.length > 0 && (
          <section className="py-10 md:py-16">
            <h2
              className={`${orbitron.className} text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 p-4 sm:p-6 rounded-3xl bg-opacity-20 backdrop-filter backdrop-blur-lg`}
            >
              Hackathons
            </h2>

            <p
              className={`${montserrat.className} text-base md:text-lg lg:text-xl text-center text-gray-700 dark:text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto border-b border-gray-200 dark:border-gray-700 pb-6 md:pb-8`}
              style={{ boxShadow: "0 4px 10px -5px rgba(128, 128, 128, 0.3)" }}
            >
              My participation and achievements in hackathons, showcasing my
              innovative spirit.
            </p>

            <div className="w-full max-w-5xl mx-auto mb-12">
              <HackathonList hackathons={[...DATA.hackathons]} />
            </div>
          </section>
        )}

        {/* Certifications Section */}

        {DATA.certifications?.length > 0 && (
          <section className="py-10 md:py-16">
            <h2
              className={`${orbitron.className} text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 p-4 sm:p-6 rounded-3xl bg-opacity-20 backdrop-filter backdrop-blur-lg`}
            >
              Certifications
            </h2>

            <p
              className={`${montserrat.className} text-base md:text-lg lg:text-xl text-center text-gray-700 dark:text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto border-b border-gray-200 dark:border-gray-700 pb-6 md:pb-8`}
              style={{ boxShadow: "0 4px 10px -5px rgba(128, 128, 128, 0.3)" }}
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

        <h2
          className={`${orbitron.className} text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 p-4 sm:p-6 rounded-3xl bg-opacity-20 backdrop-filter backdrop-blur-lg`}
        >
          Contact Me
        </h2>

        <p
          className={`${montserrat.className} text-base md:text-lg lg:text-xl text-center text-gray-700 dark:text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto border-b border-gray-200 dark:border-gray-700 pb-6 md:pb-8`}
          style={{ boxShadow: "0 4px 10px -5px rgba(128, 128, 128, 0.3)" }}
        >
          Get in touch with me for collaborations or inquiries.
        </p>

        <div className="w-full max-w-3xl mx-auto mb-12">
          <Contactcard />
        </div>
      </div>{" "}
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
