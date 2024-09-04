import ArticleForm from "@/components/admin/ArticleForm";
import CategoryForm from "@/components/admin/CategoryForm";
import PageHeader from "@/components/admin/PageHeader";

export default function NewCategoryPage() {
  return (
    <>
      <PageHeader title="افزودن مقاله جدید" />
      <ArticleForm />
    </>
  );
}
