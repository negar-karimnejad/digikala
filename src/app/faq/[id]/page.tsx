import FaqCategories from "@/components/faq/FaqCategories";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MobileStickyHeader from "@/components/ui/MobileStickyHeader";
import { faqCategories } from "@/data/data";
import { ChevronDown } from "lucide-react";
import { Metadata } from "next";

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}): Promise<Metadata> {
  const category = faqCategories.find((category) => category.id === id);

  return {
    title: category.title,
  };
}

export default function FagCategory({
  params: { id },
}: {
  params: { id: string };
}) {
  const category = faqCategories.find((category) => category.id === id);

  return (
    <div className="pb-14">
      <MobileStickyHeader />
      {/* Hero */}
      <div className="relative h-52 bg-gradient-to-b from-neutral-200 to-white dark:from-neutral-700 dark:to-neutral-950">
        <div className="grayscale w-full bg-[url('/nav-links-svg.svg')] h-2/3 opacity-10 dark:opacity-60"></div>
        <div className="absolute top-10 w-full right-0 left-0 mx-auto flex flex-col items-center justify-center">
          <div className="flex w-14 h-14 items-center bg-white dark:bg-sky-950 justify-center rounded-full">
            <span className="text-neutral-400">{category.icon}</span>
          </div>
          <h4 className="mt-10 mb-3 font-irsansb text-lg dark:text-white">
            {category.title}
          </h4>
        </div>
      </div>

      <div className="px-4 lg:px-20">
        {/* Common Questions */}
        <div>
          <Accordion type="single" collapsible className="w-full">
            {category.questions.map((question, index) => (
              <AccordionItem value={`item-${index + 1}`} key={index}>
                <AccordionTrigger className="text-neutral-900 py-6 text-right text-xs lg:text-sm leading-7 font-irsansb">
                  {question.q}
                  <ChevronDown className="h-4 w-4 text-neutral-600 dark:text-neutral-200 shrink-0 transition-transform duration-200" />
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 dark:text-neutral-400 text-base leading-7">
                  {question.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        {/* Faq Categories */}
        <div className="mt-10">
          <FaqCategories />
        </div>
      </div>
    </div>
  );
}
