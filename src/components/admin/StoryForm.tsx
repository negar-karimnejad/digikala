"use client";

import { addStory } from "@/app/admin/stories/action";
import { Button } from "@/components/ui/button";
import { UploadCloud } from "lucide-react";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";

export default function StoryForm() {
  const [state, formAction] = useFormState(addStory, {});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formAction(formData);
  };

  useEffect(() => {
    if (state.success) {
      toast.success("داستان با موفقیت اضافه شد.");
    }
  }, [state.success]);
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        hidden
        name="id"
        value={Math.floor(Math.random() * 1000000)}
      />

      <div className="h-20 relative">
        <input
          type="text"
          id="title"
          name="title"
          placeholder=""
          required
          className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-neutral-300 bg-neutral-50 px-2.5 pb-2.5 pt-5 text-sm text-neutral-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:bg-neutral-900 dark:text-white dark:focus:border-blue-500"
        />
        {state.errors?.title && (
          <div className="text-destructive text-xs">{state.errors.title}</div>
        )}
        <label
          htmlFor="title"
          className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-neutral-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-neutral-400 peer-focus:dark:text-blue-500"
        >
          نام داستان
        </label>
      </div>
      <div className="flex flex-col gap-3 justify-between mt-5">
        <div className="flex items-center justify-between gap-2">
          <label
            htmlFor="cover"
            className="border-b py-2 px-4 rounded-lg cursor-pointer relative w-40 whitespace-nowrap flex items-center text-neutral-500 dark:text-neutral-400"
          >
            آپلود کاور
            <input
              type="file"
              id="cover"
              name="cover"
              required
              className="opacity-0  h-full bg-transparent w-20 border-0"
            />
            <UploadCloud size={30} className="absolute left-0" />
          </label>
        </div>
        <div className="flex items-center justify-between gap-2">
          <label
            htmlFor="post"
            className="border-b py-2 px-4 rounded-lg cursor-pointer relative w-40 whitespace-nowrap flex items-center text-neutral-500 dark:text-neutral-400"
          >
            آپلود تصویر
            <input
              type="file"
              id="post"
              name="post"
              required
              className="opacity-0  h-full bg-transparent w-20 border-0"
            />
            <UploadCloud size={30} className="absolute left-0" />
          </label>
        </div>
      </div>
      <SubmitButton />
    </form>
  );
}

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      variant="destructive"
      className="my-5 w-full text-lg font-medium"
      disabled={pending}
    >
      <div className="flex items-center justify-center gap-2">
        <span>{pending ? `در حال افزودن ...` : `افزودن داستان`}</span>
        {pending && (
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-dotted border-neutral-800"></div>
        )}
      </div>
    </Button>
  );
};
