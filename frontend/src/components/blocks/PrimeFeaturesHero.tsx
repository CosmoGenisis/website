import React from "react";
import { motion } from "framer-motion";

interface FeatureCard {
  text: string;
}

interface PrimeFeaturesHeroProps {
  badge: React.ReactNode;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  features: FeatureCard[];
  centerLogo: string;
  backgroundGradient?: string;
}

export function PrimeFeaturesHero({
  badge,
  title,
  subtitle,
  features,
  centerLogo,
  backgroundGradient = "linear-gradient(120deg, #eaf1ff 0%, #fde7e7 100%)",
}: PrimeFeaturesHeroProps) {
  return (
    <section
      className="w-full relative overflow-hidden px-4 md:px-12 py-16 md:py-32 flex flex-col items-center"
      style={{ background: backgroundGradient }}
    >
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <span className="inline-block px-4 py-2 rounded-full bg-white text-gray-800 text-base font-medium shadow border border-gray-200">
          {badge}
        </span>
      </motion.div>
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-4xl md:text-6xl font-bold text-black mb-4 text-center"
      >
        {title}
      </motion.h1>
      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-base md:text-lg text-gray-700 mb-16 text-center max-w-xl"
      >
        {subtitle}
      </motion.p>
      {/* Features Grid */}
      <div className="relative w-full max-w-[1400px] mx-auto flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
          {/* Top Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 text-center text-gray-800 font-medium w-full max-w-xs">
              {features[0].text}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 text-center text-gray-800 font-medium w-full max-w-xs">
              {features[1].text}
            </div>
          </motion.div>
        </div>
        {/* Center Logo and Divider */}
        <div className="relative flex justify-center items-center my-8 w-full h-24">
          <motion.img
            src={centerLogo}
            alt="Prime Logo"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="w-40 h-40 object-contain z-10 mx-auto"
          />
          {/* Cross lines */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-600"
            style={{ zIndex: 0 }}
          />
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 5 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-600"
            style={{ zIndex: 0 }}
          />
        </div>
        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex justify-center"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 text-center text-gray-800 font-medium w-full max-w-xs">
              {features[2].text}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex justify-center"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 text-center text-gray-800 font-medium w-full max-w-xs">
              {features[3].text}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}