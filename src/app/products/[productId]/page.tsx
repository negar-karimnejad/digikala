import { Metadata } from "next";

type ParamsProps = {
  params: {
    productId: string;
  };
};

export const generateMetadata = ({ params }: ParamsProps): Metadata => {
  return {
    title: `Product${params.productId}`,
    description: "digikala products page",
  };
};

function Product({ params }: ParamsProps) {
  return <div>Product</div>;
}

export default Product;
