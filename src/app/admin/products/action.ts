"use server";

import { ProductSchema } from "@/utils/validation";
import { ProductImage } from "@/utils/types";
import crypto from "crypto";
import fs from "fs/promises";
import connectToDB from "config/mongodb";
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
    submenuId: entries.submenuId?.toString() || "",
    submenuItemId: entries.submenuItemId?.toString() || "",
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
    description: data.description || "",
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
      if (!imagePaths.has(image.name)) {
        imagePaths.add(image.name);
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
    submenuId: entries.submenuId?.toString() || "",
    submenuItemId: entries.submenuItemId?.toString() || "",
  };

  const result = ProductSchema.safeParse(parsedEntries);
  if (!result.success) {
    console.log("❌❌❌", result.error.formErrors.fieldErrors);
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;
  const productId = data._id;

  // Fetch the existing product
  const product = await ProductModel.findById(productId);
  if (!product) {
    throw new Error(`Product with id ${productId} not found`);
  }

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

  // Handle thumbnail image update
  let thumbnailPath = product.thumbnail;
  if (data.thumbnail) {
    thumbnailPath = `/products/${crypto.randomUUID()}-${data.thumbnail.name}`;
    await fs.writeFile(
      path.join(process.cwd(), "public", thumbnailPath),
      Buffer.from(await data.thumbnail.arrayBuffer())
    );
  }

  // Update the product record
  await ProductModel.findByIdAndUpdate(productId, {
    title: data.title,
    en_title: data.en_title,
    rating: data.rating,
    voter: data.voter,
    sizes: data.sizes,
    thumbnail: thumbnailPath,
    price: data.price,
    discount: data.discount,
    discount_price: data.discount_price,
    description: data.description || "",
    recommended_percent: data.recommended_percent,
    guarantee: data.guarantee,
    likes: data.likes,
    category: data.categoryId,
    submenuId: data.submenuId,
    submenuItemId: data.submenuItemId,
  });

  // Update features
  const existingFeatureIds = await FeatureModel.find({ productId }).distinct(
    "_id"
  );
  const newFeatureIds = [];
  for (const feature of featureArray) {
    const existingFeature = await FeatureModel.findOneAndUpdate(
      { productId, key: feature.key },
      { value: feature.value },
      { new: true, upsert: true }
    );
    newFeatureIds.push(existingFeature._id);
  }
  await FeatureModel.deleteMany({
    _id: {
      $in: existingFeatureIds.filter((id) => !newFeatureIds.includes(id)),
    },
  });

  // Update colors
  const existingColorIds = await ColorModel.find({ productId }).distinct("_id");
  const newColorIds = [];
  for (const color of colorArray) {
    const existingColor = await ColorModel.findOneAndUpdate(
      { productId, name: color.name },
      { hex: color.hex },
      { new: true, upsert: true }
    );
    newColorIds.push(existingColor._id);
  }
  await ColorModel.deleteMany({
    _id: { $in: existingColorIds.filter((id) => !newColorIds.includes(id)) },
  });

  // Update additional images
  const existingImageIds = await ImageModel.find({ productId }).distinct("_id");
  const newImageIds = [];
  const images = formData.getAll("image");
  const imagePaths = new Set(product.images.map((image) => image.url)); // Keep track of existing paths to avoid duplicates
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
        newImageIds.push(newImage._id);
      } else {
        console.warn("Duplicate image detected:", image);
      }
    }
  });
  await Promise.all(imagePromises);
  await ImageModel.deleteMany({
    _id: { $in: existingImageIds.filter((id) => !newImageIds.includes(id)) },
  });

  // Update product with new associated data
  await ProductModel.findByIdAndUpdate(product._id, {
    $set: {
      images: newImageIds,
      colors: newColorIds,
      features: newFeatureIds,
    },
  });

  // Revalidate paths and redirect
  revalidatePath("/");
  revalidatePath("/products");
  redirect("/admin/products");
}

export async function deleteProduct(id: string) {
  await connectToDB();
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
