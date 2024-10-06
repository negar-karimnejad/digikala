import { Article } from "@/utils/types";
import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function getRelativeTime(dateString) {
  // Convert the input date string to a Date object
  const date = new Date(dateString);
  const now = new Date();

  // Ensure both 'date' and 'now' are valid Date objects
  if (isNaN(date.getTime()) || isNaN(now.getTime())) {
    throw new Error("Invalid date format");
  }

  // Calculate the difference in milliseconds
  const diffInMs = now.getTime() - date.getTime();

  if (isNaN(diffInMs)) {
    throw new Error("Invalid time difference calculation");
  }

  // Convert milliseconds to different time units
  const diffInMinutes = Math.floor(diffInMs / 60000);
  const diffInHours = Math.floor(diffInMs / 3600000);
  const diffInDays = Math.floor(diffInMs / 86400000);

  // Format the time difference to a human-readable string
  if (diffInMinutes < 1) return "چند ثانیه قبل";
  if (diffInMinutes < 60) return `${diffInMinutes} دقیقه قبل`;
  if (diffInHours < 24) return `${diffInHours} ساعت قبل`;
  return `${diffInDays} روز قبل`;
}

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <div className="shadow border rounded-md w-64 overflow-hidden flex-grow sm:flex-grow-0">
      <Link href={`/articles/${article._id}`}>
        <Image
          src={article.cover}
          width={600}
          height={600}
          alt={article.title}
          className="object-cover"
        />
      </Link>
      <div className="p-3 pb-6 flex flex-col justify-between h-40">
        <Link
          href={`/articles/${article._id}`}
          className="font-irsansb leading-7 text-neutral-600 dark:text-neutral-100 text-sm"
        >
          {article.title}
        </Link>
        <div className="text-neutral-400 dark:text-neutral-300 mt-3 flex gap-5 justify-between items-center">
          <Link
            href={`/articles/user/${article.author.replaceAll(" ", "-")}`}
            className="flex items-center gap-1"
          >
            <Image
              alt="default_author_profile"
              width={30}
              height={30}
              src="/default_author.jpg"
              className="rounded-full grayscale"
            />
            <p className="text-xs">{article.author}</p>
          </Link>
          <span className="flex text-xs items-center gap-2">
            <Clock size={16} />
            {getRelativeTime(article.publishedAt.toDateString())}
          </span>
        </div>
      </div>
    </div>
  );
}
