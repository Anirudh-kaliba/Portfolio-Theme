"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface TypingAnimationProps extends MotionProps {
  children: string[];
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
  startOnView?: boolean;
  lineDelay?: number; // New prop for delay between lines
}

export default function TypingAnimation({
  children,
  className,
  duration = 100,
  delay = 0,
  as: Component = "div",
  startOnView = false,
  lineDelay = 1000, // Default 1s delay between lines
  ...props
}: TypingAnimationProps) {
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!startOnView) {
      const startTimeout = setTimeout(() => {
        setStarted(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setStarted(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, startOnView]);

  useEffect(() => {
    if (!started) return;

    let lineIndex = 0;
    let charIndex = 0;
    let tempLines: string[] = [];

    const typingEffect = setInterval(() => {
      if (lineIndex < children.length) {
        const currentLine = children[lineIndex];
        if (charIndex < currentLine.length) {
          tempLines[lineIndex] = currentLine.substring(0, charIndex + 1);
          setDisplayedLines([...tempLines]);
          charIndex++;
        } else {
          charIndex = 0;
          lineIndex++;
          setTimeout(() => {}, lineDelay); // Delay before typing next line
        }
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [children, duration, started, lineDelay]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn(
        "z-10 text-6xl font-bold text-center text-gray-900 dark:text-white mb-8 leading-[5rem] tracking-[-0.02em]",
        className
      )}
      {...props}
    >
      {displayedLines.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
    </MotionComponent>
  );
}
