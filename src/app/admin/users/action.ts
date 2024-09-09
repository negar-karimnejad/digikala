"use server";

import {
  LoginSchema,
  RegisterSchema,
  UserupdateSchema,
} from "@/lib/validation";
import { LoginFormState, RegisterFormState } from "@/types/types";
import { generateAccessToken, generateRefreshToken } from "@/utils/auth";
import bcrypt, { compare } from "bcryptjs";
import fs from "fs/promises";
import connectToDB from "lib/mongodb";
import UserModel from "models/User";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";

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
      role: users.length > 0 ? "USER" : "ADMIN",
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
        $push: {
          refreshToken,
        },
      },
      { new: true }
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

export async function signOut() {
  try {
    cookies().delete("token");
  } catch (error) {
    console.log("Error ->", error);
  }
}

export async function updateUser(
  state: RegisterFormState,
  formData: FormData
): Promise<RegisterFormState> {
  connectToDB();
  const id = formData.get("_id");

  if (!id) throw new Error("User ID is required");

  const result = UserupdateSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (result.success === false) {
    return {
      ...state,
      errors: result.error.formErrors.fieldErrors,
    };
  }

  const data = result.data;

  const user = await UserModel.findOne({ _id: id });

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

  await UserModel.findOneAndUpdate(
    { _id: id },
    {
      $push: {
        name: data.name,
        role: data.role,
        avatar: avatarPath,
      },
    }
  );

  revalidatePath("/");
  revalidatePath("/users");

  redirect("/admin/users");
}

export async function deleteUser(id: string) {
  connectToDB();
  const user = await UserModel.findOneAndDelete({ _id: id });

  if (user == null) return notFound();

  if (user.avatar) {
    await fs.unlink(`public${user.avatar}`);
  }

  revalidatePath("/");
  revalidatePath("/users");
}
