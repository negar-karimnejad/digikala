import { addSubmenu } from "@/app/admin/categories/action";
import { Button } from "@/components/ui/button";
import { Category } from "@/utils/types";
import connectToDB from "config/mongodb";
import CategoryModel from "models/Category";

export default async function CategorySubmenuForm() {
  await connectToDB();
  const categories = await CategoryModel.find({});

  return (
    <form action={addSubmenu}>
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
          نام زیرمجموعه
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
        className="outline-none border rounded-lg py-1 px-3 text-sm"
        required
        name="categoryId"
        id="categoryId"
      >
        <option value="-1">دسته‌بندی مورد نظر را انتخاب کنید</option>
        {categories.map((category: Category) => (
          <option key={category._id.toString()} value={category._id.toString()}>
            {category.title}
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
          افزودن زیرمجموعه
          {/* <span>{pending ? `در حال افزودن ...` : `افزودن زیرمجموعه`}</span>
          {pending && (
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-dotted border-neutral-800"></div>
          )} */}
        </div>
      </Button>
    </form>
  );
}
