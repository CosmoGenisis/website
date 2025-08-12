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
import { CandidateFeaturesShowcase } from '../blocks/CandidateFeaturesShowcase'
import FaqPage from '../blocks/FaqPage2'
import HeroSmarterHiring from '../blocks/HeroSmarterHiring'
import img1 from "@/images/Job-seekers_background.png";
import img2 from "@/images/Job-seekers_1.png";
import img3 from "@/images/Job-seekers_2.png";
import vid1 from "@/images/Job-seekers_video_1.mp4";


export const JobSeekersPage=()=>{
    return(
        <div className="relative bg-white">
            <div className="h-full max-h-[800px] overflow-hidden">
            <HeroSection
                heading={<>Crack Interviews. Get<br />Hired. Build Your Career</>}
                subheading="Zordiehelps freshers, students, and job seekers practice, improve, and land their dream job - fast, with no irrelevant roles or fake listings."
                buttonText="Create Your Profile"
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
                <CandidateFeaturesShowcase
                heading="What You Get as a Candidate"
                subheading="Our platform provides smart features tailored to help you find the right job, apply with confidence, and stay organized throughout your career journey."
                features={[
                    { title: "Practice Full-Length AI Interviews Anytime", description: "Track applications, manage interviews, and stay updated on job progress — all in one streamlined and intuitive space." },
                    { title: "Auto-Generated Smart Resume" },
                    { title: "Your Personal AI Career Assistant" },
                    { title: "Get Jobs You’re Truly Passionate About" },
                ]}
                videoSrc={vid1}
                careerCard={{
                    image: img3,
                    title: "Creating Careers That Matter",
                    description: "We blend smart technology and career support to help you discover roles that align with your skills, boost confidence, and create a lasting impact in your professional journey.",
                    progress: [
                    { label: "Job Fit", percent: 80 },
                    { label: "Career Growth", percent: 70 },
                    { label: "Interview Confidence", percent: 80 },
                    ],
                    stats: [
                    { label: "Happy Candidates", value: "45K+", subLabel: "Happy Candidates" },
                    { label: "Interview Aced", value: "15K+", subLabel: "Interview Aced" },
                    { label: "Jobs landed", value: "12K+", subLabel: "Jobs landed" },
                    { label: "Users Satisfaction", value: "100%", subLabel: "Users Satisfaction" },
                    ],
                }}
                />
            <AgentsIntegrationDiagram />
            <ZordieFeatures />
            <AnimatedTestimonialsWithParticles />
            <FaqPage />
            <FooterDemo />
        </div>
    )
}