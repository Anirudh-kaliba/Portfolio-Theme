"use client";
import React, { useRef } from "react";
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

const Pages = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const [eduRef, eduInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const eduControls = useAnimation();
  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const skillsControls = useAnimation();
  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const projectsControls = useAnimation();
  const [workRef, workInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const workControls = useAnimation();
  const [hackathonsRef, hackathonsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const hackathonsControls = useAnimation();
  const [certsRef, certsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const certsControls = useAnimation();
  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const contactControls = useAnimation();

  // Use React.useEffect to trigger animations when sections come into view
  React.useEffect(() => {
    if (eduInView)
      eduControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
  }, [eduControls, eduInView]);

  React.useEffect(() => {
    if (skillsInView)
      skillsControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
  }, [skillsControls, skillsInView]);

  React.useEffect(() => {
    if (projectsInView)
      projectsControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
  }, [projectsControls, projectsInView]);

  React.useEffect(() => {
    if (workInView)
      workControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
  }, [workControls, workInView]);

  React.useEffect(() => {
    if (hackathonsInView)
      hackathonsControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
  }, [hackathonsControls, hackathonsInView]);

  React.useEffect(() => {
    if (certsInView)
      certsControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
  }, [certsControls, certsInView]);

  React.useEffect(() => {
    if (contactInView)
      contactControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
  }, [contactControls, contactInView]);

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
      {/* Hero Section */}
      <div
        ref={heroRef}
        className=" overflow-x-hiddenrelative flex flex-col-reverse lg:flex-row items-center justify-between w-full min-h-screen lg:space-x-12 xl:space-x-20 py-16 sm:py-20 lg:py-0"
      >
        {/* Left Side - Content */}
        <motion.div
          className="flex-1 text-center lg:text-left space-y-4 md:space-y-6 z-10 relative flex flex-col justify-center mt-12 lg:mt-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Name and Title Heading */}
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
              {" "}
              {/* Added lg:text-left */}
              <span
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold
 text-black dark:text-transparent bg-clip-text
 bg-gradient-to-r from-purple-700 via-pink-600 to-red-600
 dark:from-purple-500 dark:via-pink-500 dark:to-red-500"
              >
                Hi, I am Anirudh Gadge 👋
              </span>
              <br />
              <span
                className="block mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold
     text-black dark:text-transparent bg-clip-text
     bg-gradient-to-r from-blue-700 via-cyan-700 to-green-700 dark:from-blue-400 dark:via-cyan-400 dark:to-green-400"
              >
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

          {/* Short Bio */}
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

          {/* About Description and CV Button */}
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
              className={`${montserrat.className} text-base md:text-lg text-justify leading-relaxed mb-6`}
            >
              {" "}
              {/* Responsive font size */}
              {ABOUT.description}
            </p>

            {/* Animated Download CV Button - Centered */}
            {/* MODIFIED: Removed lg:justify-start to keep it centered */}
            <div className="mt-8 flex justify-center">
              {" "}
              <motion.a
                href="/cv.pdf" // Make sure this path is correct in your public folder
                download
                initial={{ scale: 1 }}
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 8px rgba(236, 72, 153, 0.5)", // Use rgba for softer glow
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
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 text-white font-semibold rounded-full shadow-lg transition-all duration-300 bg-gradient-to-r from-purple-500 to-pink-500 text-sm sm:text-base" // Responsive padding and font size
              >
                <DownloadIcon className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce justify-center" />{" "}
                {/* Responsive Icon Size */}
                Download CV
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Avatar */}
        <motion.div
          className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 z-10 flex items-center justify-center mb-10 lg:mb-0"
          initial={{ opacity: 0, scale: 0.8, rotate: 20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 120,
            damping: 14,
          }}
          whileHover={{ scale: 1.05, rotate: 5, transition: { duration: 0.3 } }}
        >
          {/* Single container for Avatar and effects */}
          <div
            className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4
                            animate-border-glow border-purple-400 dark:border-pink-400
                            transition-all duration-500 hover:border-transparent
                            hover:ring-4 hover:ring-cyan-500 dark:hover:ring-blue-500"
          >
            <Avatar className="w-full h-full">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
              <AvatarFallback className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
                {" "}
                {/* Responsive Fallback Size */}
                {DATA.initials}
              </AvatarFallback>
            </Avatar>
            {/* Optional: Gradient overlay on hover */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500
                                  opacity-0 hover:opacity-20 transition-opacity duration-300
                                  rounded-full pointer-events-none"
            ></div>
          </div>
        </motion.div>
      </div>
      {/* Sections Wrapper - Ensures consistent max-width and centering */}
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* Education Section */}
        <motion.section // Changed div to section for semantics and added ID
          id="education" // ID for desktop navbar navigation
          ref={eduRef} // Keep the ref for animation triggering
          initial={{ opacity: 0, y: 50 }}
          animate={eduControls}
          // MODIFIED: Added md:scroll-mt-20 to apply scroll margin only on medium screens and up. Removed unconditional scroll-mt-20.
          className="py-10 md:py-16 md:scroll-mt-20"
          // NOTE: Hiding the *link* in the Navbar on mobile requires editing the Navbar component itself.
        >
          <h2 // Use h2 for semantic section headings
            className={`${orbitron.className} text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 p-4 sm:p-6 rounded-3xl bg-opacity-20 backdrop-filter backdrop-blur-lg`} // Responsive size and padding
          >
            Education
          </h2>
          <p
            className={`${montserrat.className} text-base md:text-lg lg:text-xl text-center text-gray-700 dark:text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto border-b border-gray-200 dark:border-gray-700 pb-6 md:pb-8`} // Responsive font size, improved color contrast
            style={{ boxShadow: "0 4px 10px -5px rgba(128, 128, 128, 0.3)" }} // Subtle shadow
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
        </motion.section>

        {/* Skills Section */}
        <motion.div
          ref={skillsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={skillsControls}
          className="py-10 md:py-16" // Adjusted padding
        >
          <h2
            className={`${orbitron.className} text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 p-4 sm:p-6 rounded-3xl bg-opacity-20 backdrop-filter backdrop-blur-lg`} // Responsive size and padding
          >
            Skills
          </h2>
          <p
            className={`${montserrat.className} text-base md:text-lg lg:text-xl text-center text-gray-700 dark:text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto border-b border-gray-200 dark:border-gray-700 pb-6 md:pb-8`} // Responsive font size, improved color contrast
            style={{ boxShadow: "0 4px 10px -5px rgba(128, 128, 128, 0.3)" }}
          >
            My technical proficiencies and expertise, highlighting my
            capabilities.
          </p>
          <div className="w-full max-w-5xl mx-auto mb-12">
            <SkillsSection />
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          ref={projectsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={projectsControls}
          className="py-10 md:py-16" // Adjusted padding
        >
          <h2
            className={`${orbitron.className} text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 p-4 sm:p-6 rounded-3xl bg-opacity-20 backdrop-filter backdrop-blur-lg`} // Responsive size and padding
          >
            Projects
          </h2>
          <p
            className={`${montserrat.className} text-base md:text-lg lg:text-xl text-center text-gray-700 dark:text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto border-b border-gray-200 dark:border-gray-700 pb-6 md:pb-8`} // Responsive font size, improved color contrast
            style={{ boxShadow: "0 4px 10px -5px rgba(128, 128, 128, 0.3)" }}
          >
            A selection of my notable projects, demonstrating my practical
            skills.
          </p>
          <div className="w-full max-w-5xl mx-auto mb-12">
            <ProjectCards />
          </div>
        </motion.div>

        {/* Work Experience Section */}
        <motion.div
          ref={workRef}
          initial={{ opacity: 0, y: 50 }}
          animate={workControls}
          className="py-10 md:py-16" // Adjusted padding
        >
          <h2
            className={`${orbitron.className} text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 p-4 sm:p-6 rounded-3xl bg-opacity-20 backdrop-filter backdrop-blur-lg`} // Responsive size and padding
          >
            Work Experience
          </h2>
          <p
            className={`${montserrat.className} text-base md:text-lg lg:text-xl text-center text-gray-700 dark:text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto border-b border-gray-200 dark:border-gray-700 pb-6 md:pb-8`} // Responsive font size, improved color contrast
            style={{ boxShadow: "0 4px 10px -5px rgba(128, 128, 128, 0.3)" }}
          >
            My professional roles and contributions, reflecting my career
            growth.
          </p>
          <div className="w-full max-w-5xl mx-auto mb-12">
            <WorkExperience />
          </div>
        </motion.div>

        {/* Hackathons Section */}
        <motion.div
          ref={hackathonsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={hackathonsControls}
          className="py-10 md:py-16" // Adjusted padding
        >
          <h2
            className={`${orbitron.className} text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 p-4 sm:p-6 rounded-3xl bg-opacity-20 backdrop-filter backdrop-blur-lg`} // Responsive size and padding
          >
            Hackathons
          </h2>
          <p
            className={`${montserrat.className} text-base md:text-lg lg:text-xl text-center text-gray-700 dark:text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto border-b border-gray-200 dark:border-gray-700 pb-6 md:pb-8`} // Responsive font size, improved color contrast
            style={{ boxShadow: "0 4px 10px -5px rgba(128, 128, 128, 0.3)" }}
          >
            My participation and achievements in hackathons, showcasing my
            innovative spirit.
          </p>
          <div className="w-full max-w-5xl mx-auto mb-12">
            {/* Assuming HackathonList handles responsiveness internally */}
            <HackathonList hackathons={[...DATA.hackathons]} />
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          ref={certsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={certsControls}
          className="py-10 md:py-16" // Adjusted padding
        >
          <h2
            className={`${orbitron.className} text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 p-4 sm:p-6 rounded-3xl bg-opacity-20 backdrop-filter backdrop-blur-lg`} // Responsive size and padding
          >
            Certifications
          </h2>
          <p
            className={`${montserrat.className} text-base md:text-lg lg:text-xl text-center text-gray-700 dark:text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto border-b border-gray-200 dark:border-gray-700 pb-6 md:pb-8`} // Responsive font size, improved color contrast
            style={{ boxShadow: "0 4px 10px -5px rgba(128, 128, 128, 0.3)" }}
          >
            My professional certifications and qualifications, validating my
            expertise.
          </p>
          <div className="w-full max-w-5xl mx-auto mb-12">
            {/* Assuming Certifications handles responsiveness internally */}
            <Certifications />
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          ref={contactRef}
          initial={{ opacity: 0, y: 50 }}
          animate={contactControls}
          className="py-10 md:py-16" // Adjusted padding
        >
          <h2
            className={`${orbitron.className} text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 p-4 sm:p-6 rounded-3xl bg-opacity-20 backdrop-filter backdrop-blur-lg`} // Responsive size and padding
          >
            Contact Me
          </h2>
          <p
            className={`${montserrat.className} text-base md:text-lg lg:text-xl text-center text-gray-700 dark:text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto border-b border-gray-200 dark:border-gray-700 pb-6 md:pb-8`} // Responsive font size, improved color contrast
            style={{ boxShadow: "0 4px 10px -5px rgba(128, 128, 128, 0.3)" }}
          >
            Get in touch with me for collaborations or inquiries.
          </p>
          <div className="w-full max-w-3xl mx-auto mb-12">
            {" "}
            {/* Adjusted max-width for contact card */}
            <Contactcard />
          </div>
        </motion.div>
      </div>{" "}
      {/* End Sections Wrapper */}
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
