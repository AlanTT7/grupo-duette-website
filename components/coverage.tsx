import { MapPin } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function Coverage() {
  return (
    <section className="border-t border-border px-6 py-10 md:py-12">
      <Reveal>
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Left: headline */}
          <div className="text-center md:text-left">
            <p className="mb-1 text-sm font-medium uppercase tracking-widest text-primary">
              Cobertura
            </p>
            <h3 className="text-balance text-xl font-bold tracking-tight text-foreground font-mono md:text-2xl">
              Soporte en toda Argentina
            </h3>
          </div>

          {/* Center: detail */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-card">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Sede central en Misiones</p>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Operamos de forma remota en todo el territorio nacional.
              </p>
            </div>
          </div>

          {/* Right: regions */}
          <div className="flex flex-wrap justify-center gap-2 md:justify-end">
            {["CABA", "GBA", "NEA", "NOA", "Patagonia", "Cuyo"].map((region) => (
              <span
                key={region}
                className="rounded-md border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground"
              >
                {region}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
