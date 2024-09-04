import { Article } from "@/types/types";
import { formatDateToPersian } from "@/utils/PersianFormatter ";
import connectToDB from "configs/db";
import parse from "html-react-parser";
import { Clock, Timer } from "lucide-react";
import ArticleModel from "models/Article";
import Image from "next/image";

export default async function ArticlePage({
  params: { id },
}: {
  params: { id: string };
}) {
  connectToDB();
  const article: Article = await ArticleModel.findOne({ _id: id });

  if (!article) {
    return (
      <div className="p-4 text-center text-red-600">مقاله‌ای یافت نشد.</div>
    );
  }

  return (
    <div className="px-4 py-4">
      <h1 className="text-3xl font-bold text-neutral-800 mb-8">
        {article.title}
      </h1>
      <div className="text-sm text-neutral-600 mb-4 w-1/2 flex itece justify-between">
        <div className="flex items-center gap-4 text-neutral-600">
          <Image
            alt="default_author_profile"
            width={40}
            height={40}
            src="/default_author.jpg"
            className="rounded-full"
          />
          {article.author}
        </div>
        <span className="flex items-center text-neutral-400 gap-1">
          <Clock size={14} />
          {formatDateToPersian(new Date(article.publishedAt))}
        </span>
        <span className="text-neutral-400 flex items-center gap-1">
          زمان مورد نیاز برای مطالعه: {article.readingTime} دقیقه
          <Timer size={14} />
        </span>
      </div>

      <div className="w-[58%] font-irsansb prose prose-lg dark:prose-invert max-w-none">
        {parse(article.content)} {/* Render content with base64 images */}
      </div>

      <div className="mt-6 text-blue-600 hover:underline">
        منبع: {article.source}
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {article.tags.map((tag: string, index: number) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
