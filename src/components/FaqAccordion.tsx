import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface Faq {
  q: string;
  a: string;
}

const FaqAccordion = ({ faqs, idPrefix = "faq" }: { faqs: Faq[]; idPrefix?: string }) => (
  <Accordion type="single" collapsible className="w-full">
    {faqs.map((faq, i) => (
      <AccordionItem key={`${idPrefix}-${i}`} value={`${idPrefix}-${i}`} className="border-border">
        <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary">
          {faq.q}
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground leading-relaxed">
          {faq.a}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

export default FaqAccordion;
