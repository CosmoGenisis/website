import { Box, CalendarCheck, Flag, Users, SlidersHorizontal } from "lucide-react";
import img1 from "@/images/agent5.png";
import img2 from "@/images/Logo.png";
import img3 from "@/images/notion.png";
import img4 from "@/images/teams.png";
import img5 from "@/images/Amazon.png";
import img6 from "@/images/slack.png";
import img7 from "@/images/Google.png";
import img8 from "@/images/discord.png";
import img9 from "@/images/zoom.png";
import img10 from "@/images/airtable.png";

export default function WhyZordie() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-[5%] py-[8%]">
      {/* Top Section */}
      <div className="max-w-[90%] w-full grid grid-cols-1 md:grid-cols-2 gap-[8%] items-center">
        {/* Left Side */}
        <div>
          <div className="mb-[4%]">
            <button className="flex items-center gap-[5%] px-[6%] py-[2%] rounded-full bg-gray-100 text-gray-700 font-medium shadow">
              <Box className="w-[10%] h-[10%]" />
              Key Capabilities
            </button>
          </div>
          <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-gray-900 mb-[4%]">
            Why Zordie ?
          </h1>
          <p className="text-[clamp(1rem,1.6vw,1.3rem)] text-gray-600 mb-[8%] leading-relaxed">
            Zordie is your{" "}
            <span className="italic font-medium">
              all-in-one autonomous recruitment and onboarding platform
            </span>
            , built for speed, precision, and scale.
          </p>
          <div className="space-y-[3%]">
            {[
              { icon: Box, text: "No more manual screening" },
              { icon: CalendarCheck, text: "Zero scheduling conflicts" },
              { icon: Flag, text: "Fully integrated from job posting to onboarding" },
              { icon: Users, text: "Higher candidate quality" },
              { icon: SlidersHorizontal, text: "Lower cost per hire" },
            ].map(({ icon: Icon, text }, i) => (
              <div
                key={i}
                className="flex items-center gap-[2%] px-[5%] py-[2%] rounded-full border border-gray-300 bg-white text-gray-800 font-medium shadow-sm"
              >
                <Icon className="w-[5%] h-[5%] text-gray-500" />
                {text}
              </div>
            ))}
          </div>
        </div>
        {/* Right Side */}
        <div className="flex items-center justify-center">
          <div className="bg-white rounded-3xl flex items-center justify-center p-[5%]">
            <img
              src={img1}
              alt="Decorative"
              className="w-[80%] h-[80%] object-contain"
            />
          </div>
        </div>
      </div>

      {/* GAP between sections */}
      <div className="h-[10%]" />

      {/* Integrations Section */}
      <section className="w-full flex flex-col items-center justify-center py-[5%]">
        <span className="px-[4%] py-[1%] rounded-full bg-blue-600 text-white text-[clamp(1.2rem,2vw,1.6rem)] font-medium mb-[2%]">
          Integrations
        </span>
        <h2 className="text-[clamp(3rem,5vw,4rem)] font-bold text-center mb-[2%]">
          Integrate what ever you want
        </h2>
        <p className="text-gray-600 text-center max-w-[40%] mb-[5%] text-[clamp(1rem,1.4vw,1.2rem)] leading-relaxed">
          Connect effortlessly with popular apps, expanding functionality and enabling smooth workflows between tools you already use.
        </p>

        <div
          className="relative flex items-center justify-center"
          style={{ height: "40vw", width: "40vw" }}
        >
          {/* Concentric Circles */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
            style={{ width: "100%", height: "100%" }}
          >
            <svg width="100%" height="100%" style={{ position: "absolute", left: 0, top: 0 }}>
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                stroke="#e5e7eb"
                strokeWidth="0.5%"
                fill="none"
              />
            </svg>
            {/* Outer gradient */}
            <div
              style={{
                width: "80%",
                height: "80%",
                borderRadius: "50%",
                position: "absolute",
                left: "10%",
                top: "10%",
                background:
                  "radial-gradient(circle at 60% 40%, #e0e7ff 40%, #f3f4f6 80%, #fff 100%)",
                filter: "blur(0.6vw)",
                opacity: 0.9,
              }}
            />
            {/* Middle gradient */}
            <div
              style={{
                width: "62%",
                height: "62%",
                borderRadius: "50%",
                position: "absolute",
                left: "19%",
                top: "19%",
                background:
                  "radial-gradient(circle at 60% 40%, #e0e7ff 0%, #f3f4f6 60%, #fff 100%)",
                filter: "blur(0.5vw)",
                opacity: 0.7,
              }}
            />
            {/* Inner gradient */}
            <div
              style={{
                width: "38%",
                height: "38%",
                borderRadius: "50%",
                position: "absolute",
                left: "31%",
                top: "31%",
                background:
                  "radial-gradient(circle at 60% 40%, #e0e7ff 0%, #f3f4f6 60%, #fff 100%)",
                filter: "blur(0.4vw)",
                opacity: 0.5,
              }}
            />
          </div>

          {/* Central logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div
              className="bg-white shadow-lg flex items-center justify-center rounded-full"
              style={{
                width: "20vw", // bigger size (adjust as needed)
                height: "20vw", // make equal for perfect circle
                boxShadow: "0 1vw 3vw rgba(31,38,135,0.12)",
              }}
            >
              <img
                src={img2}
                alt="Zordie Logo"
                className="w-[70%] h-[70%] object-contain"
              />
            </div>
          </div>

          {/* Orbit icons */}
          <div
            className="absolute left-1/2 top-1/2"
            style={{
              width: "100%",
              height: "100%",
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
                const radius = 45; // in % of container
                const rad = (angle * Math.PI) / 180;
                const x = radius * Math.cos(rad);
                const y = radius * Math.sin(rad);
                return (
                  <div
                    key={icon.alt}
                    className="absolute flex items-center justify-center bg-white rounded-xl shadow-lg"
                    style={{
                      left: `calc(50% + ${x}% - 5%)`,
                      top: `calc(50% + ${y}% - 5%)`,
                      width: "15%",
                      height: "15%",
                      boxShadow: "0 0.8vw 3vw 0 rgba(31,38,135,0.10)",
                    }}
                  >
                    <img src={icon.src} alt={icon.alt} className="w-[70%] h-[70%] object-contain" />
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
