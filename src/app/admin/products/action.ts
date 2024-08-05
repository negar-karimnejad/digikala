"use server";

import db from "@/db/db";
import { productEditSchema, ProductSchema } from "@/lib/validation";
import fs from "fs/promises";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";
import path from "path";

export async function addProduct(_state: any, formData: FormData) {
  const entries = Object.fromEntries(formData.entries());

  const featureArray = JSON.parse(entries.features as string) as {
    key: string;
    value: string;
  }[];

  const colorArray = JSON.parse(entries.colors as string) as {
    name: string;
    hex: string;
  }[];

  const parsedEntries = {
    ...entries,
    id: Number(entries.id),
    rating: Number(entries.rating),
    categoryId: Number(entries.categoryId),
    voter: Number(entries.voter),
    price: Number(entries.price),
    discount: Number(entries.discount),
    discount_price: Number(entries.discount_price),
    recommended_percent: Number(entries.recommended_percent),
    likes: Number(entries.likes),
  };

  console.log("🎁🎗", parsedEntries);

  const result = ProductSchema.safeParse(parsedEntries);
  try {
    if (result.success === false) {
      console.log("🎁🎗", result.error.formErrors.fieldErrors);
      return result.error.formErrors.fieldErrors;
    }

    const data = result.data;

    await fs.mkdir("public/products", { recursive: true });
    const imagePath = `/products/${crypto.randomUUID()}-${data.thumbnail.name}`;
    await fs.writeFile(
      `public${imagePath}`,
      Buffer.from(await data.thumbnail.arrayBuffer())
    );

    const product = await db.product.create({
      data: {
        title: data.title,
        en_title: data.en_title,
        rating: data.rating,
        voter: data.voter,
        sizes: data.sizes,
        thumbnail: imagePath,
        price: data.price,
        discount: data.discount,
        discount_price: data.discount_price,
        description: data.description,
        recommended_percent: data.recommended_percent,
        guarantee: data.guarantee,
        likes: data.likes,
        categoryId: data.categoryId,
      },
    });

    // Create features
    if (featureArray.length > 0) {
      await Promise.all(
        featureArray.map((feature) =>
          db.feature.create({
            data: {
              key: feature.key,
              value: feature.value,
              productId: product.id,
            },
          })
        )
      );
    }

    // Create colors
    if (colorArray.length > 0) {
      await Promise.all(
        colorArray.map((color) =>
          db.colors.create({
            data: {
              name: color.name,
              hex: color.hex,
              productId: product.id,
            },
          })
        )
      );
    }

    // Create images
    if (formData.has("image")) {
      const images = formData.getAll("image");

      // Ensure image files are properly handled
      const imagePromises = (images as File[]).map(async (image) => {
        if (image instanceof File) {
          const imagePath = `/products/${crypto.randomUUID()}-${image.name}`;
          await fs.writeFile(
            path.join(process.cwd(), "public", imagePath),
            Buffer.from(await image.arrayBuffer())
          );

          // Save image paths to the database
          await db.image.create({
            data: {
              url: imagePath,
              productId: product.id,
            },
          });
        } else {
          console.warn("Expected a File but got:", image);
        }
      });

      await Promise.all(imagePromises);
    }

    revalidatePath("/");
    revalidatePath("/products");

    redirect("/admin/products");
  } catch (error) {
    console.error("Error in addProduct:", error);
    throw error;
  }
}

export async function updateProduct(_state: any, formData: FormData) {
  try {
    const id = formData.get("id");
    const numericId = Number(id);

    const entries = Object.fromEntries(formData.entries());

    const parsedEntries = {
      ...entries,
      id: Number(entries.id),
      rating: Number(entries.rating),
      categoryId: Number(entries.categoryId),
      voter: Number(entries.voter),
      price: Number(entries.price),
      discount: Number(entries.discount),
      discount_price: Number(entries.discount_price),
      recommended_percent: Number(entries.recommended_percent),
      likes: Number(entries.likes),
    };

    const result = productEditSchema.safeParse(parsedEntries);
    if (result.success === false) {
      console.log(
        "✨✨Validation failed:",
        result.error.formErrors.fieldErrors
      );
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

    const features = data.features ? JSON.parse(data.features as string) : [];
    if (features.length > 0) {
      await db.feature.deleteMany({ where: { productId: numericId } });
      await Promise.all(
        features.map((feature: { key: string; value: string }) =>
          db.feature.create({
            data: {
              key: feature.key,
              value: feature.value,
              productId: numericId,
            },
          })
        )
      );
    }

    // Handle colors update
    const colors = data.colors ? JSON.parse(data.colors as string) : [];
    if (colors.length > 0) {
      await db.colors.deleteMany({ where: { productId: numericId } });
      await Promise.all(
        colors.map((color: { name: string; hex: string }) =>
          db.colors.create({
            data: {
              name: color.name,
              hex: color.hex,
              productId: numericId,
            },
          })
        )
      );
    }

    // Handle additional images update
    if (formData.has("image")) {
      await db.image.deleteMany({ where: { productId: numericId } });
      const images = formData.getAll("image");

      // Log to check duplicates
      const imagePaths = new Set();
      const imagePromises = (images as File[]).map(async (image) => {
        if (image instanceof File) {
          const imagePath = `/products/${crypto.randomUUID()}-${image.name}`;

          if (imagePaths.has(imagePath)) {
            console.warn(`Duplicate image detected: ${image.name}`);
          } else {
            imagePaths.add(imagePath);
            await fs.writeFile(
              path.join(process.cwd(), "public", imagePath),
              Buffer.from(await image.arrayBuffer())
            );

            // Save image paths to the database
            await db.image.create({
              data: {
                url: imagePath,
                productId: numericId,
              },
            });
          }
        } else {
          console.warn("Expected a File but got:", image);
        }
      });

      await Promise.all(imagePromises);
    }

    revalidatePath("/");
    revalidatePath("/products");

    redirect("/admin/products");
  } catch (error) {
    console.error("Error in updateProduct:", error);
    throw error;
  }
}

export async function deleteProduct(id: number) {
  const productWithImages = await db.product.findUnique({
    where: { id },
    include: {
      image: true,
    },
  });

  if (!productWithImages) return notFound();

  const imagePaths = productWithImages.image.map((img) => img.url);
  const allImagePaths = [productWithImages.thumbnail, ...imagePaths].filter(
    Boolean
  ); // Remove any falsy values (like null or undefined)

  // Delete image files
  await Promise.all(
    allImagePaths.map(async (filePath) => {
      const fullPath = path.join("public", filePath);
      try {
        await fs.unlink(fullPath);
        console.log(`Deleted file: ${fullPath}`);
      } catch (error) {
        if (error.code === "ENOENT") {
          console.warn(`File not found: ${fullPath}`);
        } else {
          console.error(`Failed to delete file ${fullPath}:`, error);
        }
      }
    })
  );

  // Delete related records from the database
  await Promise.all([
    db.image.deleteMany({ where: { productId: id } }),
    db.feature.deleteMany({ where: { productId: id } }),
    db.colors.deleteMany({ where: { productId: id } }),
    db.product.delete({ where: { id } }),
  ]);

  revalidatePath("/");
  revalidatePath("/products");
}
