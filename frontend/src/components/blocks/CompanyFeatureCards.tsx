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

function AnimatedCard({ children }: { children: React.ReactNode }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.4, // triggers when 40% is visible
    triggerOnce: false,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        scale: 1.03,
        y: -10,
        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
        transition: { duration: 0.5, ease: "easeOut" },
      });
    } else {
      controls.start({
        scale: 1,
        y: 0,
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        transition: { duration: 0.5, ease: "easeOut" },
      });
    }
  }, [inView, controls]);

  return (
    <motion.div ref={ref} animate={controls} initial={{ scale: 1, y: 0 }}>
      {children}
    </motion.div>
  );
}

export function CompanyFeaturesCards() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex flex-col items-center px-4 py-12">
      {/* Heading */}
      <div className="mb-4 flex justify-center">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium shadow">
          <span className="text-xs font-semibold">★</span>
          Smart. Simple. Scalable.
        </span>
      </div>
      <h1 className="text-5xl font-bold text-gray-900 text-center mb-4 leading-tight">
        Why Choose Zordie AI
      </h1>
      <p className="text-lg text-gray-600 text-center mb-12 max-w-xl">
        Empowering businesses with seamless customer management and actionable insights.
      </p>

      {/* Intro */}
      <div className="w-full max-w-7xl mx-auto mb-16">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-gray-700 font-medium text-sm">
            <span className="text-xs font-semibold">★</span>Features
          </span>
        </div>
        <h2 className="text-6xl font-bold mb-4">
          Powerful Features to Simplify HR Management
        </h2>
        <p className="text-2xl text-gray-600 mb-6">
          Our platform equips recruiters with intelligent tools to automate tasks, boost efficiency,
          and hire top talent - faster and smarter.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-900 transition-all">
          Learn more features
        </button>
      </div>

      {/* Feature Cards */}
      <div className="w-full max-w-7xl flex flex-col gap-12">
        {features.map((feature, idx) => (
          <AnimatedCard key={feature.title}>
            <div className="flex flex-col md:flex-row items-center bg-white rounded-3xl overflow-hidden">
              {idx % 2 === 0 ? (
                <>
                  <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
                    <h3 className="text-5xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-gray-600 text-xl mb-4">
                      {feature.description}
                    </p>
                    {feature.details && (
                      <ul className="list-none mb-4">
                        {feature.details.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-4 mb-4"
                          >
                            <span className="text-black text-3xl">✓</span>
                            <span className="text-gray-700 text-xl">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="md:w-1/2 w-full flex justify-center items-center p-8">
                    <div className="relative flex justify-center items-center my-12">
                      <div
                        className="rounded-3xl shadow-lg flex justify-center items-center"
                        style={{
                          padding: "40px",
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
                  </div>
                </>
              ) : (
                <>
                  <div className="md:w-1/2 w-full flex justify-center items-center p-8">
                    <div className="relative flex justify-center items-center my-12">
                      <div
                        className="rounded-3xl shadow-lg flex justify-center items-center"
                        style={{
                          padding: "40px",
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
                  </div>
                  <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
                    <h3 className="text-5xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-gray-600 text-xl mb-4">
                      {feature.description}
                    </p>
                    {feature.details && (
                      <ul className="list-none mb-4">
                        {feature.details.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-4 mb-2"
                          >
                            <span className="text-black text-3xl">✓</span>
                            <span className="text-gray-700 text-xl">{item}</span>
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
