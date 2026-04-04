import Image from 'next/image';
import React from 'react';


const FeaturedIn = ({ className = "" }) => {
  const line1 = ["hindustan", "jagran", "mpanchang", "astrosage"];
  const line2 = ["astroyogi",  "myjyotish", "ganeshaspeaks" ];

  return (
    <div className={`w-full py-10 overflow-hidden bg-white/50 ${className}`}>
      <div className="max-w-screen-xl mx-auto px-4 mb-6">
         <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold text-center">
           Recognized & Featured In
         </p>
      </div>

      <div className="flex flex-col gap-8 relative">
        {/* LINE 1: Left to Right */}
        <div className="relative flex overflow-hidden">
          <div className="animate-ltr gap-16 items-center">
            {[...line1, ...line1, ...line1].map((logo, i) => (
<span key={i} className="relative w-32 h-16 flex-shrink-0 px-4">
  <Image 
    src={`/images/featured-logo/${logo}.jpg`} 
    alt={logo}
    fill 
    className="object-contain transition-all" 
  />
</span>
            ))}
          </div>
        </div>

        {/* LINE 2: Right to Left */}
        <div className="relative flex overflow-hidden">
          <div className="animate-rtl gap-16 items-center">
            {[...line2, ...line2, ...line2].map((logo, i) => (
             
                 <span key={i} className="relative w-32 h-16 flex-shrink-0 px-4 ">
  <Image 
    src={`/images/featured-logo/${logo}.jpg`} 
    alt={logo}
    fill 
    className="object-contain transition-all" 
  />
</span>
            ))}
          </div>
        </div>

        {/* Premium Edge Fades */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>
      </div>
    </div>
  );
};

export default FeaturedIn;