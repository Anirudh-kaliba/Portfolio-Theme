"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, ReactNode } from "react";

import { Particles } from "../magicui/particles";

type ParticlesDemoProps = {
  children?: ReactNode;
};

export function ParticlesDemo({ children }: ParticlesDemoProps) {
  const { resolvedTheme } = useTheme();
  const initialColor = resolvedTheme === "dark" ? "#ffffff" : "#000000";
  const [color, setColor] = useState<string>(initialColor);

  useEffect(() => {
    if (resolvedTheme) {
      setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
    }
  }, [resolvedTheme]);

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background">
      <Particles
        className="absolute inset-0 z-0"
        quantity={150}
        ease={80}
        color={color}
        refresh
      />
      <div className="z-10">{children}</div>
    </div>
  );
}
