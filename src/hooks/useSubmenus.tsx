"use client";

import { Submenu } from "@prisma/client";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export default function useSubmenus() {
  const [submenus, setSubmenus] = useState<Submenu[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSubmenus() {
      try {
        const response: AxiosResponse<Submenu[]> = await axios.get(
          "/api/submenus"
        );
        setSubmenus(response.data);
      } catch (error) {
        setError("Failed to fetch submenus");
      } finally {
        setLoading(false);
      }
    }

    fetchSubmenus();
  }, []);

  return { submenus, loading, error };
}
