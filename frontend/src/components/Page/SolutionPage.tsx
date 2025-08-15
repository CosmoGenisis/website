"use client"
import Navbar from "../ui/nav"
import FooterDemo from '../ui/FooterDemo';
import Flow from "../blocks/Flow"
import AIBenefitsLanding from "../blocks/AiBenefits"
import { AnimatedTestimonialsWithParticles } from "../blocks/Testo"
import { FaqDemo } from "@/demo/faqdemo"
import ZordieFeatures from "../ui/ZordieFeatures"
import { HeroSection } from "../blocks/hero-section-3"
import {SolutionCardsSection} from "../blocks/SolutionCardsSection"
import {ResultsSection} from "../blocks/ResultsSection"
import {SolutionsImpactSection} from "../blocks/SolutionsImpactSection"
import {ImpactSection} from "../blocks/ImpactSection-2"
import {CallToAction} from "@/components/blocks/CallToAction"
import {SolutionHero} from "../blocks/SolutionHero"
import {RecruitmentWorkflowSection} from "../blocks/RecruitmentWorkflowSection"
import { AgenticHiringBenefitsSection } from "@/components/blocks/AgenticHiringBenefitsSection";
import HeroSmarterHiring from '../blocks/HeroSmarterHiring';
import orbImg from "@/images/orb.png";
import avatar1 from "@/images/user1.png";
import avatar2 from "@/images/user2.png";
import avatar3 from "@/images/user3.png";
import img1 from "@/images/Solution_1.png";
import img2 from "@/images/Background_1.png";
import img3 from "@/images/People_8.png";
import img4 from "@/images/People_8.png";
import imgReq from "@/images/req.png";
import imgScreen from "@/images/screen.png";
import { Sparkles, PhoneCall, BadgeCheck, Settings, Zap, Users, Mic, BarChart3, LineChart, BarChart, MessageCircle } from "lucide-react";

export function SolutionPage () {
  return (
    <div className="relative bg-white">
      <Navbar />
      <SolutionHero
        heading={<>Automate Hiring.<br />Accelerate Growth.</>}
        subheading="Automated hiring solutions designed for all recruiters."
        customers={[
          { avatar: avatar1, name: "User 1" },
          { avatar: avatar2, name: "User 2" },
          { avatar: avatar3, name: "User 3" },
        ]}
        customerCount="100+"
        orbImage={orbImg}
        orbBadges={[
          { icon: <Sparkles className="text-pink-500" />, label: "Generating", style: { bottom: 40, right: 0 } },
          { icon: <Sparkles className="text-pink-500" />, label: "", style: { top: 0, left: "60%" } },
        ]}
        orbStats={[
          { label: "AI Hiring", color: "#a259ff" },
          { label: "Recruitment", color: "#ff6b6b" },
        ]}
        orbFeatures={[
          { icon: <PhoneCall className="text-pink-500" />, label: "AI Calling", style: { bottom: -40, left: "10%" } },
        ]}
      />
      <SolutionCardsSection
        badge="Get Things Done"
        heading={<>Solutions for<br />Advanced Hiring</>}
        description="Advanced AI to help you hire faster, smarter, and more effectively."
        tags={[
          { icon: <Zap />, label: "Faster Hiring" },
          { icon: <Settings />, label: "Tool-Friendly" },
          { icon: <BarChart3 />, label: "Automation" },
        ]}
        image={img1} 
        features={[
          {
            icon: <BadgeCheck />,
            title: "Application Tracker",
            description: "Track job stages: Applied, In Progress, Interview, Offer.",
          },
          {
            icon: <BadgeCheck />,
            title: "Smart Sourcing",
            description: "AI quickly finds top talent from multiple platforms, giving you only relevant, verified profiles.",
          },
          {
            icon: <Mic />,
            title: "AI Voice Calling",
            description: "AI makes quick screening calls, checking skills and confidence, with instant results on your dashboard.",
          },
          {
            icon: <Users />,
            title: "Auto CRM",
            description: "AI CRM tracks candidates, updates profiles, and automates follow-ups - so you never miss a hire.",
          },
          {
            icon: <BadgeCheck />,
            title: "Full AI Interviewer",
            description: "AI handles entire interviews - testing skills, behavior, and logic with instant, bias-free results.",
          },
        ]}
      />
      <RecruitmentWorkflowSection
        heading="Recruitment Workflow"
        subheading="Our platform offers a comprehensive recruitment workflow to advance your hiring process"
        steps={[
          {
            image: imgReq,
            title: "Specify Requirements",
            description:
              "Auto-generates role-specific job descriptions and instantly posts them across platforms—saving hours of manual work and attracting the right talent fast.",
            icon: <LineChart />,
          },
          {
            image: imgScreen,
            title: "Automate Sourcing & Screening",
            description:
              "AI auto-sources, screens, and shortlists top candidates with real-time fraud detection and predictive matching ensuring data-backed, drop-proof hiring on autopilot.",
            icon: <BarChart />,
          },
        ]}
        bigCard={{
          image: imgScreen,
          imageAlt: "Workflow Overview",
          icon: <Zap className="text-blue-500" />,
          title: "Automate Onboarding",
          description:
              "From scheduling interviews to sending offer letters and collecting documents, our AI automates every step. Candidates are onboarded with zero human delay, ensuring faster joining and better experience.",
        }}
      />
      <AgenticHiringBenefitsSection 
        badge={<>Smart. Secure. Scalable</>}
        heading="Benifits of Agentic Hiring System"
        benefits={[
          {
            icon: <Sparkles />,
            title: "Smart Screening",
            description: "Instantly shortlist candidates based on scores, skills, and past experiences",
            image: imgScreen,
            imageAlt: "Smart Screening",
            highlight: true,
          },
          {
            icon: <BarChart3 />,
            title: "Performance Analytics",
            image: imgScreen,
            imageAlt: "Performance Analytics",
          },
          {
            icon: <MessageCircle />,
            title: "Built-in Candidate Chat",
            image: imgScreen,
            imageAlt: "Candidate Chat",
          },
          {
            icon: <Users />,
            title: "Skill-based Job Matching",
            image: imgScreen,
            imageAlt: "Job Matching",
          },
          {
            icon: <Zap />,
            title: "90% Faster Hiring",
            image: imgScreen,
            imageAlt: "Faster Hiring",
          },
        ]}
      />
      <HeroSmarterHiring 
              title= {<>Smart Hiring Solutions for<br/> Every Need</>}
              subtitle={"AI-driven solutions to help you hire better, faster, and at scale."}
              buttonText={"Get Started"}
              backgroundImage={img2} 
              personImage={img4}
            />
      <FooterDemo />
    </div>
  )
}