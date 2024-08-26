import AdminTable from "@/components/admin/AdminTable";
import PageHeader from "@/components/admin/PageHeader";
import CategoryModel from "models/Category";
import SubmenuModel from "models/Submenu";

export default function AdminCategoriesPage() {
  return <ProductTable />;
}

async function ProductTable() {
  const categories = await CategoryModel.find({}).populate("submenus");
  // const submenus = await SubmenuModel.find({}).populate("items");
  // const categories = [];
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
