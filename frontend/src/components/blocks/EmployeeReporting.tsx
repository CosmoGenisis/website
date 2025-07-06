"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell,  AlertTriangle, AlertCircle, BarChart, Clock, PieChart, Calendar, FileText, Users } from 'lucide-react';
import img1 from "@/images/Performance.png";
import img2 from "@/images/Performance2.png"
import img3 from "@/images/Performance3.png"

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 }
  })
};

export function EmployeeReporting() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
            Advanced Analytics
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-purple-600">Employee</span> Performance Tracking
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive analytics and reporting tools to monitor employee performance and productivity
          </p>
        </div>

        {/* First Card - Daily Report */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          custom={0}
          className="mb-12"
        >
          <Card className="overflow-hidden shadow-xl border-0 min-h-[420px] md:min-h-[520px] lg:min-h-[600px] p-10 md:p-14 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 p-6">
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-4xl font-extrabold mb-4">Daily Report of Every Employee</h3>
                  <p className="text-2xl text-gray-600 mb-10">
                    Detailed analysis of your employees' day-to-day activities, task performance evaluations, and productivity metrics. Track key metrics and identify areas for improvement.
                  </p>
                  <div className="flex gap-8 mb-10">
                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <FileText className="w-8 h-8 text-blue-600" />
                      </div>
                      <span className="text-xl font-semibold">Daily Report</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mr-4">
                        <Users className="w-8 h-8 text-green-600" />
                      </div>
                      <span className="text-xl font-semibold">Team Overview</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                        <BarChart className="w-8 h-8 text-purple-600" />
                      </div>
                      <span className="text-xl font-semibold">Work Logs</span>
                    </div>
                  </div>
                </div>
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white w-fit text-lg px-8 py-4">
                  View Reports
                </Button>
              </div>
              <div className="bg-indigo-50 rounded-2xl p-8 flex items-center justify-center min-h-[320px]">
                <img 
                  src={img1}
                  alt="Daily Employee Report Dashboard" 
                  className="w-full h-auto object-contain rounded-xl shadow-lg"
                />
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Second Card - Time Distribution */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          custom={1}
        >
          <Card className="overflow-hidden shadow-xl border-0 mt-16 min-h-[420px] md:min-h-[520px] lg:min-h-[600px] p-10 md:p-14 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 p-6">
              <div className="order-2 md:order-1 bg-blue-50 rounded-2xl p-8 flex items-center justify-center min-h-[320px]">
                <img 
                  src={img2} 
                  alt="Time Distribution Dashboard" 
                  className="w-full h-auto object-contain rounded-xl shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2 flex flex-col justify-between">
                <div>
                  <h3 className="text-4xl font-extrabold mb-4">Record of Time Distribution</h3>
                  <p className="text-2xl text-gray-600 mb-10">
                    Track and analyze how time is allocated across projects and tasks. Identify bottlenecks and optimize resource allocation for maximum efficiency.
                  </p>
                  <div className="flex gap-8 mb-10">
                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <Clock className="w-8 h-8 text-blue-600" />
                      </div>
                      <span className="text-xl font-semibold">Active Time Graphs</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mr-4">
                        <PieChart className="w-8 h-8 text-green-600" />
                      </div>
                      <span className="text-xl font-semibold">Project Time Distribution</span>
                    </div>
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-fit text-lg px-8 py-4">
                  Analyze Time Data
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Main Card - Productivity Alerts */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          custom={0}
          className="mb-6 sm:mb-8 md:mb-12"
        >
          <Card className="overflow-hidden shadow-xl border-0 gap-6 p-10 md:p-14 mt-16 min-h-[420px] md:min-h-[520px] lg:min-h-[600px] max-w-7xl mx-auto">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-10 p-6">
              <div className="flex flex-col justify-between order-2 md:order-1">
                <div>
                  <h3 className="text-4xl font-extrabold mb-4">Productivity Alerts</h3>
                  <p className="text-2xl text-gray-600 mb-10">
                    The system includes three types of alerts: On Leave Alert, Overcapacity Workload Alert and Roadblock Detection Alert. Help you quickly give a solutions for your employee on time
                  </p>
                  <div className="flex gap-8 mb-10">
                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <Bell className="w-8 h-8 text-blue-600" />
                      </div>
                      <span className="text-xl font-semibold">Three Types Alerts</span>
                    </div>
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-fit text-lg px-8 py-4">
                  View Alerts
                </Button>
              </div>
              <div className="bg-blue-50 rounded-2xl p-8 flex items-center justify-center order-1 md:order-2 mb-4 md:mb-0 min-h-[320px]">
                <img 
                  src={img3} 
                  alt="Productivity Alerts Dashboard showing work hours and capacity alerts" 
                  className="w-full h-full object-contain rounded-xl shadow-lg"
                />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}