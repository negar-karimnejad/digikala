"use server";

import { ArticleSchema, categoryEditSchema } from "@/lib/validation";
import connectToDB from "configs/db";
import { promises as fs, unlink, writeFile } from "fs";
import CategoryModel from "models/Category";
import ArticleModel from "models/Article";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";
import path from "path";
import { promisify } from "util";

const unlinkAsync = promisify(unlink);
const writeFileAsync = promisify(writeFile);

export async function addArticle(_state, formData: FormData) {
  connectToDB();
  const entries = Object.fromEntries(formData.entries());

  // Parse tags if they are sent as a string
  if (typeof entries.tags === "string") {
    try {
      entries.tags = JSON.parse(entries.tags);
    } catch (error) {
      console.error("Failed to parse tags:", error);
      return { tags: ["Invalid tags format"] };
    }
  }

  const result = ArticleSchema.safeParse(entries);

  if (result.success === false) {
    console.log("❌ Validation errors:", result.error.formErrors.fieldErrors);
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;

  // Define the directory path
  const articleDir = path.join(process.cwd(), "public/articles");
  try {
    await fs.access(articleDir);
  } catch (error) {
    if (error.code === "ENOENT") {
      await fs.mkdir(articleDir, { recursive: true });
    } else {
      throw error;
    }
  }

  const coverPath = `/articles/${crypto.randomUUID()}-${data.cover.name}`;
  await fs.writeFile(
    path.join(process.cwd(), "public", coverPath),
    Buffer.from(await data.cover.arrayBuffer())
  );

  // Save category to the database
  await ArticleModel.create({
    title: data.title,
    content: data.content,
    author: data.author,
    tags: data.tags,
    source: data.source,
    readingTime: data.readingTime,
    publishedAt: new Date(),
    cover: coverPath,
  });

  revalidatePath("/");
  revalidatePath("/articles");

  redirect("/admin/articles");
}

export async function updateArticle(state: any, formData: FormData) {
  connectToDB();

  const result = categoryEditSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;
  const category = await CategoryModel.findOne({ _id: data._id });
  if (category == null) return notFound();

  let coverPath = category.cover;
  let iconPath = category.icon;

  if (data.cover != null && data.cover.size > 0) {
    await unlinkAsync(`public${category.cover}`);
    coverPath = `/categories/${crypto.randomUUID()}-${data.cover.name}`;
    await writeFileAsync(
      `public${coverPath}`,
      Buffer.from(await data.cover.arrayBuffer())
    );
  }

  if (data.icon != null && data.icon.size > 0) {
    await unlinkAsync(`public${category.icon}`);
    iconPath = `/categories/${crypto.randomUUID()}-${data.icon.name}`;
    await writeFileAsync(
      `public${iconPath}`,
      Buffer.from(await data.icon.arrayBuffer())
    );
  }

  await CategoryModel.findOneAndUpdate(
    { _id: data._id },
    {
      $set: {
        title: data.title,
        href: data.href,
        cover: coverPath,
        icon: iconPath,
      },
    },
    { new: true }
  );

  revalidatePath("/");
  revalidatePath("/categories");

  redirect("/admin/categories");
}

export async function deleteArticle(id: string) {
  connectToDB();
  const article = await ArticleModel.findOneAndDelete({ _id: id });

  if (article == null) return notFound();

  await fs.unlink(`public${article.cover}`);

  revalidatePath("/");
  revalidatePath("/admin/articles");
}
