import type { ComponentType, SVGProps } from "react";
import {
  BathIcon,
  BedroomIcon,
  KitchenIcon,
  SpacesIcon,
  TvIcon,
} from "@/components/icons/AmenityIcons";

interface Amenity {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const amenities: Amenity[] = [
  {
    icon: SpacesIcon,
    title: "Espacios amplios y elegantes",
    description:
      "Ambientes completamente privados y relajantes, pensados para respirar y desconectar en total tranquilidad.",
  },
  {
    icon: KitchenIcon,
    title: "Cocina totalmente equipada",
    description:
      "Ideal para estancias largas o viajes en familia: todo lo necesario para cocinar y compartir sin salir de la villa.",
  },
  {
    icon: BedroomIcon,
    title: "Habitaciones cómodas y modernas",
    description:
      "Pensadas para el descanso absoluto, con acabados modernos que invitan a dormir profundo.",
  },
  {
    icon: BathIcon,
    title: "Baño de lujo",
    description:
      "Regadera y tina para una experiencia de spa privado en cada día de tu estancia.",
  },
  {
    icon: TvIcon,
    title: "Sala con Smart TV",
    description:
      "Un espacio de entretenimiento listo para las noches en familia o con amigos.",
  },
];

export function Amenities() {
  return (
    <section id="amenidades" className="bg-brand-navy px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-turquoise">
            La experiencia Bungalows Del Mar
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Todo lo que necesitas para un descanso inolvidable
          </h2>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 transition hover:border-brand-turquoise/40 hover:bg-white/10"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-turquoise/15 text-brand-turquoise">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {title}
              </h3>
              <p className="mt-2 text-slate-300">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
