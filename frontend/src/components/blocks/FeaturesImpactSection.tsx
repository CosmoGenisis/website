import React from "react";
import { motion } from "framer-motion";

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

interface FeaturesImpactSectionProps {
  heading: React.ReactNode;
  subheading: React.ReactNode;
  topFeatures: FeatureCard[];
  middleFeatures: FeatureCard[];
  bigFeature: FeatureCard;
  backgroundGradient?: string;
}

export function FeaturesImpactSection({
  heading,
  subheading,
  topFeatures,
  middleFeatures,
  bigFeature,
  backgroundGradient = "linear-gradient(180deg, #f8fafc 0%, #eaf1ff 100%)",
}: FeaturesImpactSectionProps) {
  return (
    <section
      className="w-full py-20 px-4 flex flex-col items-center"
      style={{ background: backgroundGradient }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">{heading}</h2>
      <p className="text-lg text-gray-700 text-center mb-12 max-w-[40%]">{subheading}</p>
      {/* Top 3 Cards */}
      <div className="w-full max-w-[90%] grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {topFeatures.map((feature, idx) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 * idx }}
            className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-4 items-start"
          >
            <div className="mb-2">{feature.icon}</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-base mb-4">{feature.description}</p>
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-32 object-cover object-top rounded-xl"
              draggable={false}
            />
          </motion.div>
        ))}
      </div>
      {/* Middle 2 Cards */}
      <div className="w-full max-w-[90%] grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {middleFeatures.map((feature, idx) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 * idx }}
            className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-4 items-start"
          >
            <div className="mb-2">{feature.icon}</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-base mb-4">{feature.description}</p>
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-40 object-cover object-top rounded-xl"
              draggable={false}
            />
          </motion.div>
        ))}
      </div>
      {/* Big Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="w-full max-w-[90%] bg-white rounded-3xl shadow-2xl p-12 flex flex-col md:flex-row items-center gap-8"
      >
        <div className="flex-1 flex flex-col gap-4">
          <div className="mb-2">{bigFeature.icon}</div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">{bigFeature.title}</h3>
          <p className="text-gray-600 text-lg mb-4">{bigFeature.description}</p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src={bigFeature.image}
            alt={bigFeature.title}
            className="w-full max-w-[80%] h-64 object-cover object-top rounded-xl"
            draggable={false}
          />
        </div>
      </motion.div>
    </section>
  );
}