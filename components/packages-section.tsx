import { SectionWrapper } from "./section-wrapper"
import { packages, WHATSAPP_URL } from "@/lib/data"

export function PackagesSection() {
  return (
    <SectionWrapper id="paquetes">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Formas de trabajo</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Diferentes opciones según lo que necesites para tu negocio.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {packages.map((pkg, index) => (
          <div
            key={pkg.id}
            className={`relative flex flex-col rounded-xl border p-8 transition-all hover:shadow-lg ${
              index === 1 ? "border-accent bg-accent/5" : "border-border bg-card"
            }`}
          >
            {index === 1 && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                Más popular
              </span>
            )}
            <h3 className="text-xl font-semibold text-card-foreground">{pkg.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{pkg.target}</p>

            <ul className="mt-6 flex-1 space-y-3">
              {pkg.includes.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-8 inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                index === 1
                  ? "bg-accent text-accent-foreground hover:bg-accent/90"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
            >
              {pkg.cta}
            </a>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
