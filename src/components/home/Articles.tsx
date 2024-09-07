import { Article } from "@/types/types";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Articles({ articles }: { articles: Article[] }) {
  const lastArticles = articles
    .slice(0, 4)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  return (
    <div className="mx-3 my-10">
      <div className="flex justify-between items-center">
        <h3 className="mb-5 font-irsansb">خواندنی‌ها</h3>
        <Link
          href="/articles"
          className="text-xs text-sky-500 flex items-center"
        >
          مقالات بیشتر در دیجی‌کالا
          <ChevronLeft size={15} />
        </Link>
      </div>
      <div className="grid grid-cols-4 max-lg:grid-cols-1 gap-3">
        {lastArticles.map((article) => (
          <Link key={article._id.toString()} href={`/articles/${article._id}`}>
            <div className="rounded-xl border overflow-hidden">
              <Image
                alt={article.title}
                width={1000}
                height={1000}
                src={article.cover}
                className="object-cover"
              />
              <p className="text-[12.5px] mt-4 px-3 h-14 leading-6">
                {article.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
