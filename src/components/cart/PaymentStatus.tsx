"use client";

import { useCart } from "@/utils/cartItemsContext";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { Button } from "../ui/button";

export default function PaymentStatus({ param }) {
  return <div>{param.success ? <SuccessfulPayment /> : <FailedPayment />}</div>;
}

const SuccessfulPayment = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="96"
        viewBox="0 0 200 96"
        fill="none"
      >
        <g filter="url(#filter0_f)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M65 85L65.7519 86H129.66H162L129.66 85H65Z"
            fill="url(#paint0_linear)"
          />
        </g>
        <g filter="url(#filter1_f)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M135 85L134.248 86H70.3396H38L70.3396 85H135Z"
            fill="url(#paint1_linear)"
          />
        </g>
        <circle
          opacity="0.531994"
          cx="111"
          cy="25"
          r="15"
          stroke="url(#paint1_linear)"
          strokeWidth="7"
        />
        <circle
          cx="103"
          cy="25"
          r="15"
          stroke="url(#paint1_linear)"
          strokeWidth="7"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M115 24H132L137 26.5L142 24L143.75 78.2582C143.887 82.4929 140.491 86 136.254 86H122.5C118.358 86 115 82.6421 115 78.5V24Z"
          fill="url(#paint4_linear)"
        />
        <mask
          id="mask0"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="115"
          y="24"
          width="29"
          height="62"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M115 24H132L137 26.5L142 24L143.75 78.2582C143.887 82.4929 140.491 86 136.254 86H122.5C118.358 86 115 82.6421 115 78.5V24Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M137 24H142L144 86H139L137 24Z"
            fill="url(#paint5_linear)"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M72 24H132L133.75 78.2582C133.887 82.4929 130.491 86 126.254 86H77.7458C73.5089 86 70.1131 82.4929 70.2497 78.2582L72 24Z"
          fill="url(#paint6_linear)"
        />
        <mask
          id="mask1"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="50"
          y="24"
          width="84"
          height="62"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M52 24H132L133.75 78.2582C133.887 82.4929 130.491 86 126.254 86H57.7458C53.5089 86 50.1131 82.4929 50.2497 78.2582L52 24Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask1)">
          <g filter="url(#filter2_d)">
            <ellipse
              cx="79"
              cy="61"
              rx="21"
              ry="23"
              fill="black"
              fillOpacity="0.01"
            />
          </g>
        </g>
        <ellipse
          cx="80.5"
          cy="61"
          rx="22.5"
          ry="25"
          fill="url(#paint7_linear)"
        />
        <ellipse cx="76" cy="61" rx="23" ry="25" fill="url(#paint8_linear)" />
        <g filter="url(#filter3_i)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M70 58L76 64L86 54L90 58L76 72L66 62L70 58Z"
            fill="url(#paint9_linear)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f"
            x="62.2817"
            y="82.2817"
            width="102.437"
            height="6.43656"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1.35914"
              result="effect1_foregroundBlur"
            />
          </filter>
          <filter
            id="filter1_f"
            x="35.2817"
            y="82.2817"
            width="102.437"
            height="6.43656"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1.35914"
              result="effect1_foregroundBlur"
            />
          </filter>
          <filter
            id="filter2_d"
            x="58"
            y="34"
            width="60"
            height="62"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="10" dy="4" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
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
            id="filter3_i"
            x="67"
            y="51"
            width="22.0022"
            height="20"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="3" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.434669 0 0 0 0 0.0484116 0 0 0 0 0.0484116 0 0 0 1 0"
            />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
          </filter>
          <linearGradient
            id="paint0_linear"
            x1="120.816"
            y1="84.7098"
            x2="120.833"
            y2="86.4212"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A1A3A8" />
            <stop offset="1" stopColor="#C1C3C7" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="74.3491"
            y1="84.7098"
            x2="74.3326"
            y2="86.4212"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A1A3A8" />
            <stop offset="1" stopColor="#C1C3C7" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="120"
            y1="25"
            x2="106"
            y2="25"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#74FF4F" />
            <stop offset="1" stopColor="#60E63D" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="95"
            y1="25"
            x2="109"
            y2="25"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#74FF4F" />
            <stop offset="1" stopColor="#60E63D" />
          </linearGradient>
          <linearGradient
            id="paint4_linear"
            x1="129"
            y1="86"
            x2="129"
            y2="24"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D6D6D8" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint5_linear"
            x1="137"
            y1="24"
            x2="137"
            y2="86"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D6D6D8" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint6_linear"
            x1="77"
            y1="86"
            x2="77"
            y2="24"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D6D6D8" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint7_linear"
            x1="85"
            y1="86"
            x2="85"
            y2="37"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#60E63D" />
            <stop offset="1" stopColor="#5AE03C" />
          </linearGradient>
          <linearGradient
            id="paint8_linear"
            x1="80"
            y1="86"
            x2="80"
            y2="36"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#60E63D" />
            <stop offset="1" stopColor="#5AE03C" />
          </linearGradient>
          <linearGradient
            id="paint9_linear"
            x1="77"
            y1="74"
            x2="77"
            y2="54"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#74FF4F" />
            <stop offset="1" stopColor="#60E63D" />
          </linearGradient>
        </defs>
      </svg>
      <div className="text-center font-irsansb">
        <p className="text-green-600 text-lg">پرداخت شما با موفقیت انجام شد.</p>
        <Button asChild variant="link" className="text-xs">
          <Link href="/checkout/cart">
            بازگشت
            <ArrowLeft size={15} />
          </Link>
        </Button>
      </div>
    </>
  );
};

