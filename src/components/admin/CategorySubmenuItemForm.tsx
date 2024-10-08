import { addSubmenuItem } from "@/app/admin/categories/action";
import { Button } from "@/components/ui/button";
import { Submenu } from "@/utils/types";
import connectToDB from "config/mongodb";
import SubmenuModel from "models/Submenu";

export default async function CategorySubmenuItemForm() {
  await connectToDB();
  const submenus = await SubmenuModel.find({});

  return (
    <form action={addSubmenuItem}>
      <input type="string" hidden name="_id" value={crypto.randomUUID()} />
      <div className="h-20 relative">
        <input
          type="text"
          id="title"
          name="title"
          required
          className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-neutral-300 bg-neutral-50 px-2.5 pb-2.5 pt-5 text-sm text-neutral-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:bg-neutral-900 dark:text-white dark:focus:border-blue-500"
        />

        <label
          htmlFor="title"
          className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-neutral-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-neutral-400 peer-focus:dark:text-blue-500"
        >
          نام آیتم زیرمجموعه
        </label>
      </div>

      <div className="h-20 relative">
        <input
          type="text"
          id="href"
          name="href"
          required
          autoComplete="off"
          className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-neutral-300 bg-neutral-50 px-2.5 pb-2.5 pt-5 text-sm text-neutral-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:bg-neutral-900 dark:text-white dark:focus:border-blue-500"
        />

        <label
          htmlFor="href"
          className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-neutral-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-neutral-400 peer-focus:dark:text-blue-500"
        >
          آدرس لینک
        </label>
      </div>

      <select
        required
        className="outline-none border rounded-lg py-1 px-3 text-sm"
        name="submenuId"
        id="submenuId"
      >
        <option value="-1">دسته‌بندی مورد نظر را انتخاب کنید</option>
        {submenus.map((submenu: Submenu) => (
          <option key={submenu._id.toString()} value={submenu._id.toString()}>
            {submenu.title}
          </option>
        ))}
      </select>
      <Button
        type="submit"
        variant="destructive"
        className="my-5 w-full text-lg font-medium"
        // disabled={pending}
      >
        <div className="flex items-center justify-center gap-2">
          افزودن آیتم زیرمجموعه
          {/* <span>{pending ? `در حال افزودن ...` : `افزودن آیتم زیرمجموعه`}</span>
        {pending && (
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-dotted border-neutral-800"></div>
        )} */}
        </div>
      </Button>
    </form>
  );
}
