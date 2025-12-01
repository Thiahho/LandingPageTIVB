"use client"

import type { ReactNode } from "react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

interface AnimateOnScrollProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimateOnScroll({ children, className = "", delay = 0 }: AnimateOnScrollProps) {
  const [ref, isVisible] = useAnimateOnScroll()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
