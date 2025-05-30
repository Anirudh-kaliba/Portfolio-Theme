"use client";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import { Badge } from "@/components/badge";
import Link from "next/link";
import { motion } from "framer-motion";

export interface Hackathon {
  title: string;
  description: string;
  dates: string;
  location: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
}

interface Props {
  hackathons: Hackathon[];
}

export function HackathonList({ hackathons }: Props) {
  const [visibleCount, setVisibleCount] = useState(3);
  const isAllVisible = visibleCount >= hackathons.length;

  const toggleVisibility = () => {
    setVisibleCount(isAllVisible ? 3 : hackathons.length);
  };

  return (
    <div>
      <ul>
        {hackathons.slice(0, visibleCount).map((hackathon, index) => (
          <motion.li
            key={index}
            className="relative sm:ml-10 py-4 flex flex-col sm:flex-row sm:items-start"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Avatar Section */}
            <div className="flex justify-center sm:absolute sm:-left-16 sm:top-4">
              <Avatar className="border size-12">
                <AvatarImage
                  src={hackathon.image}
                  alt={hackathon.title}
                  className="object-contain"
                />
                <AvatarFallback>{hackathon.title[0]}</AvatarFallback>
              </Avatar>
            </div>

            {/* Content Section */}
            <div className="flex flex-col sm:flex-row sm:justify-between gap-2 w-full overflow-hidden mt-4 sm:mt-0">
              {/* Left: Title, Location, Description */}
              <div className="flex flex-col min-w-0 items-center sm:items-start text-center sm:text-left">
                <h2 className="font-semibold leading-tight truncate">
                  {hackathon.title}
                </h2>
                {hackathon.location && (
                  <p className="text-sm text-muted-foreground truncate">
                    {hackathon.location}
                  </p>
                )}
                {hackathon.description && (
                  <p className="text-sm text-muted-foreground break-words text-justify sm:text-left">
                    {hackathon.description}
                  </p>
                )}
              </div>

              {/* Right: Dates */}
              {hackathon.dates && (
                <time className="text-xs text-muted-foreground whitespace-nowrap self-start sm:self-center">
                  {hackathon.dates}
                </time>
              )}
            </div>

            {/* Links */}
            {hackathon.links && hackathon.links.length > 0 && (
              <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
                {hackathon.links.map((link, idx) => (
                  <Link href={link.href} key={idx}>
                    <Badge title={link.title} className="flex gap-2">
                      {link.icon}
                      {link.title}
                    </Badge>
                  </Link>
                ))}
              </div>
            )}
          </motion.li>
        ))}
      </ul>

      {/* Load More Button */}
      <div className="flex justify-center mt-4">
        <motion.button
          onClick={toggleVisibility}
          whileHover={{
            scale: 1.05,
            backgroundColor: isAllVisible ? "#E53E3E" : "#4F46E5",
            boxShadow: isAllVisible
              ? "0px 8px 16px rgba(229, 62, 62, 0.5)"
              : "0px 8px 16px rgba(79, 70, 229, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          className={`text-white px-7 py-3 rounded-full font-medium shadow-md transition-all duration-300 ${
            isAllVisible
              ? "bg-red-500 hover:bg-red-600"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          {isAllVisible ? "Show Less" : "Load More"}
        </motion.button>
      </div>
    </div>
  );
}
