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
  sizes: z.string(),
  likes: z.number().default(0),
  colors: z.array(z.string()),
  features: z.array(z.string()),
});
export const productEditSchema = ProductSchema.extend({
  thumbnail: imageSchema.optional(),
});

export const CategorySubmenuItemSchema = z.object({
  id: z.number(),
  title: z
    .string()
    .min(5, { message: "لطفا عنوان زیرمجموعه دسته‌بندی را وارد نمایید" }),
  href: z
    .string()
    .min(5, { message: "لطفا آدرس لینک زیرمجموعه دسته‌بندی را وارد نمایید" }),
  submenuId: z.number(),
});

export const CategorySubmenusSchema = z.object({
  id: z.number(),
  title: z
    .string()
    .min(5, { message: "لطفا عنوان زیرمجموعه دسته‌بندی را وارد نمایید" }),
  href: z
    .string()
    .min(5, { message: "لطفا آدرس لینک زیرمجموعه دسته‌بندی را وارد نمایید" }),
  categoryId: z.number(),
  items: z.array(CategorySubmenuItemSchema).optional(),
});

export const CategorySchema = z.object({
  id: z.number(),
  title: z.string().min(5, { message: "لطفا عنوان دسته‌بندی را وارد نمایید" }),
  href: z
    .string()
    .min(5, { message: "لطفا آدرس لینک دسته‌بندی را وارد نمایید" }),
  icon: imageSchema.refine((file) => file.size > 0, "Required"),
  cover: imageSchema.refine((file) => file.size > 0, "Required"),
  submenus: z.array(CategorySubmenusSchema).optional(),
});

export const categoryEditSchema = CategorySchema.extend({
  cover: imageSchema.optional(),
  icon: imageSchema.optional(),
});
