import CategoryProducts from "@/components/category/CategoryProducts";
import SubmenuProductsContainer from "@/components/category/SubmenuProductsContainer";
import connectToDB from "config/mongodb";
import CategoryModel from "models/Category";
import SubmenuModel from "models/Submenu";
import { Metadata } from "next";

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}): Promise<Metadata> {
  await connectToDB();
  const catgory = await CategoryModel.findOne({ href: `/category/${id}` });
  const submenu = await SubmenuModel.findOne({
    href: `/category/${id[0]}/${id[1]}`,
  });
  return {
    title: id.length === 1 ? catgory?.title : submenu?.title,
  };
}

export default async function CategoryPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <>
      {id.length === 1 ? (
        <CategoryProducts id={id} />
      ) : (
        <SubmenuProductsContainer id={id} />
      )}
    </>
  );
}
