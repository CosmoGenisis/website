"use client"
import { Menu, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Logo from '@/images/Logo.png'
import platform from '@/images/Platform.png'
import solutions from '@/images/Solutions.png'
import about from '@/images/about.png'

const menuItems = [
  { name: "Features", href: "/features", icon: platform },
  { name: "Solutions", href: "/solutions", icon: solutions },
  { name: "For Companies", href: "/companies", icon: platform },
  { name: "For Job Seekers", href: "/job-seekers", icon: platform },
  { name: "About", href: "/about", icon: about },
  { name: "Contact", href: "/contact", icon: about },
  {name: "Pricing", href: "/pricing", icon: platform},
]

export default function Navbar({ whiteBg = false }: { whiteBg?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev)
  }

  return (
    <nav
      ref={navRef}
      className={cn(
        "fixed z-50 flex justify-center items-start transition-all duration-300",
        isScrolled
          ? "left-0 right-0 mx-auto rounded-full backdrop-blur-xl pointer-events-auto border-b max-w-[100%]"
          : "left-0 right-0 mx-auto backdrop-blur-none pointer-events-auto",
        whiteBg
          ? "bg-white shadow-md py-[0.3rem] w-full"
          : isScrolled
            ? "bg-white/40 shadow-md py-[0.3rem] w-[90%]"
            : "bg-white/20 w-full",
        "max-w-[100%]"
      )}
    >
      <div
        className={cn(
          "w-full grid grid-cols-12 items-center justify-between transition-all duration-300",
          isScrolled ? "gap-[1%]" : "gap-[2%]" // percentage-based gaps
        )}
      >
        {/* Logo */}
        <div className="flex items-center min-w-0 flex-shrink-0 col-span-6 sm:col-span-4 md:col-span-3 ml-4">
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="Zordie Logo"
              className={cn(
                "transition-all duration-300 w-auto",
                isScrolled ? "h-[2.8rem]" : "h-[4.8rem]", // slightly bigger
                isScrolled ? "w-[2.8rem]" : "w-[5.8rem]"
              )}
            />
            <span
              className={cn(
                "ml-[6%] font-extrabold text-gray-900 transition-all duration-300 tracking-normal",
                isScrolled ? "text-lg" : "text-3xl" // bigger text for better readability
              )}
            >
              Zordie
            </span>
          </Link>
        </div>

        {/* Center Menu */}
        <div className="hidden lg:flex items-center justify-center col-span-6">
          <div className="flex justify-center w-full space-x-[3%]">
            {menuItems.map((item) => (
              <Button
                asChild
                size="sm"
                variant="ghost"
                key={item.name}
                className={cn(
                  "rounded-full font-semibold transition-all duration-300 px-[2%] py-[0.5%]",
                  isScrolled ? "text-sm" : "text-lg"
                )}
              >
                <Link to={item.href} className="truncate">{item.name}</Link>
              </Button>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center justify-end col-span-6 sm:col-span-4 md:col-span-3 mr-[4vh]">
          <div className="hidden sm:flex flex-row items-center space-x-2">
            <Button
              asChild
              size="lg"
              className={cn(
                isScrolled
                  ? "rounded-full font-semibold border-gray-300 px-6 py-2"
                  : "rounded-full font-semibold border-gray-300 px-8 py-3",
                isScrolled ? "text-sm" : "text-xl"
              )}
            >
              <Link to="/login">Login</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className={cn(
                isScrolled
                  ? "rounded-full font-semibold bg-blue-500 text-white px-6 py-2"
                  : "rounded-full font-semibold bg-blue-500 text-white px-8 py-3",
                isScrolled ? "text-sm" : "text-xl"
              )}
            >
              <Link to="/pre-access">Pre Access</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className={cn(
              "inline-flex items-center justify-center rounded-full transition-all duration-300 text-gray-700 hover:bg-white/30 hover:backdrop-blur-md lg:hidden ml-[2%]",
              isScrolled ? "p-[0.4rem]" : "p-[0.6rem]"
            )}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "h-[1.25rem] w-[1.25rem]" : "h-[1.5rem] w-[1.5rem]"} />
            ) : (
              <Menu className={isScrolled ? "h-[1.25rem] w-[1.25rem]" : "h-[1.5rem] w-[1.5rem]"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 right-0 mt-[1%] bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden w-[90%] max-w-[400px] mx-auto"
          >
            <div className="space-y-[2%] px-[5%] pb-[5%] pt-[2%]">
              {menuItems.map((item, index) => (
                <div key={index} className="py-[2%]">
                  <Link
                    to={item.href}
                    className="flex w-full items-center justify-between rounded-md py-[2%] text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                  >
                    <span>{item.name}</span>
                  </Link>
                </div>
              ))}
              <div className="mt-[4%] flex flex-col space-y-[2%]">
                <Button asChild variant="outline" size="sm" className="rounded-md hover:bg-gray-100/80">
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild size="sm" className="rounded-md bg-orange-500 hover:bg-orange-600">
                  <Link to="/pre-access">Pre Access</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
