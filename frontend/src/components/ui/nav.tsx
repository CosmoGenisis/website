"use client"
import { Menu, X, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

import { cn } from "@/lib/utils"
import Logo from '@/images/Logo.png'

const menuItems = [
  { name: "Features", href: "/features" },
  { name: "Solutions", href: "/solutions" },
  { name: "Companies", href: "/companies" },
  { name: "Job Seekers", href: "/job-seekers" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Pricing", href: "/pricing" },
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
    <motion.nav
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-black/95 backdrop-blur-xl border-b border-blue-500/20 shadow-lg shadow-blue-500/10"
          : "bg-transparent",
        whiteBg && "bg-white/95 border-b border-gray-200"
      )}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 overflow-hidden">
          {/* Logo Section */}
          <motion.div
            className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
              <div className="relative">
                <img
                  src={Logo}
                  alt="Zordie Logo"
                  className="h-8 w-8 sm:h-10 sm:w-10 transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className={cn(
                "text-lg sm:text-xl font-bold tracking-tight transition-all duration-300",
                whiteBg ? "text-gray-900" : "text-white",
                "group-hover:text-blue-400"
              )}>
                Zordie
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 flex-1 justify-center max-w-2xl">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className={cn(
                    "relative px-2 lg:px-3 xl:px-4 py-2 text-xs lg:text-sm font-medium rounded-lg transition-all duration-300 group whitespace-nowrap",
                    whiteBg
                      ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  )}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-4 flex-shrink-0">
            {/* Desktop Buttons */}
            <div className="hidden sm:flex items-center space-x-1 sm:space-x-2 lg:space-x-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/login"
                  className={cn(
                    "px-2 py-1.5 sm:px-3 sm:py-2 lg:px-4 lg:py-2 text-xs sm:text-sm font-medium rounded-lg border transition-all duration-300 whitespace-nowrap",
                    whiteBg
                      ? "border-gray-300 text-gray-700 hover:bg-gray-50"
                      : "border-blue-500/50 text-white hover:bg-blue-500/10 hover:border-blue-400"
                  )}
                >
                  Login
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/pre-access"
                  className={cn(
                    "px-2 py-1.5 sm:px-3 sm:py-2 lg:px-4 lg:py-2 text-xs sm:text-sm font-medium rounded-lg border transition-all duration-300 whitespace-nowrap",
                    whiteBg
                      ? "border-gray-300 text-gray-700 hover:bg-gray-50"
                      : "border-blue-500/50 text-white hover:bg-blue-500/10 hover:border-blue-400"
                  )}
                >
                  <span className="flex items-center space-x-1">
                    <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 flex-shrink-0" />
                    <span className="hidden sm:inline lg:inline">Get Access</span>
                    <span className="sm:hidden">Go</span>
                  </span>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMobileMenu}
              className={cn(
                "md:hidden p-2 rounded-lg transition-all duration-300",
                whiteBg
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              )}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "md:hidden border-t overflow-hidden",
              whiteBg
                ? "bg-white/95 border-gray-200"
                : "bg-black/95 border-blue-500/20"
            )}
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      "block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300",
                      whiteBg
                        ? "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                        : "text-gray-300 hover:bg-white/10 hover:text-white"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <div className="pt-4 space-y-3">
                <Link
                  to="/login"
                  className={cn(
                    "block w-full px-4 py-3 text-center text-base font-medium rounded-lg border transition-all duration-300",
                    whiteBg
                      ? "border-gray-300 text-gray-700 hover:bg-gray-50"
                      : "border-blue-500/50 text-white hover:bg-blue-500/10"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/pre-access"
                  className="block w-full px-4 py-3 text-center text-base font-medium text-white rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Access
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
