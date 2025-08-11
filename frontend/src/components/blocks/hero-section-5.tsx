import React from "react";
import { useScroll } from "framer-motion"; // Add this import
import Navbar from '../ui/nav' // Adjust path as needed
import {CompanyTabsShowcase} from '../blocks/CompanyTabsShowcase'

export function HeroSection() {
  return (
    <>
      <HeroHeader />
      <section className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-6xl md:text-7xl font-bold text-black text-center mb-8">
          Your AI Hiring Partner<br />From Start To Finish
        </h1>
        <p className="text-2xl text-gray-500 text-center mb-10">
          Hire Smarter, Faster, and at Scale with Zero Manual Effort
        </p>
        <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-300 to-green-200 text-black text-xl font-medium shadow hover:bg-gradient-to-r hover:from-blue-400 hover:to-green-300 transition">
          Get Started
        </button>
      </section>
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

  const { scrollYProgress } = useScroll()

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setScrolled(latest > 0.05)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <header>
      <Navbar menuItems={menuItems} />
    </header>
  )
}