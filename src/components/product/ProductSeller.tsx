import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Product } from "@/types/types";
import {
  ChevronLeft,
  Info,
  PackageOpen,
  ShieldCheck,
  Store,
  Truck,
  X,
} from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import Modal from "../ui/Modal";

export default function ProductSeller({ product }: { product: Product }) {
  const [isShowModal, setIsShowModal] = useState(false);
  const [count, setCount] = useState(1);
  const closeModal = () => setIsShowModal(false);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProductIndex = cart.findIndex(
      (item: Product) => item._id === product._id
    );

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].count += count;
    } else {
      const cartItem = {
        _id: product._id,
        title: product.title,
        thumbnail: product.thumbnail,
        guarantee: product.guarantee,
        price: product.price,
        discount_price: product.discount_price,
        discount: product.discount,
        count,
      };
      cart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  if (!product) return null;

  return (
    <>
      <div className="h-fit flex flex-col gap-5 border bg-neutral-50 dark:bg-neutral-800 col-span-3 max-lg:col-span-12 rounded-lg p-5">
        <h4>فروشنده</h4>
        <div>
          <p className="flex gap-5 items-center mb-2">
            <Store
              size={20}
              className="text-neutral-600 dark:text-neutral-400"
            />
            <span className="text-neutral-700 dark:text-neutral-300">
              دیجی‌کالا
            </span>
          </p>
          <p className="text-xs flex gap-5 items-center text-neutral-600 dark:text-neutral-400">
            <Store
              size={20}
              className="opacity-0 text-neutral-600 dark:text-neutral-200"
            />
            <span>
              <span className="text-green-600 dark:text-green-500 font-bold">
                {product.likes}%
              </span>{" "}
              رضایت از کالا
              <span className="px-2 text-neutral-300">|</span> عملکرد{" "}
              <span className="text-green-600 dark:text-green-500 font-irsansb">
                {product.likes >= 80 && "عالی"}
                {product.likes >= 60 && product.likes < 80 && "خوب"}
                {product.likes >= 40 && product.likes < 60 && "متوسط"}
                {product.likes < 40 && "ضعیف"}
              </span>
            </span>
          </p>
        </div>
        <hr className="dark:border-neutral-700" />
        <div className="max-lg:hidden cursor-pointer flex justify-between items-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <Info size={16} className="text-neutral-500" />
                </div>
              </TooltipTrigger>
              <TooltipContent className="px-0 py-0">
                <p className="w-80 text-xs leading-7 p-2 bg-slate-700 text-white">
                  این کالا توسط فروشنده آن، ایران دیجی‌کالا، قیمت‌گذاری شده‌
                  است.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <div className="flex flex-col gap-2">
            {product.discount > 0 && (
              <div className="flex items-center gap-4">
                <div className="text-neutral-400 text-xs line-through">
                  {product.price.toLocaleString()}
                </div>
                <div className="rounded-xl w-10 p-0.5 flex itece justify-center bg-red-600 text-white text-xs">
                  {product.discount}%
                </div>
              </div>
            )}
            <p className="flex gap-1">
              <span className="text-neutral-950 dark:text-white text-lg">
                {product.discount_price.toLocaleString()}
              </span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-neutral-600 dark:fill-neutral-300"
              >
                <path d="M9.696 17.76L9.48 16.776C9.96 16.712 10.4 16.62 10.8 16.5C11.208 16.388 11.556 16.224 11.844 16.008C12.14 15.792 12.368 15.508 12.528 15.156C12.688 14.804 12.768 14.364 12.768 13.836C12.768 13.292 12.668 12.84 12.468 12.48C12.268 12.12 12.008 11.94 11.688 11.94C11.52 11.94 11.364 12.004 11.22 12.132C11.076 12.26 10.956 12.432 10.86 12.648C10.772 12.864 10.728 13.1 10.728 13.356C10.728 13.5 10.76 13.62 10.824 13.716C10.888 13.804 10.98 13.876 11.1 13.932C11.228 13.98 11.388 14.016 11.58 14.04C11.772 14.064 11.996 14.076 12.252 14.076H14.784C14.952 14.076 15.072 14.124 15.144 14.22C15.224 14.308 15.264 14.416 15.264 14.544C15.264 14.672 15.208 14.792 15.096 14.904C14.984 15.008 14.84 15.06 14.664 15.06H11.796C11.436 15.06 11.1 15.008 10.788 14.904C10.484 14.8 10.236 14.64 10.044 14.424C9.86 14.2 9.768 13.908 9.768 13.548C9.768 13.212 9.82 12.892 9.924 12.588C10.028 12.276 10.168 12 10.344 11.76C10.528 11.512 10.74 11.316 10.98 11.172C11.228 11.028 11.496 10.956 11.784 10.956C12.152 10.956 12.48 11.064 12.768 11.28C13.056 11.496 13.284 11.824 13.452 12.264C13.62 12.696 13.704 13.244 13.704 13.908C13.704 14.652 13.552 15.292 13.248 15.828C12.952 16.372 12.504 16.804 11.904 17.124C11.312 17.444 10.576 17.656 9.696 17.76ZM14.6602 15.06L14.7802 14.076C15.2522 14.076 15.6202 14.06 15.8842 14.028C16.1482 13.988 16.3362 13.896 16.4482 13.752C16.5602 13.6 16.6162 13.364 16.6162 13.044C16.6162 12.844 16.5842 12.608 16.5202 12.336C16.4562 12.056 16.3722 11.76 16.2682 11.448C16.1642 11.136 16.0522 10.828 15.9322 10.524L16.9042 10.164C17.0082 10.42 17.1042 10.712 17.1922 11.04C17.2882 11.368 17.3682 11.692 17.4322 12.012C17.4962 12.332 17.5282 12.612 17.5282 12.852C17.5282 13.252 17.4722 13.592 17.3602 13.872C17.2562 14.152 17.0882 14.38 16.8562 14.556C16.6242 14.732 16.3242 14.86 15.9562 14.94C15.5962 15.02 15.1642 15.06 14.6602 15.06ZM17.2762 8.916C17.1082 8.916 16.9642 8.86 16.8442 8.748C16.7322 8.628 16.6762 8.488 16.6762 8.328C16.6762 8.168 16.7322 8.028 16.8442 7.908C16.9642 7.788 17.1082 7.728 17.2762 7.728C17.4362 7.728 17.5722 7.788 17.6842 7.908C17.8042 8.028 17.8642 8.168 17.8642 8.328C17.8642 8.488 17.8042 8.628 17.6842 8.748C17.5722 8.86 17.4362 8.916 17.2762 8.916ZM15.6322 8.916C15.4642 8.916 15.3202 8.86 15.2002 8.748C15.0882 8.628 15.0322 8.488 15.0322 8.328C15.0322 8.168 15.0882 8.028 15.2002 7.908C15.3202 7.788 15.4642 7.728 15.6322 7.728C15.7922 7.728 15.9282 7.788 16.0402 7.908C16.1602 8.028 16.2202 8.168 16.2202 8.328C16.2202 8.488 16.1602 8.628 16.0402 8.748C15.9282 8.86 15.7922 8.916 15.6322 8.916Z" />
                <path d="M3.492 17.06C2.852 17.06 2.36 16.988 2.016 16.844C1.68 16.7 1.448 16.476 1.32 16.172C1.192 15.868 1.12 15.476 1.104 14.996L0.864 8.432H1.848L2.088 14.612C2.104 15.004 2.14 15.308 2.196 15.524C2.26 15.732 2.396 15.876 2.604 15.956C2.82 16.036 3.156 16.076 3.612 16.076C3.78 16.076 3.9 16.124 3.972 16.22C4.052 16.308 4.092 16.416 4.092 16.544C4.092 16.672 4.036 16.792 3.924 16.904C3.812 17.008 3.668 17.06 3.492 17.06ZM3.49219 17.06L3.61219 16.076C3.83619 16.076 4.02419 16.028 4.17619 15.932C4.32819 15.836 4.47619 15.676 4.62019 15.452C4.76419 15.228 4.92019 14.928 5.08819 14.552C5.32019 14.04 5.54819 13.652 5.77219 13.388C6.00419 13.124 6.23219 12.944 6.45619 12.848C6.68819 12.752 6.91619 12.704 7.14019 12.704C7.41219 12.704 7.66419 12.776 7.89619 12.92C8.12819 13.056 8.33219 13.24 8.50819 13.472C8.68419 13.704 8.82019 13.96 8.91619 14.24C9.02019 14.512 9.07219 14.784 9.07219 15.056C9.07219 15.536 8.98819 15.92 8.82019 16.208C8.65219 16.488 8.43619 16.692 8.17219 16.82C7.91619 16.94 7.64819 17 7.36819 17C7.12019 17 6.80019 16.952 6.40819 16.856C6.02419 16.76 5.53619 16.516 4.94419 16.124L5.41219 15.368C5.80419 15.616 6.15619 15.788 6.46819 15.884C6.78819 15.972 7.05219 16.016 7.26019 16.016C7.49219 16.016 7.67619 15.984 7.81219 15.92C7.94819 15.848 8.04819 15.748 8.11219 15.62C8.17619 15.492 8.20819 15.348 8.20819 15.188C8.20819 14.956 8.15219 14.724 8.04019 14.492C7.92819 14.26 7.78419 14.068 7.60819 13.916C7.44019 13.764 7.26019 13.688 7.06819 13.688C6.92419 13.688 6.78419 13.728 6.64819 13.808C6.51219 13.888 6.37219 14.036 6.22819 14.252C6.08419 14.468 5.92019 14.78 5.73619 15.188C5.54419 15.62 5.36019 15.964 5.18419 16.22C5.01619 16.468 4.84419 16.652 4.66819 16.772C4.49219 16.892 4.30819 16.968 4.11619 17C3.93219 17.04 3.72419 17.06 3.49219 17.06Z" />
                <path d="M0.36 6.012C0.36 5.82 0.376 5.616 0.408 5.4C0.448 5.176 0.504 4.94 0.576 4.692C0.656 4.436 0.752 4.168 0.864 3.888L1.728 4.224C1.648 4.448 1.576 4.66 1.512 4.86C1.456 5.06 1.412 5.248 1.38 5.424C1.356 5.6 1.344 5.768 1.344 5.928C1.344 6.344 1.452 6.688 1.668 6.96C1.884 7.232 2.18 7.436 2.556 7.572C2.932 7.708 3.356 7.776 3.828 7.776C4.364 7.776 4.812 7.704 5.172 7.56C5.54 7.416 5.832 7.224 6.048 6.984C6.264 6.752 6.416 6.492 6.504 6.204C6.6 5.916 6.648 5.632 6.648 5.352C6.648 5.048 6.588 4.68 6.468 4.248C6.356 3.816 6.144 3.28 5.832 2.64L6.732 2.184C6.892 2.488 7.036 2.808 7.164 3.144C7.3 3.472 7.408 3.812 7.488 4.164C7.576 4.508 7.62 4.86 7.62 5.22C7.62 5.532 7.58 5.852 7.5 6.18C7.428 6.508 7.304 6.824 7.128 7.128C6.952 7.44 6.716 7.716 6.42 7.956C6.132 8.204 5.772 8.4 5.34 8.544C4.916 8.688 4.408 8.76 3.816 8.76C3.352 8.76 2.908 8.704 2.484 8.592C2.068 8.488 1.7 8.324 1.38 8.1C1.068 7.876 0.82 7.592 0.636 7.248C0.452 6.904 0.36 6.492 0.36 6.012ZM3.984 1.224C3.816 1.224 3.672 1.168 3.552 1.056C3.44 0.936 3.384 0.796 3.384 0.636C3.384 0.476 3.44 0.336 3.552 0.216C3.672 0.0959998 3.816 0.0359999 3.984 0.0359999C4.144 0.0359999 4.28 0.0959998 4.392 0.216C4.512 0.336 4.572 0.476 4.572 0.636C4.572 0.796 4.512 0.936 4.392 1.056C4.28 1.168 4.144 1.224 3.984 1.224Z" />
              </svg>
            </p>
          </div>
        </div>
        <div className="max-lg:hidden">
          <Button onClick={addToCart} className="w-full">
            افزودن به سبد
          </Button>
        </div>
        <div className="flex items-center gap-3 text-[13px]">
          <ShieldCheck
            size={21}
            className="text-neutral-700 dark:text-neutral-300"
          />
          <span>{product.guarantee}</span>
        </div>
        <hr className="dark:border-neutral-700" />
        <div
          onClick={() => setIsShowModal(true)}
          className="cursor-pointer text-neutral-600 flex flex-col gap-3"
        >
          <p className="flex items-center justify-between gap-2 text-xs">
            <span className="flex items-center gap-2 dark:text-neutral-400">
              <Truck size={16} className="text-red-500" />
              ارسال دیجی‌کالا
            </span>
            <ChevronLeft size={17} className="dark:text-neutral-400" />
          </p>
          <p className="flex items-center gap-2 text-xs dark:text-neutral-400">
            <PackageOpen size={16} className="text-blue-700" />
            ارسال امروز (فعلا در شهر تهران و کرج)
          </p>
        </div>
        <hr className="dark:border-neutral-700" />
        <div className="flex items-center gap-3 text-[13px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M16.5 9C16.5 13.1425 13.1425 16.5 9 16.5C4.85748 16.5 1.5 13.1425 1.5 9C1.5 4.85748 4.85748 1.5 9 1.5C13.1425 1.5 16.5 4.85748 16.5 9Z"
              fill="#FFDF4E"
            />
            <path
              d="M6.30327 16.0007C5.74308 15.7848 5.21534 15.5036 4.72939 15.1664L15.1368 4.68697C15.48 5.17449 15.7666 5.70476 15.9871 6.26823L6.30327 16.0007Z"
              fill="#FFF077"
            />
            <path
              d="M14.0449 3.44998L3.47817 14.0757C3.08895 13.6525 2.74777 13.1844 2.46326 12.6801L12.635 2.43799C13.1443 2.72068 13.6172 3.06094 14.0449 3.44998Z"
              fill="#FFF077"
            />
            <path
              d="M13.2426 13.2426C10.8991 15.5862 7.10091 15.5862 4.75736 13.2426C2.41381 10.8991 2.41381 7.10091 4.75736 4.75736C7.10091 2.41381 10.8991 2.41381 13.2426 4.75736C15.5862 7.10091 15.5862 10.8991 13.2426 13.2426Z"
              fill="#FFCB05"
            />
            <path
              d="M4.75736 13.2427C7.10091 15.5862 10.8991 15.5862 13.2426 13.2427C15.5862 10.8991 15.5862 7.10094 13.2426 4.75739L4.75736 13.2427Z"
              fill="#FCA400"
            />
            <path
              d="M10.1916 10.1495L9.76402 10.5701C9.73598 10.5981 9.72196 10.6332 9.72897 10.6752L9.8271 11.264C9.84112 11.3622 9.74299 11.4323 9.65888 11.3902L9.12617 11.1098C9.09112 11.0888 9.04906 11.0888 9.02103 11.1098L8.48832 11.3902C8.4042 11.4323 8.30607 11.3622 8.32009 11.264L8.41822 10.6752C8.42523 10.6402 8.41121 10.5981 8.38318 10.5701L7.95561 10.1495C7.88551 10.0794 7.92757 9.9673 8.01869 9.95328L8.61448 9.86917C8.64953 9.86216 8.68458 9.84113 8.70561 9.80608L8.97196 9.26637C9.01402 9.18225 9.14019 9.18225 9.18224 9.26637L9.4486 9.80608C9.46262 9.84113 9.49766 9.86216 9.53972 9.86917L10.1285 9.95328C10.2196 9.9673 10.2617 10.0865 10.1916 10.1495ZM12.715 7.80842L12.0701 7.16356C11.965 7.05842 11.7897 7.06543 11.6916 7.17758C11.0537 7.91356 10.1075 8.36917 9.06308 8.36917C8.01869 8.36917 7.08645 7.91356 6.4486 7.1916C6.35047 7.07945 6.17523 7.07244 6.07009 7.17758L5.43224 7.81543C5.33411 7.91356 5.3271 8.06777 5.42523 8.17291C5.89486 8.68459 6.47663 9.09814 7.12149 9.37851V12.007C7.12149 12.3785 7.4229 12.6799 7.79439 12.6799H10.3528C10.7243 12.6799 11.0257 12.3785 11.0257 12.007V9.37851C11.6776 9.09814 12.2523 8.68459 12.722 8.17291C12.8201 8.06076 12.8131 7.90655 12.715 7.80842Z"
              fill="#FFF077"
            />
            <path
              d="M9.0771 7.17758C9.60981 7.17758 10.0374 6.75001 10.0374 6.2173C10.0374 5.68459 9.60981 5.25702 9.0771 5.25702C8.54439 5.25702 8.11682 5.6916 8.11682 6.2173C8.10981 6.75001 8.54439 7.17758 9.0771 7.17758Z"
              fill="#FFF077"
            />
          </svg>
          <span>۱۵۰ امتیاز دیجی‌کلاب</span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <Info size={16} className="cursor-pointer text-neutral-500" />
                </div>
              </TooltipTrigger>
              <TooltipContent className="px-0 py-0">
                <p className="w-80 text-xs leading-7 p-2 bg-slate-700 text-white">
                  بعد از پایان مهلت مرجوعی، برای دریافت امتیاز به صفحه
                  ماموریت‌های کلابی سر بزنید.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      {/* Add to Cart Button */}
      <div className="lg:hidden fixed flex shadow-[rgba(17,_17,_26,_0.2)_0px_0px_5px] items-center py-3 px-4 bg-white dark:bg-neutral-900 w-full bottom-0 right-0 border-t z-30">
        <div className="flex-1">
          <Button onClick={addToCart} className="w-full">
            افزودن به سبد
          </Button>
        </div>
        <div className="flex-1 flex flex-col items-end gap-2">
          {product.discount > 0 && (
            <div className="flex items-center gap-5">
              <p className="text-xs text-neutral-400 line-through">
                {product.price.toLocaleString()}
              </p>
              <div className="bg-red-600 min-w-8 flex items-center text-[13px] justify-center text-white rounded-xl">
                {product.discount}%
              </div>
            </div>
          )}
          <p className="flex gap-1">
            <span className="text-black text-[15px] dark:text-white">
              {product.discount_price.toLocaleString()}
            </span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-neutral-600 dark:fill-neutral-300"
            >
              <path d="M9.696 17.76L9.48 16.776C9.96 16.712 10.4 16.62 10.8 16.5C11.208 16.388 11.556 16.224 11.844 16.008C12.14 15.792 12.368 15.508 12.528 15.156C12.688 14.804 12.768 14.364 12.768 13.836C12.768 13.292 12.668 12.84 12.468 12.48C12.268 12.12 12.008 11.94 11.688 11.94C11.52 11.94 11.364 12.004 11.22 12.132C11.076 12.26 10.956 12.432 10.86 12.648C10.772 12.864 10.728 13.1 10.728 13.356C10.728 13.5 10.76 13.62 10.824 13.716C10.888 13.804 10.98 13.876 11.1 13.932C11.228 13.98 11.388 14.016 11.58 14.04C11.772 14.064 11.996 14.076 12.252 14.076H14.784C14.952 14.076 15.072 14.124 15.144 14.22C15.224 14.308 15.264 14.416 15.264 14.544C15.264 14.672 15.208 14.792 15.096 14.904C14.984 15.008 14.84 15.06 14.664 15.06H11.796C11.436 15.06 11.1 15.008 10.788 14.904C10.484 14.8 10.236 14.64 10.044 14.424C9.86 14.2 9.768 13.908 9.768 13.548C9.768 13.212 9.82 12.892 9.924 12.588C10.028 12.276 10.168 12 10.344 11.76C10.528 11.512 10.74 11.316 10.98 11.172C11.228 11.028 11.496 10.956 11.784 10.956C12.152 10.956 12.48 11.064 12.768 11.28C13.056 11.496 13.284 11.824 13.452 12.264C13.62 12.696 13.704 13.244 13.704 13.908C13.704 14.652 13.552 15.292 13.248 15.828C12.952 16.372 12.504 16.804 11.904 17.124C11.312 17.444 10.576 17.656 9.696 17.76ZM14.6602 15.06L14.7802 14.076C15.2522 14.076 15.6202 14.06 15.8842 14.028C16.1482 13.988 16.3362 13.896 16.4482 13.752C16.5602 13.6 16.6162 13.364 16.6162 13.044C16.6162 12.844 16.5842 12.608 16.5202 12.336C16.4562 12.056 16.3722 11.76 16.2682 11.448C16.1642 11.136 16.0522 10.828 15.9322 10.524L16.9042 10.164C17.0082 10.42 17.1042 10.712 17.1922 11.04C17.2882 11.368 17.3682 11.692 17.4322 12.012C17.4962 12.332 17.5282 12.612 17.5282 12.852C17.5282 13.252 17.4722 13.592 17.3602 13.872C17.2562 14.152 17.0882 14.38 16.8562 14.556C16.6242 14.732 16.3242 14.86 15.9562 14.94C15.5962 15.02 15.1642 15.06 14.6602 15.06ZM17.2762 8.916C17.1082 8.916 16.9642 8.86 16.8442 8.748C16.7322 8.628 16.6762 8.488 16.6762 8.328C16.6762 8.168 16.7322 8.028 16.8442 7.908C16.9642 7.788 17.1082 7.728 17.2762 7.728C17.4362 7.728 17.5722 7.788 17.6842 7.908C17.8042 8.028 17.8642 8.168 17.8642 8.328C17.8642 8.488 17.8042 8.628 17.6842 8.748C17.5722 8.86 17.4362 8.916 17.2762 8.916ZM15.6322 8.916C15.4642 8.916 15.3202 8.86 15.2002 8.748C15.0882 8.628 15.0322 8.488 15.0322 8.328C15.0322 8.168 15.0882 8.028 15.2002 7.908C15.3202 7.788 15.4642 7.728 15.6322 7.728C15.7922 7.728 15.9282 7.788 16.0402 7.908C16.1602 8.028 16.2202 8.168 16.2202 8.328C16.2202 8.488 16.1602 8.628 16.0402 8.748C15.9282 8.86 15.7922 8.916 15.6322 8.916Z" />
              <path d="M3.492 17.06C2.852 17.06 2.36 16.988 2.016 16.844C1.68 16.7 1.448 16.476 1.32 16.172C1.192 15.868 1.12 15.476 1.104 14.996L0.864 8.432H1.848L2.088 14.612C2.104 15.004 2.14 15.308 2.196 15.524C2.26 15.732 2.396 15.876 2.604 15.956C2.82 16.036 3.156 16.076 3.612 16.076C3.78 16.076 3.9 16.124 3.972 16.22C4.052 16.308 4.092 16.416 4.092 16.544C4.092 16.672 4.036 16.792 3.924 16.904C3.812 17.008 3.668 17.06 3.492 17.06ZM3.49219 17.06L3.61219 16.076C3.83619 16.076 4.02419 16.028 4.17619 15.932C4.32819 15.836 4.47619 15.676 4.62019 15.452C4.76419 15.228 4.92019 14.928 5.08819 14.552C5.32019 14.04 5.54819 13.652 5.77219 13.388C6.00419 13.124 6.23219 12.944 6.45619 12.848C6.68819 12.752 6.91619 12.704 7.14019 12.704C7.41219 12.704 7.66419 12.776 7.89619 12.92C8.12819 13.056 8.33219 13.24 8.50819 13.472C8.68419 13.704 8.82019 13.96 8.91619 14.24C9.02019 14.512 9.07219 14.784 9.07219 15.056C9.07219 15.536 8.98819 15.92 8.82019 16.208C8.65219 16.488 8.43619 16.692 8.17219 16.82C7.91619 16.94 7.64819 17 7.36819 17C7.12019 17 6.80019 16.952 6.40819 16.856C6.02419 16.76 5.53619 16.516 4.94419 16.124L5.41219 15.368C5.80419 15.616 6.15619 15.788 6.46819 15.884C6.78819 15.972 7.05219 16.016 7.26019 16.016C7.49219 16.016 7.67619 15.984 7.81219 15.92C7.94819 15.848 8.04819 15.748 8.11219 15.62C8.17619 15.492 8.20819 15.348 8.20819 15.188C8.20819 14.956 8.15219 14.724 8.04019 14.492C7.92819 14.26 7.78419 14.068 7.60819 13.916C7.44019 13.764 7.26019 13.688 7.06819 13.688C6.92419 13.688 6.78419 13.728 6.64819 13.808C6.51219 13.888 6.37219 14.036 6.22819 14.252C6.08419 14.468 5.92019 14.78 5.73619 15.188C5.54419 15.62 5.36019 15.964 5.18419 16.22C5.01619 16.468 4.84419 16.652 4.66819 16.772C4.49219 16.892 4.30819 16.968 4.11619 17C3.93219 17.04 3.72419 17.06 3.49219 17.06Z" />
              <path d="M0.36 6.012C0.36 5.82 0.376 5.616 0.408 5.4C0.448 5.176 0.504 4.94 0.576 4.692C0.656 4.436 0.752 4.168 0.864 3.888L1.728 4.224C1.648 4.448 1.576 4.66 1.512 4.86C1.456 5.06 1.412 5.248 1.38 5.424C1.356 5.6 1.344 5.768 1.344 5.928C1.344 6.344 1.452 6.688 1.668 6.96C1.884 7.232 2.18 7.436 2.556 7.572C2.932 7.708 3.356 7.776 3.828 7.776C4.364 7.776 4.812 7.704 5.172 7.56C5.54 7.416 5.832 7.224 6.048 6.984C6.264 6.752 6.416 6.492 6.504 6.204C6.6 5.916 6.648 5.632 6.648 5.352C6.648 5.048 6.588 4.68 6.468 4.248C6.356 3.816 6.144 3.28 5.832 2.64L6.732 2.184C6.892 2.488 7.036 2.808 7.164 3.144C7.3 3.472 7.408 3.812 7.488 4.164C7.576 4.508 7.62 4.86 7.62 5.22C7.62 5.532 7.58 5.852 7.5 6.18C7.428 6.508 7.304 6.824 7.128 7.128C6.952 7.44 6.716 7.716 6.42 7.956C6.132 8.204 5.772 8.4 5.34 8.544C4.916 8.688 4.408 8.76 3.816 8.76C3.352 8.76 2.908 8.704 2.484 8.592C2.068 8.488 1.7 8.324 1.38 8.1C1.068 7.876 0.82 7.592 0.636 7.248C0.452 6.904 0.36 6.492 0.36 6.012ZM3.984 1.224C3.816 1.224 3.672 1.168 3.552 1.056C3.44 0.936 3.384 0.796 3.384 0.636C3.384 0.476 3.44 0.336 3.552 0.216C3.672 0.0959998 3.816 0.0359999 3.984 0.0359999C4.144 0.0359999 4.28 0.0959998 4.392 0.216C4.512 0.336 4.572 0.476 4.572 0.636C4.572 0.796 4.512 0.936 4.392 1.056C4.28 1.168 4.144 1.224 3.984 1.224Z" />
            </svg>
          </p>
        </div>
      </div>

      <Modal closeModalHandler={closeModal} isOpen={isShowModal}>
        <div className="pt-5 pb-8 flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <span className="font-irsansb">جزئیات ارسال</span>
            <X size={18} onClick={closeModal} className="cursor-pointer" />
          </div>
          <hr className="dark:border-neutral-700" />
          <div>
            <h3 className="font-irsansb mb-2">ارسال دیجی‌کالا</h3>
            <p className="text-[13px] leading-7 text-neutral-600 dark:text-neutral-500">
              این کالا در انبار دیجی‌کالا موجود و آماده پردازش است و توسط پیک
              دیجی‌کالا در بازه انتخابی ارسال خواهد شد.
            </p>
          </div>
          <div>
            <h3 className="font-irsansb mb-2">
              ارسال امروز (فعلا در شهر تهران و کرج)
            </h3>
            <p className="text-[13px] leading-7 text-neutral-600 dark:text-neutral-500">
              اگر سفارش را قبل از ساعت ۶ عصر ثبت کنید، همان روز ارسال می‌شود. در
              صورت ثبت سفارش بعد از ساعت ۶ عصر، فردا ارسال خواهد شد.
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}
