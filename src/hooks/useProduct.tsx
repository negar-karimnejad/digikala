"use client";

import { ProductProps } from "@/types/types";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export default function useProduct(id: number) {
  const [product, setProduct] = useState<ProductProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response: AxiosResponse<ProductProps> = await axios.get(
          `/api/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        setError("Failed to fetch product");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [id]);

  return { product, loading, error };
}
