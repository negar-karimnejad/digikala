import { Product } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

export async function getProducts() {
  try {
    const response: AxiosResponse = await axios.get("/api/products");
    return response;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

function useProducts() {
  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  const products: Product[] = data?.data;
  return { products, error, isLoading, isFetching };
}

export default useProducts;
