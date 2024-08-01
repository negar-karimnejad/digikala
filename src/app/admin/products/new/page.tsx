import PageHeader from "@/components/admin/PageHeader";
import ProductForm from "@/components/admin/ProductForm";
import db from "@/db/db";

export default async function NewProductPage() {

  return (
    <>
      <PageHeader title="افزودن محصول جدید" />
      <ProductForm  />
    </>
  );
}
