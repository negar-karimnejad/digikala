"use server";

import db from "@/db/db";
import { redirect } from "next/navigation";
import { z } from "zod";
import bcrypt from "bcryptjs";

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

  await db.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: dashPassword,
    },
  });
  
  redirect("/");
}
