import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(100, 150, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 150, 255, 0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow effect */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs text-muted-foreground">
            Disponibles para nuevos proyectos
          </span>
        </div>

        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground font-mono sm:text-5xl md:text-6xl lg:text-7xl">
          Creamos experiencias
          <br />
          <span className="text-primary">digitales</span> que importan
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Somos Grupo Duette, desarrollo web y soluciones IT. Transformamos ideas
          en productos digitales modernos, escalables y de alto rendimiento.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="gap-2">
            <a href="#contacto">
              Iniciar proyecto
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#proyectos">Ver nuestro trabajo</a>
          </Button>
        </div>

        {/* Stats bar */}
        <div className="mx-auto mt-20 grid max-w-2xl grid-cols-3 gap-8 border-t border-border pt-10">
          <div>
            <p className="text-2xl font-bold text-foreground font-mono sm:text-3xl">50+</p>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">Proyectos entregados</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground font-mono sm:text-3xl">3+</p>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{"A\u00f1os de experiencia"}</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground font-mono sm:text-3xl">100%</p>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">Clientes satisfechos</p>
          </div>
        </div>
      </div>
    </section>
  )
}
