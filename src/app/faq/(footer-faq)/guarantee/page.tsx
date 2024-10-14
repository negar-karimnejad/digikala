import GuaranteeAccordion from "@/components/accordions/GuaranteeAccordion";
import FaqCategories from "@/components/faq/FaqCategories";
import MobileStickyHeader from "@/components/ui/MobileStickyHeader";
import { FileQuestion, Headset, Mail } from "lucide-react";
import Link from "next/link";

export default function Guarantee() {
  return (
    <>
      <div className="max-lg:mb-20">
        <MobileStickyHeader />
        {/* Hero */}
        <div className="relative h-80 bg-gradient-to-b from-neutral-200 to-white dark:from-neutral-700 dark:to-neutral-950">
          <div className="grayscale w-full bg-[url('/nav-links-svg.svg')] h-2/3 opacity-10 dark:opacity-60"></div>
          <div className="absolute top-10 w-full right-0 left-0 mx-auto flex flex-col items-center justify-center">
            <div className="flex w-14 h-14 items-center bg-white dark:bg-sky-950 justify-center rounded-full">
              <FileQuestion size={22} className="text-sky-500" />
            </div>
            <p className="my-5 font-irsansb text-xs text-sky-500">
              روند ثبت سفارش
            </p>
            <h4 className="mb-3 text-center font-irsansb text-lg dark:text-white max-sm:px-10">
              آیا کالاهایی که در سایت دیجی کالا بفروش می رسد اصل هستند؟
            </h4>
          </div>
        </div>

        <div className="leading-9 grow bg-neutral-000 flex flex-col w-full items-center lg:px-32 text-justify">
          <div className="hidden"></div>
          <div>
            <div className="px-5 lg:px-4 lg:mx-auto container-xl-w">
              <div>
                <div className="py-5 pt-0">
                  <p>
                    <span>
                      با توجه به اینکه در سایت دیجی کالا غیر از کالاهایی که خود
                      دیجیکالا فروشنده آن است ، فروشندگان دیگری هم فعالیت دارند
                      (پلت فرم مارکت پلیس) ، برای حفظ تنوع کالائی و پاسخ به نیاز
                      همه اقشار جامعه، تعدادی از کالاهای ارائه شده توسط تولید
                      کننده اصلی تولید نشده است و با قیمتی پایین تر از قیمت اصلی
                      بفروش میرسد، لذا به منظور شفافیت بیشتر و حفظ حقوق مشتریان
                      در انتخاب بهتر ، این کالا ها با نشان غیر اصل مشخص شده اند.{" "}
                    </span>
                  </p>
                  <p>
                    <span>
                      بنابراین، تنها در صورتی که کالایی نشان غیر اصل نداشته باشد
                      ، دیجی‌کالا اصالت این کالاها را تضمین و همۀ آن‌ها را با
                      گارانتی اصلی و معتبر عرضه می‌کند.{" "}
                    </span>
                  </p>
                  <p>
                    <span>
                      شرکت‌هایی که از طرف وزارت صنعت، معدن و تجارت به عنوان وارد
                      کنندگان قانونی در کشور فعالیت می‌کنند و اسامی آنها در سایت
                      این وزارت‌خانه ذکر شده، باید گارانتی و خدمات پس از فروش
                      نیز ارائه کنند. بنابراین گارانتی اینگونه شرکت‌ها، گارانتی
                      معتبر محسوب می‌شود. به این ترتیب مشتریانی که گارانتی‌های
                      بی‌نام و نشان آنها را سردرگم کرده است، می‌توانند
                      گارانتی‌های معتبر را از نامعتبر شناسایی کنند. تمامی
                      محصولات ارائه شده در وب‌سایت دیجی‌کالا توسط نمایندگان رسمی
                      آن برند در ایران گارانتی شده‌اند و با اخذ مجوزهای لازم، از
                      مبادی قانونی وارد کشور شده‌اند. لازم به ذکر است کلیه
                      کالاهای مشمول گارانتی پس از تحویل به خریدار و عدم استفاده
                      از مهلت 7 روز ضمانت بازگشت، در صورتی که با هرگونه ایراد و
                      اشکال اعم از نرم‌افزاری و سخت‌افزاری و سایر موارد مواجه
                      شوند، بررسی مساله در حوزه صلاحیت شرکت گارانتی‌کننده مربوط
                      است و دیجی‌کالا هیچگونه مسئولیتی نسبت به مشکلات مزبور
                      نخواهد داشت.{" "}
                    </span>
                  </p>
                </div>
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

                    <GuaranteeAccordion />
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
