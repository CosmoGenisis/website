"use client"
// No need to import React in React 17+ with JSX transform
import { motion } from 'framer-motion';
import Navbar from '../ui/nav';
import { ArrowRight, Users, Globe, Shield, Zap, CheckCircle, Facebook, Instagram, Linkedin, Moon, Send, Sun, Twitter } from 'lucide-react';
import { Button } from '../ui/button';
import { HeroSection } from "../blocks/hero-section-4"
import { Input } from "@/components/ui/input"
import { SocialIcon } from 'react-social-icons'
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Link } from "react-router-dom"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {CallToAction} from "@/components/blocks/CallToAction"
import {ComprehensiveFeatures} from "@/components/blocks/ComprehensiveFeatures"
import {TechnologyShowcase} from "@/components/blocks/TechnologyShowcase"
import {SuccessStories} from "@/components/blocks/SuccessStories"
import FooterDemo from '../ui/FooterDemo';
import img1 from '@/images/about.png'
import img2 from '@/images/ai-hero.png'
import img3 from '@/assets/About Page/Abdul.png'
import img4 from '@/assets/About Page/laxmi.png'
import img5 from '@/assets/About Page/Kshitz.png'
import img6 from '@/assets/About Page/Pavan.png'
import img7 from '@/images/Mission.png'
import img8 from '@/images/Vision.png'


// Ocean Wave Component (Static version)
const OceanWaves = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[40vh] overflow-hidden z-0">
      {/* Multiple wave layers with static styling */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-r from-blue-400/30 via-cyan-500/30 to-blue-500/30 rounded-t-[100%]"
        style={{ filter: 'blur(8px)' }}
      />
      <div 
        className="absolute bottom-0 left-0 right-0 h-[130px] bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-blue-400/20 rounded-t-[100%]"
        style={{ filter: 'blur(10px)' }}
      />
      <div 
        className="absolute bottom-0 left-0 right-0 h-[160px] bg-gradient-to-r from-cyan-400/15 via-blue-500/15 to-cyan-500/15 rounded-t-[100%]"
        style={{ filter: 'blur(12px)' }}
      />
    </div>
  );
};

const About = () => {
  return (
    <div className="relative bg-white">
      <Navbar />
      <HeroSection />
      <MissionSection />
      <TechnologyShowcase />
      <OurValues />
      <OurTeam />
      <WhatSetsUsApart />
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
          <CallToAction />
        </div>
      </div>
      <FooterDemo />
    </div>
  );
};


