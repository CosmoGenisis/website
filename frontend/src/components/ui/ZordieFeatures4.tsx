import { useState, useEffect, useRef } from "react";
import { Check } from "lucide-react";
import { useAnimation, useInView, motion, useMotionValue, useSpring } from "framer-motion";
import vid1 from "@/images/Video.mp4";
import vid2 from "@/images/Video1.mp4";
// ...other imports...

interface AnimatedStatProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}
function AnimatedStat({ value, suffix = "", label, duration = 1200 }: AnimatedStatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let start = 0;
    const end = value;
    const increment = end / (duration / 16); // 16ms per frame
  let frame: number;

    function animate() {
      start += increment;
      if (start < end) {
        setCount(Math.round(start));
        frame = requestAnimationFrame(animate);
      } else {
        setCount(end);
        cancelAnimationFrame(frame);
      }
    }

    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          animate();
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger if already in view
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <div className="flex flex-col items-center justify-center" ref={ref}>
      <span
        style={{
          fontSize: "3.75rem",
          fontWeight: 700,
          color: "#294141",
          marginBottom: "0.5rem",
          display: "inline-block",
        }}
      >
        {count}{suffix}
      </span>
      <span className="text-2xl text-[#294141]">{label}</span>
    </div>
  );
}

export default function WhyRecruitersLoveUs() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-[5%] py-[5vh]">
      {/* First Card: Content left, video right */}
      <div className="max-w-[95%] w-full grid grid-cols-1 md:grid-cols-2 gap-[5%] items-center mb-[8vh]">
        <div>
          <h1 className="text-[max(4vw,1.8rem)] font-bold text-gray-900 mb-[3vh]">
            Why recruiters love us
          </h1>
          <ul className="space-y-[2vh] mb-[4vh]">
            {[
              "Quickly publish roles with AI-generated job descriptions and branding assets.",
              "Automate hiring from JD to onboarding with AI—verify GitHub, certifications, and portfolios with smart checks.",
              "Eliminate back-and-forth. Let Zordie handle interview scheduling automatically.",
              "Track candidate scores, and team collaboration in one place.",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-[1vw]">
                <span className="bg-lime-200 rounded-xl p-[1vw] flex items-center justify-center">
                  <Check className="w-[1.5vw] min-w-[20px] h-[1.5vw] min-h-[20px] text-black" />
                </span>
                <span className="text-[max(1.2vw,1rem)] text-gray-800 leading-snug">
                  {text}
                </span>
              </li>
            ))}
          </ul>
          <button className="mt-[2vh] px-[4%] py-[1.5vh] rounded-lg bg-green-900 text-white text-[max(1.1vw,1rem)] font-semibold shadow hover:bg-green-800 transition">
            Explore More
          </button>
        </div>
        <div className="flex items-center justify-center">
          <video
            src={vid1}
            autoPlay
            loop
            muted
            className="rounded-2xl shadow-lg w-[100%] h-[40vh] md:h-[50vh] object-cover bg-black"
          />
        </div>
      </div>

      {/* Second Card: Video left, content right */}
      <div className="max-w-[95%] w-full grid grid-cols-1 md:grid-cols-2 gap-[5%] items-center">
        <div className="flex items-center justify-center">
          <video
            src={vid2}
            autoPlay
            loop
            muted
            className="rounded-2xl shadow-lg w-[100%] h-[40vh] md:h-[50vh] object-cover bg-black"
          />
        </div>
        <div>
          <h1 className="text-[max(4vw,1.8rem)] font-bold text-gray-900 mb-[3vh]">
            Why teams choose Zordie
          </h1>
          <ul className="space-y-[2vh] mb-[4vh]">
            {[
              "Seamless onboarding for new hires with automated workflows.",
              "Integrated with your favorite tools for effortless collaboration.",
              "Real-time analytics and reporting for smarter decisions.",
              "Secure, scalable, and built for modern HR teams.",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-[1vw]">
                <span className="bg-lime-200 rounded-xl p-[1vw] flex items-center justify-center">
                  <Check className="w-[1.5vw] min-w-[20px] h-[1.5vw] min-h-[20px] text-black" />
                </span>
                <span className="text-[max(1.2vw,1rem)] text-gray-800 leading-snug">
                  {text}
                </span>
              </li>
            ))}
          </ul>
          <button className="mt-[2vh] px-[4%] py-[1.5vh] rounded-lg bg-green-900 text-white text-[max(1.1vw,1rem)] font-semibold shadow hover:bg-green-800 transition">
            Explore More
          </button>
        </div>
      </div>

      {/* Animated Stats Section */}
      <div className="w-full py-[14vh] bg-white">
        <div className="max-w-[95%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[3vw] text-center">
          <AnimatedStat value={25} suffix="K+" label="Happy Users" />
          <AnimatedStat value={100} suffix="%" label="Users Satisfaction" />
          <AnimatedStat value={10} suffix="K+" label="Jobs Landed" />
        </div>
      </div>
    </div>
  );
}
