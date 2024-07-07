"use client";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { deleteProduct } from "@/app/admin/_actions/products";

export function DeleteDropdownItem({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const deleteHandler = () => {
    toast((t) => (
      <div>
        حذف محصول:
        <Button
          className="ml-1 mr-5"
          variant={"secondary"}
          onClick={() => toast.dismiss(t.id)}
        >
          نه، بیخیال
        </Button>
        <Button
          variant={"destructive"}
          onClick={() => {
            startTransition(async () => {
              await deleteProduct(id);
              router.refresh();
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
    >
      حذف
    </DropdownMenuItem>
  );
}
