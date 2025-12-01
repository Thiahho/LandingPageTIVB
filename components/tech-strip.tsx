"use client"

import { technologies } from "@/lib/data"

export function TechStrip() {
  const duplicatedTechs = [...technologies, ...technologies]

  return (
    <section id="tecnologias" className="border-y border-border bg-secondary/50 py-8 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-medium text-muted-foreground text-center mb-6">
          Stack que uso para construir soluciones robustas:
        </p>
      </div>

      <div className="group relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-secondary/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-secondary/50 to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee hover:pause">
          {duplicatedTechs.map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="mx-3 whitespace-nowrap rounded-full bg-background px-5 py-2 text-sm font-medium text-foreground border border-border transition-all hover:border-accent hover:shadow-md hover:scale-105 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
