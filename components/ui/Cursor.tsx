"use client";

import React, { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useReducedMotion } from "motion/react";

export type CursorMode = "default" | "link" | "button" | "project" | "lab" | "text" | "hidden";

function subscribePointer(callback: () => void) {
  const mql = window.matchMedia("(pointer: fine)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getPointerSnapshot() {
  return typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;
}

function getPointerServerSnapshot() {
  return false;
}

export function Cursor() {
  const isPointerDevice = useSyncExternalStore(
    subscribePointer,
    getPointerSnapshot,
    getPointerServerSnapshot
  );

  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorMode, setCursorMode] = useState<CursorMode>("default");
  const [customText, setCustomText] = useState<string>("");
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isPointerDevice || shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorTarget) {
        const mode = cursorTarget.getAttribute("data-cursor") as CursorMode;
        const text = cursorTarget.getAttribute("data-cursor-text") || "";
        setCursorMode(mode);
        setCustomText(text);
        return;
      }

      if (target.closest("a")) {
        setCursorMode("link");
        setCustomText("");
        return;
      }

      if (target.closest("button")) {
        setCursorMode("button");
        setCustomText("");
        return;
      }

      setCursorMode("default");
      setCustomText("");
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isPointerDevice, shouldReduceMotion]);

  if (!isPointerDevice || shouldReduceMotion || !isVisible) {
    return null;
  }

  const getCursorVariants = () => {
    switch (cursorMode) {
      case "project":
        return {
          width: 72,
          height: 72,
          backgroundColor: "#0047FF",
          borderColor: "#0047FF",
          opacity: 0.95,
        };
      case "lab":
        return {
          width: 64,
          height: 64,
          backgroundColor: "#111111",
          borderColor: "#0047FF",
          opacity: 0.9,
        };
      case "link":
      case "button":
        return {
          width: 44,
          height: 44,
          backgroundColor: "rgba(0, 71, 255, 0.12)",
          borderColor: "#0047FF",
          opacity: 1,
        };
      case "text":
        return {
          width: 4,
          height: 24,
          backgroundColor: "#0047FF",
          borderColor: "#0047FF",
          opacity: 1,
        };
      default:
        return {
          width: 28,
          height: 28,
          backgroundColor: "transparent",
          borderColor: "rgba(18, 18, 18, 0.25)",
          opacity: 0.8,
        };
    }
  };

  return (
    <aside
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none"
    >
      {/* Precision center dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[var(--text-primary)]"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          opacity: cursorMode === "project" || cursorMode === "lab" ? 0 : 1,
        }}
        transition={{ type: "spring", damping: 45, stiffness: 600, mass: 0.05 }}
      />

      {/* Trailing interactive ring / badge */}
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center border text-white font-mono text-[9px] tracking-widest uppercase font-medium"
        animate={{
          x: mousePosition.x - (getCursorVariants().width || 28) / 2,
          y: mousePosition.y - (getCursorVariants().height || 28) / 2,
          ...getCursorVariants(),
        }}
        transition={{ type: "spring", damping: 28, stiffness: 280, mass: 0.2 }}
      >
        {(cursorMode === "project" || cursorMode === "lab") && (
          <span>{customText || (cursorMode === "project" ? "VIEW" : "TEST")}</span>
        )}
      </motion.div>
    </aside>
  );
}
