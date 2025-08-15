import React from "react";

interface Customer {
  avatar: string;
  name: string;
}

interface SolutionHeroProps {
  heading: React.ReactNode;
  subheading: React.ReactNode;
  customers: Customer[];
  customerCount: string;
  orbImage: string;
  orbAlt?: string;
  orbBadges?: Array<{ icon: React.ReactNode; label: string; style?: React.CSSProperties }>;
  orbStats?: Array<{ label: string; color: string }>;
  orbFeatures?: Array<{ icon: React.ReactNode; label: string; style?: React.CSSProperties }>;
}

export function SolutionHero({
  heading,
  subheading,
  customers,
  customerCount,
  orbImage,
  orbAlt = "AI Orb",
  orbBadges = [],
  orbStats = [],
  orbFeatures = [],
}: SolutionHeroProps) {
  return (
    <section className="w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-[10vh] py-[12vh] bg-white">
      {/* Left: Text */}
      <div className="flex-1 flex flex-col justify-center items-start md:pr-[4%] max-w-full">
        <h1 className="text-gray-900 font-bold leading-tight mb-[2vh] text-[clamp(2rem,4vw,3.5rem)]">
          {heading}
        </h1>
        <p className="text-gray-600 mb-[4vh] text-[clamp(1rem,1.6vw,1.25rem)]">
          {subheading}
        </p>

        {/* Customers */}
        <div className="flex items-center gap-[1vw]">
          <div className="flex -space-x-[1vw]">
            {customers.map((c, i) => (
              <img
                key={i}
                src={c.avatar}
                alt={c.name || `Customer ${i + 1}`}
                className="w-[8vh] h-[8vh] rounded-full border-2 border-white object-cover shadow"
                style={{ zIndex: customers.length - i }}
                draggable={false}
              />
            ))}
          </div>
          <span className="text-gray-900 font-semibold text-[clamp(1rem,1.6vw,1.25rem)]">
            {customerCount}
          </span>
          <span className="text-gray-500 text-[clamp(0.9rem,1.4vw,1rem)]">Happy Customers</span>
        </div>
      </div>

      {/* Right: Orb & Features */}
      <div className="flex-1 flex items-center justify-center relative w-full mt-[6vh] md:mt-0">
        <div className="relative flex items-center justify-center w-full max-w-[90%]">
          {/* Orb Image */}
          <img
            src={orbImage}
            alt={orbAlt}
            className="w-[45vw] max-w-[60vh] h-auto object-contain drop-shadow-2xl"
            draggable={false}
          />

          {/* Orb Badges */}
          {orbBadges.map((badge, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-xl shadow-lg px-[1.5vw] py-[1vh] flex items-center gap-[0.5vw] text-[clamp(0.9rem,1.4vw,1rem)]"
              style={badge.style}
            >
              {badge.icon}
              <span className="font-medium text-gray-700">{badge.label}</span>
            </div>
          ))}

          {/* Orb Stats */}
          {orbStats.length > 0 && (
            <div className="absolute top-[8%] right-0 bg-white rounded-2xl shadow px-[2vw] py-[2vh] flex flex-col gap-[1vh] min-w-[20%] max-w-[25%]">
              {orbStats.map((stat, i) => (
                <div key={i} className="flex items-center gap-[1vw]">
                  <span
                    className="inline-block w-[1vw] h-[1vw] min-w-[8px] min-h-[8px] rounded-full"
                    style={{ background: stat.color }}
                  ></span>
                  <span className="text-gray-700 font-medium text-[clamp(0.9rem,1.4vw,1rem)]">
                    {stat.label}
                  </span>
                </div>
              ))}
              <input
                type="range"
                min={0}
                max={100}
                className="w-full mt-[1vh] accent-gray-300"
              />
            </div>
          )}

          {/* Orb Features */}
          {orbFeatures.map((feature, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-xl shadow-lg px-[1.5vw] py-[1vh] flex items-center gap-[0.5vw] text-[clamp(0.9rem,1.4vw,1rem)]"
              style={feature.style}
            >
              {feature.icon}
              <span className="font-medium text-gray-700">{feature.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
