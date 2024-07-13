"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, LogIn, User2 } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import toast from "react-hot-toast";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Button } from "./button";

export default function ProfileButton() {
  const { data } = useSession();

  return (
    <>
      {data?.user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {data?.user?.image ? (
              <div className="relative ml-2">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={data.user.image} />
                  <AvatarFallback>JP</AvatarFallback>
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
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>{data?.user?.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link
                href="#"
                className="block w-full text-left"
                prefetch={false}
              >
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="#"
                className="block w-full text-left"
                prefetch={false}
              >
                Billing
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/"
                className="block w-full text-left"
                prefetch={false}
              >
                Subscription
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Button
                onClick={() => {
                  try {
                    signOut();
                    toast.success("از حساب خود خارج شدید.");
                  } catch (error) {
                    console.log(error);
                  }
                }}
                variant="secondary"
                className="block w-full text-left"
              >
                Logout
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button variant={"outline"} className="hover:bg-transparent " asChild>
          <Link href="/register">
            <LogIn size={19} className="ml-2 transform scale-x-[-1]" />
            <span>ورود | ثبت نام</span>
          </Link>
        </Button>
      )}
    </>
  );
}
