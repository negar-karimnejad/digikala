"use client";

import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export default function useCategories() {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response: AxiosResponse = await axios.get("/api/categories");
        setCategories(response.data.categories);
        return response;
      } catch (error) {
        setError("Failed to fetch categories");
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  return { categories, loading, error };
}
