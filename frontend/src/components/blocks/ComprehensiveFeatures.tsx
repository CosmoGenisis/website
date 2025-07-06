"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Brain,
  Clock,
  DollarSign,
  TrendingUp,
  BarChart3,
  Star,
  Target,
  Users,
  Settings,
  Workflow,
  UserCheck,
  Search,
  FileText,
  Calendar,
  MessageSquare,
  Award,
  Shield,
  PieChart
} from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function ComprehensiveFeatures() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Complete Solution
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transforming Recruitment with <span className="text-blue-600">AI</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Zordie AI offers a comprehensive suite of intelligent tools that revolutionize every aspect of the hiring process
          </p>
        </motion.div>

        {/* AI Agents Section */}
        <motion.div
          className="mb-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold mb-8 text-center"
            variants={itemVariants}
          >
            Intelligent AI Agents
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div variants={itemVariants}>
              <Card className="h-full border-2 bg-purple-50 border-purple-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="p-3 w-14 h-14 rounded-lg bg-white shadow-md mb-4 flex items-center justify-center">
                    <Brain className="w-7 h-7 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">PRIME</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    Your AI Control Tower that approves HR actions, enforces role-based access, routes requests between agents, and tracks all activity with audit logs.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full border-2 bg-blue-50 border-blue-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="p-3 w-14 h-14 rounded-lg bg-white shadow-md mb-4 flex items-center justify-center">
                    <Search className="w-7 h-7 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">OPTIMUS</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    Autonomous AI Recruiter that posts jobs, screens resumes, generates candidate shortlists, and tracks pipeline status and recruiter performance.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full border-2 bg-pink-50 border-pink-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="p-3 w-14 h-14 rounded-lg bg-white shadow-md mb-4 flex items-center justify-center">
                    <Calendar className="w-7 h-7 text-pink-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">MONICA</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    AI Interview Coordinator that schedules interviews, runs async or live interviews, collects structured feedback, and recommends final decisions.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full border-2 bg-orange-50 border-orange-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="p-3 w-14 h-14 rounded-lg bg-white shadow-md mb-4 flex items-center justify-center">
                    <FileText className="w-7 h-7 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">ONIX</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    Offer, Preboarding, and Candidate Relationship Agent that generates offer letters, sends joining kits, schedules reminders, and predicts withdrawal risks.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full border-2 bg-green-50 border-green-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="p-3 w-14 h-14 rounded-lg bg-white shadow-md mb-4 flex items-center justify-center">
                    <DollarSign className="w-7 h-7 text-green-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">LAXMI</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    AI Payroll & Finance Manager that runs monthly payroll, generates reports, tracks finance costs, and ensures compliance with regulations.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full border-2 bg-indigo-50 border-indigo-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="p-3 w-14 h-14 rounded-lg bg-white shadow-md mb-4 flex items-center justify-center">
                    <BarChart3 className="w-7 h-7 text-indigo-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">MAXI</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    AI Performance, Learning & Engagement Coach that monitors work logs, analyzes time distribution, identifies performance patterns, and suggests growth paths.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* Key Benefits Section */}
        <motion.div
          className="mb-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold mb-8 text-center"
            variants={itemVariants}
          >
            Key Benefits
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div variants={itemVariants}>
              <Card className="h-full border-2 bg-blue-50 border-blue-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="p-3 w-14 h-14 rounded-lg bg-white shadow-md mb-4 flex items-center justify-center">
                    <Clock className="w-7 h-7 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">60% Faster Hiring</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    Reduce time-to-hire by automating screening, scheduling, and administrative tasks, allowing your team to focus on high-value interactions.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full border-2 bg-green-50 border-green-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="p-3 w-14 h-14 rounded-lg bg-white shadow-md mb-4 flex items-center justify-center">
                    <DollarSign className="w-7 h-7 text-green-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">Cost Reduction</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    Lower recruitment costs by eliminating manual processes, reducing agency fees, and minimizing the expenses associated with bad hires.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full border-2 bg-purple-50 border-purple-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="p-3 w-14 h-14 rounded-lg bg-white shadow-md mb-4 flex items-center justify-center">
                    <Target className="w-7 h-7 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">95% Candidate Match</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    AI-powered matching algorithms identify candidates with the right skills, experience, and cultural fit, resulting in better hiring decisions.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full border-2 bg-yellow-50 border-yellow-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="p-3 w-14 h-14 rounded-lg bg-white shadow-md mb-4 flex items-center justify-center">
                    <Shield className="w-7 h-7 text-yellow-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">Bias Elimination</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    Reduce unconscious bias in the hiring process with objective, data-driven candidate evaluations that focus on skills and qualifications.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full border-2 bg-red-50 border-red-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="p-3 w-14 h-14 rounded-lg bg-white shadow-md mb-4 flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-red-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">Data-Driven Decisions</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    Make informed hiring decisions based on comprehensive analytics, performance metrics, and predictive insights about candidate success.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full border-2 bg-cyan-50 border-cyan-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="p-3 w-14 h-14 rounded-lg bg-white shadow-md mb-4 flex items-center justify-center">
                    <MessageSquare className="w-7 h-7 text-cyan-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">Enhanced Candidate Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    Provide a seamless, responsive, and personalized experience for candidates throughout the recruitment process, improving your employer brand.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* Recruitment Workflow Section */}
        <motion.div
          className="mb-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold mb-8 text-center"
            variants={itemVariants}
          >
            End-to-End Recruitment Workflow
          </motion.h3>
          
          <div className="relative">
            {/* Workflow Steps */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 -translate-x-1/2 z-0"></div>
            
            <div className="space-y-12">
              <motion.div 
                className="relative z-10 flex flex-col md:flex-row items-center gap-8"
                variants={itemVariants}
              >
                <div className="md:w-1/2 flex justify-end">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 max-w-md">
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Job Requisition & Posting</h4>
                    <p className="text-gray-600">
                      Create detailed job descriptions with AI assistance and post them across multiple job boards and social media platforms with a single click.
                    </p>
                  </div>
                </div>
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-20">
                  <span className="font-bold">1</span>
                </div>
                <div className="md:w-1/2"></div>
              </motion.div>
              
              <motion.div 
                className="relative z-10 flex flex-col md:flex-row items-center gap-8"
                variants={itemVariants}
              >
                <div className="md:w-1/2"></div>
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-20">
                  <span className="font-bold">2</span>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 max-w-md">
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Candidate Sourcing & Screening</h4>
                    <p className="text-gray-600">
                      AI automatically sources candidates, screens resumes, and ranks applicants based on job requirements, skills, and experience.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative z-10 flex flex-col md:flex-row items-center gap-8"
                variants={itemVariants}
              >
                <div className="md:w-1/2 flex justify-end">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 max-w-md">
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Interview Management</h4>
                    <p className="text-gray-600">
                      Schedule and conduct interviews, collect feedback from interviewers, and generate comprehensive interview scorecards to facilitate decision-making.
                    </p>
                  </div>
                </div>
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-20">
                  <span className="font-bold">3</span>
                </div>
                <div className="md:w-1/2"></div>
              </motion.div>
              
              <motion.div 
                className="relative z-10 flex flex-col md:flex-row items-center gap-8"
                variants={itemVariants}
              >
                <div className="md:w-1/2"></div>
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-20">
                  <span className="font-bold">4</span>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 max-w-md">
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Offer Management & Onboarding</h4>
                    <p className="text-gray-600">
                      Generate and send offer letters, collect necessary documentation, and create personalized onboarding plans for new hires.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative z-10 flex flex-col md:flex-row items-center gap-8"
                variants={itemVariants}
              >
                <div className="md:w-1/2 flex justify-end">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 max-w-md">
                    <h4 className="text-xl font-bold mb-3 text-blue-600">Performance Tracking & Development</h4>
                    <p className="text-gray-600">
                      Monitor employee performance, provide continuous feedback, and create personalized development plans to maximize potential and retention.
                    </p>
                  </div>
                </div>
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-20">
                  <span className="font-bold">5</span>
                </div>
                <div className="md:w-1/2"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-lg text-lg font-medium">
            Transform Your Recruitment Process
          </Button>
        </motion.div>
      </div>
    </section>
  );
}