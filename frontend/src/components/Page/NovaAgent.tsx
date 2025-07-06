"use-client"
import { Features } from "@/components/blocks/features-11"
import HeroAgent from "@/components/blocks/heroAgentPHR"
import Navbar from "@/components/ui/nav"
import FooterDemo from '../ui/FooterDemo';
import { GradientHeadingDemo } from "@/demo/gradientHeadDemo"
import { Marquee } from "@/components/ui/marqueeText"
import dash from "@/components/blocks/Dashboard.png"
import {Bolt,CopyPlus,Layers2,Files} from 'lucide-react'
import nova from '@/images/nova.png'

export const NovaPage=()=>{
    return(
        <div className="relative bg-white">
        <Navbar></Navbar>
         <HeroAgent></HeroAgent>
              <Marquee text='NOVA'></Marquee>
        <GradientHeadingDemo></GradientHeadingDemo>
        <Features></Features>
        <FooterDemo />
        </div>
    )
}