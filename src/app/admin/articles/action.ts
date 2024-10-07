"use server";

import { ArticleEditSchema, ArticleSchema } from "@/utils/validation";
import connectToDB from "config/mongodb";
import { promises as fs, unlink, writeFile } from "fs";
import ArticleModel from "models/Article";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";
import path from "path";
import { promisify } from "util";

const unlinkAsync = promisify(unlink);
const writeFileAsync = promisify(writeFile);

export async function addArticle(_state, formData: FormData) {
  await connectToDB();
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
    comment: [],
    categoryId: data.categoryId,
  });

  revalidatePath("/");
  revalidatePath("/articles");

  redirect("/admin/articles");
}

export async function updateArticle(_state, formData: FormData) {
  await connectToDB();
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

  const result = ArticleEditSchema.safeParse(entries);

  if (result.success === false) {
    console.log("❌❌❌", result.error.formErrors.fieldErrors);
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;
  const articleId = data._id;

  // Find the existing article by ID
  const article = await ArticleModel.findById(articleId);
  if (!article) {
    return notFound();
  }

  let coverPath = article.cover;

  // Check if a new cover image is provided and update it
  if (data.cover) {
    // Remove the old cover image if it exists
    if (coverPath) {
      try {
        await unlinkAsync(path.join(process.cwd(), "public", coverPath));
      } catch (error) {
        console.error("Failed to remove old cover:", error);
      }
    }

    // Save the new cover image
    coverPath = `/articles/${crypto.randomUUID()}-${data.cover.name}`;
    await writeFileAsync(
      path.join(process.cwd(), "public", coverPath),
      Buffer.from(await data.cover.arrayBuffer())
    );
  }

  // Update the article in the database
  await ArticleModel.findByIdAndUpdate(articleId, {
    title: data.title,
    content: data.content,
    author: data.author,
    tags: data.tags,
    source: data.source,
    readingTime: data.readingTime,
    publishedAt: data.publishedAt || article.publishedAt, // Preserve original published date if not changed
    cover: coverPath,
    comment: article.comment, // Keep existing comments
    categoryId: data.categoryId,
  });

  revalidatePath("/");
  revalidatePath("/articles");

  redirect("/admin/articles");
}

export async function deleteArticle(id: string) {
  await connectToDB();
  const article = await ArticleModel.findOneAndDelete({ _id: id });

  if (article == null) return notFound();

  await fs.unlink(`public${article.cover}`);

  revalidatePath("/");
  revalidatePath("/admin/articles");
}
