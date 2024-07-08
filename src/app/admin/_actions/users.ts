"use server";

import db from "@/db/db";
import { Prisma } from "@prisma/client";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { z } from "zod";

const SignupFormSchema = z.object({
  name: z
    .string({ required_error: "لطفا نام و نام خانوادگی را وارد کنید" })
    .min(5, { message: "نام و نام خانوادگی باید حداقل 5 کاراکتر باشد" }),
  email: z
    .string()
    .min(1, { message: "لطفا ایمیل را وارد کنید" })
    .email("این ایمیل معتبر نیست"),
  // .refine((e) => e === "abcd@fg.com", "این ایمیل موجود نیست"),
  password: z
    .string({ required_error: "لطفا رمز کاربری را وارد کنید" })
    .min(5, { message: "رمز کاربری باید حداقل 5 کاراکتر باشد" }),

  // thumbnail: imageSchema.refine((file) => file.size > 0, "Required"),
});

export async function signup(prevState: unknown, formData: FormData) {
  const result = SignupFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }
  const data = result.data;
  const dashPassword = await bcrypt.hashSync(data.password, 10);
  try {
    await db.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: dashPassword,
      },
    });
    redirect("/login");
  } catch (error) {
    console.error("Error creating user:", error);

    // Check if the error is a Prisma unique constraint violation
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002" &&
      (error.meta?.target as string[]).includes("email")
    ) {
      return {
        email:
          "این ایمیل قبلاً ثبت شده است. لطفاً از ایمیل دیگری استفاده کنید.",
      };
    }

    // Return a generic error message to the client
    return { error: "مشکلی در ایجاد کاربر وجود داشت. لطفا دوباره تلاش کنید." };
  }
}
