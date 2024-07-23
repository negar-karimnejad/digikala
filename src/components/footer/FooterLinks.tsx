"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function FooterLinks() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const session = useSession();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!session?.data?.user) {
      toast.error("برای ثبت ایمیل، ابتدا باید وارد حساب کاربری خود شوید.");
    } else {
      toast.success("ایمیل شما با موفقیت ثبت شد.");
      setEmail("");
      setIsValidEmail(false);
    }
  };

  useEffect(() => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setIsValidEmail(true);
    } else if (!email) {
      setIsValidEmail(false);
    }
  }, [email]);
  return (
    <>
      <div className="max-lg:hidden flex w-full justify-between my-14">
        {links.map((link) => (
          <div key={link.id} className="w-4/12 ">
            <p className="text-neutral-700 mb-5 font-irsansb block dark:text-white">
              {link.title}
            </p>
            {link.links.map((item, index) => (
              <Link
                key={index}
                className="text-sm text-neutral-500 mb-4 block dark:text-gray-400"
                href="/newsroom"
              >
                {item}
              </Link>
            ))}
            {/* <Link
              className="text-sm text-neutral-500 mb-4 block dark:text-gray-400"
              href="/seller-introduction"
            >
              فروش در دیجی‌کالا
            </Link>
            <Link
              className="text-sm text-neutral-500 mb-4 block dark:text-gray-400"
              href="/jobs"
            >
              فرصت‌های شغلی
            </Link>
            <Link
              className="text-sm text-neutral-500 mb-4 block dark:text-gray-400"
              href="/report"
            >
              گزارش تخلف در دیجی‌کالا
            </Link>
            <Link
              className="text-sm text-neutral-500 mb-4 block dark:text-gray-400"
              href="/contact-us"
            >
              تماس با دیجی‌کالا
            </Link>
            <Link
              className="text-sm text-neutral-500 mb-4 block dark:text-gray-400"
              href="/about-us"
            >
              درباره دیجی‌کالا
            </Link> */}
          </div>
        ))}

        {/* <div className="w-4/12">
          <p className="text-neutral-700 mb-5 font-irsansb block dark:text-white">
            خدمات مشتریان
          </p>
          <Link
            className="text-sm text-neutral-500 mb-4 block dark:text-gray-400"
            data-cro-id="footer-customer-service"
            href="/faq"
          >
            پاسخ به پرسش‌های متداول
          </Link>
          <Link
            className="text-sm text-neutral-500 mb-4 block dark:text-gray-400"
            data-cro-id="footer-customer-service"
            href="/return"
          >
            رویه‌های بازگرداندن کالا
          </Link>
          <Link
            className="text-sm text-neutral-500 mb-4 block dark:text-gray-400"
            data-cro-id="footer-customer-service"
            href="/terms"
          >
            شرایط استفاده
          </Link>
          <Link
            className="text-sm text-neutral-500 mb-4 block dark:text-gray-400"
            data-cro-id="footer-customer-service"
            href="/privacy"
          >
            حریم خصوصی
          </Link>
          <Link
            className="text-sm text-neutral-500 mb-4 block dark:text-gray-400"
            data-cro-id="footer-customer-service"
            href="/bug-report"
          >
            گزارش باگ
          </Link>
        </div>
        <div className="w-4/12">
          <p className="text-neutral-700 mb-5 font-irsansb block dark:text-white">
            راهنمای خرید از دیجی‌کالا
          </p>
          <Link
            className="text-sm text-neutral-500 mb-4 block dark:text-gray-400"
            data-cro-id="footer-buying-guide"
            href="/order"
          >
            نحوه ثبت سفارش
          </Link>
          <Link
            className="text-sm text-neutral-500 mb-4 block dark:text-gray-400"
            data-cro-id="footer-buying-guide"
            href="/sending"
          >
            رویه ارسال سفارش
          </Link>
          <Link
            className="text-sm text-neutral-500 mb-4 block dark:text-gray-400"
            data-cro-id="footer-buying-guide"
            href="/payment"
          >
            شیوه‌های پرداخت
          </Link>
        </div> */}

        <div className="w-4/12 max-lg:hidden">
          <div className="w-full flex lg:block lg:flex-row justify-between items-start mt-8 sm:mt-0">
            <h4 className="mb-5 text-neutral-700 font-irsansb dark:text-white">
              همراه ما باشید!
            </h4>
            <div className="flex items-center">
              <Link
                className="ml-6 lg:ml-10"
                data-cro-id="footer-instagram"
                href="https://www.instagram.com/digikalacom/"
              >
                <div className="flex text-gray-400 dark:text-gray-500">
                  <Instagram size={32} />
                </div>
              </Link>
              <Link
                className="ml-6 lg:ml-10"
                data-cro-id="footer-twitter"
                href="https://twitter.com/digikalacom"
              >
                <div className="flex text-gray-400 dark:text-gray-500">
                  <Twitter size={32} />
                </div>
              </Link>
              <Link
                className="ml-6 lg:ml-10"
                data-cro-id="footer-linkedin"
                href="https://www.linkedin.com/company/digikala/mycompany/"
              >
                <div className="flex text-gray-400 dark:text-gray-500">
                  <Linkedin size={32} />
                </div>
              </Link>
              <Link
                className="ml-6 lg:ml-10"
                data-cro-id="footer-aparat"
                href="https://www.aparat.com/digikala/"
              >
                <div className="flex">
                  <svg
                    fill="#00000030"
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    className="dark:text-gray-500 fill-gray-400"
                  >
                    <path d="M12.001 1.594c-9.27-.003-13.913 11.203-7.36 17.758a10.403 10.403 0 0 0 17.76-7.355c0-5.744-4.655-10.401-10.4-10.403zM6.11 6.783c.501-2.598 3.893-3.294 5.376-1.103 1.483 2.19-.422 5.082-3.02 4.582A2.97 2.97 0 0 1 6.11 6.783zm4.322 8.988c-.504 2.597-3.897 3.288-5.377 1.096-1.48-2.192.427-5.08 3.025-4.579a2.97 2.97 0 0 1 2.352 3.483zm1.26-2.405c-1.152-.223-1.462-1.727-.491-2.387.97-.66 2.256.18 2.04 1.334a1.32 1.32 0 0 1-1.548 1.053zm6.198 3.838c-.501 2.598-3.893 3.293-5.376 1.103-1.484-2.191.421-5.082 3.02-4.583a2.97 2.97 0 0 1 2.356 3.48zm-1.967-5.502c-2.598-.501-3.293-3.896-1.102-5.38 2.19-1.483 5.081.422 4.582 3.02a2.97 2.97 0 0 1-3.48 2.36zM13.59 23.264l2.264.61a3.715 3.715 0 0 0 4.543-2.636l.64-2.402a11.383 11.383 0 0 1-7.448 4.428zm7.643-19.665L18.87 2.97a11.376 11.376 0 0 1 4.354 7.62l.65-2.459A3.715 3.715 0 0 0 21.231 3.6zM.672 13.809l-.541 2.04a3.715 3.715 0 0 0 2.636 4.543l2.107.562a11.38 11.38 0 0 1-4.203-7.145zM10.357.702 8.15.126a3.715 3.715 0 0 0-4.547 2.637l-.551 2.082A11.376 11.376 0 0 1 10.358.702z" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
          <div className="w-full flex flex-col items-start mt-12">
            <h4 className="hidden md:block font-irsansb dark:text-white text-neutral-700 mb-5">
              با ثبت ایمیل، از تخفیف‌ها با‌خبر شوید
            </h4>
            <div className="w-full flex items-center">
              <form className="w-full flex" onSubmit={submitHandler}>
                <label className="grow w-full">
                  <div className="px-2 flex items-center bg-neutral-100 dark:bg-neutral-700 rounded-lg">
                    <div className="grow">
                      <input
                        className="px-2 py-3 text-subtitle w-full bg-neutral-100 dark:bg-neutral-700 outline-none"
                        type="email"
                        name="email"
                        placeholder="ایمیل شما"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </label>
                <button
                  className={`text-white flex items-center justify-center w-16 bg-neutral-200 dark:bg-neutral-800 rounded-lg relative text-neutral-000 mr-2 ${
                    isValidEmail
                      ? "bg-rose-500 dark:bg-rose-500 cursor-pointer"
                      : "pointer-events-none"
                  }`}
                  type="submit"
                  data-cro-id="footer-email-submission"
                >
                  ثبت
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Accordion type="single" collapsible className="w-full lg:hidden">
        {links.map((link, index) => (
          <AccordionItem key={link.id} value={`item-${index + 1}`}>
            <AccordionTrigger className="hover:no-underline">
              {link.title}
            </AccordionTrigger>
            {link.links.map((item, index) => (
              <AccordionContent key={index}>{item}</AccordionContent>
            ))}
          </AccordionItem>
        ))}
        {/* <AccordionItem value="item-2">
          <AccordionTrigger>خدمات مشتریان</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>راهنمای خرید از دیجی‌کالا</AccordionTrigger>
          <AccordionContent>
            Yes. It animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>شرکای تجاری</AccordionTrigger>
          <AccordionContent>
            Yes. It animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem> */}
      </Accordion>
    </>
  );
}

const links = [
  {
    id: 1,
    title: "با دیجی‌کالا",
    links: [
      "اتاق خبر دیجی‌کالا",
      "فروش در دیجی‌کالا",
      "فرصت‌های شغلی",
      "گزارش تخلف در دیجی‌کالا",
      "تماس با دیجی‌کالا",
      "درباره دیجی‌کالا",
    ],
  },
  {
    id: 2,
    title: "خدمات مشتریان",
    links: [
      "پاسخ به پرسش‌های متداول",
      "رویه‌های بازگرداندن کالا",
      "شرایط استفاده",
      "حریم خصوصی",
      "گزارش باگ",
    ],
  },
  {
    id: 3,
    title: " راهنمای خرید از دیجی‌کالا",
    links: ["نحوه ثبت سفارش", "رویه ارسال سفارش", "شیوه‌های پرداخت"],
  },
];
