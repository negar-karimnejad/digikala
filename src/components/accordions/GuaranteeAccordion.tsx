"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { commonQuestions } from "@/data/data";
import { ChevronDown } from "lucide-react";

export default function GuaranteeAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {commonQuestions.map((question, index) => (
        <AccordionItem value={`item-${index + 1}`} key={index}>
          <AccordionTrigger className="text-neutral-900 py-6 text-right text-xs lg:text-sm leading-7 font-irsansb">
            {question.q}
            <ChevronDown className="h-4 w-4 text-neutral-600 dark:text-neutral-200 shrink-0 transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent className="text-neutral-500 text-base leading-7">
            {question.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
