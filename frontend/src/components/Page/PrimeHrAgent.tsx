"use-client"
import HeroAgent from "@/components/blocks/heroAgentPHR"

import { Marquee } from "@/components/ui/marqueeText"
import Navbar from "@/components/ui/nav"
import { HeroParallaxDemo } from "@/demo/agentHeroDemo"
import { FeaturesSectionWithHoverEffectsDemo } from "@/demo/FeatureDemo"
import FooterDemo from '../ui/FooterDemo';
import { GradientHeadingDemo } from "@/demo/gradientHeadDemo"
import WhatsIncludedSection from "@/demo/WhatIncluded"
import dash from "@/components/blocks/Dashboard.png"
import prime from '@/images/prime.png'
import {Bolt,CopyPlus,Layers2,Files} from 'lucide-react'
import { IntegrationsNetwork } from "@/components/blocks/IntegrationsNetwork";
import {ComprehensiveInsights} from "@/components/blocks/ComprehensiveInsights";
import {RbacHero} from "@/components/blocks/RbacHero";
import {RbacFeaturesPage} from "@/components/blocks/RbacFeaturesPage";
import {OtherAgents} from "@/components/blocks/OtherAgents";


export const PrimeHrPage=()=>{ 
    return(
        <div className="relative bg-white">
        <Navbar></Navbar>
        {/* <HeroParallaxDemo></HeroParallaxDemo> */}
              <HeroAgent></HeroAgent>
        <FeaturesSectionWithHoverEffectsDemo></FeaturesSectionWithHoverEffectsDemo>
        <IntegrationsNetwork></IntegrationsNetwork>
        <ComprehensiveInsights></ComprehensiveInsights>
        <RbacHero></RbacHero>
        <RbacFeaturesPage></RbacFeaturesPage>
        <OtherAgents></OtherAgents>
        {/* <WhatsIncludedSection></WhatsIncludedSection> */}
        <FooterDemo />
        </div>
    )
}