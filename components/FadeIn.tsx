"use client";

import { motion, useReducedMotion } from "motion/react";
import React from "react";

interface FadeInProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  className?: string;
  viewportAmount?: number;
}

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className = "",
  viewportAmount = 0.2,
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  const getOffset = () => {
    switch (direction) {
      case "up":
        return { y: 30 };
      case "down":
        return { y: -30 };
      case "left":
        return { x: 30 };
      case "right":
        return { x: -30 };
      case "none":
      default:
        return {};
    }
  };

  const initial = shouldReduceMotion
    ? { opacity: 1, x: 0, y: 0 }
    : { opacity: 0, ...getOffset() };

  const animate = {
    opacity: 1,
    x: 0,
    y: 0,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: viewportAmount }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}