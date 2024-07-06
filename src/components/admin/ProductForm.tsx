"use client";

import { addProduct, updateProduct } from "@/app/admin/_actions/products";
import { Button } from "@/components/ui/button";
import { Product } from "@prisma/client";
import { LucideUploadCloud } from "lucide-react";
import Image from "next/image";
import { useFormState, useFormStatus } from "react-dom";

export default function ProductForm({ product }: { product?: Product | null }) {
  const [error, action] = useFormState(
    product == null ? addProduct : updateProduct.bind(null, product.id),
    {}
  );

  return (
    <form action={action}>
      <div className="h-20 relative">
        <input
          type="text"
          id="title"
          name="title"
          placeholder=""
          required
          defaultValue={product?.title || ""}
          className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500"
        />
        {error.title && (
          <div className="text-destructive text-[12px]">{error.title}</div>
        )}
        <label
          htmlFor="title"
          className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
        >
          نام محصول
        </label>
      </div>
      <div className="h-52 relative">
        <textarea
          id="description"
          name="description"
          placeholder=""
          required
          rows={8}
          defaultValue={product?.description || ""}
          className="peer max-h-48 block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500"
        />
        {error.description && (
          <div className="text-destructive text-[12px]">
            {error.description}
          </div>
        )}
        <label
          htmlFor="description"
          className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
        >
          معرفی محصول
        </label>
      </div>
      <div className="flex gap-5 w-full h-24">
        <div className="relative w-full">
          <input
            type="number"
            id="price"
            name="price"
            placeholder=""
            required
            defaultValue={product?.price || ""}
            className="peer max-h-20 block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500"
          />
          {error.price && (
            <div className="text-destructive text-[12px]">{error.price}</div>
          )}
          <label
            htmlFor="price"
            className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            قیمت محصول
          </label>
        </div>
        <div className="relative w-full">
          <input
            type="number"
            id="discount"
            name="discount"
            placeholder=""
            required
            defaultValue={product?.discount || ""}
            className="peer max-h-20 block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500"
          />
          {error.discount && (
            <div className="text-destructive text-[12px]">{error.discount}</div>
          )}
          <label
            htmlFor="discount"
            className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            میزان تخفیف
          </label>
        </div>
      </div>
      {product != null ? (
        <div className="mb-5 dark:border-gray-700 dark:bg-gray-900 rounded-lg border border-gray-100 p-1">
          <input
            type="file"
            id="thumbnail"
            name="thumbnail"
            required={product == null}
            className="h-full w-full"
          />
        </div>
      ) : (
        <div className="h-40 bg-rose-50 dark:border-gray-700 dark:bg-gray-900 rounded-lg border-dashed border-2 border-gray-300">
          <input
            type="file"
            id="thumbnail"
            name="thumbnail"
            required={product == null}
            className="opacity-0 h-full w-full bg-transparent border-0"
          />
          <div className="flex -mt-32 items-center justify-center flex-col gap-2">
            <LucideUploadCloud size={35} className="text-rose-600" />
            <p className="font-medium text-gray-400">
              تصویر محصول را آپلود کنید
            </p>
          </div>
          {error.thumbnail && (
            <div className="text-destructive text-[12px]">
              {error.thumbnail}
            </div>
          )}
        </div>
      )}
      {product != null && (
        <Image
          src={product.thumbnail}
          height={200}
          width={300}
          alt="Product Image"
          className="object-cover border rounded-lg mx-auto"
        />
      )}
      <SubmitButton title={product ? "ویرایش" : "افزودن"} />
    </form>
  );
}

const SubmitButton = ({ title }: { title: string }) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className="my-5 w-full text-lg font-medium"
      disabled={pending}
    >
      <div className="flex items-center justify-center gap-2">
        <span>{pending ? `در حال ${title} ...` : `${title} محصول`}</span>
        {pending && (
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-dotted border-gray-800"></div>
        )}
      </div>
    </Button>
  );
};
