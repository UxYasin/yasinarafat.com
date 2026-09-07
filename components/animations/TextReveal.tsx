"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  splitBy?: "word" | "line";
}

export function TextReveal({
  text,
  className,
  delay = 0,
  as: Component = "h2",
  splitBy = "word",
}: TextRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <Component className={className}>{text}</Component>;
  }

  const items = splitBy === "word" ? text.split(" ") : text.split("\n");

  return (
    <Component className={cn("overflow-hidden inline-flex flex-wrap gap-x-[0.25em]", className)}>
      {items.map((item, index) => (
        <span key={index} className="inline-block overflow-hidden pb-[0.05em]">
          <motion.span
            initial={{ y: "105%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: delay + index * 0.04,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block"
          >
            {item}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
