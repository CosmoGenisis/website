import { useState } from "react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description?: string;
  image: string;
}

interface RecruiterAiToolsProps {
  badge: React.ReactNode;
  heading: React.ReactNode;
  features: Feature[];
  background?: string;
  button?: { label: string; href: string };
}

export default function RecruiterAiTools({
  badge,
  heading,
  features,
  background = "linear-gradient(180deg, #fff 0%, #ffe7d2 100%)",
  button = { label: "Learn more features", href: "#" },
}: RecruiterAiToolsProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center px-[5%] py-[5vh]"
      style={{ background }}
    >
      <div className="max-w-[95%] w-full mx-auto">
        {/* Badge */}
        <div className="mb-[3vh] flex justify-center md:justify-start">
          <span className="inline-flex items-center gap-[0.6vw] px-[1.5vw] py-[0.8vh] rounded-full bg-gray-100 text-gray-700 font-medium shadow text-[max(1vw,0.9rem)]">
            {badge}
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-[max(4vw,1.8rem)] font-bold text-gray-900 mb-[4vh] leading-tight text-center md:text-left">
          {heading}
        </h1>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[4vw] items-start mt-[8vh]">
          {/* Left: Features list */}
          <div className="flex flex-col gap-[2vh]">
            {features.map((feature, idx) => (
              <button
                key={feature.title}
                className={`rounded-xl p-[2vw] flex gap-[1vw] items-start shadow text-left transition ${
                  activeIdx === idx ? "bg-blue-50" : "bg-white hover:bg-blue-50"
                }`}
                onClick={() => setActiveIdx(idx)}
                aria-pressed={activeIdx === idx}
              >
                <div className="mt-[0.5vh] text-[max(1.2vw,1rem)]">
                  {feature.icon}
                </div>
                <div>
                  <div className="font-semibold text-[max(1.3vw,1.05rem)] text-gray-900 mb-[0.5vh]">
                    {feature.title}
                  </div>
                  {activeIdx === idx && feature.description && (
                    <div className="text-gray-600 text-[max(1.05vw,0.95rem)] leading-snug">
                      {feature.description}
                    </div>
                  )}
                </div>
              </button>
            ))}
            <div className="mt-[4vh] mb-[8vh]">
              <a
                href={button.href}
                className="rounded-full px-[3vw] py-[1.5vh] text-[max(1.1vw,1rem)] font-semibold bg-black text-white hover:bg-gray-900 transition"
              >
                {button.label}
              </a>
            </div>
          </div>

          {/* Right: Feature image */}
          <div className="flex items-center justify-center">
            <img
              src={features[activeIdx].image}
              alt={features[activeIdx].title}
              className="rounded-2xl shadow-lg w-[90%] max-w-[50vw] object-contain bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
