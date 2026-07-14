import React from 'react';
import Link from 'next/link';

const defaultServices = [
  { 
    title: "Home Vastu", 
    description: "Create a sanctuary of peace for your family.", 
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80",
    link: "/services/home-vastu" 
  },
  { 
    title: "Office Vastu", 
    description: "Boost productivity and corporate growth.", 
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80",
    link: "/services/office-vastu" 
  },
  { 
    title: "Vastu Remedies", 
    description: "Effective solutions without demolition.", 
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80",
    link: "/services/vastu-remedies" 
  },
  { 
    title: "No-Demolition", 
    description: "Smart Vedic corrections for modern flats.", 
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80",
    link: "/services/no-demolition-vastu" 
  },
];

const ServiceGrid = ({ 
  tag = "Our Services", 
  title = "Core Offerings", 
  description = "Specialized guidance for every type of space using traditional principles.", 
  items = defaultServices 
}) => {
  return (
    <section className="max-w-7xl mx-auto py-12 md:py-20 px-4 md:px-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4">
        <div className="max-w-xl">
          <p className="text-orange-500  uppercase tracking-widest text-[10px] md:text-sm mb-2">
            {tag}
          </p>
          <h2 className="text-slate-900 dark:text-white text-2xl md:text-5xl font-extrabold tracking-tight">
            {title}
          </h2>
        </div>
        <p className="text-slate-500 dark:text-slate-400 max-w-xs text-xs md:text-sm border-l-2 border-orange-500 pl-4 hidden sm:block">
          {description}
        </p>
      </div>

      {/* Grid Section - Updated for 2 columns on Mobile */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        {items.map((item, index) => (
          <Link 
            key={index} 
            href={item.link || "#"} 
            className="group relative overflow-hidden rounded-xl md:rounded-2xl aspect-[3/4] cursor-pointer shadow-lg block"
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 transition-opacity duration-500 group-hover:from-orange-900/80"></div>
            
            {/* Background Image */}
            <img 
              src={item.image} 
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Content Area */}
            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6 z-20">
              {/* Mobile text size is smaller (text-lg) */}
              <p className="text-white text-sm md:text-xl  leading-tight">
                {item.title}
              </p>
              
              {/* Description - Hidden on small mobile to keep it clean, shown on hover/desktop */}
              <p className="text-white/80 text-[10px] md:text-sm mt-1 md:mt-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out hidden md:block">
                {item.description}
              </p>

              {/* Animated Underline */}
              <div className="w-8 md:w-10 h-0.5 md:h-1 bg-orange-500 mt-2 md:mt-4 transition-all duration-500 group-hover:w-full"></div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServiceGrid;