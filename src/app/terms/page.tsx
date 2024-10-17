import TermsAccordion from "@/components/accordions/TermsAccordion";

import Image from "next/image";

const pStyle = "text-[13px] text-neutral-700 dark:text-neutral-300 leading-7";

export default function Terms() {
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
      <div className="px-5 lg:px-20 my-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="34"
          viewBox="0 0 49 48"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.33325 7.99998C5.33325 6.52722 6.52716 5.33331 7.99992 5.33331H29.3333C30.806 5.33331 31.9999 6.52722 31.9999 7.99998V37.3333C31.9999 38.8061 30.806 40 29.3333 40H7.99992C6.52716 40 5.33325 38.8061 5.33325 37.3333V7.99998Z"
            fill="url(#paint0_linear)"
          />
          <mask
            id="mask0"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="5"
            y="5"
            width="27"
            height="35"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.33325 5.33331H31.9999V40H5.33325V5.33331Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0)">
            <g filter="url(#filter0_d)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.33325 12C9.33325 10.5272 10.5272 9.33331 11.9999 9.33331H33.3333C34.806 9.33331 35.9999 10.5272 35.9999 12V41.3333C35.9999 42.8061 34.806 44 33.3333 44H11.9999C10.5272 44 9.33325 42.8061 9.33325 41.3333V12Z"
                fill="url(#paint1_linear)"
              />
            </g>
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.33325 12C9.33325 10.5272 10.5272 9.33331 11.9999 9.33331H33.3333C34.806 9.33331 35.9999 10.5272 35.9999 12V41.3333C35.9999 42.8061 34.806 44 33.3333 44H11.9999C10.5272 44 9.33325 42.8061 9.33325 41.3333V12Z"
            fill="#F47383"
          />
          <rect
            x="13.3333"
            y="14.6666"
            width="18.6667"
            height="2.66667"
            fill="white"
          />
          <rect
            x="13.3333"
            y="20"
            width="18.6667"
            height="2.66667"
            fill="white"
          />
          <rect
            x="13.3333"
            y="25.3333"
            width="18.6667"
            height="2.66667"
            fill="white"
          />
          <rect
            x="13.3333"
            y="30.6666"
            width="18.6667"
            height="2.66666"
            fill="white"
          />
          <rect x="13.3333" y="36" width="8" height="2.66667" fill="white" />
          <g filter="url(#filter1_d)">
            <g filter="url(#filter2_d)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M43.8283 28.4484L44.084 25.9991L41.8338 24.9979C41.7603 24.9652 41.7015 24.9064 41.6689 24.8331L40.6679 22.5829L38.2182 22.8389C38.1387 22.8468 38.059 22.8253 37.9943 22.7785L36.0002 21.3333L34.006 22.7785C33.9412 22.8253 33.8615 22.8468 33.7821 22.8389L31.3323 22.5829L30.3313 24.8331C30.2988 24.9064 30.24 24.9652 30.1665 24.9975L27.9163 25.9991L28.172 28.4484C28.1803 28.5279 28.1589 28.6077 28.112 28.6725L26.6667 30.6667L28.112 32.6609C28.1589 32.7257 28.1803 32.8056 28.172 32.8851L27.9163 35.3341L30.1665 36.3354C30.2399 36.3681 30.2987 36.4269 30.3313 36.5004L31.3323 38.7506L33.7821 38.4946C33.793 38.4946 33.8044 38.4928 33.8144 38.4928C33.8829 38.4928 33.9494 38.5145 34.0047 38.5549L36.0002 40L37.9943 38.5549C38.059 38.5079 38.1387 38.4863 38.2182 38.4946L40.6679 38.7506L41.6689 36.5004C41.7015 36.4269 41.7603 36.3682 41.8338 36.3358L44.084 35.3341L43.8283 32.8851C43.8199 32.8056 43.8413 32.7257 43.8883 32.6609L45.3334 30.6667L43.8883 28.6725C43.8413 28.6077 43.8199 28.5279 43.8283 28.4484Z"
                fill="url(#paint2_linear)"
              />
            </g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M41.4043 28.1038L35.1377 34.1038C34.9307 34.302 34.6526 34.4085 34.3662 34.3995C34.0798 34.3904 33.809 34.2664 33.615 34.0555L30.5483 30.7222L32.1183 29.2778L34.4483 31.8104L39.929 26.5629L41.4043 28.1038Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="5.33325"
              y="5.33331"
              width="34.6667"
              height="42.6667"
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
              <feOffset />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
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
              x="21.6667"
              y="18.3333"
              width="26.6667"
              height="26.6667"
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
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
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
              id="filter2_d"
              x="23.6667"
              y="19.3333"
              width="24.6667"
              height="24.6667"
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
              x1="18.6666"
              y1="-12"
              x2="-14.8402"
              y2="13.7745"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D22C4E" />
              <stop offset="0.41677" stopColor="#EE384E" />
              <stop offset="1" stopColor="#EF5662" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="22.6666"
              y1="-8.00002"
              x2="-10.8402"
              y2="17.7745"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D22C4E" />
              <stop offset="0.41677" stopColor="#EE384E" />
              <stop offset="1" stopColor="#EF5662" />
            </linearGradient>
            <linearGradient
              id="paint2_linear"
              x1="36.0001"
              y1="12"
              x2="17.3334"
              y2="30.6666"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D22C4E" />
              <stop offset="0.41677" stopColor="#EE384E" />
              <stop offset="1" stopColor="#EF5662" />
            </linearGradient>
          </defs>
        </svg>
        <h1 className="font-irsansb my-5 lg:text-xl">
          شرایط و قوانین استفاده از سرویس‌ها و خدمات دیجی‌کالا
        </h1>
        <p className={pStyle}>
          کاربر گرامی لطفاً موارد زیر را جهت استفاده بهینه از خدمات و برنامه‌های
          کاربردی دیجی‌کالا به دقت ملاحظه فرمایید.
        </p>
        <p className={pStyle}>
          ورود کاربران به وب‌سایت دیجی‌کالا هنگام استفاده از پروفایل شخصی،
          طرح‌های تشویقی، ویدئوهای رسانه تصویری دیجی‌کالا و سایر خدمات ارائه شده
          توسط دیجی‌کالا به معنای آگاه بودن و پذیرفتن شرایط و قوانین و همچنین
          نحوه استفاده از سرویس‌ها و خدمات دیجی‌کالا است. توجه داشته باشید که
          ثبت سفارش نیز در هر زمان به معنی پذیرفتن کامل کلیه شرایط و قوانین
          دیجی‌کالا از سوی کاربر است. لازم به ذکر است شرایط و قوانین مندرج،
          جایگزین کلیه توافق‌های قبلی محسوب می‌شود.
        </p>

        {/* Terms Accordion */}
        <div className="mt-10">
          <TermsAccordion />
        </div>
      </div>
    </div>
  );
}
