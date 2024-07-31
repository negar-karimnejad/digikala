("use client");

import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export default function useProducts() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response: AxiosResponse = await axios.get("/api/products");
        setProducts(response.data.products);
        return response;
      } catch (error) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return { products, loading, error };
}
