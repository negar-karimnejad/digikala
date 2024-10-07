"use server";

import { StorySchema } from "@/utils/validation";
import connectToDB from "config/mongodb";
import fs from "fs/promises";
import StoryModel from "models/Story";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";
import path from "path";

export async function addStory(_state: any, formData: FormData) {
  await connectToDB();
  const result = StorySchema.safeParse(Object.fromEntries(formData.entries()));

  if (result.success === false) {
    console.log("❌❌❌", result.error.formErrors.fieldErrors);
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;

  // Define the directory path
  const storyDir = path.join(process.cwd(), "public/stories");
  try {
    await fs.access(storyDir);
  } catch (error) {
    if (error.code === "ENOENT") {
      await fs.mkdir(storyDir, { recursive: true });
    } else {
      throw error;
    }
  }
  const coverPath = `/stories/${crypto.randomUUID()}-${data.cover.name}`;
  await fs.writeFile(
    path.join(process.cwd(), "public", coverPath),
    Buffer.from(await data.cover.arrayBuffer())
  );

  const postPath = `/stories/${crypto.randomUUID()}-${data.post.name}`;
  await fs.writeFile(
    path.join(process.cwd(), "public", postPath),
    Buffer.from(await data.post.arrayBuffer())
  );

  await StoryModel.create({
    title: data.title,
    cover: coverPath,
    post: postPath,
  });

  revalidatePath("/");
  revalidatePath("/stories");

  redirect("/admin/stories");
}

export async function deleteStory(id: string) {
  await connectToDB();
  const story = await StoryModel.findOneAndDelete({ _id: id });

  if (story == null) return notFound();

  await fs.unlink(`public${story.cover}`);
  await fs.unlink(`public${story.post}`);

  revalidatePath("/");
  revalidatePath("/stories");
}
