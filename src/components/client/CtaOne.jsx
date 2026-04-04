import React from "react";
import { CalendarCheck } from "lucide-react";
import Link from "next/link";

// title: Jo bada text dikhega
// buttonText: Button ke upar ka text
// onButtonClick: Agar aap koi function chalana chahte hain (optional)
export default function CTAOne({ 
  title = "Ready to start your spiritual journey with Pt. Shivkumar Sharma", 
  buttonText = "Book Your Consultation",
  onButtonClick 
}) {
  return (
    <section className="py-15 ">
      <div className="max-w-container px-6 md:px-12 mx-auto">
        <div className="bg-royal-blue dark:bg-zinc-900 border border-saffron/10 rounded-2xl py-8 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          
          {/* Text Side */}
          <div className="text-center md:text-left max-w-2xl">
            <h2 className="text-white dark:text-white text-2xl md:text-3xl font-sans  leading-tight">
              {title}
            </h2>
          </div>

          {/* Button Side */}
          <Link href="/"
            onClick={onButtonClick}
            className="whitespace-nowrap bg-marigold-gradient text-white px-8 md:px-10 py-4 rounded-xl  hover:brightness-110 transition-all shadow-lg hover:scale-[1.02] active:scale-95 flex items-center gap-3 text-sm md:text-base group"
          >
            {buttonText} 
            <CalendarCheck size={20} className="group-hover:rotate-12 transition-transform" />
          </Link>

        </div>
      </div>
    </section>
  );
}