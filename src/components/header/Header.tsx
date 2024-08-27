import { authUser } from "@/utils/auth";
import connectToDB from "configs/db";
import CategoryModel from "models/Category";
import Navbar from "./Navbar";
import Topbar from "./Topbar";

export default async function Header() {
  connectToDB();
  const user = await authUser();
  const categories = await CategoryModel.find({}).populate("submenus");
  console.log("🥼🥼🥼", categories);

  return (
    <>
      <Topbar user={user} />
      <Navbar categories={categories} />
    </>
  );
}
