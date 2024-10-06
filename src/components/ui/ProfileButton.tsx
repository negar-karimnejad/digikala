"use client";

import { signOut } from "@/app/admin/users/action";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Bell,
  ChevronDown,
  ChevronLeft,
  Heart,
  LogIn,
  LogOut,
  MessageCircle,
  ShoppingBag,
  User2,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Button } from "./button";
import { User } from "@/utils/types";

export default function ProfileButton({ user }: { user: User }) {
  const router = useRouter();

  const signoutHandler = () => {
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
    <>
      {user ? (
        <DropdownMenu dir="rtl">
          <DropdownMenuTrigger asChild className="cursor-pointer">
            {user.avatar ? (
              <div className="relative ml-2">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={user?.avatar} className="object-cover" />
                  <AvatarFallback className="text-red-500 p-0.5">
                    {user.name.split(" ")[0].slice(0, 1)}{" "}
                    {user.name.split(" ")[1].slice(0, 1)}
                  </AvatarFallback>
                  <span className="sr-only">Toggle user menu</span>
                </Avatar>
                <ChevronDown className="absolute bottom-2 -left-4" size={15} />
              </div>
            ) : (
              <div className="relative ml-2">
                <User2 />
                <ChevronDown
                  className="absolute bottom-1.5 -left-4"
                  size={15}
                />
              </div>
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-60 p-0">
            <DropdownMenuLabel className="border-b w-full px-4 py-5 hover:bg-gray-100 text-base font-medium text-gray-700">
              <Link
                className="w-full text-left flex justify-between items-center transition-all duration-500"
                href="/profile"
              >
                {user.name}
                <ChevronLeft size={18} />
              </Link>
            </DropdownMenuLabel>
            <DropdownMenuItem className="text-gray-600 m-0 p-0">
              <Link
                href="/profile/orders"
                className="flex w-full items-center text-left gap-6 px-4 transition-all duration-500 hover:bg-gray-100 h-full"
                prefetch={false}
              >
                <ShoppingBag size={24} />
                <span className="border-b py-4 w-full text-right text-base">
                  سفارش‌ها
                </span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-600 m-0 p-0">
              <Link
                href="/profile/lists"
                className=" flex w-full items-center text-left gap-6 px-4 transition-all duration-500 hover:bg-gray-100 h-full"
                prefetch={false}
              >
                <Heart size={24} />
                <span className="border-b py-4 w-full text-right text-base">
                  لیست‌ها
                </span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-600 m-0 p-0">
              <Link
                href="/profile/comments"
                className=" flex w-full items-center text-left gap-6 px-4 transition-all duration-500 hover:bg-gray-100 h-full"
                prefetch={false}
              >
                <MessageCircle size={24} />
                <span className="border-b py-4 w-full text-right text-base">
                  دیدگاه‌ها
                </span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-600 m-0 p-0">
              <Link
                href="/profile/notification"
                className="flex w-full items-center text-left gap-6 px-4 transition-all duration-500 hover:bg-gray-100 h-full"
                prefetch={false}
              >
                <Bell size={24} />
                <span className="border-b py-4 w-full text-right text-base">
                  پیغام ها
                </span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-600 m-0 p-0" asChild>
              <button
                onClick={signoutHandler}
                className="flex w-full items-center text-left gap-6 px-4 transition-all duration-500 hover:bg-gray-100 h-full"
              >
                <LogOut size={24} />
                <span className="border-b py-4 w-full text-right text-base">
                  خروج از حساب کاربری
                </span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button variant={"outline"} className="hover:bg-transparent" asChild>
          <Link href="/register">
            <LogIn size={19} className="ml-2 transform scale-x-[-1]" />
            <span>ورود | ثبت نام</span>
          </Link>
        </Button>
      )}
    </>
  );
}
