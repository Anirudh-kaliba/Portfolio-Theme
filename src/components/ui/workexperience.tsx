"use client";

import { DATA } from "@/data/resume";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type Work = {
  company: string;
  href?: string;
  location?: string;
  title: string;
  logoUrl?: string;
  start: string;
  end: string;
  description: string;
};

export default function WorkExperience() {
  const INITIAL_VISIBLE_COUNT = 3; // Starting number of visible cards
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const handleLoadMore = () => {
    setVisibleCount(DATA.work.length); // Show all cards
  };

  const handleShowLess = () => {
    setVisibleCount(INITIAL_VISIBLE_COUNT); // Collapse back to initial state
  };

  return (
    <div className="z-10 w-full max-w-5xl mb-16">
      <div className="flex flex-col gap-y-6">
        {DATA.work.slice(0, visibleCount).map((work: Work, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{
              y: -8,
              scale: 1.03,
              boxShadow: "0px 12px 24px rgba(0, 128, 255, 0.2)",
            }}
            className="border border-gray-700 p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 transition-all duration-300 cursor-pointer"
          >
            {/* Top Section with Logo + Company + Dates */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-4">
                {work.logoUrl && (
                  <a
                    href={work.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 dark:bg-gray-700 overflow-hidden"
                  >
                    <Image
                      src={work.logoUrl}
                      alt={work.company}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </a>
                )}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {work.company}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {work.title}
                  </p>
                </div>
              </div>

              {/* Dates Section - Positioned at Top Right */}
              <div className="ml-auto text-right">
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  {work.start} - {work.end}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {work.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Button Container */}
      <div className="flex justify-center mt-8">
        {visibleCount < DATA.work.length ? (
          <motion.button
            onClick={handleLoadMore}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#4F46E5",
              color: "#ffffff",
              boxShadow: "0px 8px 16px rgba(79, 70, 229, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium shadow-md hover:bg-indigo-700 transition-all duration-300"
          >
            Load More
          </motion.button>
        ) : (
          <motion.button
            onClick={handleShowLess}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#E53E3E", // Red color for "Show Less"
              color: "#ffffff",
              boxShadow: "0px 8px 16px rgba(229, 62, 62, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-red-500 text-white rounded-full font-medium shadow-md hover:bg-red-600 transition-all duration-300"
          >
            Show Less
          </motion.button>
        )}
      </div>
    </div>
  );
}
