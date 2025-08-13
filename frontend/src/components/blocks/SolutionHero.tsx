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
    <section className="w-full min-h-[600px] flex flex-col md:flex-row items-center justify-between px-4 sm:px-28 py-16 bg-white">
      {/* Left: Text */}
      <div className="flex-1 flex flex-col justify-center items-start max-w-2xl">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">{heading}</h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8">{subheading}</p>
        {/* Customers */}
        <div className="flex items-center gap-4 mt-2">
          <div className="flex -space-x-4">
            {customers.map((c, i) => (
              <img
                key={i}
                src={c.avatar}
                alt={c.name}
                className="w-12 h-12 rounded-full border-2 border-white object-cover shadow"
                style={{ zIndex: 10 - i }}
                draggable={false}
              />
            ))}
          </div>
          <span className="text-lg font-semibold text-gray-900">{customerCount}</span>
          <span className="text-gray-500 text-base ml-2">Happy Customers</span>
        </div>
      </div>
      {/* Right: Orb & Features */}
      <div className="flex-1 flex items-center justify-center relative w-full max-w-2xl mt-12 md:mt-0">
        {/* Orb Image */}
        <div className="relative w-full flex items-center justify-center">
          <img
            src={orbImage}
            alt={orbAlt}
            className="w-[340px] sm:w-[420px] md:w-[620px] h-auto object-contain drop-shadow-2xl"
            draggable={false}
          />
          {/* Orb Badges */}
          {orbBadges.map((badge, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-xl shadow-lg px-4 py-2 flex items-center gap-2"
              style={badge.style}
            >
              {badge.icon}
              <span className="font-medium text-gray-700">{badge.label}</span>
            </div>
          ))}
          {/* Orb Stats */}
          {orbStats.length > 0 && (
            <div className="absolute top-8 right-0 bg-white rounded-2xl shadow px-6 py-4 flex flex-col gap-2 min-w-[180px]">
              {orbStats.map((stat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span
                    className="inline-block w-3 h-3 rounded-full"
                    style={{ background: stat.color }}
                  ></span>
                  <span className="text-gray-700 font-medium">{stat.label}</span>
                </div>
              ))}
              {/* Example slider */}
              <input type="range" min={0} max={100} className="w-full mt-2 accent-gray-300" />
            </div>
          )}
          {/* Orb Features */}
          {orbFeatures.map((feature, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-xl shadow-lg px-4 py-2 flex items-center gap-2"
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