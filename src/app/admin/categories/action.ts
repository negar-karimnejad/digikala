"use server";

import db from "@/db/db";
import { CategorySchema } from "@/lib/validation";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";

export async function addCategory(_state, formData: FormData) {
  const result = CategorySchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (result.success === false) {
    console.log("😀😀😀😀",result.error.formErrors.fieldErrors);
    
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;

  await db.category.create({
    data: {
      name: data.name,
    //   parentId: data.parentId,
    },
  });

  revalidatePath("/");
  revalidatePath("/categories");

  redirect("/admin/categories");
}

export async function updateCategory(state, formData: FormData) {
  const id = formData.get("id");
  const numericId = Number(id);

  const result = CategorySchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;
  const category = await db.category.findUnique({ where: { id: numericId } });

  if (category == null) return notFound();

  await db.category.update({
    where: { id: numericId },
    data: {
      name: data.name,
    },
  });

  revalidatePath("/");
  revalidatePath("/categories");

  redirect("/admin/categories");
}

export async function deleteCategory(id: number) {
  const category = await db.category.delete({ where: { id } });

  if (category == null) return notFound();

  revalidatePath("/");
  revalidatePath("/categories");
}
