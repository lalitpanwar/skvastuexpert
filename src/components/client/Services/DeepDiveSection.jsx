import React from 'react';
// 💡 Assignment को हटाकर ClipboardList इस्तेमाल किया है
import { CheckCircle, ClipboardList, FileText, Map as MapIcon, PhoneCall } from 'lucide-react';
import { Button } from "@/components/ui/button";

// 💡 Default Data for Vastu
const defaultData = {
  leftTitle: "Why Home Vastu Matters",
  leftDesc: "Vastu Shastra is the ancient Indian science of architecture and placement. By aligning your living space with the five elements—Earth, Water, Fire, Air, and Space—you create a resonant environment that supports your physical and mental well-being.",
  benefits: [
    { title: "Optimized Energy Flow", desc: "Balance 'Prana' to eliminate lethargy and stagnation." },
    { title: "Health & Longevity", desc: "Correct placements for kitchen and bedrooms reduce stress-related ailments." },
    { title: "Directional Wisdom", desc: "Align entrances and rooms with magnetic poles for maximum prosperity." }
  ],
  rightTitle: "What You Get",
  deliverables: [
    { 
      title: "Detailed Report", 
      desc: "Comprehensive 15-page PDF document detailing every room's analysis.",
      icon: <FileText className="text-orange-500" /> 
    },
    { 
      title: "Custom Remedy Map", 
      desc: "A graphical overlay for your floor plan indicating precise remedy spots.",
      icon: <MapIcon className="text-orange-500" /> 
    },
    { 
      title: "30-Min Follow-up Call", 
      desc: "Personal call with Pandit Ji to clarify doubts and implementation steps.",
      icon: <PhoneCall className="text-orange-500" /> 
    }
  ]
};

export default function DeepDiveSection({ 
  data = defaultData 
}) {
  return (
    <section className="py-20 px-6 md:px-20 lg:px-40 bg-[#f8f5f2] dark:bg-[#1a140c]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Column: Benefits */}
        <div>
          <h2 className="text-3xl md:text-4xl  mb-6 text-slate-900 dark:text-white">
            {data.leftTitle}
          </h2>
          <p className="text-lg text-[#5c503f] dark:text-[#c7baa8] mb-8 leading-relaxed">
            {data.leftDesc}
          </p>
          
          <ul className="space-y-6">
            {data.benefits.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <CheckCircle className="text-orange-500 mt-1 shrink-0" size={24} />
                <div>
                  <p className=" text-slate-900 dark:text-white">{item.title}</p>
                  <p className="text-sm text-[#8a7960] dark:text-[#b0a08a]">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Features Card */}
        <div className="bg-white dark:bg-[#2d2417] p-8 lg:p-12 rounded-3xl shadow-2xl border border-orange-100 dark:border-orange-900/20">
          <h2 className="text-2xl  mb-8 flex items-center gap-3 text-slate-900 dark:text-white">
            {/* 💡 यहाँ ClipboardList का उपयोग किया है */}
            <ClipboardList className="text-orange-500" />
            {data.rightTitle}
          </h2>
          
          <div className="space-y-8">
            {data.deliverables.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="size-12 rounded-2xl bg-orange-500/10 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className=" text-lg text-slate-900 dark:text-white">{item.title}</h4>
                  <p className="text-sm text-[#8a7960] dark:text-[#b0a08a]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Button className="w-full mt-10 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white py-7 rounded-xl  text-lg shadow-lg border-none transition-all hover:scale-[1.02]">
            Start Consultation
          </Button>
        </div>

      </div>
    </section>
  );
}