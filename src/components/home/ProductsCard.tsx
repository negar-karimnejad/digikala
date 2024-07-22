import { productscard } from "@/data/data";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductsCard() {
  return (
    <div className="border rounded-xl my-5 overflow-hidden">
      <div className="border-l">
        <div className="grid grid-cols-12">
          {productscard.map((product) => (
            <div key={product.id} className="col-span-3 border-l p-5">
              <h3 className="font-irsansb text-gray-800">{product.title}</h3>
              <small className="text-gray-500 text-xs">بر اساس سلیقه شما</small>
              <div className="flex flex-wrap mt-5">
                {product.image.map((item, index) => (
                  <Link href={item.href} key={index}>
                    <Image
                      alt=""
                      width={120}
                      height={120}
                      src={item.src}
                      className={`p-2 ${index === 0 && "border-b border-l"} ${
                        index === 1 && "border-b"
                      } ${index === 2 && "border-l"}`}
                    />
                  </Link>
                ))}
              </div>
              <button className="text-xs mt-5 mx-auto  flex items-center text-sky-500">
                مشاهده <ChevronLeft size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
