"use client";

import { deleteProduct } from "@/app/admin/products/action";
import { deleteUser } from "@/app/admin/users/action";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { deleteCategory } from "@/app/admin/categories/action";

export function DeleteDropdownItem({
  categoryId,
  productId,
  userId,
}: {
  categoryId?: number;
  productId?: number;
  userId?: number;
}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const deleteHandler = () => {
    toast((t) => (
      <div>
        حذف{" "}
        {`${
          productId ? "محصول" : categoryId ? "دسته‌بندی" : userId ? "کاربر" : ""
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
              }
              router.refresh();
              toast.success(
                productId
                  ? "محصول با موفقیت حذف شد!"
                  : categoryId
                  ? "دسته‌بندی با موفقیت حذف شد!"
                  : userId
                  ? "کاربر با موفقیت حذف شد!"
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
