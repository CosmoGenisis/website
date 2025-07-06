"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Briefcase, Shield, BarChart2, Bell, FileText, Smile } from 'lucide-react';

type BonusFeature = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const bonusFeatures: BonusFeature[] = [
  {
    icon: Briefcase,
    title: 'Integrated AI Job Board',
    description: 'Post jobs and attract talent for free'
  },
  {
    icon: Shield,
    title: 'RBAC Security & Visibility Control',
    description: 'Role-based data access'
  },
  {
    icon: BarChart2,
    title: 'Live Dashboards',
    description: 'Track everything from interviews to payslips'
  },
  {
    icon: Bell,
    title: 'Smart Escalations',
    description: 'Get alerts before things go wrong'
  },
  {
    icon: FileText,
    title: 'Full Audit Trails',
    description: 'Every action logged, every step traceable'
  },
  {
    icon: Smile,
    title: 'Zero Learning Curve',
    description: 'Anyone can use it — no training needed'
  }
];

export function BonusFeatures() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-6">
            <span className="mr-2">💡</span>
            Extra Value
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Bonus Features You'll Love</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Beyond the core AI agents, Zordie includes powerful features that make your HR operations even more efficient.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bonusFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Included in all plans</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
}