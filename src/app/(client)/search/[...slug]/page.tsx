import { Metadata } from "next";

export async function generateMetadata({
  params: { slug },
}): Promise<Metadata> {
  return {
    title: slug[1],
  };
}

export default function SearchCategoryPage({
  params: { slug },
}: {
  params: { slug: string[] };
}) {
  return <div>SearchCategoryPage</div>;
}
