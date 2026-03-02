import { CheckCircle2 } from "lucide-react"

const highlights = [
  "Enfoque en rendimiento y escalabilidad",
  "Codigo limpio y mantenible",
  "Comunicacion constante durante el proyecto",
  "Soporte post-lanzamiento incluido",
  "Tecnologias de ultima generacion",
  "Diseno centrado en el usuario",
]

export function About() {
  return (
    <section id="nosotros" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Visual block */}
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl border border-border bg-card">
              <div className="flex h-full flex-col justify-between p-8">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Nuestro enfoque
                  </p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-foreground font-mono leading-none md:text-6xl">
                    Duo
                  </p>
                  <p className="text-5xl font-bold text-primary font-mono leading-none md:text-6xl">
                    creativo.
                  </p>
                  <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                    Dos mentes, una vision. Trabajamos en conjunto con cada
                    cliente para construir algo excepcional.
                  </p>
                </div>
                <div className="flex gap-3">
                  {["React", "Next.js", "TypeScript", "Node.js"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {/* Decorative dot */}
            <div className="absolute -right-3 -top-3 h-6 w-6 rounded-full bg-primary/30" />
          </div>

          {/* Text content */}
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Sobre nosotros
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground font-mono md:text-4xl">
              {"Un estudio peque\u00f1o con grandes ideas"}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              En Grupo Duette creemos que las mejores soluciones nacen de la
              colaboracion directa con nuestros clientes. No somos una agencia
              masiva, somos un equipo enfocado que trata cada proyecto como
              propio.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Desde el primer wireframe hasta el deploy final, nos aseguramos de
              que cada detalle este cuidado, cada linea de codigo sea limpia y
              cada interaccion sea fluida.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
