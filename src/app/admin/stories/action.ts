"use server";

import db from "@/db/db";
import { StorySchema } from "@/lib/validation";
import fs from "fs/promises";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";

export async function addStory(state, formData: FormData) {
  const entries = Object.fromEntries(formData.entries());

  // Parse and validate entries
  const parsedEntries = {
    ...entries,
    id: Number(entries.id),
  };

  const result = StorySchema.safeParse(parsedEntries);

  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;

  await fs.mkdir("public/stories", { recursive: true });
  const coverPath = `/stories/${crypto.randomUUID()}-${data.cover.name}`;
  await fs.writeFile(
    `public${coverPath}`,
    Buffer.from(await data.cover.arrayBuffer())
  );
  await fs.mkdir("public/stories", { recursive: true });
  const postPath = `/stories/${crypto.randomUUID()}-${data.post.name}`;
  await fs.writeFile(
    `public${postPath}`,
    Buffer.from(await data.post.arrayBuffer())
  );

  await db.story.create({
    data: {
      title: data.title,
      cover: coverPath,
      post: postPath,
    },
  });

  revalidatePath("/");
  revalidatePath("/stories");

  redirect("/admin/stories");
}

export async function deleteStory(id: number) {
  const story = await db.story.delete({ where: { id } });

  if (story == null) return notFound();

  await fs.unlink(`public${story.cover}`);
  await fs.unlink(`public${story.post}`);

  revalidatePath("/");
  revalidatePath("/stories");
}
