"use client";

import { signup } from "@/app/admin/_actions/users";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";

export default function Register() {
  const [error, action] = useFormState(signup, {});

  const session = useSession();

  if (session.status === "authenticated") redirect("/");

  return (
    <div className="flex items-center justify-center">
      <div className="md:w-[410px] w-full mt-16 flex flex-col gap-3 md:border rounded-lg p-8">
        <h1 className="font-bold pb-5 text-center text-5xl">
        <Logo />
        </h1>
        <p className="text-xl font-medium text-right">
          <Link className="hover:text-red-500" href="/login">
            ورود{" "}
          </Link>
          | ثبت نام
        </p>
        <p className="text-[12px] text-right mt-5">سلام!</p>
        <form action={action} className="flex flex-col gap-2 w-full">
          <label htmlFor="name" className="text-[12px]">
            لطفا نام و نام خانوادگی خود را وارد کنید
          </label>
          <Input
            type="name"
            id="name"
            name="name"
            autoFocus
            className={`bg-transparent py-5 border rounded-lg ${
              error.name ? "border-red-500" : ""
            }`}
          />
          {error.name && (
            <div className="text-destructive text-[12px]">{error.name}</div>
          )}
          <label htmlFor="name" className="text-[12px]">
            لطفا ایمیل خود را وارد کنید
          </label>
          <Input
            type="text"
            id="email"
            name="email"
            className={`bg-transparent py-5 border rounded-lg ${
              error.email ? "border-red-500" : ""
            }`}
          />
          {error.email && (
            <div className="text-destructive text-[12px]">{error.email}</div>
          )}
          <label htmlFor="password" className="text-[12px]">
            لطفا پسورد خود را وارد کنید
          </label>
          <Input
            type="password"
            id="password"
            name="password"
            className={`bg-transparent py-5 border rounded-lg ${
              error.password ? "border-red-500" : ""
            }`}
          />
          {error.password && (
            <div className="text-destructive text-[12px]">{error.password}</div>
          )}
          <SubmitButton />
        </form>
        <small className="text-gray-600 dark:text-gray-300 mx-auto text-[10px] sm:text-[12px] mt-1">
          ورود شما به معنای پذیرش{" "}
          <Link href="" className="text-blue-500">
            شرایط دیجی‌کالا
          </Link>{" "}
          و{" "}
          <Link href="" className="text-blue-500">
            قوانین حریم‌خصوصی
          </Link>{" "}
          است
        </small>
      </div>
    </div>
  );
}

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit" className="rounded-lg mt-8">
      {pending ? "در حال انتظار..." : "ثبت نام"}
    </Button>
  );
};
