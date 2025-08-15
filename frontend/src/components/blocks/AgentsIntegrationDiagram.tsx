import React from "react";
import { RefreshCw, Clock, Sliders } from "lucide-react";

export function AgentsIntegrationDiagram() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-blue-200 flex flex-col items-center px-[4%] py-[8vh]">
      {/* Tag */}
      <div className="flex justify-center mb-[2vh]">
        <span className="px-[2vw] py-[1vh] rounded-full bg-blue-500 text-white font-semibold shadow text-[max(1.2vw,0.95rem)]">
          Integrations
        </span>
      </div>

      {/* Heading */}
      <h1 className="font-bold text-center mb-[2vh] leading-tight text-[max(5vw,2rem)]">
        Empowering <span className="text-black-600">Autonomous</span>
        <br />
        AI Agents To Work Together
      </h1>

      <p className="text-gray-600 text-center mb-[5vh] max-w-[60ch] text-[max(1.4vw,1rem)]">
        Connect effortlessly with agents, recruiters, and candidates – enabling
        smooth collaboration and streamlined workflows across your hiring process.
      </p>

      {/* Bottom Features */}
      <div className="flex flex-col md:flex-row gap-[3vw] mt-[6vh] items-center justify-center">
        <div className="flex items-center gap-[1vw]">
          <RefreshCw size="max(3.5vw,28px)" className="text-gray-700" />
          <span className="text-gray-700 text-[max(1.6vw,1rem)] font-medium">
            Seamless Automation
          </span>
        </div>

        <div className="flex items-center gap-[1vw]">
          <Clock size="max(3.5vw,28px)" className="text-gray-700" />
          <span className="text-gray-700 text-[max(1.6vw,1rem)] font-medium">
            Real-Time Data Sync
          </span>
        </div>

        <div className="flex items-center gap-[1vw]">
          <Sliders size="max(3.5vw,28px)" className="text-gray-700" />
          <span className="text-gray-700 text-[max(1.6vw,1rem)] font-medium">
            Customizable Solutions
          </span>
        </div>
      </div>
    </div>
  );
}
