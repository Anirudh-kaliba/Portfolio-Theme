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
import { DATA } from "@/data/resume";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaJava,
  FaFire,
} from "react-icons/fa";

// ✅ Icon mapping based on skill names
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

// ✅ Background color mapping
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

const SkillsSection = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="w-full py-20 flex justify-center">
      {/* ✅ Icons Wrapper */}
      <div className="flex gap-10 flex-wrap justify-center">
        {DATA.skills.map((skill, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center"
            onMouseEnter={() => setHovered(skill)}
            onMouseLeave={() => setHovered(null)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
          >
            {/* ✅ Clean Icon */}
            <div className="p-6 rounded-full shadow-lg cursor-pointer transition-transform hover:scale-110 bg-transparent">
              <div className="text-6xl text-gray-700 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-300">
                {ICON_MAP[skill] || <FaFire />}
              </div>
            </div>

            {/* ✅ Skill Name */}
            <span className="text-gray-600 mt-3 text-xl font-medium dark:text-gray-400">
              {skill}
            </span>

            {/* ✅ Hidden Card Effect */}
            <AnimatePresence>
              {hovered === skill && (
                <motion.div
                  className={`absolute top-[-150px] left-1/2 -translate-x-1/2 w-[300px] h-[150px] p-4 rounded-xl shadow-xl text-white z-50 ${
                    COLOR_MAP[skill] || "bg-gray-700"
                  }`}
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
    </div>
  );
};

export default SkillsSection;
