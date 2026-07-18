import Image from "next/image";
import { GalleryButton } from "@/components/gallery/Gallery";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[85vh] items-center overflow-hidden bg-brand-navy-dark sm:min-h-[92vh]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(20,184,166,0.18),transparent)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center px-6 py-28 text-center sm:px-10">
        <div className="rounded-2xl bg-white p-4 shadow-lg sm:p-5">
          <Image
            src="/images/brand/logo.jpg"
            alt="Bungalows Del Mar"
            width={200}
            height={100}
            className="h-auto w-36 sm:w-44"
            priority
          />
        </div>

        <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-brand-turquoise">
          {siteConfig.location} · Villa privada frente al mar
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Un refugio moderno frente al mar
        </h1>
        <p className="mt-5 max-w-xl text-lg text-slate-200">
          Una villa pensada para parejas, familias y grupos de amigos que
          buscan confort, privacidad y tranquilidad en {siteConfig.location}.
        </p>
        <a
          href="#reservar"
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-brand-turquoise px-7 py-3.5 font-semibold text-white transition hover:bg-brand-turquoise-dark focus:outline-none focus:ring-2 focus:ring-brand-turquoise/50 focus:ring-offset-2 focus:ring-offset-brand-navy-dark"
        >
          Consultar disponibilidad
        </a>
      </div>

      <div className="absolute bottom-4 right-4 z-10 sm:bottom-6 sm:right-6">
        <GalleryButton />
      </div>
    </section>
  );
}
