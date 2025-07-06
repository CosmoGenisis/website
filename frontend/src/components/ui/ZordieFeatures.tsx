"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Zap, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion";
import { Marquee } from "@/components/ui/marqueeText";
import dash from '@/assets/Dashboard-1.png'
import slack from "@/images/slack.png";
import zoom from "@/images/zoom.png";
import teams from "@/images/teams.png";
import jira from "@/images/jira.png";
import github from "@/images/github.png";
import notion from "@/images/notion.png";
import figma from "@/images/figma.png";
import drive from "@/images/drive.png";
import asana from "@/images/asana.png";
import trello from "@/images/trello.png";
import airtable from "@/images/airtable.png";
import dropbox from "@/images/dropbox.png";
import discord from "@/images/discord.png";

type Feature = {
  id: number;
  title: string;
  description: string;
};
const features: Feature[] = [
  {
    id: 1,
    title: "All-in-One Dashboard",
    description:
      "Access and manage all HR tasks — from Hiring to performance tracking to payroll — through a single, intuitive interface.",
  },
  {
    id: 2,
    title: "Smart Hiring System",
    description:
      "Automate the full hiring workflow from JD generation to onboarding with just one-click execution and AI orchestration and Verify GitHub projects, certifications (Coursera, NPTEL, etc.), and portfolios using intelligent crawling and authenticity checks.",
  },
  {
    id: 3,
    title: "Agents That Automate Everything",
    description:
      "Every function is handled by specialized AI agents (Optimus, Maxi, Onix) that evolve and adapt — delivering scalable, autonomous HR ops.",
  },
  {
    id: 4,
    title: "Compliance Made Easy",
    description:
      "Ensure compliance with local and global labor laws through built-in compliance checks and reporting tools."
    }
]



export default function ZordieFeatures() {
  interface AppIcon {
    src: string;
    alt: string;
  }
  const appsRow1: AppIcon[] = [
    { src: slack, alt: "Slack" },
    { src: zoom, alt: "Zoom" },
    { src: teams, alt: "Teams" },
    { src: jira, alt: "Jira" },
    { src: github, alt: "GitHub" },
  ];
  const appsRow2: AppIcon[] = [
    { src: notion, alt: "Notion" },
    { src: figma, alt: "Figma" },
    { src: drive, alt: "Drive" },
    { src: asana, alt: "Asana" },
    { src: trello, alt: "Trello" },
  ];
  const appsRow3: AppIcon[] = [
    { src: airtable, alt: "Airtable" },
    { src: dropbox, alt: "Dropbox" },
    { src: discord, alt: "Discord" },
    { src: drive, alt: "Drive" },
    { src: zoom, alt: "Zoom" },
  ];

  const [expandedItem, setExpandedItem] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setExpandedItem(expandedItem === id ? null : id)
  }
  const MAX_SCORE = 400;
    const COMP1_SCORE = 220;
    const COMP2_SCORE = 140;
  
    const [score, setScore] = useState(0);
    const [comp1, setComp1] = useState(0);
    const [comp2, setComp2] = useState(0);
  
  
    useEffect(() => {
        let raf: number;
        const animate = () => {
          setScore(prev => (prev < MAX_SCORE ? prev + 8 : MAX_SCORE));
          setComp1(prev => (prev < COMP1_SCORE ? prev + 5 : COMP1_SCORE));
          setComp2(prev => (prev < COMP2_SCORE ? prev + 3 : COMP2_SCORE));
          if (
            score < MAX_SCORE ||
            comp1 < COMP1_SCORE ||
            comp2 < COMP2_SCORE
          ) {
            raf = requestAnimationFrame(animate);
          }
        };
        animate();
        return () => cancelAnimationFrame(raf);
        // eslint-disable-next-line
      }, []);

