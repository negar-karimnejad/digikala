import Image from "next/image";
import Link from "next/link";
import ProductModel from "models/Product";
import { Product, ProductImage } from "@/types/types";

export default async function ProductsPage() {
  const products = await ProductModel.find({})
    .populate("images")
    .populate("colors")
    .populate("features")
    .populate({
      path: "category",
      populate: {
        path: "submenus",
        populate: {
          path: "items",
        },
      },
    });

  return (
    <div>
      {products.map((product: Product) => (
        <Link key={product._id.toString()} href={`/products/${product._id}`}>
          <div>
            <Image alt="" width={100} height={100} src={product.thumbnail} />
            <div key={product._id.toString()}>
              <div>{product.title}</div>
              {product.images.map((img: ProductImage) => (
                <Image
                  key={img._id.toString()}
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
