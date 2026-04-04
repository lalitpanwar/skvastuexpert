import { ShoppingBag, UserCheck, PackageCheck, Handshake } from "lucide-react";
import Container from "../Container";

export default function PujaChecklist({
  providedItems = [
    "Kalash, Nariyal, Dhaga, Kapoor",
    "Dhoop, Flowers, Ghee",
    "Puja Book, Rice, Haldi",
    "Janeu, Akshat, Supari",
  ],
  arrangedItems = [
    "Fresh Fruits",
    "Fresh Sweets (Prasad)",
    "Milk, Curd, Honey",
    "Deepam Oil or Extra Ghee",
  ],
}) {
  return (
    <section className="pb-20  dark:bg-[#09090b]/50">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1: Provided by us */}
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border border-gray-100 dark:border-zinc-800 shadow-xl relative overflow-hidden group">
            {/* Background Decor Icon */}
            <div className="absolute -top-4 -right-4 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
              <PackageCheck size={160} className="text-saffron" />
            </div>

            <h3 className="text-2xl font-sans  mb-8 flex items-center gap-4 text-royal-blue dark:text-white">
              <span className="bg-saffron/10 p-3 rounded-2xl">
                <ShoppingBag className="text-saffron" size={24} />
              </span>
              Puja Samagri (We Provide)
            </h3>

            <ul className="grid grid-cols-1 gap-4">
              {providedItems.map((item, index) => (
                <li key={index} className="flex items-start gap-4 text-gray-600 dark:text-zinc-400">
                  <span className="mt-2 w-2 h-2 bg-saffron rounded-full flex-shrink-0" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Arrange by Client */}
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border border-gray-100 dark:border-zinc-800 shadow-xl relative overflow-hidden group">
            {/* Background Decor Icon */}
            <div className="absolute -top-4 -right-4 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
              <Handshake size={160} className="text-saffron" />
            </div>

            <h3 className="text-2xl font-sans  mb-8 flex items-center gap-4 text-royal-blue dark:text-white">
              <span className="bg-saffron/10 p-3 rounded-2xl">
                <UserCheck className="text-saffron" size={24} />
              </span>
              What You Need to Arrange
            </h3>

            <ul className="grid grid-cols-1 gap-4">
              {arrangedItems.map((item, index) => (
                <li key={index} className="flex items-start gap-4 text-gray-600 dark:text-zinc-400">
                  <span className="mt-2 w-2 h-2 bg-saffron rounded-full flex-shrink-0" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </Container>
    </section>
  );
}