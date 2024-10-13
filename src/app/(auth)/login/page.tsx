"use client";

import { signin, signOut } from "@/app/admin/users/action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoginFormState } from "@/utils/types";
import { LoginSchema, LoginSchemaType } from "@/utils/validation";
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
    setRedirectedLogin(searchParams.has("redirected"));
  }, [redirectedLogin]);

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
      // Set validation errors without causing additional renders
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
        // Clear query parameters from the URL without reloading
        const cleanUrl = window.location.pathname;
        window.history.replaceState({}, document.title, cleanUrl);

        // Delay navigation slightly to avoid issues
        setTimeout(() => {
          if (redirectedLogin) {
            router.push("/admin");
          } else {
            router.push("/");
          }
        }, 100);

        toast.success("خوشحالیم که میبینیمت :)");
      } else {
        setState((prevState) => ({
          ...prevState,
          errors: result.errors,
          success: false,
        }));
        toast.error(result.errors.general[0]);
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
  };

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
          {/* Logo */}
          <h1 className="font-bold pb-5 mx-auto text-5xl">
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="80"
                viewBox="0 0 182 126"
                fill="none"
              >
                <path
                  d="M90.769 66.5073H90.829H90.889C126.919 66.4873 159.099 50.0373 180.349 24.2473C182.239 21.9473 182.039 18.5773 179.929 16.4673L164.479 1.02727C162.999 -0.452726 160.539 -0.322726 159.269 1.34727C144.169 21.1173 119.149 34.0473 90.819 34.0573C62.489 34.0573 37.469 21.1173 22.369 1.34727C21.099 -0.312726 18.639 -0.452726 17.159 1.02727L1.719 16.4673C-0.391002 18.5773 -0.591 21.9473 1.299 24.2473C22.549 50.0373 54.739 66.4873 90.759 66.5073"
                  fill="#ED1944"
                />
                <path
                  d="M171.199 87.3574L161.319 87.3374C160.919 87.3374 160.539 87.4974 160.249 87.7774L157.639 90.3874C157.359 90.6674 157.199 91.0574 157.199 91.4574V92.9874C157.199 93.7274 157.799 94.3274 158.539 94.3274H172.589C173.739 94.3274 174.669 95.2574 174.669 96.4074V106.177C174.669 107.327 173.739 108.257 172.589 108.257H167.219C167.209 108.257 167.189 108.257 167.179 108.257H158.579C157.819 108.257 157.199 108.877 157.199 109.637V113.837C157.199 114.597 157.819 115.217 158.579 115.217H171.199C176.969 115.217 181.649 110.537 181.649 104.767V97.7774C181.649 92.0074 176.969 87.3374 171.199 87.3374"
                  fill="#ED1944"
                />
                <path
                  d="M6.99904 103.957C7.19904 104.517 7.72905 104.887 8.32905 104.887H12.669C13.639 104.887 14.309 103.927 13.979 103.027L7.00905 84.7772C6.80905 84.2272 6.27905 83.8572 5.68905 83.8572H1.38904C0.439043 83.8572 -0.230952 84.8072 0.0890476 85.7072L6.99904 103.977V103.957Z"
                  fill="#ED1944"
                />
                <path
                  d="M127.899 118.807H123.529C122.799 118.807 122.219 119.397 122.219 120.117V124.487C122.219 125.207 122.809 125.797 123.529 125.797H127.899C128.629 125.797 129.209 125.207 129.209 124.487V120.117C129.209 119.397 128.619 118.807 127.899 118.807Z"
                  fill="#ED1944"
                />
                <path
                  d="M152.309 118.807H141.059C140.299 118.807 139.689 119.417 139.689 120.177V124.427C139.689 125.187 140.299 125.797 141.059 125.797H152.309C153.069 125.797 153.679 125.187 153.679 124.427V120.177C153.679 119.417 153.069 118.807 152.309 118.807Z"
                  fill="#ED1944"
                />
                <path
                  d="M62.909 87.3472H60.019L69.589 78.2472C70.079 77.7172 69.709 76.8572 68.979 76.8572H61.899C61.349 76.8572 60.819 77.0772 60.429 77.4572L45.699 91.9772C44.829 92.8472 45.449 94.3372 46.679 94.3372H62.959C64.839 94.3372 66.369 95.9572 66.369 97.8372V108.327L40.429 108.307C39.289 108.307 38.369 107.387 38.369 106.247V85.2272C38.369 84.4672 37.759 83.8572 36.999 83.8572H32.839C32.079 83.8572 31.469 84.4672 31.469 85.2272L31.499 105.397C31.769 110.867 36.279 115.217 41.809 115.217L71.899 115.237C72.659 115.237 73.269 114.627 73.269 113.867L73.219 97.5272C73.029 91.9772 68.489 87.3572 62.899 87.3572"
                  fill="#ED1944"
                />
                <path
                  d="M26.609 83.8472H22.449C21.689 83.8472 21.079 84.4572 21.079 85.2172V106.347C21.079 107.487 20.159 108.417 19.019 108.417L4.18904 108.397C3.78904 108.397 3.40904 108.557 3.12904 108.837L0.459038 111.377C0.179038 111.657 0.019043 112.047 0.019043 112.447V113.977C0.019043 114.717 0.619039 115.317 1.35904 115.317H17.649C23.189 115.317 27.689 110.967 27.959 105.497L27.989 85.2172C27.989 84.4572 27.379 83.8472 26.619 83.8472"
                  fill="#ED1944"
                />
                <path
                  d="M153.649 105.317L153.679 95.7072C153.679 94.9472 153.059 94.3272 152.299 94.3272H148.089C147.329 94.3272 146.709 94.9472 146.709 95.7072V106.177C146.709 107.327 145.769 108.267 144.619 108.267H129.239V97.7972C129.239 91.0472 124.399 87.3472 118.749 87.3472H108.879C108.479 87.3472 108.099 87.5072 107.809 87.7872L105.199 90.3972C104.919 90.6772 104.759 91.0672 104.759 91.4672V92.9972C104.759 93.7372 105.359 94.3372 106.099 94.3372H120.149C121.299 94.3272 122.239 95.2572 122.239 96.4172L122.269 108.277L99.159 108.327C98.389 108.327 97.769 108.947 97.769 109.717V113.937C97.769 114.707 98.389 115.327 99.159 115.327H104.769V116.747C104.769 117.897 103.829 118.837 102.679 118.837H85.679C84.639 118.827 83.799 117.987 83.789 116.937V102.727C83.789 101.957 83.1589 101.347 82.3889 101.347H78.179C77.419 101.347 76.799 101.967 76.799 102.727L76.819 115.347C76.799 122.317 80.2889 125.807 87.2789 125.807H101.419C107.619 125.807 111.749 121.837 111.749 115.317H127.859C128.629 115.317 129.249 114.697 129.249 113.927V111.757L129.269 111.777L132.329 114.907C132.589 115.167 132.939 115.317 133.299 115.317H143.239C148.839 115.317 153.399 110.847 153.679 105.317"
                  fill="#ED1944"
                />
              </svg>
            </Link>
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
              autoComplete="off"
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
}
