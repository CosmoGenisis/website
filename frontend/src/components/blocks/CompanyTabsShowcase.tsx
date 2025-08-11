import React, { useState, useEffect } from "react";
import img1 from "@/images/Company_background.png"
import img2 from "@/images/Company_img1.png"

const TABS = [
  {
    label: "Activate Talent Pool",
    image: img2, // replace with your image path
  },
  {
    label: "Interview Services",
    image: img2, // replace with your image path
  },
  {
    label: "Automated Candidate Onboarding",
    image: img2, // replace with your image path
  },
];

const BG_IMAGE = "/assets/company-bg.png"; // replace with your background image path

export function CompanyTabsShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % TABS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex justify-center py-12">
      <div
        className="relative w-full max-w-[1600px] rounded-[32px] overflow-hidden"
        style={{
          background: `url(${img1}) center/cover no-repeat`,
        }}
      >
      {/* Tabs */}
      <div className="flex gap-32 bg-white/80 rounded-full px-8 py-4 shadow-lg mt-8 mb-12 mx-auto w-fit">
        {TABS.map((tab, idx) => (
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
            className="absolute rounded-t-3xl"
            style={{
              width: "95%", // slightly wider than the image
              maxWidth: "1160px", // slightly more than image max width
              height: "680px", // slightly taller than image height
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
              src={TABS[active].image}
              alt={TABS[active].label}
              className="object-cover w-full h-[620px] transition-all duration-700"
              style={{
                objectPosition: "center",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}