"use client";

import { SubmenuItem } from "@prisma/client";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export default function useSubmenuItems() {
  const [submenuItems, setSubmenuItems] = useState<SubmenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSubmenuItems() {
      try {
        const response: AxiosResponse<SubmenuItem[]> = await axios.get(
          "/api/submenuItems"
        );
        setSubmenuItems(response.data);
      } catch (error) {
        setError("Failed to fetch submenuItems");
      } finally {
        setLoading(false);
      }
    }

    fetchSubmenuItems();
  }, []);

  return { submenuItems, loading, error };
}
