import AdminTable from "@/components/admin/AdminTable";
import PageHeader from "@/components/admin/PageHeader";
import { serializeDoc } from "@/utils/serializeDoc";
import connectToDB from "config/mongodb";
import CategoryModel from "models/Category";

export default function AdminCategoriesPage() {
  return <ProductTable />;
}

async function ProductTable() {
  await connectToDB();
  const categories = await CategoryModel.find({})
    .populate({
      path: "submenus",
      populate: {
        path: "items",
      },
    })
    .lean();

  const serializedCategories = serializeDoc(categories);

  return (
    <>
      <PageHeader href="/admin/categories/new" title="دسته‌بندی ها" />
      {categories.length ? (
        <AdminTable categories={serializedCategories} />
      ) : (
        <div className="text-neutral-500">آیتمی برای نمایش وجود ندارد.</div>
      )}
    </>
  );
}
