"use client";
import React, { useRef, useEffect } from "react";
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
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Particles } from "@/components/magicui/particles";
import { DownloadIcon } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700"] });
const robotoSlab = Roboto_Slab({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const subtitleVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

const contentVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.4,
    },
  },
};

const Pages = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const useSectionInView = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return { ref, controls };
  };

  const { ref: eduRef, controls: eduControls } = useSectionInView();
  const { ref: skillsRef, controls: skillsControls } = useSectionInView();
  const { ref: projectsRef, controls: projectsControls } = useSectionInView();
  const { ref: workRef, controls: workControls } = useSectionInView();
  const { ref: hackathonsRef, controls: hackathonsControls } =
    useSectionInView();
  const { ref: certsRef, controls: certsControls } = useSectionInView();
  const { ref: contactRef, controls: contactControls } = useSectionInView();

  const scrollToHero = () => {
    heroRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="relative flex flex-col items-center justify-start px-4 sm:px-8 md:px-16 pt-0
text-black dark:text-white overflow-x-hidden {/* Keep overflow-x-hidden here */}
bg-white
dark:bg-[#03000A]
dark:bg-gradient-radial
dark:from-[#1e002f]
dark:via-[#06000a]
dark:to-[#0a0014]
transition-colors duration-500"
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
          <motion.div
            className="flex-1 text-center lg:text-left space-y-4 md:space-y-6 z-10 relative flex flex-col justify-center mt-12 lg:mt-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Name and Title Heading */}
            {DATA.name && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
              >
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
              </motion.div>
            )}

            {ABOUT.description && (
              <>
                <motion.p
                  className="text-lg md:text-xl lg:text-2xl leading-relaxed font-medium text-center justify-center"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 80,
                    damping: 12,
                  }}
                >
                  Passionate Developer | Innovator | Tech Enthusiast.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 80,
                    damping: 12,
                  }}
                >
                  <p
                    className={`${montserrat.className} text-sm md:text-base lg:text-lg xl:text-xl text-justify leading-relaxed mb-6`}
                  >
                    {ABOUT.description}
                  </p>

                  <div className="mt-8 flex justify-center">
                    <motion.a
                      href="/cv.pdf"
                      download
                      initial={{ scale: 1 }}
                      animate={{
                        scale: [1, 1.05, 1],
                        boxShadow: [
                          "0 0 8px rgba(236, 72, 153, 0.5)",
                          "0 0 16px rgba(236, 72, 153, 0.7)",
                          "0 0 8px rgba(236, 72, 153, 0.5)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 text-white font-semibold rounded-full shadow-lg transition-all duration-300 bg-gradient-to-r from-purple-500 to-pink-500 text-sm sm:text-base"
                    >
                      <DownloadIcon className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
                      Download CV
                    </motion.a>
                  </div>
                </motion.div>
              </>
            )}
          </motion.div>

          {/* Right Side - Avatar */}
          {DATA.avatarUrl && (
            <motion.div
              className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 z-10 flex items-center justify-start mb-10 lg:mb-0"
              initial={{ opacity: 0, scale: 0.8, rotate: 20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 120,
                damping: 14,
              }}
              whileHover={{
                scale: 1.05,
                rotate: 5,
                transition: { duration: 0.3 },
              }}
            >
              <div
                className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4
             animate-border-glow border-purple-400 dark:border-pink-400
             transition-all duration-500 hover:border-transparent
             hover:ring-4 hover:ring-cyan-500 dark:hover:ring-blue-500"
              >
                <Avatar className="w-full h-full">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
                    {DATA.initials}
                  </AvatarFallback>
                </Avatar>
                <div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500
               opacity-0 hover:opacity-20 transition-opacity duration-300
               rounded-full pointer-events-none"
                ></div>
              </div>
            </motion.div>
          )}
        </div>
      )}
      <div className="w-full max-w-6xl mx-auto px-4 z-10">
        {DATA.education && DATA.education.length > 0 && (
          <section
            id="education"
            ref={eduRef}
            className="py-10 md:py-16 md:scroll-mt-20"
          >
            <motion.h2
              className={`${orbitron.className} text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 p-4 sm:p-6 rounded-3xl bg-opacity-20 backdrop-filter backdrop-blur-lg`}
              variants={sectionVariant}
              initial="hidden"
              animate={eduControls}
            >
              Education
            </motion.h2>

            <motion.p
              className={`${montserrat.className} text-base md:text-lg lg:text-xl text-center text-gray-700 dark:text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto border-b border-gray-200 dark:border-gray-700 pb-6 md:pb-8`}
              style={{ boxShadow: "0 4px 10px -5px rgba(128, 128, 128, 0.3)" }}
              variants={subtitleVariant}
              initial="hidden"
              animate={eduControls}
            >
              My academic journey and qualifications, showcasing my foundational
              knowledge.
            </motion.p>

            <motion.div
              className="w-full max-w-5xl mx-auto mb-12"
              variants={contentVariant}
              initial="hidden"
              animate={eduControls}
            >
              <HoverEffect
                items={DATA.education.map((edu) => ({
                  title: edu.school,
                  description: `${edu.degree} (${edu.start} - ${edu.end})`,
                  link: edu.href,
                  logoUrl: edu.logoUrl,
                }))}
              />
            </motion.div>
          </section>
        )}

        {/* Skills Section */}
        {DATA.skills && DATA.skills.length > 0 && (
          <section ref={skillsRef} className="py-10 md:py-16">
            <motion.h2
              className={`${orbitron.className} text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 p-4 sm:p-6 rounded-3xl bg-opacity-20 backdrop-filter backdrop-blur-lg`}
              variants={sectionVariant}
              initial="hidden"
              animate={skillsControls}
            >
              Skills
            </motion.h2>
            <motion.p
              className={`${montserrat.className} text-base md:text-lg lg:text-xl text-center text-gray-700 dark:text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto border-b border-gray-200 dark:border-gray-700 pb-6 md:pb-8`}
              style={{ boxShadow: "0 4px 10px -5px rgba(128, 128, 128, 0.3)" }}
              variants={subtitleVariant}
              initial="hidden"
              animate={skillsControls}
            >
              My technical proficiencies and expertise, highlighting my
              capabilities.
            </motion.p>
            <motion.div
              className="w-full max-w-5xl mx-auto mb-12"
              variants={contentVariant}
              initial="hidden"
              animate={skillsControls}
            >
              <SkillsSection />
            </motion.div>
          </section>
        )}

        {/* Projects Section */}
        {DATA.projects && DATA.projects.length > 0 && (
          <section ref={projectsRef} className="py-10 md:py-16">
            <motion.h2
              className={`${orbitron.className} text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 p-4 sm:p-6 rounded-3xl bg-opacity-20 backdrop-filter backdrop-blur-lg`}
              variants={sectionVariant}
              initial="hidden"
              animate={projectsControls}
            >
              Projects
            </motion.h2>

            <motion.p
              className={`${montserrat.className} text-base md:text-lg lg:text-xl text-center text-gray-700 dark:text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto border-b border-gray-200 dark:border-gray-700 pb-6 md:pb-8`}
              style={{ boxShadow: "0 4px 10px -5px rgba(128, 128, 128, 0.3)" }}
              variants={subtitleVariant}
              initial="hidden"
              animate={projectsControls}
            >
              A selection of my notable projects, demonstrating my practical
              skills.
            </motion.p>

            <motion.div
              className="w-full max-w-5xl mx-auto mb-12"
              variants={contentVariant}
              initial="hidden"
              animate={projectsControls}
            >
              <ProjectCards />
            </motion.div>
          </section>
        )}
        {/* work Experience */}
        {DATA.work && DATA.work.length > 0 && (
          <section ref={workRef} className="py-10 md:py-16">
            <motion.h2
              className={`${orbitron.className} text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 p-4 sm:p-6 rounded-3xl bg-opacity-20 backdrop-filter backdrop-blur-lg`}
              variants={sectionVariant}
              initial="hidden"
              animate={workControls}
            >
              Work Experience
            </motion.h2>
            <motion.p
              className={`${montserrat.className} text-base md:text-lg lg:text-xl text-center text-gray-700 dark:text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto border-b border-gray-200 dark:border-gray-700 pb-6 md:pb-8`}
              style={{ boxShadow: "0 4px 10px -5px rgba(128, 128, 128, 0.3)" }}
              variants={subtitleVariant}
              initial="hidden"
              animate={workControls}
            >
              My professional roles and contributions, reflecting my career
              growth.
            </motion.p>
            <motion.div
              className="w-full max-w-5xl mx-auto mb-12"
              variants={contentVariant}
              initial="hidden"
              animate={workControls}
            >
              <WorkExperience />
            </motion.div>
          </section>
        )}

        {/* Hackathons Section */}
        {DATA.hackathons && DATA.hackathons.length > 0 && (
          <section ref={hackathonsRef} className="py-10 md:py-16">
            <motion.h2
              className={`${orbitron.className} text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 p-4 sm:p-6 rounded-3xl bg-opacity-20 backdrop-filter backdrop-blur-lg`}
              variants={sectionVariant}
              initial="hidden"
              animate={hackathonsControls}
            >
              Hackathons
            </motion.h2>
            <motion.p
              className={`${montserrat.className} text-base md:text-lg lg:text-xl text-center text-gray-700 dark:text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto border-b border-gray-200 dark:border-gray-700 pb-6 md:pb-8`}
              style={{ boxShadow: "0 4px 10px -5px rgba(128, 128, 128, 0.3)" }}
              variants={subtitleVariant}
              initial="hidden"
              animate={hackathonsControls}
            >
              My participation and achievements in hackathons, showcasing my
              innovative spirit.
            </motion.p>
            <motion.div
              className="w-full max-w-5xl mx-auto mb-12"
              variants={contentVariant}
              initial="hidden"
              animate={hackathonsControls}
            >
              const hackathons = [...DATA.hackathons] as Hackathon[];
            </motion.div>
          </section>
        )}

        {/* Certifications Section */}
        {DATA.certifications.length > 0 && (
          <section ref={certsRef} className="py-10 md:py-16">
            <motion.h2
              className={`${orbitron.className} text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 p-4 sm:p-6 rounded-3xl bg-opacity-20 backdrop-filter backdrop-blur-lg`}
              variants={sectionVariant}
              initial="hidden"
              animate={certsControls}
            >
              Certifications
            </motion.h2>
            <motion.p
              className={`${montserrat.className} text-base md:text-lg lg:text-xl text-center text-gray-700 dark:text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto border-b border-gray-200 dark:border-gray-700 pb-6 md:pb-8`}
              style={{ boxShadow: "0 4px 10px -5px rgba(128, 128, 128, 0.3)" }}
              variants={subtitleVariant}
              initial="hidden"
              animate={certsControls}
            >
              My professional certifications and qualifications, validating my
              expertise.
            </motion.p>
            <motion.div
              className="w-full max-w-5xl mx-auto mb-12"
              variants={contentVariant}
              initial="hidden"
              animate={certsControls}
            >
              <HoverEffect
                items={DATA.certifications.map((cert) => ({
                  title: cert.title,
                  description: `${cert.issuer} (${cert.date})`,
                  link: cert.imageUrl,
                  logoUrl: cert.imageUrl,
                }))}
              />
            </motion.div>
          </section>
        )}

        {/* Contact Section */}
        <section ref={contactRef} className="py-10 md:py-16">
          <motion.h2
            className={`${orbitron.className} text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 p-4 sm:p-6 rounded-3xl bg-opacity-20 backdrop-filter backdrop-blur-lg`}
            variants={sectionVariant}
            initial="hidden"
            animate={contactControls}
          >
            Contact Me
          </motion.h2>
          <motion.p
            className={`${montserrat.className} text-base md:text-lg lg:text-xl text-center text-gray-700 dark:text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto border-b border-gray-200 dark:border-gray-700 pb-6 md:pb-8`}
            style={{ boxShadow: "0 4px 10px -5px rgba(128, 128, 128, 0.3)" }}
            variants={subtitleVariant}
            initial="hidden"
            animate={contactControls}
          >
            Get in touch with me for collaborations or inquiries.
          </motion.p>
          <motion.div
            className="w-full max-w-3xl mx-auto mb-12"
            variants={contentVariant}
            initial="hidden"
            animate={contactControls}
          >
            <Contactcard />
          </motion.div>
        </section>
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
