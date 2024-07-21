import Image from "next/image";
import fresh from "../../../../../public/fresh.webp";

export default function MarketOffers() {
  return (
    <div className="bg-gray-200 rounded-2xl h-32 mx-3 mt-5 bg-[url('/../../../../offer-pattern.svg')] bg-left bg-no-repeat">
      <Image alt="" width={100} height={100} src={fresh} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="272"
        height="28"
        viewBox="0 0 272 28"
        fill="none"
      >
        <path
          d="M237.416 0.27611C237.552 0.101897 237.76 0 237.981 0H238.696C238.845 0 238.928 0.171126 238.837 0.288573L234.27 6.16069C234.134 6.33491 233.926 6.4368 233.705 6.4368H232.99C232.841 6.4368 232.758 6.26568 232.849 6.14823L237.416 0.27611Z"
          fill="#029A49"
        />
        <path
          d="M228.686 1.34015C228.647 0.971571 228.362 0.7152 227.975 0.7152H225.473L225.385 0.719686C225.015 0.758274 224.757 1.04214 224.757 1.42714V3.56294L224.762 3.64995C224.801 4.01863 225.086 4.27488 225.473 4.27488H227.975L228.063 4.27039C228.433 4.23182 228.69 3.94806 228.69 3.56294V1.42714L228.686 1.34015Z"
          fill="#029A49"
        />
        <path
          d="M260.578 5.82881C260.178 5.82881 259.849 5.52755 259.807 5.14101L259.802 5.05695L259.802 1.48708C259.802 1.08917 260.105 0.761646 260.493 0.719744L260.578 0.715215H262.75C263.15 0.715215 263.479 1.01622 263.521 1.40297L263.526 1.48708L263.527 2.49463L266.025 2.49446C266.425 2.49446 266.754 2.79546 266.796 3.18222L266.8 3.26632V5.05695C266.8 5.45457 266.498 5.78234 266.109 5.82428L266.025 5.82881H260.578Z"
          fill="#029A49"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M54.9944 2.1456C54.9944 1.75061 55.3146 1.4304 55.7096 1.4304H57.8552C58.2502 1.4304 58.5704 1.75061 58.5704 2.1456V10.0053L58.5705 10.0128V14.304C58.5705 15.489 59.5311 16.4496 60.7161 16.4496H62.5623C62.2941 15.787 62.1464 15.0628 62.1464 14.304V12.1584C62.1464 8.99845 64.7081 6.4368 67.868 6.4368C71.028 6.4368 73.5896 8.99845 73.5896 12.1584V14.304C73.5896 17.464 71.028 20.0256 67.868 20.0256H60.7161C57.5561 20.0256 54.9945 17.464 54.9945 14.304V13.5968L54.9944 13.5888V2.1456ZM70.0136 12.1584C70.0136 10.9734 69.053 10.0128 67.868 10.0128C66.683 10.0128 65.7224 10.9734 65.7224 12.1584V14.304C65.7224 15.489 66.683 16.4496 67.868 16.4496C69.053 16.4496 70.0136 15.489 70.0136 14.304V12.1584Z"
          fill="#029A49"
        />
        <path
          d="M23.5197 7.06175C23.481 6.69317 23.196 6.4368 22.8092 6.4368H17.0887L17.0013 6.44129C16.631 6.47988 16.3736 6.76375 16.3736 7.14874V9.28454L16.3781 9.37155C16.4168 9.74023 16.7019 9.99648 17.0887 9.99648H22.8092L22.8966 9.992C23.2669 9.95342 23.5242 9.66967 23.5242 9.28454V7.14874L23.5197 7.06175Z"
          fill="#029A49"
        />
        <path
          d="M90.5959 23.5742C90.5539 23.1877 90.2248 22.8864 89.8251 22.8864H84.3778L84.2933 22.8909C83.9048 22.9329 83.6024 23.2606 83.6024 23.6583V25.4489L83.607 25.533C83.6491 25.9198 83.9781 26.2208 84.3778 26.2208L86.8761 26.2206L86.8768 27.2281L86.8814 27.3122C86.9235 27.699 87.2525 28 87.6525 28H89.8249L89.9094 27.9955C90.298 27.9536 90.6003 27.626 90.6003 27.2281L90.6005 23.6583L90.5959 23.5742Z"
          fill="#029A49"
        />
        <path
          d="M17.1615 20.7669C17.1615 23.7253 14.5702 26.3612 11.6121 26.4596L11.441 26.4624H5.71203C2.55341 26.4624 0.0841846 24.0638 0.00207893 20.9475L0 20.7669V14.3595C0 13.9749 0.257769 13.6907 0.627781 13.6521L0.715097 13.6476H2.86029C3.24671 13.6476 3.53205 13.9043 3.57084 14.2726L3.57535 14.3595L3.56795 20.7547C3.56795 21.8997 4.46118 22.8338 5.58748 22.8991L5.71355 22.9027H11.441C12.3809 22.9027 13.5029 21.8191 13.5818 20.8716L13.5862 20.7669H10.726C10.3392 20.7669 10.0542 20.5107 10.0154 20.142L10.0109 20.055V17.8767C10.0109 17.4918 10.2683 17.2079 10.6386 17.1693L10.726 17.1648L22.7797 17.1648C23.9647 17.1648 24.9253 16.2042 24.9253 15.0192V10.728C24.9253 10.333 25.2455 10.0128 25.6405 10.0128H27.7861C28.1811 10.0128 28.5013 10.333 28.5013 10.728V15.0192C28.5013 15.778 28.3536 16.5022 28.0854 17.1648L42.8323 17.1648V13.5888C42.8323 11.542 41.3034 10.0128 39.257 10.0128H31.0338C30.3902 10.0128 30.2662 9.43603 30.6762 8.94L36.6984 1.24778C36.9773 0.910509 37.3922 0.7152 37.8296 0.7152H40.5767C41.1293 0.7152 41.4321 1.35888 41.08 1.78478L37.4693 6.4368H39.257C43.3573 6.4368 46.4076 9.4876 46.4076 13.5888V20.0256C46.4076 20.441 46.108 20.7408 45.6926 20.7408L27.8064 20.7408C27.5717 20.7408 27.352 20.6257 27.2184 20.4327L26.4875 19.377C25.4889 20.2275 24.1942 20.7408 22.7797 20.7408H17.1563L17.1615 20.7669Z"
          fill="#029A49"
        />
        <path
          d="M207.587 7.06175C207.548 6.69317 207.263 6.4368 206.876 6.4368H201.156L201.068 6.44129C200.698 6.47988 200.441 6.76375 200.441 7.14874V9.28454L200.445 9.37155C200.484 9.74023 200.769 9.99648 201.156 9.99648H206.876L206.964 9.992C207.334 9.95342 207.591 9.66967 207.591 9.28454V7.14874L207.587 7.06175Z"
          fill="#029A49"
        />
        <path
          d="M149.66 22.8864C150.047 22.8864 150.332 23.1428 150.371 23.5114L150.375 23.5983V25.7341C150.375 26.1193 150.118 26.403 149.748 26.4416L149.66 26.4461H143.94C143.553 26.4461 143.268 26.1898 143.229 25.8212L143.225 25.7341V23.5983C143.225 23.2133 143.482 22.9295 143.852 22.8909L143.94 22.8864H149.66Z"
          fill="#029A49"
        />
        <path
          d="M139.644 3.48575C139.605 3.11717 139.32 2.8608 138.934 2.8608H136.788L136.7 2.86529C136.33 2.90387 136.073 3.18774 136.073 3.57274V5.70854L136.077 5.79555C136.116 6.16423 136.401 6.42048 136.788 6.42048H138.934L139.021 6.41599C139.391 6.37742 139.649 6.09366 139.649 5.70854V3.57274L139.644 3.48575Z"
          fill="#029A49"
        />
        <path
          d="M177.196 2.8608C177.583 2.8608 177.868 3.11717 177.907 3.48575L177.911 3.57274V5.70854C177.911 6.09366 177.654 6.37742 177.283 6.41599L177.196 6.42048H174.693C174.307 6.42048 174.021 6.16423 173.983 5.79555L173.978 5.70854V3.57274C173.978 3.18774 174.236 2.90387 174.606 2.86529L174.693 2.8608H177.196Z"
          fill="#029A49"
        />
        <path
          d="M160.024 0.7152C159.803 0.7152 159.595 0.817097 159.459 0.99131L154.892 6.86343C154.801 6.98088 154.885 7.152 155.033 7.152H155.748C155.969 7.152 156.177 7.05011 156.313 6.87589L160.88 1.00377C160.972 0.886327 160.888 0.7152 160.739 0.7152H160.024Z"
          fill="#029A49"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M232.209 17.1648C232.477 16.5022 232.625 15.778 232.625 15.0192V12.8736C232.625 9.71365 230.063 7.152 226.903 7.152C223.743 7.152 221.181 9.71365 221.181 12.8736V15.0192C221.181 15.778 221.329 16.5022 221.597 17.1648H216.447C216.715 16.5022 216.863 15.778 216.863 15.0192V10.728C216.863 10.333 216.542 10.0128 216.147 10.0128H214.002C213.607 10.0128 213.287 10.333 213.287 10.728V15.0192C213.287 16.2042 212.326 17.1648 211.141 17.1648H196.865C195.68 17.1648 194.719 16.2042 194.719 15.0192V10.728C194.719 10.333 194.399 10.0128 194.004 10.0128H191.858C191.463 10.0128 191.143 10.333 191.143 10.728V15.0192C191.143 18.1792 193.705 20.7408 196.865 20.7408H211.141C212.555 20.7408 213.849 20.2281 214.847 19.3786L215.577 20.4327C215.71 20.6257 215.93 20.7408 216.165 20.7408L242.634 20.7408C244.313 20.7408 245.817 20.2291 247.006 19.3431L247.761 20.4327C247.894 20.6257 248.114 20.7408 248.349 20.7408H252.623C254.036 20.7408 255.33 20.2282 256.329 19.3787L257.058 20.4327C257.192 20.6257 257.412 20.7408 257.646 20.7408H260.48C261.899 20.7408 263.198 20.2237 264.198 19.3676L264.936 20.4327C265.069 20.6257 265.289 20.7408 265.524 20.7408H266.212C269.371 20.7408 271.933 18.1792 271.933 15.0192V10.728C271.933 10.333 271.613 10.0128 271.218 10.0128H269.072C268.677 10.0128 268.357 10.333 268.357 10.728V15.0192C268.357 16.2042 267.397 17.1648 266.212 17.1648H265.785C266.054 16.5022 266.201 15.778 266.201 15.0192V10.728C266.201 10.333 265.881 10.0128 265.486 10.0128H263.34C262.945 10.0128 262.625 10.333 262.625 10.728V15.0192C262.625 16.2042 261.665 17.1648 260.48 17.1648H257.928C258.197 16.5022 258.344 15.778 258.344 15.0192V10.728C258.344 10.333 258.024 10.0128 257.629 10.0128H255.484C255.089 10.0128 254.768 10.333 254.768 10.728V15.0192C254.768 16.2042 253.808 17.1648 252.623 17.1648H248.899C249.467 16.1271 249.785 14.9127 249.785 13.5888V12.8736C249.785 8.7724 246.735 5.7216 242.634 5.7216H240.847L244.457 1.06958C244.809 0.64368 244.507 0 243.954 0H241.207C240.769 0 240.355 0.195309 240.076 0.532583L234.053 8.2248C233.643 8.72083 233.767 9.2976 234.411 9.2976H242.634C244.681 9.2976 246.21 10.8268 246.21 12.8736V13.5888C246.21 15.6356 244.681 17.1648 242.634 17.1648L232.209 17.1648ZM229.049 15.0192V12.8736C229.049 11.6886 228.088 10.728 226.903 10.728C225.718 10.728 224.757 11.6886 224.757 12.8736V15.0192C224.757 16.2042 225.718 17.1648 226.903 17.1648C228.088 17.1648 229.049 16.2042 229.049 15.0192Z"
          fill="#029A49"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M104.343 17.1648V12.8736C104.343 9.71365 101.782 7.152 98.6216 7.152C95.4617 7.152 92.9 9.71365 92.9 12.8736V15.0192C92.9 18.1792 95.4617 20.7408 98.6216 20.7408C99.2093 20.7408 99.7763 20.6522 100.31 20.4876C99.6978 21.5153 98.5795 22.1712 97.2392 22.1712H94.2097C93.5661 22.1712 93.4421 22.748 93.8521 23.244L95.3823 25.1986C95.6535 25.5449 96.0688 25.7472 96.5086 25.7472H97.2392C100.585 25.7472 103.231 23.7162 104.092 20.7408H107.888C109.302 20.7408 110.596 20.2282 111.594 19.3787L112.324 20.4327C112.458 20.6257 112.677 20.7408 112.912 20.7408H115.745C117.165 20.7408 118.464 20.2237 119.464 19.3676L120.202 20.4327C120.335 20.6257 120.555 20.7408 120.79 20.7408H121.477C124.637 20.7408 127.199 18.1792 127.199 15.0192V10.728C127.199 10.333 126.879 10.0128 126.484 10.0128H124.338C123.943 10.0128 123.623 10.333 123.623 10.728V15.0192C123.623 16.2042 122.662 17.1648 121.477 17.1648H121.051C121.319 16.5022 121.467 15.778 121.467 15.0192V10.728C121.467 10.333 121.147 10.0128 120.752 10.0128H118.606C118.211 10.0128 117.891 10.333 117.891 10.728V15.0192C117.891 16.2042 116.93 17.1648 115.745 17.1648H113.194C113.462 16.5022 113.61 15.778 113.61 15.0192V10.728C113.61 10.333 113.29 10.0128 112.895 10.0128H110.749C110.354 10.0128 110.034 10.333 110.034 10.728V15.0192C110.034 16.2042 109.073 17.1648 107.888 17.1648H104.343ZM100.767 12.8736V15.0192C100.767 16.2042 99.8066 17.1648 98.6216 17.1648C97.4366 17.1648 96.476 16.2042 96.476 15.0192V12.8736C96.476 11.6886 97.4366 10.728 98.6216 10.728C99.8066 10.728 100.767 11.6886 100.767 12.8736Z"
          fill="#029A49"
        />
        <path
          d="M169.934 18.5546L171.234 20.4327C171.368 20.6257 171.588 20.7408 171.822 20.7408H176.812C179.971 20.7408 182.533 18.1792 182.533 15.0192V10.728C182.533 10.333 182.213 10.0128 181.818 10.0128H179.672C179.277 10.0128 178.957 10.333 178.957 10.728V15.0192C178.957 16.2042 177.997 17.1648 176.812 17.1648H170.942C171.51 16.1271 171.828 14.9127 171.828 13.5888V12.8736C171.828 8.7724 168.778 5.7216 164.677 5.7216H162.89L166.5 1.06958C166.853 0.64368 166.55 0 165.997 0H163.25C162.813 0 162.398 0.195309 162.119 0.532583L156.097 8.2248C155.687 8.72083 155.811 9.2976 156.454 9.2976H164.677C166.724 9.2976 168.253 10.8268 168.253 12.8736V13.5888C168.253 15.6356 166.724 17.1648 164.677 17.1648H152.794C153.062 16.5022 153.21 15.778 153.21 15.0192V10.728C153.21 10.333 152.89 10.0128 152.495 10.0128H150.349C149.954 10.0128 149.634 10.333 149.634 10.728V15.0192C149.634 16.2042 148.673 17.1648 147.488 17.1648H139.695V10.728C139.695 10.333 139.375 10.0128 138.98 10.0128H136.834C136.439 10.0128 136.119 10.333 136.119 10.728V19.3104C136.119 21.3572 134.591 22.8864 132.545 22.8864H129.515C128.872 22.8864 128.747 23.4632 129.158 23.9592L130.688 25.9138C130.959 26.2601 131.374 26.4624 131.814 26.4624H132.545C136.645 26.4624 139.695 23.4116 139.695 19.3104L139.695 19.298L140.481 20.4327C140.614 20.6257 140.834 20.7408 141.069 20.7408H147.488C148.923 20.7408 150.234 20.2128 151.239 19.3405L152.335 20.7408H164.677C166.806 20.7408 168.651 19.9188 169.934 18.5546Z"
          fill="#029A49"
        />
        <path
          d="M79.428 20.4327L79.2601 20.1902C78.8575 23.8404 75.9586 26.4624 72.1574 26.4624H71.4268C70.987 26.4624 70.5716 26.2601 70.3005 25.9138L68.7703 23.9592C68.3602 23.4632 68.4842 22.8864 69.1278 22.8864H72.1574C74.2038 22.8864 75.7327 21.3572 75.7327 19.3104L75.732 10.728C75.732 10.333 76.0522 10.0128 76.4472 10.0128H78.5928C78.9878 10.0128 79.308 10.333 79.308 10.728V17.1648H85.0053C86.1903 17.1648 87.1509 16.2042 87.1509 15.0192V10.728C87.1509 10.333 87.4711 10.0128 87.8661 10.0128H90.0117C90.4067 10.0128 90.7269 10.333 90.7269 10.728V15.0192C90.7269 18.1792 88.1653 20.7408 85.0053 20.7408H80.016C79.7814 20.7408 79.5616 20.6257 79.428 20.4327Z"
          fill="#029A49"
        />
        <path
          d="M42.3577 23.9592L43.8879 25.9138C44.159 26.2601 44.5744 26.4624 45.0142 26.4624H45.7448C49.8451 26.4624 52.8954 23.4116 52.8954 19.3104V10.728C52.8954 10.333 52.5752 10.0128 52.1802 10.0128H50.0346C49.6396 10.0128 49.3194 10.333 49.3194 10.728V19.3104C49.3194 21.3572 47.7912 22.8864 45.7448 22.8864H42.7152C42.0717 22.8864 41.9477 23.4632 42.3577 23.9592Z"
          fill="#029A49"
        />
        <path
          d="M185.421 2.1456C185.026 2.1456 184.706 2.46581 184.706 2.8608V20.0256C184.706 20.4206 185.026 20.7408 185.421 20.7408H187.567C187.962 20.7408 188.282 20.4206 188.282 20.0256V2.8608C188.282 2.46581 187.962 2.1456 187.567 2.1456H185.421Z"
          fill="#029A49"
        />
      </svg>
    </div>
  );
}
