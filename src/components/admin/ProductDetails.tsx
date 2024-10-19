import { Product } from "@/utils/types";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function ProductDetails({
  product,
}: {
  product?: Product | null;
}) {
  return (
    <div className="px-4 overflow-y-auto h-96">
      <div className="flex flex-col items-center">
        <Image
          width={300}
          height={300}
          alt={product.title}
          src={product.thumbnail}
          className="object-contain"
        />
        <div className="relative bg-gray-800 text-white px-2 py-1 rounded-xl my-4 gap-2 items-center justify-center">
          <p className="text-lg">{product.price?.toLocaleString()} تومان</p>
          <p className="absolute -top-2 -left-5 -rotate-12 bg-red-500 text-sm text-white rounded-full text-center px-2">
            %{product.discount}
          </p>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm text-justify leading-6">
          {product.description}
        </p>
      </div>
    </div>
  );
}
