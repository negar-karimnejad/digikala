import { Article } from "@/types/types";
import connectToDB from "configs/db";
import ArticleModel from "models/Article";

export default async function ArticlesPage() {
  connectToDB();
  const articles: Article[] = await ArticleModel.find({});
  return (
    <div>
      {articles.map((article) => (
        <div key={article._id.toString()}>
          <p>{article.title}</p>
        </div>
      ))}
    </div>
  );
}
