import { ReservationForm } from "@/components/reservation/ReservationForm";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center bg-brand-sand px-4 py-16 sm:py-24">
      <div className="mb-10 max-w-md text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-turquoise">
          {siteConfig.location}
        </p>
        <h1 className="mt-2 text-3xl font-bold text-brand-navy sm:text-4xl">
          {siteConfig.name}
        </h1>
        <p className="mx-auto mt-3 text-slate-600">
          Consulta disponibilidad para tu próxima escapada y reserva directo
          por WhatsApp.
        </p>
      </div>

      <ReservationForm />
    </main>
  );
}
