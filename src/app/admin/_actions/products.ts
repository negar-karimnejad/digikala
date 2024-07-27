"use server";

import db from "@/db/db";
import fs from "fs/promises";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";
import { TypeOf, z } from "zod";

const fileSchema = z.instanceof(File, { message: "Required" });
const imageSchema = fileSchema.refine(
  (file) => file.size === 0 || file.type.startsWith("image/")
);

export type ProductFormInputs = TypeOf<typeof ProductSchema>;

const ProductSchema = z.object({
  title: z
    .string({ required_error: "لطفا عنوان محصول را وارد کنید" })
    .min(5, { message: "عنوان محصول باید حداقل 5 کاراکتر باشد" }),
  description: z
    .string({ required_error: "توضیحات محصول را وارد کنید" })
    .min(10, { message: "توضیحات محصول باید حداقل 10 کاراکتر باشد" }),
  price: z.coerce
    .number({ required_error: "قیمت محصول را وارد کنید" })
    .int()
    .min(1, { message: "قیمت نمی تواند خالی یا عدد منفی باشد" }),

  discount: z.coerce
    .number({ required_error: "میزان تخفیف محصول را وارد کنید" })
    .refine((val) => val >= 0, { message: "تخفیف نمی تواند عدد منفی باشد" }),
  thumbnail: imageSchema.refine((file) => file.size > 0, "Required"),
});

export async function addProduct(prevState: unknown, formData: FormData) {
  const result = ProductSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

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

const editSchema = ProductSchema.extend({
  thumbnail: imageSchema.optional(),
});

export async function updateProduct(
  id: number,
  prevState: unknown,
  formData: FormData
) {
  const result = editSchema.safeParse(Object.fromEntries(formData.entries()));

  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;
  const product = await db.product.findUnique({ where: { id } });

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
    where: { id },
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
