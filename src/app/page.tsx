import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background p-8 text-foreground">
      <h1 className="text-4xl font-bold">Web Development Template</h1>
      <p className="text-muted-foreground">Next.js, Tailwind CSS y shadcn/ui están listos.</p>
      <Button>Botón de prueba</Button>
    </main>
  );
}
