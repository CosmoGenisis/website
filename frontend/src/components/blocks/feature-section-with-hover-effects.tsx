import { motion } from "framer-motion";
import {IntegrationsNetwork} from "@/components/blocks/IntegrationsNetwork";

const features = [
  {
    text: "Coordinates all agent activities with intelligent task distribution and priority management.",
    position: "top-left",
  },
  {
    text: "Maintains enterprise-grade security protocols and access controls across all HR systems.",
    position: "top-right",
  },
  {
    text: "Dynamically allocates system resources and manages auto-scaling based on demand.",
    position: "bottom-left",
  },
  {
    text: "Advanced decision-making algorithms that learn from organizational patterns and optimize processes",
    position: "bottom-right",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.5 + i * 0.2, type: "spring", stiffness: 80 },
  }),
};

export function FeaturesSectionWithHoverEffects() {
 return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative"
      style={{
        background: "linear-gradient(180deg, #5B7FFF 0%, #EBC0A8 100%)",
      }}
    >
      {/* Features badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-16 mb-4"
      >
        <span className="px-6 py-2 rounded-full bg-blue-200/80 text-blue-900 font-semibold text-lg shadow flex items-center gap-2">
          <span className="text-2xl leading-none">★</span>
          <span>Features</span>
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold text-white mb-4 mt-4 text-center"
      >
        What Prime Can Do For You
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="text-base md:text-lg text-blue-100 mb-12 text-center max-w-xl"
      >
        See how Prime HR transforms your workflow and drives real results for your team.
      </motion.p>

      {/* Animated Feature Grid */}
      <div className="relative w-full max-w-3xl h-[440px] flex items-center justify-center">
        {/* Animated lines */}
        {/* Vertical */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1.5 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="absolute left-1/2 top-[3%] -translate-x-1/2 w-1 h-[64%] bg-gradient-to-b from-blue-200/80 to-purple-200/60 z-0 origin-top"
        />
        {/* Horizontal */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1.5 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute top-1/2 left-[3%] -translate-y-1/2 h-1 w-[64%] bg-gradient-to-r from-blue-200/80 to-purple-200/60 z-0 origin-left"
        />
        {/* Center hub */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5, type: "spring" }}
          className="absolute left-1/2.5 top-1/2.5 -translate-x-1/2 -translate-y-1/2 z-20 bg-white shadow-xl rounded-full w-28 h-28 flex items-center justify-center"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 shadow-inner"
          />
        </motion.div>

        {/* Feature Cards */}
        {/* Top Left */}
        <motion.div
          custom={0}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="absolute left-0 top-0 w-[320px] max-w-[90vw] flex items-center justify-center"
        >
          <FeatureCard>{features[0].text}</FeatureCard>
        </motion.div>
        {/* Top Right */}
        <motion.div
          custom={1}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="absolute right-0 top-0 w-[320px] max-w-[90vw] flex items-center justify-center"
        >
          <FeatureCard>{features[1].text}</FeatureCard>
        </motion.div>
        {/* Bottom Left */}
        <motion.div
          custom={2}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="absolute left-0 bottom-0 w-[320px] max-w-[90vw] flex items-center justify-center"
        >
          <FeatureCard>{features[2].text}</FeatureCard>
        </motion.div>
        {/* Bottom Right */}
        <motion.div
          custom={3}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="absolute right-0 bottom-0 w-[320px] max-w-[90vw] flex items-center justify-center"
        >
          <FeatureCard>{features[3].text}</FeatureCard>
        </motion.div>
      </div>
      <IntegrationsNetwork />
    </div>
  );
}

function FeatureCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.04,
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
      }}
      className="bg-white rounded-2xl shadow-lg px-7 py-7 text-center text-gray-700 font-medium text-base md:text-lg select-none"
      style={{
        minHeight: 120,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </motion.div>
  );
}

