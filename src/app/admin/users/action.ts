"use server";

import { LoginSchema, RegisterSchema } from "@/lib/validation";
import { LoginFormState, RegisterFormState } from "@/types/types";
import { generateAccessToken, generateRefreshToken } from "@/utils/auth";
import { roles } from "@/utils/constants";
import bcrypt, { compare } from "bcryptjs";
import connectToDB from "configs/db";
import UserModel from "models/User";
import { cookies } from "next/headers";

export async function signup(
  state: RegisterFormState,
  formData: FormData
): Promise<RegisterFormState> {
  try {
    connectToDB();
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
          general: ["The username or email or phone exists already!!"],
        },
        success: false,
      };
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const accessToken = generateAccessToken({ name });

    const users = await UserModel.find({});

    await UserModel.create({
      name,
      email,
      phone,
      password: hashedPassword,
      role: users.length > 0 ? roles.USER : roles.ADMIN,
    });

    cookies().set("token", accessToken, {
      httpOnly: true,
      secure: true,
      path: "/",
    });

    return {
      ...state,
      errors: null,
      success: true,
    };
  } catch (error) {
    console.log("Error ->", error);
    return {
      ...state,
      errors: { general: [error] },
      success: false,
    };
  }
}

export async function signin(
  state: LoginFormState,
  formData: FormData
): Promise<LoginFormState> {
  try {
    connectToDB();
    const result = LoginSchema.safeParse(
      Object.fromEntries(formData.entries())
    );

    if (!result.success) {
      return {
        ...state,
        errors: result.error.formErrors.fieldErrors,
        success: false,
      };
    }

    const { email, password } = result.data;
    const user = await UserModel.findOne({ email });

    if (!user) {
      return {
        ...state,
        errors: { general: ["کاربری با این مشخصات یافت نشد."] },
        success: false,
      };
    }

    const isCorrectPasswordWithHash = await compare(password, user.password);

    if (!isCorrectPasswordWithHash) {
      return {
        ...state,
        errors: { general: ["ایمیل یا رمز کاربری اشتباه است."] },
        success: false,
      };
    }

    const accessToken = generateAccessToken({ email });
    const refreshToken = generateRefreshToken({ email });

    cookies().set("token", accessToken, {
      httpOnly: true,
      secure: true,
      path: "/",
    });

    await UserModel.findOneAndUpdate(
      { email },
      {
        $set: {
          refreshToken,
        },
      }
    );

    return {
      ...state,
      errors: null,
      success: true,
    };
  } catch (error) {
    console.log("Error ->", error);
    return {
      ...state,
      errors: { general: [error] },
      success: false,
    };
  }
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
