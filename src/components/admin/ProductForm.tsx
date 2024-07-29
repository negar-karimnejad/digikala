"use client";

import { addProduct, updateProduct } from "@/app/admin/products/action";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/data";
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("id", String(state.id));
    if (file) {
      formData.append("thumbnail", file);
    }
    formAction(formData);
  };

  useEffect(() => {
    if (state.success) {
      toast.success(
        product == null
          ? "محصول با موفقیت اضافه شد."
          : "محصول با موفقیت ویرایش شد."
      );
    }
  }, [product, state.success]);

  return (
    <form
      onSubmit={handleSubmit}
      // action={async (formData) => {
      //   formData.append("id", String(product.id));
      //   if (file) {
      //     formData.append("thumbnail", file);
      //   }
      //   await formAction(formData);
      //   if (product == null) {
      //     return toast.success("محصول با موفقیت اضافه شد.");
      //   }
      //   return toast.success("محصول با موفقیت ویرایش شد.");
      // }}
    >
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
        {state.errors.title && (
          <div className="text-destructive text-xs">{state.errors.title}</div>
        )}
        <label
          htmlFor="title"
          className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
        >
          نام محصول
        </label>
      </div>
      <div className="h-20 relative">
        <input
          type="text"
          id="en_title"
          name="en_title"
          placeholder=""
          required
          defaultValue={product?.en_title || ""}
          className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500"
        />
        {state.errors.en_title && (
          <div className="text-destructive text-xs">
            {state.errors.en_title}
          </div>
        )}
        <label
          htmlFor="en_title"
          className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
        >
          نام انگلیسی محصول
        </label>
      </div>
      <div className="h-20 relative">
        <input
          type="text"
          id="seller"
          name="seller"
          placeholder=""
          required
          defaultValue={product?.seller || ""}
          className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500"
        />
        {state.errors.seller && (
          <div className="text-destructive text-xs">{state.errors.seller}</div>
        )}
        <label
          htmlFor="seller"
          className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
        >
          فروشنده
        </label>
      </div>

      <div>
        <div>رنگ های محصول را انتخاب کنید:</div>
        <div className="relative">
          <input
            type="checkbox"
            id="color"
            name="color"
            value="قرمز#FF0000"
            required
            defaultValue={product?.color || ""}
          />
          {state.errors.color && (
            <div className="text-destructive text-xs">{state.errors.color}</div>
          )}
          <label
            htmlFor="color"
            className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            قرمز
          </label>
        </div>
        <div className="relative">
          <input
            type="checkbox"
            id="color"
            name="color"
            value="مشکی#000"
            required
            defaultValue={product?.color || ""}
          />
          {state.errors.color && (
            <div className="text-destructive text-xs">{state.errors.color}</div>
          )}
          <label
            htmlFor="color"
            className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            مشکی
          </label>
        </div>
        <div className="relative">
          <input
            type="checkbox"
            id="color"
            name="color"
            value="سبز#00ff15"
            required
            defaultValue={product?.color || ""}
          />
          {state.errors.color && (
            <div className="text-destructive text-xs">{state.errors.color}</div>
          )}
          <label
            htmlFor="color"
            className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            سبز
          </label>
        </div>
        <div className="relative">
          <input
            type="checkbox"
            id="color"
            name="color"
            value="آبی#0051ff"
            required
            defaultValue={product?.color || ""}
          />
          {state.errors.color && (
            <div className="text-destructive text-xs">{state.errors.color}</div>
          )}
          <label
            htmlFor="color"
            className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            آبی
          </label>
        </div>
      </div>
      <div>
        <select name="" id="">
          <option value="-1">سایز محصول را انتخاب کنید</option>
          {Array.from({ length: 100 }).map((_, index) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select name="" id="">
          <option value="-1">دسته بندی محصول را انتخاب کنید</option>
          {categories.map((category) => (
            <option key={category.id}>{category.title}</option>
          ))}
        </select>
      </div>
      <div className="h-52 relative">
        <textarea
          id="description"
          name="description"
          required
          rows={8}
          defaultValue={product?.description || ""}
          className="peer max-h-48 block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500"
        />
        {state.errors.description && (
          <div className="text-destructive text-xs">
            {state.errors.description}
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
          {state.errors.price && (
            <div className="text-destructive text-xs">{state.errors.price}</div>
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
          {state.errors.discount && (
            <div className="text-destructive text-xs">
              {state.errors.discount}
            </div>
          )}
          <label
            htmlFor="discount"
            className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            میزان تخفیف
          </label>
        </div>
        <div className="relative w-full">
          <input
            type="number"
            id="discount_price"
            name="discount_price"
            placeholder=""
            required
            defaultValue={product?.discount_price || ""}
            className="peer max-h-20 block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500"
          />
          {state.errors.discount_price && (
            <div className="text-destructive text-xs">
              {state.errors.discount_price}
            </div>
          )}
          <label
            htmlFor="discount_price"
            className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            قیمت بااحتساب تخفیف
          </label>
        </div>
        <div className="relative w-full">
          <input
            type="number"
            id="recommended_percent"
            name="recommended_percent"
            placeholder=""
            required
            defaultValue={product?.recommended_percent || ""}
            className="peer max-h-20 block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500"
          />
          {state.errors.recommended_percent && (
            <div className="text-destructive text-xs">
              {state.errors.recommended_percent}
            </div>
          )}
          <label
            htmlFor="recommended_percent"
            className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            درصد پیشنهاد محصول
          </label>
        </div>
        <div className="relative w-full">
          <input
            type="text"
            id="guarantee"
            name="guarantee"
            placeholder=""
            required
            defaultValue={product?.guarantee || ""}
            className="peer max-h-20 block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500"
          />
          {state.errors.guarantee && (
            <div className="text-destructive text-xs">
              {state.errors.guarantee}
            </div>
          )}
          <label
            htmlFor="guarantee"
            className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            نام شرکت گارانتی
          </label>
        </div>
        <div className="relative w-full">
          <input
            type="number"
            id="likes"
            name="likes"
            placeholder=""
            required
            defaultValue={product?.likes || ""}
            className="peer max-h-20 block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500"
          />
          {state.errors.likes && (
            <div className="text-destructive text-xs">{state.errors.likes}</div>
          )}
          <label
            htmlFor="likes"
            className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            میزان رضایت از کالا
          </label>
        </div>
        <div className="relative w-full">
          <input
            type="number"
            id="rating"
            name="rating"
            placeholder=""
            required
            defaultValue={product?.rating || ""}
            className="peer max-h-20 block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500"
          />
          {state.errors.rating && (
            <div className="text-destructive text-xs">
              {state.errors.rating}
            </div>
          )}
          <label
            htmlFor="rating"
            className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            امتیاز محصول
          </label>
        </div>
        <div className="relative w-full">
          <input
            type="number"
            id="voter"
            name="voter"
            placeholder=""
            required
            defaultValue={product?.voter || ""}
            className="peer max-h-20 block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500"
          />
          {state.errors.voter && (
            <div className="text-destructive text-xs">{state.errors.voter}</div>
          )}
          <label
            htmlFor="voter"
            className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            تعداد امتیاز دهندگان
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
          {state.errors.thumbnail && (
            <div className="text-destructive text-xs">
              {state.errors.thumbnail}
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
