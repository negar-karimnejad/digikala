"use server";

import { productEditSchema, ProductSchema } from "@/lib/validation";
import { ProductImage } from "@/types/types";
import connectToDB from "configs/db";
import crypto from "crypto";
import fs from "fs/promises";
import ColorModel from "models/Color";
import FeatureModel from "models/Feature";
import ImageModel from "models/Image";
import ProductModel from "models/Product";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";
import path from "path";

export async function addProduct(_state: any, formData: FormData) {
  await connectToDB();
  const entries = Object.fromEntries(formData.entries());
  const featureArray = JSON.parse(entries.features as string);
  const colorArray = JSON.parse(entries.colors as string);

  const parsedEntries = {
    ...entries,
    rating: Number(entries.rating),
    voter: Number(entries.voter),
    price: Number(entries.price),
    discount: Number(entries.discount),
    discount_price: Number(entries.discount_price),
    recommended_percent: Number(entries.recommended_percent),
    likes: Number(entries.likes),
  };

  const result = ProductSchema.safeParse(parsedEntries);
  if (!result.success) {
    console.log("❌❌❌", result.error.formErrors.fieldErrors);
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;

  // Define the directory path
  const productDir = path.join(process.cwd(), "public/products");
  try {
    await fs.access(productDir);
  } catch (error) {
    if (error.code === "ENOENT") {
      await fs.mkdir(productDir, { recursive: true });
    } else {
      throw error;
    }
  }

  // Handle thumbnail image
  const imagePath = `/products/${crypto.randomUUID()}-${data.thumbnail.name}`;
  await fs.writeFile(
    path.join(process.cwd(), "public", imagePath),
    Buffer.from(await data.thumbnail.arrayBuffer())
  );

  // Create the product record
  const product = await ProductModel.create({
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
    images: [],
    colors: [],
    features: [],
    category: data.categoryId,
    submenuId: data.submenuId,
    submenuItemId: data.submenuItemId,
  });

  // Handle features
  const featureIds = [];
  if (featureArray.length > 0) {
    for (const feature of featureArray) {
      const newFeature = await FeatureModel.create({
        key: feature.key,
        value: feature.value,
        productId: product._id,
      });
      featureIds.push(newFeature._id);
    }
  }

  // Handle colors
  const colorIds = [];
  if (colorArray.length > 0) {
    for (const color of colorArray) {
      const newColor = await ColorModel.create({
        name: color.name,
        hex: color.hex,
        productId: product._id,
      });
      colorIds.push(newColor._id);
    }
  }

  // Handle additional images
  const imageIds = [];
  const images = formData.getAll("image");
  const imagePaths = new Set();
  const imagePromises = (images as File[]).map(async (image) => {
    if (image instanceof File) {
      const imagePath = `/products/${crypto.randomUUID()}-${image.name}`;
      if (!imagePaths.has(imagePath)) {
        imagePaths.add(imagePath);
        await fs.writeFile(
          path.join(process.cwd(), "public", imagePath),
          Buffer.from(await image.arrayBuffer())
        );

        const newImage = await ImageModel.create({
          url: imagePath,
          productId: product._id,
        });
        imageIds.push(newImage._id);
      } else {
        console.warn("Duplicate image detected:", image);
      }
    }
  });
  await Promise.all(imagePromises);

  await ProductModel.findByIdAndUpdate(product._id, {
    $set: {
      images: imageIds,
      colors: colorIds,
      features: featureIds,
    },
  });

  // Revalidate paths and redirect
  revalidatePath("/");
  revalidatePath("/products");
  redirect("/admin/products");
}

export async function updateProduct(_state: any, formData: FormData) {
  connectToDB();
  try {
    const _id = formData.get("_id");
    const entries = Object.fromEntries(formData.entries());

    const parsedEntries = {
      ...entries,
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
    if (!result.success) {
      return result.error.formErrors.fieldErrors;
    }

    const data = result.data;

    const product = await ProductModel.findOne({ _id });
    if (product == null) return notFound();

    let imagePath = product.thumbnail;

    if (data.thumbnail && data.thumbnail.size > 0) {
      await fs.unlink(`public${product.thumbnail}`);
      imagePath = `/products/${crypto.randomUUID()}-${data.thumbnail.name}`;
      await fs.writeFile(
        `public${imagePath}`,
        Buffer.from(await data.thumbnail.arrayBuffer())
      );
    }

    await ProductModel.findOneAndUpdate(
      { _id },
      {
        $set: {
          title: data.title,
          description: data.description,
          price: data.price,
          discount: data.discount,
          thumbnail: imagePath,
        },
      }
    );

    const features = data.features ? JSON.parse(data.features as string) : [];
    if (features.length > 0) {
      await FeatureModel.deleteMany({ productId: _id });
      await Promise.all(
        features.map((feature: { key: string; value: string }) =>
          FeatureModel.create({
            key: feature.key,
            value: feature.value,
            productId: _id,
          })
        )
      );
    }

    const colors = data.colors ? JSON.parse(data.colors as string) : [];
    if (colors.length > 0) {
      await ColorModel.deleteMany({ productId: _id });
      await Promise.all(
        colors.map((color: { name: string; hex: string }) =>
          ColorModel.create({
            name: color.name,
            hex: color.hex,
            productId: _id,
          })
        )
      );
    }

    // if (formData.has("image")) {
    // Remove all existing images
    await ImageModel.deleteMany({ productId: _id });

    const images = formData.getAll("image");

    const imagePaths = new Set();
    const imagePromises = (images as File[]).map(async (image) => {
      if (image instanceof File) {
        const imagePath = `/products/${image.name}`;
        if (!imagePaths.has(imagePath)) {
          imagePaths.add(imagePath);
          await fs.writeFile(
            path.join(process.cwd(), "public", imagePath),
            Buffer.from(await image.arrayBuffer())
          );

          await ImageModel.create({
            url: imagePath,
            productId: _id,
          });
        } else {
          console.warn("Duplicate image detected:", image);
        }
      }
    });
    await Promise.all(imagePromises);
    // }

    revalidatePath("/");
    revalidatePath("/products");
    redirect("/admin/products");
  } catch (error) {
    console.error("Error in updateProduct:", error);
    throw error;
  }
}

export async function deleteProduct(id: string) {
  connectToDB();
  const productWithImages = await ProductModel.findOne({ _id: id }).populate(
    "images"
  );

  if (!productWithImages) return notFound();

  const imagePaths = productWithImages.images.map(
    (img: ProductImage) => img.url
  );
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
    ImageModel.deleteMany({ productId: id }),
    FeatureModel.deleteMany({ productId: id }),
    ColorModel.deleteMany({ productId: id }),
    ProductModel.findOneAndDelete({ _id: id }),
  ]);

  revalidatePath("/");
  revalidatePath("/products");
}
