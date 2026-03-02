import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web App",
    description:
      "Plataforma completa de comercio electronico con gestion de inventario, pagos integrados y panel de administracion.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    title: "SaaS Dashboard",
    category: "Web App",
    description:
      "Dashboard interactivo para gestion de datos empresariales con graficos en tiempo real y reportes automatizados.",
    tags: ["React", "Node.js", "WebSockets"],
  },
  {
    title: "Portal Corporativo",
    category: "Sitio Web",
    description:
      "Sitio institucional moderno con CMS integrado, blog y sistema de contacto avanzado.",
    tags: ["Next.js", "Sanity", "Vercel"],
  },
  {
    title: "App de Reservas",
    category: "Full Stack",
    description:
      "Sistema de reservas online con calendario inteligente, notificaciones y pasarela de pago.",
    tags: ["TypeScript", "Supabase", "Tailwind"],
  },
]

export function Portfolio() {
  return (
    <section id="proyectos" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Proyectos
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground font-mono md:text-4xl">
              Trabajo que habla por si mismo
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            Cada proyecto es una oportunidad de superar expectativas y entregar
            resultados reales.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40"
            >
              {/* Top bar (colored strip) */}
              <div className="h-1 w-full bg-primary/20 transition-colors group-hover:bg-primary/50" />

              <div className="flex flex-col justify-between p-6 sm:p-8">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground">
                      {project.category}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground font-mono">
                    {project.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
