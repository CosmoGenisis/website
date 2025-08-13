import { useState } from "react";
import { motion } from "framer-motion";
import React from "react";

interface Benefit {
  icon: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  highlight?: boolean;
  image: string;
  imageAlt?: string;
}

interface AgenticHiringBenefitsSectionProps {
  badge?: React.ReactNode;
  heading: React.ReactNode;
  benefits: Benefit[];
  dashboardAlt?: string;
}

export function AgenticHiringBenefitsSection({
  badge,
  heading,
  benefits,
  dashboardAlt = "Dashboard",
}: AgenticHiringBenefitsSectionProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex justify-start"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium shadow">
              {badge}
            </span>
          </motion.div>
        )}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold mb-20"
        >
          {heading}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Benefits List */}
          <div className="flex flex-col gap-4">
            {benefits.map((benefit, idx) => (
              <motion.button
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-2xl p-6 flex items-start gap-4 shadow-sm text-left transition-all duration-300 cursor-pointer ${
                  activeIdx === idx
                    ? "bg-blue-50 shadow-lg border-2 border-blue-400"
                    : "bg-white hover:bg-blue-50"
                }`}
                onClick={() => setActiveIdx(idx)}
                aria-pressed={activeIdx === idx}
                type="button"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl mt-1">
                  {benefit.icon}
                </span>
                <div>
                  <div className="font-semibold text-lg md:text-xl mb-1">{benefit.title}</div>
                  {benefit.description && (
                    <div className="text-gray-500 text-base">{benefit.description}</div>
                  )}
                </div>
              </motion.button>
            ))}
          </div>
          {/* Right: Active Benefit Image */}
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, scale: 0.96, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full flex justify-center"
          >
            <img
              src={benefits[activeIdx].image}
              alt={benefits[activeIdx].imageAlt || dashboardAlt}
              className="w-full max-w-2xl rounded-2xl shadow-xl object-cover"
              draggable={false}
            />
          </motion.div>
        </div>
      </div>
      </section>
  );
}