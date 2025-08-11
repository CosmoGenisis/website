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
import FaqPage from '../blocks/FaqPage'
import HeroSmarterHiring from '../blocks/HeroSmarterHiring'


export const CompaniesPage=()=>{
    return(
        <div className="relative bg-white">
            <div className="h-full max-h-[800px] overflow-hidden">
            <HeroSection></HeroSection>
            </div>
            <CompanyTabsShowcase />
            <CompanyFeaturesCards />
            <AgentsIntegrationDiagram />
            <ZordieFeatures />
            <FooterDemo />
        </div>
    )
}