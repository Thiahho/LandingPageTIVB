"use client";

import { useState } from "react";
import { SectionWrapper } from "./section-wrapper";
import { ProjectCard } from "./project-card";
import { AnimateOnScroll } from "./animate-on-scroll";
import { projects } from "@/lib/data";
import type { ProjectType } from "@/lib/types";

const filterOptions: { value: ProjectType | "all"; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "saas", label: "SaaS" },
  { value: "internal", label: "Sistema interno" },
  { value: "inmo", label: "Inmobiliaria" },
];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectType | "all">("all");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  // Ordenar por prioridad (menor número primero)
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    const priorityA = a.priority ?? 999; // Si no tiene prioridad, va al final
    const priorityB = b.priority ?? 999;
    return priorityA - priorityB;
  });

  const displayedProjects = showAll
    ? sortedProjects
    : sortedProjects.slice(0, 3);

  const hasMore = filteredProjects.length > 3;

  return (
    <SectionWrapper id="proyectos" className="bg-secondary/30">
      <AnimateOnScroll>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Proyectos y demos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Algunos de los sistemas que desarrollé y que podés probar en vivo.
          </p>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll delay={100}>
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setActiveFilter(option.value)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeFilter === option.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-secondary hover:text-foreground border border-border"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </AnimateOnScroll>

      <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {displayedProjects.map((project, index) => (
          <AnimateOnScroll key={project.id} delay={index * 100}>
            <ProjectCard project={project} />
          </AnimateOnScroll>
        ))}
      </div>

      {hasMore && !showAll && (
        <AnimateOnScroll delay={200}>
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="group inline-flex items-center gap-2 rounded-lg border-2 border-primary bg-background px-8 py-3 text-base font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-lg"
            >
              Ver todos los proyectos
              <svg
                className="h-5 w-5 transition-transform group-hover:translate-y-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </AnimateOnScroll>
      )}
    </SectionWrapper>
  );
}
