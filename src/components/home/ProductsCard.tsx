import { Category, Product, Submenu } from "@/utils/types";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductsCard({
  products,
  submenus,
  categories,
  cardNum,
}: {
  products: Product[];
  submenus: Submenu[];
  categories: Category[];
  cardNum: string;
}) {
  // First ProductCard=>  Find Submenu by title
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

  // Last ProductCard=>  Find Submenu by title
  const supermarketCategory = categories.find(
    (category) => category.title === "کالای خوراکی و اساسی"
  );
  const electronicCategory = categories.find(
    (category) => category.title === "کالای دیجیتال"
  );
  const homeCategory = categories.find(
    (category) => category.title === "خانه و آشپزخانه"
  );
  const apparelCategory = categories.find(
    (category) => category.title === "مد و پوشاک"
  );

  // First ProductCard=> Filter Products by Submenu
  const mobileProducts = products.filter(
    (product) => product.submenuId === mobileSubmenu._id.toString()
  );
  const mobileAccessoriesProducts = products.filter(
    (product) => product.submenuId === electronicSubmenu._id.toString()
  );
  const gadgetProducts = products.filter(
    (product) => product.submenuId === gadgetSubmenu._id.toString()
  );
  const stationeryProducts = products.filter(
    (product) =>
      product.category._id.toString() === stationerySubmenu._id.toString()
  );

  // Last ProductCard=> Filter Products by Submenu
  const supermarketProducts = products.filter(
    (product) =>
      product.category._id.toString() === supermarketCategory._id.toString()
  );
  const electronicProducts = products.filter(
    (product) =>
      product.category._id.toString() === electronicCategory._id.toString()
  );
  const homeProducts = products.filter(
    (product) => product.category._id.toString() === homeCategory._id.toString()
  );
  const apparelProducts = products.filter(
    (product) =>
      product.category._id.toString() === apparelCategory._id.toString()
  );

  const firstProductscard = [
    {
      title: "گوشی موبایل",
      href: "/category/mobile/mobile-brands",
      products: mobileProducts,
    },
    {
      title: "لوازم جانبی موبایل",
      href: "/category/mobile/mobile-accessories",
      products: mobileAccessoriesProducts,
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

  const lastProductscard = [
    {
      title: "کالاهای سوپرمارکتی",
      href: "/category/food-beverage",
      products: supermarketProducts,
    },
    {
      title: "لپ تاپ و کالای دیجیتال",
      href: "/category/electronic-devices",
      products: electronicProducts,
    },
    {
      title: "خانه و آشپزخانه",
      href: "/category/home-and-kitchen",
      products: homeProducts,
    },
    {
      title: "مد و پوشاک",
      href: "/category/apparel",
      products: apparelProducts,
    },
  ];

  return (
    <div className="border rounded-xl my-5 mx-3 overflow-hidden">
      <div className="border-l">
        <div className="grid grid-cols-12">
          {cardNum === "first" &&
            firstProductscard.map((item, index) => (
              <ProductCard key={index} item={item} index={index} />
            ))}
          {cardNum === "last" &&
            lastProductscard.map((item, index) => (
              <ProductCard key={index} item={item} index={index} />
            ))}
        </div>
      </div>
    </div>
  );
}

const ProductCard = ({ item, index }) => {
  return (
    <div className="col-span-3 max-lg:col-span-12 border-l p-5">
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
  );
};
