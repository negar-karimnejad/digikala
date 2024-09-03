import AdminTable from "@/components/admin/AdminTable";
import PageHeader from "@/components/admin/PageHeader";
import { serializeDoc } from "@/utils/serializeDoc";
import connectToDB from "configs/db";
import ArticleModel from "models/Article";


export default async function AdminArticlesPage() {
  connectToDB();
  const articles = await ArticleModel.find({}).lean();
  const serializedArticles = serializeDoc(articles);

  return (
    <>
      <PageHeader title="مقالات" />
      {articles.length ? (
        <AdminTable articles={serializedArticles} />
      ) : (
        <div className="text-neutral-500">آیتمی برای نمایش وجود ندارد.</div>
      )}
    </>
  );
}
