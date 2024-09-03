"use client";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Description() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="relative overflow-hidden max-lg:mb-10">
      <h1 className="lg:text-xl mb-5 text-neutral-600 dark:text-white">
        <strong>فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین</strong>
      </h1>
      <div
        className={`text-xs leading-7 text-gray-600 dark:text-gray-300 ${
          showMore ? "line-clamp-none" : "line-clamp-3"
        }`}
      >
        <p
          className={`relative after:absolute after:bg-gradient-to-t after:from-white after:to-white/50 dark:after:from-neutral-950 dark:after:to-neutral-950/50 after:w-full after:h-5 after:bottom-0 after:right-0 ${
            showMore ? "after:hidden" : "after:absolute"
          }`}
        >
          یک<strong> خرید</strong> اینترنتی مطمئن، نیازمند فروشگاهی است که
          بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمان ی
          کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛
          ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار
          کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد.
          <br />
          یکی از مهم‌ترین دغدغه‌های کاربران دیجی‌کالا یا هر فروشگاه‌ اینترنتی
          دیگری، این است که کالای خریداری شده چه زمانی به دستشان می‌رسد.
          دیجی‌کالا شیوه‌های مختلفی از ارسال را متناسب با فروشنده کالا،‌
        </p>

        <p>
          مقصد کالا و همچنین نوع کالا در اختیار کاربران خود قرار می‌دهد. هر
          یک&nbsp;از{" "}
          <Link className="text-sky-500" href="/delivery">
            روش های ارسال دیجی کالا
          </Link>{" "}
          شرایط و ویژگی‌های خاص خود را دارند که ممکن است گاهی برای کاربران جدید،
          مبهم و پیچیده به نظر برسند. برای آگاهی بیشتر مشتریان از خدمات
          دیجی‌کالا، این فروشگاه اینترنتی در بخشی از وب‌سایت خود راهنمای کاملی
          از شیوه‌‌های ارسال را به صورت ساده و به دور از پیچیدگی، قرار داده است
          که شامل 8 نوع ارسال کالا به روش‌های زیر است: ارسال امروز، دریافت
          حضوری، دریافت از گنجه، ارسال توسط فروشنده، ارسال عادی، ارسال کالاهای
          بزرگ، سنگین و فوق سنگین، ارسال سریع سوپرمارکتی، ارسال با پست
        </p>

        <p>کدام محصولات در دیجی‌کالا قابل سفارش هستند؟</p>

        <p>
          تقریبا می‌توان گفت محصولی وجود ندارد که دیجی‌کالا برای مشتریان خود در
          سراسر کشور فراهم نکرده باشد. شما می‌توانید در تمامی روزهای هفته و
          تمامی شبانه روز&nbsp;دیجی‌کالا که محصولات دارای تخفیف عالی می‌شوند،
          سفارش خود را به سادگی ثبت کرده و در روز و محدوده زمانی مناسب خود، درب
          منزل تحویل بگیرید. بعضی از گروه‌های اصلی و زیر مجموعه‌های پرطرفدار
          محصولات دیجی‌کالا شامل مواردی می‌شود که در ادامه به معرفی آن‌ها
          می‌پردازیم که&nbsp;امکان{" "}
          <Link className="text-sky-500" href="/sameday-delivery">
            <strong>ارسال امروز</strong>
          </Link>{" "}
          برای آن ها وجود دارد.&nbsp;
        </p>

        <p>کالای دیجیتال</p>

        <p>
          انواع گوشی موبایل از برندهای مختلفی مثل آیفون، &nbsp;
          <Link
            className="text-sky-500"
            href="/category/mobile/mobile-brands/samsung"
            target="_blank"
          >
            گوشی سامسونگ
          </Link>
          ،&nbsp;
          <Link
            className="text-sky-500"
            href="/category/mobile/mobile-brands/nokia"
            target="_blank"
          >
            گوشی نوکیا
          </Link>
          ،&nbsp;
          <Link
            className="text-sky-500"
            href="/category/mobile/mobile-brands/xiaomi"
            target="_blank"
          >
            گوشی شیائومی
          </Link>
          ،&nbsp;
          <Link
            className="text-sky-500"
            href="/category/mobile/mobile-brands/huawei"
            target="_blank"
          >
            گوشی هواوی
          </Link>
          ، و...، انواع کنسول بازی ps4 و ps5، انواع تبلت‌های پرطرفدار مثل&nbsp;
          <Link
            className="text-sky-500"
            href="/category/mobile/mobile-brands/samsung"
            target="_blank"
          >
            تبلت سامسونگ
          </Link>
          &nbsp;نوت 10، انواع هندزفری مثل&nbsp;
          <Link
            className="text-sky-500"
            href="/category/electronic-devices/headphone"
            target="_blank"
          >
            هندزفری بی سیم
          </Link>
          ،&nbsp;
          <Link
            className="text-sky-500"
            href="/category/home-appliance/video-audio-entertainment/tv"
            target="_blank"
          >
            تلوزیون
          </Link>
          &nbsp;از برندهای مختلف مثل تلویزیون سامسونگ، سونی و...، انواع مانیتور،
          کیس، کیبورد، مودم از برندهای مختلف مثل&nbsp;
          <Link
            className="text-sky-500"
            href="/category/electronic-devices/modem"
            target="_blank"
          >
            مودم ایرانسل
          </Link>
          ،&nbsp;
          <Link
            className="text-sky-500"
            href="/category/electronic-devices/antenna"
            target="_blank"
          >
            آنتن
          </Link>
          &nbsp;و ... تنها بخشی از محصولاتی هستند که زیر مجموعه کالای دیجیتال در
          دیجی‌کالا قرار دارند.
        </p>

        <p>خودرو، ابزار و تجهیزات صنعتی</p>

        <p>
          انواع خودروهای ایرانی و خارجی از برندهای مطرحی مثل هوندا، کیا و...،
          موتور سیکلت از برندهایی مثل کویر موتور و...، لوازم جانبی خودرو مثل
          سیستم صوتی تصویر، ضبط و...، لوازم یدکی مثل دیسک و صفحه کلاج و... و
          لوازم مصرفی خودرو مثل&nbsp;
          <Link
            className="text-sky-500"
            href="/category/vehicles-spare-parts/car-coating/sana-3d"
            target="_blank"
          >
            کفپوش سانا
          </Link>
          &nbsp;در این گروه قرار می‌گیرند.
        </p>

        <p>مد و پوشاک</p>

        <p>
          محصولاتی مثل انواع لباس مثل لباس مجلسی زنانه و مردانه، لباس راحتی،
          لباس ورزشی، اکسسوری، کیف، کفش، عینک آفتابی، لباس زیر، شال و روسری و...
          جزو مواردی هستند که می‌توانید آن‌ها را از برندهای مطرح ایرانی و خارجی
          موجود در دیجی کالا مثل آدیداس، نایکی، دبنهامز، آلدو، درسا و... خریداری
          کنید.
        </p>

        <p>اسباب بازی کودک و نوزاد</p>

        <p>
          در این دسته از کالاهای دیجی‌کالا، انواع لوازم بهداشتی و حمام کودک و
          نوزاد، انواع پوشاک و کفش،&nbsp;
          <Link
            className="text-sky-500"
            href="/category/electronic-devices/tablet"
            target="_blank"
          >
            تبلت
          </Link>
          ،&nbsp;
          <Link
            className="text-sky-500"
            href="/category/mother-and-child"
            target="_blank"
          >
            اسباب‌بازی
          </Link>
          ، لوازم اتاق خواب کودک، لوازم ایمنی، لوازم شخصی و غذا خوری و ... قرار
          می‌گیرد تا خرید را برای پدر و مادرها به کاری سریع و آسان تبدیل کند.
        </p>

        <p>کالاهای سوپر مارکتی</p>

        <p>
          هر چیزی از مواد خوراکی که به آن نیاز دارید، در&nbsp;
          <Link
            className="text-sky-500"
            href="/category/category/food-beverage"
            target="_blank"
          >
            سوپرمارکت
          </Link>
          &nbsp;دیجی‌کالا پیدا می‌شود، محصولات پرطرفداری مثل&nbsp;
          <Link
            className="text-sky-500"
            href="/category/category/food-beverage/peanut-butter"
            target="_blank"
          >
            کره بادام‌زمینی
          </Link>
          ،&nbsp;
          <Link
            className="text-sky-500"
            href="/category/category/food-beverage/honey"
            target="_blank"
          >
            عسل
          </Link>
          ،&nbsp;
          <Link
            className="text-sky-500"
            href="/category/category/food-beverage/sauce"
            target="_blank"
          >
            سس
          </Link>
          ،&nbsp;
          <Link
            className="text-sky-500"
            href="/category/category/food-beverage/coffee"
            target="_blank"
          >
            قهوه
          </Link>
          ،&nbsp;
          <Link
            className="text-sky-500"
            href="/category/category/food-beverage/saffron"
            target="_blank"
          >
            زعفران
          </Link>
          ، شکلات، انواع نان و ... از برندهای معتبر و معروفی مثل&nbsp;
          <Link
            className="text-sky-500"
            href="/category/category/food-beverage/nestle"
            target="_blank"
          >
            نستله
          </Link>
          ، نوتلا، استارباکس، مزمز، چی توز و ... همگی در اختیار شما هستند و تا
          رسیدن به آشپزخانه شما تنها چند کلیک فاصله دارند.
        </p>

        <p>زیبایی و سلامت</p>

        <p>
          انواع لوازم آرایش مثل لاک، رنگ مو، لوازم آرایش لب، چشم، صورت و... همگی
          در دیجی‌کالا موجود هستند. همچنین محصولات بهداشتی مثل انواع شامپو،
          کرم،&nbsp;
          <Link
            className="text-sky-500"
            href="/category/personal-appliance/skin-care/face-masque"
            target="_blank"
          >
            ماسک صورت
          </Link>
          ، ضد تعریق،&nbsp;
          <Link
            className="text-sky-500"
            href="/category/personal-appliance/hair-care/hair-mask"
            target="_blank"
          >
            ماسک مو
          </Link>
          &nbsp; و...، انواع لوازم شخصی برقی، ست هدیه، بهترین انواع عطر و اسپری،
          انواع زیورآلات طلا و نقره مثل&nbsp;
          <Link
            className="text-sky-500"
            href="/category/category/gold-jewelry/women-gold-jewelry/set"
            target="_blank"
          >
            سرویس طلا
          </Link>
          ، سرویس نقره و... به همراه وسایل مراقبت شخصی طبی در گروه زیبایی و
          سلامت دیجی‌کالا قرار می‌گیرد. در این بخش برندهای مطرحی مثل اسنس، پنبه
          ریز، سینره و... حضور دارند.
        </p>

        <p>خانه و آشپزخانه</p>

        <p>
          یکی از متنوع‌ترین بخش‌های دیجی‌کالا، بخش لوازم خانه و آشپزخانه است که
          از محصولاتی مثل صندلی گیمینگ در بخش صندلی‌ها گرفته تا انواع&nbsp;
          <span className="text-sky-500">مبل راحتی</span>، انواع آبگرمکن
          مثل&nbsp;
          <span className="text-sky-500">آبگرمکن بوتان</span>، لباسشویی‌های
          متنوع مثل انواع&nbsp;
          <span className="text-sky-500">لباسشویی اسنوا</span>، شیرآلات مختلف
          مثل شیرآلات قهرمان و...، ظروف و همچنین لوازم برقی آشپزخانه مثل توستر
          و... را شامل می‌شود و امکان خریدی عالی را برای مشتریان فراهم کرده است.
          در بخش لوازم خانگی دیجی‌کالا، برندهای معتبری مثل تفال، اخوان، فیلیپس،
          ال جی، اسنوا، جی پلاس و... حضور دارند.
        </p>

        <p>کتاب، لوازم تحریر و هنر</p>

        <p>
          بخش هنر، کتاب، رمان و لوازم تحریر دیجی‌کالا نیز یکی از متنوع‌ترین
          بخش‌های این فروشگاه اینترنتی است. انواع کتاب و مجله،{" "}
          <span className="text-sky-500">کتاب زبان</span>، بازی، لوازم تحریر با
          طرح‌های مختلف مانند{" "}
          <span className="text-sky-500">دختر کفشدوزکی</span>، سازهایی مثل&nbsp;
          <span className="text-sky-500">پیانو</span>
          ،&nbsp;
          <span className="text-sky-500">سنتور</span>
          ،&nbsp;
          <span className="text-sky-500">هنگ درام</span>
          &nbsp; و... با بهترین قیمت‌ها و از بهترین برندها در دسترس شما قرار
          دارند.
        </p>

        <p>ورزش و سفر</p>

        <p>
          هر نوع وسیله و لباس ورزشی که فکرش را کنید، انواع وسایل کمپینگ و
          کوهنوردی، ساک و قمقمه ورزشی و... در این بخش قرار می‌گیرند. همچنین شما
          می‌توانید وسایل مد نظر خود را بر اساس نوع ورزش (آبی، هوازی، بدنسازی
          و...) در دسته‌بندی‌های دیجی‌کالا پیدا کنید.
        </p>

        <p>محصولات بومی و محلی</p>

        <p>
          و در آخر دیجی‌کالا از طریق به فروش رساندن محصولات بومی و سنتی متفاوتی
          مثل انواع خوراکی، گلیم و گبه، ابزار و ... تلاش کرده تا بین هنر ایرانی
          و متقاضیان آن کوتاه‌ترین راه را پیدا کند. در این بخش شما می‌توانید
          انواع محصولات از جمله ظروف زیبای مخصوص به&nbsp;سفره هفت‌سین&nbsp; و
          پذیرایی از مهمانان در روزهای&nbsp;نوروز، انواع آیینه و شمعدان و هر آن
          چیزی را که برای خلق زیبایی در روزهای بهاری به آن نیاز دارید، با قیمت
          مناسب و تنوع بسیار بالا انتخاب کنید. همچنین در صفحه{" "}
          <strong>
            <span className="text-sky-500">برچسب ها</span>
          </strong>
          ، امکان مشاهده و خرید انواع محصولات با طرح های بومی وجود
          دارد.&nbsp;&nbsp;دیجی‌کالا همچنین برای اینکه حال و هوای عید را به
          اعضای خود هدیه کند،&nbsp;تقویم ۱۴۰۱، انواع ایده&nbsp;عکس پروفایل عید
          نوروز،&nbsp;آهنگ‌های عید نوروز&nbsp;و موزیک‌های شاد بهاری، وسایل مربوط
          به&nbsp;خانه‌تکانی&nbsp;و&nbsp;انواع لباس های عید&nbsp; را برای شما
          فراهم کرده است تا بتوانید در کنار خرید خود، از این حال و هوای تازه
          نهایت لذت را ببرید.
        </p>

        <p>&nbsp;</p>
      </div>
      <button
        onClick={() => setShowMore((prev) => !prev)}
        className="lg:text-sky-500 flex mt-3 lg:text-xs max-lg:text-neutral-400 items-center"
      >
        {showMore ? "بستن" : "مشاهده بیشتر"}
        <ChevronLeft size={15} />
      </button>
    </div>
  );
}
