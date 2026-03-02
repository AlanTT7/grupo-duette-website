import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section id="contacto" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
          {/* Grid overlay */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(100, 150, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 150, 255, 0.04) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-primary/5 blur-[80px]" />

          <div className="relative z-10 flex flex-col items-center px-6 py-16 text-center sm:px-12 md:py-24">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
              {"Comenc\u00e1 tu proyecto"}
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground font-mono md:text-5xl">
              {"\u00bfTen\u00e9s una idea?"}
              <br />
              Hagamosla realidad.
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-pretty leading-relaxed text-muted-foreground">
              {"Escribinos y contanos sobre tu proyecto. Te respondemos en menos de 24 horas con un plan de acci\u00f3n."}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <a href="mailto:hola@duettegroup.com">
                  Escribinos
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
