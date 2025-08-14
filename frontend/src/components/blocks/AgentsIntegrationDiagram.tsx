import React from "react";
import logo from "@/images/Logo.png"; // Replace with your actual logo path
import { RefreshCw, Clock, Sliders } from "lucide-react";


const cardStyle = {
  background: "white",
  boxShadow: "0 4px 16px rgba(59,130,246,0.08)",
  borderRadius: "12px",
  padding: "0.5rem 1rem",
  margin: "0.5rem 0",
};

export function AgentsIntegrationDiagram() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-blue-200 flex flex-col items-center px-4 py-12">
      {/* Tag */}
      <div className="flex justify-center mb-4">
        <span className="px-6 py-2 rounded-full bg-blue-500 text-white text-lg font-semibold shadow">
          Integrations
        </span>
      </div>
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 leading-tight">
        Empowering <span className="text-black-600">Autonomous</span><br />
        AI Agents To Work Together
      </h1>
      <p className="text-lg md:text-xl text-gray-600 text-center mb-12 max-w-[50%]">
        Connect effortlessly with agents, recruiters, and candidates – enabling smooth collaboration and streamlined workflows across your hiring process.
      </p>
      {/* Bottom Features */}
      <div className="flex flex-col md:flex-row gap-8 mt-12 items-center justify-center">
        <div className="flex items-center gap-2">
          <RefreshCw size={48} className="text-gray-700" />
          <span className="text-gray-700 text-2xl">Seamless Automation</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={48} className="text-gray-700" />
          <span className="text-gray-700 text-2xl">Real-Time Data Sync</span>
        </div>
        <div className="flex items-center gap-2">
          <Sliders size={48} className="text-gray-700" />
          <span className="text-gray-700 text-2xl">Customizable Solutions</span>
        </div>
      </div>
      </div>
  );
}