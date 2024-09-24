import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function UserOrders() {
  const ordersList = [
    { title: "جاری", src: "/profile/current.svg", value: 0 },
    { title: "تحویل شده", src: "/profile/delivered.svg", value: 0 },
    { title: "مرجوع شده", src: "/profile/returned.svg", value: 0 },
  ];

  return (
    <div className="flex flex-col gap-10 lg:border rounded-md lg:p-5 max-lg:mx-4">
      <div>
        <div className="flex items-center justify-between text-xs font-irsansb">
          <p className="whitespace-nowrap border-b-2 border-b-red-500 pb-3">
            سفارش های من
          </p>
          <button className="w-full justify-end text-sky-500 flex items-center gap-1">
            مشاهده همه
            <ChevronLeft size={18} />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between max-lg:px-10">
        {ordersList.map((order, index) => (
          <React.Fragment key={index}>
            <div className="px-4 text-center lg:flex items-center">
              <div className="relative">
                <Image
                  alt={order.title}
                  width={60}
                  height={60}
                  src={order.src}
                />
                <span className="lg:hidden dark:text-black w-5 h-5 text-xs flex items-center justify-center bg-neutral-200 absolute bottom-0 -left-1 rounded-sm">
                  {order.value}
                </span>
              </div>
              <div>
                <p className="max-lg:hidden">{order.value} سفارش</p>
                <p className="text-xs mt-1">{order.title}</p>
              </div>
            </div>
            {ordersList.length > index + 1 && (
              <div className="w-0.5 h-20 bg-neutral-100 dark:bg-neutral-800"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}