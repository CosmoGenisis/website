"use client"
import React from 'react';
import Navbar from '../ui/nav';
import { Features } from '../blocks/features-11';
import { FeaturesSectionWithHoverEffects } from '../blocks/feature-section-with-hover-effects';
import { RbacFeaturesPage } from '../blocks/RbacFeaturesPage';
import HeroSmarterHiring from '../blocks/HeroSmarterHiring';
import FooterDemo from '../ui/FooterDemo';
import { Footerdemo } from "@/demo/fs"
import FeatureBentoGrid from '../blocks/FeatureBentoGrid';
import FaqPage2 from '../blocks/FaqPage2';
import ZordieFeatures1 from '../ui/ZordieFeature1';
import { motion } from 'framer-motion';
import { HeroSection } from '../blocks/hero-section-2';
import { AgentShowcase } from '../blocks/AgentShowcase';
import { JobBoard } from '../blocks/JobBoard';
import { TeamCollaboration } from '../blocks/TeamCollaboration';
import { BonusFeatures } from '../blocks/BonusFeatures';
import { RecruitmentWorkflow } from '../blocks/RecruitmentWorkflow';
import { EmployeeReporting } from '../blocks/EmployeeReporting';
import { ProductivityAlerts } from '../blocks/ProductivityAlerts';
import HeroAgent from "@/components/blocks/heroAgentPHR"
import { Marquee } from "@/components/ui/marqueeText"
import { HeroParallaxDemo } from "@/demo/agentHeroDemo"
import { GradientHeadingDemo } from "@/demo/gradientHeadDemo"
import WhatsIncludedSection from "@/demo/WhatIncluded"
import dash from "@/components/blocks/Dashboard.png"
import prime from '@/images/prime.png'
import {Bolt,CopyPlus,Layers2,Files} from 'lucide-react'
import { IntegrationsNetwork } from "@/components/blocks/IntegrationsNetwork";
import {RbacHero} from "@/components/blocks/RbacHero";
import {TeamsPage} from "@/components/blocks/TeamsPage";
import { FeaturesHero } from '../blocks/FeaturesHero';
import { PrimeFeaturesHero } from "../blocks/PrimeFeaturesHero";
import { AgentNetworkSection } from "@/components/blocks/AgentNetworkSection";
import {FeaturesImpactSection} from "@/components/blocks/FeaturesImpactSection";
import dashboardImg from '@/images/Features_1.png';
import bgImg from '@/images/Hero_section.png';
import user1 from '@/images/Avatar_2.png';
import user2 from '@/images/avatar.png';
import primeLogo from "@/images/logo.png";
import screeningImg from "@/images/logo.png";
import interviewerImg from "@/images/logo.png";
import sourcingImg from "@/images/logo.png";
import voiceImg from "@/images/logo.png";
import crmImg from "@/images/logo.png";
import recruiterImg from "@/images/logo.png";
import candidateImg from "@/images/logo.png";
import img1 from "@/images/Features_3.png";
import img2 from "@/images/agent1.png";
import img3 from "@/images/agent7.png";
import img4 from "@/images/Person_10.png";
import img5 from "@/images/bg_1.png";
import analyticsImg from "@/images/analytics.png";
import interviewImg from "@/images/interview.png";
import teamImg from "@/images/teams_1.png";
import { Users, Calendar, BarChart } from "lucide-react";

