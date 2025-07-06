import { motion } from "framer-motion";

const tags = [
  "Faster Hiring",
  "Tool-Friendly",
  "Insightful",
  "Automation",
  "Experience First",
];

const features = [
  {
    icon: (
      <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white shadow-lg" style={{
        boxShadow: "0 0 0 0 #fff, 0 0 16px 4px #ff6600, 0 0 32px 8px #ffb86c"
      }}>
        <svg width="24" height="24" fill="none"><rect width="24" height="24" rx="6" fill="#2563eb"/><path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
      </span>
    ),
    title: "90% Faster Hiring",
    desc: "Reduce time-to-hire dramatically with automated workflows and AI-powered candidate matching.",
  },
  {
    icon: (
      <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white shadow-lg" style={{
        boxShadow: "0 0 0 0 #fff, 0 0 16px 4px #ff6600, 0 0 32px 8px #ffb86c"
      }}>
        <svg width="24" height="24" fill="none"><rect width="24" height="24" rx="6" fill="#2563eb"/><path d="M7 12l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
      </span>
    ),
    title: "100% Compliance",
    desc: "Ensure complete regulatory compliance across all jurisdictions with automated monitoring.",
  },
  {
    icon: (
      <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white shadow-lg" style={{
        boxShadow: "0 0 0 0 #fff, 0 0 16px 4px #ff6600, 0 0 32px 8px #ffb86c"
      }}>
        <svg width="24" height="24" fill="none"><rect width="24" height="24" rx="6" fill="#2563eb"/><path d="M8 12h8M8 16h8M8 8h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
      </span>
    ),
    title: "Seamless Integration",
    desc: "Zordie integrates seamlessly with your existing tools, streamlining hiring and supporting your growth at scale.",
  },
  {
    icon: (
      <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white shadow-lg" style={{
        boxShadow: "0 0 0 0 #fff, 0 0 16px 4px #ff6600, 0 0 32px 8px #ffb86c"
      }}>
        <svg width="24" height="24" fill="none"><rect width="24" height="24" rx="6" fill="#2563eb"/><path d="M12 6v6l4 2" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
      </span>
    ),
    title: "24/7 Automation",
    desc: "Round-the-clock HR operations with intelligent agents that never sleep.",
  },
  {
    icon: (
      <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white shadow-lg" style={{
        boxShadow: "0 0 0 0 #fff, 0 0 16px 4px #ff6600, 0 0 32px 8px #ffb86c"
      }}>
        <svg width="24" height="24" fill="none"><rect width="24" height="24" rx="6" fill="#2563eb"/><path d="M12 8a4 4 0 100 8 4 4 0 000-8z" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
      </span>
    ),
    title: "Enhanced Experience",
    desc: "Deliver exceptional candidate and employee experiences throughout their journey.",
  },
];

export function ResultsSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* Left */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-black">
            <span className="text-black">Measurable </span>
            <span className="text-blue-700">Results</span>
            <br />
            <span className="text-black">Across </span>
            <span className="text-blue-700">Industries</span>
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Our solutions deliver quantifiable improvements that transform your HR operations and business outcomes
          </p>
          <div className="flex flex-wrap gap-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium shadow-md hover:bg-blue-700 transition text-base"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        {/* Divider */}
        <div className="hidden md:block w-px bg-gradient-to-b from-purple-400 via-purple-200 to-purple-400 mx-2"></div>
        {/* Right */}
        <div className="w-full md:w-1/2 p-10 flex flex-col gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.5, type: "spring" }}
              className="flex items-start gap-5"
            >
              <div>{f.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-1">{f.title}</h3>
                <p className="text-gray-700 text-base">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}