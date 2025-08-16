"use client"
import FooterDemo from '../ui/FooterDemo';
import { Footerdemo } from '@/demo/fs'
import {PricingSimpleIcon} from '../blocks/pricingSimpleIcon'
import { motion } from 'framer-motion';
import Navbar from '../ui/nav';





export const PricingPage=()=>{
    return(
        <div className="relative bg-white min-h-screen">
            <Navbar />
            <PricingSimpleIcon />
            <FooterDemo />
        </div>
    )
}