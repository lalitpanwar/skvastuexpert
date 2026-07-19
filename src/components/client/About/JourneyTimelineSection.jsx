import Image from "next/image";

const timeline = [
  {
    year: "2001",
    title: "The Beginning",
    description:
      "Started the journey with a vision to help families create balanced and harmonious living spaces through authentic Vastu principles.",
    image: "/images/about/journey-1.jpg",
  },
  {
    year: "2008",
    title: "Growing Trust",
    description:
      "Successfully guided more than 1,000 homeowners and businesses with practical Vastu consultation.",
    image: "/images/about/journey-2.jpg",
  },
  {
    year: "2016",
    title: "Across India",
    description:
      "Expanded consultations to residential, commercial, industrial and office projects across multiple cities.",
    image: "/images/about/journey-3.jpg",
  },
  {
    year: "Today",
    title: "5000+ Happy Clients",
    description:
      "Continuing to help people create positive spaces that inspire health, prosperity and peace.",
    image: "/images/about/journey-4.jpg",
  },
];

export default function JourneyTimelineSection() {
  return (
    <section className="bg-[#faf9f6] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-24 text-center">
          <span className="text-sm uppercase tracking-[0.35em] text-teal-700">
            Our Journey
          </span>

          <h2 className="mt-5 text-5xl font-bold text-zinc-900">
            Milestones That
            <br />
            Define Our Story
          </h2>
        </div>

        <div className="space-y-32">

          {timeline.map((item, index) => (
            <div
              key={item.year}
              className={`grid items-center gap-16 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-3xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Text */}
              <div>
                <span className="text-7xl font-black text-stone-200">
                  {item.year}
                </span>

                <h3 className="mt-5 text-3xl font-bold text-zinc-900">
                  {item.title}
                </h3>

                <div className="my-6 h-1 w-16 rounded-full bg-amber-500" />

                <p className="max-w-xl text-lg leading-9 text-zinc-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}