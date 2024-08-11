import Link from "next/link";
import { RefObject } from "react";

export default function FooterFaq({
  featureRef,
  vertical,
}: {
  featureRef: RefObject<HTMLDivElement>;
  vertical?: boolean;
}) {
  return (
    <div
      ref={featureRef}
      className="max-lg:hidden my-4 grid grid-cols-5 w-full justify-center items-center"
    >
      <Link
        href="/guarantee"
        className={`mx-auto flex items-center justify-center ${
          vertical ? "flex-col" : ""
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          fill="none"
          className="dark:bg-white dark:rounded-full"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M41.9305 29.6715L41.9074 29.5196C41.7378 28.4116 41.7248 27.9845 41.8499 27.5209C41.9685 27.0821 42.1898 26.7306 42.8787 25.8818C43.8101 24.7345 44.0439 24.3034 44.0438 23.625C44.0438 22.9469 43.8099 22.5157 42.8786 21.3685L42.8037 21.2763C42.195 20.5246 41.9636 20.1505 41.8499 19.7296C41.7639 19.411 41.7476 19.0404 41.7974 18.5417C41.818 18.3354 41.8426 18.1548 41.9075 17.731C42.1272 16.2967 42.1136 15.8324 41.7846 15.2696C41.4613 14.7163 41.019 14.4415 39.7705 13.9594L39.6688 13.9202C38.6248 13.5182 38.2483 13.3189 37.9132 12.9872C37.5782 12.6555 37.3772 12.2832 36.9712 11.2499L36.9314 11.1489C36.4444 9.91296 36.1665 9.47468 35.6078 9.15476C35.0667 8.84478 34.5428 8.82328 33.2251 9.01842L33.0953 9.03786C32.6952 9.09783 32.5144 9.1219 32.3079 9.14216C31.802 9.19181 31.4262 9.17573 31.1032 9.09029C30.6592 8.97284 30.3039 8.75363 29.4462 8.07148C28.2875 7.14984 27.8527 6.91876 27.1689 6.91876C26.5704 6.91876 26.056 7.16668 25.2241 7.80948C25.1428 7.87226 25.0635 7.93472 24.8918 8.07114C24.0339 8.75342 23.6786 8.97263 23.2347 9.09008C22.7655 9.21415 22.3328 9.20117 21.2137 9.03322C19.7661 8.81588 19.2979 8.82929 18.7303 9.15436C18.1527 9.48514 17.9013 9.88936 17.367 11.2494C16.9611 12.2824 16.7599 12.6549 16.4248 12.9866C16.1184 13.2899 15.717 13.5115 14.9035 13.8289C14.8415 13.8531 14.7925 13.8721 14.6692 13.9195L14.5671 13.9589C13.3188 14.4409 12.8766 14.7157 12.5532 15.2689C12.2395 15.8057 12.2178 16.3254 12.4151 17.6312L12.4346 17.759C12.4952 18.155 12.5195 18.3339 12.54 18.5382C12.5901 19.0385 12.5738 19.41 12.4877 19.7291C12.3685 20.1703 12.1441 20.5239 11.4124 21.4255C11.3165 21.5438 11.2558 21.6195 11.1953 21.6962C10.5446 22.5212 10.2938 23.0309 10.2938 23.625C10.2938 24.2184 10.5445 24.7284 11.1932 25.5511C11.257 25.6321 11.3206 25.7111 11.4588 25.8815C12.1476 26.73 12.3691 27.0818 12.4876 27.5207C12.5737 27.8394 12.59 28.2103 12.5401 28.7095C12.5194 28.9156 12.4949 29.0959 12.43 29.5192C12.2104 30.9533 12.2239 31.4177 12.5529 31.9806C12.8763 32.5338 13.3186 32.8086 14.567 33.2907L14.6687 33.3299C15.7127 33.7319 16.0893 33.9312 16.4244 34.263C16.7594 34.5946 16.9605 34.9669 17.3664 36.0002L17.4062 36.1013C17.8933 37.3372 18.1712 37.7754 18.7299 38.0954C19.271 38.4053 19.7949 38.4268 21.113 38.2316L21.2432 38.2121C21.6439 38.152 21.8252 38.1279 22.0321 38.1077C22.2223 38.089 22.39 38.0799 22.5446 38.0799C22.806 38.0799 23.0317 38.1061 23.2344 38.1597C23.6784 38.2772 24.0337 38.4964 24.8914 39.1785C26.0502 40.1002 26.4849 40.3313 27.1688 40.3313C27.8526 40.3313 28.2873 40.1002 29.446 39.1786L29.5393 39.1045C30.2988 38.5017 30.677 38.2725 31.1029 38.1598C31.5721 38.0357 32.0042 38.0487 33.1239 38.2167C34.5715 38.434 35.0397 38.4206 35.6074 38.0956C36.1849 37.7648 36.4364 37.3606 36.9707 36.0005C37.3765 34.9676 37.5777 34.595 37.9128 34.2634C38.248 33.9315 38.6243 33.7324 39.6684 33.3304L39.7705 33.291C41.0188 32.809 41.4611 32.5342 41.7844 31.981C42.0981 31.4442 42.1199 30.9245 41.9305 29.6715ZM42.3141 23.6252C42.3141 23.7684 42.0987 24.107 41.5314 24.8059C40.6679 25.8698 40.3754 26.3504 40.1792 27.077C39.9769 27.826 39.9869 28.4022 40.2009 29.8004L40.22 29.9259C40.3267 30.6325 40.3395 31.0324 40.288 31.1206C40.2286 31.2223 39.8684 31.4122 39.143 31.6923L39.0425 31.731C37.7409 32.2321 37.2373 32.5081 36.6909 33.049C36.1444 33.59 35.8652 34.0892 35.359 35.3776C35.0402 36.1891 34.8519 36.5471 34.7425 36.6098C34.6436 36.6665 34.2334 36.6481 33.3827 36.5204C31.9929 36.3118 31.4117 36.3025 30.6571 36.5022C29.9509 36.689 29.4266 36.9968 28.4586 37.765L28.364 37.8402C27.6568 38.4026 27.315 38.6156 27.1688 38.6156C27.0225 38.6156 26.6806 38.4025 25.9735 37.8401C24.8989 36.9855 24.4136 36.6961 23.6802 36.5021C23.3276 36.4087 22.9548 36.3643 22.5446 36.3643C22.3313 36.3643 22.1082 36.3762 21.8622 36.4003C21.6169 36.4243 21.4138 36.4514 20.9311 36.5238L20.8045 36.5427C20.0895 36.6486 19.6849 36.6612 19.5948 36.6096C19.4917 36.5506 19.3002 36.1948 19.0172 35.4767L18.978 35.3772C18.4717 34.0885 18.1928 33.5897 17.6464 33.0487C17.1 32.5078 16.5961 32.2316 15.2947 31.7306L15.1945 31.692C14.4689 31.4118 14.1088 31.2219 14.0493 31.1201C13.9925 31.023 14.0119 30.6138 14.1445 29.7481C14.2103 29.3188 14.2373 29.1191 14.2613 28.8788C14.3318 28.1737 14.3027 27.6111 14.1584 27.0768C13.9612 26.3466 13.6664 25.8654 12.7604 24.7493C12.6687 24.6362 12.6113 24.5647 12.5557 24.4942C12.2002 24.0433 12.0234 23.7371 12.0234 23.625C12.0234 23.5127 12.2006 23.2059 12.5576 22.7533C12.6153 22.6802 12.6743 22.6067 12.8064 22.4439C13.6697 21.3801 13.9622 20.8995 14.1585 20.1729C14.3029 19.638 14.3319 19.0749 14.2612 18.3686C14.2369 18.1263 14.2096 17.9259 14.1368 17.4495L14.1177 17.3241C14.0109 16.6174 13.9981 16.2175 14.0496 16.1293C14.1091 16.0276 14.4692 15.8378 15.1946 15.5576L15.2951 15.5189C15.4211 15.4704 15.4717 15.4508 15.5367 15.4255C16.5875 15.0155 17.143 14.6996 17.6468 14.2008C18.1932 13.6598 18.4723 13.1608 18.9786 11.8724C19.2974 11.0608 19.4857 10.7028 19.5952 10.6401C19.6941 10.5835 20.1042 10.6018 20.9549 10.7295C22.3439 10.938 22.9258 10.9473 23.6803 10.7478C24.4175 10.5528 24.903 10.2613 26.0309 9.36428C26.1444 9.27409 26.2162 9.21766 26.287 9.16292C26.7442 8.80971 27.0541 8.63439 27.1689 8.63439C27.3151 8.63439 27.657 8.84748 28.3642 9.40995C29.4387 10.2645 29.924 10.5539 30.6574 10.748C31.1972 10.8907 31.7654 10.9194 32.4782 10.8494C32.723 10.8254 32.9254 10.7984 33.4071 10.7262L33.5338 10.7073C34.2483 10.6015 34.6527 10.5889 34.7428 10.6405C34.846 10.6995 35.0374 11.0553 35.3204 11.7734L35.3596 11.8729C35.8659 13.1617 36.1448 13.6604 36.6913 14.2014C37.2377 14.7423 37.7413 15.0184 39.0428 15.5195L39.143 15.5581C39.8686 15.8383 40.2287 16.0282 40.2882 16.13C40.345 16.2272 40.3256 16.6364 40.193 17.502C40.1272 17.932 40.1001 18.132 40.0761 18.3727C40.0058 19.0771 40.0349 19.6394 40.1791 20.1734C40.368 20.873 40.6791 21.3923 41.4553 22.3508L41.5313 22.4444C42.0987 23.1434 42.3141 23.482 42.3141 23.6252Z"
            fill="#424750"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.5063 34.425C33.3777 34.425 38.1375 29.7408 38.1375 23.9625C38.1375 18.1842 33.3777 13.5 27.5063 13.5C21.6348 13.5 16.875 18.1842 16.875 23.9625C16.875 29.7408 21.6348 34.425 27.5063 34.425ZM34.0442 17.725C33.6315 17.4276 33.0539 17.5184 32.754 17.9277L25.2686 28.1471L21.7478 25.3759C21.3483 25.0614 20.7673 25.1277 20.4502 25.5239C20.1331 25.9202 20.1999 26.4965 20.5995 26.811L24.8752 30.1764C25.2869 30.5004 25.8878 30.419 26.1966 29.9973L34.2486 19.0045C34.5484 18.5952 34.4569 18.0223 34.0442 17.725Z"
            fill="#E6123D"
          />
          <path
            d="M27.5063 12.825C27.8917 12.825 28.2042 13.1328 28.2042 13.5125C28.2042 13.8922 27.8917 14.2 27.5063 14.2C22.0329 14.2 17.5958 18.5708 17.5958 23.9625C17.5958 29.3542 22.0329 33.725 27.5063 33.725C32.9796 33.725 37.4167 29.3542 37.4167 23.9625C37.4167 23.5828 37.7291 23.275 38.1146 23.275C38.5 23.275 38.8125 23.5828 38.8125 23.9625C38.8125 30.1136 33.7505 35.1 27.5063 35.1C21.262 35.1 16.2 30.1136 16.2 23.9625C16.2 17.8114 21.262 12.825 27.5063 12.825Z"
            fill="#424750"
          />
          <path
            d="M35.5928 39.557C35.5928 39.1458 35.9358 38.8125 36.3589 38.8125C36.782 38.8125 37.125 39.1458 37.125 39.557V46.5052C37.125 46.9845 36.6658 47.3389 36.1854 47.2303L27.5734 45.284L18.8246 47.2309C18.3449 47.3376 17.8875 46.9835 17.8875 46.5052V41.873C17.8875 41.4619 18.2305 41.1286 18.6536 41.1286C19.0767 41.1286 19.4197 41.4619 19.4197 41.873V45.571L27.4038 43.7943C27.5172 43.7691 27.635 43.7693 27.7483 43.7949L35.5928 45.5678V39.557Z"
            fill="#19BFD3"
          />
          <path
            d="M18.7313 38.8125C18.5094 38.8125 18.2917 38.9028 18.1347 39.0597C17.9778 39.2167 17.8875 39.4343 17.8875 39.6571C17.8875 39.8782 17.9778 40.0958 18.1347 40.2536C18.2917 40.4106 18.5094 40.5 18.7313 40.5C18.9532 40.5 19.1709 40.4106 19.3278 40.2536C19.4847 40.0958 19.575 39.879 19.575 39.6571C19.575 39.4343 19.4847 39.2167 19.3278 39.0597C19.1709 38.9028 18.9532 38.8125 18.7313 38.8125Z"
            fill="#19BFD3"
          />
          <path
            d="M30.2062 12.825C29.9843 12.825 29.7666 12.9153 29.6097 13.0722C29.4528 13.2292 29.3625 13.4469 29.3625 13.6696C29.3625 13.8907 29.4528 14.1084 29.6097 14.2661C29.7666 14.4231 29.9843 14.5125 30.2062 14.5125C30.4281 14.5125 30.6458 14.4231 30.8028 14.2661C30.9597 14.1084 31.05 13.8915 31.05 13.6696C31.05 13.4469 30.9597 13.2292 30.8028 13.0722C30.6458 12.9153 30.4281 12.825 30.2062 12.825Z"
            fill="#424750"
          />
        </svg>
        <p className="text-xs text-gray-600 mt-2 dark:text-gray-300">
          ضمانت اصل بودن کالا
        </p>
      </Link>
      <Link
        href="/return"
        className={`mx-auto flex items-center justify-center ${
          vertical ? "flex-col" : ""
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="55"
          height="54"
          viewBox="0 0 55 54"
          fill="none"
          className="dark:bg-white dark:rounded-full"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.8099 9.51141L39.9201 14.5458V22.4298L34.5902 24.165V16.6719L17.8189 11.3253L23.8099 9.51141Z"
            fill="#E6123D"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M47.2466 13.319C47.206 13.1589 47.1305 13.0422 47.0282 12.9519C46.9803 12.904 46.927 12.8617 46.8693 12.8262C46.8367 12.8069 46.8029 12.7899 46.7682 12.7752C46.744 12.7614 28.0002 6.78994 28.0002 6.78994C27.8327 6.73673 27.6528 6.73673 27.4853 6.78994L8.79205 12.7378C8.43868 12.8489 8.19801 13.1762 8.19727 13.5467V33.9393C8.19758 34.3101 8.43837 34.6378 8.79205 34.7491L15.3567 36.9684C15.5242 37.0216 15.9054 35.4872 15.9054 35.4872L9.89665 33.3182V14.1678L15.5615 12.3656L31.4508 17.4221L27.7402 18.6024L13.5503 14.0888C13.1031 13.9466 12.6253 14.1938 12.4831 14.6411C12.3409 15.0883 12.5882 15.5661 13.0354 15.7083L26.8905 20.1157V30.2149C26.8905 30.6842 27.2709 31.0646 27.7402 31.0646C28.2094 31.0646 28.5899 30.6842 28.5899 30.2149V20.1157L33.4051 18.5862V24.2231C33.4051 24.6923 33.7855 25.0728 34.2548 25.0728C34.3412 25.0722 34.4271 25.0587 34.5097 25.0328L36.492 24.4007C36.9393 24.2584 37.1865 23.7807 37.0443 23.3334C36.9021 22.8862 36.4244 22.6389 35.9771 22.7811L35.1019 23.0598V18.0467L39.4914 16.6498V21.6629L38.5262 21.9697C38.0789 22.1119 37.8317 22.5896 37.9739 23.0369C38.0857 23.3888 38.412 23.6281 38.7811 23.6291C38.8676 23.6292 38.9537 23.6158 39.036 23.5892L40.5943 23.0938C40.948 22.9826 41.1888 22.6549 41.1891 22.2841V16.106L45.5837 14.7091V33.3173L44.4791 33.6699C44.0276 33.7978 43.7652 34.2674 43.893 34.719C44.0209 35.1705 44.4906 35.4329 44.9421 35.3051C44.9578 35.3006 46.6884 34.7491 46.6884 34.7491C47.0421 34.6378 47.2829 34.3101 47.2832 33.9393V13.5467C47.2814 13.4695 47.2691 13.3929 47.2466 13.319ZM34.2539 16.53L18.3647 11.4743L21.6513 10.4283L37.5405 15.484L34.2539 16.53ZM24.4544 9.53614L40.3428 14.5927L43.6294 13.5467L27.7402 8.49102L24.4544 9.53614Z"
            fill="#424750"
          />
          <path
            d="M12.5956 28.0125C12.1586 28.0125 11.8042 28.3669 11.8042 28.8039L11.8042 34.5531C11.8042 34.9902 12.1586 35.3445 12.5956 35.3445C13.0327 35.3445 13.3871 34.9902 13.3871 34.5531V28.8039C13.3871 28.3669 13.0327 28.0125 12.5956 28.0125Z"
            fill="#424750"
          />
          <path
            d="M12.5952 25.65C12.3872 25.65 12.1831 25.7346 12.036 25.8818C11.8888 26.0289 11.8042 26.233 11.8042 26.4418C11.8042 26.649 11.8888 26.8531 12.036 27.0011C12.1831 27.1482 12.3872 27.232 12.5952 27.232C12.8033 27.232 13.0073 27.1482 13.1545 27.0011C13.3016 26.8531 13.3862 26.6498 13.3862 26.4418C13.3862 26.233 13.3016 26.0289 13.1545 25.8818C13.0073 25.7346 12.8033 25.65 12.5952 25.65Z"
            fill="#424750"
          />
          <path
            d="M15.6327 35.4375C15.4247 35.4375 15.2206 35.5221 15.0734 35.6693C14.9263 35.8164 14.8417 36.0205 14.8417 36.2293C14.8417 36.4366 14.9263 36.6406 15.0734 36.7886C15.2206 36.9357 15.4247 37.0195 15.6327 37.0195C15.8407 37.0195 16.0448 36.9357 16.1919 36.7886C16.3391 36.6406 16.4237 36.4373 16.4237 36.2293C16.4237 36.0205 16.3391 35.8164 16.1919 35.6693C16.0448 35.5221 15.8407 35.4375 15.6327 35.4375Z"
            fill="#424750"
          />
          <path
            d="M41.3352 24.7959C40.866 24.7959 40.4855 25.1763 40.4855 25.6456V34.5038C40.4809 38.7253 37.0598 42.1463 32.8383 42.151H22.642C22.1728 42.151 21.7923 42.5314 21.7923 43.0007V44.7672L15.6269 40.4516L21.7923 36.136V37.9025C21.7923 38.3718 22.1728 38.7522 22.642 38.7522H30.2892C33.1037 38.7495 35.3846 36.4686 35.3874 33.6541V33.2928C35.3874 32.8236 35.0069 32.4431 34.5377 32.4431C34.0684 32.4431 33.688 32.8236 33.688 33.2928V33.6541C33.688 35.5312 32.1663 37.0528 30.2892 37.0528H23.4917V34.5038C23.4915 34.0345 23.1108 33.6543 22.6416 33.6545C22.4676 33.6546 22.2978 33.7081 22.1551 33.8079L13.6582 39.7557C13.2738 40.025 13.1806 40.5549 13.4498 40.9391C13.5066 41.0202 13.5772 41.0907 13.6582 41.1475L22.1551 47.0954C22.5397 47.3643 23.0695 47.2705 23.3383 46.8859C23.4381 46.7433 23.4916 46.5735 23.4917 46.3995V43.8504H32.8383C37.9977 43.8443 42.1789 39.6632 42.1849 34.5038V25.6456C42.1849 25.1763 41.8045 24.7959 41.3352 24.7959Z"
            fill="#19BFD3"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.8417 20.5875H23.3409V22.7875L18.8844 33.75H16.1391L20.4639 23.0696H14.8417V20.5875Z"
            fill="#E6123D"
          />
        </svg>
        <p className="text-xs text-gray-600 mt-2 dark:text-gray-300">
          7 روز ضمانت بازگشت کالا
        </p>
      </Link>
      <Link
        href="/contact-us"
        className={`mx-auto flex items-center justify-center ${
          vertical ? "flex-col" : ""
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="55"
          height="54"
          viewBox="0 0 55 54"
          fill="none"
          className="dark:bg-white dark:rounded-full"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M39.4945 36.3848C42.2968 36.3848 44.5685 34.1131 44.5685 31.3108C44.5685 28.5082 42.2968 26.2365 39.4945 26.2365V36.3848Z"
            fill="#E6123D"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M40.3013 35.5014V27.1196C42.27 27.498 43.7621 29.2334 43.7621 31.3107C43.7621 33.388 42.27 35.1234 40.3013 35.5014ZM40.707 11.4181C37.6968 8.40795 33.71 6.74982 29.4811 6.74982C25.2522 6.74982 21.2653 8.40795 18.2548 11.4181C17.1104 12.5629 16.1613 13.8485 15.4245 15.2349C14.951 16.5289 16.4796 16.8448 16.8505 15.9845C19.2477 11.4559 24.0102 8.3634 29.4811 8.3634C37.3556 8.3634 43.7621 14.7698 43.7621 22.6444V27.2705C42.6895 26.1382 41.1738 25.4298 39.4947 25.4298C39.0489 25.4298 38.6877 25.7909 38.6877 26.2364V36.3847C38.6877 36.8305 39.0489 37.1916 39.4947 37.1916C42.707 37.1916 45.3247 34.602 45.3733 31.4008C45.3736 31.391 45.3746 28.472 45.3753 22.6444C45.3753 18.4155 43.7175 14.4286 40.707 11.4181Z"
            fill="#424750"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M43.9048 36.3035C43.7002 36.3035 43.4994 36.3869 43.3546 36.5313C43.2099 36.6761 43.1268 36.8769 43.1268 37.0825C43.1268 37.2863 43.2099 37.4868 43.3546 37.6326C43.4994 37.7771 43.7002 37.8597 43.9048 37.8597C44.1093 37.8597 44.3101 37.7771 44.4549 37.6326C44.5997 37.4868 44.6827 37.287 44.6827 37.0825C44.6827 36.8769 44.5997 36.6761 44.4549 36.5313C44.3101 36.3869 44.1093 36.3035 43.9048 36.3035Z"
            fill="#424750"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32.2522 44.0203L33.397 43.777L33.6404 44.9218L32.4956 45.1651L32.2522 44.0203ZM43.463 38.8393C43.0772 38.6166 42.5834 38.7486 42.3607 39.1343C40.795 41.8448 38.3343 43.7091 35.2138 44.563L34.8078 42.6524C34.7149 42.2164 34.2867 41.9383 33.8506 42.0307L31.1277 42.6096C30.6916 42.7024 30.4135 43.1307 30.5063 43.5667L31.0851 46.2897C31.1776 46.7257 31.6059 47.0038 32.0419 46.9113L34.7652 46.3325C38.7184 45.4922 41.8281 43.2822 43.7579 39.9416C43.981 39.5559 43.8487 39.0624 43.463 38.8393Z"
            fill="#424750"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.8471 37.4615C10.3344 37.4615 9.10831 36.2353 9.10831 34.7226V20.3607C9.10831 18.848 10.3344 17.6219 11.8471 17.6219H31.576C33.0887 17.6219 34.3148 18.848 34.3148 20.3607V38.4132C34.3148 39.3758 33.5345 40.1561 32.572 40.1561C32.0468 40.1561 31.5497 39.9195 31.2189 39.5118L29.5547 37.4615H11.8471ZM11.8471 19.1156C11.1596 19.1156 10.6021 19.6732 10.6021 20.3607V34.7226C10.6021 35.4101 11.1596 35.9677 11.8471 35.9677H30.2662L32.3786 38.5701C32.4258 38.6285 32.4971 38.6623 32.572 38.6623C32.7097 38.6623 32.8211 38.5509 32.8211 38.4132V20.3607C32.8211 19.6732 32.2635 19.1156 31.576 19.1156H11.8471Z"
            fill="#19BFD3"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.2996 26.7646H31.3213V28.0711L28.6885 34.5808H27.0661L29.6217 28.2385H26.2996V26.7646ZM24.3202 26.6252V28.0545H23.4869V29.3833H21.9425V28.0545H18.2651V26.6252L20.9435 21.4109H22.5878L19.9206 26.6252H21.9425V24.7717H23.4869V26.6252H24.3202ZM12.2347 29.3833V28.2331L14.8898 25.4865C15.39 24.9617 15.7788 24.448 15.7788 23.9232C15.7788 23.2978 15.3565 22.907 14.7676 22.907C14.1679 22.907 13.7234 23.2644 13.4679 23.8226L12.179 23.0633C12.6792 21.9468 13.69 21.4109 14.7457 21.4109C16.0788 21.4109 17.312 22.3039 17.312 23.8672C17.312 24.8162 16.7676 25.6316 16.0342 26.3684L14.5121 27.8983H17.4342V29.3833H12.2347Z"
            fill="#424750"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28.0015 21.6874L21.0642 34.5809H21.7365L28.6691 21.6874H28.0015Z"
            fill="#E6123D"
          />
        </svg>
        <p className="text-xs text-gray-600 mt-2 dark:text-gray-300">
          7 روز هفته، 24 ساعته
        </p>
      </Link>
      <Link
        href="/payment"
        className={`mx-auto flex items-center justify-center ${
          vertical ? "flex-col" : ""
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="55"
          height="54"
          viewBox="0 0 55 54"
          fill="none"
          className="dark:bg-white dark:rounded-full"
        >
          <path
            d="M18.3774 46.3837H10.7982C9.92605 46.3837 9.21919 45.6767 9.21919 44.8047V31.9357C9.21919 31.0636 9.92613 30.3567 10.7982 30.3567H18.3775C19.2496 30.3567 19.9565 31.0636 19.9565 31.9357V44.8047C19.9565 45.6767 19.2495 46.3837 18.3774 46.3837Z"
            fill="#E6123D"
          />
          <path
            d="M14.5878 42.4362C14.3802 42.4362 14.1765 42.5206 14.0296 42.6675C13.8828 42.8145 13.7983 43.0181 13.7983 43.2257C13.7983 43.4334 13.8827 43.6371 14.0296 43.7839C14.1765 43.9307 14.3802 44.0153 14.5878 44.0153C14.7955 44.0153 14.9992 43.9308 15.1459 43.7839C15.2928 43.6371 15.3774 43.4334 15.3774 43.2257C15.3774 43.0181 15.2929 42.8144 15.1459 42.6675C14.9991 42.5205 14.7954 42.4362 14.5878 42.4362Z"
            fill="#424750"
          />
          <path
            d="M44.9413 21.9741C44.7336 21.9741 44.5299 22.0585 44.3831 22.2054C44.2363 22.3523 44.1517 22.556 44.1517 22.7636C44.1517 22.9713 44.2362 23.175 44.3831 23.3217C44.5299 23.4686 44.7336 23.5531 44.9413 23.5531C45.1497 23.5531 45.3526 23.4687 45.4995 23.3217C45.647 23.175 45.7315 22.9713 45.7315 22.7636C45.7315 22.556 45.647 22.3523 45.4995 22.2054C45.3526 22.0585 45.1497 21.9741 44.9413 21.9741Z"
            fill="#424750"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M48.0629 15.8629C48.2723 15.8629 48.4732 15.9461 48.6213 16.0941C48.7694 16.2422 48.8524 16.443 48.8526 16.6524V46.3838C48.8526 46.8197 48.499 47.1733 48.063 47.1733H24.2298C23.2682 47.1733 22.3397 46.8253 21.615 46.1933L20.6763 45.3747C20.4205 46.4061 19.4871 47.1732 18.3776 47.1732H10.7982C9.49221 47.1732 8.42966 46.1107 8.42974 44.8046V31.9356C8.42974 30.6297 9.49221 29.5671 10.7982 29.5671H18.3775C19.1886 29.5671 19.9056 29.9772 20.3327 30.6008L22.8401 28.0933C23.1228 27.8107 23.7029 27.333 24.6948 26.8032C26.2086 25.9947 27.8515 25.4166 27.8515 25.4166V18.9113V16.6534C27.8515 16.2175 28.205 15.8639 28.641 15.8639L48.0629 15.8629ZM10.7982 45.5942H18.3774C18.8127 45.5942 19.1669 45.24 19.167 44.8047V31.9357C19.167 31.5004 18.8128 31.1462 18.3775 31.1462H15.3774V40.2412C15.3774 40.6771 15.0238 41.0307 14.5878 41.0307C14.1518 41.0307 13.7983 40.6771 13.7983 40.2412V31.1462H10.7982C10.3628 31.1462 10.0086 31.5004 10.0086 31.9357V44.8047C10.0086 45.2401 10.3628 45.5942 10.7982 45.5942ZM22.6526 45.0033L20.746 43.3405V32.4206L23.3029 29.8263C23.3029 29.8263 24.3891 28.8857 25.1206 28.4731C26.6622 27.6036 27.8493 27.262 27.8493 27.262V29.3844L27.0844 31.4197C27.1738 31.7692 27.4886 32.0136 27.8493 32.0136L41.1054 32.0146C41.7149 32.0146 42.2107 32.5104 42.2107 33.1199C42.2107 33.7294 41.7149 34.2253 41.1054 34.2253H33.1517C32.7157 34.2253 32.3622 34.5788 32.3622 35.0148C32.3622 35.4508 32.7157 35.8043 33.1517 35.8043H43.5766C44.1861 35.8043 44.682 36.3002 44.682 36.9097C44.682 37.5192 44.1861 38.015 43.5766 38.015H33.1517C32.7157 38.015 32.3622 38.3686 32.3622 38.8045C32.3622 39.2405 32.7157 39.5941 33.1517 39.5941H41.8873C42.4968 39.5941 42.9926 40.0899 42.9926 40.6994C42.9926 41.3089 42.4968 41.8047 41.8873 41.8047H33.1517C32.7157 41.8047 32.3622 42.1583 32.3622 42.5943C32.3622 43.0303 32.7157 43.3838 33.1517 43.3838H39.1942C39.8037 43.3838 40.2995 43.8796 40.2995 44.4891C40.2995 45.0987 39.8037 45.5945 39.1942 45.5945H24.2296C23.6497 45.5942 23.0897 45.3844 22.6526 45.0033ZM41.8785 44.4889C41.8785 44.8829 41.7925 45.2569 41.6394 45.5942L47.2735 45.5942V17.7777L29.4306 17.7786V30.4355L41.1053 30.4356C42.5855 30.4356 43.7896 31.6398 43.7896 33.1199C43.7896 33.5139 43.7037 33.8879 43.5765 34.2253C43.774 34.2253 43.9664 34.2474 44.152 34.288V25.3038C44.152 24.8679 44.5055 24.5143 44.9415 24.5143C45.3775 24.5143 45.731 24.8679 45.731 25.3038V35.3104C46.0636 35.7573 46.2609 36.3108 46.2609 36.9096C46.2609 38.1439 45.4233 39.1856 44.2866 39.4978C44.4686 39.8596 44.5716 40.2675 44.5716 40.6992C44.5716 42.1794 43.3674 43.3836 41.8873 43.3836H41.6394C41.7925 43.7209 41.8785 44.0949 41.8785 44.4889Z"
            fill="#424750"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32.0558 17.55H36.4436V30.7125H32.0558V17.55Z"
            fill="#424750"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.57294 15.0188C6.57294 17.9593 9.06672 22.269 14.0302 28.1056C14.3671 28.5018 14.9788 28.5018 15.3157 28.1056C20.2792 22.269 22.7729 17.9593 22.7729 15.0188C22.7729 10.5453 19.1464 6.91876 14.6729 6.91876C10.1994 6.91876 6.57294 10.5453 6.57294 15.0188ZM14.6729 8.60626C18.2145 8.60626 21.0854 11.4772 21.0854 15.0188C21.0854 17.3097 18.9549 21.0984 14.6729 26.2482C10.391 21.0984 8.26044 17.3097 8.26044 15.0188C8.26044 11.4772 11.1314 8.60626 14.6729 8.60626Z"
            fill="#19BFD3"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.7073 15.0188C10.7073 17.2089 12.4828 18.9844 14.6729 18.9844C16.8631 18.9844 18.6386 17.2089 18.6386 15.0188C18.6386 12.8286 16.8631 11.0531 14.6729 11.0531C12.4828 11.0531 10.7073 12.8286 10.7073 15.0188ZM17.1198 15.0188C17.1198 16.3701 16.0243 17.4656 14.6729 17.4656C13.3216 17.4656 12.2261 16.3701 12.2261 15.0188C12.2261 13.6674 13.3216 12.5719 14.6729 12.5719C16.0243 12.5719 17.1198 13.6674 17.1198 15.0188Z"
            fill="#19BFD3"
          />
        </svg>
        <p className="text-xs text-gray-600 mt-2 dark:text-gray-300">
          امکان پرداخت در محل
        </p>
      </Link>
      <Link
        href="/sending"
        className={`mx-auto flex items-center justify-center ${
          vertical ? "flex-col" : ""
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="55"
          height="54"
          viewBox="0 0 55 54"
          fill="none"
          className="dark:bg-white dark:rounded-full"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.9492 13.5L46.0594 18.5345V26.4185L40.7293 28.1536V20.6604L23.9583 15.3141L29.9492 13.5Z"
            fill="#E6123D"
          />
          <path
            d="M30.7164 13.4809L46.9304 18.6615C47.28 18.7732 47.5173 19.0982 47.5173 19.4653V26.3065C47.5173 26.6642 47.2918 26.983 46.9546 27.1021L45.3699 27.6618C44.9305 27.817 44.4485 27.5866 44.2933 27.1472C44.1381 26.7078 44.3685 26.2258 44.8079 26.0706L45.8298 25.7097V20.0814L27.7739 14.3123C26.9997 14.0649 26.9885 12.9735 27.7574 12.7103L33.6976 10.6767C33.8681 10.6184 34.0529 10.6161 34.2248 10.6704L53.1248 16.6342C53.4759 16.745 53.7146 17.0706 53.7146 17.4388V38.0142C53.7146 38.3822 53.4762 38.7077 53.1253 38.8187L34.2253 44.7975C34.0587 44.8502 33.8799 44.8498 33.7135 44.7965L15.0491 38.8178C14.6998 38.7059 14.4628 38.3811 14.4628 38.0142V35.2294C14.4628 34.7634 14.8405 34.3856 15.3065 34.3856C15.7725 34.3856 16.1503 34.7634 16.1503 35.2294V37.3985L33.9725 43.1075L52.0271 37.3962V18.0573L33.9816 12.3632L30.7164 13.4809Z"
            fill="#424750"
          />
          <path
            d="M52.6164 16.7455C53.0607 16.605 53.5348 16.8512 53.6753 17.2955C53.8159 17.7398 53.5696 18.2139 53.1253 18.3545L34.2253 24.3332C34.0593 24.3857 33.8811 24.3856 33.7152 24.3328L19.2918 19.7459C18.8477 19.6047 18.6022 19.1302 18.7434 18.6861C18.8847 18.2421 19.3591 17.9966 19.8032 18.1378L33.9715 22.6436L52.6164 16.7455Z"
            fill="#424750"
          />
          <path
            d="M42.3923 26.8191C42.8348 26.673 43.3119 26.9132 43.4581 27.3557C43.6042 27.7982 43.364 28.2753 42.9215 28.4215L40.8408 29.1087C40.2949 29.289 39.7324 28.8824 39.7324 28.3075V22.0824L21.6765 16.3132C20.8982 16.0645 20.8924 14.9654 21.668 14.7085L28.7559 12.3615C29.1982 12.215 29.6756 12.4549 29.8221 12.8973C29.9686 13.3396 29.7287 13.817 29.2863 13.9635L24.6607 15.4952L40.833 20.6625C41.1826 20.7742 41.4199 21.0991 41.4199 21.4662V27.1402L42.3923 26.8191Z"
            fill="#424750"
          />
          <path
            d="M16.1455 18.2049V22.2706C16.1455 22.7365 15.7677 23.1143 15.3017 23.1143C14.8358 23.1143 14.458 22.7365 14.458 22.2706V17.5854C14.458 17.2168 14.6973 16.8909 15.049 16.7804L21.7528 14.6755C22.1974 14.5359 22.671 14.7832 22.8106 15.2278C22.9502 15.6723 22.7029 16.1459 22.2584 16.2855L16.1455 18.2049Z"
            fill="#424750"
          />
          <path
            d="M23.2715 24.1313C23.7375 24.1313 24.1153 24.509 24.1153 24.975C24.1153 25.441 23.7375 25.8188 23.2715 25.8188H8.09575C7.62976 25.8188 7.252 25.441 7.252 24.975C7.252 24.509 7.62976 24.1313 8.09575 24.1313H23.2715Z"
            fill="#19BFD3"
          />
          <path
            d="M14.8341 27.8438C15.3 27.8438 15.6778 28.2215 15.6778 28.6875C15.6778 29.1535 15.3 29.5312 14.8341 29.5312H1.68326C1.21727 29.5312 0.839508 29.1535 0.839508 28.6875C0.839508 28.2215 1.21727 27.8438 1.68326 27.8438H14.8341Z"
            fill="#19BFD3"
          />
          <circle cx="5.5645" cy="24.975" r="0.84375" fill="#19BFD3" />
          <circle cx="7.927" cy="32.4" r="0.84375" fill="#19BFD3" />
          <path
            d="M18.8841 31.5562C19.35 31.5562 19.7278 31.934 19.7278 32.4C19.7278 32.866 19.35 33.2437 18.8841 33.2437H10.4583C9.99226 33.2437 9.6145 32.866 9.6145 32.4C9.6145 31.934 9.99226 31.5562 10.4583 31.5562H18.8841Z"
            fill="#19BFD3"
          />
          <path
            d="M27.3215 9.28125C27.7875 9.28125 28.1653 9.65901 28.1653 10.125C28.1653 10.591 27.7875 10.9688 27.3215 10.9688H14.1707C13.7048 10.9688 13.327 10.591 13.327 10.125C13.327 9.65901 13.7048 9.28125 14.1707 9.28125H27.3215Z"
            fill="#19BFD3"
          />
          <path
            d="M14.1591 13.3312C14.625 13.3312 15.0028 13.709 15.0028 14.175C15.0028 14.641 14.625 15.0187 14.1591 15.0187H7.75826C7.29226 15.0187 6.91451 14.641 6.91451 14.175C6.91451 13.709 7.29226 13.3312 7.75826 13.3312H14.1591Z"
            fill="#19BFD3"
          />
          <path
            d="M34.927 43.9172C34.927 44.3832 34.5492 44.7609 34.0833 44.7609C33.6173 44.7609 33.2395 44.3832 33.2395 43.9172V39.7439C33.2395 39.2779 33.6173 38.9001 34.0833 38.9001C34.5492 38.9001 34.927 39.2779 34.927 39.7439V43.9172Z"
            fill="#424750"
          />
          <path
            d="M34.927 36.3534C34.927 36.8194 34.5492 37.1972 34.0833 37.1972C33.6173 37.1972 33.2395 36.8194 33.2395 36.3534V24.3C33.2395 23.834 33.6173 23.4562 34.0833 23.4562C34.5492 23.4562 34.927 23.834 34.927 24.3V36.3534Z"
            fill="#424750"
          />
        </svg>
        <p className="text-xs text-gray-600 mt-2 dark:text-gray-300">
          امکان تحویل اکسپرس
        </p>
      </Link>
    </div>
  );
}
