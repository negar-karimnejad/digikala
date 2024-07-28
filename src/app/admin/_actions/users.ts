"use server";

import db from "@/db/db";
import { FormState } from "@/types/types";
import bcrypt from "bcryptjs";
import fs from "fs/promises";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";
import { z } from "zod";

const avatarSchema = z
  .instanceof(File, { message: "Required" })
  .refine((file) => file.size === 0 || file.type.startsWith("image/"));

const UserSchema = z.object({
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
});

export async function signup(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  const result = UserSchema.safeParse(Object.fromEntries(formData.entries()));

  if (result.success === false) {
    return {
      ...state,
      errors: result.error.formErrors.fieldErrors,
    };
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

    return { ...state, errors: {}, email: data.email };
  } catch (error: any) {
    if (
      error.code === "P2002" &&
      error.meta &&
      error.meta.target.includes("email")
    ) {
      return {
        ...state,
        errors: {
          email: [
            "این ایمیل قبلاً ثبت شده است. لطفاً از ایمیل دیگری استفاده کنید.",
          ],
        },
      };
    }
    throw error; // Re-throw the error if it's not a unique constraint violation
  }
}

const updateSchema = z.object({
  name: z.coerce
    .string({ required_error: "لطفا نام و نام خانوادگی را وارد کنید." })
    .min(5, { message: "نام و نام خانوادگی باید حداقل 5 کاراکتر باشد." }),
  email: z
    .string()
    .min(1, { message: "لطفا ایمیل را وارد کنید." })
    .email("ایمیل معتبر نیست.")
    .optional(),
  password: z
    .string({ required_error: "لطفا رمز کاربری را وارد کنید." })
    .min(5, { message: "رمز کاربری باید حداقل 5 کاراکتر باشد." })
    .optional(),
  role: z.string(),
  avatar: avatarSchema.optional(),
});

export async function updateUser(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  const id = formData.get("id");
  const numericId = Number(id);

  if (!id) throw new Error("User ID is required");

  const result = updateSchema.safeParse(Object.fromEntries(formData.entries()));

  if (result.success === false) {
    return {
      ...state,
      errors: result.error.formErrors.fieldErrors,
    };
  }

  const data = result.data;

  const user = await db.user.findUnique({ where: { id: numericId } });

  if (user == null) return notFound();

  let avatarPath = user.avatar;

  if (data.avatar != null && data.avatar.size > 0) {
    if (user.avatar) {
      await fs.unlink(`public${user.avatar}`);
    }
    avatarPath = `/users/${crypto.randomUUID()}-${data.avatar.name}`;
    await fs.writeFile(
      `public${avatarPath}`,
      Buffer.from(await data.avatar.arrayBuffer())
    );
  }

  await db.user.update({
    where: { id: numericId },
    data: {
      name: data.name,
      role: data.role,
      avatar: avatarPath,
    },
  });

  revalidatePath("/");
  revalidatePath("/users");

  redirect("/admin/users");
}

export async function deleteUser(id: number) {
  const user = await db.user.delete({ where: { id } });

  if (user == null) return notFound();

  if (user.avatar) {
    await fs.unlink(`public${user.avatar}`);
  }

  revalidatePath("/");
  revalidatePath("/users");
}
