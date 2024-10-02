import { authUser } from "@/utils/auth";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import persianLogo from "../../../../public/logo/digi.svg";
import ShippingForm from "@/components/cart/ShippingForm";
import { User } from "@/utils/types";

export default async function Shipping() {
  const user: User = await authUser();

  return (
    <>
      <div className="lg:grid flex flex-col-reverse grid-cols-12 lg:items-center lg:border p-4 lg:my-7 lg:mx-20 lg:rounded-md">
        <Link
          href="/checkout/cart"
          className="lg:col-span-6 flex items-center gap-2 max-lg:pt-5 max-lg:text-sm"
        >
          <ArrowRight
            size={22}
            className="text-neutral-700 dark:text-neutral-100"
          />
          <span className="text-neutral-900 dark:text-white font-irsansb">
            آدرس و زمان ارسال
          </span>
        </Link>
        <div className="col-span-6 max-lg:mx-auto">
          <Image alt="Logo" width={100} height={100} src={persianLogo} />
        </div>
      </div>
      <div className="w-full h-2 bg-neutral-100 dark:bg-neutral-800 lg:hidden"></div>
      <ShippingForm user={user} />
    </>
  );
}
