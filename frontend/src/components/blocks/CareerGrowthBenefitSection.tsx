import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";


interface BenefitCardProps {
  heading: React.ReactNode;
  subheading?: React.ReactNode;
  card: {
    icon?: React.ReactNode;
    title: React.ReactNode;
    description: React.ReactNode;
    image: string;
    imageAlt?: string;
  };
  features?: Array<{
    icon?: React.ReactNode;
    title: React.ReactNode;
    description: React.ReactNode;
  }>;
}

export function CareerGrowthBenefitSection({
  heading,
  subheading,
  card,
  features = [],
}: BenefitCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Animate scale and y position as you scroll
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1.08]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <section className="w-full bg-white py-12 px-2 sm:px-6">
      <div className="max-w-[90%] mx-auto flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-6xl font-bold text-center mb-4">{heading}</h2>
        {subheading && (
          <p className="text-lg sm:text-xl text-gray-500 text-center mb-12 max-w-[50%]">
            {subheading}
          </p>
        )}
        {/* Card */}
        <div
          ref={ref}
          className="w-full bg-gray-100 rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-0 md:gap-8 p-4 sm:p-8 border border-gray-100"
        >
          {/* Left: Text */}
          <div className="flex-1 flex flex-col items-start justify-center p-6 md:p-8">
            <div className="flex items-center mb-3">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-700 mr-3 text-4xl">
                {card.icon || "💡"}
              </span>
              <span className="font-bold text-xl">{card.title}</span>
            </div>
            <div className="text-gray-600 text-base sm:text-lg mb-2">
              {card.description}
            </div>
          </div>
          {/* Right: Image with scroll animation */}
          <div className="flex-1 flex items-center justify-center w-full max-w-[80%] p-4">
            <motion.div
                style={{ scale, y }}
                className="w-full rounded-2xl overflow-hidden border-[6px] border-black shadow relative"
                >
                <img
                    src={card.image}
                    alt={card.imageAlt || "Career Growth"}
                    className="w-full h-[560px] object-cover object-top scale-100"
                    style={{ transformOrigin: "top center" }}
                    draggable={false}
                />
                </motion.div>
          </div>
        </div>

        {/* Feature Cards Row */}
        {features.length > 0 && (
          <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-3xl border border-gray-200 shadow flex flex-col p-10 min-h-[320px] transition hover:shadow-lg"
              >
                <div className="mb-6">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white text-gray-900 text-3xl">
                    {feature.icon}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-500 text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}