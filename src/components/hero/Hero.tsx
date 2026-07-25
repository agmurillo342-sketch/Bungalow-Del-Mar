import Image from "next/image";
import { GalleryButton } from "@/components/gallery/Gallery";
import type { Property } from "@/config/properties";

interface HeroProps {
  property: Property;
}

export function Hero({ property }: HeroProps) {
  return (
    <section
      id="inicio"
      className={`relative flex min-h-[85vh] items-center overflow-hidden sm:min-h-[92vh] ${property.theme.heroBg}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(20,184,166,0.18),transparent)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center px-6 py-28 text-center sm:px-10">
        <div className="rounded-2xl bg-white p-4 shadow-lg sm:p-5">
          <Image
            src={property.logoSrc}
            alt={property.logoAlt}
            width={property.logoWidth}
            height={property.logoHeight}
            className="h-auto w-36 sm:w-44"
            priority
          />
        </div>

        <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-brand-turquoise">
          {property.eyebrow}
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          {property.tagline}
        </h1>
        <p className="mt-5 max-w-xl text-lg text-slate-200">
          {property.description}
        </p>
        <a
          href="#reservar"
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-brand-turquoise px-7 py-3.5 font-semibold text-white transition hover:bg-brand-turquoise-dark focus:outline-none focus:ring-2 focus:ring-brand-turquoise/50"
        >
          Consultar disponibilidad
        </a>
      </div>

      <div className="absolute bottom-4 right-4 z-20 sm:bottom-6 sm:right-6">
        <GalleryButton images={property.gallery} propertyName={property.name} />
      </div>
    </section>
  );
}
