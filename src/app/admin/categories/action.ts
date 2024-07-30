"use server";

import db from "@/db/db";
import {
  categoryEditSchema,
  CategorySchema,
  CategorySubmenusSchema,
} from "@/lib/validation";
import fs from "fs/promises";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";

export async function addCategory(_state, formData: FormData) {
  const entries = Object.fromEntries(formData.entries());
  console.log("💕💕🙌🤣", formData);

  const parsedEntries = {
    ...entries,
    id: Number(entries.id),
  };

  const result = CategorySchema.safeParse(parsedEntries);

  if (result.success === false) {
    console.log("💕💕🙌🤣", formData);
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

  revalidatePath("/");
  revalidatePath("/categories");
}

// Submenu Actions
export async function addSubmenu(formData: FormData) {
  try {
    // Convert FormData entries to a plain object
    const entries = Object.fromEntries(formData.entries());
    console.log("Form Data Entries:", entries);

    // Parse and validate entries
    const parsedEntries = {
      ...entries,
      categoryId: Number(entries.categoryId),
    };

    const result = CategorySubmenusSchema.safeParse(parsedEntries);
    console.log("Validation Result:", result);

    if (!result.success) {
      console.error("Validation Errors:", result.error.formErrors.fieldErrors);
      return result.error.formErrors.fieldErrors;
    }

    const data = result.data;

    // Create the new submenu
    const newSubmenu = await db.submenu.create({
      data: {
        title: data.title,
        href: data.href,
        categoryId: data.categoryId,
      },
    });
    console.log("New Submenu Created:", newSubmenu);

    // Update the category to include the new submenu
    const updatedCategory = await db.category.update({
      where: { id: data.categoryId },
      data: {
        submenus: {
          connect: { id: newSubmenu.id },
        },
      },
      include: { submenus: true }, // Include submenus in the result
    });
    console.log("Updated Category:", updatedCategory);

    // Verify the category update
    const categoryWithSubmenus = await db.category.findUnique({
      where: { id: data.categoryId },
      include: { submenus: true },
    });
    console.log("Category with Submenus:", categoryWithSubmenus);

    // Revalidate paths
    await revalidatePath("/");
    await revalidatePath("/categories");

    // Redirect
    redirect("/admin/categories");
  } catch (error) {
    console.error("Error in addSubmenu:", error);
    // Optionally, handle error responses here
  }
}

export async function deleteSubmenu(id: number) {
  const submenu = await db.submenu.delete({ where: { id } });

  if (submenu == null) return notFound();

  revalidatePath("/");
  revalidatePath("/categories");
}
// Submenu-Item Actions
// export async function addSubmenu(formData: FormData) {
//   try {
//     // Convert FormData entries to a plain object
//     const entries = Object.fromEntries(formData.entries());
//     console.log("Form Data Entries:", entries);

//     // Parse and validate entries
//     const parsedEntries = {
//       ...entries,
//       categoryId: Number(entries.categoryId),
//     };

//     const result = CategorySubmenusSchema.safeParse(parsedEntries);
//     console.log("Validation Result:", result);

//     if (!result.success) {
//       console.error("Validation Errors:", result.error.formErrors.fieldErrors);
//       return result.error.formErrors.fieldErrors;
//     }

//     const data = result.data;

//     // Create the new submenu
//     const newSubmenu = await db.submenu.create({
//       data: {
//         title: data.title,
//         href: data.href,
//         categoryId: data.categoryId,
//       },
//     });
//     console.log("New Submenu Created:", newSubmenu);

//     // Update the category to include the new submenu
//     const updatedCategory = await db.category.update({
//       where: { id: data.categoryId },
//       data: {
//         submenus: {
//           connect: { id: newSubmenu.id },
//         },
//       },
//       include: { submenus: true }, // Include submenus in the result
//     });
//     console.log("Updated Category:", updatedCategory);

//     // Verify the category update
//     const categoryWithSubmenus = await db.category.findUnique({
//       where: { id: data.categoryId },
//       include: { submenus: true },
//     });
//     console.log("Category with Submenus:", categoryWithSubmenus);

//     // Revalidate paths
//     await revalidatePath("/");
//     await revalidatePath("/categories");

//     // Redirect
//     redirect("/admin/categories");
//   } catch (error) {
//     console.error("Error in addSubmenu:", error);
//     // Optionally, handle error responses here
//   }
// }

export async function deleteSubmenuItem(id: number) {
  const submenuItem = await db.submenuItem.delete({ where: { id } });

  if (submenuItem == null) return notFound();

  revalidatePath("/");
  revalidatePath("/categories");
}
