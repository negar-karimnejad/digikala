"use client";

import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserSchema } from "@/lib/validation";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Register() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Form Errors States
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    const user = { name, phone, email, password };

    const validation = UserSchema.safeParse(user);

    if (!validation.success) {
      // Handle validation errors
      setNameError("");
      setEmailError("");
      setPhoneError("");
      setPasswordError("");

      validation.error.errors.forEach((error) => {
        if (error.path.includes("name")) setNameError(error.message);
        if (error.path.includes("email")) setEmailError(error.message);
        if (error.path.includes("phone")) setPhoneError(error.message);
        if (error.path.includes("password")) setPasswordError(error.message);
      });
      setLoading(false);
      return;
    }
    setNameError("");
    setEmailError("");
    setPhoneError("");
    setPasswordError("");

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
    setLoading(false);
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
            className={`bg-transparent py-5 border rounded-lg ${
              nameError ? "border-red-500" : ""
            }`}
          />
          {nameError && <div className="text-red-500 text-xs">{nameError}</div>}
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
            className={`bg-transparent py-5 border rounded-lg ${
              nameError ? "border-red-500" : ""
            }`}
          />
          {nameError && (
            <div className="text-red-500 text-xs">{phoneError}</div>
          )}
          <label htmlFor="name" className="text-xs">
            لطفا ایمیل خود را وارد کنید
          </label>
          <Input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`bg-transparent py-5 border rounded-lg ${
              nameError ? "border-red-500" : ""
            }`}
          />
          {nameError && (
            <div className="text-red-500 text-xs">{emailError}</div>
          )}
          <label htmlFor="password" className="text-xs">
            لطفا پسورد خود را وارد کنید
          </label>
          <Input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`bg-transparent py-5 border rounded-lg ${
              nameError ? "border-red-500" : ""
            }`}
          />
          {nameError && (
            <div className="text-red-500 text-xs">{passwordError}</div>
          )}
          <Button disabled={loading} type="submit" className="rounded-lg mt-8">
            {loading ? "در حال انتظار..." : "ثبت نام"}
          </Button>
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
