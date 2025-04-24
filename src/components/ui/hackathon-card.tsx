"use client";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";

interface Hackathon {
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
            className="relative ml-10 py-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
              <Avatar className="border size-12 m-auto">
                <AvatarImage
                  src={hackathon.image}
                  alt={hackathon.title}
                  className="object-contain"
                />
                <AvatarFallback>{hackathon.title[0]}</AvatarFallback>
              </Avatar>
            </div>

            <div className="flex flex-1 justify-between gap-1">
              <div className="flex flex-col">
                <h2 className="font-semibold leading-none">
                  {hackathon.title}
                </h2>
                {hackathon.location && (
                  <p className="text-sm text-muted-foreground">
                    {hackathon.location}
                  </p>
                )}
                {hackathon.description && (
                  <span className="prose dark:prose-invert text-sm text-muted-foreground">
                    {hackathon.description}
                  </span>
                )}
              </div>

              {hackathon.dates && (
                <time className="text-xs text-muted-foreground ml-auto">
                  {hackathon.dates}
                </time>
              )}
            </div>

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