const FailedPayment = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="96"
        viewBox="0 0 200 96"
        fill="none"
      >
        <g filter="url(#filter0_f)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M65 85L65.7519 86H129.66H162L129.66 85H65Z"
            fill="url(#paint0_linear)"
          />
        </g>
        <g filter="url(#filter1_f)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M135 85L134.248 86H70.3396H38L70.3396 85H135Z"
            fill="url(#paint1_linear)"
          />
        </g>
        <circle
          opacity="0.531994"
          cx="111"
          cy="25"
          r="15"
          stroke="url(#paint2_linear)"
          strokeWidth="7"
        />
        <circle
          cx="103"
          cy="25"
          r="15"
          stroke="url(#paint3_linear)"
          strokeWidth="7"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M115 24H132L137 26.5L142 24L143.75 78.2582C143.887 82.4929 140.491 86 136.254 86H122.5C118.358 86 115 82.6421 115 78.5V24Z"
          fill="url(#paint4_linear)"
        />
        <mask
          id="mask0"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="115"
          y="24"
          width="29"
          height="62"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M115 24H132L137 26.5L142 24L143.75 78.2582C143.887 82.4929 140.491 86 136.254 86H122.5C118.358 86 115 82.6421 115 78.5V24Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M137 24H142L144 86H139L137 24Z"
            fill="url(#paint5_linear)"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M72 24H132L133.75 78.2582C133.887 82.4929 130.491 86 126.254 86H77.7458C73.5089 86 70.1131 82.4929 70.2497 78.2582L72 24Z"
          fill="url(#paint6_linear)"
        />
        <mask
          id="mask1"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="50"
          y="24"
          width="84"
          height="62"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M52 24H132L133.75 78.2582C133.887 82.4929 130.491 86 126.254 86H57.7458C53.5089 86 50.1131 82.4929 50.2497 78.2582L52 24Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask1)">
          <g filter="url(#filter2_d)">
            <ellipse
              cx="79"
              cy="61"
              rx="21"
              ry="23"
              fill="black"
              fillOpacity="0.01"
            />
          </g>
        </g>
        <ellipse
          cx="80.5"
          cy="61"
          rx="22.5"
          ry="25"
          fill="url(#paint7_linear)"
        />
        <ellipse cx="76" cy="61" rx="23" ry="25" fill="url(#paint8_linear)" />
        <g filter="url(#filter3_i)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M86.0022 55L82.2022 51L76.5011 56.9994L70.8 51L67 55L72.6998 60.9997L67 66.9978L70.8021 71L76.5011 65.0011L82.2001 71L86.0022 66.9978L80.3024 60.9997L86.0022 55Z"
            fill="url(#paint9_linear)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f"
            x="62.2817"
            y="82.2817"
            width="102.437"
            height="6.43656"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1.35914"
              result="effect1_foregroundBlur"
            />
          </filter>
          <filter
            id="filter1_f"
            x="35.2817"
            y="82.2817"
            width="102.437"
            height="6.43656"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1.35914"
              result="effect1_foregroundBlur"
            />
          </filter>
          <filter
            id="filter2_d"
            x="58"
            y="34"
            width="60"
            height="62"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="10" dy="4" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
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
            id="filter3_i"
            x="67"
            y="51"
            width="22.0022"
            height="20"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="3" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.434669 0 0 0 0 0.0484116 0 0 0 0 0.0484116 0 0 0 1 0"
            />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
          </filter>
          <linearGradient
            id="paint0_linear"
            x1="120.816"
            y1="84.7098"
            x2="120.833"
            y2="86.4212"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A1A3A8" />
            <stop offset="1" stopColor="#C1C3C7" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="79.1843"
            y1="84.7098"
            x2="79.1668"
            y2="86.4212"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A1A3A8" />
            <stop offset="1" stopColor="#C1C3C7" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="96"
            y1="10"
            x2="96"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E0E0E2" />
            <stop offset="1" stopColor="#E0E0E2" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="88"
            y1="10"
            x2="88"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E0E0E2" />
            <stop offset="1" stopColor="#E0E0E2" />
          </linearGradient>
          <linearGradient
            id="paint4_linear"
            x1="123.136"
            y1="24"
            x2="123.136"
            y2="84.9819"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C0C2C5" />
            <stop offset="1" stopColor="#A1A3A8" />
          </linearGradient>
          <linearGradient
            id="paint5_linear"
            x1="138.964"
            y1="24"
            x2="138.964"
            y2="84.9819"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A1A3A8" />
            <stop offset="1" stopColor="#A1A3A8" stopOpacity="0.244182" />
          </linearGradient>
          <linearGradient
            id="paint6_linear"
            x1="57.215"
            y1="24"
            x2="57.215"
            y2="86"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E7E7EC" />
            <stop offset="0.871075" stopColor="#BCBFC4" />
            <stop offset="1" stopColor="#B0B3B9" />
          </linearGradient>
          <linearGradient
            id="paint7_linear"
            x1="81.7307"
            y1="46.929"
            x2="81.7307"
            y2="77.6197"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FC8C8C" />
            <stop offset="1" stopColor="#A12020" />
          </linearGradient>
          <linearGradient
            id="paint8_linear"
            x1="65.174"
            y1="28.9487"
            x2="42.6592"
            y2="69.9535"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EB5C5C" />
            <stop offset="1" stopColor="#D32F2F" />
          </linearGradient>
          <linearGradient
            id="paint9_linear"
            x1="67"
            y1="51"
            x2="67"
            y2="71"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A12020" />
            <stop offset="1" stopColor="#A11F1F" />
          </linearGradient>
        </defs>
      </svg>
      <div className="text-center font-irsansb">
        <p className="text-red-700 text-lg">متاسفانه پرداخت شما ناموفق بود!</p>
        <Button asChild variant="link" className="text-xs">
          <Link href="/checkout/cart">
            بازگشت
            <ArrowLeft size={15} />
          </Link>
        </Button>
      </div>
    </>
  );
};
