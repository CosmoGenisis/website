"use client"

import { useState } from "react"
import { ChevronDown, Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {FeatureCardsShowcase} from "@/components/blocks/FeatureCardsShowcase"
import {CallToAction} from "@/components/blocks/CallToAction"

interface FAQItem {
  id: string
  question: string
  answer: string
}

interface FAQData {
  heading: string
  description: string
  items: FAQItem[]
  supportHeading: string
  supportDescription: string
  supportButtonText: string
  supportButtonUrl: string
}

interface FAQProps {
  data: FAQData
}

export default function FAQ({ data }: FAQProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <div className="relative min-h-screen bg-white w-full overflow-hidden">
      {/* Removed the blurred background elements that might be causing the skin-colored band */}
      {/* Header Section */}
      {/* Support Section */}
      <div className="text-center py-16">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-8">
          <MessageCircle className="h-12 w-12 text-primary" />
        </div>
      <div className="text-center mb-16">
        <h2 className="text-6xl font-bold tracking-tight mb-4">{data.heading}</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{data.description}</p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4 mb-16 max-w-2xl mx-auto">
        {data.items.map((item) => {
          const isOpen = openItems.has(item.id)
          return (
            <div
              key={item.id}
              className="border border-border rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-200"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
              >
                <span className="text-lg font-semibold pr-4">{item.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-muted-foreground transition-transform duration-200 flex-shrink-0",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
              <div
                id={`faq-answer-${item.id}`}
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                )}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      

      {/* Big Horizontal Card with Two Highlighted Cards Inside */}
      {/* Call To Action Section */}
      <div className="flex justify-center items-center mt-12">
        <CallToAction />
      </div>
    </div>
      </div>
      )
    }