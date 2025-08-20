import { Box, CalendarCheck, Flag, Users, SlidersHorizontal, Sparkles, TrendingUp, Zap, Clock, Target, BarChart3, Activity } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import img2 from "@/images/Logo.png";
import img3 from "@/images/notion.png";
import img4 from "@/images/teams.png";
import img5 from "@/images/Amazon.png";
import img6 from "@/images/slack.png";
import img7 from "@/images/Google.png";
import img8 from "@/images/discord.png";
import img9 from "@/images/zoom.png";
import img10 from "@/images/airtable.png";

export default function WhyZordie() {
  const dashboardData = [
    { icon: TrendingUp, label: "Hiring Speed", value: "85%", change: "+12%", color: "text-green-400" },
    { icon: Target, label: "Match Accuracy", value: "94%", change: "+8%", color: "text-blue-400" },
    { icon: Clock, label: "Time Saved", value: "72h", change: "+24h", color: "text-purple-400" },
    { icon: Users, label: "Active Candidates", value: "2.4K", change: "+340", color: "text-cyan-400" },
  ];

  const features = [
    { icon: Box, text: "No more manual screening", metric: "Save 40+ hours/week" },
    { icon: CalendarCheck, text: "Zero scheduling conflicts", metric: "100% automated" },
    { icon: Flag, text: "Fully integrated pipeline", metric: "End-to-end solution" },
    { icon: Users, text: "Higher candidate quality", metric: "94% match rate" },
    { icon: SlidersHorizontal, text: "Lower cost per hire", metric: "60% cost reduction" },
  ];

  return (
    <div className="relative min-h-screen bg-black py-16 lg:py-24 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Floating Data Points */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dashboard Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium backdrop-blur-sm mb-8"
          >
            <Activity className="w-4 h-4 animate-pulse" />
            Live Dashboard
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6"
          >
            Why <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Zordie</span>?
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            Real-time insights into your autonomous recruitment platform performance
          </motion.p>
        </motion.div>

        {/* Dashboard Metrics Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {dashboardData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className={`w-6 h-6 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                </motion.div>
                <span className={`text-sm font-medium ${item.color} group-hover:scale-110 transition-transform duration-300`}>{item.change}</span>
              </div>
              <motion.div 
                className="text-3xl font-black text-white mb-2 group-hover:text-blue-100 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                {item.value}
              </motion.div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          {/* Left Column - Features List */}
          <div className="space-y-6">
            <motion.h3 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-3xl font-bold text-white mb-8"
            >
              System Capabilities
            </motion.h3>
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 + i * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="group flex items-center justify-between p-6 rounded-2xl bg-gradient-to-r from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 rounded-xl bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors duration-300"
                  >
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </motion.div>
                  <div>
                    <span className="text-white font-semibold text-lg group-hover:text-blue-100 transition-colors duration-300 block">
                      {feature.text}
                    </span>
                    <span className="text-sm text-gray-400 group-hover:text-blue-300 transition-colors duration-300">
                      {feature.metric}
                    </span>
                  </div>
                </div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  →
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Integration Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col items-center justify-center"
          >
            <motion.h3 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-3xl font-bold text-white mb-12"
            >
              Integration Network
            </motion.h3>
            
            <div className="relative w-96 h-96">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl opacity-50" />
              
              {/* Central Hub */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.6 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="absolute inset-0 flex items-center justify-center z-10"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500/30 to-purple-500/30 backdrop-blur-sm border border-blue-500/50 shadow-2xl flex items-center justify-center rounded-3xl">
                  <img src={img2} alt="Zordie Logo" className="w-16 h-16 object-contain" />
                </div>
              </motion.div>

              {/* Orbiting Integration Icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                {[img3, img4, img5, img6, img7, img8].map((icon, idx) => {
                  const angle = (360 / 6) * idx;
                  const radius = 38;
                  const rad = (angle * Math.PI) / 180;
                  const x = radius * Math.cos(rad);
                  const y = radius * Math.sin(rad);
                  
                  return (
                    <motion.div
                      key={idx}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 1.8 + idx * 0.1 }}
                      whileHover={{ scale: 1.3, zIndex: 20 }}
                      className="absolute w-16 h-16 bg-gradient-to-br from-gray-700/60 to-gray-800/60 backdrop-blur-sm border border-white/30 rounded-2xl shadow-lg flex items-center justify-center cursor-pointer hover:shadow-xl hover:border-blue-400/50 transition-all duration-300"
                      style={{
                        left: `calc(50% + ${x}% - 2rem)`,
                        top: `calc(50% + ${y}% - 2rem)`,
                      }}
                    >
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                      >
                        <img src={icon} alt={`Integration ${idx}`} className="w-8 h-8 object-contain" />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="38%"
                  fill="none"
                  stroke="rgba(59, 130, 246, 0.3)"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 2 }}
                  animate={{ strokeDashoffset: [0, -24] }}
                />
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="25%"
                  fill="none"
                  stroke="rgba(147, 51, 234, 0.2)"
                  strokeWidth="1"
                  strokeDasharray="4,4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 2.2 }}
                  animate={{ strokeDashoffset: [0, 16] }}
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
