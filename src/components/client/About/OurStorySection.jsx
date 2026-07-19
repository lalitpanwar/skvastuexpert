import Image from "next/image";

export default function OurStorySection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-full w-full rounded-3xl border border-amber-300" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/about/our-story.jpg"
                alt="Our Story"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-8 rounded-2xl bg-white p-6 shadow-xl">
              <h3 className="text-4xl font-bold text-teal-700">25+</h3>
              <p className="mt-1 text-sm text-zinc-500">
                Years of Experience
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-teal-700">
              Our Journey
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-zinc-900 md:text-5xl">
              More Than Vastu...
              <br />
              It's About Creating
              Better Living Spaces.
            </h2>

            <div className="mt-8 h-1 w-20 rounded-full bg-amber-400" />

            <p className="mt-8 text-lg leading-9 text-zinc-600">
              Every home, office and commercial property tells a story.
              Over the last two decades, Acharya Shiv Kumar Sharma has
              worked with thousands of families and businesses to
              understand those stories and create spaces that support
              peace, prosperity and positive growth.
            </p>

            <p className="mt-6 text-lg leading-9 text-zinc-600">
              Our consultations are based on practical observation,
              traditional Vastu principles and years of real-world
              experience—not fear, myths or unnecessary remedies.
            </p>

            <blockquote className="mt-10 border-l-4 border-teal-700 pl-6 italic text-2xl leading-relaxed text-zinc-800">
              "A balanced space creates a balanced life."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}