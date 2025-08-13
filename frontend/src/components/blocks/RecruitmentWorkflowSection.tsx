import { motion } from "framer-motion";
import React from "react";

interface WorkflowStep {
  image: string;
  imageAlt?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  icon?: React.ReactNode;
}

interface BigWorkflowCard {
  image: string;
  imageAlt?: string;
  icon?: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
}

interface RecruitmentWorkflowSectionProps {
  heading: React.ReactNode;
  subheading: React.ReactNode;
  steps: WorkflowStep[];
  bigCard?: BigWorkflowCard;
}

export function RecruitmentWorkflowSection({
  heading,
  subheading,
  steps,
  bigCard,
}: RecruitmentWorkflowSectionProps) {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold text-center mb-6"
        >
          {heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-gray-600 text-center mb-12"
        >
          {subheading}
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              className="bg-white rounded-3xl shadow-xl p-6 flex flex-col"
            >
              <div className="w-full mb-6 flex justify-center">
                <img
                  src={step.image}
                  alt={step.imageAlt || "Workflow step"}
                  className="w-full max-w-xl max-h-[500px] rounded-2xl shadow-lg object-top overflow-hidden"
                  draggable={false}
                />
              </div>
              <div className="flex items-center gap-2 mb-3">
                {step.icon && (
                  <span className="text-blue-600 text-2xl">{step.icon}</span>
                )}
                <h3 className="text-2xl font-semibold">{step.title}</h3>
              </div>
              <p className="text-gray-600 text-base md:text-lg">{step.description}</p>
            </motion.div>
          ))}
        </div>
        {bigCard && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 mt-4"
          >
            <div className="flex-1 flex justify-center mb-8 md:mb-0">
              <img
                src={bigCard.image}
                alt={bigCard.imageAlt || "Workflow"}
                className="w-full max-w-full rounded-2xl shadow-lg object-cover"
                draggable={false}
              />
            </div>
            <div className="flex-1 flex flex-col justify-center items-start">
              <div className="flex items-center gap-3 mb-4">
                {bigCard.icon && (
                  <span className="text-blue-600 text-3xl">{bigCard.icon}</span>
                )}
                <h3 className="text-3xl font-bold">{bigCard.title}</h3>
              </div>
              <p className="text-gray-700 text-lg md:text-xl">{bigCard.description}</p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}