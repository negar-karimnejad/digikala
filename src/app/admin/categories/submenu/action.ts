import db from "@/db/db";
import { CategorySubmenusSchema } from "@/lib/validation";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addSubmenu(_state, formData: FormData) {
  const result = CategorySubmenusSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  console.log("😎🤞😎🤞", formData)
  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;

  await db.submenu.create({
    data: {
      title: data.title,
      href: data.href,
      categoryId: data.categoryId,
    },
  });
  const submenus = await db.submenu.findMany({ orderBy: { id: "asc" } });
  console.log("😎🤞😎🤞", submenus);

  revalidatePath("/");
  revalidatePath("/categories");

  redirect("/admin/categories");
}
