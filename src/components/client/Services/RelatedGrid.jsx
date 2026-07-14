import Link from "next/link";
import Container from "../Layout/Container"; // Aapka reusable container
import { ArrowRight } from "lucide-react";

export default function RelatedGrid({
  title = "Popular Rituals",
  subtitle = "Sacred ceremonies curated for every life milestone",
  viewAllLink = "/services",
  rituals = [], // Array of { name, image, slug }
}) {
  // Default data agar props na bheje jayein
  const defaultRituals = [
    {
      title: "Vivah Pujan",
      image:
        "/images/puja/vivah.jpg",
      slug: "vivah-pujan",
    },
    {
      title: "Satyanarayan",
      image:
        "/images/puja/satyanarayan.jpg",
      slug: "satyanarayan",
    },
    {
      title: "Maha Mrityunjaya",
      image:
        "/images/puja/maha.jpg",
      slug: "maha-mrityunjaya",
    },
    {
      title: "Navgrah Shanti",
      image:
        "/images/puja/navgrah.png",
      slug: "navgrah-shanti",
    },
    {
      title: "Sundarkand",
      image:
        "/images/puja/sunderkand.jpeg",
      slug: "sundarkand",
    },
    {
      title: "Ganesh Puja",
      image:
        "/images/puja/ganesh.png",
      slug: "ganesh-puja",
    },
  ];

  const displayRituals = rituals.length > 0 ? rituals : defaultRituals;

  return (
    <section className="py-24 bg-white dark:bg-[#09090b]">
      <Container>
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-sans  text-royal-blue dark:text-white">
              {title}
            </h2>
            <p className="text-slate-500 dark:text-zinc-400 mt-2 text-lg">
              {subtitle}
            </p>
          </div>

          <Link
            href={viewAllLink}
            className="text-saffron  text-sm flex items-center gap-2 group hover:gap-3 transition-all"
            
          >
            VIEW ALL <ArrowRight size={20} />
          </Link>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {displayRituals.map((item, index) => (
            <Link
              key={index}
              href={`/puja/${item.slug}`}
              className="group flex flex-col items-center"
            >
              {/* Image Container */}
              <div className="aspect-square w-full rounded-lg overflow-hidden mb-4 relative shadow-md group-hover:shadow-2xl transition-all duration-500">
                <img
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  src={`/images/puja/${item.image}.jpg`}
                />
                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500"></div>
              </div>

              {/* Title */}
              <p className=" text-sm md:text-base tracking-wide text-royal-blue dark:text-zinc-200 group-hover:text-saffron transition-colors text-center">
                {item.title}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
