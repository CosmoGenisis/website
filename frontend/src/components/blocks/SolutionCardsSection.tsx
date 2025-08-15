import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { BadgeCheck, Settings, Zap, Users, Mic, BarChart3 } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface SolutionCardsSectionProps {
  badge?: React.ReactNode;
  heading: React.ReactNode;
  description: React.ReactNode;
  tags?: Array<{ icon: React.ReactNode; label: string }>;
  image: string;
  features: Feature[];
}

export function SolutionCardsSection({
  badge,
  heading,
  description,
  tags = [],
  image,
  features,
}: SolutionCardsSectionProps) {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const leftInView = useInView(leftRef, { once: true, margin: "-100px" });
  const rightInView = useInView(rightRef, { once: true, margin: "-100px" });

  return (
    <section className="w-full py-[8vh] px-[4vh] bg-white">
      <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Side */}
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, y: 60 }}
          animate={leftInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          {/* ...existing left side code... */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium shadow">
                {badge}
              </span>
            </motion.div>
          )}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2rem,4vw,3.5rem)]  font-bold mb-4 leading-tight"
          >
            {heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[clamp(1rem,1.6vw,1.25rem)] text-gray-600 mb-6"
          >
            {description}
          </motion.p>
          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {tags.map((tag, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium"
              >
                {tag.icon}
                {tag.label}
              </motion.span>
            ))}
          </div>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full max-w-[80%] max-h-[500px] rounded-xl overflow-hidden object-top shadow-lg"
          >
            <img
              src={image}
              alt="Solution"
              className="w-full h-auto object-cover"
              draggable={false}
            />
          </motion.div>
        </motion.div>
        {/* Right Side: Features */}
        <motion.div
          ref={rightRef}
          initial={{ opacity: 0, x: 80 }}
          animate={rightInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="bg-white rounded-2xl border border-gray-200 shadow p-6 flex items-start gap-4 hover:shadow-lg transition"
            >
              <div className="flex-shrink-0">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 text-2xl">
                  {feature.icon}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-2xl mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-xl">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}