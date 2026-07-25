import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteMenu } from "@/components/navigation/SiteMenu";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bungalows Del Mar | Punta Perula, Jalisco",
  description:
    "Renta vacacional frente al mar en Punta Perula, Jalisco. Consulta disponibilidad y reserva directo por WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteMenu />
        {children}
      </body>
    </html>
  );
}
