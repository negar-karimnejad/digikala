import CategoryBanner from "@/components/category/CategoryBanner";
import { serializeDoc } from "@/utils/serializeDoc";
import CategoryModel from "models/Category";
import Image from "next/image";

export default async function CategoryPage({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log(id);

  const category = await CategoryModel.findOne({ href: `/category/${id}` });

  if (!category) return null;

  const serializedCategory = serializeDoc(category);

  return (
    <div>
      <CategoryBanner category={serializedCategory} />
    </div>
  );
}
