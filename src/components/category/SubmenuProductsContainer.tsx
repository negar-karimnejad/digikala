import NotFound from "@/app/not-found";
import { serializeDoc } from "@/utils/serializeDoc";
import { Product, Submenu } from "@/utils/types";
import connectToDB from "config/mongodb";
import CategoryModel from "models/Category";
import ProductModel from "models/Product";
import SubmenuModel from "models/Submenu";
import BreadcrumbContainer from "../product/BreadcrumbContainer";
import SubmenuProductsMain from "./SubmenuProductsMain";

export default async function SubmenuProductsContainer({ id }: { id: string }) {
  await connectToDB();
  const submenu: Submenu = await SubmenuModel.findOne({
    href: `/category/${id[0]}/${id[1]}`,
  })
    .populate({
      path: "items",
    })
    .lean();

  if (!submenu) return NotFound();

  const products: Product[] = await ProductModel.find({})
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

  // Category Products
  const submenuProducts = products.filter(
    (product) => product.submenuId === submenu?._id.toString()
  );
  const category = await CategoryModel.findOne({ _id: submenu.categoryId })
    .populate({
      path: "submenus",
      populate: {
        path: "items",
      },
    })
    .lean();

  const serializedCategory = serializeDoc(category);
  const serializedSubmenu = serializeDoc(submenu);
  const serializedSubmenuProducts = serializeDoc(submenuProducts);

  return (
    <div className="lg:py-5">
      <div className="px-4 breadcrumb-container flex overflow-x-auto overflow-y-hidden hide-scrollbar">
        <BreadcrumbContainer
          category={serializedCategory}
          submenu={serializedSubmenu}
        />
      </div>
      <div className="grid grid-cols-12 gap-5 lg:mt-10">
        <SubmenuProductsMain
          category={serializedCategory}
          submenu={serializedSubmenu}
          products={serializedSubmenuProducts}
        />
      </div>
    </div>
  );
}
