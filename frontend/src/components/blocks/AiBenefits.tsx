"use client"

import {
  Zap,
  RefreshCw,
  Clock,
  DollarSign,
  TrendingUp,
  BarChart3,
  Star,
  Target,
  ZapIcon,
  Users,
  Settings,
  Workflow,
  UserCheck,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Hourglass, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

import type { Variants, Transition } from "framer-motion";

const cardInitial = { opacity: 0, y: 40 };
function getCardAnimate(i: number) {
  return {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      type: "spring" as const
    } satisfies Transition
  };
}

type BenefitCard = {
  icon: React.ElementType;
  title: string;
  description: string;
};
const benefitCards: BenefitCard[] = [
  {
    icon: Zap,
    title: "Increased Productivity",
    description: "Gain actionable insights with AI-driven analytics to improve decision-making and strategy.",
  },
  {
    icon: RefreshCw,
    title: "Better Customer Experience",
    description: "Personalized AI interactions improve response times, customer engagement, and overall satisfaction.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "AI-powered systems operate around the clock, ensuring seamless support and execution without downtime.",
  },
  {
    icon: DollarSign,
    title: "Cost Reduction",
    description:
      "AI automation minimizes manual work, cuts operational costs, and optimizes resource allocation for better profitability.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Insights",
    description:
      "Leverage AI to analyze vast data sets, identify trends, and make smarter, faster, and more accurate business decisions.",
  },
  {
    icon: BarChart3,
    title: "Scalability & Growth",
    description:
      "AI adapts to your business needs, allowing you to scale efficiently without increasing workload or costs.",
  },
]

type MarqueeFeature = {
  icon: React.ElementType;
  text: string;
};
const marqueeFeatures: MarqueeFeature[] = [
  { icon: Target, text: "Resource Allocation" },
  { icon: ZapIcon, text: "AI-Powered Insight" }, 
  { icon: Settings, text: "API Integration" },
  { icon: BarChart3, text: "Performance" },
  { icon: Workflow, text: "Automated Workflows" },
  { icon: Users, text: "Complete End-to-End HR Automation" },
  { icon: UserCheck, text: "360° Candidate" },
]

