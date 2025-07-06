"use client"
import React from 'react';
import Navbar from '../ui/nav';
import { Features } from '../blocks/features-11';
import { FeaturesSectionWithHoverEffects } from '../blocks/feature-section-with-hover-effects';
import { RbacFeaturesPage } from '../blocks/RbacFeaturesPage';
import FooterDemo from '../ui/FooterDemo';
import { Footerdemo } from "@/demo/fs"
import FeatureBentoGrid from '../blocks/FeatureBentoGrid';
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

export function FeaturesPage() {
  return (
    <div className="min-h-screen relative bg-white">

      <Navbar></Navbar>
      {/* <HeroParallaxDemo></HeroParallaxDemo> */}
              <HeroAgent></HeroAgent>

      
      {/* Prime Agent Section - Moved to top as the main feature */}
      <AgentShowcase />

      {/* Hover Effects Section - Prime-specific features */}
      <FeaturesSectionWithHoverEffects />

      
      
      {/* Recruitment Workflow Section */}
      <RecruitmentWorkflow />
      
      
      {/* Employee Reporting Section */}
      <EmployeeReporting />
      
      {/* Bonus Features Section */}
      <BonusFeatures />
      
      
      
      {/* RBAC Features Section - Security features at the end */}
      <RbacHero></RbacHero>
      <RbacFeaturesPage></RbacFeaturesPage>

      {/* Call To Action Section */}
      <div className="flex justify-center items-center mt-12 bg-white py-12">
        <div className="w-full max-w-7xl">
          <TeamsPage />
        </div>
      </div>
      
      

      {/* Hero Section with Gradient Heading */}
      
      <FooterDemo />
    </div>
  );
}