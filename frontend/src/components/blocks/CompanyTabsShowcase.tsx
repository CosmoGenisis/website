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
    <div className="w-full flex justify-center py-[6vh]">
      <div
        className="relative w-full max-w-[90%] rounded-[2vw] overflow-hidden"
        style={{
          background: `url(${backgroundImage}) center/cover no-repeat`,
        }}
      >
        {/* Tabs */}
        <div className="flex gap-[4vw] bg-white/80 rounded-full px-[2vw] py-[1vh] shadow-lg mt-[2vh] mb-[6vh] mx-auto w-fit">
          {tabs.map((tab, idx) => (
            <button
              key={tab.label}
              className={`font-semibold px-[1.5vw] py-[0.8vh] rounded-full transition-all text-[max(1.6vw,1.2rem)]`}
              style={{
                backgroundColor: active === idx ? "#000" : "#fff",
                color: active === idx ? "#fff" : "#000",
                opacity: active === idx ? 1 : 0.6,
                pointerEvents: "none",
                boxShadow: active === idx ? "0 0.4vw 1vw rgba(0,0,0,0.15)" : "none",
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
            className="absolute rounded-t-[2vw]"
            style={{
              width: "95%",
              maxWidth: "85%",
              height: "740px",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.4), rgba(255,255,255,0))",
              zIndex: 0,
            }}
          ></div>

          {/* Image container */}
          <div
            className="rounded-t-[2vw] bg-white/90 overflow-hidden relative z-10"
            style={{ width: "90%", maxWidth: "80%" }}
          >
            <img
              src={tabs[active].image}
              alt={tabs[active].label}
              className="object-cover w-full transition-all duration-700"
              style={{
                height: "680px",
                objectPosition: "center",
                filter: "drop-shadow(0 0.4vw 0.6vw rgba(0,0,0,0.1))",
                borderRadius: "2vw",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
