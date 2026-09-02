import {
  Globe,
  Smartphone,
  Server,
  Palette,
  ShieldCheck,
  Zap,
} from "lucide-react"
import { Reveal } from "@/components/reveal"

const services = [
  {
    icon: Globe,
    title: "Desarrollo Web",
    description:
      "Sitios web y aplicaciones web modernas con las mejores tecnologias del mercado. Next.js, React, y mas.",
  },
  {
    icon: Smartphone,
    title: "Apps Responsivas",
    description:
      "Interfaces adaptables a cualquier dispositivo, priorizando la experiencia del usuario en mobile y desktop.",
  },
  {
    icon: Server,
    title: "Infraestructura IT",
    description:
      "Soluciones en la nube, despliegue automatizado, y arquitectura escalable para tu negocio.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Interfaces limpias e intuitivas. Prototipos, sistemas de diseno y experiencias memorables.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad & SEO",
    description:
      "Implementamos mejores practicas de seguridad y optimizacion para buscadores desde el dia uno.",
  },
  {
    icon: Zap,
    title: "Rendimiento",
    description:
      "Optimizamos cada pixel y cada request. Tu sitio cargara rapido y funcionara sin fricciones.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="px-6 py-14 md:py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-10 max-w-xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Servicios
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground font-mono md:text-4xl">
            Todo lo que necesitas para crecer en lo digital
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Ofrecemos un conjunto completo de servicios para llevar tu presencia
            digital al siguiente nivel.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 80}>
              <div className="group h-full rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-secondary/50 hover:shadow-lg">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
