import { verify } from "jsonwebtoken";
import UserModel from "models/User";
import { cookies } from "next/headers";

const verifyAccessToken = (token) => {
  try {
    const tokenPayload = verify(token, process.env.AccessTokenSecretKey);
    return tokenPayload;
  } catch (err) {
    console.log("Verify Access Token Error ->", err);
    return false;
  }
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

export default authUser;
