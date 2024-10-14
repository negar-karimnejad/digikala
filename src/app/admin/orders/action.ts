"use server";

import { OrderSchema } from "@/utils/validation";
import connectToDB from "config/mongodb";
import OrderModel from "models/Order";
import { ObjectId } from "mongoose";
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";

export async function addOrder(formData: FormData) {
  await connectToDB();
  const entries = Object.fromEntries(formData.entries());

  const result = OrderSchema.safeParse(entries);
  if (!result.success) {
    console.log("❌❌❌", result.error.formErrors.fieldErrors);
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;

  // Check if the order already exists for the product and user
  const hasInOrders = await OrderModel.findOne({
    productId: data.productId,
    userId: data.userId,
  });

  if (!hasInOrders) {
    // Create the product record
    await OrderModel.create({
      productId: data.productId,
      userId: data.userId,
    });
    // Revalidate paths and redirect
    revalidatePath("/");
    revalidatePath("/orders");
  }
  return;
}

export async function deleteOrder(id: string) {
  await connectToDB();

  // First, try to find and delete the order by _id (order ID)
  const orderById = await OrderModel.findOneAndDelete({ _id: id });

  if (orderById) {
    revalidatePath("/");
    revalidatePath("/orders");
    return;
  }

  // If no order was found by _id, try finding and deleting by productId (product ID)
  const orderByProductId = await OrderModel.findOneAndDelete({ productId: id });

  if (orderByProductId) {
    revalidatePath("/");
    revalidatePath("/orders");
    return;
  }
}
