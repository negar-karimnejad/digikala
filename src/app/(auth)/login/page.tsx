"use client";

import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("ایمیل نامعتبر است."),
  password: z.string().min(6, "رمز عبور باید حداقل 5 کاراکتر باشد."),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function Login() {
  const params = useSearchParams();
  const redirectedLogin = params.size === 1;

  const router = useRouter();
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const onSubmitHandler = async (formData: FormData) => {
    const result = loginSchema.safeParse(
      Object.fromEntries(formData.entries())
    );

    if (!result.success) {
      const errorMessages: { email?: string; password?: string } = {};
      result.error.errors.forEach((error) => {
        errorMessages[error.path[0] as keyof LoginForm] = error.message;
      });
      setErrors(errorMessages);
      return;
    }

    setErrors({});

    const data = result.data;

    await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    }).then(({ error }: any) => {
      if (error) {
        toast.error("ایمیل یا رمز کاربری نادرست است.");
      } else {
        toast.success("از دیدنت خوشحالیم!");
      }
    });
  };

  const session = useSession();

  if (session.status === "authenticated" && redirectedLogin) {
    router.push("/admin");
  } else if (session.status === "authenticated" && !redirectedLogin) {
    router.push("/");
  }

  return (
    <>
      {redirectedLogin && (
        <div className="m-3 bg-white p-4 border text-sm rounded-lg shadow-md text-red-500 w-80 max-lg:mx-auto">
          برای مشاهده پنل مدیریت آدرس ایمیل و رمز کاربری زیر را وارد کنید.
          <p className="mt-5 text-left text-gray-500">
            Email: negar.karimnejad@gmail.com <br /> Password: admin123456
          </p>
        </div>
      )}
      <div
        className={`items-center justify-center ${
          redirectedLogin ? "md:flex" : "flex"
        }`}
      >
        <div
          className={`md:w-[410px] w-full flex flex-col gap-3 md:border rounded-lg  ${
            redirectedLogin ? "mt-0 px-8 py-2" : "mt-16 p-8"
          }`}
        >
          <h1 className="font-bold pb-5 text-center text-5xl">
            <Logo />
          </h1>
          <p className="text-xl font-medium text-right">
            ورود |{" "}
            <Link className="hover:text-red-500" href="/register">
              ثبت نام
            </Link>
          </p>
          <p className="text-xs text-right mt-5">سلام!</p>
          <form action={onSubmitHandler} className="flex flex-col gap-2 w-full">
            <label htmlFor="name" className="text-xs">
              لطفا ایمیل خود را وارد کنید
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              className="bg-transparent py-5 border rounded-lg"
            />
            {errors.email && (
              <div className="text-destructive text-xs">{errors.email}</div>
            )}
            <label htmlFor="password" className="text-xs">
              لطفا پسورد خود را وارد کنید
            </label>
            <Input
              type="password"
              id="password"
              name="password"
              className="bg-transparent py-5 border rounded-lg"
            />
            {errors.password && (
              <div className="text-destructive text-xs">{errors.password}</div>
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
    </>
  );
}

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit" className="rounded-lg mt-8">
      {pending ? "در حال انتظار..." : "ورود"}
    </Button>
  );
};
