import ReturnAccordion from "@/components/accordions/ReturnAccordion";
import FaqCategories from "@/components/faq/FaqCategories";
import MobileStickyHeader from "@/components/ui/MobileStickyHeader";
import { FileQuestion, Headset, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Return() {
  return (
    <>
      <div className="max-lg:mb-20">
        <MobileStickyHeader />
        {/* Hero */}
        <div className="relative h-72 bg-gradient-to-b from-neutral-200 to-white dark:from-neutral-700 dark:to-neutral-950">
          <div className="grayscale w-full bg-[url('/nav-links-svg.svg')] h-2/3 opacity-10 dark:opacity-60"></div>
          <div className="absolute top-10 w-full right-0 left-0 mx-auto flex flex-col items-center justify-center">
            <div className="flex w-14 h-14 items-center bg-white dark:bg-sky-950 justify-center rounded-full">
              <FileQuestion size={22} className="text-sky-500" />
            </div>
            <p className="my-5 font-irsansb text-xs text-sky-500">
              بازگرداندن کالا
            </p>
            <h4 className="mb-3 font-irsansb text-lg dark:text-white max-sm:px-10 text-center">
              در چه شرایطی میتوانم کالای خود را بازگردانم؟
            </h4>
          </div>
        </div>

        <div className="leading-9 grow bg-neutral-000 flex flex-col w-full items-center lg:px-32 text-justify">
          <div className="hidden"></div>
          <div>
            <div className="px-5 lg:px-4 lg:mx-auto">
              <Image
                alt="return"
                width={1000}
                height={1000}
                src="/faq/return1.webp"
                className="w-full h-full mx-auto object-cover"
              />
              <Image
                alt="return"
                width={1000}
                height={1000}
                src="/faq/return2.webp"
                className="w-full h-full mx-auto object-cover"
              />
              <Image
                alt="return"
                width={1000}
                height={1000}
                src="/faq/return3.webp"
                className="w-full h-full mx-auto object-cover"
              />
              <Image
                alt="return"
                width={1000}
                height={1000}
                src="/faq/return4.webp"
                className="w-full h-full mx-auto object-cover"
              />
              <Image
                alt="return"
                width={1000}
                height={1000}
                src="/faq/return5.webp"
                className="w-full h-full mx-auto object-cover"
              />
              <Image
                alt="return"
                width={1000}
                height={1000}
                src="/faq/return6.webp"
                className="w-full h-full mx-auto object-cover"
              />
              <Image
                alt="return"
                width={1000}
                height={1000}
                src="/faq/return7.webp"
                className="w-full h-full mx-auto object-cover"
              />
              <Image
                alt="return"
                width={1000}
                height={1000}
                src="/faq/return8.webp"
                className="w-full h-full mx-auto object-cover"
              />

              <div className="py-5 text-center text-lg">
                &quot; جهت مشاهده شرایط سرویس گارانتی دیجی کالا{" "}
                <u>
                  <Link
                    href="/faq/guarantee"
                    target="_blank"
                    className="text-sky-700"
                  >
                    کلیک کنید
                  </Link>
                </u>
                <span>&nbsp;</span>&quot;
              </div>
              <div className="py-5 text-body-1">
                <p>
                  <span>
                    <span>
                      <strong>کالا را چطور ارسال کنید؟</strong>
                    </span>
                  </span>
                </p>

                <p>
                  <span>
                    - لطفاً قبل از هر اقدامی با کارشناسان پشتیبانی خدمات پس از
                    فروش تماس بگیرید.
                    <br />
                    - از ارسال کالا بدون هماهنگی با خدمات پس از فروش دیجی‌کالا
                    جداً، خودداری کنید.
                    <br />- برای ارسال، باید کالا در جعبه یا کارتن اصلی خود به
                    خوبی بسته‌بندی شود و لوازم جانبی و همه اقلام همراه مانند
                    کابل، ریموت، باطری، دفترچه راهنما، کارت گارانتی، کارت بیمه،
                    بند و قطعات بسته‌بندی به همراه کالای اصلی ارسال شود.
                  </span>
                </p>

                <p>
                  <span>
                    - در صورتی که سفارش شما شامل اقلام هدیه باشد و قصد مرجوع
                    کردن کل سفارش را دارید، حتما باید هدیه نیز همراه سفارش عودت
                    داده شود. در غیر این صورت مبلغ هزینه ارسال از سفارش کسر و
                    مابقی مبلغ به شما عودت داده خواهد شد.
                    <br />
                    - برچسب‌زدن یا نوشتن توضیحات، آدرس یا هر مورد دیگری روی
                    کارتن یا جعبه اصلی کالا و یا پاره و مخدوش کردن آن، امکان
                    استفاده از ضمانت بازگشت را از بین خواهد برد. (در صورت لزوم،
                    توضیحات خود را پشت فاکتور خرید یا قطعه کاغذ جداگانه‌ای
                    بنویسید.)
                    <br />
                    -درصورت ارسال با پست پیشتاز، عکس و تصویری از رسید پستی تهیه
                    و به آدرس Info@digikala.com ایمیل کنید.
                    <br />- اگر کالا دارای رمز عبور (Password)، آی دی، اپل آی دی
                    (id)یا الگو (pattern) است، لازم است توسط مشتری برداشته شود،
                    تا کارشناسان دیجی‌کالا امکان تست آن را داشته باشند.
                  </span>
                </p>

                <p>
                  <span>
                    &nbsp;در صورتی که ساکن سایر شهرها هستید، برای بازگرداندن
                    کالا از پست پیشتاز پس کرایه اقدام کنید .در صورتی که برخی از
                    شهرها پست پیشتاز پس کرایه&nbsp;را نمی پذیرند،تصویر رسید پستی
                    را برای ما ارسال کنید.
                  </span>
                </p>
              </div>

              <div>
                <div className="px-4 lg:px-20">
                  {/* Common Questions */}
                  <div className="py-14">
                    <div className="flex flex-col justify-center items-center">
                      <div className="flex w-14 h-14 items-center bg-sky-50 dark:bg-sky-950 justify-center rounded-full">
                        <FileQuestion size={22} className="text-sky-500" />
                      </div>
                      <h3 className="mt-5 mb-10 font-irsansb text-lg">
                        پرسش‌های متداول
                      </h3>
                    </div>

                    <ReturnAccordion />
                  </div>
                  {/* Faq Categories */}
                  <FaqCategories />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:mx-auto mb-5">
          <p className="lg:text-xl font-irsansb mb-7 mt-10 text-center">
            جواب یا پرسش خود را پیدا نکردید؟
          </p>
          <div className="border-complete lg:px-4 lg:py-5 flex items-center justify-center lg:mx-auto">
            <div className="bg-neutral-50  dark:bg-neutral-800 rounded-lg lg:mx-20 mx-5 h-full lg:border lg:border-neutral-200 dark:border-neutral-600 flex items-center w-full max-lg:gap-10 flex-col-reverse lg:flex-row py-5">
              <div className="lg:px-5 w-full">
                <div className="flex justify-center gap-8 items-center px-4 lg:px-16 w-full">
                  <div className="flex">
                    <Headset
                      className="text-neutral-200 dark:text-neutral-700"
                      size={80}
                    />
                  </div>
                  <div className="lg:mr-15 grow flex flex-col gap-5">
                    <p className="text-subtitle-strong text-neutral-500">
                      تماس تلفنی
                    </p>
                    <Link
                      className="text-2xl text-neutral-700 dark:text-neutral-100 font-bold"
                      href="tel:+981234567890"
                    >
                      34567890 – 021
                    </Link>
                  </div>
                </div>
              </div>
              <div className="lg:border-r max-lg:border-b border-b-neutral-200 dark:border-b-neutral-900 max-lg:pb-5 lg:px-5 w-full">
                <div className="flex justify-center gap-8 items-center px-4 lg:px-16 w-full">
                  <div className="flex">
                    <Mail
                      className="text-neutral-200 dark:text-neutral-700"
                      size={80}
                    />
                  </div>
                  <div className="lg:mr-15 grow flex flex-col gap-5">
                    <p className="text-subtitle-strong text-neutral-500">
                      ارسال پیام
                    </p>
                    <Link
                      className="text-center p-3 font-irsansb border-neutral-600 text-neutral-800 dark:text-neutral-100 border rounded-lg"
                      href="/faq/contact-us"
                    >
                      فرم تماس با ما
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
