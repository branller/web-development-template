import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Forma — Diseño consistente para proyectos con IA",
  description:
    "Una demo de cómo shadcn/ui ayuda a estandarizar interfaces y crear un lenguaje compartido entre equipos y asistentes de IA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: import("react").ReactNode;
}>) {
  return (
    <html lang="es" className={cn("font-sans", montserrat.variable)}>
      <body className="min-h-screen bg-background text-foreground">
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
