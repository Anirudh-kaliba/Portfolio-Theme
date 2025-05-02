"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiKubernetes,
  SiPostgresql,
  SiGo,
  SiCplusplus,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaJava,
  FaFire,
} from "react-icons/fa";
import { cn } from "@/lib/utils";
import { DATA } from "@/data/resume";

const ICON_MAP: { [key: string]: JSX.Element } = {
  React: <FaReact />,
  "Next.js": <SiNextdotjs />,
  Typescript: <SiTypescript />,
  "Node.js": <FaNodeJs />,
  Python: <FaPython />,
  Go: <SiGo />,
  Postgres: <SiPostgresql />,
  Docker: <FaDocker />,
  Kubernetes: <SiKubernetes />,
  Java: <FaJava />,
  "C++": <SiCplusplus />,
};

interface SkillsSectionProps {
  skills?: string[];
  iconSize?: string;
  cardClassName?: string;
  labelClassName?: string;
  tooltipClassName?: string;
}

const COLOR_MAP: { [key: string]: string } = {
  React: "bg-blue-500",
  "Next.js": "bg-black",
  Typescript: "bg-indigo-500",
  "Node.js": "bg-green-500",
  Python: "bg-yellow-500",
  Go: "bg-teal-500",
  Postgres: "bg-blue-700",
  Docker: "bg-blue-400",
  Kubernetes: "bg-purple-500",
  Java: "bg-red-500",
  "C++": "bg-gray-500",
};

const SkillsSection = ({
  iconSize,
  cardClassName,
  labelClassName,
  tooltipClassName,
}: SkillsSectionProps) => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const handleSkillClick = (skill: string) => {
    if (window.innerWidth < 640) {
      setSelectedSkill(skill);
      setShowModal(true);
    }
  };

  return (
    <div className="w-full py-20 flex justify-center">
      <div className="flex gap-10 flex-wrap justify-center">
        {DATA.skills.map((skill, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center"
            onMouseEnter={() => setHovered(skill)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleSkillClick(skill)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
          >
            <div
              className={cn(
                "p-6 rounded-full shadow-lg cursor-pointer transition-transform hover:scale-110 bg-transparent",
                cardClassName
              )}
            >
              <div
                className={cn(
                  "text-6xl text-gray-700 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-300",
                  iconSize
                )}
              >
                {ICON_MAP[skill] || <FaFire />}
              </div>
            </div>

            <span
              className={cn(
                "text-gray-600 mt-3 text-xl font-medium dark:text-gray-400",
                labelClassName
              )}
            >
              {skill}
            </span>

            <AnimatePresence>
              {hovered === skill && (
                <motion.div
                  className={cn(
                    `absolute top-[-170px] left-1/2 -translate-x-1/2 
                    w-[90vw] max-w-[300px] h-[150px] p-4 rounded-xl shadow-xl text-white z-50 hidden sm:block`,
                    COLOR_MAP[skill] || "bg-gray-700",
                    tooltipClassName
                  )}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 30, scale: 0.8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <h3 className="text-2xl font-bold mb-2 text-center">
                    {skill}
                  </h3>
                  <p className="text-md text-center">
                    {`${skill} is a key technology in modern development.`}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {showModal && selectedSkill && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-[90%] max-w-sm rounded-lg overflow-hidden shadow-xl"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div
                className={cn("p-6", COLOR_MAP[selectedSkill] || "bg-gray-700")}
              >
                <h3 className="text-2xl font-bold mb-2 text-white text-center">
                  {selectedSkill}
                </h3>
                <p className="text-md text-white text-center">
                  {`${selectedSkill} is a key technology in modern development.`}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 px-6 py-4">
                <button
                  className="w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 font-semibold transition"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkillsSection;
