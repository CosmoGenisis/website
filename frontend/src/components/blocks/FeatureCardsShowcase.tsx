import React from "react";
import img1 from "@/images/img1.png";
import img2 from "@/images/ing2.png";
import img3 from "@/images/img3.png";
import img4 from "@/images/img4.png";
const features = [
  {
    title: "Complete Hiring Automation",
    desc: "Unprecedented automation across the entire Hiring lifecycle, eliminating silos and reducing administrative overhead by up to 90%.",
    image: img1, // Replace with your image path or leave empty for no image
  },
  {
    title: "Gamified Intelligence Assessment",
    desc: "Innovative assessment experiences that reveal true candidate potential through interactive challenges and immersive scenarios.",
    image: img2,
  },
  {
    title: "360° Candidate Verification Excellence",
    desc: "Advanced verification system cross-validating resumes, analyzing GitHub repositories, and authenticating credentials through official channels.",
    image: img1,
  },
  {
    title: "Real Time Strategic Analysis",
    desc: "Innovative assessment experiences that reveal true candidate potential through interactive challenges and immersive scenarios.",
    image: img3,
  },
  {
    title: "AI Consulting",
    desc: "Work with our experts to develop personalized AI strategies that streamline operations and deliver impactful results.",
    image: img4,
  },
];

export function FeatureCardsShowcase() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-8">
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mb-8">
        {features.slice(0, 3).map((f, i) => (
          <div
            key={f.title}
            className="rounded-2xl bg-gradient-to-b from-blue-400 via-blue-300 to-orange-300 p-0 shadow-xl flex flex-col justify-end min-h-[420px] border-2 border-white/60 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background:
                "linear-gradient(180deg, #3b82f6 0%, #60a5fa 60%, #fdba74 100%)",
            }}
          >
            {f.image && (
              <div className="flex items-center justify-center pt-10 pb-2">
                <img
                  src={f.image}
                  alt={f.title}
                  className="h-32 w-auto object-contain opacity-90"
                  draggable={false}
                />
              </div>
            )}
            <div className="flex-1 flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-semibold mb-2 drop-shadow-lg">{f.title}</h3>
              <p className="text-white/90 text-base font-normal drop-shadow mb-2">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Bottom Row */}
      <div className="grid grid-cols-3 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {features.slice(3).map((f, i) => (
          <div
            key={f.title}
            className="rounded-2xl bg-gradient-to-b from-blue-400 via-blue-300 to-orange-300 p-0 shadow-xl flex flex-col justify-end min-h-[320px] border-2 border-white/60 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background:
                "linear-gradient(180deg, #3b82f6 0%, #60a5fa 60%, #fdba74 100%)",
            }}
          >
            {f.image && (
              <div className="flex items-center justify-center pt-10 pb-2">
                <img
                  src={f.image}
                  alt={f.title}
                  className="h-24 w-auto object-contain opacity-90"
                  draggable={false}
                />
              </div>
            )}
            <div className="flex-1 flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-semibold mb-2 drop-shadow-lg">{f.title}</h3>
              <p className="text-white/90 text-base font-normal drop-shadow">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}