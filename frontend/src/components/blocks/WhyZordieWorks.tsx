import React from "react";
import { BadgeCheck, FileText, UserCog, SlidersHorizontal, Flag, Droplet } from "lucide-react";

interface Capability {
  icon?: React.ReactNode;
  text: string;
}

interface WhyZordieWorksProps {
  image: string;
  badge?: string;
  heading: React.ReactNode;
  capabilities: Capability[];
}

export function WhyZordieWorks({
  image,
  badge = "Key Capabilities",
  heading,
  capabilities,
}: WhyZordieWorksProps) {
  // Default icons for up to 6 capabilities
  const icons = [
    <BadgeCheck className="w-5 h-5" />,
    <FileText className="w-5 h-5" />,
    <UserCog className="w-5 h-5" />,
    <SlidersHorizontal className="w-5 h-5" />,
    <Flag className="w-5 h-5" />,
    <Droplet className="w-5 h-5" />,
  ];

  return (
    <section className="min-h-screen w-full bg-white flex items-center justify-center py-8 px-2 sm:px-6">
      <div className="w-full max-w-[1500px] mx-auto bg-white rounded-3xl p-4 sm:p-8 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        {/* Left: Image */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-[620px] aspect-square rounded-2xl overflow-hidden bg-[#f3fbff] flex items-center justify-center shadow">
            <img
              src={image}
              alt="Why Zordie Works"
              className="object-cover w-full h-full"
              draggable={false}
            />
          </div>
        </div>
        {/* Right: Content */}
        <div className="flex-1 flex flex-col items-start justify-center w-full max-w-xl">
          <span className="inline-flex items-center px-4 py-2 mb-4 rounded-full bg-gray-100 text-gray-700 font-medium shadow text-sm">
            {badge}
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold mb-8 leading-tight">{heading}</h2>
          <div className="flex flex-col gap-4 w-full">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-4 py-3 rounded-full bg-gray-50 border border-gray-200 text-gray-800 font-medium text-lg w-full"
              >
                <span className="text-gray-500">{cap.icon || icons[idx % icons.length]}</span>
                <span className="truncate">{cap.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}