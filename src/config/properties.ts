import { galleryImages, type GalleryImage } from "@/config/gallery";
import { siteConfig } from "@/config/site";

export interface PropertyTheme {
  heroBg: string;
  amenitiesBg: string;
  reservarBg: string;
}

export interface Property {
  slug: string;
  name: string;
  location: string;
  eyebrow: string;
  tagline: string;
  description: string;
  logoSrc: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  whatsappNumber: string;
  gallery: GalleryImage[];
  theme: PropertyTheme;
}

export const bungalowsDelMar: Property = {
  slug: "",
  name: siteConfig.name,
  location: siteConfig.location,
  eyebrow: `${siteConfig.location} · Villa privada frente al mar`,
  tagline: "Un refugio moderno frente al mar",
  description: `Una villa pensada para parejas, familias y grupos de amigos que buscan confort, privacidad y tranquilidad en ${siteConfig.location}.`,
  logoSrc: "/images/brand/logo.jpg",
  logoAlt: siteConfig.name,
  logoWidth: 200,
  logoHeight: 100,
  whatsappNumber: siteConfig.whatsappNumber,
  gallery: galleryImages,
  theme: {
    heroBg: "bg-brand-navy-dark",
    amenitiesBg: "bg-brand-navy",
    reservarBg: "bg-brand-teal-deep",
  },
};

export const casaDelSol: Property = {
  slug: "casa-del-sol",
  name: "Casa del Sol",
  location: "Punta Perula, Jalisco",
  eyebrow: "Punta Perula, Jalisco · Casa cálida cerca del mar",
  tagline: "Un rincón cálido para desconectar",
  description:
    "Una casa pensada para parejas, familias y grupos de amigos que buscan confort, privacidad y tranquilidad en Punta Perula, Jalisco.",
  logoSrc: "/images/casa-del-sol/brand/logo.png",
  logoAlt: "Casa del Sol",
  logoWidth: 220,
  logoHeight: 220,
  whatsappNumber: siteConfig.whatsappNumber,
  gallery: [
    {
      src: "/images/casa-del-sol/gallery/01-sala.jpg",
      alt: "Sala de estar con sofás y espejo decorativo",
    },
    {
      src: "/images/casa-del-sol/gallery/02-comedor.jpg",
      alt: "Comedor con mesa de madera para ocho personas",
    },
    {
      src: "/images/casa-del-sol/gallery/03-comedor-cocina.jpg",
      alt: "Vista del comedor y la cocina integrada",
    },
    {
      src: "/images/casa-del-sol/gallery/04-cocina.jpg",
      alt: "Cocina con barra desayunadora y banquillos",
    },
    {
      src: "/images/casa-del-sol/gallery/05-habitacion-1.jpg",
      alt: "Habitación con dos camas y aire acondicionado",
    },
    {
      src: "/images/casa-del-sol/gallery/06-habitacion-2.jpg",
      alt: "Segunda habitación con dos camas",
    },
    {
      src: "/images/casa-del-sol/gallery/07-bano-1.jpg",
      alt: "Baño con regadera de lluvia y acabados cálidos",
    },
    {
      src: "/images/casa-del-sol/gallery/08-bano-2.jpg",
      alt: "Baño con área de regadera abierta",
    },
    {
      src: "/images/casa-del-sol/gallery/09-bano-3.jpg",
      alt: "Baño con cortina, inodoro y lavabo",
    },
  ],
  theme: {
    heroBg: "bg-sun-brown-dark",
    amenitiesBg: "bg-sun-terracotta",
    reservarBg: "bg-sun-amber-deep",
  },
};

export const properties: Property[] = [bungalowsDelMar, casaDelSol];
