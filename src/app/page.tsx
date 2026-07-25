import { Amenities } from "@/components/amenities/Amenities";
import { Hero } from "@/components/hero/Hero";
import { ReservationSection } from "@/components/reservation/ReservationSection";
import { bungalowsDelMar } from "@/config/properties";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero property={bungalowsDelMar} />
      <Amenities property={bungalowsDelMar} />
      <ReservationSection property={bungalowsDelMar} />
    </main>
  );
}
