"use server";

import db from "@/db/db";
import { categoryEditSchema, CategorySchema } from "@/lib/validation";
import fs from "fs/promises";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";

export async function addCategory(_state, formData: FormData) {
  const result = CategorySchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  console.log(formData);

  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;

  await fs.mkdir("public/categories", { recursive: true });
  const coverPath = `/categories/${crypto.randomUUID()}-${data.cover.name}`;
  await fs.writeFile(
    `public${coverPath}`,
    Buffer.from(await data.cover.arrayBuffer())
  );

  await fs.mkdir("public/categories", { recursive: true });
  const iconPath = `/categories/${crypto.randomUUID()}-${data.icon.name}`;
  await fs.writeFile(
    `public${iconPath}`,
    Buffer.from(await data.icon.arrayBuffer())
  );

  const submenus = await db.submenu.findMany({ orderBy: { id: "asc" } });
  console.log("😎🤞😎🤞", submenus);

  await db.category.create({
    data: {
      title: data.title,
      cover: coverPath,
      icon: iconPath,
      href: data.href,
    },
  });

  revalidatePath("/");
  revalidatePath("/categories");

  redirect("/admin/categories");
}

export async function updateCategory(state: any, formData: FormData) {
  const id = formData.get("id");
  const numericId = Number(id);
  console.log(formData);

  const result = categoryEditSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;

  const category = await db.category.findUnique({ where: { id: numericId } });

  if (category == null) return notFound();

  let coverPath = category.cover;
  let iconPath = category.icon;

  if (data.cover != null && data.cover.size > 0) {
    await fs.unlink(`public${category.cover}`);
    coverPath = `/categories/${crypto.randomUUID()}-${data.cover.name}`;
    await fs.writeFile(
      `public${coverPath}`,
      Buffer.from(await data.cover.arrayBuffer())
    );
  }

  if (data.icon != null && data.icon.size > 0) {
    await fs.unlink(`public${category.icon}`);
    iconPath = `/categories/${crypto.randomUUID()}-${data.icon.name}`;
    await fs.writeFile(
      `public${iconPath}`,
      Buffer.from(await data.icon.arrayBuffer())
    );
  }

  await db.category.update({
    where: { id: numericId },
    data: {
      title: data.title,
      cover: coverPath,
      icon: iconPath,
      href: data.href,
    },
  });

  revalidatePath("/");
  revalidatePath("/categories");

  redirect("/admin/categories");
}

export async function deleteCategory(id: number) {
  const category = await db.category.delete({ where: { id } });

  if (category == null) return notFound();

  await fs.unlink(`public${category.cover}`);
  await fs.unlink(`public${category.icon}`);

  if (category == null) return notFound();

  revalidatePath("/");
  revalidatePath("/categories");
}

// "use server";

// import db from "@/db/db";
// import {
//   categoryEditSchema,
//   CategorySchema
// } from "@/lib/validation";
// import fs from "fs/promises";
// import { revalidatePath } from "next/cache";
// import { notFound, redirect } from "next/navigation";

// export async function addCategory(_state, formData: FormData) {
//   const result = CategorySchema.safeParse(
//     Object.fromEntries(formData.entries())
//   );

//   if (result.success === false) {
//     console.log(result.error.formErrors.fieldErrors);

//     return result.error.formErrors.fieldErrors;
//   }

//   const data = result.data;

//   await fs.mkdir("public/categories", { recursive: true });
//   const coverPath = `/categories/${crypto.randomUUID()}-${data.cover.name}`;
//   await fs.writeFile(
//     `public${coverPath}`,
//     Buffer.from(await data.cover.arrayBuffer())
//   );

//   await fs.mkdir("public/categories", { recursive: true });
//   const iconPath = `/categories/${crypto.randomUUID()}-${data.icon.name}`;
//   await fs.writeFile(
//     `public${iconPath}`,
//     Buffer.from(await data.icon.arrayBuffer())
//   );

//   const submenus = await db.submenu.findMany()
//   console.log(submenus);

//   // await db.category.create({
//   //   data: {
//   //     title: data.title,
//   //     cover: coverPath,
//   //     icon: iconPath,
//   //     href: data.href,
//   //     // submenus:data.
//   //   },
//   // });

//   // revalidatePath("/");
//   // revalidatePath("/categories");

//   // redirect("/admin/categories");
// }

// export async function updateCategory(state: any, formData: FormData) {
//   const id = formData.get("id");
//   const numericId = Number(id);

//   const result = categoryEditSchema.safeParse(
//     Object.fromEntries(formData.entries())
//   );

//   if (result.success === false) {
//     return result.error.formErrors.fieldErrors;
//   }

//   const data = result.data;

//   const category = await db.category.findUnique({ where: { id: numericId } });

//   if (category == null) return notFound();

//   let coverPath = category.cover;
//   let iconPath = category.icon;

//   if (data.cover != null && data.cover.size > 0) {
//     await fs.unlink(`public${category.cover}`);
//     coverPath = `/categories/${crypto.randomUUID()}-${data.cover.name}`;
//     await fs.writeFile(
//       `public${coverPath}`,
//       Buffer.from(await data.cover.arrayBuffer())
//     );
//   }

//   if (data.icon != null && data.icon.size > 0) {
//     await fs.unlink(`public${category.icon}`);
//     iconPath = `/categories/${crypto.randomUUID()}-${data.icon.name}`;
//     await fs.writeFile(
//       `public${iconPath}`,
//       Buffer.from(await data.icon.arrayBuffer())
//     );
//   }

//   await db.category.update({
//     where: { id: numericId },
//     data: {
//       title: data.title,
//       cover: coverPath,
//       icon: iconPath,
//       href: data.href,
//     },
//   });

//   revalidatePath("/");
//   revalidatePath("/categories");

//   redirect("/admin/categories");
// }

// export async function deleteCategory(id: number) {
//   const category = await db.category.delete({ where: { id } });

//   if (category == null) return notFound();

//   await fs.unlink(`public${category.cover}`);
//   await fs.unlink(`public${category.icon}`);

//   if (category == null) return notFound();

//   revalidatePath("/");
//   revalidatePath("/categories");
// }
