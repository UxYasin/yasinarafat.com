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
          width: 56,
          height: 56,
          backgroundColor: "#111111",
          borderColor: "#111111",
          color: "#FBE7CF",
          opacity: 1,
        };
      case "lab":
        return {
          width: 58,
          height: 58,
          backgroundColor: "#111111",
          borderColor: "#111111",
          color: "#B9E3D0",
          opacity: 1,
        };
      case "link":
      case "button":
        return {
          width: 36,
          height: 36,
          backgroundColor: "rgba(17, 17, 17, 0.08)",
          borderColor: "#111111",
          color: "#111111",
          opacity: 1,
        };
      default:
        return {
          width: 14,
          height: 14,
          backgroundColor: "transparent",
          borderColor: "rgba(17, 17, 17, 0.3)",
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
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[var(--os-ink)]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: cursorMode === "project" || cursorMode === "lab" ? 0 : 1,
        }}
        transition={{ type: "spring", damping: 45, stiffness: 600, mass: 0.05 }}
      />

      {/* Trailing interactive ring / badge */}
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center border font-sans text-[10px] tracking-wider uppercase font-semibold"
        animate={{
          x: mousePosition.x - (getCursorVariants().width || 14) / 2,
          y: mousePosition.y - (getCursorVariants().height || 14) / 2,
          ...getCursorVariants(),
        }}
        transition={{ type: "spring", damping: 28, stiffness: 320, mass: 0.18 }}
      >
        {(cursorMode === "project" || cursorMode === "lab") && (
          <span>{customText || (cursorMode === "project" ? "VIEW" : "TEST")}</span>
        )}
      </motion.div>
    </aside>
  );
}
