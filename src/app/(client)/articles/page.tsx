import ArticleCard from "@/components/article/ArticleCard";
import ScrollUp from "@/components/footer/ScrollUp";
import { Article } from "@/utils/types";
import connectToDB from "config/mongodb";
import { ArrowUp, Library } from "lucide-react";
import ArticleModel from "models/Article";

export default async function ArticlesPage() {
  await connectToDB();
  const articles: Article[] = await ArticleModel.find({});

  return (
    <div>
      <div className="grid-cols-12 lg:grid gap-5 px-4 py-4 flex items-start justify-between">
        <div className="shadow-sm text-white col-span-1 max-lg:hidden sticky top-32 right-7 w-16 h-16 flex items-center justify-center bg-sky-500">
          <Library size={35} />
        </div>

        {/* Article Content */}
        <div className="col-span-12 lg:col-span-11 lg:border border-neutral-100 py-8 lg:px-8 rounded-md lg:shadow-md">
          <h1 className="text-3xl font-bold text-neutral-800 dark:text-white mb-8">
            مقالات
          </h1>
          <div className="flex gap-5 flex-wrap">
            {articles.map((article) => (
              <ArticleCard key={article._id.toString()} article={article} />
            ))}
          </div>
        </div>

        {/* ScrollUp Section */}
        <ScrollUp className="max-lg:hidden z-20 cursor-pointer text-white fixed bottom-10 right-9 w-12 h-14 rounded-md flex items-center justify-center bg-sky-400">
          <ArrowUp size={30} />
        </ScrollUp>
      </div>
    </div>
  );
}
