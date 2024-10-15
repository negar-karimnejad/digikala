"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowLeft, ChevronLeft, Headset, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function FloatingSupportButton() {
  const [isShowSupportModal, setIsShowSupportModal] = useState(false);

  const closeModal = () => setIsShowSupportModal(false);
  return (
    <div className="relative max-lg:hidden">
      <div className="cursor-pointer bg-rose-500 w-12 h-12 flex items-center justify-center z-40 rounded-full fixed bottom-8 right-10">
        {isShowSupportModal ? (
          <X className="text-white" onClick={closeModal} />
        ) : (
          <Headset
            className="text-white"
            onClick={() => setIsShowSupportModal(true)}
          />
        )}
        {isShowSupportModal && (
          <div className="absolute h-[28rem] bottom-12 w-96 right-0 border border-rose-600 bg-white dark:bg-neutral-800 rounded-xl overflow-hidden">
            <div className="flex justify-between items-center p-4 bg-rose-500 text-white">
              <p className="text-lg font-irsansb">پشتیبانی آنلاین</p>
              <ArrowLeft onClick={closeModal} />
            </div>
            <div className="h-96 overflow-y-auto">
              <div className="p-5">
                <h2 className="font-irsansb text-lg mb-4">سلام👋👋</h2>
                <p className="text-[15px] leading-6 text-neutral-900 dark:text-neutral-100">
                  اینجا می‌توانید تعدادی از پرسش های متداول را ببینید یا در صورت
                  تمایل با ما آنلاین گفتگو کنید!
                </p>
              </div>
              <Accordion type="single" collapsible className="w-full px-5">
                <AccordionItem
                  value={"item-1"}
                  className="border rounded-xl px-3 py-2 my-2 dark:border-neutral-600"
                >
                  <AccordionTrigger className="text-[15px] text-right leading-6 hover:no-underline text-neutral-800 dark:text-neutral-100">
                    چگونه میتوانم یک پروفایل ایجاد کنم؟
                  </AccordionTrigger>
                  <AccordionContent className="border-t text-sm dark:border-t-neutral-700 text-neutral-600 dark:text-neutral-300 pt-4 leading-7">
                    در وب سایت روی گزینه &apos;ثبت نام&apos; کلیک کنید. میتوانید
                    با استفاده از شماره موبایل ثبت نام خود را انجام دهید. (کد
                    فعال سازی برایتان پیامک میشود .) بعد از وارد نمودن کد
                    فعالسازی ، ثبت نام انجام می شود. سپس روی گزینه تکمیل اطلاعات
                    کلیک و اطلاعات خود را تکمیل نمایید.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value={"item-2"}
                  className="border rounded-xl px-3 py-2 my-2 dark:border-neutral-600"
                >
                  <AccordionTrigger className="text-[15px] text-right leading-6 hover:no-underline text-neutral-800 dark:text-neutral-100">
                    چطور در دیجی کالا سفارش خود را ثبت کنم ؟
                  </AccordionTrigger>
                  <AccordionContent className="border-t text-sm dark:border-t-neutral-700 text-neutral-600 dark:text-neutral-300 pt-4 leading-7">
                    بعد از ورود به پروفایل ، کالای مدنظر خود را به سبد خرید
                    اضافه کنید ، پس از انتخاب آدرس میتوانید نوع پرداخت خود را
                    انتخاب کنید.بعد از اتمام ثبت سفارش ، سیستم کد سفارش شما را
                    نمایش خواهد داد.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value={"item-3"}
                  className="border rounded-xl px-3 py-2 my-2 dark:border-neutral-600"
                >
                  <AccordionTrigger className="text-[15px] text-right leading-6 hover:no-underline text-neutral-800 dark:text-neutral-100">
                    <span className="ml-6">
                      کالایی را که در طرح پیشنهاد شگفت انگیز می باشد می توان با
                      تعداد بیش از یک عدد خریداری کرد؟
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="border-t text-sm dark:border-t-neutral-700 text-neutral-600 dark:text-neutral-300 pt-4 leading-7">
                    به دلیل اینکه طرح پیشنهاد شگفت انگیز یک طرح تشویقی خرید است،
                    دیجی‌کالا تعهدی در قبال تعدادی ندارد و در صورتی که امکان
                    فروش بیشتر از یک عدد وجود داشته باشد، هماهنگی‌های لازم با
                    مشتری انجام خواهد شد.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="w-ull my-5 flex items-center justify-center">
                <Link
                  href="/faq/contact-us"
                  className="flex gap-2 rounded-full px-4 py-3 bg-rose-500 text-white"
                >
                  تماس با ما <ChevronLeft />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
