import React, { useState } from "react";
import { motion } from "framer-motion";
import { JobBoard } from "./JobBoard";
import { TeamCollaboration } from "./TeamCollaboration";

const cards = [
  {
    title: "Enterprise HR Automation",
    subtitle: "Smart. Secure. Scalable",
    description:
      "Zordie automates HR for large enterprises with custom workflows, advanced compliance, multi-location support, and enterprise-grade security.",
    image:
      "https://framerusercontent.com/images/Dlhc1x0fkcb9BIk5La0v5EYiEc.png",
  },
  {
    title: "HR Analytics & Insights",
    subtitle: "Smart HR Insights",
    description:
      "Zordie turns your HR data into strategic insights with predictive analytics, real-time dashboards, and custom reports.",
    image:
      "https://framerusercontent.com/images/8eCoX7iSm0Kse8gwt5iefVpWu8.png",
  },
  {
    title: "Compliance Management",
    subtitle: "Smart Compliance Engine",
    description:
      "Zordie automates compliance monitoring across jurisdictions with real-time updates, risk assessments, and detailed audit trails.",
    image:
      "https://framerusercontent.com/images/0TLmrC2akHHNzOrjViloHpiQ.png",
  },
  {
    title: "Talent Acquisition Excellence",
    subtitle: "Intelligent Hiring Engine",
    description:
      "Zordie streamlines hiring with AI matching, automated screening, and 360° candidate verification—sourcing top talent globally.",
    image:
      "https://framerusercontent.com/images/fYZbglL7QDDchZ0T7s1A84RrE8.jpeg",
  },
  {
    title: "Global Team Management",
    subtitle: "Global Team Management",
    description:
      "Zordie helps you manage global teams with localized HR processes, supporting multiple languages, currencies, and compliance needs.",
    image:
      "https://framerusercontent.com/images/gjRsvD4lhD0GK7XSQCbwMQJzta4.jpeg",
  },
  {
    title: "SMB HR Transformation",
    subtitle: "Fast, Flexible, Affordable",
    description:
      "Zordie offers scalable, easy-to-use HR solutions built for growing small and medium businesses—fast setup, essential tools, and room to scale.",
    image:
      "https://framerusercontent.com/images/arvNahITYjvpA56yT5eoAtd75Sc.png",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.15 + i * 0.12, type: "spring", stiffness: 80 },
  }),
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export function SolutionCardsSection() {
  const [activeTab, setActiveTab] = useState<"companies" | "candidates">("companies");

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Tabs */}
        <motion.div
          className="flex justify-center mb-8"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          
        </motion.div>

        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-2"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <span className="text-blue-700">Solutions That</span>
            <br />
            Work For <span className="text-blue-700">Everyone</span>
          </motion.h1>
          <motion.p
            className="text-gray-600 text-lg mt-2"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 0.2 }}
          >
            Tailor Zordie to your unique hiring needs with flexible, AI-powered solutions that scale as you grow.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.slice(0, 2).map((card, idx) => (
            <motion.div
              key={card.title}
              className={`bg-white rounded-2xl shadow-md border border-gray-100 p-8 flex flex-col items-start
                ${idx === 1 ? "md:col-span-2 max-w-3xl" : "md:col-span-1 max-w-lg"}
              `}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <div className="w-full mb-8">
                <img
                  src={card.image}
                  alt={card.title}
                  className="rounded-xl max-w-full max-h-60 object-contain bg-white items-center mx-auto"
                />
              </div>
              <motion.div
                className="flex items-center gap-2 mb-2"
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                <span className="text-blue-500 text-lg">✧</span>
                <span className="text-gray-500 text-sm font-medium">{card.subtitle}</span>
              </motion.div>
              <motion.h3
                className="text-xl font-semibold text-gray-900 mb-2"
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                {card.title}
              </motion.h3>
              <motion.p
                className="text-gray-600 text-base"
                initial="hidden"
                animate="visible"
                variants={textVariants}
                transition={{ delay: 0.1 }}
              >
                {card.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
        {/* Below Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.slice(2, 4).map((card, idx) => (
            <motion.div
              key={card.title}
              className={`bg-white rounded-2xl shadow-md border border-gray-100 p-8 flex flex-col items-start
                ${idx === 0 ? "md:col-span-2 max-w-3xl" : "md:col-span-1 max-w-lg"}
              `}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <div className="w-full mb-8 flex justify-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="rounded-xl max-w-full max-w-xs max-h-60 object-contain bg-white"
                />
              </div>
              <motion.div
                className="flex items-center gap-2 mb-2"
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                <span className="text-blue-500 text-lg">✧</span>
                <span className="text-gray-500 text-sm font-medium">{card.subtitle}</span>
              </motion.div>
              <motion.h3
                className="text-2xl font-semibold text-gray-900 mb-2"
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                {card.title}
              </motion.h3>
              <motion.p
                className="text-gray-600 text-base"
                initial="hidden"
                animate="visible"
                variants={textVariants}
                transition={{ delay: 0.1 }}
              >
                {card.description}
              </motion.p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.slice(4, 6).map((card, idx) => (
            <motion.div
              key={card.title}
              className={`bg-white rounded-2xl shadow-md border border-gray-100 p-8 flex flex-col items-start
                ${idx === 1 ? "md:col-span-2 max-w-3xl" : "md:col-span-1 max-w-lg"}
              `}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <div className="w-full mb-8">
                <img
                  src={card.image}
                  alt={card.title}
                  className="rounded-xl max-w-full max-h-60 object-contain bg-white items-center mx-auto"
                />
              </div>
              <motion.div
                className="flex items-center gap-2 mb-2"
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                <span className="text-blue-500 text-lg">✧</span>
                <span className="text-gray-500 text-sm font-medium">{card.subtitle}</span>
              </motion.div>
              <motion.h3
                className="text-xl font-semibold text-gray-900 mb-2"
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                {card.title}
              </motion.h3>
              <motion.p
                className="text-gray-600 text-base"
                initial="hidden"
                animate="visible"
                variants={textVariants}
                transition={{ delay: 0.1 }}
              >
                {card.description}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Team Collaboration */}
        <div className="mt-20">
          <TeamCollaboration />
        </div>
        
        {/* Job Board */}
        <div className="mt-20">
          <JobBoard />
        </div>
      </div>
    </section>
  );
}