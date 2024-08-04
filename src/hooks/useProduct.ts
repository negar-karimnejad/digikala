"use client";

import { Image, Product } from "@prisma/client";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

interface ProductIncludeImage extends Product {
  image: Image[];
}

export default function useProduct(id: number) {
  const [product, setProduct] = useState<ProductIncludeImage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response: AxiosResponse<ProductIncludeImage> = await axios.get(
          `/api/product/${id}`
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
