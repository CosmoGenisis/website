//@ts-nocheck
import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Users, Zap, ZapIcon, Star, BookOpen, Brain, BarChart3, Clock, Target, Shield, Lightbulb, TrendingUp, DollarSign, Award, MessageSquare, FileText, Calculator, Eye, Headphones } from 'lucide-react';
import { motion } from "framer-motion";
import {FeatureCardsShowcase} from "@/components/blocks/FeatureCardsShowcase";


const HRAgentsDashboard = () => {
  const [primeHRScore, setPrimeHRScore] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [optimusProgress, setOptimusProgress] = useState(0);
  const [maxiLearningPath, setMaxiLearningPath] = useState(0);
  const [realTimeData, setRealTimeData] = useState([
    { name: 'Active Alerts', value: 12, trend: '+3' },
    { name: 'Sync Status', value: 99, trend: '+1' },
    { name: 'Agent Coordination', value: 94, trend: '+2' }
  ]);

  const [optimusMetrics, setOptimusMetrics] = useState([
    { name: 'JDs Generated', value: 247, trend: '+12' },
    { name: 'Budget Saved', value: 85, trend: '+5' },
    { name: 'Performance Score', value: 92, trend: '+8' }
  ]);

  const [maxiMetrics, setMaxiMetrics] = useState([
    { name: 'Learning Paths', value: 156, trend: '+15' },
    { name: 'ROI Improvement', value: 78, trend: '+12' },
    { name: 'Review Accuracy', value: 96, trend: '+4' }
  ]);

  const MAX_SCORE = 400;
  const COMP1_SCORE = 220;
  const COMP2_SCORE = 140;

  const [score, setScore] = useState(0);
  const [comp1, setComp1] = useState(0);
  const [comp2, setComp2] = useState(0);


  useEffect(() => {
      let raf: number;
      const animate = () => {
        setScore(prev => (prev < MAX_SCORE ? prev + 8 : MAX_SCORE));
        setComp1(prev => (prev < COMP1_SCORE ? prev + 5 : COMP1_SCORE));
        setComp2(prev => (prev < COMP2_SCORE ? prev + 3 : COMP2_SCORE));
        if (
          score < MAX_SCORE ||
          comp1 < COMP1_SCORE ||
          comp2 < COMP2_SCORE
        ) {
          raf = requestAnimationFrame(animate);
        }
      };
      animate();
      return () => cancelAnimationFrame(raf);
      // eslint-disable-next-line
    }, []);
  // Animated counters and progress bars
  useEffect(() => {
    const timer = setInterval(() => {
      setPrimeHRScore(prev => prev >= 400 ? 0 : prev + 8);
      setOptimusProgress(prev => prev >= 100 ? 0 : prev + 2);
      setMaxiLearningPath(prev => prev >= 100 ? 0 : prev + 1.5);
    }, 100);

    return () => clearInterval(timer);
  }, []);

  // Voice animation
  useEffect(() => {
    const voiceTimer = setInterval(() => {
      setIsListening(prev => !prev);
    }, 2000);

    return () => clearInterval(voiceTimer);
  }, []);

  const FloatingIcon = ({ Icon, delay = 0, position = '' }) => (
    <div 
      className={`absolute opacity-10 animate-bounce ${position}`}
      style={{ 
        animationDelay: `${delay}ms`,
        animationDuration: '3s'
      }}
    >
      <Icon size={32} />
    </div>
  );

  const icons = [
  // Replace with your SVGs or icon components
  <svg key="1" className="w-8 h-8" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/></svg>,
  <svg key="2" className="w-8 h-8" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" stroke="white" strokeWidth="2"/></svg>,
  <svg key="3" className="w-8 h-8" fill="none" viewBox="0 0 24 24"><polygon points="12,2 22,22 2,22" stroke="white" strokeWidth="2" fill="none"/></svg>,
  // ...add more icons as needed
];

const floatVariants = {
  animate: (i: number) => ({
    y: [0, -10, 0],
    transition: {
      duration: 2 + (i % 3),
      repeat: Infinity,
      repeatType: "loop",
      delay: i * 0.2,
      ease: "easeInOut"
    }
  })
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="inline-flex items-center justify-center rounded-full bg-gray-200 p-2 gap-2">
              <Star className="w-5 h-5 text-gray-800" />
               <span className="text-gray-800 font-medium ">Built-In Useful Featuress</span>
            </span>
          </div>
        </div>
        
          {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Transform the Way You Hire 
            <br />
          </h1>
          <h1 className="text-lg md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight text-centre">
            with Intelligent Automation
            <br />
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed text-center">
            Experience the competitive advantages that set Zordie AI apart from traditional HR solutions
          </p>
        </div>

        
        </div>
    </div>
  );
};

export default HRAgentsDashboard;