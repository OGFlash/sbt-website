import { useState, useEffect, useCallback } from "react";
import { heroSlides } from "../data/hero";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % heroSlides.length),
    []
  );

  const prev = () =>
    setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length);

  // Auto-advance every 8 seconds
  useEffect(() => {
    const id = setInterval(next, 8000);
    return () => clearInterval(id);
  }, [next]);

  const slide = heroSlides[current];

  return (
    <div className="relative w-full h-[520px] md:h-[620px] overflow-hidden bg-navy-dark">
      {/* Slides */}
      {heroSlides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-navy/60" />
        </div>
      ))}

      {/* Caption */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        <span className="text-sky text-lg md:text-xl font-bold uppercase tracking-widest mb-3">
          Small Business Technologies
        </span>
        <h2 className="text-white text-3xl md:text-5xl font-bold max-w-3xl drop-shadow-lg">
          {slide.title}
        </h2>
        <p className="text-gray-200 mt-4 text-base md:text-lg max-w-2xl">
          {slide.caption}
        </p>
        <a href="/contact" className="btn-primary mt-8">
          Get in Touch
        </a>
      </div>

      {/* Prev / Next */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition"
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === current ? "bg-sky" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
