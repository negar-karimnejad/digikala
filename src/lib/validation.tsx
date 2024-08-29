import { z } from "zod";

export const avatarSchema = z
  .instanceof(File, { message: "Required" })
  .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
    message: "The file must be a non-empty image.",
  });

export const RegisterSchema = z.object({
  name: z.coerce
    .string({ required_error: "لطفا نام و نام خانوادگی را وارد کنید." })
    .min(5, { message: "نام و نام خانوادگی باید حداقل 5 کاراکتر باشد." }),
  email: z
    .string()
    .min(1, { message: "لطفا ایمیل را وارد کنید." })
    .email("ایمیل معتبر نیست."),
  phone: z.string().min(11, { message: "لطفا شماره تماس را وارد کنید." }),
  password: z
    .string({ required_error: "لطفا رمز کاربری را وارد کنید." })
    .min(5, { message: "رمز کاربری باید حداقل 5 کاراکتر باشد." }),
  avatar: avatarSchema.optional(),
});
export type RegisterSchemaType = z.infer<typeof RegisterSchema>;

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "لطفا ایمیل را وارد کنید." })
    .email("ایمیل معتبر نیست."),
  password: z
    .string({ required_error: "لطفا رمز کاربری را وارد کنید." })
    .min(5, { message: "رمز کاربری باید حداقل 5 کاراکتر باشد." }),
});
export type LoginSchemaType = z.infer<typeof LoginSchema>;

export const UserupdateSchema = z.object({
  name: z.coerce
    .string({ required_error: "لطفا نام و نام خانوادگی را وارد کنید." })
    .min(5, { message: "نام و نام خانوادگی باید حداقل 5 کاراکتر باشد." }),
  email: z
    .string()
    .min(1, { message: "لطفا ایمیل را وارد کنید." })
    .email("ایمیل معتبر نیست.")
    .optional(),
  phone: z.string().min(11, { message: "لطفا شماره تماس را وارد کنید." }),
  password: z
    .string({ required_error: "لطفا رمز کاربری را وارد کنید." })
    .min(5, { message: "رمز کاربری باید حداقل 5 کاراکتر باشد." })
    .optional(),
  role: z.string(),
  avatar: avatarSchema.optional(),
});

const fileSchema = z.instanceof(File, { message: "Required" });
export const imageSchema = fileSchema.refine(
  (file) => file.size === 0 || file.type.startsWith("image/")
);

export const ProductSchema = z.object({
  title: z.string().min(5, { message: "لطفا عنوان محصول را وارد کنید" }),
  en_title: z.string(),
  categoryId: z.string(),
  submenuId: z.string(),
  submenuItemId: z.string(),
  rating: z.number(),
  voter: z.number().default(0),
  thumbnail: imageSchema.refine((file) => file.size > 0, "Required"),
  price: z.number().min(0, { message: "قیمت نمی تواند خالی یا عدد منفی باشد" }),
  discount: z.number().optional(),
  discount_price: z.number().optional(),
  description: z.string().min(10, { message: "توضیحات محصول را وارد کنید" }),
  recommended_percent: z.number(),
  guarantee: z.string(),
  sizes: z.string(),
  likes: z.number().default(0),
});

export const productEditSchema = ProductSchema.extend({
  thumbnail: imageSchema.optional(),
  features: z.string().optional(),
  colors: z.string().optional(),
});

export const CategorySubmenuItemSchema = z.object({
  _id: z.string(),
  title: z
    .string()
    .min(3, { message: "لطفا عنوان زیرمجموعه دسته‌بندی را وارد نمایید" }),
  href: z
    .string()
    .min(5, { message: "لطفا آدرس لینک زیرمجموعه دسته‌بندی را وارد نمایید" }),
  submenuId: z.string(),
});

export const CategorySubmenusSchema = z.object({
  _id: z.string(),
  title: z
    .string()
    .min(3, { message: "لطفا عنوان زیرمجموعه دسته‌بندی را وارد نمایید" }),
  href: z
    .string()
    .min(5, { message: "لطفا آدرس لینک زیرمجموعه دسته‌بندی را وارد نمایید" }),
  categoryId: z.string(),
  items: z.array(CategorySubmenuItemSchema).optional(),
});

export const CategorySchema = z.object({
  _id: z.string(),
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

export const StorySchema = z.object({
  _id: z.string(),
  title: z.string().min(5, { message: "لطفا عنوان داستان را وارد نمایید" }),
  cover: imageSchema.refine((file) => file.size > 0, "Required"),
  post: imageSchema.refine((file) => file.size > 0, "Required"),
});
