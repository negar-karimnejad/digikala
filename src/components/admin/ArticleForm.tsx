"use client";

import { addArticle, updateArticle } from "@/app/admin/articles/action";
import { Button } from "@/components/ui/button";
import { Article } from "@/types/types";
import { Editor } from "@tinymce/tinymce-react";
import { UploadCloud } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import TagInput from "./TagInput";

export default function ArticleForm({ article }: { article?: Article }) {
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [tags, setTags] = useState<string[]>(article?.tags || []);
  const [content, setContent] = useState(article?.content || "");

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
          className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500"
        />
        {state.errors?.title && (
          <div className="text-destructive text-xs">{state.errors.title}</div>
        )}
        <label
          htmlFor="title"
          className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
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
          className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500"
        />
        {state.errors?.author && (
          <div className="text-destructive text-xs">{state.errors.author}</div>
        )}
        <label
          htmlFor="author"
          className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
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
          className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500"
        />
        {state.errors?.readingTime && (
          <div className="text-destructive text-xs">
            {state.errors.readingTime}
          </div>
        )}
        <label
          htmlFor="readingTime"
          className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
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
          className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500"
        />
        {state.errors?.source && (
          <div className="text-destructive text-xs">{state.errors.source}</div>
        )}
        <label
          htmlFor="source"
          className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
        >
          منبع
        </label>
      </div>

      <div className="relative mb-8">
        <label
          htmlFor="tags"
          className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
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
            className="border-b py-2 px-4 rounded-lg cursor-pointer relative w-40 whitespace-nowrap flex items-center text-gray-500 dark:text-gray-400"
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
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-dotted border-gray-800"></div>
        )}
      </div>
    </Button>
  );
};
