import { Amenities } from "@/components/amenities/Amenities";
import { Hero } from "@/components/hero/Hero";
import { ReservationForm } from "@/components/reservation/ReservationForm";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Amenities />

      <section
        id="reservar"
        className="flex flex-col items-center bg-brand-sand px-4 py-16 sm:py-24"
      >
        <div className="mb-10 max-w-md text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-turquoise">
            {siteConfig.location}
          </p>
          <h2 className="mt-2 text-3xl font-bold text-brand-navy sm:text-4xl">
            Consulta tu disponibilidad
          </h2>
          <p className="mx-auto mt-3 text-slate-600">
            Cuéntanos tus fechas y número de huéspedes; te respondemos directo
            por WhatsApp para confirmar tu reserva.
          </p>
        </div>

        <ReservationForm />
      </section>
    </main>
  );
}
