import PaymentAccordion from "@/components/accordions/PaymentAccordion";
import FaqCategories from "@/components/faq/FaqCategories";
import MobileStickyHeader from "@/components/ui/MobileStickyHeader";
import { FileQuestion, Headset, Mail } from "lucide-react";
import Link from "next/link";

export default function Payment() {
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
            <h4 className="mb-3 font-irsansb text-lg dark:text-white max-sm:px-10 text-center">
              میتوانم سفارش خود را در محل پرداخت کنم؟
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
                    <strong className="text-red-600">پرداخت در محل</strong>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <span>
                      امکان انتخاب شیوه ی پرداخت در محل با درنظر گرفتن شرایط
                      سفارش، به صورت هوشمند توسط سیستم بررسی خواهد شد و در صورت
                      امکان انتخاب این شیوه، شما می توانید مبلغ سفارش خود را به
                      هنگام تحویل کالا، با کلیه کارت های بانکی از طریق دستگاه
                      کارتخوان پرداخت کنید. همچنین چنانچه سفارش شما دارای شرایط
                      زیر باشد امکان پرداخت در محل وجود نخواهد داشت.{" "}
                    </span>
                  </p>
                  <p>
                    <span>1- کالای شما جز لوازم سنگین و حجیم باشد.</span>
                  </p>
                  <p>
                    <span>2- مبلغ سفارش شما بالاتر از6 میلیون تومان باشد.</span>
                  </p>
                  <p>
                    <span>3- سفارش شما شامل بیش از یک مرسوله باشد. </span>
                  </p>
                  <p>
                    <span>4- سفارش شما با پست یا باربری ارسال شود.</span>{" "}
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <span>
                      <strong className="text-red-600">پرداخت اینترنتی</strong>
                    </span>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <span>
                      کاربران دیجی‌کالا می‌توانند در هنگام ثبت سفارش، از طریق
                      درگاه اینترنتی، هزینه سفارش خود را به صورت آنلاین پرداخت
                      کنند. پرداخت موفق هزینه به منزله ثبت قطعی این پرداخت برای
                      سفارش است و پس از آن پیامکی مبنی بر ثبت موفق سفارش، برای
                      کاربر ارسال می‌شود و نیازی به اطلاع‌ دادن پرداخت سفارش
                      نیست و سفارش به صورت خودکار وارد مراحل آماده‌سازی و ارسال
                      می‌شود.
                    </span>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <span>
                      لازم به ذکر است که پرداخت اینترنتی باعث ایجاد الویت و
                      تسریع در پردازش سفارش کاربران می‌شود.
                    </span>
                  </p>

                  <p>&nbsp;</p>
                  <p>
                    <span>
                      هنگام ثبت سفارش میتوانید{" "}
                      <strong>
                        <span className="text-sky-600">پرداخت اینترنتی</span>
                      </strong>{" "}
                      را انتخاب نمایید و بعد از وارد شدن به درگاه ،اطلاعات
                      پرداخت خود را وارد کنید.{" "}
                    </span>
                  </p>
                </div>
                <p>برای پرداخت اینترنتی شما نیاز دارید به ;</p>
                <p>&nbsp;</p>
                <p>
                  - <strong className="text-sky-600">شماره کارت</strong> (شماره
                  16 رقمی روی عابر بانک )
                </p>
                <p>
                  - <strong className="text-sky-600">رمزپویا</strong> (برای
                  پرداخت اینترنتی لازم است قبلا رمز پویا (رمز خرید اینترنتی)
                  کارت بانکی خود را فعال کرده باشید.{" "}
                </p>
                <p>
                  برای فعال‌کردن رمز خرید پویا ، برخی از بانک ها به صورت خودکار
                  رمز پویا کارت بانکی مشتریان را فعال میکنند در غیر اینصورت از
                  دو طریق میتوانید اقدام به فعالسازی نمایید:
                </p>
                <p>
                  1- می‌توانید به دستگاه خودپرداز بانک صادرکننده کارت خود مراجعه
                  کنید و از منوی خدمات رمز پویا اقدام به فعالسازی نماید.
                </p>
                <p>2- مراجعه به شعب حضوری بانک</p>
                <p className="mr-2">
                  - <span className="text-sky-500 font-irsansb">CVV2</span> ( یک
                  کد ۳ یا ۴ رقمی است که پشت یا روی
                  کارت‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌های
                  بانکی درج می‌شود و
                  به‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌عنوان
                  یک کد امنیتی در
                  پرداخت‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌های
                  اینترنتی کاربرد دارد )
                </p>
                <p className="mr-2">
                  -{" "}
                  <span className="text-sky-500 font-irsansb">
                    تاریخ انقضاء
                  </span>{" "}
                  (تاریخ انقضا کارت‌ بانکی روی آن حک شده است. در صورتی که تاریخ
                  انقضا روی کارت بانکی وجود ندارد، می توانید تاریخ صحیح را از
                  بانک مبدا استعلام بگیرید)
                </p>

                <p>&nbsp;</p>
                <div>
                  <p>
                    <span>
                      <span>
                        <strong className="text-orange-600">
                          اطلاعات و شرایط لازم جهت مرجوعی وجه به مشتری
                        </strong>
                      </span>
                    </span>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <span>
                      - مشتری میبایست شماره کارت بانکی که حساب آن به نام صاحب
                      پروفایل میباشد را در حساب کاربری دیجی‌کالای خود ثبت نماید.
                      (در خصوص افراد زیر 18 سال فاقد کارت بانکی، شماره کارت یکی
                      از والدین ایشان با اولویت پدر، کفایت میکند.){" "}
                    </span>
                  </p>
                  <p>
                    <span>
                      - در صورت لزوم عودت وجه به حساب مشتری، اصل بر این است که
                      مبلغ به شماره کارت اعلام شده توسط مشتری عودت خواهد شد.
                      مشتری با درج شماره کارت در حساب کاربری خود میپذیرد که نسبت
                      به انجام تراکنش های مالی در خصوص عودت وجه خرید های انجام
                      شده از دیجی‌کالا، رضایت داشته و با معرفی کارت در حساب
                      کاربری مسئولیت های قانونی در این خصوص را میپذیرد.{" "}
                    </span>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <span>
                      - در صورتی که در هر خرید واریز اولیه از کارت دیگری صورت
                      گرفته باشد و مغایرتی بین حساب مبداء که پرداخت اولیه از آن
                      انجام شده با حساب اعلامی توسط مشتری در حساب کاربری کشف
                      شود، دیجی‌کالا می بایست مدارک صاحب حساب کارت مبداء را به
                      همراه مدارک صاحب پروفایل بررسی کرده و مطابق با ضوابط و
                      مقررات قانونی، مبلغ را به حساب مبدا عودت خواهد داد.{" "}
                    </span>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <span>
                      از آنجا که تمامی ماموران تحویل دیجی‌کالا دستگاه‌های
                      کارت‌خوان سیار (POS) همراه دارند، می‌توان هنگام تحویل
                      سفارش در محل، با استفاده از کارت‌های عضو شبکه شتاب پرداخت
                      خود را انجام داد.{" "}
                    </span>
                  </p>
                </div>
                <p>&nbsp;</p>
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

                    <PaymentAccordion />
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
