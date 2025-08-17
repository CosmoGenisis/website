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
import {WhyZordieWorks} from '../blocks/WhyZordieWorks'
import {CareerGrowthBenefitSection} from '../blocks/CareerGrowthBenefitSection'
import { UserTestimonialSection } from '../blocks/UserTestimonialSection'
import FaqPage2 from '../blocks/FaqPage2'
import HeroSmarterHiring from '../blocks/HeroSmarterHiring'
import img1 from "@/images/Job-seekers_background.png";
import img2 from "@/images/Job-seekers_1.png";
import img3 from "@/images/Job-seekers_2.png";
import img4 from "@/images/agent4.png";
import img5 from "@/images/Growth_1.png";
import img6 from "@/images/Faq_background_2.png";
import img7 from "@/images/Faq_3.png";
import img8 from "@/images/Job-seekers_3.png";
import img9 from "@/images/Job-seekers_4.png";
import userImg from "@/images/user.png";
import sceneImg from "@/images/Testimonial.png";
import ava from "@/images/Avatar_2.png";
import vid1 from "@/images/Job-seekers_video_1.mp4";
import { FiZap, FiArchive, FiBookmark } from "react-icons/fi";





export const JobSeekersPage=()=>{
    return(
        <div className="relative bg-white">
            <div className="h-full max-h-[800px] overflow-hidden">
            <HeroSection
                heading={<>Crack Interviews. Get<br />Hired. Build Your Career</>}
                subheading="Zordiehelps freshers, students, and job seekers practice, improve, and land their dream job - fast, with no irrelevant roles or fake listings."
                buttonText="Create Your Profile"
                onButtonClick={() => window.location.href = "/login"}
                />
            </div>
            <CompanyTabsShowcase
                tabs={[
                    { label: "Activate Talent Pool", image: img8 },
                    { label: "Interview Services", image: img9 },
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
                <WhyZordieWorks
                    image={img4}
                    heading={<>Why Zordie<br />Works for You</>}
                    capabilities={[
                        { text: "Practice interviews anytime, from anywhere" },
                        { text: "Get automatically tailored resumes for every application" },
                        { text: "Have your own AI guide to track and improve your journey" },
                        { text: "Focus only on jobs you're passionate about" },
                        { text: "Skip scams - get access to verified, paying companies" },
                        { text: "Build confidence and improve with every session" },
                    ]}
                    />
                <CareerGrowthBenefitSection
                    heading={<>The Key Benefits of AI<br />for Your Career Growth</>}
                    subheading="Discover how AI-powered tools help you save time, improve your skills, and unlock better job opportunities with smarter, faster support."
                    card={{
                        icon: "💡",
                        title: <>Verified Internship &amp; Fresher Job Listings</>,
                        description: (
                        <>
                            No fake promises. No scams. Every job listed on Zordie is from <b>verified companies</b> actively hiring and paying real talent.
                        </>
                        ),
                        image: img5,
                        imageAlt: "Zordie Dashboard",
                    }}
                    features={[
                         {icon: <FiZap className="w-6 h-6 text-black" />, title: "Get Discovered by Top Startups & Employers", description: "Stand out in front of companies hiring through Zordie. Let your interview performance and smart resume do the talking."},
                         {icon: <FiArchive className="w-6 h-6 text-black" />, title: "Interview Timeline", description: "View upcoming and past interviews at a glance to stay on top of your hiring journey."},
                         {icon: <FiBookmark className="w-6 h-6 text-black" />, title: "Discover Jobs & Events", description: "Instantly access top roles, trending career paths, and hiring events tailored to your interests."},
                    ]}
                    />
                <UserTestimonialSection
                    heading="See what our users are saying."
                    user={{
                        avatar: ava,
                        name: "Dennis J. Lester",
                        role: "Senior Frontend Developer",
                        testimonial: "Everything I needed - jobs, resources, events - was in one place. No more endless searches.",
                        rating: 4.7,
                        maxRating: 5,
                    }}
                    image={userImg}
                    />
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
                        background: img6,
                        title: <>Start Your Career Journey with Zordie</>,
                        subtitle: "Make yourself job-ready. Apply with purpose. Get hired with confidence",
                        buttonText: "Start Practicing Now",
                        onButtonClick: () =>  window.location.href = "/pre-access",
                        peopleImages: [
                        { src: img7, alt: "Person 1", style: { position: "absolute", top: "60%", left: "50%", transform: "translate(-50%, -50%)", width: "150%", height: "150%", objectFit: "cover", zIndex: 10 } },
                        ],
                    }}
                    />
            <FooterDemo />
        </div>
    )
}