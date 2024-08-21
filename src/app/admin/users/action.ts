"use server";

import { LoginSchema, RegisterSchema } from "@/lib/validation";
import { RegisterFormState } from "@/types/types";
import { generateAccessToken } from "@/utils/auth";
import { roles } from "@/utils/constants";
import bcrypt from "bcryptjs";
import UserModel from "models/User";

export async function signup(
  state: RegisterFormState,
  formData: FormData
): Promise<RegisterFormState> {
  const result = RegisterSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!result.success) {
    return {
      ...state,
      errors: result.error.formErrors.fieldErrors,
      success: false,
    };
  }

  const { name, email, phone, password } = result.data;

  const isUserExist = await UserModel.findOne({
    $or: [{ name }, { email }, { phone }],
  });

  if (isUserExist) {
    return {
      ...state,
      errors: {
        name: ["The username already exists."],
        email: ["The email already exists."],
        phone: ["The phone number already exists."],
      },
      success: false,
    };
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  const accessToken = generateAccessToken({ name });

  const users = await UserModel.find({});

  try {
    await UserModel.create({
      name,
      email,
      phone,
      password: hashedPassword,
      role: users.length > 0 ? roles.USER : roles.ADMIN,
    });

    return { ...state, errors: {}, email, success: true };
  } catch (error: any) {
    return {
      ...state,
      errors: { general: ["An unexpected error occurred. Please try again."] },
      success: false,
    };
  }
}
// headers: { "Set-Cookie": `token=${accessToken};path=/;httpOnly=true` },

export async function signin(
  state: RegisterFormState,
  formData: FormData
): Promise<RegisterFormState> {
  const result = LoginSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!result.success) {
    return {
      ...state,
      errors: result.error.formErrors.fieldErrors,
      success: false,
    };
  }

  const { email, password } = result.data;
  const user = await UserModel.findOne({ email });

  if (user) {
    const unhashedPassword = await bcrypt.compare(password, user.password);
    console.log("user🎁", unhashedPassword);
    // ساین این کن
    return { ...state, errors: {}, email, success: true };
  }

  return {
    ...state,
    errors: { general: ["ایمیل یا رمز کاربری اشتباه است."] },
    success: false,
  };
}

// export async function updateUser(
//   state: RegisterFormState,
//   formData: FormData
// ): Promise<RegisterFormState> {
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
