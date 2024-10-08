"use client";
import { addProduct, updateProduct } from "@/app/admin/products/action";
import { Button } from "@/components/ui/button";
import {
  Category,
  Color,
  Feature,
  Product,
  Submenu,
  SubmenuItem,
} from "@/utils/types";
import { LucideUploadCloud, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";

const initialState = (product: Product) => ({
  ...product,
  errors: {},
  success: false,
});

export default function ProductForm({
  product,
  categories,
}: {
  product?: Product;
  categories: Category[];
}) {
  const [selectedCategory, setSelectedCategory] = useState(
    product?.category._id.toString() || ""
  );
  const [selectedSubmenu, setSelectedSubmenu] = useState<string | undefined>(
    product?.submenuId
  );
  const [selectedSubmenuItem, setSelectedSubmenuItem] = useState<
    string | undefined
  >(product?.submenuItemId);

  const isSubmenu = (submenu: Submenu): submenu is Submenu => {
    return (submenu as Submenu).items !== undefined;
  };

  // Filtered submenus and submenu items
  const filteredSubmenus =
    categories?.find((category) => category._id.toString() === selectedCategory)
      ?.submenus || [];

  const filteredSubmenuItems =
    filteredSubmenus
      .filter(isSubmenu) // Narrow down to Submenu type
      .find((submenu) => submenu._id.toString() === selectedSubmenu)?.items ||
    [];

  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [additionalFiles, setAdditionalFiles] = useState<File[]>([]);
  const [colors, setColors] = useState<Color[]>(
    product?.colors ? product.colors : []
  );
  const [features, setFeatures] = useState<Feature[]>(
    product?.features ? product.features : []
  );

  const [state, formAction] = useFormState(
    product == null ? addProduct : updateProduct,
    initialState(product)
  );

  const handleAdditionalFilesChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files) {
      setAdditionalFiles((prevFiles) => [
        ...prevFiles,
        ...Array.from(e.target.files),
      ]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (!file.type.startsWith("image/")) {
        toast.error("Please upload a valid image file.");
        return;
      }
      setThumbnailFile(file);
    }
  };

  const addFeature = () => {
    setFeatures((prev) => [
      ...prev,
      {
        key: "",
        value: "",
        productId: product?._id,
      },
    ]);
  };

  const addColor = () => {
    setColors((prev) => [
      ...prev,
      { name: "", hex: "", productId: product?._id },
    ]);
  };

  const handleFeatureChange = (
    index: number,
    field: "key" | "value",
    value: string
  ) => {
    const updatedFeatures = [...features];
    updatedFeatures[index] = { ...updatedFeatures[index], [field]: value };
    setFeatures(updatedFeatures);
  };

  const removeFeature = (index: number) => {
    setFeatures((prev) => prev.filter((_, i) => i !== index));
  };

  const removeColor = (index: number) => {
    setColors((prev) => prev.filter((_, i) => i !== index));
  };

  const handleRemoveImage = (index: number) => {
    setAdditionalFiles(additionalFiles.filter((_, i) => i !== index));
  };

  const handleColorChange = (
    index: number,
    field: "name" | "hex",
    value: string
  ) => {
    const updatedColors = [...colors];
    updatedColors[index] = { ...updatedColors[index], [field]: value };
    setColors(updatedColors);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // Append additional fields and files
    formData.append("colors", JSON.stringify(colors));
    formData.append("features", JSON.stringify(features));
    formData.append("_id", product ? String(product._id) : crypto.randomUUID());

    if (thumbnailFile) {
      formData.append("thumbnail", thumbnailFile);
    }

    // Track files to avoid duplicates
    const seenFiles = new Set();
    additionalFiles.forEach((file) => {
      const fileName = file.name;
      if (!seenFiles.has(fileName)) {
        seenFiles.add(fileName);
        formData.append("image", file);
      } else {
        console.warn("Duplicate file detected:", file);
      }
    });

    try {
      formAction(formData);
      toast.success(
        product == null
          ? "محصول با موفقیت اضافه شد."
          : "محصول با موفقیت ویرایش شد."
      );
    } catch (error) {
      toast.error("خطا در ارسال اطلاعات. لطفا دوباره تلاش کنید.");
      console.error("Submit Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 pb-5">
      <div className="relative h-20">
        <input
          type="text"
          id="title"
          name="title"
          placeholder=""
          required
          defaultValue={product?.title || ""}
          className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-neutral-300 bg-neutral-50 px-2.5 pb-2.5 pt-5 text-sm text-neutral-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:bg-neutral-900 dark:text-white dark:focus:border-blue-500"
        />
        {state.errors?.title && (
          <div className="text-red-600 text-xs">{state.errors?.title}</div>
        )}
        <label
          htmlFor="title"
          className="absolute right-3 top-2 text-neutral-500 text-sm duration-300 transform -translate-y-4 scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:peer-focus:text-blue-500"
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
          className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-neutral-300 bg-neutral-50 px-2.5 pb-2.5 pt-5 text-sm text-neutral-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:bg-neutral-900 dark:text-white dark:focus:border-blue-500"
        />
        {state.errors?.en_title && (
          <div className="text-red-600 text-xs">{state.errors?.en_title}</div>
        )}
        <label
          htmlFor="en_title"
          className="absolute right-3 top-2 text-neutral-500 text-sm duration-300 transform -translate-y-4 scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:peer-focus:text-blue-500"
        >
          نام انگلیسی محصول
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
            step: "0.1",
          },
          { id: "guarantee", label: "نام شرکت گارانتی", type: "text" },
          {
            id: "likes",
            label: "میزان رضایت از کالا",
            type: "number",
            step: "0.1",
          },
          { id: "rating", label: "امتیاز محصول", type: "number", step: "0.1" },
          { id: "voter", label: "تعداد امتیاز دهندگان", type: "number" },
        ].map(({ id, label, type, step }) => (
          <div key={id} className="relative">
            <input
              type={type}
              id={id}
              name={id}
              step={step}
              placeholder=""
              defaultValue={product?.[id] || ""}
              className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-neutral-300 bg-neutral-50 px-2.5 pb-2.5 pt-5 text-sm text-neutral-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:bg-neutral-900 dark:text-white dark:focus:border-blue-500"
            />
            {state.errors?.[id] && (
              <div className="text-red-600 text-xs">{state.errors?.[id]}</div>
            )}
            <label
              htmlFor={id}
              className="absolute right-3 top-2 text-neutral-500 text-sm duration-300 transform -translate-y-4 scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:peer-focus:text-blue-500"
            >
              {label}
            </label>
          </div>
        ))}
      </div>

      <div>
        <label
          htmlFor="sizes"
          className="block text-neutral-800 mb-2 dark:text-neutral-300"
        >
          سایز محصول را انتخاب کنید:
        </label>
        <select
          name="sizes"
          id="sizes"
          defaultValue={product?.sizes ? String(product.sizes) : ""}
          className="block w-full rounded-lg border-2 border-neutral-300 bg-neutral-50 px-3 py-2 text-sm text-neutral-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:bg-neutral-900 dark:text-white dark:focus:border-blue-500"
        >
          <option value="-1">سایز محصول را انتخاب کنید</option>
          {Array.from({ length: 100 }).map((_, index) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </div>

      {/* Select Category */}
      <div>
        <label
          htmlFor="categoryId"
          className="block text-neutral-800 mb-2 dark:text-neutral-300"
        >
          دسته‌بندی مورد نظر را انتخاب کنید:
        </label>
        <select
          className="block w-full rounded-lg border-2 border-neutral-300 bg-neutral-50 px-3 py-2 text-sm text-neutral-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:bg-neutral-900 dark:text-white dark:focus:border-blue-500"
          required
          name="categoryId"
          id="categoryId"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setSelectedSubmenu(undefined);
            setSelectedSubmenuItem(undefined);
          }}
        >
          <option value="">دسته‌بندی مورد نظر را انتخاب کنید</option>
          {categories?.map((category: Category) => (
            <option
              key={category._id.toString()}
              value={category._id.toString()}
            >
              {category.title}
            </option>
          ))}
        </select>
      </div>

      {/* Select Submenu */}
      <div>
        <label
          htmlFor="submenuId"
          className="block text-neutral-800 mb-2 dark:text-neutral-300"
        >
          زیرمجموعه دسته‌بندی مورد نظر را انتخاب کنید:
        </label>
        <select
          className="disabled:cursor-not-allowed disabled:opacity-50 block w-full rounded-lg border-2 border-neutral-300 bg-neutral-50 px-3 py-2 text-sm text-neutral-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:bg-neutral-900 dark:text-white dark:focus:border-blue-500"
          required
          disabled={!filteredSubmenus.length}
          name="submenuId"
          id="submenuId"
          value={selectedSubmenu}
          onChange={(e) => {
            setSelectedSubmenu(e.target.value);
            setSelectedSubmenuItem(undefined); // Reset submenu item
          }}
        >
          <option value="">زیرمجموعه دسته‌بندی مورد نظر را انتخاب کنید</option>
          {filteredSubmenus.map((submenu: Submenu) => (
            <option key={submenu._id.toString()} value={submenu._id.toString()}>
              {submenu.title}
            </option>
          ))}
        </select>
      </div>

      {/* Select Submenu Item */}
      <div>
        <label
          htmlFor="submenuItemId"
          className="block text-neutral-800 mb-2 dark:text-neutral-300"
        >
          آیتم های زیرمجموعه دسته‌بندی مورد نظر را انتخاب کنید:
        </label>
        <select
          className="disabled:cursor-not-allowed disabled:opacity-50 block w-full rounded-lg border-2 border-neutral-300 bg-neutral-50 px-3 py-2 text-sm text-neutral-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:bg-neutral-900 dark:text-white dark:focus:border-blue-500"
          required
          disabled={!filteredSubmenuItems.length}
          name="submenuItemId"
          id="submenuItemId"
          value={selectedSubmenuItem}
          onChange={(e) => setSelectedSubmenuItem(e.target.value)}
        >
          <option value="">
            آیتم های زیرمجموعه دسته‌بندی مورد نظر را انتخاب کنید
          </option>
          {filteredSubmenuItems.map((submenuItem: SubmenuItem) => (
            <option
              key={submenuItem._id.toString()}
              value={submenuItem._id.toString()}
            >
              {submenuItem.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h3 className="text-neutral-800 mb-2 dark:text-neutral-400">
          ویژگی‌های محصول
        </h3>
        {features.map((feature, index) => (
          <div key={index} className="relative flex gap-2 items-center mb-2">
            <div className="relative w-full">
              <input
                type="text"
                placeholder=""
                value={feature.key}
                onChange={(e) =>
                  handleFeatureChange(index, "key", e.target.value)
                }
                className="peer w-full block appearance-none rounded-l-lg border-0 border-b-2 border-neutral-300 bg-neutral-50 px-2.5 pb-2.5 pt-5 text-sm text-neutral-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:bg-neutral-900 dark:text-white dark:focus:border-blue-500"
              />
              <label
                htmlFor=""
                className="absolute right-3 top-2 text-neutral-500 text-sm duration-300 transform -translate-y-4 scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:peer-focus:text-blue-500"
              >
                ویژگی
              </label>
            </div>
            <div className="relative w-full">
              <input
                type="text"
                placeholder=""
                value={feature.value}
                onChange={(e) =>
                  handleFeatureChange(index, "value", e.target.value)
                }
                className="peer block w-full appearance-none rounded-r-lg border-0 border-b-2 border-neutral-300 bg-neutral-50 px-2.5 pb-2.5 pt-5 text-sm text-neutral-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:bg-neutral-900 dark:text-white dark:focus:border-blue-500"
              />
              <label
                htmlFor=""
                className="absolute right-3 top-2 text-neutral-500 text-sm duration-300 transform -translate-y-4 scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:peer-focus:text-blue-500"
              >
                مقدار
              </label>
            </div>
            <button
              type="button"
              onClick={() => removeFeature(index)}
              className=" text-red-600 text-sm"
            >
              حذف
            </button>
          </div>
        ))}
        <button type="button" onClick={addFeature} className="text-blue-600">
          افزودن ویژگی
        </button>
      </div>

      <div>
        <h3 className="text-neutral-800 mb-2 dark:text-neutral-400">
          رنگ های محصول
        </h3>
        {colors.map((color, index) => (
          <div key={index} className="relative flex gap-2 items-center mb-2">
            <div className="relative w-full">
              <input
                type="text"
                placeholder=""
                value={color.name}
                onChange={(e) =>
                  handleColorChange(index, "name", e.target.value)
                }
                className="peer w-full block appearance-none rounded-l-lg border-0 border-b-2 border-neutral-300 bg-neutral-50 px-2.5 pb-2.5 pt-5 text-sm text-neutral-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:bg-neutral-900 dark:text-white dark:focus:border-blue-500"
              />
              <label
                htmlFor=""
                className="absolute right-3 top-2 text-neutral-500 text-sm duration-300 transform -translate-y-4 scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:peer-focus:text-blue-500"
              >
                نام
              </label>
            </div>
            <div className="relative w-full">
              <input
                type="text"
                placeholder=""
                value={color.hex}
                onChange={(e) =>
                  handleColorChange(index, "hex", e.target.value)
                }
                className="peer block w-full appearance-none rounded-r-lg border-0 border-b-2 border-neutral-300 bg-neutral-50 px-2.5 pb-2.5 pt-5 text-sm text-neutral-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:bg-neutral-900 dark:text-white dark:focus:border-blue-500"
              />
              <label
                htmlFor=""
                className="absolute right-3 top-2 text-neutral-500 text-sm duration-300 transform -translate-y-4 scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:peer-focus:text-blue-500"
              >
                کد
              </label>
            </div>
            <button
              type="button"
              onClick={() => removeColor(index)}
              className=" text-red-600 text-sm"
            >
              حذف
            </button>
          </div>
        ))}
        <button type="button" onClick={addColor} className="text-blue-600">
          افزودن رنگ
        </button>
      </div>

      <div className="relative h-52">
        <textarea
          id="description"
          name="description"
          rows={8}
          placeholder=""
          defaultValue={product?.description || ""}
          className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-neutral-300 bg-neutral-50 px-2.5 pb-2.5 pt-5 text-sm text-neutral-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:bg-neutral-900 dark:text-white dark:focus:border-blue-500"
        />
        {state.errors?.description && (
          <div className="text-red-600 text-xs">
            {state.errors?.description}
          </div>
        )}
        <label
          htmlFor="description"
          className="absolute right-3 top-2 text-neutral-500 text-sm duration-300 transform -translate-y-4 scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:peer-focus:text-blue-500"
        >
          معرفی محصول
        </label>
      </div>

      {product != null ? (
        <div className="mb-5 dark:border-neutral-700 dark:bg-neutral-900 rounded-lg border border-neutral-100 p-1">
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
        <div className="h-40 bg-red-50 dark:border-neutral-700 dark:bg-neutral-900 rounded-lg border-dashed border-2 border-neutral-300">
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
            <p className="font-medium text-neutral-400">
              {thumbnailFile != null ? (
                <span className="text-center flex flex-col items-center justify-center">
                  تصویر کاور آپلود شد
                  <br />
                  {thumbnailFile?.name}
                </span>
              ) : (
                "تصویر کاور محصول را آپلود کنید"
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

      <div className="h-40 bg-red-50 dark:border-neutral-700 dark:bg-neutral-900 rounded-lg border-dashed border-2 border-neutral-300">
        <input
          type="file"
          id="image"
          name="image"
          multiple
          onChange={handleAdditionalFilesChange}
          className="opacity-0 h-full w-full bg-transparent border-0"
        />
        <div className="flex -mt-32 items-center justify-center flex-col gap-2">
          <LucideUploadCloud size={35} className="text-red-600" />
          <p className="font-medium text-neutral-400">
            {additionalFiles.length > 0 ? (
              <span className="text-center flex flex-col items-center justify-center">
                {additionalFiles.length} تصویر آپلود شد
              </span>
            ) : (
              "تصاویر بیشتری برای محصول آپلود کنید"
            )}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        {additionalFiles.map((file, index) => (
          <div key={index} className="relative">
            <Image
              key={index}
              src={URL.createObjectURL(file)}
              height={50}
              width={50}
              alt={`Uploaded image ${index}`}
              className="object-cover border rounded-lg"
            />
            <span
              onClick={() => handleRemoveImage(index)}
              className="cursor-pointer absolute w-4 h-4 flex items-center justify-center -right-2 -top-2 bg-red-500 rounded-full text-white text-xs"
            >
              <X size={16} />
            </span>
          </div>
        ))}
      </div>

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
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-dotted border-neutral-800"></div>
        )}
      </div>
    </Button>
  );
};
