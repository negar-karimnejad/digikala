"use client";

import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";

export default function Register() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = { name, phone, email, password };

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    console.log(res);

    if (res.status === 201) {
      toast.success("ثبت نام با موفقیت انجام شد :)");
    }
  };

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
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
            className="bg-transparent py-5 border rounded-lg"
          />
          <label htmlFor="phone" className="text-xs">
            لطفا شماره تماس خود را وارد کنید
          </label>
          <Input
            type="phone"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoFocus
            className="bg-transparent py-5 border rounded-lg"
          />
          <label htmlFor="name" className="text-xs">
            لطفا ایمیل خود را وارد کنید
          </label>
          <Input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent py-5 border rounded-lg"
          />
          <label htmlFor="password" className="text-xs">
            لطفا پسورد خود را وارد کنید
          </label>
          <Input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-transparent py-5 border rounded-lg"
          />
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
