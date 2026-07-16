import { Container } from "../client/Layout";

export default function BlogHero() {
  return (
    <section className="relative overflow-hidden border-b bg-gradient-to-b from-primary/5 via-white to-white">
      <Container className="py-15 text-center">
        
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
            Our Blog
          </span>

          <h1 className="mt-6 text-4xl font-black leading-tight text-slate-900 md:text-6xl">
            Expert Insights &
            <span className="text-primary"> Practical Guides</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Discover expert articles on Vastu, Astrology, Spiritual Healing,
            and practical life guidance to help you make informed decisions.
          </p>
        
 </Container>

    </section>
  );
}