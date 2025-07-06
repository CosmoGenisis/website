"use-client"
import { Features } from "@/components/blocks/features-11"
import HeroAgent from "@/components/blocks/heroAgentPHR"
import Navbar from "@/components/ui/nav"
import FooterDemo from "../ui/FooterDemo";
import { GradientHeadingDemo } from "@/demo/gradientHeadDemo"
import {Bolt,CopyPlus,Layers2,Files} from 'lucide-react'
import dash from "@/components/blocks/Dashboard.png"
import optimus from '@/images/optimus.png'
import { Marquee } from "@/components/ui/marqueeText"
export const OptimusPage=()=>{
    return(
        <div className="relative bg-white">
        <Navbar></Navbar>
          <HeroAgent />
                          <Marquee text='OPTIMUS'></Marquee>
        <GradientHeadingDemo></GradientHeadingDemo>
        <Features></Features>
        <FooterDemo />
        </div>
    )
}