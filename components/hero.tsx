"use client";

import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/lib/data";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 animate-float" />
        <div
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-accent/5 animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-32 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Desarrollo sistemas web y e-commerce a medida para negocios que
                quieren{" "}
                <span className="text-accent relative">
                  vender en serio
                  <span className="absolute -bottom-1 left-0 h-1 w-full bg-accent/30 rounded-full" />
                </span>
              </h1>
            </div>

            <div
              className={`transition-all duration-700 delay-150 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <p className="mt-6 text-pretty text-lg text-muted-foreground md:text-xl">
                Soluciones full stack con ASP.NET Core, React y PostgreSQL:
                tiendas online, paneles de gestión y dashboards listos para
                producción.
              </p>
            </div>

            <div
              className={`transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-lg"
                >
                  <svg
                    className="h-5 w-5 transition-transform group-hover:scale-110"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Quiero hablar de mi proyecto
                </a>
                <a
                  href="#proyectos"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-base font-medium text-foreground transition-all hover:bg-secondary hover:scale-105 hover:border-accent"
                >
                  Ver demos en vivo
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-y-1"
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
                </a>
              </div>
            </div>

            <div
              className={`mt-12 hidden lg:flex justify-start transition-all duration-700 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <a
                href="#tecnologias"
                className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {/* <span className="text-xs uppercase tracking-wider">Scroll</span> */}
                {/* <div className="h-12 w-6 rounded-full border-2 border-current p-1">
                  <div className="h-2 w-1.5 mx-auto rounded-full bg-current animate-bounce" />
                </div> */}
              </a>
            </div>
          </div>

          <div
            className={`relative hidden lg:block transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative aspect-square w-full max-w-lg">
              <div className="absolute inset-0 rounded-2xl bg-primary/5 p-8">
                <div className="h-full w-full rounded-xl border border-border bg-card p-6 shadow-lg transition-all hover:shadow-xl">
                  <div className="flex gap-2">
                    <div
                      className="h-3 w-3 rounded-full bg-red-400 animate-pulse"
                      style={{ animationDelay: "0s" }}
                    ></div>
                    <div
                      className="h-3 w-3 rounded-full bg-yellow-400 animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="h-3 w-3 rounded-full bg-green-400 animate-pulse"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                  <div className="mt-6 space-y-3 stagger-children">
                    <div
                      className="h-3 w-3/4 rounded bg-muted animate-fade-in-scale"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div
                      className="h-3 w-full rounded bg-accent/20 animate-fade-in-scale"
                      style={{ animationDelay: "0.6s" }}
                    ></div>
                    <div
                      className="h-3 w-5/6 rounded bg-muted animate-fade-in-scale"
                      style={{ animationDelay: "0.7s" }}
                    ></div>
                    <div
                      className="h-3 w-2/3 rounded bg-muted animate-fade-in-scale"
                      style={{ animationDelay: "0.8s" }}
                    ></div>
                    <div
                      className="mt-6 h-3 w-full rounded bg-accent/30 animate-fade-in-scale"
                      style={{ animationDelay: "0.9s" }}
                    ></div>
                    <div
                      className="h-3 w-4/5 rounded bg-muted animate-fade-in-scale"
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <div
                      className="h-3 w-3/4 rounded bg-muted animate-fade-in-scale"
                      style={{ animationDelay: "1.1s" }}
                    ></div>
                    <div
                      className="mt-6 h-3 w-1/2 rounded bg-accent/20 animate-fade-in-scale"
                      style={{ animationDelay: "1.2s" }}
                    ></div>
                    <div
                      className="h-3 w-2/3 rounded bg-muted animate-fade-in-scale"
                      style={{ animationDelay: "1.3s" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-4 -top-4 rounded-lg bg-accent p-3 shadow-lg animate-float">
                <svg
                  className="h-6 w-6 text-accent-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div
                className="absolute -bottom-4 -left-4 rounded-lg bg-card p-3 shadow-lg border border-border animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <svg
                  className="h-6 w-6 text-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div
                className="absolute top-1/2 -right-8 rounded-lg bg-primary p-2 shadow-lg animate-float"
                style={{ animationDelay: "2s" }}
              >
                <span className="text-xs font-mono text-primary-foreground">
                  {"{}"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
