import { authUser } from "@/utils/auth";
import { serializeDoc } from "@/utils/serializeDoc";
import connectToDB from "configs/db";
import CategoryModel from "models/Category";
import Navbar from "./Navbar";
import Topbar from "./Topbar";

export default async function Header() {
  connectToDB();
  const user = await authUser();
  const categories = await CategoryModel.find({})
    .populate({
      path: "submenus",
      populate: {
        path: "items",
      },
    })
    .lean();

  const serializedCategories = serializeDoc(categories);
  const serializedUser = serializeDoc(user);

  return (
    <>
      <Topbar user={serializedUser} />
      <Navbar categories={serializedCategories} />
    </>
  );
}
