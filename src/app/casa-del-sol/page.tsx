import type { Metadata } from "next";
import { Amenities } from "@/components/amenities/Amenities";
import { Hero } from "@/components/hero/Hero";
import { ReservationSection } from "@/components/reservation/ReservationSection";
import { casaDelSol } from "@/config/properties";

export const metadata: Metadata = {
  title: "Casa del Sol | Punta Perula, Jalisco",
  description:
    "Renta vacacional cálida y acogedora en Punta Perula, Jalisco. Consulta disponibilidad y reserva directo por WhatsApp.",
};

export default function CasaDelSolPage() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero property={casaDelSol} />
      <Amenities property={casaDelSol} />
      <ReservationSection property={casaDelSol} />
    </main>
  );
}
