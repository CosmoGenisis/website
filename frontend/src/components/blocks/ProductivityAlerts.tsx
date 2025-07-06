"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, Clock, AlertTriangle, AlertCircle } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 }
  })
};

export function ProductivityAlerts() {
  return (
    <section className="py-8 sm:py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Card - Productivity Alerts */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          custom={0}
          className="mb-6 sm:mb-8 md:mb-12"
        >
          <Card className="overflow-hidden shadow-xl border-0">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-4 sm:gap-6 p-3 sm:p-4 md:p-6">
              <div className="flex flex-col justify-between order-2 md:order-1">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1.5 sm:mb-2">Productivity Alerts</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 md:mb-6">
                    The system includes three types of alerts: On Leave Alert, Overcapacity Workload Alert and Roadblock Detection Alert. Help you quickly give a solutions for your employee on time
                  </p>
                  <div className="flex gap-3 sm:gap-4 mb-3 sm:mb-4 md:mb-6">
                    <div className="flex items-center">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center mr-2 sm:mr-3">
                        <Bell className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-600" />
                      </div>
                      <span className="text-xs md:text-sm font-medium">Three Types Alerts</span>
                    </div>
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-fit text-xs sm:text-sm md:text-base px-3 sm:px-4 py-1.5 sm:py-2">
                  View Alerts
                </Button>
              </div>
              <div className="bg-blue-50 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 flex items-center justify-center order-1 md:order-2 mb-4 md:mb-0">
                <img 
                  src="https://framerusercontent.com/images/qrPzrzKgD7wd3ty7GpeQ8i313s.png?mock=productivity-alerts" 
                  alt="Productivity Alerts Dashboard showing work hours and capacity alerts" 
                  className="w-full h-auto object-contain rounded sm:rounded-md shadow-md sm:shadow-lg"
                />
              </div>
            </div>
          </Card>
        </motion.div>

        

        

        
      </div>
    </section>
  );
}