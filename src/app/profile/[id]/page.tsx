import ProfileMain from "@/components/profile/ProfileMain";
import ProductModel from "models/Product";
import UserInfo from "@/components/profile/UserInfo";
import UserList from "@/components/profile/UserList";
import { serializeDoc } from "@/utils/serializeDoc";

export default async function page({
  params: { id },
}: {
  params: { id: string };
}) {
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

  return (
    <div className="grid grid-cols-12 gap-5 lg:px-20 pb-20 lg:pt-10">
      <div className="col-span-4 border rounded-md py-5 max-lg:hidden">
        <UserInfo />
        <UserList id={id} />
      </div>
      <div className="col-span-8 max-lg:col-span-12 gap-5">
        <ProfileMain products={serializedProducts} id={id} />
      </div>
    </div>
  );
}