function AnimatedTextCarousel({ messages }: { messages: string[] }) {
  const [index, setIndex] = useState(0);
  const [typed1, setTyped1] = useState("");
  const [typed2, setTyped2] = useState("");
  const [typing, setTyping] = useState(false);

  // Calculate how many pairs of messages we have
  const pairs: [string, string][] = [];
  for (let i = 0; i < messages.length; i += 2) {
    pairs.push([messages[i], messages[i + 1] || ""]);
  }

  useEffect(() => {
    setTyped1("");
    setTyped2("");
    setTyping(true);
    const msg1 = pairs[index][0] || "";
    const msg2 = pairs[index][1] || "";
    let char1 = 0;
    let char2 = 0;

    const typeBoth = () => {
    let done = true;
    if (char1 <= msg1.length) {
      setTyped1(msg1.slice(0, char1));
      char1++;
      done = false;
    }
    if (char2 <= msg2.length) {
      setTyped2(msg2.slice(0, char2));
      char2++;
      done = false;
    }
    if (!done) {
      setTimeout(typeBoth, 18);
    } else {
      setTyping(false);
    }
  };

  typeBoth();
  // eslint-disable-next-line
}, [index]);

  useEffect(() => {
    if (!typing) {
      const timeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % pairs.length);
      }, 2500);
      return () => clearTimeout(timeout);
    }
  }, [typing, index, pairs.length]);

  return (
    <div className="relative h-60 w-full flex items-center justify-center mb-4">
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -68, opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute w-full flex flex-col gap-4"
        >
          {[0, 1].map((i) =>
    pairs[index][i] ? ( 
      <div
  key={i}
  className="w-full flex items-center justify-center"
  style={{ minHeight: "64px" }} // increased minHeight
>
  <div className="flex-1 max-w-3xl bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg px-10 py-6 flex items-center gap-4">
    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 mr-4">
      <Sparkles className="w-5 h-5 text-white" />
    </span>
    <span className="flex-1 text-sm md:text-base text-white font-normal">
      {i === 0 ? typed1 : typed2}
      {typing &&
        ((i === 0 && typed1.length < (pairs[index][0] || "").length) ||
          (i === 1 &&
            typed1.length === (pairs[index][0] || "").length &&
            typed2.length < (pairs[index][1] || "").length)) && (
          <span className="animate-pulse">|</span>
        )}
    </span>
  </div>
</div>
    ) : null
  )}
</motion.div>
      </AnimatePresence>
    </div>
  );
}

  return (
      <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Why Choose Zordie AI</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering businesses with seamless customer management and actionable insights.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Features */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2 h-2 bg-gray-800 rotate-45"></div>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Features</span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
              Powerful Features to
              <br />
              Simplify HR Management
            </h2>

            <p className="text-lg text-gray-600 mb-12">
              Our platform offers tools designed to streamline HR processes, boost efficiency, and enhance the employee
              experience.
            </p>

            {/* Accordion */}
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature.id} className="border-b border-gray-200">
                  <button
                    onClick={() => toggleItem(feature.id)}
                    className="w-full py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-lg font-medium text-gray-500">[{feature.id}]</span>
                      <span className="text-xl font-semibold text-gray-900">{feature.title}</span>
                    </div>
                  </button>

                  {expandedItem === feature.id && (
                    <div className="pb-6 pl-12 pr-8">
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Video */}
          <div className="flex flex-col items-center justify-center mt-20 lg:mt-0">
        <div className="w-full lg:w-[520px] xl:w-[600px]">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-orange-50 via-blue-50 to-blue-100 border border-orange-200/40 shadow-2xl backdrop-blur-sm ring-1 ring-blue-200/30">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white ring-1 ring-orange-300/50 shadow-orange-500/10">
              <div className="aspect-video">
                <img
                  src={dash}
                  title="Zordie AI Demo Video"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Optional decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-transparent to-blue-500/5 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-12 xl:px-40">
      {/* Superior Performance Card */}
      <div className="lg:col-span-2 rounded-[48px] bg-gradient-to-br from-teal-400 to-blue-800 p-12 flex flex-col justify-between min-h-[520px] shadow-xl relative overflow-hidden">
        <div>
          <div className="text-5xl md:text-4xl font-bold text-white mb-4">Superior Performance</div>
          <div className="text-xl text-white/90 mb-12 max-w-3xl">
            Our platform consistently outperforms competitors in speed and efficiency, thanks to cutting-edge technology and optimized infrastructure.
          </div>
        </div>
        <div className="mt-auto w-full">
          <div className="text-white font-semibold tracking-wide mb-2">PERFORMANCE SCORE: {score}</div>
          <div className="w-full h-2 bg-white/30 rounded-full mb-6">
            <div
              className="h-2 bg-white rounded-full transition-all duration-700"
              style={{ width: `${(score / MAX_SCORE) * 100}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-white/80 font-semibold mb-2">
            <span>COMPETITOR 1</span>
            <span>PERFORMANCE SCORE: {comp1}</span>
          </div>
          <div className="w-full h-2 bg-white/20 rounded-full mb-4">
            <div
              className="h-2 bg-white/60 rounded-full transition-all duration-700"
              style={{ width: `${(comp1 / MAX_SCORE) * 100}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-white/80 font-semibold mb-2">
            <span>COMPETITOR 2</span>
            <span>PERFORMANCE SCORE: {comp2}</span>
          </div>
          <div className="w-full h-2 bg-white/20 rounded-full">
            <div
              className="h-2 bg-white/40 rounded-full transition-all duration-700"
              style={{ width: `${(comp2 / MAX_SCORE) * 100}%` }}
            />
          </div>
        </div>
      </div>
      {/* Lightning Fast Card */}
      <div className="rounded-[48px] bg-gradient-to-br from-teal-400 to-blue-900 p-10 flex flex-col justify-between min-h-[420px] shadow-xl relative overflow-hidden">
        <div>
          <div className="text-5xl md:text-4xl font-bold text-white mb-4">Lightning Fast</div>
          <div className="text-xl text-white/90 mb-12 max-w-xl">
            Loading times optimized for seamless experience for your users.
          </div>
        </div>
        <div className="flex-1 flex items-end justify-center relative">
          {/* Animated concentric circles */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none">
          <span className="absolute animate-pulse-slow rounded-full border-4 border-blue-700/40" style={{ width: 320, height: 320 }} />
          <span className="absolute animate-pulse-slower rounded-full border-4 border-blue-700/30" style={{ width: 240, height: 240 }} />
          <span className="absolute animate-pulse-slowest rounded-full border-4 border-blue-700/20" style={{ width: 160, height: 160 }} />
          <Zap className="w-32 h-32 text-blue-500 z-10" />
        </div>
        </div>
      </div>

    {/* Moved keyframes and animation classes to index.css */}

      {/* Seamless Integration */}
      <div className="rounded-[48px] bg-gradient-to-br from-teal-400 to-blue-900 p-10 flex flex-col justify-between min-h-[420px] shadow-xl relative overflow-hidden">
        <div>
          <div className="text-5xl md:text-5xl font-bold text-white mb-4">Seamless Integration</div>
        <div className="text-xl text-white/90 mb-12 max-w-xl">
          Integrate flair with all your favourite apps in just a few clicks.
        </div>
        </div>
        {/* Place the app icons here */}
        <div className="flex flex-col gap-4 w-full">
        {/* Row 1: left to right */}
        <div className="overflow-hidden w-full">
          <div className="flex gap-8 items-center w-max animate-marquee-ltr">
            {[...appsRow1, ...appsRow1].map((icon, i) => (
              <div key={i} className="bg-white/20 rounded-2xl p-3 flex items-center justify-center w-full">
                <img src={icon.src} alt={icon.alt} className="h-10 w-10" />
              </div>
            ))}
          </div>
        </div>
        {/* Row 2: right to left */}
        <div className="overflow-hidden w-full">
          <div className="flex gap-8 items-center w-max animate-marquee-rtl">
            {[...appsRow2, ...appsRow2].map((icon, i) => (
              <div key={i} className="bg-white/20 rounded-2xl p-3 flex items-center justify-center w-full">
                <img src={icon.src} alt={icon.alt} className="h-10 w-10" />
              </div>
            ))}
          </div>
        </div>
        {/* Row 3: left to right */}
        <div className="overflow-hidden w-full">
          <div className="flex gap-8 items-center w-max animate-marquee-ltr">
            {[...appsRow3, ...appsRow3].map((icon, i) => (
              <div key={i} className="bg-white/20 rounded-2xl p-3 flex items-center justify-center w-full">
                <img src={icon.src} alt={icon.alt} className="h-10 w-10" />
              </div>
            ))}
          </div>
        </div>
        </div>

    {/* Moved keyframes and animation classes to index.css */}
      </div>

      {/* Auto AI Updates */}
      <div className="lg:col-span-2 rounded-[48px] bg-gradient-to-br from-teal-400 to-blue-800 p-12 flex flex-col justify-between min-h-[520px] shadow-xl relative overflow-hidden">
        <div>
         <div className="text-5xl md:text-4xl font-bold text-white mb-4">Auto AI Updates</div>
        <div className="text-xl text-white/90 mb-12 max-w-3xl">
          Our data centres are powered by green energy, reducing our carbon footprint and supporting a cleaner planet.


          {/* Animated Text Carousel */}
          <div className="flex-1 flex items-center justify-center">
          {/* Animated Text Carousel - removed big glass */}
          <AnimatedTextCarousel
            messages={[
              "Feature X usage has spiked by 40% after making it more accessible from the dashboard. Users love the visibility!",
              "Campaign engagement dropped by 25% after increasing the CPC bid. Time to revisit targeting strategy!",
              "User retention has increased by 18% after introducing the new onboarding flow. Keep an eye on activation rates!",
              "Revenue per user has increased by 8% after launching the new premium tier. Upsells are performing well!"
            ]}
          />
        </div>
        </div>
        </div>
        </div>
        {/* Moved keyframes and animation classes to index.css */}
        </div>
    </div>
  )
}