import ExpressDeliveryAccordion from "@/components/accordions/ExpressDeliveryAccordion";
import FaqCategories from "@/components/faq/FaqCategories";
import MobileStickyHeader from "@/components/ui/MobileStickyHeader";
import { FileQuestion, Headset, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ExpressDelivery() {
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
              پیگیری ارسال سفارش
            </p>
            <h4 className="mb-3 font-irsansb text-lg dark:text-white">
              تحویل اکسپرس دیجی کالا چیست ؟
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
                      دیجی کالا در شهر تهران و برخی از شهرهای پرجمعیت ایران
                      اقدام به{" "}
                      <span>
                        <strong className="text-red-600">تحویل فوری</strong>
                        &nbsp;
                      </span>
                      سفارشات نموده است.
                    </span>
                  </p>
                  <p>
                    <span>
                      سفارشات شما طبق شرایط زیر پس از گذشت 24 ساعت کاری تحویل
                      خواهند شد :
                    </span>
                  </p>
                  <p>
                    <span>
                      کالای خریداری شده در انبار دیجی کالا موجود باشد.
                    </span>
                  </p>
                  <p>
                    <span>
                      در غیر اینصورت زمان ارسال کالا از انبار فروشنده به انبار
                      دیجی کالا به زمان ارسال اضافه خواهد شد.
                    </span>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <span>
                      <strong>پرداخت در محل</strong>
                    </span>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <span>
                      بله شما میتوانید وجه سفارش خود را هنگام تحویل کالا با کلیه
                      کارت های بانکی در دستگاه کارتخوان پرداخت کنید،&nbsp;در
                      برخی موارد امکان پرداخت سفارش در محل وجود ندارد.
                    </span>
                  </p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>
                    <span>
                      شهرهایی که شما میتوانید سفارش خود را با{" "}
                      <u>
                        <strong>تحویل اکسپرس</strong>
                      </u>{" "}
                      دریافت کنید;
                    </span>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <span>
                      تهران ، کرج ، اصفهان، تبریز، کرمانشاه، قم، یزد، قزوین،
                      زنجان، اردبیل، گرگان، ارومیه، اراک، خرم آباد، مشهد، اهواز،
                      شیراز، کرمان، بندرعباس، زاهدان، رشت ، نوشهر، بابل ، همدان
                      هستید ;
                    </span>
                  </p>
                  <p>
                    <span>
                      سفارش شما با{" "}
                      <u>
                        <strong>اکسپرس دیجی کالا</strong>
                      </u>{" "}
                      تحویل شما میشود.
                    </span>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <span>
                      در صورتی که آدرس شما در یکی از شهرهای فوق میباشد ،
                      میتوانید{" "}
                      <strong>
                        <span className="text-sky-600">زمان دلخواه</span>
                      </strong>{" "}
                      خود را جهت دریافت کالا انتخاب کنید.
                    </span>
                  </p>
                  <p>&nbsp;</p>
                </div>
                <div className="py-5 "></div>در شرایط ویژه مانند جشنواره‌ها یا
                روزهای شلوغ و پرازدحام مانند اسفند ماه، برحسب روش و محل دریافت
                سفارش، زمان ارسال متفاوت است و امکان دارد، طبق رویه‌های اعلام
                شده ، صورت نگیرد.
                <div className="py-5 ">
                  <p>
                    <span>
                      همه سفارشاتی که با اکسپرس دیجی کالا ارسال میشود ، طی 24
                      ساعت تحویل شما خواهد شد، به غیر از کالاهایی که
                      <strong>
                        <span className="text-sky-600"> امکان ارسال هوایی</span>
                      </strong>{" "}
                      در شهرهای مشهد، اهواز، شیراز، کرمان، بندرعباس، زاهدان
                      ندارند که &nbsp;بسته به فاصله شهر ممکن است بعد از
                      <strong>
                        {" "}
                        <span className="text-red-600">3</span>
                      </strong>{" "}
                      تا{" "}
                      <strong>
                        <span className="text-red-600">5</span>
                      </strong>{" "}
                      روز کاری، به دست شما برسد.
                    </span>
                  </p>
                  <p>
                    <span>
                      &nbsp;بنابراین توصیه می‌شود اگر قصد خرید محصولات مختلفی را
                      دارید ، چنین کالاهایی را در سبد خرید جداگانه‌ای ثبت کنید
                      تا سایر کالاهای درخواستی طبق برنامه زمانی مورد نظر شما
                      ارسال شوند و تنها کالاهایی که امکان ارسال هوایی
                      نداشته‌اند، دیرتر دریافت شوند. این کالاها به شرح زیر است;
                    </span>
                  </p>
                  <p>&nbsp;</p>
                </div>
                <div className="py-5 ">
                  <p>
                    <span>
                      <span>
                        <strong className="text-orange-600">
                          نحوه تحویل گرفتن سفارش ;
                        </strong>
                      </span>
                    </span>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <span>
                      - لازم به ذکر است نیاز است شما هنگام دریافت سفارش خود از
                      مامورین ارسال دیجی کالا کارت شنایی معتبر ارائه دهید.
                    </span>
                  </p>
                  <p>
                    <span>
                      کارت شناسایی حتما میبایست متعلق به صاحب پروفایل یا شخص
                      تحویل گیرنده باشد، در غیر اینصورت همکاران ما امکان تحویل
                      کالا را نخواهند داشت.
                    </span>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <span>
                      - همکاران ما اجازه ورود به ساختمان را ندارند و موظف هستند
                      کالا را{" "}
                      <u>
                        <strong>درب اصلی منتهی به خیابان</strong>
                      </u>{" "}
                      تحویل دهند.
                    </span>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <span>
                      - در صورتی که کالای خریداری شده{" "}
                      <strong>
                        <span className="text-red-600">کفش</span>
                      </strong>{" "}
                      میباشد ، برای تست سایز از دقایقی که هنگام تحویل گرفتن کالا
                      در اختیار دارید، استفاده کنید.
                    </span>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <span>
                      - لازم است در شهرهای تحت پوشش اکسپرس
                      <span>
                        <strong className="text-red-600">
                          {" "}
                          تطابق تعداد اقلام
                        </strong>
                      </span>{" "}
                      سفارش با فاکتور، در حضور همکاران تحویل سفارش کنترل شود.
                    </span>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <span>
                      - در صورت ارسال کالاهای گروه{" "}
                      <span>
                        <strong className="text-red-600">سوپر مارکت</strong>
                      </span>
                      &nbsp;توسط تحویل اکسپرس دیجی‌کالا، لازم است در حضور مامور
                      تحویل سفارش، سلامت فیزیکی کالا را بررسی و در صورت وجود
                      مشکل یا ایراد از تحویل گرفتن آن خودداری کنید. بدیهی است که
                      تحویل گرفتن کالا توسط شما به منزله تایید سلامت فیزیکی آن
                      خواهد بود.
                    </span>
                  </p>
                  <p>
                    -{" "}
                    <span>
                      <u>
                        <strong>
                          تحویل سفارشات سوپرمارکتی درب واحد امکان پذیر
                        </strong>
                      </u>{" "}
                      است و همکاران ما موظف هستند کالاهای سوپرمارکتی را درب واحد
                      تحویل دهند.&nbsp;
                    </span>
                  </p>
                  <p>
                    <span>
                      - تحویل سفارش در اماکن عمومی همچون کافه، کافی نت، رستوران،
                      هتل و مانند آن امکان‌پذیر نیست و لازم است آدرس تحویل، دقیق
                      و قابل استناد باشد.
                    </span>
                  </p>
                  <p>
                    <span>
                      - هزینه ارسال تمام سفارشات&nbsp;
                      <u>
                        <strong>عادی دیجی کالا برای</strong>
                      </u>
                      <strong>&nbsp;تهران و&nbsp;شهرستان ها&nbsp;</strong>
                      <strong>39,500&nbsp;تومان الی 49000 تومان</strong>&nbsp;و
                      ارسال تمام&nbsp;
                      <strong>
                        <u>سفارش های سوپرمارکتی</u>
                        <span>&nbsp;</span>19,000 تومان
                      </strong>{" "}
                      میباشد.
                    </span>
                  </p>
                </div>
                <div className="py-5 ">
                  <p>
                    <span>
                      - در صورتی که شما در شهرهای تحت پوشش اکسپرس نیستید ، سفارش
                      شما با پست پیشتاز و طی&nbsp;
                      <span>
                        <strong>4</strong>&nbsp;&nbsp;
                      </span>
                      روز کاری تحویل شما خواهد شد.
                    </span>
                  </p>
                  <p>
                    <span>
                      - هزینه ارسال سفارشات از طریق&nbsp;
                      <strong>پست پیشتاز&nbsp;49,000 تومان</strong>
                      <strong> </strong>میباشد.
                    </span>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <span>
                      <strong>
                        <span className="text-red-700">
                          - ارسال کالاهای سنگین و حجیم ;
                        </span>
                      </strong>
                    </span>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <span>
                      - اگر کالای شما جزء کالاهای سنگین باشد&nbsp;در تهران،
                      اسلامشهر، کرج بسته به وزن و ماهیت کالا از 50,000 تومان تا
                      144,000 تومان &nbsp;و در&nbsp;حومه تهران&nbsp;( فیروزکوه،
                      دماوند، هشتگرد، طالقان ) و شهرهای ذکر شده در لیست زیر
                      بصورت پس کرایه&nbsp; ارسال میشود .
                    </span>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <span>
                      <strong>
                        <span className="text-red-700">
                          کالاهای سنگین شامل ;
                        </span>
                      </strong>
                    </span>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <span>
                      _ یخچال فریزر
                      <br />
                      _ ساید بای ساید
                      <br />
                      _ اجاق گاز
                      <br />
                      _ ماشین ظرفشویی
                      <br />
                      _ ماشین لباسشویی
                      <br />
                      _ کولر آبی
                      <br />
                      _ کولر گازی
                      <br />
                      _ کتابخانه های حجیم
                      <br />
                      _ پیانو
                      <br />_ میز تلویزیون
                    </span>
                  </p>
                  <p>
                    <span>_ مبلمان</span>
                  </p>
                  <p>
                    <span>_ موتورسیکلت</span>
                  </p>
                </div>
                <div className="py-5 ">
                  <p>
                    <span>
                      <strong>
                        <span className="text-red-700">
                          لطفا به موارد زیر دقت داشته باشید:
                        </span>
                      </strong>
                    </span>
                  </p>
                  <p>
                    <span>
                      - باربری تنها مسئول تحویل سفارش است و باز کردن جعبه و نصب
                      کالاهایی که باید توسط نصاب شرکت مربوط راه اندازی شوند
                      (مانند تلویزیون، ماشین لباسشویی و نظیر آن) تنها باید
                      توسط&nbsp;&nbsp;
                      <strong>
                        <span className="text-red-700">نصاب مجاز</span>
                      </strong>{" "}
                      انجام شود. برای این منظور لازم است خریدار با شرکت مربوط یا
                      نمایندگی مجاز آن تماس بگیرد. در غیر این صورت امکان استفاده
                      از هرگونه گارانتی یا خدمات پس از فروش از بین خواهد رفت.
                      <br />- روش باربری تنها ویژه کالاهای بزرگ است و در صورت
                      انتخاب برای سایر کالاها، روش ارسال تغییر پیدا خواهد کرد و
                      حداقل&nbsp;&nbsp;
                      <span>
                        <strong className="text-red-700">2&nbsp;</strong>
                      </span>{" "}
                      روز تحویل سفارش را به تعویق خواهد انداخت.
                    </span>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <span>
                      - سفارشات باربری بین{" "}
                      <span className="text-red-700">3</span> تا{" "}
                      <span className="text-red-700">14</span> روز کاری تحویل
                      خواهد شد.&nbsp;
                      <strong>
                        `&quot;`این &nbsp;مدت در ایام پر ترافیک کاری مانند پایان
                        سال ممکن است افزایش یابد.`&quot;`
                      </strong>
                    </span>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    -{" "}
                    <span>
                      ارسال&nbsp;سفارشات باربری درشهرستان ها از طریق اکسپرس دیجی
                      کالا خواهد بود. هزینه ارسال تا درب منزل بر اساس
                      مسافت،&nbsp;ماهیت و وزن کالا محاسبه می گردد و{" "}
                      <strong>حداقل 60 هزار تومان</strong> می باشد. هزینه نهایی
                      ارسال سفارش به صورت پس کرایه خواهد بود و بعد از ثبت سفارش،
                      از طریق تماس با مشتری هماهنگ می گردد.
                    </span>
                  </p>
                  <p>&nbsp;</p>
                </div>
                <div className="py-5 ">
                  <p>
                    <span>
                      <span>
                        <strong className="text-red-700">
                          شهرهای تحت پوشش (و شهرهای نزدیک به آنها):
                        </strong>
                      </span>
                    </span>
                  </p>
                  <p>
                    <span>
                      <span>
                        آبادان - آباده - ابهر - ابیک - آذرشهر - اراک -
                        آران&nbsp;بیدگل - اردبیل - اردکان - یزد - ارومیه -
                        آزادشهر - ازنا - اسالم - آستارا - آستانه اشرفیه&nbsp; -
                        استهبان&nbsp; - اسدآباد - اسفراین - اسلام&nbsp; آباد غرب
                        - آشخانه - اصفهان - آق قلا - اقلید&nbsp; - الشتر -
                        الیگودرز - آمل - املش - امیرکلا&nbsp; - اندیکا - اندیمشک
                        - اهر - اهرم - اهواز - اوز - ایرانشهر - ایلام&nbsp; -
                        بابل - بابلسر - بانه&nbsp; - بجنورد - برازجان - بردسکن -
                        بروجرد&nbsp; - بستان آباد - بستک - بم - بناب - بندرترکمن
                        - بندر دیلم - بندر عباس&nbsp; - بندرانزلی&nbsp; -
                        بندرکیاشهر - بندرگز - بهبهان - بهشهر - بوشهر&nbsp; -
                        بوکان - بیجار - بیرجند - پارس آباد - پارسیان - پره سر -
                        پیرانشهر - پیله سوار - تاکستان&nbsp; - تالش(هشتپر) -
                        تبریز - تربت حیدریه - تکاب - تنکابن&nbsp; - جاجرم -
                        جلفا&nbsp; - جوانرود - جویبار - چابکسر - چالوس -
                        جیرفت&nbsp; - جم - خمام - جهرم - خدابنده - خرم
                        آباد&nbsp; - خرمدره - خرمشهر - خشکبیجار - خمین - خنج -
                        خواف - خورموج &nbsp;- خوی - داراب - دامغان - دورود -
                        دزفول - دهدشت - دهگلان - دیر - دیواندره - رامسر - رحیم
                        آباد&nbsp; - رستم آباد -&nbsp; رشت - رضوانشهر - رفسنجان
                        - روانسر - رودان - رودبار - رودسر - زاهدان - زرند -
                        زنجان - ساری - سبزوار - سراب - سرعین - سعادت شهر - سقز -
                        سلماس - سلمانشهر - سمنان - سنگر - سنندج - سیاهکل -
                        سیرجان - شاهرود - شاهین دژ - شبستر - سردشت - شفت&nbsp; -
                        شهربابک - شهرکرد&nbsp; - شوش دانیال - شوشتر - شیراز -
                        شیروان - صوفیان - صومعه&nbsp;سرا - طبس - عجب شیر -
                        عسلویه - علی &nbsp;آباد &nbsp;- فردوس - فریدونکنار - فسا
                        - فیروزآباد &nbsp;- قائمشهر - قائن -&nbsp; قائنات -
                        قره&nbsp;ضیاالدین - قروه - قزوین&nbsp; - قشم - قم -
                        قوچان - قیر و&nbsp; کارزین -&nbsp;کازرون - کاشان&nbsp; -
                        کاشمر - کاکی - کرامش - کرج - کردکوی - کرمان -&nbsp; -
                        کرمانشاه - کرمی - کلاچای - کلاله - کله&nbsp;دار - کنگاور
                        - کهنوج - کوچصفهان - کنگان - کوهدشت&nbsp; - کیش - گالکیش
                        - گچساران&nbsp; - گرگان - گلپایگان - گلوگاه&nbsp; -
                        گناباد - گناوه - گنبد - لار - لالی - لامرد - لاهیجان -
                        لشت - نشا - لنگرود - لوشان - ماسال&nbsp; و شاندرمن&nbsp;
                        - ماکو - محمود&nbsp; آباد - محلات - مراغه - مرند -
                        مرودشت - مریوان - مسجد سلیمان - مشکین&nbsp; شهر - مشه
                        (کوشان راه) - ملایر - ملکان&nbsp; - منجیل - مهاباد - مهر
                        - میاندواب - میانه - میبد - میناب - مینودشت - نجف
                        آباد&nbsp; - نقده - نکا - نمین - نهاوند - نورآباد -
                        نورآباد فارس -&nbsp; نور&nbsp; و&nbsp; رویان - نوشهر- نی
                        ریز - نیشابور - نیم ور - هادی&nbsp; شهر - هشتگرد - همدان
                        - هومن - یاسوج - یزد{" "}
                      </span>
                    </span>
                  </p>
                </div>
                <div className="my-5">
                  <Image
                    alt="Delivery"
                    width={1500}
                    height={1500}
                    src="/faq/delivery.webp"
                    className="w-full h-full object-cover rounded-lg"
                  />
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

                    <ExpressDeliveryAccordion />
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
