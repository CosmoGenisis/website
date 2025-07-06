"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Target, MessageCircle, FileText, DollarSign, BarChart3, ArrowRight, Users, Zap, Workflow, Shield, Clock, MessageSquare, Award, Briefcase, Headphones, Search } from 'lucide-react';
import img1 from "@/images/Prime_agent.png";
import img2 from "@/images/Prime2.png"

type CollaborationStep = {
  id: string;
  agentName: string;
  icon: React.ElementType;
  color: string;
  action: string;
  description: string;
};

type TeamFeature = {
  icon: React.ElementType;
  text: string;
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 }
  })
};

// Map background color classes to border color classes
const getBorderColor = (bgColor: string): string => {
  const colorMap: Record<string, string> = {
    'bg-blue-500': 'border-blue-500',
    'bg-green-500': 'border-green-500',
    'bg-amber-500': 'border-amber-500',
    'bg-red-500': 'border-red-500',
    'bg-indigo-500': 'border-indigo-500',
    'bg-purple-500': 'border-purple-500'
  };
  
  return colorMap[bgColor] || 'border-gray-300';
};

const collaborationSteps: CollaborationStep[] = [
  {
    id: 'optimus',
    agentName: 'Optimus',
    icon: Briefcase,
    color: 'bg-blue-500',
    action: 'Recruitment Workflow Manager',
    description: 'Streamlines the entire recruitment process from job posting to onboarding, ensuring a smooth candidate journey and efficient hiring process.'
  },
  {
    id: 'monica',
    agentName: 'Monica',
    icon: Users,
    color: 'bg-green-500',
    action: 'Team Management Expert',
    description: 'Handles all aspects of team coordination, resource allocation, and employee engagement to maximize productivity and satisfaction.'
  },
  {
    id: 'onix',
    agentName: 'Onix',
    icon: BarChart3,
    color: 'bg-amber-500',
    action: 'Performance Analytics Specialist',
    description: 'Analyzes comprehensive performance data to provide actionable insights for continuous improvement and strategic decision-making.'
  },
  {
    id: 'laxmi',
    agentName: 'Laxmi',
    icon: Headphones,
    color: 'bg-red-500',
    action: 'AI Interview Conductor',
    description: 'Conducts intelligent, bias-free interviews that assess both technical skills and cultural fit while providing a positive candidate experience.'
  },
  {
    id: 'maxi',
    agentName: 'Maxi',
    icon: Search,
    color: 'bg-indigo-500',
    action: 'Smart Candidate Screener',
    description: 'Efficiently screens candidates using advanced AI algorithms to identify the best matches for your organization\'s needs and values.'
  }
];

const teamFeatures = [
  { icon: Zap, text: "Increased Productivity" },
  { icon: Target, text: "Precision Matching" },
  { icon: MessageCircle, text: "Enhanced Communication" },
  { icon: FileText, text: "Automated Documentation" },
  { icon: DollarSign, text: "Cost Reduction" },
  { icon: Users, text: "Cross-functional Team Support" },
  { icon: Brain, text: "AI-powered Insights" },
  { icon: Shield, text: "Security" },
  { icon: Clock, text: "24/7 Availability" },
  { icon: Award, text: "Quality Assurance" },
];

export function TeamCollaboration() {
  return (
    <section className="py-20 bg-white from-blue-50 to-white">
      <div className="w-full h-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            Seamless Team Integration
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Bridging the Gap Between <span className="text-blue-600">Recruiters</span> and <span className="text-blue-600">Job Seekers</span></h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Building Bridges to Career Success with our intelligent agent collaboration system
          </p>
        </div>

        {/* Agent Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Prime Agent Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            custom={0}
            className="md:col-span-3"
          >
            <Card className="overflow-hidden shadow-xl border-2 border-purple-200 bg-purple-50">
              <div className="grid md:grid-cols-2 gap-6 p-6">
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="p-3 w-14 h-14 rounded-lg bg-purple-500 shadow-md mb-4 flex items-center justify-center">
                      <Brain className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold mb-2">PRIME: The Central Intelligence</CardTitle>
                    <CardDescription className="text-gray-600 text-base mb-6">
                      The Prime agent orchestrates all other agents, ensuring seamless collaboration and information sharing across the entire recruitment process. It maintains security, compliance, and optimal performance.
                    </CardDescription>
                    
                    <div className="flex flex-wrap gap-3 mb-6">
                      {teamFeatures.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                          <div key={index} className="flex items-center bg-white px-3 py-1.5 rounded-full shadow-sm border border-gray-200">
                            <Icon className="w-4 h-4 text-purple-600 mr-2" />
                            <span className="text-sm font-medium">{feature.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white w-fit">
                    Learn More
                  </Button>
                </div>
                <div className="bg-white rounded-xl p-4 flex items-center justify-center">
                  <img 
                    src={img2}
                    alt="Prime Agent Dashboard" 
                    className="w-full h-auto object-contain rounded-md shadow-lg"
                  />
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Agent Cards */}
          {collaborationSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                custom={index + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <Card className={`h-full border-2 ${getBorderColor(step.color)} hover:shadow-lg transition-shadow duration-300`}>
                  <CardHeader>
                    <div className={`p-3 w-14 h-14 rounded-lg ${step.color} shadow-md mb-4 flex items-center justify-center`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold">{step.agentName}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-gray-800 mb-2">{step.action}</h4>
                    <CardDescription className="text-gray-600 text-base">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Workflow Visualization */}
        <div className="mb-16">
          <Card className="overflow-hidden shadow-xl border-0">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Intelligent Collaboration System</h3>
                <p className="text-gray-600 mb-6">
                  Unlike traditional HR tools that operate in silos, our AI agents communicate with each other, sharing context and insights to create a seamless recruitment experience.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Contextual Awareness</h4>
                      <p className="text-gray-600">Each agent knows what the others are doing and can pick up where another left off.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Continuous Learning</h4>
                      <p className="text-gray-600">Agents learn from each interaction, improving their performance over time.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Centralized Orchestration</h4>
                      <p className="text-gray-600">Prime ensures all agents work in harmony, maintaining security and compliance.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8">
                <img 
                  src={img1} 
                  alt="Agent Collaboration Network" 
                  className="w-full h-auto object-contain rounded-md shadow-lg"
                />
              </div>
            </div>
          </Card>
        </div>

        
      </div>
    </section>
  );
}