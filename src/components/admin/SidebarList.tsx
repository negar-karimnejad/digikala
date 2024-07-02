import {
  ChevronLeft,
  Layers3,
  ListChecks,
  LogOut,
  MessagesSquare,
  PackageOpen,
  Plus,
  ShoppingBasket,
  Users2,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { DarkMode } from "../ui/DarkMode";

const sidebarMenu = [
  { label: "محصول جدید", icon: <Plus />, href: "/admin/new" },
  { label: "محصولات", icon: <PackageOpen />, href: "/admin/products" },
  { label: "سفارشات", icon: <ShoppingBasket />, href: "/admin/orders" },
  { label: "دسته بندی ها", icon: <Layers3 />, href: "/admin/categories" },
  {
    label: "مشخصات دسته بندی ها",
    icon: <ListChecks />,
    href: "/admin/categories-features",
  },
  { label: "کاربران", icon: <Users2 />, href: "/admin/users" },
  { label: "دیدگاه ها", icon: <MessagesSquare />, href: "/admin/reviews" },
];

export default function SidebarList({
  closeSheet,
}: {
  closeSheet?: () => void;
}) {
  return (
    <div className="flex flex-col justify-center h-full gap-10">
      <div className="py-5 flex items-center justify-center gap-2">
        <DarkMode />
        <h1 onClick={closeSheet} className="font-bold text-center text-5xl ">
          <Link href="/admin">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 115 30"
              className="mx-auto h-12 w-40"
            >
              <path
                d="M76.916 19.024h6.72v-8.78h-6.72c-1.16 0-2.24 1.061-2.24 2.195v4.39c0 1.134 1.08 2.195 2.24 2.195zm26.883 0h6.72v-8.78h-6.72c-1.16 0-2.24 1.061-2.24 2.195v4.39c0 1.134 1.08 2.195 2.24 2.195zM88.117 6.951v15.366c0 .484-.625 1.098-1.12 1.098l-2.24.023c-.496 0-1.12-.637-1.12-1.12v-.733l-1.017 1.196c-.31.413-1.074.634-1.597.634h-4.107c-3.604 0-6.721-3.063-6.721-6.586v-4.39c0-3.523 3.117-6.585 6.72-6.585h10.082c.495 0 1.12.613 1.12 1.097zm26.883 0v15.366c0 .484-.624 1.098-1.12 1.098l-2.24.023c-.496 0-1.12-.637-1.12-1.12v-.733l-1.017 1.196c-.31.413-1.074.634-1.597.634h-4.107c-3.604 0-6.721-3.063-6.721-6.586v-4.39c0-3.523 3.117-6.585 6.72-6.585h10.082c.495 0 1.12.613 1.12 1.097zm-74.675 3.293h-6.721c-1.16 0-2.24 1.061-2.24 2.195v4.39c0 1.134 1.08 2.195 2.24 2.195h6.72v-8.78zm4.48-3.293V23.78c0 3.523-3.117 6.22-6.72 6.22H34.62c-.515 0-1-.236-1.311-.638l-1.972-2.55c-.327-.424-.144-1.202.399-1.202h6.347c1.16 0 2.24-.696 2.24-1.83v-.365h-6.72c-3.604 0-6.72-3.063-6.72-6.586v-4.39c0-3.523 3.116-6.585 6.72-6.585h4.107c.514 0 1.074.405 1.437.731l1.177 1.098V6.95c0-.483.625-1.097 1.12-1.097h2.24c.496 0 1.12.613 1.12 1.097zM4.481 16.83c0 1.134 1.08 2.195 2.24 2.195h6.72v-8.78h-6.72c-1.16 0-2.24 1.061-2.24 2.195v4.39zM16.8 0c.497 0 1.121.613 1.121 1.098v21.22c0 .483-.624 1.097-1.12 1.097h-2.24c-.496 0-1.12-.613-1.12-1.098v-.732l-1.175 1.232c-.318.346-.932.598-1.44.598H6.722C3.117 23.415 0 20.352 0 16.829v-4.356c0-3.523 3.117-6.62 6.72-6.62h6.722V1.099c0-.485.624-1.098 1.12-1.098h2.24zm46.3 14.634L69.336 6.9c.347-.421.04-1.048-.513-1.048h-3.566a.908.908 0 0 0-.696.323l-6.314 7.727V1.098c0-.485-.625-1.098-1.12-1.098h-2.24c-.496 0-1.12.613-1.12 1.098v21.22c0 .483.624 1.097 1.12 1.097h2.24c.495 0 1.12-.614 1.12-1.098v-6.951l6.317 7.744c.17.207.428.328.7.328h3.562c.554 0 .86-.627.514-1.048l-6.24-7.756zM48.166 0c-.496 0-1.12.613-1.12 1.098v2.195c0 .484.624 1.097 1.12 1.097h2.24c.495 0 1.12-.613 1.12-1.097V1.098c0-.485-.625-1.098-1.12-1.098h-2.24zm0 5.854c-.496 0-1.12.613-1.12 1.097v15.366c0 .484.8 1.12 1.295 1.12l2.065-.022c.495 0 1.12-.614 1.12-1.098V6.951c0-.484-.625-1.097-1.12-1.097h-2.24zM21.282 0c-.495 0-1.12.613-1.12 1.098v2.195c0 .484.625 1.097 1.12 1.097h2.24c.496 0 1.12-.613 1.12-1.097V1.098c0-.485-.624-1.098-1.12-1.098h-2.24zm0 5.854c-.495 0-1.12.613-1.12 1.097v15.366c0 .484.625 1.098 1.12 1.098h2.24c.496 0 1.12-.614 1.12-1.098V6.951c0-.484-.624-1.097-1.12-1.097h-2.24zm73.556-4.756v21.22c0 .483-.625 1.097-1.12 1.097h-2.24c-.496 0-1.12-.614-1.12-1.098V1.097c0-.484.624-1.097 1.12-1.097h2.24c.495 0 1.12.613 1.12 1.098z"
                fill="#EE384E"
                fillRule="evenodd"
              ></path>
            </svg>
          </Link>
        </h1>
      </div>
      <div>
        <ul>
          {sidebarMenu.map((item, index: number) => (
            <li
              onClick={closeSheet}
              key={index}
              className="px-5 hover:bg-gray-200"
            >
              <Link
                href={item.href}
                className="flex items-center border-t py-4 justify-between"
              >
                <div className="flex items-center gap-4">
                  <span>{item.icon}</span>
                  <span className="text-gray-700">{item.label}</span>
                </div>
                <span>
                  <ChevronLeft size={14} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Button
          asChild
          variant={"secondary"}
          //   todo: add logout function
          onClick={closeSheet}
          className="hover:bg-gray-200 flex justify-start w-full py-7 text-right"
        >
          <Link href="" className="flex gap-4">
            <span>
              <LogOut />
            </span>
            <span className="text-gray-700">خروج از حساب کاربری</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
