"use client";

import { addCategory, updateCategory } from "@/app/admin/categories/action";
import { Button } from "@/components/ui/button";
import { categoryInitialState } from "@/types/types";
import { Category } from "@prisma/client";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";

export default function CategoryForm({
  category,
}: {
  category?: Category | null;
}) {
  const [state, formAction] = useFormState(
    category == null ? addCategory : updateCategory,
    categoryInitialState
  );

  useEffect(() => {
    if (state.success) {
      toast.success(
        category == null
          ? "محصول با موفقیت اضافه شد."
          : "محصول با موفقیت ویرایش شد."
      );
    }
  }, [category, state.success]);

  return (
    <form action={formAction}>
      <div className="h-20 relative">
        <input
          type="text"
          id="name"
          name="name"
          placeholder=""
          required
          defaultValue={category?.name || ""}
          className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500"
        />
        {state.errors?.name && (
          <div className="text-destructive text-xs">{state.errors.name}</div>
        )}
        <label
          htmlFor="name"
          className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
        >
          نام دسته بندی
        </label>
      </div>
      {/* <div className="h-20 relative">
        <input
          type="number"
          id="parentId"
          name="parentId"
          placeholder=""
          required
          defaultValue={category?.parentId}
          className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500"
        />
        {state.errors?.parentId && (
          <div className="text-destructive text-xs">
            {state.errors?.parentId}
          </div>
        )}
        <label
          htmlFor="parentId"
          className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
        >
          parentId
        </label>
      </div> */}

      <SubmitButton title={category ? "ویرایش" : "افزودن"} />
    </form>
  );
}

const SubmitButton = ({ title }: { title: string }) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      variant="destructive"
      className="my-5 w-full text-lg font-medium"
      disabled={pending}
    >
      <div className="flex items-center justify-center gap-2">
        <span>{pending ? `در حال ${title} ...` : `${title} دسته بندی`}</span>
        {pending && (
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-dotted border-gray-800"></div>
        )}
      </div>
    </Button>
  );
};
