import CartContainer from "@/components/cart/CartContainer";
import FreeShipping from "@/components/cart/FreeShipping";
import RecentViews from "@/components/cart/RecentViews";
import ShoppincartItems from "@/components/cart/ShoppincartItems";
import { authUser } from "@/utils/auth";
import { serializeDoc } from "@/utils/serializeDoc";
import connectToDB from "config/mongodb";
import ProductModel from "models/Product";

export default async function Cart() {
  await connectToDB();
  const user = await authUser();

  const products = await ProductModel.find({})
    .populate({
      path: "category",
      populate: {
        path: "submenus",
        populate: {
          path: "items",
        },
      },
    })
    .lean();

  const serializedProducts = serializeDoc(products);
  const serializedUser = serializeDoc(user);

  return (
    <CartContainer>
      <div className="border-b">
        <h5 className="text-red-500 border-b-4 px-2 w-1/2 lg:w-fit font-irsansb text-center border-b-red-500 pb-2">
          سبد خرید
        </h5>
      </div>
      <FreeShipping />

      <ShoppincartItems user={serializedUser} />
      <div className="border-b-8"></div>
      <div className="border rounded-lg max-lg:mx-4 py-5">
        <h5 className="border-b-2 text-sm mx-5 w-fit font-irsansb border-b-red-500 pb-2">
          بازدیدهای اخیر
        </h5>
        <RecentViews products={serializedProducts} />
      </div>
    </CartContainer>
  );
}
