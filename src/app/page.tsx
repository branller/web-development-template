import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Braces,
  Check,
  ChevronRight,
  CircleCheck,
  Code2,
  Layers3,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const principles = [
  {
    icon: Blocks,
    number: "01",
    title: "Componentes coherentes",
    description:
      "Construye interfaces con piezas reutilizables, accesibles y listas para adaptar a cada producto.",
  },
  {
    icon: Braces,
    number: "02",
    title: "Código que entiende la IA",
    description:
      "Una base predecible ayuda a los asistentes a generar cambios útiles y respetar tus convenciones.",
  },
  {
    icon: Layers3,
    number: "03",
    title: "Un lenguaje compartido",
    description:
      "Tokens, patrones y documentación mantienen alineados al equipo y a sus herramientas.",
  },
];

const workflow = [
  ["01", "Define tus tokens", "Colores, tipografía y ritmo visual."],
  ["02", "Compón con intención", "Elige componentes y combina variantes."],
  ["03", "Escala con confianza", "La IA trabaja sobre patrones conocidos."],
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#inicio" className="flex items-center gap-2.5" aria-label="Forma, inicio">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Blocks className="size-5" aria-hidden="true" />
          </span>
          <span className="text-lg font-bold tracking-tight">forma<span className="text-primary">.</span></span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex" aria-label="Navegación principal">
          <a className="transition-colors hover:text-foreground" href="#sistema">El sistema</a>
          <a className="transition-colors hover:text-foreground" href="#metodo">Cómo funciona</a>
          <a className="transition-colors hover:text-foreground" href="#componentes">Componentes</a>
        </nav>
        <Button size="sm" nativeButton={false} render={<a href="#componentes" />}>
          Explorar demo <ArrowUpRight data-icon="inline-end" />
        </Button>
      </header>

      <section id="inicio" className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-6 pb-24 pt-12 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:pb-32 lg:pt-20">
        <div className="relative z-10 flex flex-col items-start">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground shadow-sm">
            <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
            <span>Diseño consistente. Desarrollo más claro.</span>
          </div>
          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Una buena base cambia <span className="text-primary">todo.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            Estandariza tus proyectos con shadcn/ui y crea un lenguaje común entre tu equipo, tu código y la IA.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button size="lg" nativeButton={false} render={<a href="#sistema" />}>
              Descubre el sistema <ArrowRight data-icon="inline-end" />
            </Button>
            <Button size="lg" variant="outline" nativeButton={false} render={<a href="#metodo" />}>
              Ver cómo funciona
            </Button>
          </div>
          <div className="mt-9 flex items-center gap-3 text-sm text-muted-foreground">
            <div className="flex -space-x-2" aria-hidden="true">
              <span className="flex size-8 items-center justify-center rounded-full border-2 border-background bg-accent text-accent-foreground"><Code2 className="size-3.5" /></span>
              <span className="flex size-8 items-center justify-center rounded-full border-2 border-background bg-secondary text-secondary-foreground"><WandSparkles className="size-3.5" /></span>
              <span className="flex size-8 items-center justify-center rounded-full border-2 border-background bg-primary text-primary-foreground"><Check className="size-3.5" /></span>
            </div>
            <span>Diseñado para personas y asistentes de IA</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[600px] lg:ml-auto">
          <div className="absolute -right-12 -top-12 size-56 rounded-full bg-accent/70 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-12 -left-12 size-48 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
          <div className="relative rounded-2xl border border-border bg-card p-2 shadow-2xl shadow-foreground/10">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="flex size-7 items-center justify-center rounded-lg bg-accent text-accent-foreground"><Layers3 className="size-4" /></span>
                <span className="text-sm font-semibold">Tu sistema de diseño</span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground"><span className="size-1.5 rounded-full bg-primary" /> Sincronizado</span>
            </div>
            <div className="grid gap-3 p-4 sm:grid-cols-[1fr_1.2fr]">
              <div className="flex flex-col gap-3">
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="text-xs font-medium text-muted-foreground">Paleta del proyecto</p>
                  <div className="mt-4 flex gap-2">
                    <span className="size-9 rounded-lg bg-primary" title="Primario" />
                    <span className="size-9 rounded-lg bg-accent" title="Acento" />
                    <span className="size-9 rounded-lg bg-secondary" title="Secundario" />
                    <span className="size-9 rounded-lg border border-border bg-card" title="Superficie" />
                  </div>
                  <div className="mt-3 flex justify-between font-mono text-[10px] text-muted-foreground"><span>primary</span><span>accent</span><span>surface</span></div>
                </div>
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="text-xs font-medium text-muted-foreground">Tokens compartidos</p>
                  <div className="mt-3 flex flex-col gap-2.5">
                    {["Color semántico", "Escala tipográfica", "Radio de bordes"].map((item) => <div key={item} className="flex items-center justify-between text-xs"><span>{item}</span><CircleCheck className="size-4 text-primary" /></div>)}
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-border bg-background p-4">
                <div className="flex items-center justify-between"><p className="text-xs font-medium text-muted-foreground">Vista previa</p><span className="rounded-md bg-secondary px-2 py-1 font-mono text-[10px] text-secondary-foreground">Button.tsx</span></div>
                <div className="mt-4 rounded-lg border border-border bg-card p-4">
                  <span className="text-xs font-medium text-muted-foreground">Empieza con un patrón</span>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">Todo en su forma.</h3>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">Piezas consistentes para construir experiencias propias.</p>
                  <Button className="mt-4 w-full" size="sm">Crear proyecto <ChevronRight data-icon="inline-end" /></Button>
                </div>
                <div className="mt-3 rounded-lg bg-muted p-3 font-mono text-[10px] leading-5 text-muted-foreground">
                  <span className="text-primary">&lt;Button</span> variant=<span className="text-accent-foreground">"default"</span><br />
                  &nbsp;&nbsp;size=<span className="text-accent-foreground">"sm"</span><br />
                  <span className="text-primary">&gt;</span>Crear proyecto<span className="text-primary">&lt;/Button&gt;</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-b-xl border-t border-border bg-muted/50 px-4 py-3 text-xs text-muted-foreground"><span className="flex items-center gap-2"><span className="size-2 rounded-full bg-primary" /> Listo para construir</span><span className="font-mono">tokens · componentes · IA</span></div>
          </div>
          <div className="absolute -bottom-6 -right-3 hidden items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium shadow-lg sm:flex"><span className="flex size-7 items-center justify-center rounded-lg bg-accent text-accent-foreground"><Sparkles className="size-4" /></span>Consistencia desde el inicio</div>
        </div>
      </section>

      <section id="sistema" className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Una base, muchas posibilidades</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">La estandarización deja espacio para crear.</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">shadcn/ui te da control sobre el código de tus componentes. Tu equipo define las reglas; cada proyecto las convierte en experiencias únicas.</p>
          </div>
          <div id="componentes" className="mt-12 grid gap-4 md:grid-cols-3">
            {principles.map(({ icon: Icon, number, title, description }) => (
              <article key={number} className="group rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/5">
                <div className="flex items-center justify-between"><span className="flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><Icon className="size-5" /></span><span className="font-mono text-xs text-muted-foreground">{number}</span></div>
                <h3 className="mt-6 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
                <a href="#metodo" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">Conoce más <ArrowRight className="size-4" /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="metodo" className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Un método sencillo</p>
          <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-tight sm:text-4xl">Del primer token a un producto consistente.</h2>
          <p className="mt-4 max-w-md text-base leading-7 text-muted-foreground">La IA aporta velocidad. Un sistema de diseño le da dirección y hace que cada entrega se sienta parte del mismo producto.</p>
          <Button className="mt-7" variant="outline" nativeButton={false} render={<a href="#inicio" />}>
            Volver al inicio <ArrowDown className="rotate-180" data-icon="inline-end" />
          </Button>
        </div>
        <div className="flex flex-col divide-y divide-border rounded-2xl border border-border bg-card px-6 sm:px-8">
          {workflow.map(([number, title, description]) => <div key={number} className="flex gap-5 py-6 sm:gap-7"><span className="mt-0.5 font-mono text-sm text-primary">{number}</span><div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm text-muted-foreground">{description}</p></div></div>)}
        </div>
      </section>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-7 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <a href="#inicio" className="flex items-center gap-2 font-semibold text-foreground"><span className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground"><Blocks className="size-4" /></span>forma<span className="text-primary">.</span></a>
          <p>Una demo de estandarización de interfaces con shadcn/ui e IA.</p>
          <a className="inline-flex items-center gap-1 font-medium text-foreground hover:text-primary" href="#inicio">Volver arriba <ArrowUpRight className="size-3.5" /></a>
        </div>
      </footer>
    </main>
  );
}
