"use client";

import { addArticle, updateArticle } from "@/app/admin/articles/action";
import { Button } from "@/components/ui/button";
import { Article, Category } from "@/utils/types";
import { Editor } from "@tinymce/tinymce-react";
import { UploadCloud } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import TagInput from "./TagInput";

export default function ArticleForm({
  article,
  categories,
}: {
  article?: Article;
  categories: Category[];
}) {
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [tags, setTags] = useState<string[]>(article?.tags || []);
  const [content, setContent] = useState(article?.content || "");
  const [selectedCategory, setSelectedCategory] = useState(
    article?.categoryId?.toString() || ""
  );
  const [state, formAction] = useFormState(
    article == null ? addArticle : updateArticle,
    {}
  );

  const handleCoverFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCoverFile(e.target.files[0]);
    }
  };

  // images

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("tags", JSON.stringify(tags));
    formData.append("content", content);

    if (article != null) {
      formData.append("_id", article._id.toString());
    } else {
      formData.append("_id", crypto.randomUUID());
    }

    if (coverFile) {
      formData.append("cover", coverFile);
    }

    formAction(formData);
  };

  useEffect(() => {
    if (state.success) {
      toast.success(
        article == null
          ? "مقاله با موفقیت اضافه شد."
          : "مقاله با موفقیت ویرایش شد."
      );
    }
  }, [article, state.success]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="h-20 relative">
        <input
          type="text"
          id="title"
          name="title"
          placeholder=""
          required
          defaultValue={article?.title || ""}
          className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-neutral-300 bg-neutral-50 px-2.5 pb-2.5 pt-5 text-sm text-neutral-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:bg-neutral-900 dark:text-white dark:focus:border-blue-500"
        />
        {state.errors?.title && (
          <div className="text-destructive text-xs">{state.errors.title}</div>
        )}
        <label
          htmlFor="title"
          className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-neutral-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-neutral-400 peer-focus:dark:text-blue-500"
        >
          نام مقاله
        </label>
      </div>
      <div className="h-20 relative">
        <input
          type="text"
          id="author"
          name="author"
          placeholder=""
          required
          defaultValue={article?.author || ""}
          className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-neutral-300 bg-neutral-50 px-2.5 pb-2.5 pt-5 text-sm text-neutral-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:bg-neutral-900 dark:text-white dark:focus:border-blue-500"
        />
        {state.errors?.author && (
          <div className="text-destructive text-xs">{state.errors.author}</div>
        )}
        <label
          htmlFor="author"
          className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-neutral-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-neutral-400 peer-focus:dark:text-blue-500"
        >
          نام نویسنده
        </label>
      </div>
      <div className="h-20 relative">
        <input
          type="text"
          id="readingTime"
          name="readingTime"
          placeholder=""
          required
          defaultValue={article?.readingTime || ""}
          className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-neutral-300 bg-neutral-50 px-2.5 pb-2.5 pt-5 text-sm text-neutral-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:bg-neutral-900 dark:text-white dark:focus:border-blue-500"
        />
        {state.errors?.readingTime && (
          <div className="text-destructive text-xs">
            {state.errors.readingTime}
          </div>
        )}
        <label
          htmlFor="readingTime"
          className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-neutral-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-neutral-400 peer-focus:dark:text-blue-500"
        >
          زمان مورد نیاز برای مطالعه
        </label>
      </div>
      <div className="h-20 relative">
        <input
          type="text"
          id="source"
          name="source"
          placeholder=""
          required
          defaultValue={article?.source || ""}
          className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-neutral-300 bg-neutral-50 px-2.5 pb-2.5 pt-5 text-sm text-neutral-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:bg-neutral-900 dark:text-white dark:focus:border-blue-500"
        />
        {state.errors?.source && (
          <div className="text-destructive text-xs">{state.errors.source}</div>
        )}
        <label
          htmlFor="source"
          className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-neutral-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-neutral-400 peer-focus:dark:text-blue-500"
        >
          منبع
        </label>
      </div>

      {/* Select Category */}
      <div>
        <label htmlFor="categoryId" className="block text-neutral-800 dark:text-neutral-400 mb-2">
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
          }}
        >
          <option value="">دسته‌بندی مورد نظر را انتخاب کنید</option>
          {categories.map((category: Category) => (
            <option
              key={category._id.toString()}
              value={category._id.toString()}
            >
              {category.title}
            </option>
          ))}
        </select>
      </div>

      <div className="relative my-8">
        <label
          htmlFor="tags"
          className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-neutral-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-neutral-400 peer-focus:dark:text-blue-500"
        >
          تگ‌ها
        </label>
        <TagInput
          tags={tags}
          onTagsChange={setTags}
          placeholder="تگ را نوشته و Enter را بزنید."
        />
        {state.errors?.tags && (
          <div className="text-red-600 text-xs">{state.errors.tags}</div>
        )}
      </div>

      <Editor
        apiKey={process.env.NEXT_PUBLIC_TINYMCE_KEY}
        init={{
          plugins: [
            "anchor",
            "autolink",
            "charmap",
            "codesample",
            "emoticons",
            "image",
            "link",
            "lists",
            "media",
            "searchreplace",
            "table",
            "visualblocks",
            "wordcount",
            "checklist",
            "mediaembed",
            "casechange",
            "export",
            "formatpainter",
            "pageembed",
            "a11ychecker",
            "tinymcespellchecker",
            "permanentpen",
            "powerpaste",
            "advtable",
            "advcode",
            "editimage",
            "advtemplate",
            "ai",
            "mentions",
            "tinycomments",
            "tableofcontents",
            "footnotes",
            "mergetags",
            "autocorrect",
            "typography",
            "inlinecss",
            "markdown",
          ],
          toolbar:
            "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
          font_family_formats: "irsans",
          tinycomments_mode: "embedded",
          tinycomments_author: "Author name",
          mergetags_list: [
            { value: "First.Name", title: "First Name" },
            { value: "Email", title: "Email" },
          ],
          ai_request: (request, respondWith) =>
            respondWith.string(() =>
              Promise.reject("See docs to implement AI Assistant")
            ),
        }}
        initialValue={content}
        onEditorChange={(newContent) => setContent(newContent)}
      />

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
              required={article == null}
              onChange={handleCoverFileChange}
              className="opacity-0 h-full w-24 bg-transparent border-0"
            />
            <UploadCloud size={30} className="absolute left-0" />
          </label>
          {article != null && (
            <Image
              src={article.cover}
              height={70}
              width={70}
              alt="Product Image"
              className="object-cover border rounded-lg p-1"
            />
          )}
        </div>
      </div>
      <SubmitButton title={article ? "ویرایش" : "افزودن"} />
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
        <span>{pending ? `در حال ${title} ...` : `${title} مقاله`}</span>
        {pending && (
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-dotted border-neutral-800"></div>
        )}
      </div>
    </Button>
  );
};
