"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, Building2, Users, LineChart } from 'lucide-react';
import img1 from "@/images/Workflow1.png";
import img2 from "@/images/Workflow2.png";
import img3 from "@/images/Workflow3.png";
import img4 from "@/images/Workflow4.png";
import img5 from "@/images/agent5.png";
import img6 from "@/images/agent6.png";
import imgCenter from "@/images/agent-center.png";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 }
  })
};

const recruitmentCards = [
  {
    title: "Specify Requirements",
    description: "Auto-generates role-specific job descriptions and instantly posts them across platforms—saving hours of manual work and attracting the right talent fast.",
    icon: UserPlus,
    image: img1,
    buttonText: "Job Postings",
    color: "bg-blue-50 border-blue-200"
  },
  {
    title: "Automate Sourcing & Screening",
    description: "AI auto-sources, screens, and shortlists top candidates with real-time fraud detection and predictive matching ensuring data-backed, drop-proof hiring on autopilot.",
    icon: Building2,
    image: img2,
    buttonText: "Brand Essence",
    color: "bg-purple-50 border-purple-200"
  },
  {
    title: "Automate Onboarding",
    description: "From scheduling interviews to sending offer letters and collecting documents, our AI automates every step. Candidates are onboarded with zero human delay, ensuring faster joining and better experience.",
    icon: Users,
    image: img3,
    buttonText: "Workflow",
    color: "bg-green-50 border-green-200"
  },
  {
    title: "Manage & Track Performance",
    description: "Zordie AI intelligently manages your team post-onboarding—auto-tracking performance, task progress, engagement, and growth. It aligns goals, delivers continuous feedback, and offers real-time insights to boost productivity and retention effortlessly.",
    icon: LineChart,
    image: img4,
    buttonText: "Engagement",
    color: "bg-orange-50 border-orange-200"
  }
];

export function RecruitmentWorkflow() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            Recruitment Excellence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Complete <span className="text-blue-600">Recruitment</span> Workflow
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform offers a comprehensive recruitment workflow to streamline your hiring process
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {recruitmentCards.map((card, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <Card className={`overflow-hidden shadow-lg border-2 ${card.color} h-full`}>
                <div className="grid md:grid-cols-2 h-full">
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="p-2 w-12 h-12 rounded-lg bg-white shadow-md mb-4 flex items-center justify-center">
                        <card.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl font-bold mb-2">{card.title}</CardTitle>
                      <CardDescription className="text-gray-600">{card.description}</CardDescription>
                    </div>
                    <Button variant="outline" className="mt-4 w-fit">
                      {card.buttonText}
                    </Button>
                  </div>
                  <div className="bg-gray-100 flex items-center justify-center p-4">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-full h-full object-contain rounded-md"
                    />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}