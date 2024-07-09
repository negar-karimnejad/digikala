"use server";

import db from "@/db/db";
import bcrypt from "bcryptjs";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { z } from "zod";

const SignupFormSchema = z.object({
  name: z.coerce
    .string({ required_error: "لطفا نام و نام خانوادگی را وارد کنید." })
    .min(5, { message: "نام و نام خانوادگی باید حداقل 5 کاراکتر باشد." }),
  email: z
    .string()
    .min(1, { message: "لطفا ایمیل را وارد کنید." })
    .email("ایمیل معتبر نیست."),
  password: z
    .string({ required_error: "لطفا رمز کاربری را وارد کنید." })
    .min(5, { message: "رمز کاربری باید حداقل 5 کاراکتر باشد." }),

  // thumbnail: imageSchema.refine((file) => file.size > 0, "Required"),
});

type SignupErrors = {
  name?: string;
  email?: string;
  password?: string;
};

export async function signup(prevState: unknown, formData: FormData) {
  const result = SignupFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (result.success === false) {
    return result.error.formErrors.fieldErrors as SignupErrors;
  }

  const data = result.data;
  const dashPassword = bcrypt.hashSync(data.password, 10);

  try {
    await db.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: dashPassword,
      },
    });

    redirect("/login");
  } catch (error: any) {
    if (
      error.code === "P2002" &&
      error.meta &&
      error.meta.target.includes("email")
    ) {
      return {
        email:
          "این ایمیل قبلاً ثبت شده است. لطفاً از ایمیل دیگری استفاده کنید.",
      };
    }
    throw error; // Re-throw the error if it's not a unique constraint violation
  }
}
