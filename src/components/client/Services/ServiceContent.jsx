import Container from "../Layout/Container";

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
  
  {/* Mahatva (Importance) Section */}
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
    <h2 className="text-3xl md:text-4xl font-sans  text-royal-blue dark:text-white">
      {importanceTitle}
    </h2>
    <div className="w-20 h-1 bg-saffron mx-auto rounded-full"></div>
    
    {/* Humne yahan mapping ki hai taaki points alag-alag dikhein */}
    <div className="grid gap-4 mt-8">
      {importanceText.map((point, index) => (
        <p key={index} className="text-lg md:text-xl text-gray-600 dark:text-zinc-400 font-light italic">
          — {point}
        </p>
      ))}
    </div>
  </div>

{/* Vidhi Section - Minimal Single Line */}
<div className="relative pt-12">
  <h2 className="text-2xl md:text-3xl font-sans  mb-10 text-royal-blue dark:text-white">
    {vidhiTitle}
  </h2>

  {/* Horizontal Scroll for Mobile, Centered Flex for Desktop */}
  <div className="flex flex-nowrap md:flex-wrap items-center justify-center gap-4 overflow-x-auto pb-4 px-4 no-scrollbar">
    {vidhiText.map((step, index) => (
      <div key={index} className="flex items-center gap-4 flex-shrink-0">
        
        {/* Step Bubble */}
        <div className="flex items-center gap-3 bg-zinc-50 dark:bg-zinc-900/80 px-5 py-3 rounded-full border border-gray-100 dark:border-zinc-800 shadow-sm hover:border-saffron/50 transition-all">
          <span className="flex-shrink-0 w-7 h-7 bg-saffron text-white text-xs  rounded-full flex items-center justify-center">
            {index + 1}
          </span>
          <span className="text-sm md:text-base text-gray-700 dark:text-zinc-300 whitespace-nowrap font-medium">
            {step.split(':')[0]} {/* Agar step "Dwar Puja: description" hai, toh sirf "Dwar Puja" dikhega */}
          </span>
        </div>

        {/* Connecting Arrow (Except last item) */}
        {index !== vidhiText.length - 1 && (
          <span className="hidden md:block text-saffron/30">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        )}
      </div>
    ))}
  </div>
</div>
</div>
      </Container>
    </section>
  );
}