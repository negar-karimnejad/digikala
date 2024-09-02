import { Category, Product, Submenu } from "@/types/types";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductsCard({
  products,
  submenus,
  categories,
}: {
  products: Product[];
  submenus: Submenu[];
  categories: Category[];
}) {
  // Find Submenu by title
  const mobileSubmenu = submenus.find(
    (submenu) => submenu.title === "برندهای مختلف گوشی موبایل"
  );
  const gadgetSubmenu = submenus.find(
    (submenu) => submenu.title === "ساعت و مچ بند هوشمند"
  );

  const electronicSubmenu = submenus.find(
    (submenu) => submenu.title === "لوازم جانبی موبایل"
  );
  const stationerySubmenu = categories.find(
    (category) => category.title === "کتاب، لوازم تحریر و هنر"
  );

  // Filter Products by Submenu
  const mobileProducts = products.filter(
    (product) => product.submenuId === mobileSubmenu._id.toString()
  );
  const electronicProducts = products.filter(
    (product) => product.submenuId === electronicSubmenu._id.toString()
  );
  const gadgetProducts = products.filter(
    (product) => product.submenuId === gadgetSubmenu._id.toString()
  );
  const stationeryProducts = products.filter(
    (product) =>
      product.category._id.toString() === stationerySubmenu._id.toString()
  );

  const productscard = [
    {
      title: "گوشی موبایل",
      href: "/category/mobile/mobile-brands",
      products: mobileProducts,
    },
    {
      title: "لوازم جانبی موبایل",
      href: "/category/mobile/mobile-accessories",
      products: electronicProducts,
    },
    {
      title: "ساعت و مچ بند هوشمند",
      href: "/category/mobile/wearable-gadget",
      products: gadgetProducts,
    },
    {
      title: "لوازم تحریر",
      href: "/category/book-and-media",
      products: stationeryProducts,
    },
  ];

  return (
    <div className="border rounded-xl my-5 mx-3 overflow-hidden">
      <div className="border-l">
        <div className="grid grid-cols-12">
          {productscard.map((item, index) => (
            <div
              key={index}
              className="col-span-3 max-lg:col-span-12 border-l p-5"
            >
              <h3 className="font-irsansb text-neutral-800 dark:text-white">
                {item.title}
              </h3>
              <small className="text-neutral-500 dark:text-neutral-400 text-xs">
                بر اساس سلیقه شما
              </small>
              <div className="grid grid-cols-12 mt-5">
                {item.products.slice(0, 4)?.map((product, index) => (
                  <Link
                    key={index}
                    href={`/products/${product._id}`}
                    className="col-span-6 w-full"
                  >
                    <Image
                      alt="Product Image"
                      width={500}
                      height={500}
                      src={product.thumbnail}
                      className={`p-2 ${index === 0 && "border-b border-l"} ${
                        index === 1 && "border-b"
                      } ${index === 2 && "border-l"}`}
                    />
                  </Link>
                ))}
              </div>
              <button className="text-xs mt-5 text-sky-500 flex justify-center w-full">
                <Link href={item.href} className="flex items-center">
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
