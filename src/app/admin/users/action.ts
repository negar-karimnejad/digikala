"use server";

import db from "@/db/db";
import { UserSchema, UserupdateSchema } from "@/lib/validation";
import { UserFormState } from "@/types/types";
import { generateAccessToken } from "@/utils/auth";
import { roles } from "@/utils/constants";
import bcrypt from "bcryptjs";
import fs from "fs/promises";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";
import UserModel from "../../../../models/User";

// export async function signup(
//   state: UserFormState,
//   formData: FormData
// ): Promise<UserFormState> {
//   const result = UserSchema.safeParse(Object.fromEntries(formData.entries()));

//   if (!result.success) {
//     return {
//       ...state,
//       errors: result.error.formErrors.fieldErrors,
//       success: false,
//     };
//   }

//   const data = result.data;
//   const { avatar, email, name, password, phone } = data;

//   const isUserExist = await UserModel.findOne({
//     $or: [{ name }, { email }, { phone }],
//   });

//   if (isUserExist) {
//     throw new Error("The username or email or phone exist already !!");
//   }

//   const hashedPassword = bcrypt.hashSync(password, 10);

//   const accessToken = generateAccessToken({ name });

//   const users = await UserModel.find({});

//   await UserModel.create({
//     name,
//     email,
//     phone,
//     password: hashedPassword,
//     role: users.length > 0 ? roles.USER : roles.ADMIN,
//   });

//   return { ...state, errors: {}, email, success: true };
// }

// export async function updateUser(
//   state: UserFormState,
//   formData: FormData
// ): Promise<UserFormState> {
//   const id = formData.get("id");
//   const numericId = Number(id);

//   if (!id) throw new Error("User ID is required");

//   const result = UserupdateSchema.safeParse(
//     Object.fromEntries(formData.entries())
//   );

//   if (result.success === false) {
//     return {
//       ...state,
//       errors: result.error.formErrors.fieldErrors,
//     };
//   }

//   const data = result.data;

//   const user = await db.user.findUnique({ where: { id: numericId } });

//   if (user == null) return notFound();

//   let avatarPath = user.avatar;

//   if (data.avatar != null && data.avatar.size > 0) {
//     if (user.avatar) {
//       await fs.unlink(`public${user.avatar}`);
//     }
//     avatarPath = `/users/${crypto.randomUUID()}-${data.avatar.name}`;
//     await fs.writeFile(
//       `public${avatarPath}`,
//       Buffer.from(await data.avatar.arrayBuffer())
//     );
//   }

//   await db.user.update({
//     where: { id: numericId },
//     data: {
//       name: data.name,
//       role: data.role,
//       avatar: avatarPath,
//     },
//   });

//   revalidatePath("/");
//   revalidatePath("/users");

//   redirect("/admin/users");
// }

// export async function deleteUser(id: number) {
//   const user = await db.user.delete({ where: { id } });

//   if (user == null) return notFound();

//   if (user.avatar) {
//     await fs.unlink(`public${user.avatar}`);
//   }

//   revalidatePath("/");
//   revalidatePath("/users");
// }
