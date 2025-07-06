import React from "react";
import { motion } from "framer-motion";
import {CallToAction} from "@/components/blocks/CallToAction"

const cards = [
  {
    title: "Streamline Communication",
    description: "Manage conversations for smooth coordination.",
    icon: "https://framerusercontent.com/images/UX7V6iQCHgJV9wGD6nh5qQJEa8.svg",
    image: "https://framerusercontent.com/images/jg8cLHHFSZlOGSdg3rGKij2x6s.png",
  },
  {
    title: "Customizable Dashboards",
    description: "Adapt your workspace to highlight critical metrics.",
    icon: "https://framerusercontent.com/images/XBuXmqS11zJWm9Z9ADQGF1MwEAg.svg",
    image: "https://framerusercontent.com/images/Tb7VqW7xHrIJevRarCi90qfwCA.png",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.15 + i * 0.15, type: "spring", stiffness: 80 },
  }),
};

export function ImpactSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  className="max-w-full max-w-xl h-60 object-contain mx-auto"
                  draggable={false}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-12">
        <CallToAction />
      </div>
      </div>
    </section>
  );
}