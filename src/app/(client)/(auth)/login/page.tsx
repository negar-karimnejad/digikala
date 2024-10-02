"use client";

import { signin } from "@/app/admin/users/action";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoginSchema, LoginSchemaType } from "@/utils/validation";
import { LoginFormState } from "@/utils/types";
import { authUser } from "@/utils/auth";
import connectToDB from "config/mongodb";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const initialState: LoginFormState = {
  errors: {},
  success: false,
};

export default function Login() {
  const router = useRouter();
  const [state, setState] = useState<LoginFormState>(initialState);

  const [redirectedLogin, setRedirectedLogin] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setRedirectedLogin(searchParams.has("redirected")); // Set the state based on the presence of "redirected" parameter
  }, []);

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
      toast.error(result.errors.general[0]);
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

    connectToDB();
    const user = await authUser();

    if (user && redirectedLogin) {
      router.push("/admin");
    } else if (user && !redirectedLogin) {
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
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-2 w-full"
            >
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
              <Button
                //  disabled={pending}
                type="submit"
                className="rounded-lg mt-8"
              >
                {/* {pending ? "در حال انتظار..." : "ورود"} */}
                ورود
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
      </>
    );
  };
}
