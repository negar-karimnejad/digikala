import connectToDB from "configs/db";
import CategoryModel from "models/Category";
import Navbar from "./Navbar";
import Topbar from "./Topbar";
import authUser from "@/app/api/authUser";

export default async function Header() {
  connectToDB();
  const user = await authUser();
  
  const categories = await CategoryModel.find({}).populate({
    path: "submenus",
    populate: {
      path: "items",
    },
  });


  return (
    <>
      <Topbar user={user} />
      <Navbar categories={categories} />
    </>
  );
}
