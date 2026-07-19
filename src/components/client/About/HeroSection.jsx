import Image from "next/image";

export default function AboutIntro() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f8f7f4]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/about/about-banner.jpg"
          alt="Acharya Shiv Kumar Sharma"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="mx-auto max-w-5xl px-6 text-center text-white">
          <p className="mb-6 text-sm uppercase tracking-[0.5em] text-white/80">
            About Us
          </p>

          <h1 className="text-5xl font-light leading-tight md:text-7xl">
            25 Years of
            <br />
            Transforming
            <span className="block font-semibold">
              Homes & Workspaces
            </span>
          </h1>

          <div className="mx-auto my-10 h-px w-24 bg-amber-400" />

          <p className="mx-auto max-w-2xl text-lg leading-9 text-white/90">
            Every property has its own energy.
            Our role is not to change your destiny,
            but to create an environment where
            positivity, harmony and growth naturally flourish.
          </p>

          <div className="mt-20 animate-bounce">
            <span className="text-sm uppercase tracking-[0.4em]">
              Scroll to Discover
            </span>

            <div className="mt-4 flex justify-center">
              <div className="h-12 w-[2px] bg-white/70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}