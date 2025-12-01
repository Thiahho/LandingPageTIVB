"use client"

import { useState } from "react"
import { SectionWrapper } from "./section-wrapper"
import { AnimateOnScroll } from "./animate-on-scroll"
import { faqs } from "@/lib/data"

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <SectionWrapper id="faq" className="bg-secondary/30">
      <AnimateOnScroll>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Preguntas frecuentes</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Respuestas a las dudas más comunes antes de empezar un proyecto.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="mx-auto mt-12 max-w-3xl space-y-4">
        {faqs.map((faq, index) => (
          <AnimateOnScroll key={faq.id} delay={index * 50}>
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <button
                onClick={() => toggle(faq.id)}
                className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-secondary/50"
              >
                <span className="font-medium text-card-foreground pr-4">{faq.question}</span>
                <svg
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openId === faq.id ? "max-h-96" : "max-h-0"}`}
              >
                <p className="px-5 pb-5 text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  )
}
