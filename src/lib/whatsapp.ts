export interface ReservationInquiry {
  name: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}

function formatDate(isoDate: string): string {
  const date = new Date(`${isoDate}T00:00:00`);
  return date.toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function buildWhatsappReservationUrl(
  phoneNumber: string,
  inquiry: ReservationInquiry
): string {
  const digitsOnly = phoneNumber.replace(/\D/g, "");

  const message = [
    "¡Hola! Me gustaría consultar disponibilidad en Bungalows Del Mar.",
    "",
    `Nombre: ${inquiry.name}`,
    `Fecha de entrada: ${formatDate(inquiry.checkIn)}`,
    `Fecha de salida: ${formatDate(inquiry.checkOut)}`,
    `Número de huéspedes: ${inquiry.guests}`,
    "",
    "Quedo atento(a) a su respuesta, ¡gracias!",
  ].join("\n");

  return `https://wa.me/${digitsOnly}?text=${encodeURIComponent(message)}`;
}