const OurValues = () => {
  const values = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />, 
      title: 'Human-Centered AI',
      description: 'We create AI that empowers people—technology designed to amplify human strengths, not replace them.'
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: 'Relentless Innovation',
      description: 'We push boundaries and challenge the status quo, constantly advancing what AI can achieve for real-world impact.'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Ethics at the Core',
      description: 'Our commitment: AI that is transparent, fair, and privacy-first—always built with responsibility and trust.'
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: 'Accessible for All',
      description: 'We design intuitive, inclusive platforms so everyone can harness the power of AI, regardless of background.'
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/20 rounded-full blur-2xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our Core Values
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Zordie AI is dedicated to building trustworthy, transformative AI that's accessible, ethical, and truly human-centric. Our values guide every product, partnership, and breakthrough.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const OurTeam = () => {
  // Icon mapping for each role
  const iconMap = {
    'ceo': <Shield className="h-10 w-10 text-blue-600" />, // Abdul
    'cmo': <Globe className="h-10 w-10 text-blue-600" />, // Laxmi
    'ai': <Zap className="h-10 w-10 text-blue-600" />, // Kshitiz, Aanya
    'ds': <Users className="h-10 w-10 text-blue-600" />, // Anish
    'be': <ArrowRight className="h-10 w-10 text-blue-600" />, // Pavan
    'marketing': <Sun className="h-10 w-10 text-blue-600" />, // Muskan
    'mentor': <Moon className="h-10 w-10 text-blue-600" />, // Prof. Dhruv Nath
  };
  
  // Define TeamMemberProps type
  type TeamMemberProps = {
    name: string;
    role: string;
    icon?: React.ReactNode;
    image?: string;
    bio: React.ReactNode;
  };
  
  // TeamMember component with animations
  const TeamMember = ({ name, role, image, bio }: TeamMemberProps) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
      className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <motion.div 
        className="w-16 h-16 rounded-full bg-blue-50 mb-4 flex items-center justify-center relative z-10 overflow-hidden"
        whileHover={{ scale: 1.05 }}
      >
        {image}
      </motion.div>
      <h3 className="text-xl font-semibold text-gray-900 mb-1 relative z-10">{name}</h3>
      <p className="text-blue-600 mb-4 relative z-10">{role}</p>
      <div className="text-gray-600 text-sm relative z-10">{bio}</div>
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 transform scale-x-0 origin-left"
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );

  // Team structure as per user instructions
  const leadership = [
    {
      name: 'Abdul Quadir',
      role: 'Founder & CEO',
      image: img3,
      bio: 'The visionary behind Zordie\'s multi-agent AI ecosystem. Abdul leads the design of core architecture, autonomous agent logic, and AI infrastructure powering agents like Prime, Nova, Ruby, Archie, and MAXI.'
    },
    {
      name: 'Laxmi Jagga',
      role: 'Co-Founder & Chief Marketing Officer',
      image: img4,
      bio: 'Leads brand, marketing, partnerships, and strategic growth. Laxmi ensures Zordie\'s voice reaches a global audience.'
    },
    {
      name: 'Kshitiz',
      role: 'AI Engineer & Data Scientist',
      image: img5,
      bio: 'Builds scalable models, real-time intelligence pipelines, and core agent cognition systems.'
    },
    {
      name: 'Pavan',
      role: 'Backend Engineer',
      image: img6,
      bio: 'Constructs resilient backends, APIs, and infrastructure ensuring system-wide scalability.'
    },
  ];

  const aiEngineering = [
    {
      name: 'Kshitiz',
      role: 'AI Engineer & Data Scientist',
      image: img1,
      bio: 'Builds scalable models, real-time intelligence pipelines, and core agent cognition systems.'
    },
    {
      name: 'Aanya',
      role: 'AI Engineer',
      image: img1,
      bio: 'Focuses on autonomous reasoning, behavioral flow, and logic that powers Zordie\'s agent execution.'
    },
    {
      name: 'Anish',
      role: 'Data Scientist & AI Researcher',
      image: img1,
      bio: 'Optimizes performance through analytics, predictive tuning, and smart data integration.'
    },
    {
      name: 'Pavan',
      role: 'Backend Engineer',
      image: img1,
      bio: 'Constructs resilient backends, APIs, and infrastructure ensuring system-wide scalability.'
    },
  ];

  const marketing = [
    {
      name: 'Muskan',
      role: 'Marketing Executive',
      image: img1,
      bio: 'Drives brand awareness, campaigns, and digital presence across platforms.'
    },
  ];

  {/*const mentorship = [
    {
      name: 'Prof. Dhruv Nath',
      role: 'Senior Advisor & Mentor',
      image: img1,
      bio: (
        <>
          Professor at MDI Gurgaon<br />
          Director, Lead Angels Network<br />
          Former SVP, NIIT<br />
          Author of <span className="italic">Funding Your Start-Up: And Other Nightmares</span><br /><br />
          A veteran mentor guiding Zordie in venture readiness, product strategy, and long-term impact.
        </>
      )
    },
  ];*/}

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-50/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-50/20 rounded-full blur-2xl" />
      </div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-2">Meet the Team Powering Zordie AI</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 mb-4">A passionate, cross-functional team of innovators, engineers, and visionaries—united to redefine what's possible with autonomous multi-agent systems.</p>
        </motion.div>

        {/* Core Leadership */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4 text-center">Core Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((member, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 mr-5 bg-blue-50 p-3 rounded-full">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-16 h-16 object-cover rounded-full"
                      />
                    </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-blue-600 font-medium mb-1">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/*
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4 text-center">AI & Engineering</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiEngineering.map((member, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 mr-5 bg-blue-50 p-3 rounded-full">{member.icon}</div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-blue-600 font-medium mb-1">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4 text-center">Growth & Marketing</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {marketing.map((member, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 mr-5 bg-blue-50 p-3 rounded-full">{member.icon}</div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-blue-600 font-medium mb-1">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        */}
        {/*
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4 text-center">Strategic Mentorship</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mentorship.map((member, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 mr-5 bg-blue-50 p-3 rounded-full">{member.icon}</div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-blue-600 font-medium mb-1">{member.role}</p>
                  <div className="text-gray-600 text-sm">{member.bio}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>*/}

        {/* What Sets Us Apart - Moved to separate component */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          {/*
          <h3 className="text-4xl font-semibold text-blue-600 mb-4 text-center">Team Strengths</h3>
          <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
            <ul className="text-lg text-gray-600 space-y-3">
              <li>We build autonomous agents that operate like real departments—scalable, adaptive, and intelligent.</li>
              <li>Our team fuses deep tech, creative design, and AI innovation for practical, real-world solutions.</li>
              <li>Guided by top industry mentors, we balance bold ideas with proven execution for lasting impact.</li>
            </ul>
          </div>
          */}
        </motion.div>
      </div>
    </section>
  );
};

const JoinUs = () => (
  <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
    {/* Animated background elements */}
    <div className="absolute inset-0 overflow-hidden">
      <motion.div 
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-400 opacity-20"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-blue-300 opacity-10"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -20, 0],
          y: [0, 20, 0]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-blue-500 opacity-10"
        animate={{ 
          scale: [1, 1.4, 1],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut"
        }}
      />
    </div>
    
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-6"
          >
            Join Us in Shaping the Future of AI
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl mb-8 text-blue-100"
          >
            We're always looking for talented individuals who share our passion for AI innovation and our commitment to making a positive impact on the world.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition duration-300 shadow-lg">
              View Open Positions
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition duration-300">
              Learn About Our Culture
            </button>
          </motion.div>
        </div>
        <div className="md:w-1/2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-xl overflow-hidden shadow-2xl"
          >
            <img 
              src="/src/assets/About page/team-collaboration.webp" 
              alt="Join Zordie AI Team" 
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            <motion.div 
              className="absolute bottom-4 left-4 bg-white/90 text-blue-600 px-4 py-2 rounded-full text-sm font-medium"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Join our innovative team
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);


export function MissionSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-5xl font-bold text-gray-900 mb-2">
          Our mission & vision.
        </h1>
        <h2 className="text-4xl font-semibold text-gray-400 mb-12">
          Driving growth through data Intelligence & Automation.
        </h2>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Mission Card */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-sm flex flex-col items-center">
            <img
              src={img7}
              alt="Mission"
              className="w-full h-72 object-cover"
            />
            <div className="p-8 w-full">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Mission</h3>
              <p className="text-gray-600 text-lg">
                Empowering businesses with innovative tools for smarter decision-making.
              </p>
            </div>
          </div>
          {/* Vision Card */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-sm flex flex-col items-center">
            <img
              src={img8}
              alt="Vision"
              className="w-full h-72 object-cover"
            />
            <div className="p-8 w-full">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Vision</h3>
              <p className="text-gray-600 text-lg">
                Transforming industries through advanced analytics and automation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const StorySection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row-reverse items-center gap-12">
        <div className="md:w-1/2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl shadow-md w-full overflow-hidden relative"
          >
            <img 
              src="/src/images/4417da43e61fb4ef3fd13917fd21a505.gif" 
              alt="Zordie AI Vision" 
              className="w-full object-cover"
            />
          </motion.div>
        </div>
        <div className="md:w-1/2 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-lg text-gray-600 mb-6">
              Zordie AI envisions a world where artificial intelligence enhances human potential rather than replacing it. We're building a future where AI tools are as common and accessible as smartphones, empowering people in all walks of life.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our vision extends beyond creating powerful technology—we aim to foster an ecosystem where AI innovation thrives through collaboration, transparency, and ethical practices. We believe that by making AI more accessible, we can help solve some of the world's most pressing challenges.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600 shadow-sm">
              <p className="text-gray-700 italic">
                "We are not just building AI tools; we are creating a bridge between cutting-edge technology and everyday users, making the power of artificial intelligence accessible to everyone."
              </p>
              <p className="text-right text-blue-600 font-medium mt-2">— Zordie AI Founding Team</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const WhatSetsUsApart = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          What Sets Us Apart
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Our unique approach to AI development and implementation makes Zordie AI the partner of choice for businesses looking to transform their operations.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: <Zap className="w-12 h-12 text-blue-600" />,
            title: "Cutting-Edge Technology",
            description: "We leverage the latest advancements in AI and machine learning to deliver solutions that are ahead of the curve."
          },
          {
            icon: <Users className="w-12 h-12 text-blue-600" />,
            title: "Human-Centered Design",
            description: "Our AI tools are designed with humans in mind, ensuring intuitive interfaces and seamless user experiences."
          },
          {
            icon: <Shield className="w-12 h-12 text-blue-600" />,
            title: "Ethical AI Development",
            description: "We prioritize ethical considerations in all our AI systems, ensuring responsible and transparent implementation."
          },
          {
            icon: <Globe className="w-12 h-12 text-blue-600" />,
            title: "Global Perspective",
            description: "Our diverse team brings global insights to solve complex problems across different industries and markets."
          },
          {
            icon: <CheckCircle className="w-12 h-12 text-blue-600" />,
            title: "Proven Results",
            description: "Our solutions have delivered measurable improvements in efficiency, productivity, and innovation for our clients."
          },
          {
            icon: <ArrowRight className="w-12 h-12 text-blue-600" />,
            title: "Forward-Thinking Approach",
            description: "We're not just solving today's problems—we're anticipating tomorrow's challenges and preparing solutions in advance."
          }
        ].map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg hover:bg-blue-50/30 transition-all duration-300 overflow-hidden group"
          >
            <div className="mb-6 bg-blue-50 p-4 rounded-full inline-flex items-center justify-center">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;