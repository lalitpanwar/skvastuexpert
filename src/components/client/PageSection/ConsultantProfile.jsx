import React from 'react';

const defaultData = {
  tag: "Senior Vastu Expert",
  name: "Shiv Kumar Sharma",
  image: "/images/acharya-shivkumar-sharma.jpg",
  experience: "15+",
  bio: `Specializing in "Siddha Vastu," Pandit Ji has transformed over 5,000 households across India and abroad. 
        His unique approach combines traditional Vedic scriptures with a practical understanding of modern 
        construction constraints.`,
  stats: [
    { value: "5,000+", label: "Homes Harmonized" },
    { value: "98%", label: "Success Rate" }
  ],
  quote: "My goal is not just to correct directions, but to invite divinity into your everyday living space."
};

export default function ConsultantProfile({ data = defaultData }) {
  return (
    <section className="py-24 px-6 md:px-20 lg:px-40 flex flex-col lg:flex-row items-center gap-16">
      {/* Left Column: Image & Experience */}
      <div className="relative w-full lg:w-2/5">
        <div 
          className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-cover bg-center"
          style={{ backgroundImage: `url('${data.image}')` }}
          data-alt={`Portrait of ${data.name}`}
        />
        <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-xl shadow-lg">
          <p className="text-white text-3xl font-black">{data.experience}</p>
          <p className="text-white text-xs  uppercase tracking-widest">Years of Experience</p>
        </div>
      </div>

      {/* Right Column: Content */}
      <div className="lg:w-3/5">
        <span className="text-primary  tracking-widest uppercase text-sm">
          {data.tag}
        </span>
        <h2 className="text-4xl  mt-4 mb-6">{data.name}</h2>
        <p className="text-[#5c503f] dark:text-[#c7baa8] text-lg leading-relaxed mb-6">
          {data.bio}
        </p>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {data.stats.map((stat, idx) => (
            <div key={idx} className="border-l-4 border-primary pl-4">
              <p className="text-2xl ">{stat.value}</p>
              <p className="text-sm text-[#8a7960]">{stat.label}</p>
            </div>
          ))}
        </div>
        
        {/* Quote */}
        <p className="italic text-[#8a7960]">"{data.quote}"</p>
      </div>
    </section>
  );
}