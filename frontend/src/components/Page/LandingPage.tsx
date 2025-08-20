"use client"
import { AgentInfo } from '@/components/blocks/AgentsIntro'
import { HeroSection } from '@/components/blocks/hero-section-2'
import Navbar from '../ui/nav';
import Home from '@/components/blocks/Page';

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
import img1 from "@/images/Background_1.png";
import img2 from "@/images/People_8.png";
import img3 from "@/images/Home.png";
import imgBg from "@/images/Background.png";
import imgDash from "@/images/Home.png";
import img4 from "@/images/People_2.png";
import img5 from "@/images/People_3.png";
import recruiterImg from "@/images/Recruiter.png";
import { Sparkle, BarChart, MessageCircle, Users, FileText } from "lucide-react";



export const LandingPage=()=>{
    return(
        <div className="relative bg-black">
            <HeroSection
            badge={<>Next-Gen Hiring</>}
            title={<>Your Next Hire,<br/> Just Minutes Away.</>}
            subtitle={<>The first autonomous AI hiring platform that connect with top candidates, screen them automatically, and make your hiring smarter, faster, and bias-free.</>}
            buttons={[
                { label: "Start Free Trial", href: "/login", variant: "primary" },
                { label: "Get Early Access", href: "/pre-access", variant: "outline" },
            ]}
            avatars={[
                { src: img2, alt: "avatar 1" },
                { src: img4, alt: "avatar 2" },
                { src: img5, alt: "avatar 3" },
            ]}
            trustedText="Trusted already by 10k+"
            backgroundImage={imgBg}
            dashboardImage={imgDash}
            />
            <Zordifeatures />
            <ZordiFeatures />
            <RecruiterAiTools
                badge={<><Sparkle className="w-5 h-5" /> Features</>}
                heading={<>Designed for recruiters to hire faster and smarter with advanced AI tools.</>}
                features={[
                    {
                    icon: <BarChart className="w-6 h-6 text-gray-500" />,
                    title: "Score & Shortlist Faster",
                    description: "Let our AI analyze candidate skills, GitHub repos, certifications, and portfolios to give you ranked, verified profiles—no more manual digging.",
                    image: recruiterImg,
                    },
                    {
                    icon: <MessageCircle className="w-6 h-6 text-gray-500" />,
                    title: "Built-in Candidate Chat",
                    description: "Instantly message candidates, share updates, or send reminders—no more switching between platforms.",
                    image: recruiterImg,
                    },
                    {
                    icon: <Users className="w-6 h-6 text-gray-500" />,
                    title: "Post Jobs Easily",
                    description: "Create and manage job postings in just a few clicks—customize roles, requirements, and timelines effortlessly from your dashboard.",
                    image: recruiterImg,
                    },
                    {
                    icon: <FileText className="w-6 h-6 text-gray-500" />,
                    title: "Detailed Hiring Analytics",
                    description: "Track query types, statuses, and trends over time. Analyze top-performing agents, recent reports, recruitment funnel metrics, payroll accuracy, and total candidates—all in one dashboard. Ask ChatGPT",
                    image: recruiterImg,
                    },
                    {
                        icon: <Sparkle className="w-6 h-6 text-gray-500" />,
                        title: "AI-Powered Candidate Insights",
                        description: "Activate Talent Pool #activate  #powerfulsearch  Let our AI fetch the best candidates from your talent pool, or use filters to find the best candidates.",
                        image: recruiterImg,
                    }
                ]}
            />
            <UserTestimonials />
            <FaqPage />
            <HeroSmarterHiring 
              title= {<>Smart Hiring<br/> Starts Here</>}
              subtitle={"All-in-one AI platform to find, assess, and onboard top talent faster."}
              buttonText={"Get Started"} 
              onButtonClick={() => window.location.href = "/pre-access"}
              backgroundImage={img1}
              personImage={img2}
            />
            <FooterDemo />
        </div>
    )
}