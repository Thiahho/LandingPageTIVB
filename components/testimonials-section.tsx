"use client"

import { SectionWrapper } from "./section-wrapper"
import { AnimateOnScroll } from "./animate-on-scroll"
import { testimonials } from "@/lib/data"

export function TestimonialsSection() {
  return (
    <SectionWrapper id="testimonios">
      <AnimateOnScroll>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Lo que dicen mis clientes</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Resultados reales de negocios que confiaron en mis soluciones.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <AnimateOnScroll key={testimonial.id} delay={index * 100}>
            <div className="relative flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg">
              {/* Quote icon */}
              <svg className="absolute -top-3 left-6 h-8 w-8 text-accent/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="flex-1 text-muted-foreground italic leading-relaxed pt-4">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-card-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role} · {testimonial.business}
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  )
}