export function FeaturesPage() {
  return (
    <div className="min-h-screen relative bg-white">

      <Navbar></Navbar>
      {/* <HeroParallaxDemo></HeroParallaxDemo> */}
      <FeaturesHero
        badge={<>Advance AI Hiring</>}
        title={<>First Full-Stack Agentic<br />AI Copilot for Hiring</>}
        subtitle={
          <>Automate tasks, boost accuracy, and make faster decisions with intelligent tools built for modern recruiters.</>
        }
        backgroundImage={bgImg}
        dashboardImage={dashboardImg}
        peopleImages={[
          { src: user1, alt: "User 1" },
          { src: user2, alt: "User 2" },
        ]}
      />

      <PrimeFeaturesHero
        badge={<>Features</>}
        title={<>What is Prime ?</>}
        subtitle={
          <>Discover how Prime HR optimizes workforce management and boosts operational efficiency.</>
        }
        features={[
          { text: "Coordinates all agent activities with intelligent task distribution and priority management." },
          { text: "Maintains enterprise-grade security protocols and access controls across all HR systems." },
          { text: "Dynamically allocates system resources and manages auto-scaling based on demand." },
          { text: "Advanced decision-making algorithms that learn from organizational patterns and optimize processes" },
        ]}
        centerLogo={primeLogo}
        backgroundGradient="linear-gradient(120deg, #eaf1ff 0%, #fde7e7 100%)"
      />

      <AgentNetworkSection
        badge={<>Integrations</>}
        title={<>How It Works ?</>}
        subtitle={
          <>Prime Command and make orchestrate other agents to connect with recruiters, and candidates - enabling smooth collaboration and streamlined workflows across your hiring process and executing complete process.</>
        }
        centerLogo={primeLogo}
        topAgents={[
          { label: "Screening Agent", image: screeningImg },
          { label: "AI Interviewer Agent", image: interviewerImg },
          { label: "Sourcing Agent", image: sourcingImg },
          { label: "Voice Calling Agent", image: voiceImg },
        ]}
        bottomAgents={[
          { label: "CRM Agent", image: crmImg },
        ]}
        leftCard={{ label: "Recruiters", image: recruiterImg }}
        rightCard={{ label: "Candidates", image: candidateImg }}
        subSection={{
          image: img1,
          badge: <>Advance Solutions</>,
          title: <>Prime Commands. Monica and Vika Deliver.</>,
          description: <>Prime seamlessly collaborates with its sub-agents Monica (voice-based behavioral evaluator) and Vika (post-MVP sandbox-based technical evaluator).</>,
          agents: [
            {
              icon: img2,
              name: "Monica",
              description: "Monica evaluates cultural and behavioral alignment using structured voice conversations and ML-powered analysis",
            },
            {
              icon: img3,
              name: "VIKA",
              description: "Vika delivers technical evaluations through real-world, role-specific tasks in an AI-driven sandbox.",
            },
          ],
        }}
      />
      
      
      
      {/* RBAC Features Section - Security features at the end */}
      <RbacHero></RbacHero>
      <RbacFeaturesPage></RbacFeaturesPage>
      <FeaturesImpactSection
        heading={<>Features Built For Impact</>}
        subheading={<>From startups to enterprises, Zordie delivers AI-driven hiring and HR tools that scale with your goals.</>}
        topFeatures={[
          {
            icon: <BarChart className="w-8 h-8 text-orange-500" />,
            title: "Real Time Analytics",
            description: "Monitor result performance with real time insights.",
            image: analyticsImg,
          },
          {
            icon: <Calendar className="w-8 h-8 text-orange-500" />,
            title: "Smart Interview Scheduling",
            description: "Plan and automate interviews - all in one platform.",
            image: interviewImg,
          },
          {
            icon: <Users className="w-8 h-8 text-orange-500" />,
            title: "Team Collaboration",
            description: "Manage and improve campaigns efficiently.",
            image: teamImg,
          },
        ]}
        middleFeatures={[
          {
            icon: <BarChart className="w-8 h-8 text-orange-500" />,
            title: "Streamline Communication",
            description: "Manage conversations for smooth coordination.",
            image: analyticsImg,
          },
          {
            icon: <Calendar className="w-8 h-8 text-orange-500" />,
            title: "AI Copilot ",
            description: "Get smart suggestions for job posts, candidate reviews, and next steps—your AI assistant, always ready to help.",
            image: interviewImg,
          },
       ]}
        bigFeature={{
             icon: <Calendar className="w-8 h-8 text-orange-500" />,
             title: "Automate Onboarding",
             description: "From scheduling interviews to sending offer letters and collecting documents, our AI automates every step. Candidates are onboarded with zero human delay, ensuring faster joining and better experience.",
             image: interviewImg,
        }}
      />
      <div className="bg-white max-h-[700px] ">
      <FaqPage2
            faqs={[
                
            ]}
            banner={{
                background: img5,
                title: <>Explore Zordie’s Powerful Features</>,
                subtitle: "From smart JD creation to autonomous interviews - everything you need in one platform.",
                buttonText: "Get Started",
                onButtonClick: () => {/* your handler */},
                peopleImages: [
                { src: img4, alt: "Person 1", style: {position: "absolute", top: "60%", left: "50%", transform: "translate(-50%, -50%)", width: "150%", height: "150%", objectFit: "cover", zIndex: 10 } },
                ],
            }}
            />
            </div>

      {/* Hero Section with Gradient Heading */}
      
      <FooterDemo />
    </div>
  );
}