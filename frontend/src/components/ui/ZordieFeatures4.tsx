import { useState, useEffect, useRef } from "react";
import { Check } from "lucide-react";
import { useAnimation, useInView, motion, useMotionValue, useSpring } from "framer-motion";
import vid1 from "@/images/Video.mp4";
import vid2 from "@/images/Video1.mp4";
// ...other imports...

function AnimatedStat({ value, suffix = "", label, duration = 1200 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let start = 0;
    const end = value;
    const increment = end / (duration / 16); // 16ms per frame
    let frame;

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

// ...rest of your file remains unchanged...

export default function WhyRecruitersLoveUs() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-6 py-20">
      {/* First Card: Content left, video right */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <h1 className="text-5xl font-bold text-gray-900 mb-10">Why recruiters love us</h1>
          <ul className="space-y-8 mb-12">
            {[
              "Quickly publish roles with AI-generated job descriptions and branding assets.",
              "Automate hiring from JD to onboarding with AI—verify GitHub, certifications, and portfolios with smart checks.",
              "Eliminate back-and-forth. Let Zordie handle interview scheduling automatically.",
              "Track candidate scores, and team collaboration in one place.",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="bg-lime-200 rounded-xl p-3 flex items-center justify-center">
                  <Check className="w-6 h-6 text-black" />
                </span>
                <span className="text-xl text-gray-800">{text}</span>
              </li>
            ))}
          </ul>
          <button className="mt-6 px-8 py-4 rounded-lg bg-green-900 text-white text-lg font-semibold shadow hover:bg-green-800 transition">
            Explore More
          </button>
        </div>
        <div className="flex items-center justify-center">
          <video
            src={vid1}
            autoPlay
            loop
            muted
            className="rounded-2xl shadow-lg w-full h-[420px] object-cover bg-black"
            />
        </div>
      </div>

      {/* Second Card: Video left, content right */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex items-center justify-center">
          <video
            src={vid2}
            autoPlay
            loop
            muted
            className="rounded-2xl shadow-lg w-full h-[420px] object-cover bg-black"
            />
        </div>
        <div>
          <h1 className="text-5xl font-bold text-gray-900 mb-10">Why teams choose Zordie</h1>
          <ul className="space-y-8 mb-12">
            {[
              "Seamless onboarding for new hires with automated workflows.",
              "Integrated with your favorite tools for effortless collaboration.",
              "Real-time analytics and reporting for smarter decisions.",
              "Secure, scalable, and built for modern HR teams.",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="bg-lime-200 rounded-xl p-3 flex items-center justify-center">
                  <Check className="w-6 h-6 text-black" />
                </span>
                <span className="text-xl text-gray-800">{text}</span>
              </li>
            ))}
          </ul>
          <button className="mt-6 px-8 py-4 rounded-lg bg-green-900 text-white text-lg font-semibold shadow hover:bg-green-800 transition">
            Explore More
          </button>
        </div>
      </div>
      {/* Animated Stats Section */}
      <div className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <AnimatedStat value={25} suffix="K+" label="Happy Users" />
          <AnimatedStat value={100} suffix="%" label="Users Satisfaction" />
          <AnimatedStat value={10} suffix="K+" label="Jobs Landed" />
        </div>
      </div>
    </div>
  );
}