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
import FaqPage from '../blocks/FaqPage2'
import HeroSmarterHiring from '../blocks/HeroSmarterHiring'

import img1 from "@/images/Company_background.png";
import img2 from "@/images/Company_img1.png";


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
            <FaqPage />
            <FooterDemo />
        </div>
    )
}