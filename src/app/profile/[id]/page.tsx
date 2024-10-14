import ProfileMain from "@/components/profile/ProfileMain";
import UserInfo from "@/components/profile/UserInfo";
import UserList from "@/components/profile/UserList";
import { authUser } from "@/utils/auth";
import { serializeDoc } from "@/utils/serializeDoc";
import { User } from "@/utils/types";
import connectToDB from "config/mongodb";
import ProductModel from "models/Product";

export default async function ProfileIdPage({
  params: { id },
}: {
  params: { id: string };
}) {
  await connectToDB();
  const user: User = await authUser();
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
    <div className="grid grid-cols-12 gap-5 lg:px-20 pb-20 lg:pt-10">
      <div className="col-span-4 border rounded-md py-5 max-lg:hidden">
        <UserInfo />
        <UserList id={id} />
      </div>
      <div className="col-span-8 max-lg:col-span-12 gap-5">
        <ProfileMain
          user={serializedUser}
          products={serializedProducts}
          id={id}
        />
      </div>
    </div>
  );
}
