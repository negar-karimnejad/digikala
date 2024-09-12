"use server";

import {
  categoryEditSchema,
  CategorySchema,
  CategorySubmenuItemSchema,
  CategorySubmenusSchema,
} from "@/lib/validation";
import connectToDB from "config/mongodb";
import { promises as fs, unlink, writeFile } from "fs";
import CategoryModel from "models/Category";
import SubmenuModel from "models/Submenu";
import SubmenuItemModel from "models/SubmenuItem";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";
import path from "path";
import { promisify } from "util";

const unlinkAsync = promisify(unlink);
const writeFileAsync = promisify(writeFile);

export async function addCategory(_state, formData: FormData) {
  connectToDB();
  const heros = formData.getAll("hero");

  // Safely parse the data
  const result = CategorySchema.safeParse({
    ...Object.fromEntries(formData.entries()),
    hero: heros,
  });

  if (result.success === false) {
    console.log("❌❌❌", result.error.formErrors.fieldErrors);
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;

  // Define the directory path
  const categoryDir = path.join(process.cwd(), "public/categories");
  try {
    await fs.access(categoryDir);
  } catch (error) {
    if (error.code === "ENOENT") {
      await fs.mkdir(categoryDir, { recursive: true });
    } else {
      throw error;
    }
  }

  const coverPath = `/categories/${crypto.randomUUID()}-${data.cover.name}`;
  await fs.writeFile(
    path.join(process.cwd(), "public", coverPath),
    Buffer.from(await data.cover.arrayBuffer())
  );

  const iconPath = `/categories/${crypto.randomUUID()}-${data.icon.name}`;
  await fs.writeFile(
    path.join(process.cwd(), "public", iconPath),
    Buffer.from(await data.icon.arrayBuffer())
  );

  // Handle hero files
  const heroPaths = [];
  const existingHeros = new Set(); // To track existing images and avoid duplicates

  const imagePromises = (heros as File[]).map(async (image) => {
    if (image instanceof File) {
      const imagePath = `/categories/hero/${crypto.randomUUID()}-${image.name}`;
      if (!existingHeros.has(image.name)) {
        existingHeros.add(image.name);
        await fs.writeFile(
          path.join(process.cwd(), "public", imagePath),
          Buffer.from(await image.arrayBuffer())
        );
        heroPaths.push(imagePath);
      } else {
        console.warn("Duplicate image detected:", image.name);
      }
    }
  });
  await Promise.all(imagePromises);

  // Save category to the database
  await CategoryModel.create({
    title: data.title,
    cover: coverPath,
    icon: iconPath,
    href: data.href,
    hero: heroPaths,
    submenus: [],
  });

  revalidatePath("/");
  revalidatePath("/categories");

  redirect("/admin/categories");
}

export async function updateCategory(state: any, formData: FormData) {
  connectToDB();
  const heros = formData.getAll("hero");
  console.log("🧩🧩", heros);

  const result = categoryEditSchema.safeParse({
    ...Object.fromEntries(formData.entries()),
    hero: heros,
  });

  if (result.success === false) {
    console.log("❌❌❌", result.error.formErrors.fieldErrors);
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;
  const category = await CategoryModel.findOne({ _id: data._id });
  if (category == null) return notFound();

  let coverPath = category.cover;
  let iconPath = category.icon;

  if (data.cover != null && data.cover.size > 0) {
    await unlinkAsync(`public${category.cover}`);
    coverPath = `/categories/${crypto.randomUUID()}-${data.cover.name}`;
    await writeFileAsync(
      `public${coverPath}`,
      Buffer.from(await data.cover.arrayBuffer())
    );
  }

  if (data.icon != null && data.icon.size > 0) {
    await unlinkAsync(`public${category.icon}`);
    iconPath = `/categories/${crypto.randomUUID()}-${data.icon.name}`;
    await writeFileAsync(
      `public${iconPath}`,
      Buffer.from(await data.icon.arrayBuffer())
    );
  }

  // Update heros
  let heroPaths = Array.isArray(category.hero) ? [...category.hero] : [];
  const existingHeros = new Set(heroPaths.map((path) => path.split("/").pop())); // Track existing images by name

  const imagePromises = (heros as File[]).map(async (image) => {
    if (image instanceof File) {
      const imageName = image.name;
      const imagePath = `/categories/hero/${crypto.randomUUID()}-${imageName}`;

      // Check if the image already exists
      if (!existingHeros.has(imageName)) {
        existingHeros.add(imageName);
        await fs.writeFile(
          path.join(process.cwd(), "public", imagePath),
          Buffer.from(await image.arrayBuffer())
        );
        heroPaths.push(imagePath);
      } else {
        console.warn("Duplicate image detected:", imageName);
      }
    }
  });
  await Promise.all(imagePromises);

  await CategoryModel.findOneAndUpdate(
    { _id: data._id },
    {
      $set: {
        title: data.title,
        href: data.href,
        cover: coverPath,
        icon: iconPath,
        hero: heroPaths,
      },
    },
    { new: true }
  );

  revalidatePath("/");
  revalidatePath("/categories");

  redirect("/admin/categories");
}

export async function deleteCategory(id: string) {
  connectToDB();
  const category = await CategoryModel.findOneAndDelete({ _id: id });

  if (category == null) return notFound();

  await fs.unlink(`public${category.cover}`);
  await fs.unlink(`public${category.icon}`);
  await fs.unlink(`public${category.hero}`);

  revalidatePath("/");
  revalidatePath("/admin/categories");
}

// Submenu Actions
export async function addSubmenu(formData: FormData) {
  connectToDB();
  const result = CategorySubmenusSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!result.success) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;

  // Create the new submenu
  const newSubmenu = await SubmenuModel.create({
    title: data.title,
    href: data.href,
    categoryId: data.categoryId,
    items: [],
  });

  // Update the category to include the new submenu
  await CategoryModel.findOneAndUpdate(
    { _id: data.categoryId },
    { $push: { submenus: newSubmenu._id } },
    { new: true }
  ).populate("submenus");

  revalidatePath("/");
  revalidatePath("/categories/submenu");
  redirect("/admin/categories/submenu");
}

export async function deleteSubmenu(id: string) {
  connectToDB();
  const submenu = await SubmenuModel.findOneAndDelete({ _id: id });

  if (submenu == null) return notFound();

  revalidatePath("/");
  redirect("/admin/categories/submenu");
}

// Submenu-Item Actions
export async function addSubmenuItem(formData: FormData) {
  connectToDB();
  // Convert FormData entries to a plain object
  const result = CategorySubmenuItemSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

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
  await SubmenuModel.findOneAndUpdate(
    { _id: data.submenuId },
    { $push: { items: newSubmenuItem._id } }, // Corrected $push usage
    { new: true } // Option to return the updated document
  ).populate("items");

  revalidatePath("/");
  revalidatePath("/categories/submenu-Item");
  redirect("/admin/categories/submenu-Item");
}

export async function deleteSubmenuItem(id: string) {
  connectToDB();
  const submenuItem = await SubmenuItemModel.findOneAndDelete({ _id: id });

  if (submenuItem == null) return notFound();

  revalidatePath("/");
  redirect("/admin/categories/submenu-Item");
}
