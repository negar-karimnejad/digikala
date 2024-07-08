import db from "@/db/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password, name } = await req.json();

  if (!password?.length || password.length < 5) {
    new Error("رمز کاربری باید حداقل 5 کاراکتر باشد");
  }

  const hashPassword = bcrypt.hashSync(password, 10);

  const newUser = await db.user.create({
    data: {
      name: name,
      email: email,
      password: hashPassword,
    },
  });
  return NextResponse.json(newUser, { status: 201 });
}
