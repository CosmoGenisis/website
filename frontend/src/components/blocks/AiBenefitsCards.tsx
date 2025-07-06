"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Zap,
  RefreshCw,
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
} from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const benefitCards = [
  {
    icon: Zap,
    title: "Increased Productivity",
    description: "Gain actionable insights with AI-driven analytics to improve decision-making and strategy.",
    color: "bg-blue-50 border-blue-200"
  },
  {
    icon: RefreshCw,
    title: "Better Customer Experience",
    description: "Personalized AI interactions improve response times, customer engagement, and overall satisfaction.",
    color: "bg-purple-50 border-purple-200"
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "AI-powered systems operate around the clock, ensuring seamless support and execution without downtime.",
    color: "bg-green-50 border-green-200"
  },
  {
    icon: DollarSign,
    title: "Cost Reduction",
    description:
      "AI automation minimizes manual work, cuts operational costs, and optimizes resource allocation for better profitability.",
    color: "bg-yellow-50 border-yellow-200"
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Insights",
    description:
      "Leverage AI to analyze vast data sets, identify trends, and make smarter, faster, and more accurate business decisions.",
    color: "bg-indigo-50 border-indigo-200"
  },
  {
    icon: BarChart3,
    title: "Scalability & Growth",
    description:
      "AI adapts to your business needs, allowing you to scale efficiently without increasing workload or costs.",
    color: "bg-orange-50 border-orange-200"
  },
];

const marqueeFeatures = [
  { icon: Target, text: "Resource Allocation" },
  { icon: Zap, text: "AI-Powered Insight" }, 
  { icon: Settings, text: "API Integration" },
  { icon: BarChart3, text: "Performance" },
  { icon: Workflow, text: "Automated Workflows" },
  { icon: Users, text: "Complete End-to-End HR Automation" },
  { icon: UserCheck, text: "360° Candidate" },
];

export function AiBenefitsCards() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star className="w-5 h-5 text-blue-600" />
            <span className="text-blue-600 font-medium">AI Benefits</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Key Benefits of <span className="text-blue-600">AI</span> for
            <br />
            Your Business Growth
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how AI automation enhances efficiency, reduces costs, and drives business growth with smarter,
            faster processes.
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefitCards.map((card, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              transition={{ delay: index * 0.12, type: "spring" }}
            >
              <Card className={`h-full border-2 ${card.color} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader>
                  <div className="p-3 w-14 h-14 rounded-lg bg-white shadow-md mb-4 flex items-center justify-center">
                    <card.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {card.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Marquee Features */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {marqueeFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm"
              >
                <feature.icon className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-sm font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg">
            Explore AI Features
          </Button>
        </div>
      </div>
    </section>
  );
}