import { Box, CalendarCheck, Flag, Users, SlidersHorizontal } from "lucide-react";
import img1 from "@/images/agent5.png"
import img2 from "@/images/Logo.png"
import img3 from "@/images/notion.png"
import img4 from "@/images/teams.png"
import img5 from "@/images/Amazon.png"
import img6 from "@/images/slack.png"
import img7 from "@/images/Google.png"
import img8 from "@/images/discord.png"
import img9 from "@/images/zoom.png"
import img10 from "@/images/airtable.png"

export default function WhyZordie() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20">
      {/* Top Section */}
      <div className="max-w-[90%] w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div>
          <div className="mb-6">
            <button className="flex items-center gap-2 px-6 py-2 rounded-full bg-gray-100 text-gray-700 font-medium shadow">
              <Box className="w-5 h-5" />
              Key Capabilities
            </button>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Why Zordie ?</h1>
          <p className="text-lg text-gray-600 mb-10">
            Zordie is your <span className="italic font-medium">all-in-one autonomous recruitment and onboarding platform</span>, built for speed, precision, and scale.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-gray-300 bg-white text-gray-800 font-medium shadow-sm">
              <Box className="w-5 h-5 text-gray-500" />
              No more manual screening
            </div>
            <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-gray-300 bg-white text-gray-800 font-medium shadow-sm">
              <CalendarCheck className="w-5 h-5 text-gray-500" />
              Zero scheduling conflicts
            </div>
            <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-gray-300 bg-white text-gray-800 font-medium shadow-sm">
              <Flag className="w-5 h-5 text-gray-500" />
              Fully integrated from job posting to onboarding
            </div>
            <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-gray-300 bg-white text-gray-800 font-medium shadow-sm">
              <Users className="w-5 h-5 text-gray-500" />
              Higher candidate quality
            </div>
            <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-gray-300 bg-white text-gray-800 font-medium shadow-sm">
              <SlidersHorizontal className="w-5 h-5 text-gray-500" />
              Lower cost per hire
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex items-center justify-center">
          <div className="bg-white rounded-3xl flex items-center justify-center p-8">
            <img
              src={img1}
              alt="Decorative"
              className="w-[380px] h-[380px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* GAP between sections */}
      <div className="h-24" />

{/* Integrations Section */}
<section className="w-full flex flex-col items-center justify-center py-8">
  <span className="px-6 py-2 rounded-full bg-blue-600 text-white text-2xl font-medium mb-4">Integrations</span>
  <h2 className="text-4xl md:text-6xl font-bold text-center mb-4">Integrate wherever you want</h2>
  <p className="text-gray-600 text-center max-w-[40%] mb-10">
    Connect effortlessly with popular apps, expanding functionality and enabling smooth workflows between tools you already use.
  </p>
  <div className="relative flex items-center justify-center" style={{ height: 420, width: 420 }}>
    {/* Concentric Circles */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" style={{ width: 420, height: 420 }}>
      {/* Outer thin circle */}
      <svg width={420} height={420} style={{ position: "absolute", left: 0, top: 0 }}>
        <circle
          cx={210}
          cy={210}
          r={185}
          stroke="#e5e7eb"
          strokeWidth="2"
          fill="none"
        />
      </svg>
      {/* Large blurred gradient circle */}
      <div
        style={{
          width: 340,
          height: 340,
          borderRadius: "50%",
          position: "absolute",
          left: 40,
          top: 40,
          background: "radial-gradient(circle at 60% 40%, #e0e7ff 40%, #f3f4f6 80%, #fff 100%)",
          filter: "blur(2.5px)",
          opacity: 0.9,
        }}
      />
      {/* Middle blurred gradient circle */}
      <div
        style={{
          width: 260,
          height: 260,
          borderRadius: "50%",
          position: "absolute",
          left: 80,
          top: 80,
          background: "radial-gradient(circle at 60% 40%, #e0e7ff 0%, #f3f4f6 60%, #fff 100%)",
          filter: "blur(2px)",
          opacity: 0.7,
        }}
      />
      {/* Inner blurred gradient circle */}
      <div
        style={{
          width: 160,
          height: 160,
          borderRadius: "50%",
          position: "absolute",
          left: 130,
          top: 130,
          background: "radial-gradient(circle at 60% 40%, #e0e7ff 0%, #f3f4f6 60%, #fff 100%)",
          filter: "blur(1.5px)",
          opacity: 0.5,
        }}
      />
    </div>
    {/* Central logo */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
      <div className="bg-white rounded-2xl shadow-lg flex items-center justify-center" style={{ width: 96, height: 96, boxShadow: "0 8px 32px 0 rgba(31,38,135,0.12)" }}>
        <img src={img2} alt="Zordie Logo" className="w-16 h-16 object-contain" />
      </div>
    </div>
    {/* Animated orbit container */}
    <div
      className="absolute left-1/2 top-1/2"
      style={{
        width: 420,
        height: 420,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="relative w-full h-full animate-spin-slow">
        {[
          { src: img3, alt: "Integration 1" },
          { src: img4, alt: "Integration 2" },
          { src: img5, alt: "Integration 3" },
          { src: img6, alt: "Integration 4" },
          { src: img7, alt: "Integration 5" },
          { src: img8, alt: "Integration 6" },
          { src: img9, alt: "Integration 7" },
          { src: img10, alt: "Integration 8" },
        ].map((icon, idx, arr) => {
          const angle = (360 / arr.length) * idx;
          const radius = 185; // <-- increased radius
          const rad = (angle * Math.PI) / 180;
          const x = radius * Math.cos(rad);
          const y = radius * Math.sin(rad);
          return (
            <div
              key={icon.alt}
              className="absolute flex items-center justify-center bg-white rounded-xl shadow-lg"
              style={{
                left: `calc(50% + ${x}px - 32px)`,
                top: `calc(50% + ${y}px - 32px)`,
                width: 64,
                height: 64,
                boxShadow: "0 8px 32px 0 rgba(31,38,135,0.10)",
              }}
            >
              <img src={icon.src} alt={icon.alt} className="w-10 h-10 object-contain" />
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>
    </div>
  );
}