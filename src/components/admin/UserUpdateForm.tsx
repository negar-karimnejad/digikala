"use client";

import { updateUser } from "@/app/admin/users/action";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import { Button } from "../ui/button";

export default function UserUpdateForm({ user }) {
  const router = useRouter();
  const [role, setRole] = useState(user.role || "USER");
  const [file, setFile] = useState<File | null>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    formData.append("_id", String(user._id));
    if (file) {
      formData.append("avatar", file);
    }
    formData.append("role", role);

    try {
      updateUser(formData);
      toast.success("کاربر با موفقیت به روزرسانی شد.");
      router.push("/admin/users");
    } catch (errors) {
      console.log(errors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="h-20 relative">
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={user?.name}
          className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-neutral-300 bg-neutral-50 px-2.5 pb-2.5 pt-5 text-sm text-neutral-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:bg-neutral-900 dark:text-white dark:focus:border-blue-500"
        />
        {/* {state.errors.name && (
          <div className="text-destructive text-xs">{state.errors.name}</div>
        )} */}
        <label
          htmlFor="name"
          className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-neutral-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-neutral-400 peer-focus:dark:text-blue-500"
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
            disabled
            defaultValue={user?.email}
            className="disabled:cursor-not-allowed disabled:opacity-80 peer max-h-20 block w-full appearance-none rounded-t-lg border-0 border-b-2 border-neutral-300 bg-neutral-50 px-2.5 pb-2.5 pt-5 text-sm text-neutral-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:bg-neutral-900 dark:text-white dark:focus:border-blue-500"
          />
          {/* {state.errors.email && (
            <div className="text-destructive text-xs">{state.errors.email}</div>
          )} */}
          <label
            htmlFor="email"
            className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-neutral-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-neutral-400 peer-focus:dark:text-blue-500"
          >
            ایمیل
          </label>
        </div>
      </div>
      <div className="h-20 relative">
        <input
          type="text"
          id="phone"
          name="phone"
          defaultValue={user?.phone}
          className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-neutral-300 bg-neutral-50 px-2.5 pb-2.5 pt-5 text-sm text-neutral-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:bg-neutral-900 dark:text-white dark:focus:border-blue-500"
        />
        {/* {state.errors.name && (
          <div className="text-destructive text-xs">{state.errors.name}</div>
        )} */}
        <label
          htmlFor="phone"
          className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-neutral-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-neutral-400 peer-focus:dark:text-blue-500"
        >
          شماره موبایل
        </label>
      </div>
      <div className="mb-5 text-right">
        <div className="w-full">
          <label
            htmlFor="role"
            className="pb-2 text-sm pr-3 text-neutral-500"
          ></label>
          <Select dir="rtl" required onValueChange={(value) => setRole(value)}>
            <SelectTrigger>
              <SelectValue placeholder="نقش کاربر" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="USER">کاربر عادی</SelectItem>
                <SelectItem value="ADMIN">مدیر</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="mb-5 text-right">
        <div className="w-full">
          <label
            htmlFor="avatar"
            className="pb-2 text-sm pr-3 text-neutral-500"
          >
            پروفایل
          </label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            required={user.avatar == null}
            onChange={handleAvatarChange}
            className="h-full w-full dark:border-neutral-700 dark:bg-neutral-900 rounded-lg p-1"
          />
        </div>
      </div>
      {user.avatar && (
        <Image
          src={user.avatar}
          height={100}
          width={100}
          alt="User Avatar"
          className="object-cover border rounded-lg mx-auto"
        />
      )}
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
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-dotted border-neutral-800"></div>
        )}
      </div>
    </Button>
  );
};
