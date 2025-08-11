import React from 'react'
import { Link } from 'react-router-dom'
import dash from '@/components/blocks/Dashboard.png'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AnimatedGroup } from '@/components/ui/animated-group'
import { cn } from '@/lib/utils'
import { InfiniteSlider } from '../ui/infinite-slider'
import { ProgressiveBlur } from '../ui/progressive-blur'
import { MovingBorderDemo } from '@/demo/MovingOrderDemo'
import Navbar from '../ui/nav'
import ScrollAnimationDemo from '../ui/CSD'
import { ArrowRight } from 'lucide-react'
import {AnimatedHeroBackground} from './AnimatedHeroBackground'
import img from '@/images/image6.png'
import img1 from '@/images/Home.png'
import img2 from '@/images/People_8.png'
import img3 from '@/images/People_2.png'
import img4 from '@/images/People_3.png'

// Import framer-motion for scroll animation
import { motion, useScroll, useTransform } from "framer-motion"

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export function HeroSection() {
    // Ref for scroll animation
    const ref = React.useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    // Animate vertical position and scale (width) of dashboard image
    const y = useTransform(scrollYProgress, [0, 1], [120, 0]) // move up as you scroll
    const scaleX = useTransform(scrollYProgress, [0, 1], [0.85, 1.1]) // increase width

    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <section className="p-0 m-0">
                    <div ref={ref} className="relative w-full flex flex-col items-center justify-start p-0 m-0 bg-transparent">
                        {/* Gradient background */}
                        <div
                            className="absolute inset-0 w-full h-full z-0 bg-no-repeat bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${img})`,
                            }}
                        />
                        <div className="mx-auto max-w-5xl px-6 w-full z-10 relative">
                            <div className="sm:mx-auto lg:mr-auto flex flex-col items-center text-center">
                                <div className="mt-24 mb-6">
                                    <span className="inline-block px-6 py-2 rounded-full bg-white/80 text-gray-900 text-lg font-medium shadow border border-gray-200">
                                        Next-Gen Hiring
                                    </span>
                                </div>
                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                >
                                    <h1
                                        className="max-w-4xl text-balance font-black mt-2 mb-2"
                                        style={{
                                            fontSize: '4rem', // ~80px
                                            lineHeight: '1.1',
                                            color: '#18181B', // near black
                                            letterSpacing: '-0.03em',
                                        }}
                                    >
                                        The First Autonomous<br />Hiring Platform
                                    </h1>
                                    <p
                                        className="mt-4 max-w-4xl text-pretty"
                                        style={{
                                            fontSize: '1.5rem', // ~24px
                                            color: '#444',
                                            fontWeight: 400,
                                        }}
                                    >
                                        Streamline your entire recruitment workflow—from job posting to final hire—with advanced AI-driven precision.
                                    </p>
                                    <div className="flex items-center gap-4 justify-center mt-10">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="rounded-full px-8 py-4 text-lg font-semibold bg-black text-white hover:bg-gray-900 transition"
                                        >
                                            <Link to="#">
                                                <span className="text-nowrap">Start Free Trial</span>
                                                <ArrowRight className="ml-2 h-5 w-5" />
                                            </Link>
                                        </Button>
                                        <Button
                                            asChild
                                            size="lg"
                                            variant="outline"
                                            className="rounded-full px-8 py-4 text-lg font-semibold bg-white text-black border border-gray-200 hover:bg-gray-100 transition"
                                        >
                                            <Link to="#">
                                                <span className="text-nowrap">Get Early Access</span>
                                            </Link>
                                        </Button>
                                    </div>
                                    {/* Trusted by avatars and text */}
                                    <div className="flex items-center justify-center mt-10">
                                        <div className="flex -space-x-4">
                                            <img src={img2} alt="avatar" className="w-12 h-12 rounded-full border-2 border-white" />
                                            <img src={img3} alt="avatar" className="w-12 h-12 rounded-full border-2 border-white" />
                                            <img src={img4} alt="avatar" className="w-12 h-12 rounded-full border-2 border-white" />
                                        </div>
                                        <span className="ml-4 text-lg text-gray-600 font-medium">Trusted already by 10k+</span>
                                    </div>
                                </AnimatedGroup>
                            </div>
                        </div>
                        {/* Animated dashboard image */}
                        <motion.div
                            style={{
                                y,
                                scaleX,
                            }}
                            className="w-full flex justify-center mt-36 overflow-visible"
                        >
                            <img
                                src={img1}
                                alt="Hero"
                                className="w-full max-w-5xl h-full object-cover rounded-2xl shadow-xl"
                                draggable={false}
                                style={{ objectPosition: 'top' }}
                            />
                        </motion.div>
                    </div>
                </section>
            </main>
        </>
    )
}

const menuItems = [
    { name: 'Features', href: '#link' },
    { name: 'Solution', href: '#link' },
    { name: 'Pricing', href: '#link' },
    { name: 'About', href: '#link' },
    { name: 'For Companies', href: '#link' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)

    // Use framer-motion's useScroll for header background change
    const { scrollYProgress } = useScroll()

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.05)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    return (
        <header>
            <Navbar></Navbar>
        </header>
    )
}

{/*const LogoCloud = () => {
    return (
        <section className="pt-8 pb-12 sm:pb-16 md:pb-20 bg-[#fce9db] mt-0">
            <div className="group relative m-auto max-w-6xl px-4 sm:px-6">
                <div className="flex flex-col items-center md:flex-row mt-4">
                    <div className="relative py-2 sm:py-3 w-full md:w-[calc(100%-11rem)]]">
                        <InfiniteSlider
                            durationOnHover={20}
                            duration={40}
                            gap={112}>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                    alt="Nvidia Logo"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/column.svg"
                                    alt="Column Logo"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/github.svg"
                                    alt="GitHub Logo"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/nike.svg"
                                    alt="Nike Logo"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                                    alt="Lemon Squeezy Logo"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/laravel.svg"
                                    alt="Laravel Logo"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-7 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/lilly.svg"
                                    alt="Lilly Logo"
                                    height="28"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-6 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/openai.svg"
                                    alt="OpenAI Logo"
                                    height="24"
                                    width="auto"
                                />
                            </div>
                        </InfiniteSlider>
                        <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                        <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-20"
                            direction="left"
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-20"
                            direction="right"
                            blurIntensity={1}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}*/}