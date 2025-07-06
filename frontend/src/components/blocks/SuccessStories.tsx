"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Zordie AI has completely transformed our recruitment process. We've reduced our time-to-hire by 58% while improving the quality of our candidates. The AI-powered matching is incredibly accurate.",
    author: "Sarah Johnson",
    position: "Head of Talent Acquisition",
    company: "TechGrowth Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    stats: {
      timeToHire: "58% reduction",
      costSavings: "$120,000 annually",
      candidateQuality: "92% match rate"
    }
  },
  {
    id: 2,
    quote: "As a fast-growing startup, we needed to scale our team quickly without compromising on quality. Zordie AI helped us hire 25 engineers in just 6 weeks, all with perfect skill matches for our tech stack.",
    author: "Michael Chen",
    position: "CTO",
    company: "InnovateSphere",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    stats: {
      timeToHire: "65% reduction",
      costSavings: "$85,000 annually",
      candidateQuality: "95% match rate"
    }
  },
  {
    id: 3,
    quote: "The bias elimination features in Zordie AI have helped us build a more diverse engineering team. Our gender ratio improved by 40% in just one year, and we've seen a significant increase in team performance.",
    author: "Priya Patel",
    position: "VP of People",
    company: "Horizon Solutions",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    stats: {
      timeToHire: "52% reduction",
      costSavings: "$95,000 annually",
      candidateQuality: "89% match rate"
    }
  },
];

const caseStudies = [
  {
    id: 1,
    title: "Global Tech Firm Reduces Time-to-Hire by 60%",
    description: "A Fortune 500 technology company implemented Zordie AI across their global recruitment operations, resulting in dramatic improvements in hiring efficiency and candidate quality.",
    metrics: [
      { label: "Reduction in Time-to-Hire", value: "60%" },
      { label: "Increase in Quality of Hire", value: "35%" },
      { label: "Annual Cost Savings", value: "$1.2M" }
    ],
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    color: "bg-blue-50 border-blue-200"
  },
  {
    id: 2,
    title: "Startup Scales Team 3x with Limited Resources",
    description: "A fast-growing SaaS startup used Zordie AI to triple their engineering team size in just 4 months, while maintaining high quality standards and staying within budget constraints.",
    metrics: [
      { label: "Team Growth", value: "300%" },
      { label: "Recruiter Productivity", value: "5x" },
      { label: "Candidate Satisfaction", value: "96%" }
    ],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    color: "bg-purple-50 border-purple-200"
  },
  {
    id: 3,
    title: "Healthcare Provider Improves Diversity Metrics",
    description: "A leading healthcare organization leveraged Zordie AI's bias elimination features to significantly improve diversity in their clinical and administrative hiring.",
    metrics: [
      { label: "Diversity Increase", value: "47%" },
      { label: "Bias Incidents", value: "0" },
      { label: "Retention Rate", value: "94%" }
    ],
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    color: "bg-green-50 border-green-200"
  }
];

export function SuccessStories() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transforming <span className="text-blue-600">Recruitment</span> Outcomes
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how organizations are achieving remarkable results with Zordie AI's intelligent recruitment platform
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="mb-20 relative">
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          
          <div className="overflow-hidden">
            <motion.div 
              className="flex"
              initial={false}
              animate={{ x: `-${activeTestimonial * 100}%` }}
              transition={{ type: "spring" as const, stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4 md:px-12">
                  <Card className="bg-white shadow-xl border-0 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        {/* Left side - Image and Author Info */}
                        <div className="md:w-1/3 bg-blue-600 text-white p-8 flex flex-col justify-between">
                          <div className="mb-6">
                            <Quote className="w-12 h-12 text-blue-300 mb-4" />
                            <div className="flex items-center mb-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex items-center mb-4">
                              <img 
                                src={testimonial.image} 
                                alt={testimonial.author}
                                className="w-16 h-16 rounded-full object-cover border-2 border-white"
                              />
                              <div className="ml-4">
                                <h4 className="font-bold text-lg">{testimonial.author}</h4>
                                <p className="text-blue-200">{testimonial.position}</p>
                                <p className="text-blue-100">{testimonial.company}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Right side - Quote and Stats */}
                        <div className="md:w-2/3 p-8 md:p-12">
                          <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-8">
                            {testimonial.quote}
                          </blockquote>
                          
                          <div className="grid grid-cols-3 gap-4">
                            <div className="bg-blue-50 p-4 rounded-lg">
                              <p className="text-sm text-gray-500 mb-1">Time-to-Hire</p>
                              <p className="text-lg font-semibold text-blue-700">{testimonial.stats.timeToHire}</p>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg">
                              <p className="text-sm text-gray-500 mb-1">Cost Savings</p>
                              <p className="text-lg font-semibold text-green-700">{testimonial.stats.costSavings}</p>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-lg">
                              <p className="text-sm text-gray-500 mb-1">Quality</p>
                              <p className="text-lg font-semibold text-purple-700">{testimonial.stats.candidateQuality}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        
        {/* Case Studies */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Case Studies</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how organizations across industries have transformed their recruitment processes with Zordie AI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <motion.div 
                key={study.id}
                className={`border rounded-xl overflow-hidden shadow-lg ${study.color}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: study.id * 0.1 }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">{study.title}</h4>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {study.metrics.map((metric, i) => (
                      <div key={i} className="flex justify-between items-center">
                        <span className="text-gray-600">{metric.label}</span>
                        <span className="font-semibold text-blue-600">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full">
                    Read Full Case Study
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="mr-4">
              View All Case Studies
            </Button>
            <Button>
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}