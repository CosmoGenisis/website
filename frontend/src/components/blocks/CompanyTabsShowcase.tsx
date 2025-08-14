import React, { useState, useEffect } from "react";

interface TabItem {
  label: string;
  image: string;
}

interface CompanyTabsShowcaseProps {
  tabs: TabItem[];
  backgroundImage: string;
  cardBackgroundImage?: string;
}

export function CompanyTabsShowcase({
  tabs,
  backgroundImage,
  cardBackgroundImage,
}: CompanyTabsShowcaseProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % tabs.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [tabs.length]);

  return (
    <div className="w-full flex justify-center py-12">
      <div
        className="relative w-full max-w-[90%] rounded-[32px] overflow-hidden"
        style={{
          background: `url(${backgroundImage}) center/cover no-repeat`,
        }}
      >
        {/* Tabs */}
        <div className="flex gap-32 bg-white/80 rounded-full px-8 py-4 shadow-lg mt-8 mb-24 mx-auto w-fit">
          {tabs.map((tab, idx) => (
            <button
              key={tab.label}
              className={`text-2xl font-semibold px-4 py-2 rounded-full transition-all ${
              active === idx
                ? "bg-black text-white shadow"
                : "bg-white text-black"
            }`}
              style={{
                opacity: active === idx ? 1 : 0.6,
                pointerEvents: "none",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* Card with gap from edges */}
        <div className="w-full flex justify-center items-center relative">
          {/* Gradient background */}
          <div
            className="absolute rounded-t-2xl sm:rounded-t-3xl"
            style={{
              width: "95%",
              maxWidth: "1160px",
              height: "740px",
              background: "linear-gradient(180deg, rgba(255,255,255,0.4), rgba(255,255,255,0))",
              zIndex: 0,
            }}
          ></div>
          {/* Image container */}
          <div
            className="rounded-t-3xl bg-white/90 overflow-hidden relative z-10"
            style={{ width: "90%", maxWidth: "1100px" }}
          >
            <img
              src={tabs[active].image}
              alt={tabs[active].label}
              className="object-cover w-full h-[680px] transition-all duration-700"
              style={{
                objectPosition: "center",
                filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
                borderRadius: "32px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}