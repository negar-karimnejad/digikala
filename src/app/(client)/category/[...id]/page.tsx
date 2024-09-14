import CategoryProducts from "@/components/category/categoryProducts";
import SubmenuProducts from "@/components/category/SubmenuProducts";

export default async function CategoryPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <>
      {id.length === 1 ? (
        <CategoryProducts id={id} />
      ) : (
        <SubmenuProducts id={id} />
      )}
    </>
  );
}
