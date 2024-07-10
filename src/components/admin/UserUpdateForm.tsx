"use client";

import { updateUser } from "@/app/admin/_actions/users";
import { User } from "@prisma/client";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import { Button } from "../ui/button";

export default function UserUpdateForm({ user }: { user: User }) {
  const [error, action] = useFormState(updateUser.bind(null, user.id), {});

  return (
    <form
      action={async (formData) => {
        await action(formData);
        return toast.success("کاربر با موفقیت به روزرسانی شد.");
      }}
    >
      <div className="h-20 relative">
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={user?.name}
          className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500"
        />
        {error.name && (
          <div className="text-destructive text-[12px]">{error.name}</div>
        )}
        <label
          htmlFor="name"
          className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
        >
          نام و نام خانوادگی
        </label>
      </div>
      <div className="flex gap-5 w-full h-24">
        <div className="relative w-full">
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={user?.email}
            className="peer max-h-20 block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500"
          />
          {error.email && (
            <div className="text-destructive text-[12px]">{error.email}</div>
          )}
          <label
            htmlFor="email"
            className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            ایمیل
          </label>
        </div>
      </div>
      <div className="mb-5 text-right">
        <label htmlFor="avatar" className="pb-2 text-sm pr-3 text-gray-500">
          پروفایل
        </label>
        <input
          type="file"
          id="avatar"
          name="avatar"
          required
          className="h-full w-full dark:border-gray-700 dark:bg-gray-900 rounded-lg border border-gray-100 p-1"
        />
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
        <span>{pending ? `در حال ویرایش ...` : `ویرایش اطلاعات کاربر`}</span>
        {pending && (
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-dotted border-gray-800"></div>
        )}
      </div>
    </Button>
  );
};
