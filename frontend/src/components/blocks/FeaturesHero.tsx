"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Zap } from 'lucide-react';
import { AnimatedHeroBackground } from './AnimatedHeroBackground';

export function FeaturesHero() {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden relative">
      {/* Use the consistent AnimatedHeroBackground component */}
      <AnimatedHeroBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Column - Text Content */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <Cpu className="w-4 h-4 mr-2" />
                AI-Powered Platform
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Everything You Need to Run HR, Hiring, Finance, and Job Posting
              <span className="text-blue-600">.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Zordie AI replaces disconnected tools with intelligent agents that automate entire workflows, collaborate seamlessly, and empower your team to scale effortlessly. From hiring to onboarding, payroll to performance — Zordie's AI agents work like 10,000× human experts.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg transition-all transform hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 font-medium rounded-lg shadow-md border border-gray-200 transition-all flex items-center justify-center">
                <Zap className="w-5 h-5 mr-2 text-blue-600" />
                Watch Demo
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12 flex items-center"
            >
              <div className="flex -space-x-2 mr-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <div className={`w-full h-full bg-gradient-to-br ${[
                      'from-blue-400 to-blue-600',
                      'from-purple-400 to-purple-600',
                      'from-green-400 to-green-600',
                      'from-yellow-400 to-yellow-600'
                    ][i]}`}></div>
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-medium">Trusted by 1,000+ companies</div>
                <div className="text-xs text-gray-500">Join the AI revolution</div>
              </div>
            </motion.div>
          </div>
          
          {/* Right Column - Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-900/80"></div>
              </div>
              
              <div className="relative p-8 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-white font-bold">Zordie AI</div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-grow flex items-center justify-center">
                  <div className="relative w-full h-full max-w-xs mx-auto">
                    {/* Central node */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-purple-600 flex items-center justify-center z-20 shadow-lg border-4 border-gray-800">
                      <Brain className="w-12 h-12 text-white" />
                    </div>
                    
                    {/* Animated pulse */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-purple-600 opacity-40 animate-ping"></div>
                    
                    {/* Orbiting elements */}
                    {[...Array(6)].map((_, i) => {
                      const angle = (i * (360 / 6)) * (Math.PI / 180);
                      const delay = i * 0.5;
                      const radius = 40; // % of container
                      const x = 50 + radius * Math.cos(angle);
                      const y = 50 + radius * Math.sin(angle);
                      
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + (i * 0.1), duration: 0.5 }}
                          className={`absolute w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-gray-800 z-10 ${[
                            'bg-blue-500',
                            'bg-green-500',
                            'bg-yellow-500',
                            'bg-pink-500',
                            'bg-indigo-500',
                            'bg-orange-500'
                          ][i]}`}
                          style={{
                            top: `${y}%`,
                            left: `${x}%`,
                            transform: 'translate(-50%, -50%)'
                          }}
                        >
                          <div className="text-white font-bold text-xs">
                            {['HR', 'Hire', 'Pay', 'Track', 'Learn', 'Grow'][i]}
                          </div>
                        </motion.div>
                      );
                    })}
                    
                    {/* Connection lines */}
                    {[...Array(6)].map((_, i) => {
                      const angle = (i * (360 / 6)) * (Math.PI / 180);
                      
                      return (
                        <motion.div
                          key={`line-${i}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.5 }}
                          transition={{ delay: 0.8 + (i * 0.1), duration: 0.5 }}
                          className="absolute top-1/2 left-1/2 h-0.5 bg-gray-500 z-0"
                          style={{
                            width: '40%',
                            transform: `rotate(${angle}rad)`,
                            transformOrigin: 'left center'
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
                
                {/* Footer */}
                <div className="mt-auto">
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="text-green-400 text-sm font-mono mb-1">$ AI agents initialized</div>
                    <div className="text-gray-400 text-xs">Ready to transform your workflow</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}