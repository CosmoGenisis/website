import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useState, useEffect } from "react"

const AnimatedCounter = ({ value, duration = 1000 }: { value: string; duration?: number }) => {
  const [displayValue, setDisplayValue] = useState(value)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (value !== displayValue) {
      setIsAnimating(true)
      const currentNum = Number.parseInt(displayValue.replace(/[^\d]/g, "")) || 0
      const targetNum = Number.parseInt(value.replace(/[^\d]/g, "")) || 0

      if (currentNum !== targetNum && targetNum > 0) {
        const steps = Math.abs(targetNum - currentNum)
        const stepDuration = duration / Math.max(steps, 10)
        const increment = currentNum < targetNum ? 1 : -1

        let current = currentNum
        const timer = setInterval(() => {
          current += increment
          const newValue = value.replace(/\d+/, current.toString())
          setDisplayValue(newValue)
          if (current === targetNum) {
            clearInterval(timer)
            setIsAnimating(false)
          }
        }, stepDuration)
        return () => clearInterval(timer)
      } else {
        setDisplayValue(value)
        setIsAnimating(false)
      }
    }
  }, [value, displayValue, duration])

  return <span className={`transition-all duration-300 ${isAnimating ? "text-blue-600" : ""}`}>{displayValue}</span>
}

export  function PricingSimpleIcon() {
  const [isYearly, setIsYearly] = useState(false)

  const handleGetStarted = (planName: string) => {
    alert(`Starting ${planName} plan signup process`)
  }

  const handleContactUs = () => {
    alert("Opening contact form")
  }

  const handleToggle = (yearly: boolean) => {
    setIsYearly(yearly)
  }

  const plans = [
    {
      name: "Free",
      subtitle: "Trial Users",
      monthlyPrice: "₹0",
      yearlyPrice: "₹0",
      period: "per month",
      description: "Best for exploring Zordie AI before scaling your hiring.",
      bgColor: "bg-orange-100",
      buttonVariant: "outline" as const,
      buttonText: "Early access",
      features: [
        "2 Job Postings",
        "20 AI Resume Screenings with Deep Verification",
        "10 Job Descriptions",
        "Basic Email Support",
      ],
    },
    {
      name: "Startup",
      subtitle: "Small Teams",
      monthlyPrice: "$29",
      yearlyPrice: "$20",
      yearlyOriginalPrice: "$29",
      period: isYearly ? "per month, billed yearly" : "per month",
      description: "Perfect for early-stage companies making their first 5–20 hires.",
      bgColor: "bg-blue-100",
      buttonVariant: "default" as const,
      buttonText: "Early access",
      hasDiscount: isYearly,
      features: [
        "Unlimited Job Postings",
        "10,000 AI Resume Screenings / month",
        "Deep Verification & AI Matching System",
        "Dedicated AI CRM & ATS",
        "200 AI Calls included",
        "5 AI Interviews included",
        "Integrated Job Board",
        "Email + Chat Support",
        "Basic Analytics Dashboard",
      ],
    },
    {
      name: "Growth",
      subtitle: "Growing Companies",
      monthlyPrice: "$79",
      monthlyOriginalPrice: "$99",
      yearlyPrice: "$69",
      yearlyOriginalPrice: "$99",
      period: isYearly ? "per month, billed yearly" : "per month",
      description: "Best for startups and SMEs scaling teams rapidly.",
      bgColor: "bg-green-100",
      buttonVariant: "default" as const,
      buttonText: "Early access",
      hasDiscount: true,
      features: [
        "Unlimited Job Postings",
        "Up to 30,000 AI Resume Screenings / month",
        "Deep Verification & AI Matching included",
        "Dedicated AI CRM & ATS",
        "500 AI Calls included",
        "15 AI Interviews included",
        "Integrated Job Board",
        "Email + Chat Support",
        "Advanced Analytics Dashboard",
      ],
    },
    {
      name: "Business",
      subtitle: "High-volume Hiring",
      monthlyPrice: "$199",
      monthlyOriginalPrice: "$249",
      yearlyPrice: "$159",
      yearlyOriginalPrice: "$249",
      period: isYearly ? "per month, billed yearly" : "per month",
      description: "Ideal for companies hiring 50+ people every month.",
      bgColor: "bg-purple-100",
      buttonVariant: "default" as const,
      buttonText: "Early access",
      hasDiscount: true,
      features: [
        "Unlimited Job Postings",
        "Unlimited AI Resume Screenings",
        "Deep Verification & AI Matching included",
        "Dedicated AI CRM & ATS",
        "1,500 AI Calls included",
        "30 AI Interviews included",
        "Integrated Job Board",
        "Email + Priority Support",
        "Advanced Analytics & Insights",
      ],
    },
    {
      name: "Enterprise",
      subtitle: "Large Organizations",
      monthlyPrice: "Pay Per Use",
      yearlyPrice: "Pay Per Use",
      period: "",
      description: "For enterprises with unpredictable or massive hiring needs.",
      bgColor: "bg-teal-100",
      buttonVariant: "outline" as const,
      buttonText: "Contact us",
      features: [
        "Unlimited Job Postings",
        "Unlimited AI Resume Screenings",
        "Deep Verification & AI Matching",
        "Dedicated AI CRM & ATS",
        "Pay-per-use AI Calls & Interviews",
        "Custom Integrations (HRMS, Slack, Teams)",
        "Dedicated Account Manager",
        "Enterprise-level Security & Compliance",
      ],
    },
  ]

  return (
    <div className="min-h-[100vh] bg-gray-50">
      <main className="max-w-[96vw] mx-auto px-[2vw] py-[16vh]">
        <div className="flex flex-col md:flex-row justify-between items-start mb-[8vh]">
          <div className="max-w-[60vw]">
            <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-gray-900 leading-tight mb-[2vh]">
              Simple pricing based
              <br />
              on your needs
            </h1>
          </div>
          <div className="max-w-[32vw] text-right">
            <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-600">
              Simple, transparent pricing designed for every stage of your hiring needs.
            </p>
          </div>
        </div>

        <div className="flex justify-center mb-[8vh]">
          <div className="bg-white rounded-full p-[0.5vw] shadow-lg border border-gray-200">
            <div className="flex relative">
              <button
                onClick={() => handleToggle(false)}
                className={`px-[4vw] py-[2vh] rounded-full text-sm font-medium transition-all duration-500 transform hover:scale-105 ${
                  !isYearly ? "bg-blue-600 text-white shadow-md" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => handleToggle(true)}
                className={`px-[4vw] py-[2vh] rounded-full text-sm font-medium transition-all duration-500 transform hover:scale-105 relative ${
                  isYearly ? "bg-blue-600 text-white shadow-md" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Yearly Billing
                <span className="absolute -top-[2vh] -right-[2vw] bg-green-500 text-white text-xs px-[1vw] py-[0.5vh] rounded-full animate-pulse shadow-lg">
                  Save up to 38%
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[2vw]">
          {plans.map((plan, index) => {
            const currentPrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice
            const originalPrice = isYearly ? plan.yearlyOriginalPrice : plan.monthlyOriginalPrice

            return (
              <div
                key={plan.name}
                className={`${plan.bgColor} rounded-2xl p-[3vw] relative transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer group border border-white/50 flex flex-col items-center min-w-0`}
                style={{ minHeight: "48vh" }}
              >
                <div className="mb-[3vh] w-full">
                  <h3 className="text-[clamp(1.1rem,2vw,1.4rem)] font-bold text-gray-900 mb-[0.5vh]">{plan.name}</h3>
                  <p className="text-sm text-gray-600 mb-[2vh]">{plan.subtitle}</p>

                  <div className="mb-[1vh]">
                    <span className="text-sm text-gray-600">Starts at</span>
                  </div>

                  <div className="flex items-baseline mb-[2vh]">
                    <span className="text-[clamp(2rem,3vw,2.5rem)] font-bold text-gray-900">
                      <AnimatedCounter value={currentPrice} duration={800} />
                    </span>
                    {originalPrice && originalPrice !== currentPrice && (
                      <span className="text-lg text-gray-500 line-through ml-2">
                        <AnimatedCounter value={originalPrice} duration={600} />
                      </span>
                    )}
                    {plan.period && <span className="text-gray-600 ml-2 text-sm">{plan.period}</span>}
                  </div>

                  <p className="text-gray-700 mb-[4vh] text-sm leading-relaxed">{plan.description}</p>

                  <Button
                    variant={plan.buttonVariant}
                    className="w-full rounded-lg py-[1em] mb-[4vh] bg-white text-gray-900 border border-gray-300 transition-all duration-300 transform hover:scale-105 active:scale-95 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-lg group-hover:shadow-xl font-medium"
                    onClick={() => (plan.buttonText === "Contact us" ? handleContactUs() : handleGetStarted(plan.name))}
                  >
                    {plan.buttonText}
                  </Button>
                </div>

                <div className="space-y-[1vh] w-full">
                  <h4 className="font-semibold text-gray-900 text-sm mb-[1vh]">
                    {plan.name === "Free"
                      ? "Free, forever"
                      : plan.name === "Enterprise"
                        ? "Organization plan features, plus:"
                        : "Plan features:"}
                  </h4>
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start gap-[1vw] transition-all duration-300 hover:translate-x-1"
                    >
                      <div className="w-[1.2em] h-[1.2em] bg-gray-900 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 transition-all duration-300 group-hover:bg-blue-600">
                        <Check className="w-[0.9em] h-[0.9em] text-white" />
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </main>

      <section className="bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 py-[8vh]">
        <div className="max-w-[96vw] mx-auto px-[2vw] text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-[2vw] py-[1vh] mb-[4vh] shadow-lg border border-white/50">
            <span className="text-blue-600 text-sm">✨</span>
            <span className="text-gray-700 font-medium text-sm">AI Recruiter starts at</span>
          </div>

          <div className="mb-[4vh]">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-gray-900 mb-4">Flexible, Risk-Free and 10X Faster!</h2>
            <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-600 max-w-[40vw] mx-auto">
              Based on your hiring needs for each Job posting, you choose the best option.
            </p>
          </div>

          <div className="mb-[4vh]">
            <div className="text-[clamp(2.5rem,6vw,4rem)] font-bold text-gray-900 mb-2">
              ₹3.33
              <span className="text-2xl text-gray-600 font-normal ml-2">per AI Task</span>
            </div>
          </div>

          <div className="max-w-[60vw] mx-auto mb-[6vh]">
            <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-700 leading-relaxed">
              AI Recruiter will do all the work for you and your team. AI Recruiter can screen resumes, invite
              Candidates to apply for your jobs, conduct screening interviews, scheduling interviews, get updated
              resumes, assist in onboarding of candidates and much more.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}