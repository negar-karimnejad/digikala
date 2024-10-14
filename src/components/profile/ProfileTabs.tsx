import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from "@/utils/cartItemsContext";
import { CartItem, Product, User } from "@/utils/types";
import {
  ArrowRight,
  Mail,
  Milestone,
  Phone,
  Search,
  ShoppingCart,
  Trash2,
  User2,
} from "lucide-react";
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
  user,
}: {
  tabsArray?: string[];
  src: string;
  title: string;
  searchbar?: boolean;
  products?: Product[];
  user?: User;
}) {
  const router = useRouter();
  const { cart, deleteFromCart } = useCart();

  const [recentViewProducts, setRecentViewProducts] = useState<Product[]>([]);
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getRecentViews = () =>
      JSON.parse(localStorage.getItem("recentViews") || "[]");
    const getFavorites = () =>
      JSON.parse(localStorage.getItem("favorites") || "[]");

    const recentViewIds = getRecentViews();
    const favoriteIds = getFavorites();

    setRecentViewProducts(
      products?.filter((product) => recentViewIds.includes(product._id)) || []
    );
    setFavoriteProducts(
      products?.filter((product) => favoriteIds.includes(product._id)) || []
    );
  }, [products]);

  const updateLocalStorage = (key: string, updatedItems: string[]) => {
    localStorage.setItem(key, JSON.stringify(updatedItems));
  };

  const handleRemoveProduct = (
    productId: string,
    productList: Product[],
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>,
    key: string,
    message: string
  ) => {
    toast(
      (t) => (
        <div>
          آیا از حذف محصول مطمئنید؟
          <div className="flex justify-end mt-3">
            <Button
              className="ml-1 mr-5"
              variant="secondary"
              onClick={() => toast.dismiss(t.id)}
            >
              انصراف
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                const updatedItems = productList.filter(
                  (product) => product._id.toString() !== productId
                );
                updateLocalStorage(
                  key,
                  updatedItems.map((product) => product._id.toString())
                );
                setProducts(updatedItems);
                toast.dismiss(t.id);
                toast.success(message);
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
      {recentViewProducts?.length === 0 &&
        cart?.length === 0 &&
        favoriteProducts?.length === 0 &&
        tabsArray && (
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
        {title === "تاریخچه سفارشات" &&
          cart &&
          renderProducts(cart, deleteFromCart)}

        {title === "بازدیدهای اخیر" &&
          recentViewProducts &&
          renderProducts(recentViewProducts, (id) =>
            handleRemoveProduct(
              id,
              recentViewProducts,
              setRecentViewProducts,
              "recentViews",
              "محصول از بازدیدهای اخیر شما حذف شد."
            )
          )}

        {title === "لیست‌ها" &&
          favoriteProducts &&
          renderProducts(favoriteProducts, (id) =>
            handleRemoveProduct(
              id,
              favoriteProducts,
              setFavoriteProducts,
              "favorites",
              "محصول از لیست علاقه مندی های شما حذف شد."
            )
          )}
        {title === "آدرس‌" && user.address.city && (
          <>
            <div className="px-4 sm:col-span-6 col-span-12 space-y-3 text-sm text-neutral-400">
              <p className="font-irsansb dark:text-white text-neutral-700">
                {user.address.street}
              </p>
              <p className="flex items-center gap-1 mt-5">
                <Milestone size={18} />
                {user.address.city}
              </p>
              <p className="flex items-center gap-1">
                <Mail size={18} />
                {user.address.postalcode}
              </p>
              <p className="flex items-center gap-1">
                <Phone size={18} />
                {user.phone}
              </p>
              <p className="flex items-center gap-1">
                <User2 size={18} />
                {user.name}
              </p>
            </div>
            <div className="px-4 sm:col-span-6 col-span-12">
              <Image
                alt="emptyAddress"
                width={400}
                height={400}
                src="/profile/emptyAddress.webp"
                className="dark:hidden"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const renderProducts = (
  products: Product[] | CartItem[],
  removeHandler: (id: string) => void
) => {
  return products.map((product) => (
    <div
      key={product._id.toString()}
      className="group relative lg:col-span-6 col-span-12"
    >
      <ProductCard product={product} />
      <div className="flex items-center justify-center flex-col rounded-md absolute top-4 sm:-left-1 left-2 group-hover:left-2 transition-all sm:opacity-0 group-hover:opacity-100 text-red-500">
        <Trash2
          onClick={() => removeHandler(product._id.toString())}
          size={20}
          className="mb-3 cursor-pointer"
        />
        <ShoppingCartButton product={product} />
      </div>
    </div>
  ));
};

const ShoppingCartButton = ({ product }: { product: Product }) => {
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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(58,173,0)" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>
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
