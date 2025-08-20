import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from '../ui/nav';

interface HeroSectionProps {
  badge: React.ReactNode;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  buttons: Array<{ label: string; href: string; variant?: "primary" | "outline" }>;
  avatars: Array<{ src: string; alt: string }>;
  trustedText?: React.ReactNode;
  backgroundImage: string;
  dashboardImage: string;
}

export function HeroSection({
  badge,
  title,
  subtitle,
  buttons,
  avatars,
  trustedText = "Trusted already by 10k+",
  backgroundImage,
  dashboardImage,
}: HeroSectionProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [120, 0]);
  const scaleX = useTransform(scrollYProgress, [0, 1], [0.85, 1.1]);

  return (
    <>
    <HeroHeader />
    <main className="overflow-hidden">
      <section className="p-0 m-0">
        <div ref={ref} className="relative w-full flex flex-col items-center justify-start p-0 m-0 bg-black min-h-screen py-[8vh]">
          {/* Animated Grid Background */}
          <div className="absolute inset-0 w-full h-full z-0">
            <div className="absolute inset-0 bg-black" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-cyan-900/20" />
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }} />
            </div>
            {/* Floating particles */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </div>
          
          <div className="mx-auto max-w-6xl px-6 w-full z-10 relative">
            <div className="sm:mx-auto lg:mr-auto flex flex-col items-center text-center">
              {/* Modern Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-24 mb-8"
              >
                <span className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium backdrop-blur-sm">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                  {badge}
                </span>
              </motion.div>

              {/* Main Title with Gradient */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl font-black mt-2 mb-6 text-4xl md:text-8xl leading-tight bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent"
              >
                {title}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 max-w-3xl text-xl md:text-2xl text-gray-300 font-light leading-relaxed"
              >
                {subtitle}
              </motion.p>

              {/* Modern Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center gap-6 justify-center mt-12"
              >
                {buttons.map((btn, i) => (
                  <a
                    key={btn.label}
                    href={btn.href}
                    className={`group relative overflow-hidden rounded-full px-10 py-4 text-lg font-semibold transition-all duration-300 ${
                      btn.variant === "outline"
                        ? "bg-transparent text-white border-2 border-blue-500/50 hover:border-blue-400 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/25"
                        : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
                    }`}
                  >
                    <span className="relative z-10">{btn.label}</span>
                    {btn.variant !== "outline" && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    )}
                  </a>
                ))}
              </motion.div>

              {/* Trusted by section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center justify-center mt-16"
              >
                <div className="flex -space-x-4">
                  {avatars.map((a, i) => (
                    <motion.img
                      key={i}
                      src={a.src}
                      alt={a.alt}
                      className="w-14 h-14 rounded-full border-3 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300"
                      whileHover={{ scale: 1.1, zIndex: 10 }}
                    />
                  ))}
                </div>
                <span className="ml-6 text-lg text-gray-400 font-medium">{trustedText}</span>
              </motion.div>
            </div>
          </div>

          {/* Enhanced Dashboard Image */}
          <motion.div
            style={{ y, scaleX }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-full flex justify-center mt-20 md:mt-32 px-4 relative overflow-hidden"
          >
            {/* Glow effect behind dashboard */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-purple-600/20 blur-3xl opacity-50 pointer-events-none" />
            <div className="relative w-full max-w-6xl">
              <img
                src={dashboardImage}
                alt="Dashboard"
                className="w-full h-auto object-contain rounded-2xl lg:rounded-3xl shadow-2xl border border-blue-500/20 hover:border-blue-400/30 transition-all duration-500"
                draggable={false}
              />
              {/* Overlay gradient for better integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl lg:rounded-3xl pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
    </>
  );
}

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