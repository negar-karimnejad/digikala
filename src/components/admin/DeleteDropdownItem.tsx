"use client";

import { deleteArticle } from "@/app/admin/articles/action";
import {
  deleteCategory,
  deleteSubmenu,
  deleteSubmenuItem,
} from "@/app/admin/categories/action";
import { deleteProduct } from "@/app/admin/products/action";
import { deleteStory } from "@/app/admin/stories/action";
import { deleteUser } from "@/app/admin/users/action";
import { useCart } from "@/utils/cartItemsContext";
import { Order } from "@/utils/types";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import { DropdownMenuItem } from "../ui/dropdown-menu";

export function DeleteDropdownItem({
  categoryId,
  productId,
  userId,
  submenuId,
  itemId,
  storyId,
  articleId,
  order,
}: {
  categoryId?: string;
  productId?: string;
  userId?: string;
  submenuId?: string;
  itemId?: string;
  storyId?: string;
  articleId?: string;
  order?: Order;
}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const { deleteFromCart } = useCart();

  const deleteHandler = () => {
    toast((t) => (
      <div>
        حذف{" "}
        {`${
          productId
            ? "محصول"
            : categoryId
            ? "دسته‌بندی"
            : userId
            ? "کاربر"
            : submenuId
            ? "زیرمجموعه"
            : itemId
            ? "آیتم زیرمجموعه"
            : storyId
            ? "داستان"
            : articleId
            ? "مقاله"
            : order
            ? "سفارش"
            : ""
        }`}
        :
        <Button
          className="ml-1 mr-5"
          variant={"secondary"}
          onClick={() => toast.dismiss(t.id)}
        >
          انصراف
        </Button>
        <Button
          variant={"destructive"}
          onClick={() => {
            startTransition(async () => {
              toast.dismiss(t.id);
              if (userId) {
                await deleteUser(userId);
              } else if (productId) {
                await deleteProduct(productId);
              } else if (categoryId) {
                await deleteCategory(categoryId);
              } else if (submenuId) {
                await deleteSubmenu(submenuId);
              } else if (itemId) {
                await deleteSubmenuItem(itemId);
              } else if (storyId) {
                await deleteStory(storyId);
              } else if (articleId) {
                await deleteArticle(articleId);
              } else if (order) {
                deleteFromCart(order.productId.toString());
              }
              router.refresh();
              toast.success(
                productId
                  ? "محصول با موفقیت حذف شد!"
                  : categoryId
                  ? "دسته‌بندی با موفقیت حذف شد!"
                  : userId
                  ? "کاربر با موفقیت حذف شد!"
                  : submenuId
                  ? "زیرمجموعه با موفقیت حذف شد"
                  : itemId
                  ? "آیتم زیرمجموعه با موفقیت حذف شد"
                  : storyId
                  ? "داستان با موفقیت حذف شد"
                  : articleId
                  ? "مقاله با موفقیت حذف شد"
                  : order
                  ? "سفارش با موفقیت حذف شد"
                  : ""
              );
            });
          }}
        >
          حذف
        </Button>
      </div>
    ));
  };

  return (
    <DropdownMenuItem
      variant="destructive"
      disabled={isPending}
      onClick={deleteHandler}
      asChild
    >
      <div className="flex w-full justify-end">
        حذف
        <Trash2 size={15} className="mx-4" />
      </div>
    </DropdownMenuItem>
  );
}