export default function AIBenefitsLanding() {
  return (
    <div className="min-h-screen p-6 md:p-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star className="w-5 h-5 text-gray-800" />
            <span className="text-gray-800 font-medium">Benefits</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            The Key Benefits of AI for
            <br />
            Your Business Growth
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover how AI automation enhances efficiency, reduces costs, and drives business growth with smarter,
            faster processes.
          </p>
        </div>

        {/* Teamwork Excellence */}
        <div className="inline-block bg-purple-100 rounded-xl px-6 py-4 mt-12 mb-4">
          <h1 className="text-xl font-bold text-purple-700 mb-1">
            Teamwork Excellence
          </h1>
        </div>
        {/* New heading below Teamwork Excellence */}
        <div className="mt-2 mb-8 flex flex-col md:flex-row md:items-start md:justify-between text-left">
          <div>
            <div className="text-6xl font-bold text-black leading-tight">Automate</div>
            <div className="text-6xl font-bold text-black leading-tight">Workflows</div>
            <div className="text-gray-500 text-xl mt-16 max-w-xl">
              Collaborate on tasks, share files, and provide feedback directly on the platform. Keep communication centralized and clear.
            </div>
            {/* Two rectangle boxes below the description */}
            <div className="flex gap-4 mt-6">
              <motion.div
                className="bg-purple-100 text-white rounded-xl px-6 py-4 text-base font-bold shadow-md min-w-[180px]"
                initial={cardInitial}
                whileInView={getCardAnimate(0)}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="mt-4 mb-6 flex-shrink-0"> 
                  <img
                    src="https://framerusercontent.com/images/2IQjMgLxBhP6eA9DG2v9RNyUin0.svg"
                    alt="Automate Workflows"
                    className="w-16 h-16 rounded-2xl shadow-lg object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="text-xl font-bold text-black leading-tight">Smooth</div>
                <div className="text-xl font-bold text-black leading-tight">Integration</div>
                <div className="text-gray-500 text-lg mt-4 max-w-sm">
                  Connect tools for
                  <div className="text-gray-500 text-lg">
                    unified workflow
                  </div>
                  <div className="text-gray-500 text-lg">
                    efficiency.
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="bg-orange-100 text-white rounded-xl px-6 py-4 text-base font-bold shadow-md min-w-[180px]"
                initial={cardInitial}
                whileInView={getCardAnimate(1)}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="mt-4 mb-6 flex-shrink-0">
                  <img
                    src="https://framerusercontent.com/images/yisTuY1N10wALExWkI2yIFX0A.svg"
                    alt="Automate Workflows"
                    className="w-16 h-16 rounded-2xl shadow-lg object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="text-xl font-bold text-black leading-tight">Time Tracking</div>
                <div className="text-gray-500 text-lg mt-4 max-w-sm">
                  User-friendly 
                  <div className="text-gray-500 text-lg">
                    interface boosts 
                  </div>
                  <div className="text-gray-500 text-lg">
                    team productivity.
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div
            className="mt-6 md:mt-16 md:ml-12 flex-shrink-0"
            initial={cardInitial}
            whileInView={getCardAnimate(2)}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img
              src="https://framerusercontent.com/images/gIUJJJ91NQ9m1iGi56S1RtzAlS4.jpg?scale-down-to=1024"
              alt="Automate Workflows"
              className="w-[520px] h-auto rounded-2xl shadow-lg object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Integration, Work Hour Analysis, Generate Section */}
<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
  {/* Integration Card */}
  <motion.div
    className="bg-white rounded-3xl p-8 shadow border border-gray-100 flex flex-col items-start"
    initial={cardInitial}
    whileInView={getCardAnimate(0)}
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="text-2xl font-semibold mb-6">Integration</div>
    <div className="space-y-4 w-full">
      {/* ...integration rows... */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="https://cdn.worldvectorlogo.com/logos/framer.svg" alt="Framer" className="w-7 h-7" />
          <span className="text-lg">Framer</span>
        </div>
        <span className="w-8 h-5 rounded-full bg-gray-200 flex items-center">
          <span className="w-4 h-4 bg-white rounded-full ml-1 border border-gray-300"></span>
        </span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="https://framerusercontent.com/images/GM11WdhRbS2DxfQ9EeblmqK5io.svg" alt="Blogger" className="w-7 h-7" />
            <span className="text-lg">Blogger</span>
        </div>
            <span className="w-8 h-5 rounded-full bg-green-200 flex items-center justify-end">
              <span className="w-4 h-4 bg-green-500 rounded-full mr-1"></span>
                </span>
      </div>

      <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src="https://framerusercontent.com/images/2FfwF2Bd1FAHaIV8DEj2kNqGMc.svg" alt="Mail Chimp" className="w-7 h-7" />
                  <span className="text-lg">Mail Chimp</span>
                </div>
                <span className="w-8 h-5 rounded-full bg-green-200 flex items-center justify-end">
                  <span className="w-4 h-4 bg-green-500 rounded-full mr-1"></span>
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src="https://framerusercontent.com/images/hU724pkSz3wZvsYbct1bkR6lBg.svg" alt="Trello" className="w-7 h-7" />
                  <span className="text-lg">Trello</span>
                </div>
                <span className="w-8 h-5 rounded-full bg-gray-200 flex items-center">
                  <span className="w-4 h-4 bg-white rounded-full ml-1 border border-gray-300"></span>
                </span>
              </div>

      {/* ...other integration rows... */}
              </div>
              {/* Description below the card */}
              <div className="mt-16">
                <div className="text-3xl font-semibold mb-2">Third-party integrations</div>
                <div className="text-gray-500 text-base mb-2 mt-4 text-xl">
                  Connect with various apps to consolidate data and streamline workflows
                </div>
              </div>
            </motion.div>
            {/* Work Hour Analysis Card */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow border border-gray-100 flex flex-col items-start"
              initial={cardInitial}
              whileInView={getCardAnimate(1)}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex items-center justify-between w-full mb-4">
                <div className="flex items-center gap-2">
                  <span className="inline-block bg-gray-100 rounded-lg p-1">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="3" stroke="#222" strokeWidth="1.5"/><path d="M3 9h18" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </span>
                  <span className="text-lg font-semibold">Work Hour Analysis</span>
                </div>
                <button className="border border-gray-300 rounded-lg px-3 py-1 text-sm font-medium hover:bg-gray-50 transition">Details</button>
              </div>
              <div className="mt-8 mb-4 flex-shrink-0">
                <img
                  src="https://framerusercontent.com/images/kVxLX8LDZCyyL5dwQWxKw9DFNY.svg"
                  alt="Automate Workflows"
                  className="w-[520px] h-auto rounded-2xl shadow-lg object-cover"
                  loading="lazy"
                />
              </div>
              {/* Description below the card */}
              <div className="mt-8">
                <div className="text-3xl font-semibold mb-2">Real-Time Data</div>
                <div className="text-gray-500 text-base mb-2 mt-4 text-xl">
                  Access dynamic dashboards that show live data insights
                </div>
              </div>
            </motion.div>
            {/* Generate Card */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow border border-gray-100 flex flex-col items-center justify-center min-h-[220px]"
              initial={cardInitial}
              whileInView={getCardAnimate(2)}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="w-full h-36 flex items-center justify-center relative">
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-0 pointer-events-none">
                  {[...Array(6*4)].map((_, i) => (
                    <div key={i} className="border border-gray-100" />
                  ))}
                </div>
                <button className="relative z-10 bg-white border border-gray-200 rounded-full px-8 py-3 text-lg font-semibold flex items-center gap-2 shadow hover:bg-gray-50 transition">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20" stroke="#4f8cff" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="12" r="10" stroke="#4f8cff" strokeWidth="2"/></svg>
                  Generate
                </button>
              </div>
              {/* Description below the card */}
              <div className="mt-28 text-center">
                <div className="text-3xl font-semibold mb-2">Automated Reporting</div>
                <div className="text-gray-500 text-base mb-2 mt-4 text-xl">
                  Generate reports automatically, saving time and ensuring consistent data
                </div>
              </div>
            </motion.div>
          </div>

        {/* Performance Analysis system section */}
        <div className="mt-8 w-full rounded-2xl p-8 flex flex-col md:flex-row items-center md:items-stretch gap-8 bg-gradient-to-r from-teal-200 via-blue-200 to-blue-300">
          {/* Chart Placeholder */}
          <div className="mt-6 mb-4 flex-shrink-0">
              <img
                src="https://framerusercontent.com/images/qrPzrzKgD7wd3ty7GpeQ8i313s.png?scale-down-to=1024"
                alt="Automate Workflows"
                className="w-[420px] h-auto rounded-2xl shadow-lg object-cover"
                loading="lazy"
              />
            </div>
          {/* Text and stats */}
          <div className="flex-1 flex flex-col justify-center items-center md:items-start">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">Performance<br />Analysis system</div>
            <div className="text-lg text-white/80 mb-8">Detailed team performace analysis</div>
            <button className="bg-white text-black font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition mb-8 md:mb-0">
              Learn More
            </button>
          </div>
          {/* Stats box */}
          <div className="bg-blue-200/60 rounded-xl p-8 flex flex-col justify-between min-w-[260px] max-w-[320px]">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-4xl font-bold text-indigo-900">99%</div>
                <div className="text-gray-700 mt-1">Client satisfaction</div>
              </div>
              <div>
                <svg width="100" height="40" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="12" fill="#a5b4fc"/>
                  <path d="M7 17v-1a3 3 0 0 1 6 0v1" stroke="#3730a3" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="10" cy="10" r="2" stroke="#3730a3" strokeWidth="1.5"/>
                  <circle cx="14" cy="10" r="2" stroke="#3730a3" strokeWidth="1.5"/>
                </svg>
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-900 mb-1">1.2M</div>
              <div className="text-gray-700">Play Store download</div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-32">
          {/* Header Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                How Our <span className="text-blue-600">Tool Enhances</span>
                <br />
                Team <span className="text-gray-700">Productivity</span>
              </h1>
            </div>
            <div className="flex items-center">
              <p className="text-lg text-gray-600 leading-relaxed">
                Boost your team's efficiency and collaboration effortlessly with our intuitive and powerful platform,
                designed for success.
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-3 gap-8 justify-items-center">
            {[
              {
                img: "https://framerusercontent.com/images/jJ74tYvFz8uCvLrQT3gH6Lkm5G8.png",
                title: "Manage Projects",
                desc: "Organize tasks, establish deadlines, and assign responsibilities to ensure everyone is on the same page."
              },
              {
                img: "https://framerusercontent.com/images/IYIJmUicy668ZHCB8Ot6T3ytcU.png",
                title: "Collaborate Instantly",
                desc: "Work together in real-time, share updates instantly, and communicate seamlessly across departments."
              },
              {
                img: "https://framerusercontent.com/images/fWtVyxIqdx14eVmo7xyCGQpb4os.png",
                title: "Analyze Performance",
                desc: "Track progress, identify bottlenecks, and make data-driven decisions to improve overall team performance."
              }
            ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={cardInitial}
            whileInView={getCardAnimate(i)}
            viewport={{ once: true, amount: 0.2 }}
            className="p-6 bg-white border-2 border-black rounded-3xl flex flex-col justify-between"
          >
                <CardContent className="p-0 bg-white border-2 border-black rounded-3xl flex flex-col justify-between">
                  <div className="mb-6">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-50 object-cover rounded-2xl"
                    />
                  </div>
                </CardContent>
                <div className="text-center">
                  <h2 className="text-2xl font-semibold mb-3">
                    {item.title.split(" ").map((word, idx) =>
                      word === "Projects" || word === "Instantly" || word === "Performance" ? (
                        <span key={idx} className="text-blue-600">{word} </span>
                      ) : (
                        word + " "
                      )
                    )}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Content Scheduling and Real Time Analysis */}
          <div className="grid grid-cols-2 gap-8 justify-items-center mt-20">
            {/* Real Time Analysis Card */}
            <motion.div
              initial={cardInitial}
              whileInView={getCardAnimate(0)}
              viewport={{ once: true, amount: 0.2 }}
              className="p-6 bg-white border-2 border-black rounded-3xl flex flex-col justify-between w-full relative"
            >
              <div className="absolute top-4 right-4">
                <div className="bg-gray-200 rounded-full p-2 flex items-center justify-center">
                  <Hourglass size={28} className="text-orange-500" />
                </div>
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-semibold mb-3">
                  Real Time <span className="text-blue-600">Analytics</span>
                </h2>
                <p className="text-grey-600 text-lg leading-relaxed">
                  Monitor result performance with real time insights.
                </p>
              </div>
              <CardContent className="h-80 p-0 flex items end">
                <div className="mt-6 rounded-2xl p-4 flex items-end h-full">
                  <img
                    src="https://framerusercontent.com/images/xJ3fjboUJLVolfGqf752ILN4.png"
                    alt="Project management interface showing task lists, progress bars, and team collaboration tools"
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                </div>
              </CardContent>
            </motion.div>
            {/* Content Scheduling Card */}
            <motion.div
              initial={cardInitial}
              whileInView={getCardAnimate(1)}
              viewport={{ once: true, amount: 0.2 }}
              className="col-span-1 p-6 bg-white border-2 border-black rounded-3xl flex flex-col justify-between w-full relative"
            >
              <div className="absolute top-4 right-4">
                <div className="bg-gray-200 rounded-full p-2 flex items-center justify-center">
                  <Calendar size={28} className="text-orange-500" />
                </div>
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-semibold mb-3">
                  Content <span className="text-blue-600">Scheduling</span>
                </h2>
                <p className="text-grey-600 text-lg leading-relaxed">
                  Plan and schedule content across all platforms.
                </p>
              </div>
              <CardContent className="h-80 p-0 flex items end">
                <div className="mt-6 rounded-2xl p-4 flex items-end h-full">
                  <img
                    src="https://framerusercontent.com/images/jrY5DWrX2645mgGTeVIjpXjVIU.png"
                    alt="Project management interface showing task lists, progress bars, and team collaboration tools"
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                </div>
              </CardContent>
            </motion.div>
          </div>

          {/* Streamline Communication Card */}
          <div className="col-span-3 gap-8 justify-items-center mt-20 mb-32">
            <motion.div
              initial={cardInitial}
              whileInView={getCardAnimate(0)}
              viewport={{ once: true, amount: 0.2 }}
              className="p-6 bg-white border-2 border-black rounded-3xl flex flex-col justify-between w-full relative"
            >
              <div className="absolute top-4 right-4">
                <div className="bg-gray-200 rounded-full p-2 flex items-center justify-center">
                  <MessageCircle size={28} className="text-orange-500" />
                </div>
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-semibold mb-3">
                  Streamline <span className="text-blue-600">Comunication</span>
                </h2>
                <p className="text-grey-600 text-lg leading-relaxed">
                  Manage conversations for smooth coordination.
                </p>
              </div>
              <CardContent className="h-90 p-0 flex items end">
                <div className="mt-6 rounded-2xl p-4 flex items-end h-full w-full">
                  <img
                    src="https://framerusercontent.com/images/jg8cLHHFSZlOGSdg3rGKij2x6s.png"
                    alt="Project management interface showing task lists, progress bars, and team collaboration tools"
                    className="w-full h-90 object-cover rounded-2xl"
                  />
                </div>
              </CardContent>
            </motion.div>
          </div>
        </div>
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star className="w-5 h-5 text-gray-800" />
            <span className="text-gray-800 font-medium">Benefits</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your Business 
            <br />
            with Scalable AI Automation
          </h1>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 mt-12">
          {benefitCards.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={cardInitial}
                whileInView={getCardAnimate(index)}
                viewport={{ once: true, amount: 0.2 }}
              >
                <IconComponent className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-blue-100 leading-relaxed">{benefit.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Marquee Card */}
        <motion.div
          className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-8 md:p-12 overflow-hidden relative"
          initial={cardInitial}
          whileInView={getCardAnimate(0)}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Ease your life with powerful features using Zordie AI
            </h2>
          </div>
          {/* Marquee Container */}
          <div className="relative">
            {/* First Row */}
            <div className="flex animate-marquee mb-6">
              {[...marqueeFeatures, ...marqueeFeatures].map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mx-3 whitespace-nowrap"
                  >
                    <div className="rounded-full bg-white-400  p-2 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-medium">{feature.text}</span>
                  </div>
                )
              })}
            </div>
            {/* Second Row (Reverse Direction) */}
            <div className="flex animate-marquee-reverse">
              {[...marqueeFeatures.slice().reverse(), ...marqueeFeatures.slice().reverse()].map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mx-3 whitespace-nowrap"
                  >
                    <div className="rounded-full bg-whitee-400  p-2 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-medium">{feature.text}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
      {/* Moved keyframes and animation classes to index.css */}
    </div>
  )
}