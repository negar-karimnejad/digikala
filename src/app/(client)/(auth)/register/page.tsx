"use client";

import { signup } from "@/app/admin/users/action";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { initialState } from "@/types/types";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";

export default function Register() {
  const [state, formAction] = useFormState(signup, initialState);
  const { status } = useSession();

  if (status === "authenticated") redirect("/");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formAction(formData);
  };

  useEffect(() => {
    if (state.success) {
      toast.success("ثبت نام با موفقیت انجام شد.");
      redirect("/login");
    }
  }, [state.success]);

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
        <p className="text-xs text-right mt-5">سلام!</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
          <label htmlFor="name" className="text-xs">
            لطفا نام و نام خانوادگی خود را وارد کنید
          </label>
          <Input
            type="name"
            id="name"
            name="name"
            autoFocus
            className={`bg-transparent py-5 border rounded-lg 
              ${state.errors.name ? "border-red-500" : ""}
               `}
          />
          {state.errors.name && (
            <div className="text-destructive text-xs">{state.errors.name}</div>
          )}
          <label htmlFor="name" className="text-xs">
            لطفا ایمیل خود را وارد کنید
          </label>
          <Input
            type="text"
            id="email"
            name="email"
            className={`bg-transparent py-5 border rounded-lg ${
              state.errors.email ? "border-red-500" : ""
            }`}
          />
          {state.errors.email && (
            <div className="text-destructive text-xs">{state.errors.email}</div>
          )}
          <label htmlFor="password" className="text-xs">
            لطفا پسورد خود را وارد کنید
          </label>
          <Input
            type="password"
            id="password"
            name="password"
            className={`bg-transparent py-5 border rounded-lg ${
              state.errors.password ? "border-red-500" : ""
            }`}
          />
          {state.errors.password && (
            <div className="text-destructive text-xs">
              {state.errors.password}
            </div>
          )}
          <SubmitButton />
        </form>
        <small className="text-gray-600 dark:text-gray-300 mx-auto text-[10px] sm:text-xs mt-1">
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
