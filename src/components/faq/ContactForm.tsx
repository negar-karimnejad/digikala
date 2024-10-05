"use client";

import { User } from "@/utils/types";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function ContactForm({ user }: { user: User }) {
  const [subject, setSubject] = useState("-1");
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [orderNumber, setOrderNumber] = useState("");
  const [message, setMessage] = useState("");

  const isValid =
    subject != "-1" &&
    name.trim() &&
    email.trim() &&
    phone.trim() &&
    message.trim();

  const submitHandler = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("پیام شما با موفقیت ارسال شد.");
    setSubject("-1");
    setName("");
    setEmail("");
    setPhone("");
    setOrderNumber("");
    setMessage("");
  };
  
  return (
    <form onSubmit={submitHandler} className="grid grid-cols-12 gap-5">
      <label htmlFor="" className="col-span-12 lg:col-span-6">
        <span className="text-sm">موضوع</span>
        <span className="text-red-500">*</span>
        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="text-neutral-600 dark:bg-neutral-900 dark:text-neutral-200 mt-2 flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value={"-1"}>موضوع را انتخاب کنید</option>
          <option value="پیشنهاد">پیشنهاد</option>
          <option value="انتقاد یا شکایات">انتقاد یا شکایات</option>
          <option value="پیگیری سفارش">پیگیری سفارش</option>
          <option value="خدمات پس از فروش">خدمات پس از فروش</option>
          <option value="استعلام گارانتی">استعلام گارانتی</option>
          <option value="مدیریت">مدیریت</option>
          <option value="حسابداری و امورمالی">حسابداری و امورمالی</option>
          <option value="سایر موضوعات">سایر موضوعات</option>
          <option value="کارت هدیه و گیفت کارت">کارت هدیه و گیفت کارت</option>
        </select>
      </label>
      <label htmlFor="name" className="col-span-12 lg:col-span-6">
        <span className="text-sm">نام و نام خانوادگی</span>
        <span className="text-red-500">*</span>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          className="mt-2 py-6 dark:bg-neutral-900"
          type="text"
        />
      </label>
      <label htmlFor="email" className="col-span-12 lg:col-span-6">
        <span className="text-sm">ایمیل</span>
        <span className="text-red-500">*</span>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          className="mt-2 py-6 dark:bg-neutral-900"
          type="text"
        />
      </label>
      <label htmlFor="phone" className="col-span-12 lg:col-span-6">
        <span className="text-sm">تلفن تماس</span>
        <span className="text-red-500">*</span>
        <Input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          id="phone"
          className="mt-2 py-6 dark:bg-neutral-900"
          type="text"
        />
      </label>
      <label htmlFor="orderNumber" className="col-span-12 lg:col-span-6">
        <span className="text-sm">شماره سفارش</span>
        <Input
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
          id="orderNumber"
          className="mt-2 py-6 dark:bg-neutral-900"
          type="text"
        />
      </label>
      <label htmlFor="message" className="col-span-12 flex flex-col">
        <p>
          <span className="text-sm">متن پیام</span>
          <span className="text-red-500">*</span>
        </p>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="message"
          rows={5}
          className="dark:bg-neutral-900 resize-none mt-2 flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        ></textarea>
      </label>
      <div className="flex justify-end col-span-12">
        <Button
          className="max-lg:w-full"
          disabled={!isValid}
          variant={`${isValid ? "default" : "disabled"}`}
        >
          ثبت و ارسال
        </Button>
      </div>
    </form>
  );
}
