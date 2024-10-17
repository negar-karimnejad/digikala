import { Info } from "lucide-react";
import Image from "next/image";

export default function Privacy() {
  return (
    <div className="max-lg:pb-20">
      <div className="bg-red-500 w-full h-10">
        <Image
          alt="privacy-gif"
          className="w-full h-full object-cover"
          src="/privacy-page.gif"
          width={1000}
          height={1000}
        />
      </div>
      <div className="px-5 my-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="35"
          viewBox="0 0 48 53"
          fill="none"
        >
          <path
            d="M24 23.4667C34.5649 23.4667 40.5908 27.4839 41.3259 35.4406C41.4197 36.4565 40.6201 37.3333 39.5999 37.3333H8.40015C7.37989 37.3333 6.58032 36.4565 6.67418 35.4406C7.40926 27.4839 13.4351 23.4667 24 23.4667Z"
            fill="#F47383"
          />
          <path
            d="M24 2.66663C28.7865 2.66663 32.6666 6.54682 32.6666 11.3333V13.0666C32.6666 17.8531 28.7865 21.7333 24 21.7333C19.2136 21.7333 15.3334 17.8531 15.3334 13.0666V11.3333C15.3334 6.54682 19.2136 2.66663 24 2.66663Z"
            fill="#F47383"
          />
          <g filter="url(#filter0_d)">
            <g filter="url(#filter1_d)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.9465 34.7981L33.2388 31.999L30.6671 30.8547C30.5831 30.8174 30.5159 30.7502 30.4786 30.6664L29.3346 28.0947L26.535 28.3873C26.4441 28.3963 26.353 28.3717 26.2791 28.3183L24.0001 26.6666L21.721 28.3183C21.6469 28.3717 21.5559 28.3963 21.4651 28.3873L18.6653 28.0947L17.5214 30.6664C17.4842 30.7502 17.4171 30.8174 17.3331 30.8543L14.7614 31.999L15.0536 34.7981C15.063 34.889 15.0386 34.9803 14.985 35.0543L13.3333 37.3334L14.985 39.6125C15.0386 39.6865 15.063 39.7778 15.0536 39.8687L14.7614 42.6676L17.3331 43.8119C17.4169 43.8492 17.4841 43.9164 17.5214 44.0004L18.6653 46.5721L21.4651 46.2795C21.4776 46.2795 21.4907 46.2775 21.5021 46.2775C21.5803 46.2775 21.6564 46.3023 21.7195 46.3485L24.0001 48L26.2791 46.3485C26.353 46.2947 26.4441 46.2701 26.535 46.2795L29.3346 46.5721L30.4786 44.0004C30.5159 43.9164 30.5831 43.8494 30.6671 43.8123L33.2388 42.6676L32.9465 39.8687C32.9369 39.7778 32.9614 39.6865 33.0151 39.6125L34.6666 37.3334L33.0151 35.0543C32.9614 34.9803 32.9369 34.889 32.9465 34.7981Z"
                fill="url(#paint0_linear)"
              />
            </g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.6666 36.2667L22.4 40L29.3333 33.0667"
              fill="url(#paint1_linear)"
            />
            <path
              d="M18.6666 36.2667L22.4 40L29.3333 33.0667"
              stroke="white"
              strokeWidth="1.6"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="8.33331"
              y="23.6666"
              width="29.3333"
              height="29.3333"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-1" dy="1" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.326049 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d"
              x="10.3333"
              y="24.6666"
              width="27.3333"
              height="27.3333"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear"
              x1="24"
              y1="16"
              x2="2.66665"
              y2="37.3333"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D22C4E" />
              <stop offset="0.41677" stopColor="#EE384E" />
              <stop offset="1" stopColor="#EF5662" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="24"
              y1="29.6"
              x2="17.6637"
              y2="39.3481"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D22C4E" />
              <stop offset="0.41677" stopColor="#EE384E" />
              <stop offset="1" stopColor="#EF5662" />
            </linearGradient>
          </defs>
        </svg>
        <h1 className="font-irsansb my-5 lg:text-xl">حریم خصوصی</h1>
        <p className="text-[13px] text-neutral-700 dark:text-neutral-300 leading-7">
          دیجی‌کالا با تاکید بر احترامی که برای حریم شخصی کاربران قائل است، برای
          خرید، ثبت نظر یا استفاده از برخی امکانات وب‌سایت اطلاعاتی را از
          کاربران درخواست می‌کند تا بتواند خدماتی امن و مطمئن را به کاربران
          ارائه دهد. برای پردازش و ارسال سفارش، اطلاعاتی مانند آدرس، شماره تلفن
          و ایمیل مورد نیاز است و از آنجا که کلیه فعالیت‌های دیجی‌کالا قانونی و
          مبتنی بر قوانین تجارت الکترونیک صورت می‌گیرد و طی فرایند خرید، فاکتور
          رسمی و بنا به درخواست مشتریان حقوقی گواهی ارزش افزوده صادر می‌شود، از
          این رو وارد کردن اطلاعاتی مانند نام و کد ملی برای اشخاص حقیقی یا کد
          اقتصادی و شناسه ملی برای خریدهای سازمانی لازم است. یادآوری می‌شود آدرس
          ایمیل و تلفن‌هایی که مشتری در پروفایل خود ثبت می‌کند، تنها آدرس ایمیل
          و تلفن‌های رسمی و مورد تایید مشتری است و تمام مکاتبات و پاسخ‌های شرکت
          از طریق آنها صورت می‌گیرد.
        </p>
        <p className="text-[13px] text-neutral-700 dark:text-neutral-300 leading-7">
          بنابراین درج آدرس، ایمیل و شماره تماس‌های همراه و ثابت توسط مشتری، به
          منزله مورد تایید بودن صحت آنها است و در صورتی که موارد فوق به صورت
          صحیح یا کامل درج نشده باشد، دیجی‌کالا جهت اطمینان از صحت و قطعیت ثبت
          سفارش می‌تواند از مشتری، اطلاعات تکمیلی و بیشتری درخواست کند.
        </p>
        <p className="text-[13px] text-neutral-700 dark:text-neutral-300 leading-7">
          مشتریان می‌توانند نام، آدرس و تلفن شخص دیگری را برای تحویل گرفتن سفارش
          وارد کنند و دیجی‌کالا تنها برای ارسال همان سفارش، از این اطلاعات
          استفاده خواهد کرد.
        </p>
        <p className="text-[13px] text-neutral-700 dark:text-neutral-300 leading-7">
          همچنین دیجی کالا با نصب و یا استفاده از اپلیکشن با اخذ اجازه از کاربر
          اطلاعات زیر را به صورت ناشناس از کاربر اخذ می کند. این اطلاعات در حد
          ضرورت و متناسب با مقاصدی از جمله مطالعه علت گزارش خطا و بهبود اشکالات
          سیستمی و تجربه کاربری در هنگام استفاده از وبسایت و اپلیکیشن دیجی کالا
          و نیز تحقیقات بازاریابی و ارائه خدمات و پیشنهادات خرید مرتبط تر به
          کاربران جمع آوری می شود و به نحوی مورد استفاده قرار می‌گیرند که به طور
          مستقیم به یک شخص حقیقی مشخص و معین مرتبط نباشند.
        </p>
        <p className="text-[13px] text-neutral-700 dark:text-neutral-300 leading-7">
          - نوع دستگاه، زبان و نوع سیستم عامل دستگاه شما، شناسه اندروید و شناسه
          تبلیغاتی اندروید ویژه دستگاه شما، جست‌وجوهای انجام شده در وب سایت و
          اپلیکشن دیجی کالا و نتایج انتخاب‌شده، مدت و بازه های استفاده شما از
          دیجی کالا، برنامه های نصب شده، اطلاعات فنی و گزارش‌های سرور شامل نوع
          شبکه و نوع و نسخه مرورگر
        </p>
        <p className="text-[13px] text-neutral-700 dark:text-neutral-300 leading-7">
          این اطلاعات تنها توسط دیجی کالا استفاده شده و در اختیار شریک تجاری
          دیگری قرار نمی گیرد. همچنین در صورت درخواست کاربر اطلاعات قبلی پاک شده
          و پس از آن این اطلاعات جمع آوری نمی گردد.
        </p>
        <p className="text-[13px] text-neutral-700 dark:text-neutral-300 leading-7">
          در صورت بروز وقفه (Crashes) نیز اطلاعات زیر جهت مطالعه علت بروز وققه و
          رفع خطا جمع آوری می گردد:
        </p>
        <p className="text-[13px] text-neutral-700 dark:text-neutral-300 leading-7">
          - وضعیت روت بودن یا نبودن دستگاه، میزان کل رم و میزان فضای پر آن هنگام
          وقفه، روز و ساعت رخدادها، خاموش یا روشن بودن شبکه بی‌سیم، خاموش یا
          روشن بودن شبکه دیتا، خاموش یا روشن بودن وضعیت رومینگ.
        </p>
        <p className="text-[13px] text-neutral-700 dark:text-neutral-300 leading-7">
          دیجی کالا اطلاعات را توسط کوکی (cookie) جمع آوری می کند. کوکی فایلی
          است که به درخواست یک سایت، توسط مرورگر ایجاد می‌شود و به سایت امکان
          ذخیره بازدید‌های شما و مناسب‌سازی آنها را فراهم می‌نماید. بسیاری از
          مرورگرها امکان غیرفعال کردن کوکی را فراهم کرده‌اند، به این منظور
          می‌توانید راهنمای مرورگرها را مطالعه کنید.
        </p>
        <p className="text-[13px] text-neutral-700 dark:text-neutral-300 leading-7">
          دیجی کالا برای اطلاع‌رسانی رویدادها و اخبار، خدمات و سرویس‌های ویژه یا
          پروموشن‌ها، برای اعضای وب‌سایت ایمیل یا پیامک ارسال نماید. در صورتی که
          کاربران تمایل به دریافت اینگونه ایمیل‌ها و پیامک‌ها نداشته باشند،
          می‌توانند عضویت دریافت خبرنامه دیجی‌کالا را در پروفایل خود لغو کنند.
          عدم اقدام جهت لغو، به منزله ی موافقت ضمنی با دریافت ایمیل‌ها و پیام‌ها
          و سلب حق اعتراض می‌باشد.
        </p>
        <small className="flex gap-2 text-orange-500 leading-8 my-5">
          <Info
            size={25}
            className="shrink-0 mt-1 fill-orange-400 text-white dark:text-black"
          />
          توجه داشته باشید که 300061930007، 3000619300، 1000619300، 1000012،
          1000013، 1000014، 1000020 و 50003101 شماره‌هایی است که دیجی‌کالا از
          طریق آن برای کاربران و مشتریان خود پیامک (اس‌ام‌اس) ارسال می‌کند.
          همچنین این شماره‌‌ها، سامانه ارسال پیامک است که وضعیت پردازش سفارش یا
          رویدادها، خدمات و سرویس‌های ویژه دیجی‌کالا را به اطلاع کاربران
          می‌رساند و روشن است که امکان دریافت پیام‌های شما از طریق آن وجود
          ندارد.
          <br />
          همچنین ممکن است دیجی‌کالا از طریق شماره 300061930002 برای برخی کاربران
          یا مشتریان خود، سوال نظرسنجی ارسال کند.
          <br />
          بنابراین ارسال هرگونه پیامک تحت عنوان دیجی‌کالا، با هر شماره دیگری
          تخلف و سوء استفاده از نام دیجی‌کالا است و در صورت دریافت چنین پیامکی،
          لطفاً جهت پیگیری قانونی آن را بهInfo@digikala.comاطلاع دهید.
        </small>
        <p className="text-[13px] text-neutral-700 dark:text-neutral-300 leading-7">
          دیجی‌کالا ممکن است نقد و نظرهای ارسالی کاربران را در راستای رعایت
          قوانین وب سایت ویرایش کند. همچنین اگر نظر یا پیام ارسال شده توسط
          کاربر، مشمول مصادیق محتوای مجرمانه باشد، دیجی‌کالا می‌تواند از اطلاعات
          ثبت‌شده برای پیگیری قانونی استفاده کند. کاربران ضمن استفاده از خدمات
          وب‌سایت دیجی‌کالا، حق ویرایش اطلاعات و استفاده از آنها را در چارچوب
          فوق‌الذکر به دیجی‌کالا اعطا نموده و حق اعتراض را از خود سلب می‌نمایند.
          باید تاکید شود که حفظ و نگهداری رمز عبور و نام کاربری بر عهده کاربران
          است و لذا برای جلوگیری از هرگونه سواستفاده احتمالی، کاربران نباید آن
          اطلاعات را برای شخص دیگری فاش کنند. در صورتی که کاربر شماره همراه خود
          را به فردی دیگر واگذار کرد، جهت جلوگیری از سواستفاده یا مشکلات احتمالی
          کاربران باید شماره موبایل خود را در پروفایل تغییر داده و شماره جدیدی
          ثبت نمایند.
        </p>
        <p className="text-[13px] text-neutral-700 dark:text-neutral-300 leading-7">
          مسئولیت هرگونه خسارت احتمالی که ناشی از عدم رعایت موارد فوق‌الذکر توسط
          کاربر باشد، با خود کاربر بوده وکاربر حق هر گونه ادعا علیه دیجی‌کالا را
          از خود سلب می‌کند. دیجی‌کالا هویت شخصی کاربران را محرمانه می‌داند و
          اطلاعات شخصی آنان را به هیچ شخص یا سازمان دیگری منتقل نمی‌کند، مگر
          اینکه با حکم مقام قضایی یا اداری صالحه یا طبق قوانین و مقررات رایج
          کشور موظف باشد در اختیار مراجع ذی‌صلاح قرار دهد.در این موارد هیچ گونه
          مسئولیت قانونی مبنی بر جبران خسارت برای دیجی‌کالا وجود ندارد و کاربران
          با اعلام رضایت خود در استفاده از خدمات وب سایت ضمنا حق هرگونه اعتراض
          را از خود سلب نموده اند.
        </p>
        <p className="text-[13px] text-neutral-700 dark:text-neutral-300 leading-7">
          همچنین بدین وسیله به اطلاع کاربران رسانده می‌شود که دیجی‌کالا همانند
          سایر وب‌سایت‌ها از جمع‌آوری IP و کوکی‌ها استفاده می‌کند، کوکی فایلی
          است که به درخواست یک سایت، توسط مرورگر ایجاد می‌شود و به سایت امکان
          ذخیره بازدید‌های شما و مناسب‌سازی آنها را فراهم می‌نماید. بسیاری از
          مرورگرها امکان غیرفعال کردن کوکی را فراهم کرده‌اند، به این منظور
          می‌توانید راهنمای مرورگرها را مطالعه کنید. اما پروتکل، سرور و لایه‌های
          امنیتی دیجی‌کالا و روش‌های مناسب مدیریت داده‌ها حداکثر تلاش را به عمل
          می‌آورد که اطلاعات کاربران را محافظت و از دسترسی‌های غیرقانونی جلوگیری
          کند. طبیعتا مسئولیت هرگونه سواستفاده به شخص یا اشخاص متخلف مربوط بوده
          و دیجی‌کالا حق اعتراض و پیگیری را از طریق قانونی بنابر صلاحدید خود
          محفوظ می‌دارد.
        </p>
        <p className="text-[13px] text-neutral-700 dark:text-neutral-300 leading-7">
          در صورتی که تمایلی به دریافت ایمیل‌ها و خبرنامه‌های دیجی‌کالا ندارید،
          می‌توانید بر روی کلمه لغو عضویت در انتهای صفحه ایمیل کلیک کنید.
        </p>
        <p className="text-[13px] text-neutral-700 dark:text-neutral-300 leading-7">
          دیجی‌کالا برای حفاظت و نگهداری اطلاعات و حریم شخصی کاربران همه توان
          خود را به کار می‌گیرد و امیدوار است که تجربه خریدی امن، راحت و خوشایند
          را برای همه کاربران فراهم آورد.
        </p>
        <br />
        <p className="text-[13px] text-neutral-700 dark:text-neutral-300 leading-7">
          در صورت وجود هرگونه سوال، لطفا با اطلاعات تماس زیر ارتباط برقرار کنید.
        </p>
        <p className="text-[13px] text-neutral-700 leading-7 font-irsansb dark:text-white">
          تلفن تماس و فکس:
        </p>
        <p className="text-[13px] text-neutral-700 dark:text-neutral-300 leading-7">
          ۰۲۱ – ۶۱۹۳۰۰۰۰(پاسخگویی ۲۴ ساعته، ٧ روز هفته)
        </p>
        <p className="text-[13px] text-neutral-700 leading-7 font-irsansb dark:text-white">
          دفتر مرکزی:
        </p>
        <p className="text-[13px] text-neutral-700 dark:text-neutral-300 leading-7">
          استان تهران - شهر تهران - خیابان گاندی جنوبی - نبش خیابان ۲۱ - پلاک ۲۸
        </p>
      </div>
    </div>
  );
}
