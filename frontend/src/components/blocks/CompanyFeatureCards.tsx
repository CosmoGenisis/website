import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import img1 from "@/images/Company_features_1.png";
import img2 from "@/images/Company_features_2.png";
import img3 from "@/images/Company_features_3.png";
import img4 from "@/images/Company_features_4.png";
import imfb1 from "@/images/Company_background_1.png";
import imfb2 from "@/images/Company_background_2.png";
import imfb3 from "@/images/Company_background_3.png";
import imfb4 from "@/images/Company_background_4.png";

const features = [
  {
    title: "End-to-End Autonomous AI Interviewing",
    description:
      "Conduct fully-automated interviews including technical, logical, and behavioral rounds — without a single human interviewer.",
    details: [
      "Full 90-minute browser-based interviews",
      "Live coding rounds with in-browser IDE",
      "MCQs, case studies, and scenario testing",
      "AI-evaluated with instant reporting",
    ],
    image: img1,
    imageBackground: imfb1,
  },
  {
    title: "Real-Time Candidate Leaderboard & Comparison",
    description:
      "Automatically rank and compare candidates across multiple stages based on performance, skills, communication, and fit.",
    details: [
      "Visual leaderboard",
      "Deep-dive reports per candidate",
      "Hiring recommendations",
      "Team collaboration tools",
    ],
    image: img2,
    imageBackground: imfb2,
  },
  {
    title: "AI Hiring Co-Pilot for Recruiters",
    description:
      "Your intelligent sidekick throughout the recruitment process — offering insights, reminders, and suggestions to streamline hiring.",
    details: [
      "JD feedback and optimization",
      "Next-best action suggestions",
      "Timeline tracking and nudges",
      "Workflow automation support",
    ],
    image: img3,
    imageBackground: imfb3,
  },
  {
    title: "Automate Complete Process",
    description:
      "Streamline your entire hiring journey - from job posting to onboarding - with AI handling every step, ensuring speed, accuracy, and zero manual effort.",
    details: [
      "AI-driven job posting & role matching",
      "Automated resume parsing & candidate screening",
      "Fully autonomous interviews & evaluations",
      "Instant offer letter generation & onboarding setup",
    ],
    image: img4,
    imageBackground: imfb4,
  },
];

import type { ReactNode } from "react";
function AnimatedCard({ children }: { children: ReactNode }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: false });

  React.useEffect(() => {
    controls.start(
      inView
        ? {
            scale: 1.03,
            y: -10,
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            transition: { duration: 0.5, ease: "easeOut" },
          }
        : {
            scale: 1,
            y: 0,
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            transition: { duration: 0.5, ease: "easeOut" },
          }
    );
  }, [inView, controls]);

  return (
    <motion.div ref={ref} animate={controls} initial={{ scale: 1, y: 0 }}>
      {children}
    </motion.div>
  );
}

export function CompanyFeaturesCards() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-300 flex flex-col items-center px-[4%] py-[8vh]">
      {/* Heading */}
      <div className="mb-[2vh] flex justify-center">
        <span className="inline-flex items-center gap-[0.5vw] px-[1vw] py-[0.5vh] rounded-full bg-gray-100 text-gray-700 font-medium shadow text-[max(1.3vw,1rem)]">
          <span className="text-[max(1.5vw,1.2rem)] font-semibold">★</span>
          Smart. Simple. Scalable.
        </span>
      </div>

      <h1 className="font-bold text-gray-900 text-center mb-[1vh] leading-tight text-[max(3vw,1.8rem)]">
        Why Choose Zordie AI
      </h1>

      <p className="text-gray-600 text-center mb-[4vh] max-w-[60ch] text-[max(1.2vw,1rem)]">
        Empowering businesses with seamless customer management and actionable insights.
      </p> 

      {/* Intro */}
      <div className="w-full max-w-[90%] mx-auto mb-[8vh]">
        <div className="flex items-center gap-[0.5vw] mb-[1vh]">
          <span className="inline-flex items-center gap-[0.5vw] px-[0.8vw] py-[0.5vh] rounded-full bg-blue-100 text-gray-700 font-medium text-[max(1vw,0.85rem)]">
            <span className="text-[max(0.8vw,0.7rem)] font-semibold">★</span>Features
          </span>
        </div>

        <h2 className="font-bold mb-[1vh] text-[max(3.5vw,2rem)]">
          Powerful Features to Simplify HR Management
        </h2>

        <p className="text-gray-600 mb-[2vh] max-w-[65ch] text-[max(1.3vw,1rem)]">
          Our platform equips recruiters with intelligent tools to automate tasks, boost efficiency,
          and hire top talent — faster and smarter.
        </p>

        <button className="bg-black text-white rounded-full font-semibold shadow hover:bg-gray-900 transition-all px-[2vw] py-[1vh] text-[max(1.1vw,0.95rem)]">
          Learn more features
        </button>
      </div>

      {/* Feature Cards */}
      <div className="w-full max-w-[90%] flex flex-col gap-[6vh]">
        {features.map((feature, idx) => (
          <AnimatedCard key={feature.title}>
            <div className="flex flex-col md:flex-row items-center bg-white rounded-3xl overflow-hidden">
              {idx % 2 === 0 ? (
                <>
                  <div className="md:w-1/2 w-full p-[4%] flex flex-col justify-center">
                    <h3 className="font-bold mb-[1vh] text-[max(2.8vw,1.5rem)]">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-[2vh] text-[max(1.3vw,1rem)]">
                      {feature.description}
                    </p>
                    {feature.details && (
                      <ul className="list-none mb-[2vh]">
                        {feature.details.map((item, i) => (
                          <li key={i} className="flex items-start gap-[1vw] mb-[1vh]">
                            <span className="text-black text-[max(1.8vw,1.2rem)]">✓</span>
                            <span className="text-gray-700 text-[max(1.3vw,1rem)]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <FeatureImage feature={feature} />
                </>
              ) : (
                <>
                  <FeatureImage feature={feature} />
                  <div className="md:w-1/2 w-full p-[4%] flex flex-col justify-center">
                    <h3 className="font-bold mb-[1vh] text-[max(2.8vw,1.5rem)]">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-[2vh] text-[max(1.3vw,1rem)]">
                      {feature.description}
                    </p>
                    {feature.details && (
                      <ul className="list-none mb-[2vh]">
                        {feature.details.map((item, i) => (
                          <li key={i} className="flex items-start gap-[1vw] mb-[1vh]">
                            <span className="text-black text-[max(1.8vw,1.2rem)]">✓</span>
                            <span className="text-gray-700 text-[max(1.3vw,1rem)]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </>
              )}
            </div>
          </AnimatedCard>
        ))}
      </div>
    </div>
  );
}

function FeatureImage({ feature }: { feature: any }) {
  return (
    <div className="md:w-1/2 w-full flex justify-center items-center p-[4%]">
      <div
        className="rounded-3xl shadow-lg flex justify-center items-center"
        style={{
          padding: "5%",
          backgroundImage: `url(${feature.imageBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "500px",
        }}
      >
        <img
          src={feature.image}
          alt={feature.title}
          className="rounded-3xl bg-white shadow-md"
          style={{
            maxWidth: "80%",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
}
