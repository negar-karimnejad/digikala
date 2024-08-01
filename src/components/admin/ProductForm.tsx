"use client";

import { addProduct, updateProduct } from "@/app/admin/products/action";
import { Button } from "@/components/ui/button";
import useCategories from "@/hooks/useCategories";
import { Product } from "@prisma/client";
import { LucideUploadCloud } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";

const initialState = (product: Product) => ({
  ...product,
  errors: {},
  success: false,
});

export default function ProductForm({ product }: { product?: Product | null }) {
  const { categories } = useCategories();

  const [file, setFile] = useState<File | null>(null);
  const [state, formAction] = useFormState(
    product == null ? addProduct : updateProduct,
    initialState(product)
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const selectedColors = Array.from(formData.getAll("color"));
    formData.append("selectedColors", JSON.stringify(selectedColors));

    if (product == null) {
      formData.append("id", String(Math.floor(Math.random()*1000000)));
    } else {
      formData.append("id", String(product.id));
    }

    if (file) {
      formData.append("thumbnail", file);
    }
    try {
      await formAction(formData);
      toast.success(
        product == null
          ? "دسته بندی با موفقیت اضافه شد."
          : "دسته بندی با موفقیت ویرایش شد."
      );
    } catch (error) {
      toast.error("خطا در ارسال فرم.");
    }
  };

  // useEffect(() => {
  //   if (state.success) {
  //     toast.success(
  //       product == null
  //         ? "محصول با موفقیت اضافه شد."
  //         : "محصول با موفقیت ویرایش شد."
  //     );
  //   }
  // }, [product, state.success]);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="relative h-20">
        <input
          type="text"
          id="title"
          name="title"
          placeholder=""
          required
          defaultValue={product?.title || ""}
          className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500"
        />
        {state.errors?.title && (
          <div className="text-red-600 text-xs">{state.errors?.title}</div>
        )}
        <label
          htmlFor="title"
          className="absolute right-3 top-2 text-gray-500 text-sm duration-300 transform -translate-y-4 scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 dark:peer-focus:text-blue-500"
        >
          نام محصول
        </label>
      </div>

      <div className="relative h-20">
        <input
          type="text"
          id="en_title"
          name="en_title"
          placeholder=""
          required
          defaultValue={product?.en_title || ""}
          className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500"
        />
        {state.errors?.en_title && (
          <div className="text-red-600 text-xs">{state.errors?.en_title}</div>
        )}
        <label
          htmlFor="en_title"
          className="absolute right-3 top-2 text-gray-500 text-sm duration-300 transform -translate-y-4 scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 dark:peer-focus:text-blue-500"
        >
          نام انگلیسی محصول
        </label>
      </div>

      <div className="relative h-20">
        <input
          type="text"
          id="seller"
          name="seller"
          placeholder=""
          required
          className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500"
        />
        {state.errors?.seller && (
          <div className="text-red-600 text-xs">{state.errors?.seller}</div>
        )}
        <label
          htmlFor="seller"
          className="absolute right-3 top-2 text-gray-500 text-sm duration-300 transform -translate-y-4 scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 dark:peer-focus:text-blue-500"
        >
          فروشنده
        </label>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[
          { id: "price", label: "قیمت محصول", type: "number" },
          { id: "discount", label: "میزان تخفیف", type: "number" },
          {
            id: "discount_price",
            label: "قیمت بااحتساب تخفیف",
            type: "number",
          },
          {
            id: "recommended_percent",
            label: "درصد پیشنهاد محصول",
            type: "number",
          },
          { id: "guarantee", label: "نام شرکت گارانتی", type: "text" },
          { id: "likes", label: "میزان رضایت از کالا", type: "number" },
          { id: "rating", label: "امتیاز محصول", type: "number" },
          { id: "voter", label: "تعداد امتیاز دهندگان", type: "number" },
        ].map(({ id, label, type }) => (
          <div key={id} className="relative">
            <input
              type={type}
              id={id}
              name={id}
              placeholder=""
              required
              defaultValue={product?.[id] || ""}
              className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500"
            />
            {state.errors?.[id] && (
              <div className="text-red-600 text-xs">{state.errors?.[id]}</div>
            )}
            <label
              htmlFor={id}
              className="absolute right-3 top-2 text-gray-500 text-sm duration-300 transform -translate-y-4 scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 dark:peer-focus:text-blue-500"
            >
              {label}
            </label>
          </div>
        ))}
      </div>
      <div>
        <div className="text-gray-800 mb-2">رنگ های محصول را انتخاب کنید:</div>
        <div className="space-y-2">
          {["قرمز#FF0000", "مشکی#000", "سبز#00ff15", "آبی#0051ff"].map(
            (color, index) => (
              <div className="relative flex items-center" key={index}>
                <input
                  type="checkbox"
                  id={`color-${index}`}
                  name="colors"
                  value={color}
                  className="ml-2"
                />
                <label
                  htmlFor={`color-${index}`}
                  className="text-gray-500 text-sm duration-300 transform peer-focus:text-blue-600 dark:text-gray-400 dark:peer-focus:text-blue-500"
                >
                  {color.split("#")[0]}
                </label>
                {state.errors?.color && (
                  <div className="text-red-600 text-xs absolute top-6 left-0">
                    {state.errors?.color}
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>

      <div>
        <label htmlFor="sizes" className="block text-gray-800 mb-2">
          سایز محصول را انتخاب کنید:
        </label>
        <select
          name="sizes"
          id="sizes"
          className="block w-full rounded-lg border-2 border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500"
        >
          <option value="-1">سایز محصول را انتخاب کنید</option>
          {Array.from({ length: 100 }).map((_, index) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="categoryId" className="block text-gray-800 mb-2">
          دسته‌بندی مورد نظر را انتخاب کنید:
        </label>
        <select
          className="block w-full rounded-lg border-2 border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500"
          required
          name="categoryId"
          id="categoryId"
        >
          <option value="-1">دسته‌بندی مورد نظر را انتخاب کنید</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>
      </div>

      <div className="relative h-52">
        <textarea
          id="description"
          name="description"
          required
          rows={8}
          placeholder=""
          defaultValue={product?.description || ""}
          className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500"
        />
        {state.errors?.description && (
          <div className="text-red-600 text-xs">
            {state.errors?.description}
          </div>
        )}
        <label
          htmlFor="description"
          className="absolute right-3 top-2 text-gray-500 text-sm duration-300 transform -translate-y-4 scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 dark:peer-focus:text-blue-500"
        >
          معرفی محصول
        </label>
      </div>
      {product != null ? (
        <div className="mb-5 dark:border-gray-700 dark:bg-gray-900 rounded-lg border border-gray-100 p-1">
          <input
            type="file"
            id="thumbnail"
            name="thumbnail"
            required={product == null}
            className="h-full w-full"
            onChange={handleFileChange}
          />
        </div>
      ) : (
        <div className="h-40 bg-red-50 dark:border-gray-700 dark:bg-gray-900 rounded-lg border-dashed border-2 border-gray-300">
          <input
            type="file"
            id="thumbnail"
            name="thumbnail"
            required={product == null}
            onChange={handleFileChange}
            className="opacity-0 h-full w-full bg-transparent border-0"
          />
          <div className="flex -mt-32 items-center justify-center flex-col gap-2">
            <LucideUploadCloud size={35} className="text-red-600" />
            <p className="font-medium text-gray-400">
              {file != null ? (
                <span className="text-center flex flex-col items-center justify-center">
                  تصویر آپلود شد
                  <br />
                  {file?.name}
                </span>
              ) : (
                "تصویر محصول را آپلود کنید"
              )}
            </p>
          </div>
          {state.errors?.thumbnail && (
            <div className="text-destructive text-xs">
              {state.errors?.thumbnail}
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
      variant="destructive"
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
