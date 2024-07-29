"use server";

import db from "@/db/db";
import { productEditSchema, ProductSchema } from "@/lib/validation";
import fs from "fs/promises";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";

export async function addProduct(state, formData: FormData) {
  const result = ProductSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  const selectedColorsEntry = formData.get("selectedColors");
  if (typeof selectedColorsEntry !== "string") {
    throw new Error("Invalid selectedColors");
  }
  const selectedColors = JSON.parse(selectedColorsEntry);

  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;

  await fs.mkdir("public/products", { recursive: true });
  const imagePath = `/products/${crypto.randomUUID()}-${data.thumbnail.name}`;
  await fs.writeFile(
    `public${imagePath}`,
    Buffer.from(await data.thumbnail.arrayBuffer())
  );

  await db.product.create({
    data: {
      title: data.title,
      en_title: data.en_title,
      rating: data.rating,
      voter: data.voter,
      colors: selectedColors,
      sizes: data.sizes,
      thumbnail: imagePath,
      price: data.price,
      discount: data.discount,
      // features: data.features,
      discount_price: data.discount_price,
      description: data.description,
      recommended_percent: data.recommended_percent,
      guarantee: data.guarantee,
      likes: data.likes,
      sellerId: data.sellerId,
    },
  });

  revalidatePath("/");
  revalidatePath("/products");

  redirect("/admin/products");
}

export async function updateProduct(state: any, formData: FormData) {
  const id = formData.get("id");
  const numericId = Number(id);

  const result = productEditSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;
  const product = await db.product.findUnique({ where: { id: numericId } });

  if (product == null) return notFound();

  let imagePath = product.thumbnail;

  if (data.thumbnail != null && data.thumbnail.size > 0) {
    await fs.unlink(`public${product.thumbnail}`);
    imagePath = `/products/${crypto.randomUUID()}-${data.thumbnail.name}`;
    await fs.writeFile(
      `public${imagePath}`,
      Buffer.from(await data.thumbnail.arrayBuffer())
    );
  }

  await db.product.update({
    where: { id: numericId },
    data: {
      title: data.title,
      description: data.description,
      price: data.price,
      discount: data.discount,
      thumbnail: imagePath,
    },
  });

  revalidatePath("/");
  revalidatePath("/products");

  redirect("/admin/products");
}

export async function deleteProduct(id: number) {
  const product = await db.product.delete({ where: { id } });

  if (product == null) return notFound();

  await fs.unlink(`public${product.thumbnail}`);

  revalidatePath("/");
  revalidatePath("/products");
}
