import { Article } from "@/utils/types";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Articles({
  articles,
  title,
}: {
  articles: Article[];
  title: string;
}) {
  return (
    <div className="mx-3 my-10">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-irsansb">{title}</h3>
        <Link
          href="/articles"
          className="text-xs text-sky-500 flex items-center"
        >
          مقالات بیشتر در دیجی‌کالا
          <ChevronLeft size={15} />
        </Link>
      </div>
      <div className="grid grid-cols-4 max-lg:grid-cols-1 gap-3">
        {articles.slice(0, 4).map((article) => (
          <Link key={article._id.toString()} href={`/articles/${article._id}`}>
            <div className="rounded-xl border overflow-hidden lg:h-64 xl:h-72">
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
