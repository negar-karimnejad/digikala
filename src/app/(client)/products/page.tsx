import Image from "next/image";
import Link from "next/link";
import ProductModel from "models/Product";

export default async function ProductsPage() {
  const products = await ProductModel.find({});

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
