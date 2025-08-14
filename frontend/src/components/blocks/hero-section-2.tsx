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
        <div ref={ref} className="relative w-full flex flex-col items-center justify-start p-0 m-0 bg-transparent">
          {/* Responsive Gradient/Background */}
          <div
            className="absolute inset-0 w-full h-full z-0 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="mx-auto max-w-5xl px-6 w-full z-10 relative">
            <div className="sm:mx-auto lg:mr-auto flex flex-col items-center text-center">
              <div className="mt-24 mb-6">
                <span className="inline-block px-6 py-2 rounded-full bg-white/80 text-gray-900 text-lg font-medium shadow border border-gray-200">
                  {badge}
                </span>
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="max-w-4xl font-black mt-2 mb-2 text-3xl md:text-6xl leading-tight text-gray-900"
              >
                {title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-4 max-w-3xl text-lg md:text-2xl text-gray-700 font-normal"
              >
                {subtitle}
              </motion.p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mt-10">
                {buttons.map((btn, i) => (
                  <a
                    key={btn.label}
                    href={btn.href}
                    className={`rounded-full px-8 py-4 text-lg font-semibold transition ${
                      btn.variant === "outline"
                        ? "bg-white text-black border border-gray-200 hover:bg-gray-100"
                        : "bg-black text-white hover:bg-gray-900"
                    }`}
                  >
                    {btn.label}
                  </a>
                ))}
              </div>
              {/* Trusted by avatars and text */}
              <div className="flex items-center justify-center mt-10">
                <div className="flex -space-x-4">
                  {avatars.map((a, i) => (
                    <img
                      key={i}
                      src={a.src}
                      alt={a.alt}
                      className="w-12 h-12 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <span className="ml-4 text-lg text-gray-600 font-medium">{trustedText}</span>
              </div>
            </div>
          </div>
          {/* Animated dashboard image */}
          <motion.div
            style={{ y, scaleX }}
            className="w-full flex justify-center mt-24 md:mt-36 overflow-visible"
          >
            <img
              src={dashboardImage}
              alt="Dashboard"
              className="w-full max-w-5xl h-full object-cover rounded-2xl shadow-xl"
              draggable={false}
              style={{ objectPosition: "top" }}
            />
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