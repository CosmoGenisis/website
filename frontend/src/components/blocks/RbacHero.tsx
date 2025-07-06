"use client";
import { motion } from "framer-motion";
import { EyeOff, Shield } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";

export function RbacHero() {
  const [mousePath, setMousePath] = useState<{ x: number; y: number }[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const shieldRef = useRef<HTMLDivElement>(null);
  const fadeTimeout = useRef<number | null>(null); 

  // Mouse move handler
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!shieldRef.current) return;
    const rect = shieldRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePath((path) => [...path, { x, y }].slice(-40)); // keep last 40 points
    setIsDrawing(true);
    // Cancel fade out if moving again
    if (fadeTimeout.current) {
      clearTimeout(fadeTimeout.current);
      fadeTimeout.current = null;
    }
  };

  // Mouse leave handler
  const handleMouseLeave = () => {
    setIsDrawing(false);
    // Start fade out
    const fade = () => {
      setMousePath((path) => {
        if (path.length > 2) {
          fadeTimeout.current = window.setTimeout(fade, 16);
          return path.slice(1);
        } else {
          fadeTimeout.current = null;
          return [];
        }
      });
    };
    fadeTimeout.current = window.setTimeout(fade, 16);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (fadeTimeout.current) clearTimeout(fadeTimeout.current);
    };
  }, []);

  // Path string for SVG
  const pathStr =
    mousePath.length > 1
      ? "M" +
        mousePath
          .map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`)
          .join(" L")
      : "";

  return (
    <div className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Animated SVG Lines */}
      <svg
        className="absolute inset-0 w-full h-lg pointer-events-none"
        width="100%"
        height="100%"
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ zIndex: 1 }}
      >
        <motion.path
          d="M0 200 Q400 300 800 300 Q1200 300 1440 400"
          stroke="url(#line1)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M0 300 Q400 200 800 350 Q1200 500 1440 350"
          stroke="url(#line2)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
        />
        <motion.path
          d="M0 400 Q400 400 800 250 Q1200 100 1440 300"
          stroke="url(#line3)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.8, ease: "easeInOut", delay: 0.4 }}
        />
        <defs>
          <linearGradient id="line1" x1="0" y1="0" x2="1440" y2="600" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" />
            <stop offset="1" stopColor="#facc15" />
          </linearGradient>
          <linearGradient id="line2" x1="0" y1="0" x2="1440" y2="600" gradientUnits="userSpaceOnUse">
            <stop stopColor="#818cf8" />
            <stop offset="1" stopColor="#fbbf24" />
          </linearGradient>
          <linearGradient id="line3" x1="0" y1="0" x2="1440" y2="600" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f472b6" />
            <stop offset="1" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
      </svg>

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col justify-center pl-8 md:pl-32 pr-8 mt-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#18181b] text-gray-200/80 text-base font-medium shadow border border-gray-700/60 backdrop-blur">
            <EyeOff className="w-6 h-6 opacity-70" />
            <span className="font-semibold text-white text-2xl">Currently</span>
            <span className="opacity-70 text-2xl">in stealth mode</span>
          </span>
        </motion.div>
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-7xl md:text-8xl font-bold mb-8"
        >
          <span className="bg-gradient-to-r from-[#fffbe9] via-[#ffe082] to-[#facc15] bg-clip-text text-transparent drop-shadow-lg">
            RBAC System
          </span>
        </motion.h1>
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl text-gray-200/90 max-w-2xl mb-4"
        >
          Role-based access control, task delegation,<br />
          escalation flows
        </motion.p>
      </div>

      {/* Shield Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 flex items-center justify-center"
        style={{ minWidth: 440, minHeight: 440, marginRight: "6vw" }}
      >
        <div
          ref={shieldRef}
          className="relative bg-[#18181b] rounded-3xl shadow-2xl flex items-center justify-center w-[540px] h-[540px] overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Glow */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-56 h-56 bg-yellow-400/20 rounded-full blur-2xl" />
          {/* Shield Icon */}
          <Shield className="w-56 h-56 text-yellow-200/60" />
          {/* Keyhole */}
          <svg
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            width="80"
            height="80"
            viewBox="0 0 40 40"
            fill="none"
          >
            <circle cx="20" cy="18" r="5" fill="#444" />
            <rect x="17" y="22" width="6" height="12" rx="3" fill="#444" />
          </svg>
          {/* Mouse Path Effect */}
          
        </div>
      </motion.div>
    </div>
  );
}