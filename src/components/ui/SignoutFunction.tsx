"use client";

import { signOut } from "@/app/admin/users/action";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Button } from "./button";
import { ReactNode } from "react";

export function SignoutFunction({ children }: { children: ReactNode }) {
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
                router.push("/login");
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
    <div
      onClick={signoutHandler}
      className="hover:bg-neutral-100 dark:hover:bg-neutral-900 cursor-pointer py-4 flex items-center justify-between"
    >
      {children}
    </div>
  );
}
