import React, { useState } from 'react';
import { motion } from 'framer-motion';
import img1 from "@/images/agent1.png";
import img2 from "@/images/agent2.png";
import img3 from "@/images/agent3.png";
import img4 from "@/images/agent4.png";
import img5 from "@/images/agent5.png";
import imgCenter from "@/images/agent-center.png";

type Agent = {
  id: string;
  name: string;
  title: string;
  description: string;
  color: string;
  capabilities: string[];
  image: string;
};

const agents: Agent[] = [
  {
    id: 'prime',
    name: 'PRIME',
    title: 'Your AI Control Tower',
    description: '"I use Prime to stay in command — it\'s my AI brain for everything HR and finance."',
    color: 'bg-purple-500',
    capabilities: [
      'Approve HR, hiring, and payroll actions instantly',
      'Set and enforce role-based access (RBAC) across departments',
      'Route requests between agents (Optimus, Laxmi, etc.)',
      'Pause workflows, override steps, or trigger reviews',
      'Track all activity with audit logs',
      'Set intelligent rules and thresholds'
    ],
    image: img5,
  },
  {
    id: 'optimus',
    name: 'OPTIMUS',
    title: 'Autonomous AI Recruiter',
    description: '"I post a job once — Optimus handles sourcing, screening, and shortlisting while I get back to work."',
    color: 'bg-blue-500',
    capabilities: [
      'Post jobs in one click across multiple platforms',
      'Automatically screen and score resumes',
      'Generate smart candidate shortlists',
      'Track pipeline status and recruiter performance',
      'Send top candidates directly to Monica for interviews',
      'Post to Zordie\'s internal Job Board for free'
    ],
    image: img1,
  },
  {
    id: 'monica',
    name: 'MONICA',
    title: 'AI Interview Coordinator',
    description: '"I just set the slot — Monica handles the rest, from reminders to ratings."',
    color: 'bg-pink-500',
    capabilities: [
      'Auto-schedule interviews with panel availability',
      'Run async or live interviews',
      'Remind candidates and interviewers',
      'Collect structured feedback',
      'AI-generated interview scorecards',
      'Recommend final decisions with evidence'
    ],
    image: img2,
  },
  {
    id: 'onix',
    name: 'ONIX',
    title: 'Offer, Preboarding, and Candidate Relationship Agent',
    description: '"Onix keeps selected candidates warm — so they don\'t drop off before joining."',
    color: 'bg-orange-500',
    capabilities: [
      'Auto-generate and share offer letters',
      'Send joining kits and collect KYC',
      'Schedule joining reminders',
      'Reduce dropouts with intelligent follow-ups',
      'Predict withdrawal risks based on candidate behavior',
      'Central dashboard for HR to track post-offer status'
    ],
    image: img4,
  },
  {
    id: 'laxmi',
    name: 'LAXMI',
    title: 'AI Payroll & Finance Manager',
    description: '"Payroll takes one click now — everything is auto-calculated and compliant."',
    color: 'bg-green-500',
    capabilities: [
      'Run monthly payroll with auto-deductions',
      'Generate payslips, tax, PF, ESI, and bonus reports',
      'Track finance costs by department',
      'Manage advances, reimbursements, and bonuses',
      'Stay compliant with labor and tax regulations',
      'Export audit-ready finance logs anytime'
    ],
    image: img3,
  },
  {
    id: 'maxi',
    name: 'MAXI',
    title: 'AI Performance, Learning & Engagement Coach',
    description: '"Maxi helps me understand team performance, growth, and wellbeing at a glance."',
    color: 'bg-indigo-500',
    capabilities: [
      'Monitor daily work logs and task efficiency',
      'Analyze time distribution across tools/projects',
      'Identify top performers and low engagement patterns',
      'Auto-generate onboarding plans and training paths',
      'Enable OKRs, mentorship programs, and goal setting',
      'Trigger productivity alerts (burnout, overload, absence)',
      'Suggest growth paths and succession plans'
    ],
    image: img5,
  }
];

export function AgentShowcase() {
  const [activeAgent, setActiveAgent] = useState<string>('prime');
  const selectedAgent = agents.find(agent => agent.id === activeAgent) || agents[0];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="w-full pc-0 bg-blue">
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center justify-center px-3 md:px-4 py-1.5 md:py-2 bg-blue-100 text-blue-800 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
            AI Agents
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Meet Your AI Team</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Zordie's agents work like a fully connected team, each specialized in different aspects of HR and operations.
          </p>
        </div>

        {/* Agent Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
          {agents.map((agent) => (
            <button
              key={agent.id}
              onClick={() => setActiveAgent(agent.id)}
              className={`flex items-center px-3 md:px-5 py-2 md:py-3 rounded-full transition-all text-xs md:text-sm ${activeAgent === agent.id 
                ? `${agent.color.replace('bg-', 'bg-')} text-white shadow-lg`
                : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:shadow'}`}
            >
              <img src={agent.image} alt={agent.name} className="w-5 h-5 mr-2 rounded-full object-contain" />
              {agent.name}
            </button>
          ))}
        </div>

        {/* Agent Details */}
        <motion.div
          key={selectedAgent.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-white/30 backdrop-blur-lg rounded-2xl w-full border-t border-l border-r border-gray-100 shadow-none"
        >
          <div className="flex flex-col md:grid md:grid-cols-2 gap-0">
            {/* Left Column - Agent Info */}
            <div className="p-8 md:p-12 lg:p-16 ml-0 md:ml-32">
              <div className={`${selectedAgent.color} w-12 h-12 md:w-20 md:h-20 rounded-2xl  flex items-center justify-center mb-6 md:mb-8 shadow-lg`}>
                <img src={selectedAgent.image} alt={selectedAgent.name} className="w-8 h-8 md:w-12 md:h-12 object-contain" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-2 md:mb-3">{selectedAgent.name}</h3>
              <h4 className="text-xl md:text-2xl text-gray-700 mb-4 md:mb-5">{selectedAgent.title}</h4>
              
              <p className="text-base md:text-xl text-gray-600 italic mb-8 md:mb-10">
                {selectedAgent.description}
              </p>
              
              <div>
                <h5 className="text-lg md:text-2xl font-semibold mb-4 md:mb-5">What You Can Do:</h5>
                <ul className="space-y-3 md:space-y-4">
                  {selectedAgent.capabilities.map((capability, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <span className="bg-blue-100 text-blue-800 rounded-full p-2 mr-3 md:mr-4 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-base md:text-xl">{capability}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Right Column - Agent Image Card */}
            <div className="bg-white/20 backdrop-blur-md p-8 md:p-12 flex items-center justify-center rounded-b-2xl">
            <div className="w-full max-w-xs md:max-w-md aspect-square rounded-2xl bg-white/20 backdrop-blur-md shadow-none flex items-center justify-center p-4 md:p-8">
              <div className="relative w-full h-full">
                <img
                  src={selectedAgent.image}
                  alt={selectedAgent.name}
                  className="absolute inset-0 w-full h-full object-contain rounded-2xl"
                  style={{ background: "transparent" }}
                />
              </div>
            </div>
          </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}