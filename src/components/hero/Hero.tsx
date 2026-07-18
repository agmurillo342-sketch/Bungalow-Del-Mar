import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[85vh] items-end overflow-hidden bg-brand-navy-dark sm:min-h-[92vh] sm:items-center"
    >
      <ImagePlaceholder
        alt="Vista exterior de la villa Bungalows Del Mar en Punta Perula"
        className="absolute inset-0 h-full w-full"
      />
      <div className="absolute inset-0 bg-linear-to-t from-brand-navy-dark via-brand-navy-dark/75 to-brand-navy-dark/25" />

      <div className="relative mx-auto w-full max-w-4xl px-6 pb-16 pt-32 sm:px-10 sm:pb-24 sm:pt-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-turquoise">
          {siteConfig.location} · Villa privada frente al mar
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          {siteConfig.name}
        </h1>
        <p className="mt-5 max-w-xl text-lg text-slate-200">
          Una villa moderna pensada para parejas, familias y grupos de amigos
          que buscan confort, privacidad y tranquilidad frente al mar.
        </p>
        <div className="mt-8">
          <a
            href="#reservar"
            className="inline-flex items-center justify-center rounded-lg bg-brand-turquoise px-7 py-3.5 font-semibold text-white transition hover:bg-brand-turquoise-dark focus:outline-none focus:ring-2 focus:ring-brand-turquoise/50 focus:ring-offset-2 focus:ring-offset-brand-navy-dark"
          >
            Consultar disponibilidad
          </a>
        </div>
      </div>
    </section>
  );
}
