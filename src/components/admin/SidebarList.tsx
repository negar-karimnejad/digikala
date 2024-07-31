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
import { useRouter } from "next/navigation";

const sidebarMenu = [
  { label: "محصولات", icon: <PackageOpen />, href: "/admin/products" },
  { label: "محصول جدید", icon: <Plus />, href: "/admin/products/new" },
  { label: "سفارشات", icon: <ShoppingBasket />, href: "/admin/orders" },
  { label: "دسته‌بندی ها", icon: <Layers3 />, href: "/admin/categories" },
  {
    label: "زیرمجموعه دسته‌بندی ها",
    icon: <Layers3 />,
    href: "/admin/categories/submenu",
  },
  {
    label: "آیتم های زیرمجموعه ها",
    icon: <Layers3 />,
    href: "/admin/categories/submenu-Item",
  },

  { label: "کاربران", icon: <Users2 />, href: "/admin/users" },
  { label: "دیدگاه ها", icon: <MessagesSquare />, href: "/admin/reviews" },
];

export default function SidebarList({
  closeSheet,
}: {
  closeSheet?: () => void;
}) {
  const router = useRouter();

  const signoutHandler = () => {
    closeSheet;
    toast(
      (t) => (
        <div>
          از حساب کاربری خود خارج می شوید؟
          <div className="flex justify-end mt-3">
            <Button
              className="ml-1 mr-5 "
              variant={"secondary"}
              onClick={() => toast.dismiss(t.id)}
            >
              انصراف
            </Button>
            <Button
              className=""
              variant={"destructive"}
              onClick={async () => {
                await signOut();
                toast.dismiss(t.id);
                router.refresh();
                toast.success("از حساب خود خارج شدید.");
              }}
            >
              خروج از حساب
            </Button>
          </div>
        </div>
      ),
      { position: "top-left" }
    );
  };

  return (
    <div className="flex flex-col justify-between h-full">
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
          onClick={signoutHandler}
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
