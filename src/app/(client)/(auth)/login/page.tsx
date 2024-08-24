"use client";

import { signin } from "@/app/admin/users/action";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoginSchema, LoginSchemaType } from "@/lib/validation";
import { LoginFormState } from "@/types/types";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";

const initialState: LoginFormState = {
  errors: {},
  success: false,
};

export default function Login() {
  const router = useRouter();
  const [state, setState] = useState<LoginFormState>(initialState);

  const params = useSearchParams();
  const redirectedLogin = params.size === 1;

  const validateForm = (formData: FormData) => {
    const formObject = Object.fromEntries(
      formData.entries()
    ) as LoginSchemaType;
    const validation = LoginSchema.safeParse(formObject);

    if (validation.success) {
      return {}; // No errors
    } else {
      const errors: Partial<LoginFormState["errors"]> = {};
      validation.error.errors.forEach((error) => {
        errors[error.path[0]] = [error.message];
      });
      return errors;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setState((prevState) => ({
        ...prevState,
        errors: validationErrors,
        success: false,
      }));
      return;
    }
    try {
      const result = await signin(state, formData);

      if (result.success) {
        toast.success("خوشحالیم که میبینیمت :)");
        router.push("/");
      } else {
        setState((prevState) => ({
          ...prevState,
          errors: result.errors,
          success: false,
        }));
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setState((prevState) => ({
        ...prevState,
        errors: {
          general: ["An unexpected error occurred. Please try again."],
        },
        success: false,
      }));
    }

    // const result = loginSchema.safeParse(
    //   Object.fromEntries(formData.entries())
    // );

    // if (!result.success) {
    //   const errorMessages: { email?: string; password?: string } = {};
    //   result.error.errors.forEach((error) => {
    //     errorMessages[error.path[0] as keyof LoginForm] = error.message;
    //   });
    //   setErrors(errorMessages);
    //   return;
    // }

    // setErrors({});

    // const data = result.data;

    // await signin(data);
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
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
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
              <div className="text-destructive text-xs">
                {state.errors.email}
              </div>
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
