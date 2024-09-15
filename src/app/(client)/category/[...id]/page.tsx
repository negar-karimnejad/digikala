import CategoryProducts from "@/components/category/CategoryProducts";
import SubmenuProductsContainer from "@/components/category/SubmenuProductsContainer";

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
        <SubmenuProductsContainer id={id} />
      )}
    </>
  );
}
