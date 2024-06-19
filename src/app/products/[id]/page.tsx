"use client";

import { useParams } from "next/navigation";

function ProductDetails() {
  const { id } = useParams();

  return <h1 className="m-5 font-bold text-lg">Products {id} Details</h1>;
}

export default ProductDetails;
