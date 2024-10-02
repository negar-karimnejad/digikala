import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Product } from "@/utils/types";
import { ArrowRight, Search, ShoppingCart, Trash2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ProductCard from "../category/ProductCard";
import { Button } from "../ui/button";

export default function ProfileTabs({
  tabsArray,
  src,
  title,
  searchbar,
  products,
}: {
  tabsArray?: string[];
  src: string;
  title: string;
  searchbar?: boolean;
  products?: Product[];
}) {
  const router = useRouter();
  const [recentViewProducts, setRecentViewProducts] = useState<Product[]>([]);

  const getRecentViews = () => {
    return JSON.parse(localStorage.getItem("recentViews")) || [];
  };

  // Function to update recent views in localStorage
  const updateRecentViews = (updatedViews: string[]) => {
    localStorage.setItem("recentViews", JSON.stringify(updatedViews));
  };

  const handleRemoveProduct = (productId: string) => {
    toast(
      (t) => (
        <div>
          آیا از حذف محصول از بازدیدهای اخیر مطمئنید؟
          <div className="flex justify-end mt-3">
            <Button
              className="ml-1 mr-5 "
              variant={"secondary"}
              onClick={() => toast.dismiss(t.id)}
            >
              انصراف
            </Button>
            <Button
              variant={"destructive"}
              onClick={async () => {
                const updatedRecentViews = getRecentViews().filter(
                  (id: string) => id !== productId
                );
                updateRecentViews(updatedRecentViews);

                const filteredProducts = recentViewProducts.filter(
                  (product) => product._id.toString() !== productId
                );
                setRecentViewProducts(filteredProducts);
                toast.dismiss(t.id);
                toast.success("محصول از بازدیدهای اخیر شما حذف شد.");
              }}
            >
              خروج از حساب
            </Button>
          </div>
        </div>
      ),
      { position: "top-left" }
    );
  };

  useEffect(() => {
    const recentviewsIds = getRecentViews();
    const filteredProducts = products?.filter((product: Product) =>
      recentviewsIds.includes(product._id)
    );
    setRecentViewProducts(filteredProducts);
  }, [products]);

  return (
    <div className="lg:border rounded-lg py-5">
      <div className="flex justify-between items-center px-5">
        <h5 className="gap-2 text-neutral-800 dark:text-white font-irsansb flex items-center">
          <span
            className="lg:hidden cursor-pointer"
            onClick={() => router.push("/profile")}
          >
            <ArrowRight size={20} />
          </span>
          {title}
        </h5>
        {searchbar && (
          <button>
            <Search
              size={20}
              className="dark:text-neutral-300 text-neutral-600"
            />
          </button>
        )}
      </div>
      <div className="w-full h-2 dark:bg-neutral-700 bg-neutral-100 lg:hidden my-3"></div>
      {tabsArray && (
        <Tabs
          defaultValue={tabsArray[0]}
          className="lg:mt-10"
          style={{ direction: "rtl" }}
        >
          <TabsList className="flex gap-7 border-b px-5">
            {tabsArray.map((tab, index) => (
              <TabsTrigger key={index} value={tab}>
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabsArray.map((tab, index) => (
            <TabsContent key={index} value={tab}>
              <div className="min-h-96 flex flex-col gap-4 items-center justify-center">
                <Image src={src} alt="order-empty" width={180} height={200} />
                <p className="text-sm">هنوز هیچ {title}ی ندارید</p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      )}

      <div className="grid grid-cols-12 mt-10">
        {recentViewProducts &&
          recentViewProducts.map((product) => (
            <div
              key={product._id.toString()}
              className="group relative lg:col-span-6 col-span-12"
            >
              <ProductCard product={product} />
              <div className="rounded-md absolute top-4 -left-1 group-hover:left-2 transition-all opacity-0 group-hover:opacity-100 text-red-500">
                <Trash2
                  onClick={() => handleRemoveProduct(product._id.toString())}
                  size={20}
                  className="mb-3 cursor-pointer"
                />
                <ShoppingCart size={20} className="cursor-pointer" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
