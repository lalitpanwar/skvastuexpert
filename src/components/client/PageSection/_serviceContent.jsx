import Container from "../Container";

export default function ServiceContent({ 
  importanceTitle = "Importance of Puja (Mahatva)", 
  importanceText =`Satyanarayan Pooja is one of the most auspicious Hindu rituals performed to seek Lord Vishnu’s blessings. It is a sacred practice that emphasizes truth, devotion, and gratitude. The name Satyanarayan is derived from:Satya – Truth
Nara – Human
Ayan – Divine Abode
This pooja is widely performed in Hindi households on Poornima (Full Moon), Ekadashi, Sankranti, and special occasions like Griha Pravesh (Housewarming), Birthdays, Anniversaries, and Business Openings. Performing this pooja with faith and dedication is believed to remove obstacles, bring financial stability, and invite prosperity into one's life.`, 
  vidhiTitle = "Puja Vidhi (Process)", 
  vidhiText ="Hamare pandit ji shuddh mantra path aur vedic vidhi ke sath pooja karate hain — sankalp, kalashsthapna, havan aur aarti ke sath."
}) {
  return (
    <section className="py-24 gradient-mesh dark:bg-[#09090b] relative overflow-hidden">
      {/* Background Decor (Optional: Premium touch ke liye) */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-saffron/20 to-transparent"></div>
      
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-20">
          
          {/* Mahatva Section */}
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-3xl md:text-4xl font-sans  text-royal-blue dark:text-white">
              {importanceTitle}
            </h2>
            <div className="w-20 h-1 bg-saffron mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-zinc-400 leading-relaxed font-light italic">
              {importanceText}
            </p>
          </div>

          {/* Vidhi Section */}
          <div className="relative pt-12">
            {/* Elegant Divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-4">
               <span className="w-12 h-[1px] bg-saffron/20"></span>
               <div className="w-2 h-2 rounded-full bg-saffron/40"></div>
               <span className="w-12 h-[1px] bg-saffron/20"></span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-sans  mb-8 text-royal-blue dark:text-white">
              {vidhiTitle}
            </h2>
            <div className="bg-zinc-50 dark:bg-zinc-900/50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 dark:border-zinc-800">
              <p className="text-lg md:text-xl text-gray-700 dark:text-zinc-300 leading-loose">
                {vidhiText}
              </p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}