import connectToDB from "configs/db";
import CategoryModel from "models/Category";
import Navbar from "./Navbar";
import Topbar from "./Topbar";
import { authUser } from "@/utils/auth";

export default async function Header() {
  connectToDB();
  const user = await authUser();
  const categories = await CategoryModel.find({}).populate({
    path: "submenus",
    populate: {
      path: "items",
    },
  }).lean()

  return (
    <>
      <Topbar user={user} />
      <Navbar categories={categories} />
    </>
  );
}
