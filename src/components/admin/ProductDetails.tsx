import { Product } from "@prisma/client";

export default function ProductDetails({
  product,
}: {
  product?: Product | null;
}) {
  return <div>{product?.description}</div>;
}
