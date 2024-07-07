"use client";
import { deleteProduct } from "@/app/admin/_actions/products";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import { DropdownMenuItem } from "../ui/dropdown-menu";

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
              toast.dismiss(t.id);
              await deleteProduct(id);
              router.refresh();
              toast.success("محصول با موفقیت حذف شد!");
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
