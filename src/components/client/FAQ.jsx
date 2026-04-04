import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "./Container";
import TitleBorder from "../ui/custom/TitleBorder";
  const defaultFaqs = [
    {
      id: "item-1",
      question: "How can I book a Puja with Pandit Ji?",
      answer: "You can book a puja by selecting your desired service and choosing an available time slot through our 'Book Now' button. Our team will then reach out to confirm the details."
    },
    {
      id: "item-2",
      question: "Are consultations available online?",
      answer: "Yes, Pandit Ji provides Vedic consultations and Astrology readings via video calls for devotees worldwide, ensuring spiritual guidance no matter where you are."
    },
    {
      id: "item-3",
      question: "What items do I need to prepare for a Havan?",
      answer: "A complete list of Samagri will be provided to you 2-3 days before the ceremony. We can also arrange the necessary items upon request for your convenience."
    }
  ];

export default function FAQ({ 
  title = "Frequently Asked Questions", 
  items = defaultFaqs 
}) {

  return (
    <section className="py-20 bg-theme-warm" id="faq">
      <Container classes="mx-auto px-4">
        
       
        <div className="text-center mb-16">
          <h2 className="text-black dark:text-white text-3xl md:text-4xl font-sans mb-4">
            Frequently Asked Questions
          </h2>
          <TitleBorder />
        </div>

        {/* Accordion - Width controlled on Desktop with max-w-[850px] */}
        <Accordion 
          type="single" 
          collapsible 
          className="w-full max-w-[850px] mx-auto space-y-4"
        >
          {items.map((faq) => (
            <AccordionItem 
              key={faq.id} 
              value={faq.id} 
              className="bg-white dark:bg-zinc-900 rounded-xl border border-saffron/10 shadow-sm overflow-hidden"
            >
              {/* Question: Simple Sans font, Bold weight */}
              <AccordionTrigger className="text-left  p-5 md:p-7 hover:no-underline font-sans text-zinc-600 dark:text-white transition-all hover:text-saffron text-base md:text-lg leading-normal">
                {faq.question}
              </AccordionTrigger>
              
              {/* Answer: Simple Sans font, Regular weight */}
              <AccordionContent className="px-5 md:px-7 pb-6 font-sans text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed border-t border-gray-50 dark:border-zinc-800 pt-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}