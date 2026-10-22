import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web Development Template",
  description: "Plantilla corporativa para aplicaciones web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

