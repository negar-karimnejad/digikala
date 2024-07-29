import PageHeader from "@/components/admin/PageHeader";
import ProductForm from "@/components/admin/ProductForm";
import db from "@/db/db";

export default async function NewProductPage() {
  const categories = await db.category.findMany({ orderBy: { title: "asc" } });

  return (
    <>
      <PageHeader>افزودن محصول جدید</PageHeader>
      <ProductForm categories={categories}/>
    </>
  );
}
