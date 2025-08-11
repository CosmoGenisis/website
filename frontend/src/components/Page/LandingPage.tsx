"use client"
import { AgentInfo } from '@/components/blocks/AgentsIntro'
import { HeroSection } from '@/components/blocks/hero-section-2'
import Home from '@/components/blocks/Page'

import FooterDemo from '../ui/FooterDemo';
import { Footerdemo } from '@/demo/fs'
import Flow from '../blocks/Flow'
import HRAutomationSection from '../blocks/Analytics'
import Productivity from '../blocks/Productivity'
import { AnimatedTestimonialsWithParticles } from '../blocks/Testo'
import {FaqDemo} from '@/demo/faqdemo'
{/*import ZordieFeatures from '../ui/ZordieFeatures'*/}
import ZordieFeatures1 from '../ui/ZordieFeature1'
import { ContainerScroll } from '../ui/CS'
import ScrollAnimationDemo from '../ui/CSD'
import WaitLanding from '../blocks/Waitlist'
import PrimeFeature from '../blocks/PrimeFeatures'
import HRAgentsDashboard from '../blocks/Hragents'
import AIBenefitsLanding from '../blocks/AiBenefits'
import Trial from '../blocks/Trial'
import FeatureBentoGrid from '../blocks/FeatureBentoGrid'
import Zordifeatures from '../ui/ZordieFeatures3'
import ZordiFeatures from '../ui/ZordieFeatures4'
import RecruiterAiTools from '../blocks/RecruiterAiTools'
import UserTestimonials from '../blocks/UserTestimonials'
import FaqPage from '../blocks/FaqPage'
import HeroSmarterHiring from '../blocks/HeroSmarterHiring'


export const LandingPage=()=>{
    return(
        <div className="relative bg-white">
            <HeroSection></HeroSection>
            <div className=" mb-24">
            <Zordifeatures />
            </div>
            <ZordiFeatures />
            <RecruiterAiTools />
            <UserTestimonials />
            <FaqPage />
            <HeroSmarterHiring />
            <FooterDemo />
        </div>
    )
}