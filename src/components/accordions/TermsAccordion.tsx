"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { terms } from "@/data/data";
import { ChevronDown } from "lucide-react";

export default function TermsAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {terms.map((question, index) => (
        <AccordionItem value={`item-${index + 1}`} key={index}>
          <AccordionTrigger className="text-neutral-900 py-6 text-right leading-7 text-sm font-irsansb">
            {question.q}
            <ChevronDown className="h-4 w-4 text-neutral-600 dark:text-neutral-50 shrink-0 transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent className="text-neutral-700 dark:text-neutral-400 text-xs leading-7">
            {question.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
