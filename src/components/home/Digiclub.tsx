import { Goal, Radius, Ticket } from "lucide-react";
import Image from "next/image";

export default function Digiclub() {
  return (
    <div className="bg-gradient-to-l to-sky-300 from-sky-800 rounded-2xl py-4 lg:px-5 px-5 mx-3 mt-5">
      <div className="flex max-lg:flex-col lg:items-center items-start justify-between gap-5 w-full pr-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          height="40"
          viewBox="0 0 154 42"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M50.3917 9.11431C50.6388 9.11431 50.9841 9.25719 51.158 9.43019L53.7378 12.0065L53.7551 12.0283V10.1971C53.7551 9.59934 54.2416 9.11431 54.8403 9.11431H58.4559C58.9943 9.11431 59.4455 9.45838 59.6104 9.93508C59.6233 9.99338 59.6278 10.0543 59.6278 10.117V32.5469C59.6278 36.3425 57.2822 39.5756 53.929 40.7885C53.0133 41.1204 52.0218 41.2998 50.9841 41.2998H46.0516C45.5895 41.2998 45.1531 41.1178 44.8252 40.7885C44.1963 40.1471 43.3434 39.279 42.5053 38.4268C41.4336 37.3459 42.2082 35.5109 43.7317 35.5109H50.9642C52.032 35.5109 52.9613 34.9188 53.4387 34.0462C53.6621 33.6387 53.7551 33.1748 53.7551 32.7115V32.5706H44.2303C43.6835 32.5706 43.1496 32.5168 42.6336 32.4142C38.9051 31.5153 36.1359 28.1611 36.1359 24.1656V17.5988C36.1359 12.9119 39.9402 9.11431 44.634 9.11431H50.3917ZM99.9667 0.335557C100.564 0.335557 101.052 0.823148 101.052 1.41902V31.3806C101.052 32.045 100.508 32.5883 99.8422 32.5883H96.378C95.7074 32.5883 95.169 32.045 95.169 31.3806V1.54332C95.169 0.879532 95.7074 0.335557 96.378 0.335557H99.9667ZM135.19 0.33466C135.79 0.33466 136.275 0.819688 136.275 1.41812V9.13116H145.8C146.347 9.13116 146.881 9.18562 147.398 9.2875C151.126 10.1864 153.895 13.5406 153.895 17.5362V24.101C153.895 28.7879 150.088 32.5881 145.394 32.5881H139.689C139.457 32.5881 139.233 32.5144 139.049 32.3779C139.004 32.3472 138.96 32.3106 138.921 32.2716L138.919 32.2696L136.273 29.617V31.5046C136.273 32.1005 135.785 32.5881 135.188 32.5881H131.573C131.034 32.5881 130.583 32.2434 130.418 31.7667C130.405 31.7084 130.401 31.6475 130.401 31.5847V1.41812C130.401 0.819688 130.887 0.33466 131.486 0.33466H135.19ZM108.769 9.13897C109.371 9.13642 109.86 9.62208 109.86 10.2224V24.2114C109.86 25.5985 110.986 26.723 112.375 26.723H121.604L121.599 10.2327C121.599 9.63426 122.085 9.14859 122.684 9.14859H126.391C126.991 9.14859 127.476 9.63362 127.476 10.2321L127.479 31.5848C127.479 31.6476 126.846 32.5882 126.308 32.5882H122.692C122.095 32.5882 121.607 32.1006 121.607 31.5047V29.6172L118.962 32.2698C118.92 32.3108 118.877 32.3473 118.831 32.378C118.647 32.5139 118.423 32.5882 118.191 32.5882H112.486C107.791 32.5882 103.985 28.7881 103.985 24.1012V10.2417C103.985 9.64515 104.468 9.1614 105.065 9.1582L108.769 9.13897ZM87.4796 9.06216C87.8287 9.0519 88.1694 9.18581 88.4146 9.43057L91.8589 12.8693C92.6315 13.6408 92.1213 14.9946 91.0342 14.9946L89.624 14.9948C89.5668 14.9948 89.5083 14.9948 89.4489 14.9948L86.7179 14.9954C86.6406 14.9954 86.5628 14.9954 86.4849 14.9955L83.8916 14.9961C83.8147 14.9961 83.7381 14.9961 83.662 14.9961L81.3768 14.9967C81.3167 14.9967 81.2577 14.9967 81.1998 14.9967L79.4699 14.9972C78.0805 14.9972 76.9543 16.121 76.9543 17.5082V24.214C76.9543 25.6005 78.0786 26.7231 79.4674 26.725L91.1452 26.7231C91.744 26.7231 92.2298 27.2081 92.2298 27.8065V31.5048C92.2298 32.1026 91.744 32.5883 91.1452 32.5883H79.1747C78.6273 32.5883 78.0934 32.5338 77.5768 32.4319C73.8489 31.533 71.0797 28.1788 71.0797 24.1832V17.6184C71.0797 13.7337 73.6968 10.4557 77.2649 9.44787C77.8097 9.29602 78.3757 9.19671 78.9597 9.15378C79.1638 9.1384 79.3717 9.13135 79.5803 9.13135L79.6797 9.13104C79.6959 9.13099 79.714 9.13093 79.7339 9.13087L79.8744 9.1304C81.1637 9.12596 86.3034 9.10577 87.4796 9.06216ZM23.3036 0.299805C23.9023 0.299805 24.3888 0.785474 24.3888 1.38327V31.5498C24.3888 31.6126 24.3843 31.6735 24.3714 31.7318C24.2065 32.2085 23.7547 32.5532 23.2169 32.5532H19.6013C19.0045 32.5532 18.5161 32.0656 18.5161 31.4698V29.5828L15.8709 32.2348C15.8298 32.2758 15.7861 32.3123 15.7406 32.3431C15.5564 32.4795 15.3324 32.5532 15.1008 32.5532H9.39498C4.70124 32.5532 0.894653 28.7524 0.894653 24.0662V17.5013C0.894653 13.5058 3.66354 10.1516 7.39209 9.25264C7.9087 9.15077 8.44199 9.09631 8.9894 9.09631H18.5142V1.38327C18.5142 0.785474 19 0.299805 19.5988 0.299805H23.3036ZM32.1141 9.09707C32.7135 9.09707 33.1993 9.5821 33.1993 10.1805V31.4699C33.1993 32.0683 32.7135 32.5533 32.1141 32.5533H28.41C27.8106 32.5533 27.3248 32.0683 27.3248 31.4699V10.1805C27.3248 9.5821 27.8106 9.09707 28.41 9.09707H32.1141ZM67.3537 9.09707C67.9531 9.09707 68.4389 9.5821 68.4389 10.1805V31.4699C68.4389 32.0683 67.9531 32.5533 67.3537 32.5533H63.6496C63.0502 32.5533 62.5644 32.0683 62.5644 31.4699V10.1805C62.5644 9.5821 63.0502 9.09707 63.6496 9.09707H67.3537ZM145.507 14.9944H136.275V26.7229H145.505C146.894 26.7229 148.02 25.5984 148.02 24.2112V17.5054C148.02 16.1189 146.896 14.9964 145.507 14.9944ZM53.7551 14.9616H44.5236C43.1348 14.9616 42.0086 16.0867 42.0086 17.4732V24.179C42.0086 25.5655 43.1323 26.6881 44.5217 26.69H53.7551V14.9616ZM18.5142 14.9596H9.28268C7.89329 14.9621 6.76895 16.084 6.76895 17.4706V24.177C6.76895 25.5636 7.89522 26.688 9.2846 26.688H18.5142V14.9596ZM67.3537 0.335429C67.9531 0.335429 68.4389 0.820457 68.4389 1.41889V5.11651C68.4389 5.71495 67.9531 6.19998 67.3537 6.19998H63.6496C63.0502 6.19998 62.5644 5.71495 62.5644 5.11651V1.41889C62.5644 0.820457 63.0502 0.335429 63.6496 0.335429H67.3537ZM32.1141 0.300702C32.7135 0.300702 33.1993 0.78573 33.1993 1.38417V5.08178C33.1993 5.68022 32.7135 6.16525 32.1141 6.16525H28.41C27.8106 6.16525 27.3248 5.68022 27.3248 5.08178V1.38417C27.3248 0.78573 27.8106 0.300702 28.41 0.300702H32.1141Z"
            fill="white"
          />
        </svg>
        <div className="rounded-lg flex overflow-hidden gap-2 max-lg:mx-auto">
          <div className="p-0.5 flex max-lg:flex-col max-lg:pt-2 gap-2 bg-white items-center pr-5">
            <Radius className="text-sky-500" size={17} />
            <p className="text-xs font-bold text-black">چرخ و بخت</p>
            <Image
              alt=""
              width={130}
              height={130}
              src="/digiclub/wheel-spinner.webp"
              className="object-cover"
            />
          </div>
          <div className="p-0.5 flex max-lg:flex-col max-lg:pt-2 gap-2 bg-white items-center pr-5">
            <Goal className="text-sky-500" size={17} />
            <p className="text-xs font-bold text-black">ماموریت ها</p>
            <Image
              alt=""
              width={130}
              height={130}
              src="/digiclub/missions.webp"
            />
          </div>
          <div className="p-0.5 flex max-lg:flex-col max-lg:pt-2 gap-2 bg-white items-center pr-5">
            <Ticket className="text-sky-500" size={17} />
            <p className="text-xs font-bold text-black">جایزه ها</p>
            <Image
              alt=""
              width={130}
              height={130}
              src="/digiclub/awards.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
