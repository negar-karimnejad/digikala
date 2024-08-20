import { generateAccessToken, hashPassword } from "@/utils/auth";
import { roles } from "@/utils/constants";
import connectToDB from "configs/db";
import UserModel from "models/User";

export async function GET(req: Request) {
  connectToDB();

  const body = await req.json();
  const { email, name, phone, password } = body;
  // validate

  const isUserExist = await UserModel.findOne({
    $or: [{ name }, { email }, { phone }],
  });

  if (isUserExist) {
    return Response.json(
      { message: "The username or email exist already!!" },
      { status: 422 }
    );
  }
  const hashedPassword = await hashPassword(password);
  const accessToken = generateAccessToken({ name });
  const users = await UserModel.find({});
  await UserModel.create({
    name,
    email,
    phone,
    password: hashedPassword,
    role: users.length > 0 ? roles.USER : roles.ADMIN,
  });
  return Response.json(
    { message: "Success Response :))" },
    {
      status: 201,
      headers: {
        "Set-Cookie": `token=${accessToken};path=/;httpOnly=true`,
      },
    }
  );
}
