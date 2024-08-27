import AdminTable from "@/components/admin/AdminTable";
import PageHeader from "@/components/admin/PageHeader";
import connectToDB from "configs/db";
import CategoryModel from "models/Category";

export default function AdminCategoriesPage() {
  return <ProductTable />;
}

async function ProductTable() {
  connectToDB();
  const categories = await CategoryModel.find({});

  return (
    <>
      <PageHeader href="/admin/categories/new" title="دسته‌بندی ها" />
      {categories.length ? (
        <AdminTable categories={categories} />
      ) : (
        <div className="text-neutral-500">آیتمی برای نمایش وجود ندارد.</div>
      )}
    </>
  );
}
