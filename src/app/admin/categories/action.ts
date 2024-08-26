"use server";

import {
  categoryEditSchema,
  CategorySchema,
  CategorySubmenuItemSchema,
  CategorySubmenusSchema,
} from "@/lib/validation";
import connectToDB from "configs/db";
import fs from "fs/promises";
import CategoryModel from "models/Category";
import submenuModal from "models/Submenu";
import SubmenuItemModel from "models/SubmenuItem";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";

export async function addCategory(_state, formData: FormData) {
  // try {
  connectToDB();
  const entries = Object.fromEntries(formData.entries());

  const parsedEntries = {
    ...entries,
    id: Number(entries.id),
  };

  const result = CategorySchema.safeParse(parsedEntries);

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

  await CategoryModel.create({
    title: data.title,
    cover: coverPath,
    icon: iconPath,
    href: data.href,
  });

  revalidatePath("/");
  revalidatePath("/categories");

  redirect("/admin/categories");

  // } catch (error) {
  //   console.log("Error ->", error);
  //   throw new Error(error);
  // }
}

export async function updateCategory(state: any, formData: FormData) {
  try {
    connectToDB();
    const entries = Object.fromEntries(formData.entries());

    const parsedEntries = {
      ...entries,
      id: Number(entries.id),
    };

    const result = categoryEditSchema.safeParse(parsedEntries);

    if (result.success === false) {
      return result.error.formErrors.fieldErrors;
    }

    const data = result.data;

    const category = await CategoryModel.findOne({ id: data.id });

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

    await CategoryModel.findOneAndUpdate(
      { _id: data.id },
      {
        $push: {
          title: data.title,
          cover: coverPath,
          icon: iconPath,
          href: data.href,
        },
      },
      { new: true }
    );

    revalidatePath("/");
    revalidatePath("/categories");

    redirect("/admin/categories");
  } catch (error) {
    console.log("Error ->", error);
    throw new Error(error);
  }
}

export async function deleteCategory(id: number) {
  connectToDB();
  const category = await CategoryModel.delete({ id });

  if (category == null) return notFound();

  await fs.unlink(`public${category.cover}`);
  await fs.unlink(`public${category.icon}`);

  revalidatePath("/");
  revalidatePath("/categories");
}

// Submenu Actions
export async function addSubmenu(formData: FormData) {
  try {
    connectToDB();
    // Convert FormData entries to a plain object
    const entries = Object.fromEntries(formData.entries());

    // Parse and validate entries
    const parsedEntries = {
      ...entries,
      categoryId: Number(entries.categoryId),
      id: Number(entries.id),
    };

    const result = CategorySubmenusSchema.safeParse(parsedEntries);

    if (!result.success) {
      console.log("❌❌❌", result.error.formErrors.fieldErrors);
      return result.error.formErrors.fieldErrors;
    }

    const data = result.data;

    // Create the new submenu
    const newSubmenu = await submenuModal.create({
      title: data.title,
      href: data.href,
      categoryId: data.categoryId,
    });

    // Update the category to include the new submenu

    await CategoryModel.findOneAndUpdate(
      { _id: data.categoryId },
      {
        $push: {
          submenus: newSubmenu.id,
        },
      },
      { new: true }
    ).populate("submenus");

    // Verify the category update
    await CategoryModel.findOne(
      { id: data.categoryId },
      { include: { submenus: true } }
    );

    revalidatePath("/");
    revalidatePath("/categories/submenu");
    redirect("/admin/categories/submenu");
  } catch (error) {
    console.log("Error ->", error);
    throw new Error(error);
  }
}

export async function deleteSubmenu(id: number) {
  connectToDB();
  const submenu = await submenuModal.delete({ id });

  if (submenu == null) return notFound();

  revalidatePath("/");
  revalidatePath("/categories");
}

// Submenu-Item Actions
export async function addSubmenuItem(formData: FormData) {
  try {
    connectToDB();
    // Convert FormData entries to a plain object
    const entries = Object.fromEntries(formData.entries());

    // Parse and validate entries
    const parsedEntries = {
      ...entries,
      submenuId: Number(entries.submenuId),
      id: Number(entries.id),
    };

    const result = CategorySubmenuItemSchema.safeParse(parsedEntries);

    if (!result.success) {
      console.error("Validation Errors:", result.error.formErrors.fieldErrors);
      return result.error.formErrors.fieldErrors;
    }

    const data = result.data;

    // Create the new submenu
    const newSubmenuItem = await SubmenuItemModel.create({
      title: data.title,
      href: data.href,
      submenuId: data.submenuId,
    });

    // Update the category to include the new submenu
    await submenuModal
      .findOneAndUpdate(
        { _id: data.submenuId },

        {
          $push: { submenus: newSubmenuItem.id }, // `$push` is used to add the submenu ID to the `submenus` array
        },
        { new: true }
      )
      .populate("items");

    // Verify the category update
    await submenuModal.findOne({ _id: data.submenuId }).populate("items");

    revalidatePath("/");
    revalidatePath("/categories/submenu-Item");
    redirect("/admin/categories/submenu-Item");
  } catch (error) {
    console.log("Error ->", error);
    throw new Error(error);
  }
}

export async function deleteSubmenuItem(id: number) {
  connectToDB();
  const submenuItem = await SubmenuItemModel.delete({ id });

  if (submenuItem == null) return notFound();

  revalidatePath("/");
  revalidatePath("/categories");
}
