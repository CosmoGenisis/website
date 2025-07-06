"use client";
import { motion } from "framer-motion";
import { BadgeCheck, Rocket, Sun, Gauge, FileText, Shield } from "lucide-react";

const features = [
  {
    icon: <BadgeCheck className="w-7 h-7 text-violet-500" />,
    title: "Orchestration",
    desc: "Dynamically manages and connects Optimus, Monica, Emma, Onix, Maxi, and Laxmi.",
  },
  {
    icon: <Rocket className="w-7 h-7 text-violet-500" />,
    title: "Workflow Construction",
    desc: "Builds workflows via chat input—no need for drag-and-drop. Manual override available.",
  },
  {
    icon: <Sun className="w-7 h-7 text-violet-500" />,
    title: "Agent Supervision",
    desc: "Detects conflicts, hallucinations, or failures, and overrides the responsible agent.",
  },
  {
    icon: <Gauge className="w-7 h-7 text-violet-500" />,
    title: "System Copilot",
    desc: `Converts simple commands (e.g., “Hire 5 designers”) into a multi-agent hiring-to-onboarding pipeline.`,
  },
  {
    icon: <FileText className="w-7 h-7 text-violet-500" />,
    title: "Offer Letter & Docs",
    desc: "Drafts, verifies, and dispatches documents like offers, NDAs, and HR policies.",
  },
  {
    icon: <Shield className="w-7 h-7 text-violet-500" />,
    title: "Context Keeper",
    desc: "Maintains memory across agents and workflows via MCP (Model Context Protocol).",
  },
];

const pills1 = [
  "Self-Healing Systems",
  "System-Wide Search",
  "Multi-Agent Threading",
  "Auto-Updating Dashboards",
  "Autonomous Workflow Execution",
  "Secure Transactions",
  "AI-Powered Onboarding & Retention",
  "Intelligent Interview & Assessment Tools"
];
const pills2 = [
  "System-Wide Search",
  "Secure Transactions",
  "AI-Powered Onboarding & Retention",
  "Intelligent Interview & Assessment Tools",
  "Self-Healing Systems",
  "System-Wide Search",
  "Multi-Agent Threading",
  "Auto-Updating Dashboards",
  "Autonomous Workflow Execution"
];

const marqueeDuration = 22; // seconds

export function RbacFeaturesPage() {
  return (
    <div className="min-h-4xl bg-black flex flex-col items-center py-16 px-2">
      {/* Marquee Pills Row 1 (left to right) */}
      <div className="relative w-full overflow-x-hidden mb-16 mt-16" style={{ height: 60 }}>
        {/* Gradient fade left/right */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 z-10 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 z-10 bg-gradient-to-l from-black to-transparent" />
        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: marqueeDuration,
            ease: "linear",
          }}
          style={{ willChange: "transform" }}
        >
          {[...pills1, ...pills1].map((pill, i) => (
            <div
              key={pill + i}
              className="flex items-center gap-2 px-8 py-3 rounded-full bg-white/90 shadow text-gray-900 font-medium text-base border border-gray-200 transition-all duration-300 mx-4 whitespace-nowrap"
            >
              <span className="text-gray-400 text-xl">•</span>
              {pill}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee Pills Row 2 (right to left) */}
      <div className="relative w-full overflow-x-hidden" style={{ height: 60 }}>
        {/* Gradient fade left/right */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 z-10 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 z-10 bg-gradient-to-l from-black to-transparent" />
        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: marqueeDuration,
            ease: "linear",
          }}
          style={{ willChange: "transform" }}
        >
          {[...pills2, ...pills2].map((pill, i) => (
            <div
              key={pill + i}
              className="flex items-center gap-2 px-8 py-3 rounded-full bg-white/90 shadow text-gray-900 font-medium text-base border border-gray-200 transition-all duration-300 mx-4 whitespace-nowrap"
            >
              <span className="text-gray-400 text-xl">•</span>
              {pill}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}