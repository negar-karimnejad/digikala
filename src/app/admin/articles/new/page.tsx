import ArticleForm from "@/components/admin/ArticleForm";
import PageHeader from "@/components/admin/PageHeader";
import { serializeDoc } from "@/utils/serializeDoc";
import connectToDB from "config/mongodb";
import CategoryModel from "models/Category";

export default async function NewCategoryPage() {
  await connectToDB();
  const categories = await CategoryModel.find({}).lean();

  const serializedCategory = serializeDoc(categories);

  return (
    <>
      <PageHeader title="افزودن مقاله جدید" />
      <ArticleForm categories={serializedCategory} />
    </>
  );
}
