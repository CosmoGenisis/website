import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Real Time Analytics",
    description: "Monitor result performance with real time insights.",
    icon: "https://framerusercontent.com/images/g0IzcQ8nVLVDKLftRrR4S6BPODs.svg",
    image: "https://framerusercontent.com/images/xJ3fjboUJLVolfGqf752ILN4.png",
  },
  {
    title: "Automated Scheduling",
    description: "Plan and automate scheduling across all platforms.",
    icon: "https://framerusercontent.com/images/k6femoT7icmuqmWn0BhOEtCzIo.svg",
    image: "https://framerusercontent.com/images/jrY5DWrX2645mgGTeVIjpXjVIU.png",
  },
  {
    title: "Team Collaboration",
    description: "Manage and improve campaigns efficiently.",
    icon: "https://framerusercontent.com/images/J99C1i2fb1NT2M6psXb0G98jgk.svg",
    image: "https://framerusercontent.com/images/A7cCrglKezIsVIm88768rZVcFJo.png",
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

export function SolutionsImpactSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Solutions <span className="text-blue-700">Built For Impact</span>
        </h2>
        <p className="text-center text-gray-700 text-lg mb-12">
          From startups to enterprises, Zordie delivers AI-driven hiring and HR tools that scale with your goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              className="bg-white rounded-3xl border border-gray-200 shadow-md p-8 flex flex-col items-start transition-all duration-300 hover:shadow-xl"
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <motion.div
                className="flex items-center justify-between w-full mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.1, duration: 0.5, type: "spring" }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900">{card.title}</h3>
                <div>
                  <img
                    src={card.icon}
                    alt={`${card.title} icon`}
                    className="w-12 h-12 rounded-full bg-white shadow"
                    draggable={false}
                  />
                </div>
              </motion.div>
              <motion.p
                className="text-gray-600 text-lg mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + idx * 0.1, duration: 0.5, type: "spring" }}
                viewport={{ once: true }}
              >
                {card.description}
              </motion.p>
              <motion.div
                className="w-full flex justify-center mt-auto"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + idx * 0.1, duration: 0.6, type: "spring" }}
                viewport={{ once: true }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="max-w-full max-w-xs h-full object-contain mx-auto"
                  draggable={false}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}