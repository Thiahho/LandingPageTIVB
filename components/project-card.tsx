"use client";

import type { Project } from "@/lib/types";

const typeLabels: Record<string, string> = {
  ecommerce: "E-commerce",
  saas: "SaaS",
  internal: "Sistema interno",
  inmo: "Inmobiliaria",
};

const typeColors: Record<string, string> = {
  ecommerce:
    "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  saas: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  internal:
    "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  inmo: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
};

const statusLabels: Record<string, string> = {
  production: "En producción",
  demo: "Demo disponible",
  new: "Nuevo",
};

const statusColors: Record<string, string> = {
  production: "bg-emerald-500 text-white",
  demo: "bg-sky-500 text-white",
  new: "bg-rose-500 text-white animate-pulse",
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/50 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="mb-4 flex items-start justify-between gap-2">
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium transition-transform group-hover:scale-105 ${
              typeColors[project.type]
            }`}
          >
            {typeLabels[project.type]}
          </span>
          <div className="flex flex-col gap-1 items-end">
            <span
              className={`rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap ${
                statusColors[project.status]
              }`}
            >
              {statusLabels[project.status]}
            </span>
            {project.status2 && (
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap ${
                  statusColors[project.status2]
                }`}
              >
                {statusLabels[project.status2]}
              </span>
            )}
          </div>
        </div>

        <h3 className="text-xl font-semibold text-card-foreground transition-colors group-hover:text-accent">
          {project.name}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {project.shortDescription}
        </p>

        <div className="mt-4 flex-1">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Funcionalidades
          </p>
          <ul className="space-y-1.5">
            {project.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-muted-foreground transition-all duration-300"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent transition-transform group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <div className="mb-4 flex flex-wrap gap-2">
            {project.stack.map((tech, index) => (
              <span
                key={tech}
                className="rounded bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground transition-all hover:bg-accent/20 hover:text-accent"
                style={{ transitionDelay: `${index * 30}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-lg"
              >
                Ver demo
                <svg
                  className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
            {/* {project.adminDemoUrl && (
              <a
                href={project.adminDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-all hover:bg-secondary hover:scale-105 hover:border-accent/50"
              >
                Ver admin
                <svg
                  className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
