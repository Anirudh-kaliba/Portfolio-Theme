"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { Button } from "@/components/button";
import { DATA } from "@/data/resume";

const bgColors = [
  "from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-900",
  "from-green-100 to-green-200 dark:from-green-800 dark:to-green-900",
  "from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-900",
  "from-pink-100 to-pink-200 dark:from-pink-800 dark:to-pink-900",
];

export function ProjectCards() {
  const initialVisible = 6;
  const [visibleCount, setVisibleCount] = useState(initialVisible);

  const handleLoadMore = () => {
    setVisibleCount(DATA.projects.length);
  };

  const handleShowLess = () => {
    setVisibleCount(initialVisible);
  };

  const visibleProjects = DATA.projects.slice(0, visibleCount);
  const allVisible = visibleCount >= DATA.projects.length;

  return (
    <div className="flex flex-col items-center justify-center w-full px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl w-full">
        {visibleProjects.map((project, index) => (
          <Card
            key={index}
            className={`w-full max-w-[600px] h-[600px] flex flex-col justify-between border-none bg-gradient-to-br ${
              bgColors[index % bgColors.length]
            } shadow-lg rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl p-6 text-center`}
          >
            <CardHeader className="relative pb-2">
              <CardTitle className="text-xl font-bold uppercase tracking-wide text-gray-900 dark:text-white truncate">
                {project.title}
              </CardTitle>
              <p className="text-sm text-gray-600 dark:text-gray-300 truncate">
                {project.dates}
              </p>
            </CardHeader>

            <CardContent className="flex flex-col justify-between flex-grow">
              <div className="space-y-4">
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex gap-2 flex-wrap justify-center">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs text-white bg-gray-700 dark:bg-gray-600 rounded-full truncate"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 justify-center flex-wrap">
                  {project.links?.map((link, i) => (
                    <Button
                      key={i}
                      asChild
                      className="px-4 py-1.5 text-white bg-blue-600 dark:bg-blue-400 dark:text-gray-900 rounded-md shadow-md hover:bg-blue-500 hover:dark:bg-blue-300 transition-all"
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="truncate"
                      >
                        {link.type}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>

              {project.video && (
                <div className="mt-4 flex justify-center">
                  <div className="relative w-full max-w-[350px] aspect-[4/3] bg-black rounded-lg overflow-hidden border-2 border-blue-400 shadow-md">
                    <video
                      src={project.video}
                      autoPlay
                      muted
                      loop
                      controls
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex gap-4">
        {!allVisible && (
          <Button
            onClick={handleLoadMore}
            className="px-8 py-6 bg-indigo-600 text-white rounded-full font-medium shadow-md hover:bg-indigo-700 transition-all duration-300"
          >
            Load More
          </Button>
        )}
        {visibleCount > initialVisible && (
          <Button
            onClick={handleShowLess}
            className="px-8 py-6 bg-indigo-600 text-white rounded-full font-medium shadow-md hover:bg-red-600 transition-all duration-300"
          >
            Show Less
          </Button>
        )}
      </div>
    </div>
  );
}
