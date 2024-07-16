export default function SearchCategoryPage({
  params: { slug },
}: {
  params: { slug: string[] };
}) {
  console.log(slug[1]);

  return <div>SearchCategoryPage</div>;
}
