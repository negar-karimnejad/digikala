import { productscard } from "@/data/data";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductsCard() {
  return (
    <div className="border rounded-xl my-5 mx-3 overflow-hidden">
      <div className="border-l">
        <div className="grid grid-cols-12">
          {productscard.map((product) => (
            <div
              key={product.id}
              className="col-span-3 max-lg:col-span-12 border-l p-5"
            >
              <h3 className="font-irsansb text-gray-800 dark:text-white">{product.title}</h3>
              <small className="text-gray-500 text-xs">بر اساس سلیقه شما</small>
              <div className="grid grid-cols-12 mt-5">
                {product.images.map((image, index) => (
                  <Link href={image.href} key={index} className="col-span-6 w-full">
                    <Image
                      alt="Product Image"
                      width={500}
                      height={500}
                      src={image.src}
                      className={`p-2 ${index === 0 && "border-b border-l"} ${
                        index === 1 && "border-b"
                      } ${index === 2 && "border-l"}`}
                    />
                  </Link>
                ))}
              </div>
              <button className="text-xs mt-5 text-sky-500 flex justify-center w-full">
                <Link href={product.href} className="flex items-center">
                  مشاهده <ChevronLeft size={20} />
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
