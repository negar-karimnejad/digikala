import { Product } from "@/utils/types";
import { serializeDoc } from "@/utils/serializeDoc";
import connectToDB from "config/mongodb";
import ProductModel from "models/Product";
import SearchbarForm from "./SearchbarForm";

export default async function Searchbar({
  placeholder,
}: {
  placeholder?: string;
}) {
  await connectToDB();
  const product: Product[] = await ProductModel.find({})
    .populate("images")
    .populate("colors")
    .populate("features")
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

  const serializedProduct = serializeDoc(product);

  return (
    <SearchbarForm placeholder={placeholder} products={serializedProduct} />
  );
}
