import {
  Compass,
  Building2,
  Home,
  Map,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
export default function QuickServiceHero(){

    return(
        <>
                {/* QUICK SERVICE BAR */}
        <div className="mt-12 relative z-20">
          <div className="bg-white p-2 rounded-[2rem] md:rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
            <div className="flex md:grid md:grid-cols-4 gap-2 overflow-x-auto no-scrollbar snap-x snap-mandatory px-2">
              <QuickService
                Icon={Home}
                title="Home Vastu"
                desc="Peace & Harmony"
                href="#"
              />

              <QuickService
                Icon={Building2}
                title="Office Vastu"
                desc="Business Growth"
                href="#"
              />

              <QuickService
                Icon={Map}
                title="Plot Vastu"
                desc="Land Selection"
                href="#"
              />

              <QuickService
                Icon={Compass}
                title="Online Analysis"
                desc="Floor Plan Check"
                href="#"
              />
            </div>
          </div>
         </div>{/* end Quick Service */}
        </>
    )
}

function QuickService({ Icon, title, desc, href }) {
  return (
    <Link
      href={href}
      className="min-w-[180px] md:min-w-0 flex-shrink-0 snap-center flex items-center gap-3 p-3 rounded-2xl md:rounded-full transition-all hover:bg-secondary/5 group"
    >
      <div className="p-2 rounded-xl md:rounded-full bg-secondary/10 text-primary">
        <Icon size={18} />
      </div>

      <div className="flex-1">
        <h4 className="font-bold text-sm mb-0.5 text-slate-900 leading-none">
          {title}
        </h4>

        <p className="text-[9px] font-bold uppercase tracking-normal opacity-70 text-slate-400">
          {desc}
        </p>
      </div>

      <ArrowRight
        size={12}
        className="mr-1 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0"
      />
    </Link>
  );
}