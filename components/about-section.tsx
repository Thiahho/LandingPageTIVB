"use client";

import { SectionWrapper } from "./section-wrapper";
import { AnimateOnScroll } from "./animate-on-scroll";
import { AnimatedCounter } from "./animated-counter";

const highlights = [
  { label: "años de experiencia", value: 4, prefix: "+", icon: "clock" },
  {
    label: "demos y sistemas completos",
    value: 10,
    prefix: "+",
    icon: "globe",
  },
  { label: "clientes satisfechos", value: 4, prefix: "+", icon: "globe" },
  { label: "tecnologías dominadas", value: 10, prefix: "+", icon: "chat" },
];

export function AboutSection() {
  return (
    <SectionWrapper id="sobre-mi" className="bg-secondary/30">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Content */}
        <AnimateOnScroll>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Sobre mí
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Soy desarrollador full stack especializado en e-commerce y
                sistemas de gestión. Me apasiona construir soluciones que
                realmente funcionen para negocios reales.
              </p>
              <p>
                Trabajo end-to-end: desde el diseño de la arquitectura hasta el
                deploy en producción, pasando por backend, frontend y base de
                datos. Mi objetivo es que tengas un sistema que puedas usar
                desde el día uno.
              </p>
              <p>
                Me gusta mantener comunicación directa con mis clientes y
                entregar de forma iterativa para que puedas ver el avance y dar
                feedback en cada etapa.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        <div className="flex items-center">
          <div className="grid w-full grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <AnimateOnScroll key={item.label} delay={index * 100}>
                <div className="group rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-accent/50 hover:shadow-lg hover:-translate-y-1">
                  <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent transition-transform group-hover:scale-110">
                    {item.icon === "clock" && (
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    )}
                    {item.icon === "check" && (
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    )}
                    {item.icon === "globe" && (
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    )}
                    {item.icon === "chat" && (
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    )}
                  </div>
                  <p className="text-3xl font-bold text-card-foreground">
                    <AnimatedCounter end={item.value} prefix={item.prefix} />
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.label}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
