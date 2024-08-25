import Navbar from "./Navbar";
import Topbar from "./Topbar";
import { verifyAccessToken } from "@/utils/auth";
import { cookies } from "next/headers";
import UserModel from "models/User";

export default async function Header() {
  const token = cookies().get("token");
  let user = null;

  if (token) {
    const tokenPayload = verifyAccessToken(token.value);
    if (tokenPayload) {
      user = await UserModel.findOne({ email: tokenPayload.email });
    }
  }
  return (
    <>
      <Topbar isLogin={user} />
      <Navbar />
    </>
  );
}
