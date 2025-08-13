import React from "react";
import { motion } from "framer-motion";

interface AgentCard {
  label: string;
  image: string;
}

interface SubAgent {
  icon: string;
  name: string;
  description: string;
}

interface AgentNetworkSectionProps {
  badge: React.ReactNode;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  centerLogo: string;
  topAgents: AgentCard[];
  bottomAgents: AgentCard[];
  leftCard: AgentCard;
  rightCard: AgentCard;
  backgroundGradient?: string;
  subSection?: {
    image: string;
    badge: React.ReactNode;
    title: React.ReactNode;
    description: React.ReactNode;
    agents: SubAgent[];
  };
}

export function AgentNetworkSection({
  badge,
  title,
  subtitle,
  centerLogo,
  topAgents,
  bottomAgents,
  leftCard,
  rightCard,
  backgroundGradient = "linear-gradient(120deg, #f8fafc 0%, #f1f5f9 100%)",
  subSection,
}: AgentNetworkSectionProps) {
  return (
    <>
    <section
      className="w-full relative overflow-hidden px-4 md:px-12 py-16 md:py-32 flex flex-col items-center"
      style={{ background: backgroundGradient }}
    >
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <span className="inline-block px-4 py-2 rounded-full bg-blue-600 text-white text-base font-medium shadow border border-blue-200">
          {badge}
        </span>
      </motion.div>
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-4xl md:text-6xl font-bold text-black mb-4 text-center"
      >
        {title}
      </motion.h1>
      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-base md:text-lg text-gray-700 mb-10 text-center max-w-2xl"
      >
        {subtitle}
      </motion.p>
      {/* Network Diagram */}
      <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* SVG Lines */}
        <motion.svg
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          width="100%"
          height="340"
          viewBox="0 0 900 340"
          className="absolute left-0 top-0 w-full h-[340px] pointer-events-none z-0"
        >
          {/* Top Agents */}
          <motion.path
            d="M450 170 Q350 100 150 100"
            stroke="#a78bfa"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          />
          <motion.path
            d="M450 170 Q450 100 300 100"
            stroke="#60a5fa"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.path
            d="M450 170 Q550 100 600 100"
            stroke="#34d399"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          />
          <motion.path
            d="M450 170 Q650 100 750 100"
            stroke="#818cf8"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          />
          {/* Bottom Agents */}
          <motion.path
            d="M450 210 Q350 270 150 270"
            stroke="#fbbf24"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
          <motion.path
            d="M450 210 Q550 270 750 270"
            stroke="#f472b6"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          />
          {/* Left/Right Cards */}
          <motion.path
            d="M450 190 Q250 190 100 190"
            stroke="#38bdf8"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1.0 }}
          />
          <motion.path
            d="M450 190 Q650 190 800 190"
            stroke="#f87171"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          />
        </motion.svg>
        {/* Top Agent Cards */}
        <div className="absolute left-0 right-0 top-0 flex justify-between w-full px-2 md:px-12 z-10">
          {topAgents.map((agent, i) => (
            <motion.div
              key={agent.label}
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="bg-white rounded-2xl shadow-lg p-3 mb-2 w-24 h-24 flex items-center justify-center">
                <img src={agent.image} alt={agent.label} className="w-16 h-16 object-contain" />
              </div>
              <span className="text-base font-medium text-gray-700 text-center">{agent.label}</span>
            </motion.div>
          ))}
        </div>
        {/* Center Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="absolute left-1/2 top-[170px] -translate-x-1/2 z-20 flex flex-col items-center"
        >
          <img src={centerLogo} alt="Prime Agent" className="w-20 h-20 object-contain" />
          <span className="mt-2 text-base font-semibold text-gray-800">Prime Agent</span>
        </motion.div>
        {/* Bottom Agent Cards */}
        <div className="absolute left-0 right-0 bottom-0 flex justify-between w-full px-2 md:px-12 z-10">
          {bottomAgents.map((agent, i) => (
            <motion.div
              key={agent.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 + i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="bg-white rounded-2xl shadow-lg p-3 mb-2 w-24 h-24 flex items-center justify-center">
                <img src={agent.image} alt={agent.label} className="w-16 h-16 object-contain" />
              </div>
              <span className="text-base font-medium text-gray-700 text-center">{agent.label}</span>
            </motion.div>
          ))}
        </div>
        {/* Left Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex flex-col items-center"
        >
          <div className="bg-white rounded-2xl shadow-lg p-3 mb-2 w-24 h-24 flex items-center justify-center">
            <img src={leftCard.image} alt={leftCard.label} className="w-16 h-16 object-contain" />
          </div>
          <span className="text-base font-medium text-gray-700 text-center">{leftCard.label}</span>
        </motion.div>
        {/* Right Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex flex-col items-center"
        >
          <div className="bg-white rounded-2xl shadow-lg p-3 mb-2 w-24 h-24 flex items-center justify-center">
            <img src={rightCard.image} alt={rightCard.label} className="w-16 h-16 object-contain" />
          </div>
          <span className="text-base font-medium text-gray-700 text-center">{rightCard.label}</span>
        </motion.div>
        {/* Spacer for layout */}
        <div className="h-[340px] w-full" />
      </div>
    </section>

    {subSection && (
        <section className="w-full max-w-[1400px] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="w-full flex justify-center">
            <img
              src={subSection.image}
              alt="Agent Collaboration"
              className="w-full max-w-2xl rounded-2xl object-cover shadow-lg"
            />
          </div>
          {/* Right: Content */}
          <div className="flex flex-col gap-6">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-700 text-white text-base font-medium shadow w-fit mb-2">
              {subSection.badge}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-2">{subSection.title}</h2>
            <p className="text-xl text-gray-700 mb-6">{subSection.description}</p>
            <div className="flex gap-8 flex-wrap">
              {subSection.agents.map((agent, idx) => (
                <div key={agent.name} className="flex flex-col items-center w-[280px]">
                  <img src={agent.icon} alt={agent.name} className="w-12 h-12 mb-2 object-contain rounded-xl " />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{agent.name}</h3>
                  <p className="text-gray-600 text-base text-center">{agent.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      </>
  );
}