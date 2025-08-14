import { useState } from "react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description?: string;
  image: string; // Each feature has its own image
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
  const [activeIdx, setActiveIdx] = useState(1); // default to second feature as highlighted

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center px-6 py-20"
      style={{ background }}
    >
      <div className="max-w-[90%] w-full mx-auto">
        {/* Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium shadow">
            {badge}
          </span>
        </div>
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight text-center md:text-left">
          {heading}
        </h1>
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-8">
          {/* Left: Features list */}
          <div className="flex flex-col gap-4">
            {features.map((feature, idx) => (
              <button
                key={feature.title}
                className={`rounded-xl p-6 flex gap-4 items-start shadow text-left transition ${
                  activeIdx === idx
                    ? "bg-blue-50"
                    : "bg-white hover:bg-blue-50"
                }`}
                onClick={() => setActiveIdx(idx)}
                aria-pressed={activeIdx === idx}
              >
                <div className="mt-1">{feature.icon}</div>
                <div>
                  <div className="font-semibold text-lg text-gray-900 mb-1">{feature.title}</div>
                  {activeIdx === idx && feature.description && (
                    <div className="text-gray-600 text-base">{feature.description}</div>
                  )}
                </div>
              </button>
            ))}
            <div className="mt-8">
              <a
                href={button.href}
                className="rounded-full px-8 py-4 text-lg font-semibold bg-black text-white hover:bg-gray-900 transition"
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
              className="rounded-2xl shadow-lg w-full h-auto object-contain bg-white"
              style={{ maxWidth: 600 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}