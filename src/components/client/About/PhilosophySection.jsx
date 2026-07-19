export default function PhilosophySection() {
  return (
    <section className="relative overflow-hidden bg-[#111111] text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center justify-center px-6 text-center">

        <span className="mb-8 text-xs uppercase tracking-[0.45em] text-amber-400">
          Our Philosophy
        </span>

        <h2 className="max-w-5xl text-5xl font-light leading-tight md:text-7xl">
          We don't believe
          <br />
          in fear.
        </h2>

        <div className="my-12 h-px w-24 bg-amber-400" />

        <h3 className="max-w-5xl text-5xl font-semibold leading-tight md:text-7xl">
          We believe
          <br />
          in balance.
        </h3>

        <p className="mt-16 max-w-3xl text-lg leading-9 text-zinc-300">
          Every property has its own rhythm and energy.
          Our responsibility is to understand that balance and
          recommend practical Vastu solutions that support
          healthier living, peaceful relationships and sustainable success.
        </p>

      </div>
    </section>
  );
}