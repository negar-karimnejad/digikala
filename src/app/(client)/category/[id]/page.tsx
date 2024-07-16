import React from "react";

export default function CategoryPage({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log(id);

  return <div>CategoryPage</div>;
}
