import FaqCategories from "@/components/faq/FaqCategories";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import MobileStickyHeader from "@/components/ui/MobileStickyHeader";
import { commonQuestions } from "@/data/data";
import { ChevronDown, FileQuestion } from "lucide-react";

export default function Faq() {
  return (
    <div>
      <MobileStickyHeader />
      {/* Hero */}
      <div className="relative h-96 bg-gradient-to-b from-neutral-200 to-white dark:from-neutral-700 dark:to-neutral-950">
        <div className="grayscale w-full bg-[url('/nav-links-svg.svg')] h-2/3 opacity-10 dark:opacity-60"></div>
        <div className="absolute top-10 w-full right-0 left-0 mx-auto flex flex-col items-center justify-center">
          <div className="flex w-14 h-14 items-center bg-white dark:bg-sky-950 justify-center rounded-full">
            <FileQuestion size={22} className="text-sky-500" />
          </div>
          <h4 className="mt-10 mb-3 font-irsansb text-lg dark:text-white">
            موضوع پرسش شما چیست؟
          </h4>
          <p className="text-neutral-500 text-center dark:text-neutral-300 text-sm">
            موضوع موردنظرتان را جستجو کرده یا از دسته‌بندی زیر انتخاب کنید
          </p>
          <form className="mt-10">
            <Input
              type="text"
              placeholder="جستجوی موضوع"
              className="lg:w-[35rem] sm:w-96 py-6 w-80 dark:placeholder:text-neutral-600"
            />
          </form>
        </div>
      </div>

      <div className="px-4 lg:px-20">
        {/* Faq Categories */}
        <FaqCategories />
        {/* Common Questions */}
        <div className="py-14">
          <div className="flex flex-col justify-center items-center">
            <div className="flex w-14 h-14 items-center bg-sky-50 dark:bg-sky-950 justify-center rounded-full">
              <FileQuestion size={22} className="text-sky-500" />
            </div>
            <h3 className="mt-5 mb-10 font-irsansb text-lg">پرسش‌های متداول</h3>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {commonQuestions.map((question, index) => (
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
      </div>
    </div>
  );
}
