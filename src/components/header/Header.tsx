import db from "@/db/db";
import Navbar from "./Navbar";
import Topbar from "./Topbar";

export default async function Header() {
  const categories = await db.category.findMany({ orderBy: { title: "asc" } });
  
  return (
    <>
      <Topbar />
      <Navbar categories={categories} />
    </>
  );
}
