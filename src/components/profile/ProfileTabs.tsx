import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from "@/utils/cartItemsContext";
import { CartItem, Product } from "@/utils/types";
import { ArrowRight, Search, ShoppingCart, Trash2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import CartItemControls from "../cart/CartItemControls";
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
              حذف
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
      <div className="flex justify-between items-center sm:px-5 px-2">
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
          <TabsList className="flex sm:gap-7 gap-1 border-b sm:px-5 px-2">
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
              <div className="flex items-center justify-center flex-col rounded-md absolute top-4 sm:-left-1 left-2 group-hover:left-2 transition-all sm:opacity-0 group-hover:opacity-100 text-red-500">
                <Trash2
                  onClick={() => handleRemoveProduct(product._id.toString())}
                  size={20}
                  className="mb-3 cursor-pointer"
                />
                <ShoppingcartButton product={product} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

const ShoppingcartButton = ({ product }: { product: Product }) => {
  const [existingProduct, setExistingProduct] = useState<CartItem>();
  const { cart, setCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    setExistingProduct(cart.find((item) => item._id === product._id));
  }, [cart, product._id]);

  const addToCart = (product: Product) => {
    const updatedCart = [...cart];

    const cartItem = {
      _id: product._id,
      title: product.title,
      thumbnail: product.thumbnail,
      guarantee: product.guarantee,
      price: product.price,
      discount_price: product.discount_price,
      discount: product.discount,
      count: 1,
    };

    updatedCart.push(cartItem);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    Swal.fire({
      html: `
      <div>
        <div style="display: flex; align-items: center; gap:10px; padding-bottom: 20px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(58,173,0)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>
          <h2 style="font-size:15px; color:rgb(57, 170, 0)">
          این کالا به سبد خرید اضافه شد!
          </h2>
        </div>
        <div style="display: flex; border-top: 1px solid #e7e7e7;padding-top: 20px; align-items: center; gap:20px">
          <img 
            src="${product.thumbnail}" 
            alt="${product.title}" 
            width="100" 
            height="100" 
            style="border-radius: 8px;"
          />
          <p style="color:#dddcdc;font-weight:bold;font-size: 14px;line-height: 30px; color: #272727;text-align: right;">
            ${product.title}
          </p>
        </div>
      </div>
  `,
      showCloseButton: true,
      confirmButtonColor: "#e11d48",
      confirmButtonText: "برو به سبد خرید",
    }).then((result) => {
      if (result.isConfirmed) {
        router.push("/checkout/cart");
      }
    });
  };
  return (
    <>
      {existingProduct ? (
        <div className="w-full">
          <CartItemControls vertical={true} product={existingProduct} />
        </div>
      ) : (
        <ShoppingCart
          onClick={() => {
            setExistingProduct(cart.find((item) => item._id === product._id));
            addToCart(product);
          }}
          size={20}
          className="cursor-pointer"
        />
      )}
    </>
  );
};
