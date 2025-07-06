"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Zap, Target, Bell, Globe, Megaphone, BarChart2, Tag, RefreshCw } from 'lucide-react';
import img1 from "@/images/Job_board.png"

type FeatureCard = {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
};

const seekerFeatures: FeatureCard[] = [
  {
    icon: Search,
    title: 'AI-Powered Matching',
    description: 'Personalized job fits based on experience, skills & career goals',
    color: 'bg-blue-500'
  },
  {
    icon: Zap,
    title: 'One-Click Apply',
    description: 'Apply instantly with pre-filled profile & resume',
    color: 'bg-yellow-500'
  },
  {
    icon: Target,
    title: 'Smart Recommendations',
    description: 'See roles that match your background and intent',
    color: 'bg-green-500'
  },
  {
    icon: Bell,
    title: 'Real-Time Alerts',
    description: 'Get notified as soon as relevant jobs go live',
    color: 'bg-purple-500'
  },
  {
    icon: Globe,
    title: 'Public & Private Access',
    description: 'View job status, track application, and chat with recruiter',
    color: 'bg-indigo-500'
  }
];

const recruiterFeatures: FeatureCard[] = [
  {
    icon: Megaphone,
    title: 'Free Unlimited Job Posting',
    description: 'No external fees or limitations',
    color: 'bg-green-500'
  },
  {
    icon: BarChart2,
    title: 'Job Insights',
    description: 'View application data, view-to-apply ratios, candidate demographics',
    color: 'bg-blue-500'
  },
  {
    icon: Tag,
    title: 'Role Tagging & Visibility Boost',
    description: 'Mark roles as urgent, internship, or domain-specific',
    color: 'bg-orange-500'
  },
  {
    icon: RefreshCw,
    title: 'Seamless Agent Integration',
    description: 'Syncs with Optimus, Monica, Onix, and Prime',
    color: 'bg-purple-500'
  }
];

export function JobBoard() {
  return (
    <section className="py-20 bg-white from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            Built-In, Free & Smart
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-blue-600">ZORDIE</span> JOB BOARD
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            "It's not just a job board. It's an AI-powered hiring engine."
          </p>
          <p className="text-md text-gray-500 max-w-2xl mx-auto mt-4">
            Zordie comes with a full-featured internal job board — no setup required, no cost, and packed with intelligent features for both recruiters and job seekers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Job Seeker Features */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-6 px-8">
                <h3 className="text-2xl font-bold text-white">For Job Seekers</h3>
              </div>
              <div className="p-8">
                <div className="space-y-6">
                  {seekerFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <div className={`${feature.color} p-3 rounded-lg mr-4 shadow-md`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Job Board Preview */}
            <div className="bg-white-900 rounded-xl p-6 shadow-2xl">
              <img 
                  src={img1}
                  alt="Daily Employee Report Dashboard" 
                  className="w-full h-auto object-contain rounded-2xl shadow-lg"
                />
              
            </div>
          </div>

          {/* Recruiter Features */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-8">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 py-6 px-8">
                <h3 className="text-2xl font-bold text-white">For Recruiters</h3>
              </div>
              <div className="p-8">
                <div className="space-y-6">
                  {recruiterFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <div className={`${feature.color} p-3 rounded-lg mr-4 shadow-md`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Free job posting with no limits</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600">AI-powered candidate matching</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}