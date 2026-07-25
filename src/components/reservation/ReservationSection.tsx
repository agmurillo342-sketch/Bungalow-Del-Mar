import { ReservationForm } from "@/components/reservation/ReservationForm";
import type { Property } from "@/config/properties";

interface ReservationSectionProps {
  property: Property;
}

export function ReservationSection({ property }: ReservationSectionProps) {
  return (
    <section
      id="reservar"
      className={`flex flex-col items-center px-4 py-16 sm:py-24 ${property.theme.reservarBg}`}
    >
      <div className="mb-10 max-w-md text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-turquoise">
          {property.location}
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
          Consulta tu disponibilidad
        </h2>
        <p className="mx-auto mt-3 text-slate-300">
          Cuéntanos tus fechas y número de huéspedes; te respondemos directo
          por WhatsApp para confirmar tu reserva.
        </p>
      </div>

      <ReservationForm
        propertyName={property.name}
        whatsappNumber={property.whatsappNumber}
      />
    </section>
  );
}
