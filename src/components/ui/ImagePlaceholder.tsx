import Image from "next/image";

const DEFAULT_PLACEHOLDER = "/placeholders/photo-placeholder.svg";

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  className?: string;
  sizes?: string;
}

export function ImagePlaceholder({
  src = DEFAULT_PLACEHOLDER,
  alt,
  className = "",
  sizes = "100vw",
}: ImagePlaceholderProps) {
  const isPlaceholder = src === DEFAULT_PLACEHOLDER;

  return (
    <div className={`overflow-hidden bg-brand-sand ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      {isPlaceholder && (
        <div className="pointer-events-none absolute inset-0 z-10 flex items-end justify-end p-4">
          <span className="flex items-center gap-2 rounded-full bg-brand-navy/70 px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5"
              aria-hidden="true"
            >
              <path d="M4 8a2 2 0 0 1 2-2h1.2l.8-1.2A1 1 0 0 1 8.83 4h6.34a1 1 0 0 1 .83.6L16.8 6H18a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
              <circle cx="12" cy="12.5" r="3.2" />
            </svg>
            Foto próximamente
          </span>
        </div>
      )}
    </div>
  );
}
