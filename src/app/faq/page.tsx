import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import MobileStickyHeader from "@/components/ui/MobileStickyHeader";
import { faqCategories } from "@/data/data";
import { ChevronDown, FileQuestion, LayoutDashboard } from "lucide-react";
import Link from "next/link";

const commonQuestions = [
  {
    q: "چطور می‌توانم سفارشم را پیگیری کنم؟",
    a: "وارد سایت دیجی‌کالا شوید. روی گزینه سفارش‌های من کلیک کنید. در این قسمت با کلیک روی جزییات می‌توانید سفارش خود را ببینید. می‌توانید در این قسمت روند آماده‌سازی و مراحل ارسال سفارش خود را پیگیری کنید.",
  },
  {
    q: "هزینه روش‌های ارسال با اشتراک دیجی‌پلاس چقدر است؟",
    a: "اعضای دیجی‌پلاس می‌توانند به ازای هر ماه اشتراک، چهار ارسال رایگان بر روی مرسوله های عادی داشته باشند،به جز ارسال توسط فروشنده ، باربری و سفارش های سوپر مارکتی زیر ۸۰ هزار تومان.",
  },
  {
    q: "چطور میتوانم سفارشم را لغو کنم ؟",
    a: "شما میتوانید با مراجعه به پروفایل خود سفارش یا مرسوله ایی که از ارسال آن منصرف شدید را لغو نمایید. میتوانید برای مشاهده روند لغو سفارش به توضیحات تکمیلی مراجعه کنید.",
  },
  {
    q: "میتوانم سفارشم را بصورت اقساطی ( اعتباری ) پرداخت کنم؟",
    a: "بله، دیجی کالا تسهیلاتی را فراهم کرده، شما میتوانید تا سقف 20 میلیون تومان به صورت اقساط  با بازپرداخت  6 ، 9 و 12 ماهه از سایت دیجی کالا خرید کنید.",
  },
  {
    q: "هزینه ی ارسال در دیجی کالا چگونه محاسبه میشود؟",
    a: "هزینه ارسال بر اساس شیوه ارسال متفاوت است و در زمان ثبت سفارش نمایش داده می شود.",
  },
  {
    q: "چطور درخواست خود را جهت بازگرداندن کالا (مرجوعی کالا) به شما اطلاع دهم؟",
    a: "شما میتوانید از طریق فرم درخواست مرجوعی در حساب کاربری ، صفحه تماس با ما و تلفن درخواست خود را ثبت نمایید.",
  },
  {
    q: "چرا به شماره سفارش (DKC) نیاز داریم؟",
    a: "دیجی کالا برای افزایش سرعت پاسخ گویی به مشتریان با دریافت کد سفارش یا همان کد 'DKC' این امکان رو ایجاد کرده که بتونید در زمان کمتری به نتیجه مورد نظر خود برسید...",
  },
  {
    q: "شرایط خرید و بازگرداندن کالا برای کالاهای سوپر مارکتی چگونه است؟",
    a: "لطفاً پیش از خرید، موارد زیر را به‌دقت بخوانید؛ زیرا ثبت هر سفارش در دیجی‌کالا به معنی موافقت با شرایط زیر است.",
  },
  {
    q: "شرایط گارانتی دیجی کالا",
    a: "امروزه توجه به کیفیت کالا از مهمترین وظایف فروشندگان کالا است و خدمات پس از فروش ضامن حفظ این کیفیت می باشد.در همین راستا شرکت دیجی کالا  مفتخر به ارائه سرویس در اسرع وقت به مشتریان گرامی می باشد. جهت سهولت در پیگیری گارانتی دستگاه خود می توانید از طریق شماره 02161930010 اقدام نمائید.",
  },
  {
    q: "چطور میتوانم بدون برقراری تماس، درخواست مرجوعی کالای خریداری شده را اعلام کنم؟",
    a: "شما میتواند وارد پروفایل خود شوید و از قسمت سفارشات تحویل شده ، فرم درخواست را تکمیل کنید.",
  },
  {
    q: "شرایط استفاده از کد تخفیف اولین خرید چیست؟",
    a: "سیستم هوشمند دیجی کالا، پس از بررسی حساب کاربری در صورتی که مالک آن مشتری جدید دیجی کالا باشد...",
  },
  {
    q: "چطور میتوانم امتیاز‌ بگیریم؟",
    a: "بعد از ساخت حساب کاربری در دیجی‌کالا، می توانید با یکی از روش های زیر از دیجی‌کلاب امتیاز کسب کنید: خرید کالا ثبت نظر انجام ماموریت‌های دیجی‌کلابی توجه کنید چنانچه ماموریتی در موفقیت‌آمیز انجام شود، دریافت امتیاز آن مستلزم انتخاب گزین دریافت امتیاز می‌باشد.",
  },
  {
    q: "چگونه می توانم نصب و پیگیری درگاه پرداخت هوشمند دیجی پی را انجام دهم؟",
    a: "شما میتوانید پس از مراجعه به لینک  https://www.mydigipay.com/ipg/ ، مراحل آن را مطالعه و فرم های لازم را تکمیل کرده و درصورت وجود سوالات فنی درخصوص راه اندازی درگاه با ایمیل merchant.support@mydigipay.com مکاتبه کنید.",
  },
];

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
          <p className="text-neutral-500 dark:text-neutral-300 text-sm">
            موضوع موردنظرتان را جستجو کرده یا از دسته‌بندی زیر انتخاب کنید
          </p>
          <form className="mt-10">
            <Input
              type="text"
              placeholder="جستجوی موضوع"
              className="lg:w-[35rem] w-96 py-6"
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
                <AccordionContent className="text-neutral-500 text-base leading-7">
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

export const FaqCategories = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex w-14 h-14 items-center bg-sky-50 dark:bg-sky-950 justify-center rounded-full">
          <LayoutDashboard size={22} className="text-sky-500" />
        </div>
        <h3 className="mt-5 mb-10 font-irsansb text-lg">دسته‌بندی پرسش‌ها</h3>
      </div>
      <div className="grid grid-cols-12 relative">
        <span className="absolute w-full h-0.5 bg-white dark:bg-neutral-950 top-0 left-0"></span>
        <span className="absolute w-full h-0.5 bg-white dark:bg-neutral-950 bottom-0 left-0"></span>
        <span className="absolute w-0.5 h-full bg-white dark:bg-neutral-950 top-0 left-0"></span>
        <span className="absolute w-0.5 h-full bg-white dark:bg-neutral-950 top-0 right-0"></span>
        {faqCategories.map((category, index) => (
          <Link
            key={index}
            href={category.href}
            className="col-span-4 border border-neutral-200 dark:border-neutral-900 lg:col-span-2 flex gap-5 flex-col items-center justify-center p-5"
          >
            <span className="text-neutral-400 dark:text-neutral-600">
              {category.icon}
            </span>
            <span className="text-neutral-700 dark:text-neutral-100 text-xs text-center">
              {category.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};
