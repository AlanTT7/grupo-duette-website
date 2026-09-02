import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6 pt-20"
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
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] animate-glow-pulse" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 animate-in fade-in-0 slide-in-from-bottom-4 duration-700 [animation-fill-mode:both]">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs text-muted-foreground">
            Disponibles para nuevos proyectos
          </span>
        </div>

        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground font-mono sm:text-5xl md:text-6xl lg:text-7xl animate-in fade-in-0 slide-in-from-bottom-4 duration-700 [animation-delay:100ms] [animation-fill-mode:both]">
          Grupo <span className="text-primary">Duette</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg animate-in fade-in-0 slide-in-from-bottom-4 duration-700 [animation-delay:200ms] [animation-fill-mode:both]">
          Somos Grupo Duette, desarrollo web y soluciones IT. Transformamos ideas
          en productos digitales modernos, escalables y de alto rendimiento.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-in fade-in-0 slide-in-from-bottom-4 duration-700 [animation-delay:300ms] [animation-fill-mode:both]">
          <Button asChild size="lg" className="gap-2 transition-transform duration-300 hover:scale-105">
            <a href="#contacto">
              Iniciar proyecto
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="transition-transform duration-300 hover:scale-105">
            <a href="#proyectos">Ver nuestro trabajo</a>
          </Button>
        </div>

        {/* Stats bar */}
        <div className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-8 border-t border-border pt-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-700 [animation-delay:400ms] [animation-fill-mode:both]">
          <div>
            <p className="text-2xl font-bold text-foreground font-mono sm:text-3xl">50+</p>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">Proyectos entregados</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground font-mono sm:text-3xl">3+</p>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{"Años de experiencia"}</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground font-mono sm:text-3xl">100%</p>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">Compromiso y responsabilidad</p>
          </div>
        </div>
      </div>
    </section>
  )
}
