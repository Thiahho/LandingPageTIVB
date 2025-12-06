"use client";

import { useState, useEffect } from "react";
import { WHATSAPP_URL } from "@/lib/data";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-border bg-background/95 backdrop-blur shadow-sm supports-[backdrop-filter]:bg-background/80"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="text-xl font-bold text-foreground transition-transform hover:scale-105"
        >
          {"<TIVB />"}
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-lg"
          >
            Hablemos
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border transition-all hover:bg-secondary md:hidden"
          aria-label="Toggle menu"
        >
          <div className="relative h-5 w-5">
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-foreground transition-all duration-300 ${
                isOpen ? "top-2.5 rotate-45" : "top-1"
              }`}
            />
            <span
              className={`absolute left-0 top-2.5 block h-0.5 w-5 bg-foreground transition-all duration-300 ${
                isOpen ? "opacity-0 scale-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-foreground transition-all duration-300 ${
                isOpen ? "top-2.5 -rotate-45" : "top-4"
              }`}
            />
          </div>
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-border bg-background px-4 py-4">
          <div className="flex flex-col gap-4 stagger-children">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:translate-x-2"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-lg bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Hablemos
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
