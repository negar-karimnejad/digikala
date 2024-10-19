import ContactForm from "@/components/faq/ContactForm";
import MobileStickyHeader from "@/components/ui/MobileStickyHeader";
import { authUser } from "@/utils/auth";
import { User } from "@/utils/types";
import { Clock, Headset, Info, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Metadata } from "next";
import dynamic from "next/dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "تماس با ما",
  };
}

const Map = dynamic(() => import("../../../../components/faq/Map"), {
  ssr: false,
});

export default async function ContactUs() {
  const user: User = await authUser();

  return (
    <div className="max-lg:mb-20">
      <MobileStickyHeader />
      <div className="w-full h-2 bg-neutral-100 lg:hidden dark:bg-neutral-900"></div>
      <div className="lg:px-20 py-5 space-y-5">
        <div className="lg:border rounded-lg p-5">
          <h4 className="dark:text-white w-fit font-irsansb border-b-2 border-b-red-500 pb-3 max-lg:text-sm">
            تماس با دیجی‌کالا
          </h4>
          <div className="text-xs flex justify-between items-center mt-5">
            <p>
              لطفاً پیش از ارسال ایمیل یا تماس تلفنی، ابتدا{" "}
              <Link href="/faq" className="text-sky-500">
                پرسش‌‌های متداول
              </Link>{" "}
              را مشاهده کنید.
            </p>
            <button className="max-lg:hidden text-sky-500 border px-3 py-2 border-sky-500 rounded-md">
              <Link href="/faq">پرسش‌‌های متداول</Link>
            </button>
          </div>

          <hr className="my-5 text-neutral-50" />
          <ContactForm user={user} />
        </div>

        <div className="w-full h-2 bg-neutral-100 lg:hidden dark:bg-neutral-900"></div>

        <div className="lg:border rounded-lg p-5">
          <div className="break-words py-3 mb-3 lg:mb-4">
            <div className="flex items-center grow w-fit font-irsansb border-b-2 border-b-red-500 pb-3">
              <p className="grow text-sm lg:text-base text-neutral-900 dark:text-white">
                <span className="relative">تعطیلات دیجی‌کالا</span>
              </p>
            </div>
            <div className="mt-2"></div>
          </div>
          <p className="text-xs text-neutral-600 mb-5 dark:text-neutral-300">
            روزهایی که به دلیل تعطیلی رسمی، دیجی‌کالا هیچ‌گونه پاسخگویی،
            سرویس‌دهی و خدماتی ندارد، در سال ۱۴۰۳ به شرح زیر است:
          </p>
          <div className="w-full mx-auto grid grid-cols-12 items-center justify-center flex-wrap gap-2 lg:px-20">
            <div className="border-complete col-span-6 lg:col-span-3 rounded-medium border-complete p-5 flex flex-col items-center justify-center text-center border rounded-lg">
              <span className="font-bold mb-2">۱</span>
              <span className="text-sm border-b pb-3 w-28">فروردین</span>
              <span className="text-xs w-full text-center pt-1 mt-2">
                عید نوروز
              </span>
            </div>
            <div className="border-complete col-span-6 lg:col-span-3 rounded-medium border-complete p-5 flex flex-col items-center justify-center text-center border rounded-lg">
              <span className="font-bold mb-2">۱۳</span>
              <span className="text-sm border-b pb-3 w-28">فروردین</span>
              <span className="text-xs w-full text-center pt-1 mt-2">
                روز طبیعت
              </span>
            </div>
            <div className="border-complete col-span-6 lg:col-span-3 rounded-medium border-complete p-5 flex flex-col items-center justify-center text-center border rounded-lg">
              <span className="font-bold mb-2">۱۴</span>
              <span className="text-sm border-b pb-3 w-28">خرداد</span>
              <span className="text-xs w-full text-center pt-1 mt-2">
                رحلت امام خمینی(ره)
              </span>
            </div>
            <div className="border-complete col-span-6 lg:col-span-3 rounded-medium border-complete p-5 flex flex-col items-center justify-center text-center border rounded-lg">
              <span className="font-bold mb-2">۲۵</span>
              <span className="text-sm border-b pb-3 w-28">تیر</span>
              <span className="text-xs w-full text-center pt-1 mt-2">
                تاسوعای حسینی
              </span>
            </div>
            <div className="border-complete col-span-6 lg:col-span-3 rounded-medium border-complete p-5 flex flex-col items-center justify-center text-center border rounded-lg">
              <span className="font-bold mb-2">۲۶</span>
              <span className="text-sm border-b pb-3 w-28">تیر</span>
              <span className="text-xs w-full text-center pt-1 mt-2">
                عاشورای حسینی
              </span>
            </div>
            <div className="border-complete col-span-6 lg:col-span-3 rounded-medium border-complete p-5 flex flex-col items-center justify-center text-center border rounded-lg">
              <span className="font-bold mb-2">۴</span>
              <span className="text-sm border-b pb-3 w-28">شهریور</span>
              <span className="text-xs w-full text-center pt-1 mt-2">
                اربعین حسینی
              </span>
            </div>
            <div className="border-complete col-span-6 lg:col-span-3 rounded-medium border-complete p-5 flex flex-col items-center justify-center text-center border rounded-lg">
              <span className="font-bold mb-2">۱۲</span>
              <span className="text-sm border-b pb-3 w-28">شهریور</span>
              <span className="text-xs w-full text-center pt-1 mt-2">
                رحلت حضرت رسول اکرم
              </span>
            </div>
            <div className="border-complete col-span-6 lg:col-span-3 rounded-medium border-complete p-5 flex flex-col items-center justify-center text-center border rounded-lg">
              <span className="font-bold mb-2">۲۲</span>
              <span className="text-sm border-b pb-3 w-28">بهمن</span>
              <span className="text-xs w-full text-center pt-1 mt-2">
                سالگرد پیروزی انقلاب اسلامی
              </span>
            </div>
          </div>
        </div>

        <div className="w-full h-2 bg-neutral-100 lg:hidden dark:bg-neutral-900"></div>

        <div className="border border-t-8 rounded-lg p-5">
          <h4 className="dark:text-white w-fit font-irsansb border-b-2 border-b-red-500 pb-3 max-lg:text-sm">
            اطلاعات دیجی‌کالا
          </h4>
          <div className="flex items-center gap-3 mt-10">
            <Image
              alt="logo"
              width={100}
              height={100}
              src="/logo/footerlogo2.webp"
              className="rounded-full w-8 h-8 object-cover"
            />
            <h4 className="text-xl">دفتر مرکزی</h4>
          </div>
          <p className="text-xs text-neutral-700 dark:text-neutral-300 mt-3">
            استان تهران شهر تهران - خیابان گاندی جنوبی - نبش خیابان ۲۱ - پلاک ۲۸
          </p>

          <h4 className="text-xl mt-10">خدمات پس از فروش</h4>
          <p className="text-xs text-neutral-700 dark:text-neutral-300 mt-3 leading-6">
            لطفاً کالا را برای بازگرداندن و ارسال آن به خدمات پس از فروش
            دیجی‌کالا از طریق پست، تنها به صندوق پستی 1119-13185 ارسال کنید.(شما
            می‌توانید از طریق بخش سفارش‌های من اقدام به بازگردانی کالا کنید){" "}
          </p>

          {/* MAP */}
          <div className="my-5">
            <Map />
          </div>
          <hr className="my-10 text-neutral-50" />
          <div>
            <p className="text-xs font-irsansb justify-center text-center pb-5 flex items-center gap-2">
              <Clock size={20} />
              پاسخگویی ۲۴ ساعته و ۷ روز هفته
            </p>
            <div className="flex items-center gap-5">
              <div className="h-44 flex flex-col gap-2 items-center text-xs bg-neutral-50 dark:bg-neutral-800 rounded-lg p-5 w-full flex-1">
                <Headset
                  className="text-neutral-700 dark:text-neutral-300 shrink-0"
                  size={25}
                />
                <p className="text-neutral-500 my-3 dark:text-neutral-400 text-sm lg:text-base">
                  تلفن تماس و فکس
                </p>
                <div className="flex flex-col gap-3">
                  <Link className="font-bold" href="tel:+981234567890">
                    34567890 – 021
                  </Link>
                  <Link className="font-bold" href="tel:+981234567890">
                    34567890 – 021
                  </Link>
                </div>
              </div>

              <div className="h-44 flex flex-col gap-2 items-center text-xs bg-neutral-50 dark:bg-neutral-800 rounded-lg p-5 w-full flex-1">
                <Mail
                  className="text-neutral-700 dark:text-neutral-300 shrink-0"
                  size={25}
                />
                <p className="text-neutral-600 dark:text-neutral-400 my-3 text-sm lg:text-base">
                  ایمیل سازمانی
                </p>
                <div>
                  <Link
                    className="font-bold dark:font-medium text-black dark:text-white"
                    href="mailto:info@digikala.com"
                  >
                    info@digikala.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-5 text-neutral-50" />
          <small className="flex gap-2 text-neutral-400 leading-6">
            <Info size={15} className="shrink-0 mt-1" />
            توجه داشته باشید که 300061930000، 100061930000 و 50003101 تنها
            شماره‌هایی هستند که دیجی‌کالا از طریق آن برای کاربران و مشتریان خود
            پیامک (اس ام اس) ارسال می‌کند. بنابراین ارسال هرگونه پیامک تحت عنوان
            دیجی‌کالا، با هر شماره دیگری تخلف و سوء استفاده از نام دیجی‌کالا
            است. در صورت دریافت چنین پیامکی، لطفاً جهت پیگیری قانونی آن را به
            info@digikala.com اطلاع دهید. قابل ذکر است که این شماره‌ها تنها
            سامانه ارسال پیامک هستند و وضعیت پردازش سفارشات مشتریان، رویدادها،
            خدمات و سرویس‌های ویژه دیجی‌کالا را به اطلاع کاربران می‌رسانند.
            لطفاً توجه داشته باشید که امکان دریافت و رسیدگی به پیام‌های شما از
            طریق این شماره‌ها وجود ندارد.
          </small>
        </div>
      </div>
    </div>
  );
}
