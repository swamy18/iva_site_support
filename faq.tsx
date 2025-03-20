import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does IVA understand emotions?",
    answer: "IVA uses advanced natural language processing to analyze sentiment and context in conversations, allowing it to respond appropriately to emotional cues."
  },
  {
    question: "What languages does IVA support?",
    answer: "IVA supports multiple languages including English, Hindi, and Hinglish, making it accessible to a diverse user base."
  },
  {
    question: "Is my conversation with IVA private?",
    answer: "Yes, all conversations with IVA are end-to-end encrypted and handled in compliance with GDPR regulations."
  },
  {
    question: "How does IVA learn from conversations?",
    answer: "IVA uses machine learning to continuously improve its responses while maintaining user privacy and data protection standards."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
