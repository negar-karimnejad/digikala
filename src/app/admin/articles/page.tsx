import AdminTable from "@/components/admin/AdminTable";
import PageHeader from "@/components/admin/PageHeader";
import { serializeDoc } from "@/utils/serializeDoc";
import connectToDB from "config/mongodb";
import ArticleModel from "models/Article";

export default function AdminArticlesPage() {
  return <ArticleTable />;
}

async function ArticleTable() {
  await connectToDB();
  const articles = await ArticleModel.find({}).lean();
  const serializedArticles = serializeDoc(articles);

  return (
    <>
      <PageHeader href="/admin/articles/new" title="مقالات" />
      {articles.length ? (
        <AdminTable articles={serializedArticles} />
      ) : (
        <div className="text-neutral-500">آیتمی برای نمایش وجود ندارد.</div>
      )}
    </>
  );
}
