"use client";

import { addCategory, updateCategory } from "@/app/admin/categories/action";
import { Button } from "@/components/ui/button";
import { Category } from "@/utils/types";
import { UploadCloud } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";

export default function CategoryForm({ category }: { category?: Category }) {
  const [iconFile, setIconFile] = useState<File | null>(null);
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [heroFiles, setHeroFiles] = useState<File[]>([]);
  const [bannerFiles, setBannerFiles] = useState<File[]>([]);

  const [state, formAction] = useFormState(
    category == null ? addCategory : updateCategory,
    {}
  );

  const handleCoverFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCoverFile(e.target.files[0]);
    }
  };

  const handleIconFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIconFile(e.target.files[0]);
    }
  };

  const handleHeroFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setHeroFiles((prevFiles) => [
        ...prevFiles,
        ...Array.from(e.target.files),
      ]);
    }
  };

  const handleBannerFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setBannerFiles((prevFiles) => [
        ...prevFiles,
        ...Array.from(e.target.files),
      ]);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    if (category != null) {
      formData.append("_id", category._id.toString());
    } else {
      formData.append("_id", crypto.randomUUID());
    }

    if (coverFile) {
      formData.append("cover", coverFile);
    }
    if (iconFile) {
      formData.append("icon", iconFile);
    }

    const seenFiles = new Set();
    heroFiles.forEach((file) => {
      const fileName = file.name;
      if (!seenFiles.has(fileName)) {
        seenFiles.add(fileName);
        formData.append("hero", file);
      } else {
        console.warn("Duplicate file detected:", file);
        return;
      }
    });

    const seenBannerFiles = new Set();
    bannerFiles.forEach((file) => {
      const fileName = file.name;
      if (!seenBannerFiles.has(fileName)) {
        seenBannerFiles.add(fileName);
        formData.append("banner", file);
      } else {
        console.warn("Duplicate banner file detected:", file);
        return;
      }
    });

    formAction(formData);
  };

  useEffect(() => {
    if (state.success) {
      toast.success(
        category == null
          ? "دسته بندی با موفقیت اضافه شد."
          : "دسته بندی با موفقیت ویرایش شد."
      );
    }
  }, [category, state.success]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="h-20 relative">
        <input
          type="text"
          id="title"
          name="title"
          placeholder=""
          required
          defaultValue={category?.title || ""}
          className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-neutral-300 bg-neutral-50 px-2.5 pb-2.5 pt-5 text-sm text-neutral-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:bg-neutral-900 dark:text-white dark:focus:border-blue-500"
        />
        {state.errors?.title && (
          <div className="text-destructive text-xs">{state.errors.title}</div>
        )}
        <label
          htmlFor="title"
          className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-neutral-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-neutral-400 peer-focus:dark:text-blue-500"
        >
          نام دسته بندی
        </label>
      </div>

      <div className="h-20 relative">
        <input
          type="text"
          id="href"
          name="href"
          placeholder=""
          required
          defaultValue={category?.href}
          className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-neutral-300 bg-neutral-50 px-2.5 pb-2.5 pt-5 text-sm text-neutral-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:bg-neutral-900 dark:text-white dark:focus:border-blue-500"
        />
        {state.errors?.href && (
          <div className="text-destructive text-xs">{state.errors?.href}</div>
        )}
        <label
          htmlFor="href"
          className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-neutral-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-neutral-400 peer-focus:dark:text-blue-500"
        >
          آدرس لینک
        </label>
      </div>

      <div className="flex flex-col gap-3 justify-between mt-5">
        <div className="flex items-center justify-between gap-2">
          <label
            htmlFor="cover"
            className="border-b py-2 px-4 rounded-lg cursor-pointer relative w-40 whitespace-nowrap flex items-center text-neutral-500 dark:text-neutral-400"
          >
            آپلود تصویر کاور
            <input
              type="file"
              id="cover"
              name="cover"
              required={category == null}
              onChange={handleCoverFileChange}
              className="opacity-0 h-full w-24 bg-transparent border-0"
            />
            <UploadCloud size={30} className="absolute left-0" />
          </label>
          {category != null && (
            <Image
              src={category.cover[0]}
              height={70}
              width={70}
              alt="Product Image"
              className="object-cover border rounded-lg p-1"
            />
          )}
        </div>
        <div className="flex items-center justify-between gap-2">
          <label
            htmlFor="icon"
            className="border-b py-2 px-4 cursor-pointer relative w-40 whitespace-nowrap flex items-center text-neutral-500 dark:text-neutral-400"
          >
            آپلود تصویر آیکون
            <input
              type="file"
              id="icon"
              name="icon"
              required={category == null}
              onChange={handleIconFileChange}
              className="opacity-0 h-full w-24 bg-transparent border-0"
            />
            <UploadCloud size={30} className="absolute left-0" />
          </label>
          {category != null && (
            <Image
              src={category.icon}
              height={70}
              width={70}
              alt="Product Image"
              className="bg-white object-cover border rounded-lg p-1"
            />
          )}
        </div>

        {/* Hero */}
        <div className="flex flex-col gap-3 justify-between mt-5">
          <div className="flex items-center justify-between gap-2">
            <label
              htmlFor="hero"
              className="border-b py-2 px-4 cursor-pointer relative w-40 whitespace-nowrap flex items-center text-neutral-500 dark:text-neutral-400"
            >
              آپلود تصاویر Hero
              <input
                type="file"
                id="hero"
                name="hero"
                multiple
                accept="image/*"
                onChange={handleHeroFilesChange}
                className="opacity-0 h-full w-28 bg-transparent border-0"
              />
              <UploadCloud size={30} className="absolute -left-1" />
            </label>
            <div className="flex flex-wrap gap-2 mt-2">
              {heroFiles.map((file, index) => (
                <div
                  key={index}
                  className="relative w-14 h-14 rounded-lg border p-1"
                >
                  <Image
                    src={URL.createObjectURL(file)}
                    alt={`Hero Image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
            {category?.hero.length > 0 && category.hero && (
              <div className="flex flex-col gap-2 mt-2">
                {category.hero.map((url, index) => (
                  <Image
                    key={index}
                    src={url}
                    height={70}
                    width={70}
                    alt={`Existing Hero Image ${index + 1}`}
                    className="object-cover border rounded-lg p-1"
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Banner */}
        <div className="flex flex-col gap-3 justify-between mt-5">
          <div className="flex items-center justify-between gap-2">
            <label
              htmlFor="banner"
              className="border-b py-2 px-4 cursor-pointer relative w-40 whitespace-nowrap flex items-center text-neutral-500 dark:text-neutral-400"
            >
              آپلود تصاویر بنر
              <input
                type="file"
                id="banner"
                name="banner"
                multiple
                accept="image/*"
                onChange={handleBannerFilesChange}
                className="opacity-0 h-full w-28 bg-transparent border-0"
              />
              <UploadCloud size={30} className="absolute left-0" />
            </label>
            <div className="flex flex-wrap gap-2 mt-2">
              {bannerFiles.map((file, index) => (
                <div
                  key={index}
                  className="relative w-14 h-14 rounded-lg border p-1"
                >
                  <Image
                    src={URL.createObjectURL(file)}
                    alt={`Banner Image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
            {category?.banner && (
              <div className="flex flex-col gap-2 mt-2">
                {category.banner.map((url, index) => (
                  <Image
                    key={index}
                    src={url}
                    height={70}
                    width={70}
                    alt={`Existing Banner Image ${index + 1}`}
                    className="object-cover border rounded-lg p-1"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
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
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-dotted border-neutral-800"></div>
        )}
      </div>
    </Button>
  );
};
