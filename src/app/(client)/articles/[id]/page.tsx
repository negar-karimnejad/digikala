import connectToDB from "lib/mongodb";
import ArticleComment from "@/components/article/ArticleComment";
import ScrollUp from "@/components/footer/ScrollUp";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Article } from "@/types/types";
import { formatDateToPersian } from "@/utils/PersianFormatter ";
import parse from "html-react-parser";
import {
  ArrowUp,
  ChevronLeft,
  Clock,
  Facebook,
  Instagram,
  Library,
  Linkedin,
  MessageCircle,
  Send,
  Timer,
  Twitter,
} from "lucide-react";
import ArticleModel from "models/Article";
import Image from "next/image";
import Link from "next/link";

export default async function ArticlePage({
  params: { id },
}: {
  params: { id: string };
}) {
  connectToDB();
  const articles: Article[] = await ArticleModel.find({});
  const article: Article = await ArticleModel.findOne({ _id: id });

  const ArticlePublishedDate = (
    <span className="flex text-xs items-center text-neutral-400 gap-1">
      <Clock size={14} />
      {formatDateToPersian(new Date(article.publishedAt))}
    </span>
  );
  const lastArticles = articles.filter((item) => item._id.toString() !== id);

  if (!article) {
    return (
      <div className="p-4 text-center text-red-600">مقاله‌ای یافت نشد.</div>
    );
  }

  return (
    <div className="grid-cols-12 lg:grid gap-5 px-4 py-4 flex items-start justify-between">
      <div className="shadow-sm text-white col-span-1 sticky top-32 right-7 w-16 h-16 flex items-center justify-center bg-sky-500">
        <Library size={35} />
      </div>

      {/* Article Content */}
      <div className="col-span-12 lg:col-span-8 border border-neutral-100 p-8 rounded-md shadow-md">
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="text-xs">
                <BreadcrumbLink href="/articles">خانه</BreadcrumbLink>
              </BreadcrumbItem>
              <ChevronLeft className="text-red-500" size={15} />
              <BreadcrumbItem className="text-xs">
                <BreadcrumbPage>{article.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <Separator className="my-8" />

        <h1 className="text-3xl font-bold text-neutral-800 mb-8">
          {article.title}
        </h1>
        <div className="text-sm text-neutral-600 mb-4 flex itece justify-between">
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
          {ArticlePublishedDate}
          <span className="text-neutral-400 flex items-center gap-1">
            زمان مورد نیاز برای مطالعه: {article.readingTime} دقیقه
            <Timer size={14} />
          </span>
        </div>

        <div className="font-irsansb prose prose-lg dark:prose-invert max-w-none">
          {parse(article.content)} {/* Render content with base64 images */}
        </div>

        <div className="mt-6 text-blue-600 hover:underline">
          منبع: {article.source}
        </div>

        {/* Socials */}
        <div className="my-5 gap-5 flex items-end justify-end text-neutral-400">
          <div className="flex text-sm items-center gap-1">
            <span>0</span>
            <MessageCircle />
          </div>
          <span className="font-irsansb mx-3">|</span>
          <Link href="">
            <Send />
          </Link>
          <Link href="">
            <Instagram />
          </Link>

          <Link href="">
            <Linkedin />
          </Link>
          <Link href="">
            <Facebook />
          </Link>
          <Link href="">
            <Twitter />
          </Link>
        </div>
        <Separator className="my-10" />
        <div className="flex">
          <span className="text-neutral-600 ml-5">برچسب ها: </span>
          <div className="flex flex-wrap gap-3">
            {article.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="bg-neutral-100 text-neutral-500 text-[13px] font-medium px-2.5 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <Separator className="my-10" />

        <ArticleComment />
      </div>

      {/* Last Articles */}
      <div className="col-span-12 lg:col-span-3 border bg-white p-4 py-8 shadow-lg shadow-neutral-300 dark:border-0 dark:bg-neutral-800 dark:shadow-neutral-950">
        <h3 className="text-center text-neutral-700 font-vazirBold text-lg dark:text-white">
          آخرین پست ها
        </h3>
        <Separator className="my-5 opacity-50" />
        <div className="flex flex-col gap-5">
          {lastArticles.map((article) => (
            <div key={article._id?.toString()} className="flex flex-col gap-5">
              <Link
                href={`/articles/${article._id}`}
                className="group flex items-center"
              >
                <div className="w-24 shrink-0 overflow-hidden transition-all group-hover:brightness-75">
                  {typeof article.cover === "string" && (
                    <Image
                      className="w-20 rounded-sm object-cover"
                      width={120}
                      height={120}
                      title={article.title}
                      src={article.cover}
                      alt={article.title}
                    />
                  )}
                </div>
                <div className="flex flex-col">
                  <p
                    title={article.title}
                    className="mb-2 flex w-full flex-col text-sm leading-6 text-neutral-600 transition-all group-hover:text-sky-500 dark:text-neutral-200"
                  >
                    {article.title}
                  </p>
                  {ArticlePublishedDate}
                </div>
              </Link>
              <Separator className="opacity-50" />
            </div>
          ))}
        </div>
      </div>

      {/* ScrollUp Section */}
      <ScrollUp className="z-20 cursor-pointer text-white fixed bottom-10 right-9 w-12 h-14 rounded-md flex items-center justify-center bg-sky-400">
        <ArrowUp size={30} />
      </ScrollUp>
    </div>
  );
}
