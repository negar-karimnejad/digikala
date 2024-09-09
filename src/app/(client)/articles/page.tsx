import connectToDB from "@/app/api/lib/mongodb";
import { Article } from "@/types/types";
import ArticleModel from "models/Article";
import Image from "next/image";

export default async function ArticlesPage() {
  connectToDB();
  const articles: Article[] = await ArticleModel.find({});

  return (
    <div>
      {articles.map((article) => (
        <div key={article._id.toString()}>
          <p>{article.title}</p>
          <Image
            src={article.cover}
            width={100}
            height={100}
            alt={article.title}
          />
        </div>
      ))}
    </div>
  );
}
