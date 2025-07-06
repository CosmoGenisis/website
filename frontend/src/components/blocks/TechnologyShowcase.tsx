"use client"

// No need to import React in React 17+ with JSX transform
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Database,
  Lock,
  BarChart,
  Layers,
  Cpu,
  Network,
  LineChart,
  Sparkles
} from "lucide-react";
import img from '@/images/Performance2.png'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function TechnologyShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Advanced Technology
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powered by <span className="text-purple-600">Cutting-Edge</span> AI
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform leverages the latest advancements in artificial intelligence and machine learning to deliver exceptional results
          </p>
        </motion.div>

        {/* Technology Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp}>
            <Card className="h-full border-2 border-purple-200 bg-purple-50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 w-14 h-14 rounded-lg bg-white shadow-md mb-4 flex items-center justify-center">
                  <Brain className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Natural Language Processing</h3>
                <p className="text-gray-600">
                  Our advanced NLP algorithms understand job requirements, candidate resumes, and interview responses with human-like comprehension, enabling accurate matching and assessment.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="h-full border-2 border-blue-200 bg-blue-50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 w-14 h-14 rounded-lg bg-white shadow-md mb-4 flex items-center justify-center">
                  <Database className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Machine Learning Models</h3>
                <p className="text-gray-600">
                  Continuously learning algorithms that improve over time, adapting to your organization's hiring patterns and preferences to deliver increasingly accurate candidate matches.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="h-full border-2 border-green-200 bg-green-50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 w-14 h-14 rounded-lg bg-white shadow-md mb-4 flex items-center justify-center">
                  <LineChart className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Predictive Analytics</h3>
                <p className="text-gray-600">
                  Forecast candidate success, retention likelihood, and performance potential based on historical data and industry benchmarks to make informed hiring decisions.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="h-full border-2 border-red-200 bg-red-50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 w-14 h-14 rounded-lg bg-white shadow-md mb-4 flex items-center justify-center">
                  <Cpu className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Deep Learning</h3>
                <p className="text-gray-600">
                  Neural networks that analyze complex patterns in candidate data, identifying subtle indicators of fit and potential that traditional screening methods might miss.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="h-full border-2 border-yellow-200 bg-yellow-50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 w-14 h-14 rounded-lg bg-white shadow-md mb-4 flex items-center justify-center">
                  <Lock className="w-7 h-7 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Ethical AI Framework</h3>
                <p className="text-gray-600">
                  Built with fairness and transparency at its core, our AI is designed to eliminate bias in hiring while providing explainable results for all recommendations.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="h-full border-2 border-indigo-200 bg-indigo-50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 w-14 h-14 rounded-lg bg-white shadow-md mb-4 flex items-center justify-center">
                  <Network className="w-7 h-7 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">API Integrations</h3>
                <p className="text-gray-600">
                  Seamlessly connect with your existing HR tech stack, job boards, and business tools to create a unified recruitment ecosystem without disrupting your workflows.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Technology Visualization */}
        <motion.div 
          className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-16 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Abstract tech background elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-purple-400 blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-blue-400 blur-3xl"></div>
            <div className="absolute top-2/3 right-1/4 w-24 h-24 rounded-full bg-indigo-400 blur-3xl"></div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">How Our AI Technology Works</h3>
              <p className="text-gray-700 mb-6">
                Zordie AI combines multiple advanced technologies to create a comprehensive recruitment solution that's greater than the sum of its parts.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white rounded-full shadow-md mt-1">
                    <Brain className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Data Collection & Analysis</h4>
                    <p className="text-gray-600">Our AI ingests and analyzes vast amounts of recruitment data to identify patterns and insights.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white rounded-full shadow-md mt-1">
                    <Layers className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Multi-layered Processing</h4>
                    <p className="text-gray-600">Multiple AI models work in concert to evaluate different aspects of candidates and jobs.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white rounded-full shadow-md mt-1">
                    <BarChart className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Continuous Improvement</h4>
                    <p className="text-gray-600">The system learns from outcomes and feedback, constantly refining its algorithms.</p>
                  </div>
                </div>

                <div className="mt-6">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg">
                    Learn More About Our Technology
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Dashboard Image */}
                
                {/* AI Visualization */}
                <div className="relative w-full aspect-square max-w-xs mx-auto">
                  {/* Central brain icon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center z-20">
                    <Brain className="w-12 h-12 text-purple-600" />
                  </div>
                  
                  {/* Orbiting technology icons */}
                  <motion.div 
                    className="absolute w-full h-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-100 rounded-full shadow-lg flex items-center justify-center">
                      <Database className="w-8 h-8 text-blue-600" />
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="absolute w-full h-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-green-100 rounded-full shadow-lg flex items-center justify-center">
                      <LineChart className="w-8 h-8 text-green-600" />
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="absolute w-full h-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-red-100 rounded-full shadow-lg flex items-center justify-center">
                      <Cpu className="w-8 h-8 text-red-600" />
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="absolute w-full h-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-yellow-100 rounded-full shadow-lg flex items-center justify-center">
                      <Lock className="w-8 h-8 text-yellow-600" />
                    </div>
                  </motion.div>
                  
                  {/* Connection lines */}
                  <div className="absolute top-0 left-0 w-full h-full">
                    <svg className="w-full h-full" viewBox="0 0 200 200">
                      <line x1="100" y1="100" x2="100" y2="0" stroke="#ddd" strokeWidth="1" strokeDasharray="4 2" />
                      <line x1="100" y1="100" x2="200" y2="100" stroke="#ddd" strokeWidth="1" strokeDasharray="4 2" />
                      <line x1="100" y1="100" x2="100" y2="200" stroke="#ddd" strokeWidth="1" strokeDasharray="4 2" />
                      <line x1="100" y1="100" x2="0" y2="100" stroke="#ddd" strokeWidth="1" strokeDasharray="4 2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dashboard Showcase */}
        {/*
        <motion.div
          className="mb-16 bg-gray-50 rounded-2xl p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Powerful Dashboards & Analytics</h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Get a complete view of your hiring process with our intuitive dashboards and detailed analytics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src="../../../images/Dashboard.png" 
                  alt="Recruitment Dashboard" 
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">Recruitment Dashboard</h4>
                  <p className="text-gray-600">Track all your hiring metrics in one place with our comprehensive dashboard</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src="../../../images/Performance3.png" 
                  alt="Performance Analytics" 
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">Performance Analytics</h4>
                  <p className="text-gray-600">Analyze candidate performance and make data-driven hiring decisions</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        */}

        {/* Agent Showcase */}
        {/* <motion.div
          className="mb-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Meet Our Intelligent AI Agents</h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our specialized AI agents work together to streamline every aspect of your hiring process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                <img 
                  src="../../../images/agent1.png" 
                  alt="Prime Agent" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-lg font-bold mb-2">Prime Agent</h4>
                  <p className="text-gray-600 text-sm">Your HR assistant that handles job postings and initial screening</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                <img 
                  src="../../../images/agent2.png" 
                  alt="Optimus Agent" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-lg font-bold mb-2">Optimus Agent</h4>
                  <p className="text-gray-600 text-sm">Conducts intelligent candidate evaluations and skill assessments</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                <img 
                  src="../../../images/agent3.png" 
                  alt="Nova Agent" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-lg font-bold mb-2">Nova Agent</h4>
                  <p className="text-gray-600 text-sm">Analyzes interview responses and provides behavioral insights</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-8">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg">
              Explore All Agents
            </Button>
          </div>
        </motion.div> */}

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-6">Ready to experience the power of AI in recruitment?</h3>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg">
            Request a Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}