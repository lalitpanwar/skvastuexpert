import Container from "../Container";

export default function ImageCarousel({ 
 title = "Moments of Divine Rituals",
  images = [
    "/images/carousel/puja.jpg",
    "/images/carousel/7.jpg",
    "/images/carousel/maha.jpg",
    "/images/carousel/vivah.jpg",
    "/images/carousel/pandit.png",
    "/images/carousel/6.jpg",
 ],
 bgColor = "bg-white dark:bg-[#09090b]" 
}) {
  return (
    <section className={`${bgColor} py-24 overflow-hidden`}>
<Container classes="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-sans  text-royal-blue dark:text-white mb-4 ">
          {title}
        </h2>
        <div className="h-1 w-20 bg-saffron mx-auto rounded-full"></div>
      </Container>
      {/* Full Width Seamless Slider */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-infinite-scroll w-max gap-0 hover:[animation-play-state:paused] cursor-pointer">
          
          {/* Pehla Group */}
          <div className="flex gap-0 shrink-0">
            {images.map((src, index) => (
              <img
                key={`g1-${index}`}
                alt="Divine Ritual"
                className="w-[300px] md:w-[450px] h-[250px] md:h-[350px] object-cover transition-all duration-700 hover:scale-105"
                src={src}
              />
            ))}
          </div>

          {/* Doosra Group (Seamless loop ke liye duplicate) */}
          <div className="flex gap-0 shrink-0">
            {images.map((src, index) => (
              <img
                key={`g2-${index}`}
                alt="Divine Ritual"
                className="w-[300px] md:w-[450px] h-[250px] md:h-[350px] object-cover transition-all duration-700 hover:scale-105"
                src={src}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}