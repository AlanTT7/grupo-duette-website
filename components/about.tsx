import { CheckCircle2 } from "lucide-react"

const highlights = [
  "Rendimiento y escalabilidad",
  "Codigo limpio y mantenible",
  "Comunicacion constante",
  "Soporte post-lanzamiento",
]

export function About() {
  return (
    <section id="nosotros" className="px-6 py-14 md:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
          Sobre nosotros
        </p>
        <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground font-mono md:text-4xl">
          Un equipo enfocado en resultados
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          En Grupo Duette creemos que las mejores soluciones nacen de la
          colaboracion directa. No somos una agencia masiva, somos un equipo que
          trata cada proyecto como propio: desde el primer wireframe hasta el
          deploy final.
        </p>

        <div className="mx-auto mt-10 grid max-w-xl gap-3 sm:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2.5 rounded-lg border border-border bg-card/50 px-4 py-3"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
              <span className="text-sm text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
