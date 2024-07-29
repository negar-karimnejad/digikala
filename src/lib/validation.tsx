import { z } from "zod";

const fileSchema = z.instanceof(File, { message: "Required" });
export const imageSchema = fileSchema.refine(
  (file) => file.size === 0 || file.type.startsWith("image/")
);

export const ProductSchema = z.object({
  title: z.string().min(5, { message: "لطفا عنوان محصول را وارد کنید" }),
  en_title: z.string(),
  rating: z.number(),
  voter: z.number().default(0),
  thumbnail: imageSchema.refine((file) => file.size > 0, "Required"),
  sellerId: z.number().default(1),
  price: z.number().min(0, { message: "قیمت نمی تواند خالی یا عدد منفی باشد" }),
  discount: z.number().optional(),
  discount_price: z.number().optional(),
  description: z.string().min(10, { message: "توضیحات محصول را وارد کنید" }),
  recommended_percent: z.number(),
  guarantee: z.string(),
  likes: z.number().default(0),
  colors: z.array(
    z.string().regex(/^[^#]+#[0-9A-Fa-f]{6}$/, { message: "رنگ نامعتبر است" })
  ),
});

export const CategorySchema = z.object({
  name: z.string().min(5, { message: "لطفا عنوان دسته بندی را وارد نمایید" }),
  parentId: z.number().nullable().optional(),
});
