"use client";

import { useState, type FormEvent } from "react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { buildWhatsappReservationUrl } from "@/lib/whatsapp";

interface FormState {
  name: string;
  checkIn: string;
  checkOut: string;
  guests: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  checkIn: "",
  checkOut: "",
  guests: "",
};

function getTodayIso(): string {
  return new Date().toISOString().split("T")[0];
}

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!form.name.trim()) {
    errors.name = "Por favor ingresa tu nombre.";
  }

  if (!form.checkIn) {
    errors.checkIn = "Selecciona una fecha de entrada.";
  }

  if (!form.checkOut) {
    errors.checkOut = "Selecciona una fecha de salida.";
  } else if (form.checkIn && form.checkOut <= form.checkIn) {
    errors.checkOut = "La salida debe ser posterior a la entrada.";
  }

  const guests = Number(form.guests);
  if (!form.guests || Number.isNaN(guests) || guests < 1) {
    errors.guests = "Indica el número de huéspedes.";
  }

  return errors;
}

const inputClassName =
  "w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-800 outline-none transition focus:border-brand-turquoise focus:ring-2 focus:ring-brand-turquoise/40";

const labelClassName = "mb-1.5 block text-sm font-medium text-brand-navy";

interface ReservationFormProps {
  propertyName: string;
  whatsappNumber: string;
}

export function ReservationForm({
  propertyName,
  whatsappNumber,
}: ReservationFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const url = buildWhatsappReservationUrl(whatsappNumber, propertyName, {
      name: form.name.trim(),
      checkIn: form.checkIn,
      checkOut: form.checkOut,
      guests: Number(form.guests),
    });

    window.open(url, "_blank", "noopener,noreferrer");
  }

  const today = getTodayIso();
  const minCheckOut = form.checkIn || today;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="w-full max-w-lg space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-brand-navy/5 sm:p-8"
    >
      <div>
        <label htmlFor="name" className={labelClassName}>
          Nombre completo
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="Tu nombre"
          className={inputClassName}
        />
        {errors.name && (
          <p className="mt-1.5 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="checkIn" className={labelClassName}>
            Fecha de entrada
          </label>
          <input
            id="checkIn"
            type="date"
            min={today}
            value={form.checkIn}
            onChange={(e) => handleChange("checkIn", e.target.value)}
            className={inputClassName}
          />
          {errors.checkIn && (
            <p className="mt-1.5 text-sm text-red-600">{errors.checkIn}</p>
          )}
        </div>

        <div>
          <label htmlFor="checkOut" className={labelClassName}>
            Fecha de salida
          </label>
          <input
            id="checkOut"
            type="date"
            min={minCheckOut}
            value={form.checkOut}
            onChange={(e) => handleChange("checkOut", e.target.value)}
            className={inputClassName}
          />
          {errors.checkOut && (
            <p className="mt-1.5 text-sm text-red-600">{errors.checkOut}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="guests" className={labelClassName}>
          Número de huéspedes
        </label>
        <input
          id="guests"
          type="number"
          min={1}
          inputMode="numeric"
          value={form.guests}
          onChange={(e) => handleChange("guests", e.target.value)}
          placeholder="Ej. 4"
          className={inputClassName}
        />
        {errors.guests && (
          <p className="mt-1.5 text-sm text-red-600">{errors.guests}</p>
        )}
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-turquoise px-6 py-3 font-semibold text-white transition hover:bg-brand-turquoise-dark focus:outline-none focus:ring-2 focus:ring-brand-turquoise/50 focus:ring-offset-2"
      >
        <WhatsAppIcon className="h-5 w-5" />
        Consultar disponibilidad por WhatsApp
      </button>
    </form>
  );
}
