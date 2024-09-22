import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Product } from "@/types/types";
import { Search, ShoppingCart, Trash2 } from "lucide-react";
import Image from "next/image";
import ProductCard from "../category/ProductCard";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
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
          آیا از حذف محصول از بازدیدهای اخیر اطمینان دارید؟
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
    <div className="border rounded-lg p-5">
      <div className="flex justify-between items-center px-5">
        <h5 className="text-neutral-800 font-irsansb">{title}</h5>
        {searchbar && (
          <button>
            <Search size={20} className="text-neutral-600" />
          </button>
        )}
      </div>
      {tabsArray && (
        <Tabs
          defaultValue={tabsArray[0]}
          className="mt-10"
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
              className="group relative col-span-6"
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
