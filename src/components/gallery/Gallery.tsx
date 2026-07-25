"use client";

import Image from "next/image";
import { useEffect, useState, type SVGProps } from "react";
import { createPortal } from "react-dom";
import type { GalleryImage } from "@/config/gallery";

function GalleryIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5-9 9" />
    </svg>
  );
}

function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function ChevronIcon({
  direction,
  ...props
}: SVGProps<SVGSVGElement> & { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d={direction === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"} />
    </svg>
  );
}

interface GalleryButtonProps {
  images: GalleryImage[];
  propertyName: string;
}

export function GalleryButton({ images, propertyName }: GalleryButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
      if (event.key === "ArrowRight") {
        setActiveIndex((i) => (i + 1) % images.length);
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((i) => (i - 1 + images.length) % images.length);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, images.length]);

  function showNext() {
    setActiveIndex((i) => (i + 1) % images.length);
  }

  function showPrev() {
    setActiveIndex((i) => (i - 1 + images.length) % images.length);
  }

  const active = images[activeIndex];

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setActiveIndex(0);
          setIsOpen(true);
        }}
        className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-white ring-1 ring-inset ring-white/30 backdrop-blur-sm transition hover:bg-white/20"
      >
        <GalleryIcon className="h-4 w-4" />
        Ver galería
      </button>

      {isOpen &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Galería de fotos de ${propertyName}`}
            className="fixed inset-0 z-50 flex flex-col bg-brand-navy-dark/95 backdrop-blur-sm"
            onClick={(event) => {
              if (event.target === event.currentTarget) setIsOpen(false);
            }}
          >
            <div className="flex items-center justify-between px-4 py-4 sm:px-6">
              <p className="text-sm font-medium tabular-nums text-white/80">
                {activeIndex + 1} / {images.length}
              </p>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Cerrar galería"
                className="rounded-full p-2 text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                <CloseIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="relative flex flex-1 items-center justify-center px-2 pb-6 sm:px-6">
              <button
                type="button"
                onClick={showPrev}
                aria-label="Foto anterior"
                className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 sm:left-6 sm:p-3"
              >
                <ChevronIcon direction="left" className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>

              <div className="relative h-full w-full max-w-4xl">
                <Image
                  key={active.src}
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="(min-width: 768px) 80vw, 100vw"
                  className="object-contain"
                />
              </div>

              <button
                type="button"
                onClick={showNext}
                aria-label="Foto siguiente"
                className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 sm:right-6 sm:p-3"
              >
                <ChevronIcon direction="right" className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
