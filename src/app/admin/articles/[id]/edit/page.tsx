import connectToDB from "lib/mongodb";
import ArticleForm from "@/components/admin/ArticleForm";
import PageHeader from "@/components/admin/PageHeader";
import { serializeDoc } from "@/utils/serializeDoc";
import ArticleModel from "models/Article";

export default async function EditArticlePage({
  params: { id },
}: {
  params: { id: string };
}) {
  connectToDB();
  const article = await ArticleModel.findOne({ _id: id }).lean();
  const serializedArticle = serializeDoc(article);

  return (
    <>
      <PageHeader title="ویرایش مقاله" />
      <ArticleForm article={serializedArticle} />
    </>
  );
}
