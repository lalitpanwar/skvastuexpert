"use client";

import Gallery from "@/components/gallery/Gallery";

export default function GallerySection({ images }) {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20 max-w-3xl">
          <span className="text-sm uppercase tracking-[0.35em] text-teal-700">
            Moments That Define Our Journey
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-zinc-900">
            Every Visit,
            <br />
            Every Consultation,
            <br />
            Every Transformation.
          </h2>

          <div className="mt-8 h-1 w-20 rounded-full bg-amber-500" />

          <p className="mt-8 text-lg leading-9 text-zinc-600">
            Every project tells a unique story. From site inspections and
            compass analysis to client meetings and completed spaces, these
            moments reflect our journey of creating balanced environments.
          </p>
        </div>

        <Gallery images={images} />

      </div>
    </section>
  );
}