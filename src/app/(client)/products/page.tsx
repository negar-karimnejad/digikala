"use client";

import useProducts from "@/hooks/useProducts";
import Image from "next/image";

export default function ProductsPage() {
  const { products } = useProducts();

  console.log("products", products);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <div>{product.title}</div>
          {product.image.map((img) => (
            <Image key={img.id} alt="" width={100} height={100} src={img.url} />
          ))}
        </div>
      ))}
    </div>
  );
}
