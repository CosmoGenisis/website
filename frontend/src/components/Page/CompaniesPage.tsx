"use client"
import { AgentInfo } from '@/components/blocks/AgentsIntro'
import { HeroSection } from '@/components/blocks/hero-section-5'
import {CompanyTabsShowcase} from '@/components/blocks/CompanyTabsShowcase'
import { CompanyFeaturesCards } from '@/components/blocks/CompanyFeatureCards';
import {AgentsIntegrationDiagram} from '@/components/blocks/AgentsIntegrationDiagram';
import Home from '@/components/blocks/Page'

import FooterDemo from '../ui/FooterDemo';
import { Footerdemo } from '@/demo/fs'
import Flow from '../blocks/Flow'
import HRAutomationSection from '../blocks/Analytics'
import Productivity from '../blocks/Productivity'
import { AnimatedTestimonialsWithParticles } from '../blocks/Testo'
import {FaqDemo} from '@/demo/faqdemo'
import ZordieFeatures from '../ui/ZordieFeatures'
import { ContainerScroll } from '../ui/CS'
import ScrollAnimationDemo from '../ui/CSD'
import WaitLanding from '../blocks/Waitlist'
import PrimeFeature from '../blocks/PrimeFeatures'
import HRAgentsDashboard from '../blocks/Hragents'
import AIBenefitsLanding from '../blocks/AiBenefits'
import Trial from '../blocks/Trial'
import FeatureBentoGrid from '../blocks/FeatureBentoGrid'
import RecruiterAiTools from '../blocks/RecruiterAiTools'
import UserTestimonials from '../blocks/UserTestimonials'
import FaqPage2 from '../blocks/FaqPage2'
import HeroSmarterHiring from '../blocks/HeroSmarterHiring'

import img1 from "@/images/Company_background.png";
import img2 from "@/images/Company_img1.png";
import img3 from "@/images/Faq_1.png";
import img4 from "@/images/Faq_2.png";
import img5 from "@/images/Faq_background.png";


export const CompaniesPage=()=>{
    return(
        <div className="relative bg-white">
            <div className="h-full max-h-[800px] overflow-hidden">
            <HeroSection
                heading={<>Your AI Hiring Partner<br />From Start To Finish</>}
                subheading="Hire Smarter, Faster, and at Scale with Zero Manual Effort"
                buttonText="Get Started"
                onButtonClick={() => {/* your handler */}}
                />
            </div>
            <CompanyTabsShowcase
                tabs={[
                    { label: "Activate Talent Pool", image: img2 },
                    { label: "Interview Services", image: img2 },
                    { label: "Automated Candidate Onboarding", image: img2 },
                ]}
                backgroundImage={img1}
                />
            <CompanyFeaturesCards />
            <AgentsIntegrationDiagram />
            <ZordieFeatures />
            <AnimatedTestimonialsWithParticles />
            <FaqPage2
            faqs={[
                { question: "What is Zordie for Job Seekers?", answer: "Zordie is an AI-powered hiring and career platform designed for both recruiters and job seekers to simplify hiring and job discovery." },
                { question: "How does Zordie improve efficiency?",answer: "Recruiters can automate job posting, screen candidates using AI, manage pipelines, and collaborate with their teams in one dashboard.",},
                {question: "How i track my Interview Progress", answer: "Job seekers can discover verified jobs, track interviews, participate in hiring contests, and get skill-based insights to improve.",},
                {question: "How is Zordie different from other hiring/job platforms?",answer: "Zordie integrates smart screening, AI orchestration, candidate insights, and end-to-end tracking for both recruiters and candidates.",},
                { question: "Can I verify projects, portfolios, or certifications on Zordie?",answer: "Yes, Zordie auto-verifies GitHub projects, certifications, and portfolios using intelligent crawling and authenticity checks.",},
                {question: "Are contests and challenges open to everyone?",answer: "Yes! Contests are open to all verified job seekers and often lead to direct hiring by top companies.",},
                                                // ...
            ]}
            heading={<>Answers to your<br />common AI questions</>}
            badge="FAQ"
            banner={{
                background: img5,
                title: <>Hire Smarter with Zordie</>,
                subtitle: "From job posting to onboarding - all in one platform.",
                buttonText: "Start Hiring Now",
                onButtonClick: () => {/* your handler */},
                peopleImages: [
                { src: img3, alt: "Person 1", style: { top: "80%", left: "50%", transform: "translate(-60%, -50%)" } },
                { src: img4, alt: "Person 2", style: { top: "80%", left: "50%", transform: "translate(0%, -50%)" } },
                ],
            }}
            />
            <FooterDemo />
        </div>
    )
}