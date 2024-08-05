"use client";

import useProducts from "@/hooks/useProducts";
import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
  const { products, error, loading } = useProducts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.id}-${product.title.replaceAll(" ", "-")}`}
        >
          <div>
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
        </Link>
      ))}
    </div>
  );
}
