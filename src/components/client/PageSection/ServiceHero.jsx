import Link from "next/link";
import { Phone, Verified, Sparkles, Box, CheckCircle2 } from "lucide-react";
import Container from "../Container";
import Booking from "@/app/(client)/booking/page";

export default function ServiceHero({
  category = "Auspicious Beginning",
  title = "Griha Pravesh Puja",
  price = "5,100",
  description = "Griha Pravesh Puja naya ghar lene ke baad ki jaane wali ek pavitra vedic puja hai jo sukh, shanti aur samriddhi ke liye ki jati hai.",
  mainImage = "/images/griha-pravesh.jpg",
  panditName = "Acharya ShivKumar Sharma",
  panditExp = "15+ years experience • Vedic Rituals Expert",
  panditImage = "/images/acharya-shivkumar-sharma.jpg",
  bookingLink = "/book",
  phoneNo = "+919876543210",
}) {
  return (
    <section className="pb-16  dark:bg-[#09090b]">
        <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Image Side */}
      <div className="relative group lg:sticky lg:top-32">
        <div className="absolute -inset-1 bg-gradient-to-r from-saffron to-amber-200 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        <img
          alt={title}
          className="relative rounded-xl w-full h-[500px] object-cover shadow-2xl"
          src={mainImage}
        />
      </div>

      {/* Content Side */}
      <div className="space-y-6">
        <div>
          <span className="text-saffron  tracking-widest uppercase text-sm">
            {category}
          </span>
          <h1 className="text-4xl md:text-6xl font-sans font-semibold mt-2 leading-tight text-royal-blue dark:text-white">
            {title}
          </h1>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-sm  md:text-2xl font-semibold text-gray-800 dark:text-zinc-200">
              Starting from ₹{price}
            </span>
            <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-xs  uppercase">
              Best Value
            </span>
          </div>
        </div>

        <p className="text-gray-600 dark:text-zinc-400 text-lg leading-relaxed italic border-l-4 border-saffron/30 pl-4">
          "{description}"
        </p>

        {/* Pandit Profile Card */}
        <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-gray-100 dark:border-zinc-800 flex items-center gap-4 shadow-sm">
          <img
            alt={panditName}
            className="w-16 h-16 rounded-full object-cover border-2 border-saffron"
            src={panditImage}
          />
          <div>
            <h4 className=" text-lg dark:text-white">{panditName}</h4>
            <p className="text-sm text-gray-500 dark:text-zinc-500">
              {panditExp}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link
            href="/booking"
            className="bg-saffron text-royal-blue px-8 py-4 rounded-xl  hover:shadow-xl transition-all flex-1 text-center hover:scale-[1.02] active:scale-95"
          >
            Book {title}
          </Link>
          <Link
            href={`tel:${phoneNo}`}
            className="border-2 border-saffron text-saffron px-8 py-4 rounded-xl  hover:bg-saffron/5 transition-all flex-1 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Phone size={20} />
            Call Pandit Ji
          </Link>
        </div>

        {/* Trust Markers */}
        <div className="flex flex-wrap gap-6 pt-4 text-sm font-medium text-gray-500 dark:text-zinc-500">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-saffron" size={18} />
            Verified Pandits
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="text-saffron" size={18} />
            Vedic Vidhi
          </div>
          <div className="flex items-center gap-2">
            <Box className="text-saffron" size={18} />
            Samagri Included
          </div>
        </div>
      </div>
</div>
</Container>
    </section>
  );
}
