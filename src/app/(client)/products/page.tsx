"use client";

import useProducts from "@/hooks/useProducts";
import Image from "next/image";

export default function ProductsPage() {
  const { products, error, loading } = useProducts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  console.log(products);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <Image alt="" width={100} height={100} src={product.thumbnail} />
          <div key={product.id}>
            <div>{product.title}</div>
            {product.image.map((img) => (
              <Image
                key={img.id}
                alt=""
                width={100}
                height={100}
                src={img.url}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
