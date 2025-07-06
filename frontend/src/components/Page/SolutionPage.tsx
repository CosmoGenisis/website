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

export function SolutionPage () {
  return (
    <div className="relative bg-white">
      <Navbar />
      <HeroSection />
      <SolutionCardsSection />
      <ResultsSection />
      <SolutionsImpactSection />
      <ImpactSection />
      <FooterDemo />
    </div>
  )
}