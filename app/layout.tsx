import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Desarrollador Full Stack – E-commerce y Sistemas de Gestión",
  description:
    "Construyo e-commerce y sistemas de gestión a medida. Tiendas online y paneles de gestión diseñados para negocios que quieren escalar en serio.",
  keywords: [
    "desarrollador full stack",
    "e-commerce",
    "tienda online",
    "sistemas de gestión",
    "desarrollo web",
    "ASP.NET Core",
    "React",
    "PostgreSQL",
    "desarrollador freelance",
    "SaaS",
    "sistema interno",
    "dashboard",
    "mercado pago",
    "checkout integrado",
    "desarrollador argentina",
    "programador freelance",
    "desarrollo a medida",
    "tienda web",
    "web",
  ],
  authors: [{ name: "Desarrollador Full Stack" }],
  creator: "Desarrollador Full Stack",
  publisher: "Desarrollador Full Stack",
  generator: "Next.js",
  openGraph: {
    title: "Desarrollador Full Stack – E-commerce y Sistemas de Gestión",
    description:
      "Construyo e-commerce y sistemas de gestión a medida. Tiendas online y paneles de gestión diseñados para negocios que quieren escalar en serio.",
    type: "website",
    locale: "es_AR",
    siteName: "Desarrollador Full Stack",
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollador Full Stack – E-commerce y Sistemas de Gestión",
    description:
      "Construyo e-commerce y sistemas de gestión a medida. Tiendas online y paneles de gestión diseñados para negocios que quieren escalar en serio.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
