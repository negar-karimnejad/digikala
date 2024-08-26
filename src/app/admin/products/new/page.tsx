import PageHeader from "@/components/admin/PageHeader";
import ProductForm from "@/components/admin/ProductForm";

export default async function NewProductPage() {
  return (
    <>
      <PageHeader title="افزودن محصول جدید" />
      <ProductForm />
    </>
  );
}
