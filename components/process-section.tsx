"use client"

import { useEffect, useRef, useState } from "react"
import { SectionWrapper } from "./section-wrapper"
import { processSteps } from "@/lib/data"

export function ProcessSection() {
  const [lineHeight, setLineHeight] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const containerTop = rect.top
      const containerHeight = rect.height

      // Calcular el progreso del scroll dentro del contenedor
      const scrollProgress = Math.min(Math.max((windowHeight - containerTop) / (windowHeight + containerHeight), 0), 1)

      setLineHeight(scrollProgress * 100)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <SectionWrapper id="proceso">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Proceso de trabajo</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Cómo trabajo para asegurar que tu proyecto se entregue bien y a tiempo.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-2xl" ref={containerRef}>
        <div className="relative">
          <div className="absolute left-5 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />

          <div
            className="absolute left-5 top-0 w-0.5 bg-accent transition-all duration-100 md:left-1/2 md:-translate-x-1/2"
            style={{ height: `${lineHeight}%` }}
          />

          <div className="space-y-12">
            {processSteps.map((step, index) => {
              const stepProgress = ((index + 1) / processSteps.length) * 100
              const isActive = lineHeight >= stepProgress - 15

              return (
                <div
                  key={step.id}
                  className={`relative flex items-start gap-6 md:gap-12 transition-all duration-500 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } ${isActive ? "opacity-100 translate-y-0" : "opacity-40 translate-y-4"}`}
                >
                  <div
                    className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-background text-sm font-bold shadow-md transition-all duration-500 md:absolute md:left-1/2 md:-translate-x-1/2 ${
                      isActive ? "bg-accent text-accent-foreground scale-110" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step.id}
                  </div>

                  <div
                    className={`flex-1 rounded-xl border bg-card p-6 shadow-sm transition-all duration-500 md:w-[calc(50%-3rem)] ${
                      index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    } ${isActive ? "border-accent/50 shadow-md" : "border-border"}`}
                  >
                    <h3 className="text-lg font-semibold text-card-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
