import ShippingForm from "@/components/cart/ShippingForm";
import { authUser } from "@/utils/auth";
import { serializeDoc } from "@/utils/serializeDoc";
import { User } from "@/utils/types";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import persianLogo from "../../../../public/logo/digi.svg";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "ارسال سفارش",
  };
}

export default async function Shipping() {
  const user: User = await authUser();

  const serializedUser = serializeDoc(user);
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
            آدرس
          </span>
        </Link>
        <div className="col-span-6 max-lg:mx-auto">
          <Image alt="Logo" width={100} height={100} src={persianLogo} />
        </div>
      </div>
      <div className="w-full h-2 bg-neutral-100 dark:bg-neutral-800 lg:hidden"></div>
      <ShippingForm user={serializedUser} />
    </>
  );
}
