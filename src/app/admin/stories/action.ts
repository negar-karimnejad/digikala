"use server";

import StoryModel from "models/Story";
import { StorySchema } from "@/lib/validation";
import fs from "fs/promises";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";
import connectToDB from "configs/db";

export async function addStory(state, formData: FormData) {
  connectToDB();
  const result = StorySchema.safeParse(Object.fromEntries(formData.entries()));

  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;

  await fs.mkdir("public/stories");
  const coverPath = `/stories/${crypto.randomUUID()}-${data.cover.name}`;
  await fs.writeFile(
    `public${coverPath}`,
    Buffer.from(await data.cover.arrayBuffer())
  );
  await fs.mkdir("public/stories");
  const postPath = `/stories/${crypto.randomUUID()}-${data.post.name}`;
  await fs.writeFile(
    `public${postPath}`,
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
  connectToDB();
  const story = await StoryModel.delete({ _id: id });

  if (story == null) return notFound();

  await fs.unlink(`public${story.cover}`);
  await fs.unlink(`public${story.post}`);

  revalidatePath("/");
  revalidatePath("/stories");
}
