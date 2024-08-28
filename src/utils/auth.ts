"use server";

import { hash } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";
import UserModel from "models/User";
import { cookies } from "next/headers";

const hashPassword = async (password) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

const generateAccessToken = (data) => {
  const token = sign({ ...data }, process.env.AccessTokenSecretKey, {
    expiresIn: "60d",
  });
  return token;
};

const verifyAccessToken = (token) => {
  try {
    const tokenPayload = verify(token, process.env.AccessTokenSecretKey);
    return tokenPayload;
  } catch (err) {
    console.log("Verify Access Token Error ->", err);
    return false;
  }
};

const generateRefreshToken = (data) => {
  const token = sign({ ...data }, process.env.RefreshTokenSecretKey, {
    expiresIn: "15d",
  });
  return token;
};

const authUser = async () => {
  const token = cookies().get("token");
  let user = null;

  if (token) {
    const tokenPayload = verifyAccessToken(token.value);
    if (typeof tokenPayload === "object" && "email" in tokenPayload) {
      user = await UserModel.findOne({ email: tokenPayload.email });
    }
  }
  return user;
};

export {
  generateAccessToken,
  generateRefreshToken,
  hashPassword,
  verifyAccessToken,
  authUser,
};
