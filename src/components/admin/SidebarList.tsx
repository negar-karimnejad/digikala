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
import { signOut } from "next-auth/react";
import Link from "next/link";
import toast from "react-hot-toast";
import Logo from "../Logo";
import { Button } from "../ui/button";
import { DarkMode } from "../ui/DarkMode";

const sidebarMenu = [
  { label: "محصول جدید", icon: <Plus />, href: "/admin/products/new" },
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
          <Logo />
        </h1>
      </div>
      <div>
        <ul>
          {sidebarMenu.map((item, index: number) => (
            <li
              onClick={closeSheet}
              key={index}
              className="px-5 dark:hover:bg-neutral-900 hover:bg-neutral-100"
            >
              <Link
                href={item.href}
                className="flex items-center border-t py-4 justify-between"
              >
                <div className="flex items-center gap-4">
                  <span>{item.icon}</span>
                  <span className="">{item.label}</span>
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
          onClick={() => {
            closeSheet;
            try {
              signOut();
              toast.success("از حساب خود خارج شدید.");
            } catch (error) {
              console.log(error);
            }
          }}
          className="dark:hover:bg-neutral-700 hover:bg-neutral-200 cursor-pointer flex justify-start w-full py-7 text-right"
        >
          <div className="flex gap-4">
            <span>
              <LogOut />
            </span>
            <span className="">خروج از حساب کاربری</span>
          </div>
        </Button>
      </div>
    </div>
  );
}
