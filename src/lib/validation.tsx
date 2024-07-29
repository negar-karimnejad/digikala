import { z } from "zod";

const fileSchema = z.instanceof(File, { message: "Required" });
export const imageSchema = fileSchema.refine(
  (file) => file.size === 0 || file.type.startsWith("image/")
);

export const ProductSchema = z.object({
  title: z.string().min(5, { message: "لطفا عنوان محصول را وارد کنید" }),
  en_title: z.string().optional(),
  rating: z.number().optional(),
  voter: z.number().default(0),
  thumbnail: imageSchema.refine((file) => file.size > 0, "Required"),
  sellerId: z.number().default(1),
  price: z.number().min(0, { message: "قیمت نمی تواند خالی یا عدد منفی باشد" }),
  discount: z.number().optional(),
  discount_price: z.number().optional(),
  description: z.string().min(10, { message: "توضیحات محصول را وارد کنید" }),
  recommended_percent: z.number().optional(),
  guarantee: z.string().optional(),
  likes: z.number().default(0),
});
