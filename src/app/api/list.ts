import connectToDB from "lib/mongodb";
import ProductModel from "models/Product";

export default async function handler(request, response) {
  await connectToDB();
  const products = await ProductModel.find({})
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
  // .limit(10)
  // .toArray();
  console.log("products🏆🏆🏆", products);

  response.status(200).json(products);
}
