"use client";
import { motion } from "framer-motion";
import img1 from "@/images/agent1.png";
import img2 from "@/images/agent2.png";
import img3 from "@/images/agent3.png";
import img4 from "@/images/agent4.png";
import img5 from "@/images/agent5.png";
import img6 from "@/images/agent6.png";
import imgCenter from "@/images/agent-center.png";

// Example agent data (replace with your real images and info)
const agents = [
  {
    name: "Monica",
    desc: "Monica is just not a simple agent -she is a cultural agent.",
    img: img1,
  },
  {
    name: "Ema",
    desc: "Emma is the technical agent who makes your life easy just by...",
    img: img6,
  },
  {
    name: "Laxmi",
    desc: "LAXMI is the autonomous finance AI agent within Zordie AI,...",
    img: img2,
  },
  {
    name: "Onix",
    desc: "ONIX is Zordie AI’s autonomous Candidate Relationship...",
    img: img3,
  },
  {
    name: "Prime HR",
    desc: "Prime is not just an AI agent -it's a command centre and ...",
    img: imgCenter,
  },
];

const marqueeDuration = 30; // seconds

export function OtherAgents() {
  return (
    <div className="min-h-screen bg-[#fcfcfd] flex flex-col items-center py-12">
      {/* Badge */}
      <div className="mb-4 flex justify-center">
        <span className="px-4 py-1 rounded-full bg-gray-100 text-gray-700 font-medium text-base shadow flex items-center gap-2">
          <svg width="18" height="18" fill="none"><circle cx="9" cy="9" r="8" stroke="#64748b" strokeWidth="2"/><path d="M6 9h6M9 6v6" stroke="#64748b" strokeWidth="2" strokeLinecap="round"/></svg>
          Agents
        </span>
      </div>
      {/* Heading */}
      <h1 className="text-5xl font-bold text-gray-900 mb-2 text-center">Other Agents</h1>
      <p className="text-gray-600 text-lg mb-10 text-center">
        Discover our other agents that make Zordie AI worth it.
      </p>

      {/* Marquee Row */}
      <div className="relative w-full overflow-x-hidden py-6">
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
          {[...agents, ...agents].map((agent, i) => (
            <div
              key={agent.name + i}
              className="w-[370px] min-w-[370px] h-[410px] bg-white rounded-[2rem] shadow-xl border border-gray-200 flex flex-col justify-between overflow-hidden mx-2"
            >
              <div className="p-6 pb-2 flex-1 flex flex-col">
                <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center h-[220px] mb-4 border-2 border-gray-200">
                  <img
                    src={agent.img}
                    alt={agent.name}
                    className="object-contain h-[180px] w-full mx-auto"
                    draggable={false}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{agent.name}</h3>
                  <p className="text-gray-500 text-lg leading-snug">{agent.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        {/* Gradient fade left/right */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 z-10 bg-gradient-to-r from-[#fcfcfd] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 z-10 bg-gradient-to-l from-[#fcfcfd] to-transparent" />
      </div>
    </div>
  );
}