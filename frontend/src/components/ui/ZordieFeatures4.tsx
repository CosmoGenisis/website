import { useState, useEffect, useRef } from "react";
import { Check, Play, Users, Target, TrendingUp, Sparkles, Zap, Heart, Star, Award, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import vid1 from "@/images/Video.mp4";
import vid2 from "@/images/Video1.mp4";

interface AnimatedStatProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}
function AnimatedStat({ value, suffix = "", label, duration = 1200 }: AnimatedStatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let start = 0;
    const end = value;
    const increment = end / (duration / 16); // 16ms per frame
  let frame: number;

    function animate() {
      start += increment;
      if (start < end) {
        setCount(Math.round(start));
        frame = requestAnimationFrame(animate);
      } else {
        setCount(end);
        cancelAnimationFrame(frame);
      }
    }

    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          animate();
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger if already in view
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <div className="flex flex-col items-center justify-center" ref={ref}>
      <span className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
        {count}{suffix}
      </span>
      <span className="text-xl text-gray-300 font-medium">{label}</span>
    </div>
  );
}

export default function WhyRecruitersLoveUs() {
  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center px-4 sm:px-6 lg:px-8 py-16 lg:py-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-green-400/30 to-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center mb-20"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 text-green-300 text-sm font-medium backdrop-blur-sm mb-8"
        >
          <Heart className="w-4 h-4 animate-pulse" />
          Customer Love
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6"
        >
          Why Everyone <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Loves</span> Zordie
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
        >
          Discover why thousands of recruiters and teams choose Zordie for their hiring needs
        </motion.p>
      </motion.div>

      {/* First Card: Content left, video right */}
      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-32">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="p-3 rounded-2xl bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30">
              <Sparkles className="w-6 h-6 text-green-400" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              For <span className="text-green-400">Recruiters</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              { 
                icon: Zap, 
                title: "AI-Powered Job Creation", 
                text: "Quickly publish roles with AI-generated job descriptions and branding assets.",
                color: "text-yellow-400",
                bgColor: "bg-yellow-500/20"
              },
              { 
                icon: Rocket, 
                title: "End-to-End Automation", 
                text: "Automate hiring from JD to onboarding with AI—verify GitHub, certifications, and portfolios with smart checks.",
                color: "text-blue-400",
                bgColor: "bg-blue-500/20"
              },
              { 
                icon: Target, 
                title: "Smart Scheduling", 
                text: "Eliminate back-and-forth. Let Zordie handle interview scheduling automatically.",
                color: "text-green-400",
                bgColor: "bg-green-500/20"
              },
              { 
                icon: Award, 
                title: "Unified Dashboard", 
                text: "Track candidate scores, and team collaboration in one place.",
                color: "text-purple-400",
                bgColor: "bg-purple-500/20"
              },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="group flex items-start gap-6 p-6 rounded-2xl border border-green-500/20 bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm hover:bg-green-500/10 hover:border-green-400/40 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 cursor-pointer"
              >
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`p-3 rounded-xl ${item.bgColor} group-hover:scale-110 transition-all duration-300 flex-shrink-0`}
                >
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-green-100 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-green-100 leading-relaxed transition-colors duration-300">
                    {item.text}
                  </p>
                </div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="text-green-400 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  →
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center"
        >
          <motion.div 
            whileHover={{ scale: 1.02, rotateY: 5 }}
            transition={{ duration: 0.3 }}
            className="relative group"
          >
            {/* Enhanced Glow Effects */}
            <div className="absolute -inset-4 bg-gradient-to-r from-green-600/30 to-blue-600/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
            
            {/* Video Container */}
            <div className="relative z-10 p-2 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl border border-green-500/30 group-hover:border-green-400/50 transition-all duration-300">
              <video
                src={vid1}
                autoPlay
                loop
                muted
                className="rounded-2xl shadow-2xl w-full h-auto max-w-lg"
              />
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 p-2 bg-green-500/20 rounded-xl border border-green-400/30 backdrop-blur-sm"
            >
              <Star className="w-5 h-5 text-green-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Second Card: Video left, content right */}
      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-32">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center lg:order-1"
        >
          <motion.div 
            whileHover={{ scale: 1.02, rotateY: -5 }}
            transition={{ duration: 0.3 }}
            className="relative group"
          >
            {/* Enhanced Glow Effects */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
            
            {/* Video Container */}
            <div className="relative z-10 p-2 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl border border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-300">
              <video
                src={vid2}
                autoPlay
                loop
                muted
                className="rounded-2xl shadow-2xl w-full h-auto max-w-lg"
              />
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-4 -left-4 p-2 bg-purple-500/20 rounded-xl border border-purple-400/30 backdrop-blur-sm"
            >
              <Heart className="w-5 h-5 text-purple-400" />
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 lg:order-2"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30">
              <Users className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              For <span className="text-purple-400">Teams</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              { 
                icon: Rocket, 
                title: "Seamless Onboarding", 
                text: "Seamless onboarding for new hires with automated workflows.",
                color: "text-cyan-400",
                bgColor: "bg-cyan-500/20"
              },
              { 
                icon: Zap, 
                title: "Tool Integration", 
                text: "Integrated with your favorite tools for effortless collaboration.",
                color: "text-purple-400",
                bgColor: "bg-purple-500/20"
              },
              { 
                icon: TrendingUp, 
                title: "Real-time Analytics", 
                text: "Real-time analytics and reporting for smarter decisions.",
                color: "text-blue-400",
                bgColor: "bg-blue-500/20"
              },
              { 
                icon: Award, 
                title: "Enterprise Ready", 
                text: "Secure, scalable, and built for modern HR teams.",
                color: "text-green-400",
                bgColor: "bg-green-500/20"
              },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                whileHover={{ scale: 1.02, x: -10 }}
                className="group flex items-start gap-6 p-6 rounded-2xl border border-purple-500/20 bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm hover:bg-purple-500/10 hover:border-purple-400/40 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 cursor-pointer"
              >
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`p-3 rounded-xl ${item.bgColor} group-hover:scale-110 transition-all duration-300 flex-shrink-0`}
                >
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-purple-100 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-purple-100 leading-relaxed transition-colors duration-300">
                    {item.text}
                  </p>
                </div>
                <motion.div
                  whileHover={{ x: -5 }}
                  className="text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  ←
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* Animated Stats Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="group p-8 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 rounded-2xl bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors duration-300">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <AnimatedStat value={25} suffix="K+" label="Happy Users" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="group p-8 rounded-3xl bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-sm border border-green-500/20 hover:border-green-400/40 transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 rounded-2xl bg-green-500/20 group-hover:bg-green-500/30 transition-colors duration-300">
                <Target className="w-8 h-8 text-green-400" />
              </div>
              <AnimatedStat value={100} suffix="%" label="User Satisfaction" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="group p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 rounded-2xl bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors duration-300">
                <TrendingUp className="w-8 h-8 text-purple-400" />
              </div>
              <AnimatedStat value={10} suffix="K+" label="Jobs Landed" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
