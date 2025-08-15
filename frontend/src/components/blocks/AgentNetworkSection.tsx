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
    
        
    {subSection && (
        <section className="w-full max-w-[90%] mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-28">
          {/* Left: Image */}
          <div className="w-full flex justify-center">
            <img
              src={subSection.image}
              alt="Agent Collaboration"
              className="w-full max-w-[80%] rounded-2xl object-cover shadow-lg"
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